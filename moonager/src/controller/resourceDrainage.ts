import {usersData, User} from '../../backend/users';

const secondsInADay = 86400;

let user = usersData[1];

export default function resourceDrainage(){
    console.log(calorieNeedsPerDay(user) / secondsInADay);
}

//     name : string,
//     id: string,
//     job : string,
//     age : number,
//     sex : string,
//     height : number,
//     weight : number,
//     activityLevel: 'low' | 'average' | 'high',
//     metabolicRate : number

function calorieNeedsPerDay(user: User){

    if (user.sex === 'm') {
        // Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
        const BMR = ( 
            88.362 + 
            (13.397 * (user.weight * 0.453592) + 
            (4.799 * (user.height * 2.54)) - 
            (5.677 * user.age))
        )
    }
    
    // Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
    const BMR =  ( 
        447.593 + 
        (9.274 * (user.weight * 0.453592) + 
        (3.098 * (user.height * 2.54)) - 
        (4.330 * user.age))
    )

    switch (user.activityLevel) {
        case ('low'): return BMR * 1.2          
        case ('high'): return BMR * 1.9
        default: return BMR * 1.6
    }
}

// Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)

// Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)

