import { PodTypes } from "./pods.types";

export const Pod = ({ pod }) => {
  const { name } = pod;
  return <div className="pod-placeholder">{name}</div>;
};
