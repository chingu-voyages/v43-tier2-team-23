import { PodType } from "./pods.types";

export const Pod = ({ pod }: PodType) => {
  const { name, population } = pod;
  return (
    <>
      <div className="pod-placeholder">
        <p>{name}</p>
        <p>Population: {population}</p>
      </div>
    </>
  );
};
