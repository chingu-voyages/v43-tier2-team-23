import './Alert.styles.scss';
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { allocateReserves } from '../../context/dataUtils';

function Alert(props: any) {

  const [openAllocate, setOpenAllocate] = useState(false);

  const { data, setData } = useContext(DataContext);

  const units = data.supplies.filter((supply) => supply.name.toLowerCase() === props.alert.supply)[0]?.units;

  const [reserves, setReserves] = useState(data.supplies.find((supply) => supply.name.toLowerCase() === props.alert.supply)?.value);
  useEffect(() => {
    setReserves(data.supplies.find((supply) => supply.name.toLowerCase() === props.alert.supply)?.value);
  }, [data])

  const allocateHandler = () => {
    setOpenAllocate((cur) => !cur);
  }

  const [sendAmount, setSendAmount] = useState(props.alertThreshold - props.alert.amount)
  const sendResources = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const maxQuantity = data.supplies.find((supply) => supply.name.toLowerCase() === props.alert.supply)?.value;
    if (!maxQuantity) return; // edgecase shouldnt be the case ever
    if (sendAmount > maxQuantity) {
        window.alert('Amount exceeding current supply reserve value');
        return;
    } else {
        //@ts-ignore
        setData(allocateReserves(data, props.alert.supply, sendAmount, props.alert.pod));
    }
  }
  
  if (!openAllocate) {
    return (
      <div className="alert">

        <div
            style={{
            height: "35px",
            backgroundColor: 'white',
            margin: "0px",
            borderTopLeftRadius: '12.5px',
            borderTopRightRadius: '12.5px'
            }}
        >
          <div style={{width: '100%', height: '100%', backgroundColor: props.alert.pod.split(" ")[0], opacity: '0.66', borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}>
          </div>
        </div>
        <h6 >{props.alert.pod}</h6>

        <p>
            <span className="warn">! &nbsp; Low {props.alert.supply} </span>
        </p>
        <p>
            <span className='warn' >{props.alert.amount}</span> {units}
            <br/>
            remaining
        </p>
        <button onClick={allocateHandler} >
            Allocate
        </button>

      </div>
    );
  } else {
    return (
      <div className="alert">
        <form onSubmit={sendResources} >

            <p >
                Sending
                <input type='number' value={sendAmount} onChange={(e) => setSendAmount(Number(e.target.value))} step='10' />
                {units} to {props.alert.pod}
            </p>
            <button type='button' onClick={allocateHandler} >
                Cancel
            </button>
            <button type='submit' >
                Send
            </button>
        </form>
      </div>
    )
  }
}

export default Alert;
