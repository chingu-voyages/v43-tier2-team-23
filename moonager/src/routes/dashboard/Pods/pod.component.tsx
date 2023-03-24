import { PodType } from "./pods.types";

export const Pod = ({ pod }: PodType) => {
  const { name, population } = pod;
  const { electricity, water, oxygen, food } = pod.supplies;
  return (
    <>
      <div className="pod-placeholder">
        <p>{name}</p>
        <p>Population: {population}</p>
        <ul className="pod-grid-supplies">
          {" "}
          Supplies:
          <li className="pod-grid-supply">{electricity}</li>
          <li className="pod-grid-supply">{water}</li>
          <li className="pod-grid-supply">{oxygen}</li>
          <li className="pod-grid-supply">{food}</li>
        </ul>
      </div>
      ;
    </>
  );
};
