export type PodTypes = {
  id: number;
  name: string;
  population: number;
  supplies: {
    electricity: number;
    food: number;
    oxygen: number;
    water: number;
  };
  changeRate: number;
};

export type PodListTypes = {
  pods: PodTypes[];
};

export type PodType = {
  pod: PodTypes;
};
