import { useState, useContext } from "react";
import styles from "./Request.module.scss";
import { DataContext } from '../../../context/DataContext';
import { manipulateReserves, manipulatePodSupplies } from "../../../context/dataUtils";

function Request() {
  const formInitial = {
    resource: "",
    quantity: 0,
    pod: "",
  };

  const { podDataState, setPodDataState, suppliesDataState, setSuppliesDataState, } = useContext(DataContext);

  const [form, setForm] = useState({ ...formInitial });

  const [formAlert, setformAlert] = useState("");

  const plusQuantity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newQuantity = form.quantity + 10;
    const maxQuantity = (podDataState.find((pod) => {
      return pod.name === form.pod;
    })?.supplies as any)[form.resource.toLowerCase()];
    if (newQuantity > maxQuantity) {
      setformAlert(
        `Quantity must be below total available pod supplies (${maxQuantity})`
      );
      return;
    }
    setForm({ ...form, quantity: newQuantity });
    setformAlert("");
  };
  const minusQuantity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newQuantity = form.quantity - 10;
    if (newQuantity < 0) {
      setformAlert("quantity must be above 0");
      return;
    }
    setForm({ ...form, quantity: newQuantity });
    setformAlert("");
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const maxQuantity = (podDataState.find((pod) => {
      return pod.name === form.pod;
    })?.supplies as any)[form.resource.toLowerCase()];

    if (form.resource.length < 1) {
      setformAlert("please provide a resource to request");
      return;
    } else if (form.pod.length < 1) {
      setformAlert("please provide a pod to request from.");
      return;
    } else if (form.quantity > maxQuantity) {
      setformAlert(
        `Quantity must be below available pod supplies (${maxQuantity})`
      );
      return;
    }

    //@ts-ignore
    setSuppliesDataState(manipulateReserves(suppliesDataState, form.resource, form.quantity));
    //@ts-ignore
    setPodDataState(manipulatePodSupplies(podDataState, form.pod, form.resource, -form.quantity));
    setformAlert("Submitted!");
    setForm({...form, quantity: 0});
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
        {suppliesDataState.map((supply) => (
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
        defaultValue="Pod"
        onChange={(e) => setForm({ ...form, pod: e.target.value })}
      >
        <option disabled hidden>
          Pod
        </option>
        {podDataState.map((pod) => (
          <option key={pod.id}>{pod.name}</option>
        ))}
      </select>

      {formAlert.length > 0 ? <>{formAlert}</> : null}

      <button type="submit">Request</button>
    </form>
  );
}

export default Request;
