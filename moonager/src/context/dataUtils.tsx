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

export function newAlert(data: any) {
  const dataCloned = JSON.parse(JSON.stringify(data));
  const alerts: any = [];
  dataCloned.pods.forEach((pod: any) => {
    for (let i in pod.supplies) {
      if ((pod.supplies as any)[i] < 1000) {
        alerts.push({
          id: alerts.length + 1,
          pod: pod.name,
          supply: i,
          amount: (pod.supplies as any)[i],
        });
      }
    }
    dataCloned.alerts = alerts;
  });
  
  return dataCloned;
}