import pod1 from '../src/assets/pod-images/pod1.jpg';
import pod2 from '../src/assets/pod-images/pod2.jpg';
import pod3 from '../src/assets/pod-images/pod3.jpg';
import pod4 from '../src/assets/pod-images/pod4.jpg';
import pod5 from '../src/assets/pod-images/pod5.jpg';
import pod6 from '../src/assets/pod-images/pod6.jpg';
import pod7 from '../src/assets/pod-images/pod7.jpg';
import pod8 from '../src/assets/pod-images/pod8.jpg';
import pod9 from '../src/assets/pod-images/pod9.jpg';
import pod10 from '../src/assets/pod-images/pod10.jpg';
import pod11 from '../src/assets/pod-images/pod11.jpg';
import pod12 from '../src/assets/pod-images/pod12.jpg';

import instantiateUsers from '../controller/resourceDrainage';
import User from '../controller/resourceDrainage';

type Supplies = {
  water: number;
  oxygen: number;
  electricity: number;
  food: number;
}

export const pods = [
  {
    id: 1,
    name: "Blue Falcon",
    population: 12,
    supplies: {
      electricity: 1000,
      food: 50000,
      oxygen: 10000,
      water: 2000,
    },
    changeRate: 2,
    route: 'bluefalcon',
    image: pod1,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 5,
    y: 60
  },
  {
    id: 2,
    name: "Green Dragon",
    population: 15,
    supplies: {
      electricity: 1500,
      food: 2000,
      oxygen: 2000,
      water: 1000,
    },
    changeRate: 0,
    route: 'greendragon',
    image: pod2,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 5,
    y: 50
  },
  {
    id: 3,
    name: "Blue Hydra",
    population: 8,
    supplies: {
      electricity: 1000,
      food: 1500,
      oxygen: 1800,
      water: 800,
    },
    changeRate: 1,
    route: 'bluehydra',
    image: pod3,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 5,
    y: 40
  },
  {
    id: 4,
    name: "Red Phoenix",
    population: 20,
    supplies: {
      electricity: 2000,
      food: 2500,
      oxygen: 1500,
      water: 1500,
    },
    changeRate: 2,
    route: 'redphoenix',
    image: pod4,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 5,
    y: 30
  },
  {
    id: 5,
    name: "Purple Wyvern",
    population: 10,
    supplies: {
      electricity: 800,
      food: 1200,
      oxygen: 1800,
      water: 900,
    },
    changeRate: 1,
    route: 'purplewyvern',
    image: pod5,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 10,
    y: 70
  },
  {
    id: 6,
    name: "Yellow Griffin",
    population: 18,
    supplies: {
      electricity: 2500,
      food: 3000,
      oxygen: 1200,
      water: 2000,
    },
    changeRate: 1,
    route: 'yellowgriffin',
    image: pod6,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 25,
    y: 5
  },
  {
    id: 7,
    name: "White Unicorn",
    population: 12,
    supplies: {
      electricity: 1200,
      food: 1800,
      oxygen: 2200,
      water: 1100,
    },
    changeRate: 1,
    route: 'whiteunicorn',
    image: pod7,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 8,
    y: 90
  },
  {
    id: 8,
    name: "Silver Pegasus",
    population: 16,
    supplies: {
      electricity: 2000,
      food: 2500,
      oxygen: 2000,
      water: 1200,
    },
    changeRate: 1,
    route: 'silverpegasus',
    image: pod8,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 20,
    y: 20
  },
  {
    id: 9,
    name: 'Navy Dragon',
    population: 16,
    supplies: {
      electricity: 2000,
      food: 2500,
      oxygen: 2000,
      water: 1200,
    },
    changeRate: 1,
    route: 'navydragon',
    image: pod9,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 25,
    y: 80
  },
  {
    id: 10,
    name: 'Gold Sphinx',
    population: 16,
    supplies: {
      electricity: 2000,
      food: 2500,
      oxygen: 2000,
      water: 1200,
    },
    changeRate: 1,
    route: 'goldsphinx',
    image: pod10,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 5,
    y: 80
  },
  {
    id: 11,
    name: "Silver Serpent",
    population: 16,
    supplies: {
      electricity: 2000,
      food: 2500,
      oxygen: 2000,
      water: 1200,
    },
    changeRate: 1,
    route: 'silvergriffin',
    image: pod11,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 0,
    y: 20
  },
  {
    id: 12,
    name: "Green Yeti",
    population: 16,
    supplies: {
      electricity: 2000,
      food: 2500,
      oxygen: 2000,
      water: 1200,
    },
    changeRate: 1,
    route: 'greenyeti',
    image: pod12,
    coords1: "00'00'00",
    coords2: "00'00'00",
    x: 18,
    y: 60
  },
];

class Pod {
  id;
  name;
  users;
  population;
  supplies;
  calorieExpenditure;
  oxygenExpenditure;
  waterExpenditure;
  electricityExpenditure;
  route;
  image;
  coords1;
  coords2;
  x;
  y;

  constructor(
    id: number, 
    name: string, 
    population:number, 
    supplies:Supplies, 
    route:string,
    image:string,
    coords1: string,
    coords2: string,
    x: number,
    y: number) {
      this.id = id;
      this.name = name;
      this.population = population;
      this.supplies = supplies;
      this.users = instantiateUsers(this.population);
      this.calorieExpenditure = calculateCalorieExpenditure(this);
      this.oxygenExpenditure = (this.population * 840) / 86400 // grams per second;
      this.waterExpenditure = (this.population * 11) / 86400; // liters per seconds
      this.electricityExpenditure = (this.population * 250) / 86400; // watts per second
      this.route = route;
      this.image = image;
      this.coords1 = coords1;
      this.coords2 = coords2;
      this.x = x;
      this.y = y;
  }

  addFood(food:number){
    this.supplies.food += food;
    return this.supplies.food;
  }
  addWater(water:number){
    this.supplies.water += water;
    return this.supplies.water;
  }

  addOxygen(oxygen:number){
    this.supplies.oxygen += oxygen;
    return this.supplies.oxygen;
  }

  addElectricity(electricity:number){
    this.supplies.electricity += electricity;
    return this.supplies.electricity;
  }
}

function calculateCalorieExpenditure(pod:Pod){
  let x = 0;
  for(let i = 0; i < pod.users.length; i++){
    x += pod.users[i].metabolicRate;
  }
  return x;
};

export const podData = pods.map((pod) => {
  const newPod = new Pod(pod.id, pod.name, pod.population, pod.supplies, pod.route, pod.image, pod.coords1, pod.coords2, pod.x, pod.y)
  return newPod;
})

