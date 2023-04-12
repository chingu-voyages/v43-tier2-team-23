// import { User } from '../backend/users';
import { v4 as uuidv4 } from 'uuid';
import { uniqueNamesGenerator, Config, names, starWars } from 'unique-names-generator';

const config: Config = {
  dictionaries: [starWars]
}


export default function instantiateUsers(n:number){
    let userObjects: Array<User> = [];

    for (let i = 0; i < n; i++){
        const userObject = new User();
        userObjects.push(userObject);
    }

    return userObjects;
}


export class User {
    name:string;
    id:string;
    job:string;
    age:number;             // in years
    sex:'m'|'f';    
    height: number;         // in inches
    weight: number;         // in pounds
    activityLevel: 'low'|'average'|'high';
    metabolicRate: number;  // by second

  
    constructor(
        ) {
      this.name = uniqueNamesGenerator(config);
      this.id = uuidv4();
      this.job = '';
      this.age = this.calculateAge();
      this.sex = this.calculateSex();
      this.height = this.calculateHeight(this.sex);
      this.weight = this.calculateWeight(this.sex);
      this.activityLevel = this.calculateActivityLevel();
      this.metabolicRate = this.calculateBMI();
    }

    calculateAge(){
        return 10 + (Math.ceil(Math.random()*60))
    }
    
    calculateSex(){
        return Math.random() > .5 ? 'm' : 'f';
    }
    
    calculateHeight(sex:'m'|'f'):number{
        return (Math.ceil(Math.random() * 12)) + (sex === 'm' ? 60 : 48); 
    }
    
    calculateWeight(sex:'m'|'f'):number{
        return (Math.ceil(Math.random() * 50)) + (sex === 'm' ? 150: 100);
    }
    
    calculateActivityLevel(){
        const activity = Math.ceil(Math.random()*10);
        switch (activity) {
            case 1||2||3:
                return 'low';
            case 4||5||6||7:
                return 'average';
            case 7||8||9||10:
                return 'high';
            default:
                return 'average';
        }
        
    }

    calculateBMI(){

        const secondsInADay = 86400;

        if (this.sex === 'm') {
            // Male: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
            const BMR = ( 
                88.362 + 
                (13.397 * (this.weight * 0.453592) + 
                (4.799 * (this.height * 2.54)) - 
                (5.677 * this.age))
            )
        }
        
        // Female: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
        const BMR =  ( 
            447.593 + 
            (9.274 * (this.weight * 0.453592) + 
            (3.098 * (this.height * 2.54)) - 
            (4.330 * this.age))
        ) / secondsInADay
    
        switch (this.activityLevel) {
            case ('low'): return BMR * 1.2         
            case ('high'): return BMR * 1.9 
            default: return BMR * 1.6
        }
    }
  
  }

