import { useState } from "react";
import styles from './Request.module.scss';
import { suppliesArray } from "../../../../backend/supplies";
import { pods } from "../../../../backend/pods";

function Request() {
  
  const formInitial = {
    resource: '',
    quantity: 0,
    pod: ''
  };
  
  const [form, setForm] = useState({...formInitial})
    
  const [formAlert, setformAlert] = useState('');

  const plusQuantity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newQuantity = form.quantity + 10;
    const maxQuantity = suppliesArray.filter((supply) => supply.name === form.resource)[0]?.value
    if (newQuantity > maxQuantity) {
      setformAlert(`Quantity must be below total supply reserves (${maxQuantity})`);
      return;
    }
    setForm({...form, quantity: newQuantity});
    setformAlert('')
  }
  const minusQuantity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newQuantity = form.quantity - 10;
    if (newQuantity < 0) {
      setformAlert('quantity must be above 0')
      return;
    }
    setForm({...form, quantity: newQuantity})
    setformAlert('');
  }

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const maxQuantity = suppliesArray.filter((supply) => supply.name === form.resource)[0]?.value;
    if (form.resource.length < 1) {
        setformAlert('please provide a resource to request');
        return;
    } else if (form.pod.length < 1) {
        setformAlert('please provide a pod to request from.');
        return;
    } else if (form.quantity > maxQuantity) {
      setformAlert(`Quantity must be below total supply reserves (${maxQuantity})`);
      return;
    }
    console.log('submitted');
    setformAlert('Submitted!');
    setForm({...formInitial});
  }
    
  return (
    <form onSubmit={submitHandler} className={styles.form} >

      <select required defaultValue='Resource'
        onChange={(e) =>
          setForm({...form, resource: e.target.value })
        }
      >
        <option disabled hidden >Resource</option>
        {suppliesArray.map((supply) => (
          <option key={supply.id}>{supply.name}</option>
        ))}
      </select>

      <div className={styles['num-input']} >
        <button onClick={minusQuantity} type='button' className={`${styles['num-button']} ${styles['left-button']}`} >-</button>
        <input type="number" min='1' value={form.quantity} required
          onChange={(e) =>
            setForm({...form, quantity: Number(e.target.value) })
          }
        />
        <button id='plus' onClick={plusQuantity} type='button' className={`${styles['num-button']} ${styles['right-button']}`} >+</button>
      </div>

      <select required defaultValue='Pod'
        onChange={(e) =>
            setForm({...form, pod: e.target.value })
        }
      >
        <option disabled hidden >Pod</option>
        {pods.map((pod) => (
          <option key={pod.id}>{pod.name}</option>
        ))}
      </select>

        {formAlert.length > 0 ? <>{formAlert}</> : null}

      <button type='submit' >Request</button>

    </form>
  );
}

export default Request;