export const pods = [
    {
        name : 'Blue Falcon',
        population: 12,
        supplies: {
            electricity:1000,
            food:50000,
            oxygen:10000,
            water:2000
        },
        changeRate: -2
    }, 
    {
        name : 'Green Dragon',
        population: 15,
        supplies: {
            electricity:1500,
            food:2000,
            oxygen:2000,
            water:1000
        },
        changeRate: 0
    },
    {
        name : 'Red Bear',
        population: 9,
        supplies: {
            electricity:1500,
            food:600,
            oxygen:1000,
            water:2000  
        },
        changeRate: .01
    }
]



export type Pod = {
    name : string,
    id : number,
    population: number,
    supplies: {
        electricity: number,
        food: number,
        oxygen: number,
        water: number
    },
    changeRate: number
}