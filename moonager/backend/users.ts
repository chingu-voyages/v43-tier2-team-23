import { v4 as uuidv4 } from 'uuid';

export const usersData:Array<User> = [
    { name : 'Adam',
    id: uuidv4(),
    job : '',
    age : 25,
    sex : 'm',
    height : 60,
    weight : 150,
    activityLevel: 'high',
    metabolicRate : 0,},
    
    { name : 'Jane',
    id: uuidv4(),
    job : '',
    age : 25,
    sex : 'f',
    height : 54,
    weight : 140,
    activityLevel: 'high',
    metabolicRate : 0,},
    
    { name : 'Mike',
    id: uuidv4(),
    job : '',
    age : 25,
    sex : 'm',
    height : 71,
    weight : 170,
    activityLevel: 'average',
    metabolicRate : 0,},
    
    { name : 'John',
    id: uuidv4(),
    job : '',
    age : 41,
    sex : 'm',
    height : 59,
    weight : 250,
    activityLevel: 'low',
    metabolicRate : 0,},
    
    { name : 'Rachel',
    id: uuidv4(),
    job : '',
    age : 21,
    sex : 'f',
    height : 62,
    weight : 120,
    activityLevel: 'average',
    metabolicRate : 0,},
    
    { name : 'Mitch',
    id: uuidv4(),
    job : '',
    age : 26,
    sex : 'm',
    height : 72,
    weight : 180,
    activityLevel: 'average',
    metabolicRate : 0},

]


export type User = {
    name:string;
    id:string;
    job:string;
    age:number;             // in years
    sex:'m'|'f';    
    height: number;         // in inches
    weight: number;         // in pounds
    activityLevel: 'low'|'average'|'high';
    metabolicRate: number;  // by second
}