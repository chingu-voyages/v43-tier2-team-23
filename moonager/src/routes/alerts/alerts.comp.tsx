import { useState, useContext } from "react";
import "../alerts/alerts.styles.scss";
import { AlertsProps } from "./alerts-types";
import { DataContext } from "../../context/DataContext";
import Alert from "./Alert.comp";

function Alerts(props: AlertsProps) {
  const { data, setData } = useContext(DataContext);

  const [formThreshold, setFormThreshold] = useState(props.alertThreshold);

  const thresholdSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.setAlertThreshold(formThreshold);
  };

  const allocate = () => {
    
  }

  return (
    <div className={`alerts ${props.menuIsOpen ? "open" : "closed"}`}>
      <h1>Alerts</h1>

      <div className="threshold">
        <form onSubmit={thresholdSubmit}>
          <label>
            <h5>Set Alert Threshold</h5>
          </label>
          <br />
          <input
            type="number"
            step="100"
            min="0"
            value={formThreshold}
            onChange={(e) => setFormThreshold(Number(e.target.value))}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          {"("}Alerts sent when resource levels within any given pod fall below
          the threshold value{")"}
        </p>
      </div>

      <div className="active-alerts">
        <h5>Active Alerts</h5>
        <div className="alerts-container">
          {data.alerts.map((alert) => {
            return <Alert alert={alert} alertThreshold={props.alertThreshold} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Alerts;
