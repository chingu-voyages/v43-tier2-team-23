import { PodType } from "./pods.types";

export const Pod = ({ pod }: PodType) => {
  const { name } = pod;
  return <div className="pod-placeholder">{name}</div>;
};
