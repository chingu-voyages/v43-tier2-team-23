export function allocateReserves(data: any, supply: string, amount: number, destination: string) {
  const dataCloned = JSON.parse(JSON.stringify(data));
  dataCloned.supplies = dataCloned.supplies.map((item: any) => {
    if (item.name === supply) {
      item.value -= amount;
    }
    return item;
  });
  dataCloned.pods = dataCloned.pods.map((pod: any) => {
    if (pod.name === destination) {
      pod.supplies[supply.toLowerCase()] += amount;
    }
    return pod;
  })
  return dataCloned;
}

export function requestSupplies(data: any, supply: string, amount: number, pod: string) {
  const dataCloned = JSON.parse(JSON.stringify(data));
  dataCloned.supplies = dataCloned.supplies.map((item: any) => {
    if (item.name === supply) {
      item.value += amount;
    }
    return item;
  });
  dataCloned.pods = dataCloned.pods.map((item: any) => {
    if (item.name === pod) {
      item.supplies[supply.toLowerCase()] -= amount;
    }
    return item;
  })
  return dataCloned;
}