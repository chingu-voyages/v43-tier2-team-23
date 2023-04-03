import { useState, useContext } from "react";
import styles from "./Allocate.module.scss";
import { DataContext } from '../../../context/DataContext';

function Allocate() {
  const formInitial = {
    resource: "",
    quantity: 0,
    destination: "",
  };
  
  const {data, setData} = useContext(DataContext);

  const [form, setForm] = useState({ ...formInitial });

  const [formAlert, setFormAlert] = useState("");

  const plusQuantity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newQuantity = form.quantity + 10;
    const maxQuantity = data.supplies.filter(
      (supply) => supply.name === form.resource
    )[0]?.value;
    console.log(maxQuantity);
    if (newQuantity > maxQuantity) {
      setFormAlert(
        `Quantity must be below total supply reserves (${maxQuantity})`
      );
      return;
    }
    setForm({ ...form, quantity: newQuantity });
    setFormAlert("");
  };
  const minusQuantity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newQuantity = form.quantity - 10;
    if (newQuantity < 0) {
      setFormAlert("quantity must be above 0");
      return;
    }
    setForm({ ...form, quantity: newQuantity });
    setFormAlert("");
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const maxQuantity = data.supplies.filter(
      (supply) => supply.name === form.resource
    )[0]?.value;
    if (form.resource.length < 1) {
      setFormAlert("please provide a resource to allocate");
      return;
    } else if (form.destination.length < 1) {
      setFormAlert("please provide a destination to allocate to");
      return;
    } else if (form.quantity > maxQuantity) {
      setFormAlert(
        `Quantity must be below total supply reserves (${maxQuantity})`
      );
      return;
    }
    console.log("submitted");
    setFormAlert("Submitted!");
    setForm({ ...formInitial });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <select
        required
        defaultValue="Resource"
        onChange={(e) => setForm({ ...form, resource: e.target.value })}
      >
        <option disabled hidden>
          Resource
        </option>
        {data.supplies.map((supply) => (
          <option key={supply.name}>{supply.name}</option>
        ))}
      </select>

      <div className={styles["num-input"]}>
        <button
          onClick={minusQuantity}
          type="button"
          className={`${styles["num-button"]} ${styles["left-button"]}`}
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={form.quantity}
          required
          onChange={(e) =>
            setForm({ ...form, quantity: Number(e.target.value) })
          }
        />
        <button
          id="plus"
          onClick={plusQuantity}
          type="button"
          className={`${styles["num-button"]} ${styles["right-button"]}`}
        >
          +
        </button>
      </div>

      <select
        required
        defaultValue="Destination"
        onChange={(e) => setForm({ ...form, destination: e.target.value })}
      >
        <option disabled hidden>
          Destination
        </option>
        {data.pods.map((pod) => (
          <option key={pod.id}>{pod.name}</option>
        ))}
      </select>

      {formAlert.length > 0 ? <>{formAlert}</> : null}

      <button type="submit">Send</button>
    </form>
  );
}

export default Allocate;
