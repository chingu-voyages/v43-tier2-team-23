// import type { month } from './NextResupplyTypes';

export default function NextResupply(props: { time:number }) {
    // const options:Intl.DateTimeFormatOptions = { weekday: undefined, year: '2-digit', month: 'numeric', day: 'numeric', hour12: true} as const;
    const now = new Date(props.time);
    // const localTime = date.toLocaleDateString(undefined, options);
    const today = now.getDay();
    const thisMonth = now.getMonth();
    
    function calculateNextMonthsLength(thisMonth:number) {
        if (thisMonth === 1) {
            return 28
        } else if (
            thisMonth === 3 || 
            thisMonth === 5 ||
            thisMonth === 8 || 
            thisMonth === 10) {
             return 30
        } else {
            return 31
        }
    }
    
    function calculateDaysLeft(thisMonth:number):number{
        const nextMonthsLength:number = calculateNextMonthsLength(thisMonth);
        const resupplyDate:number = 15;
        
        if (today <= 15){
            return resupplyDate - today;
        }
        else {
            return (resupplyDate - today) + Math.ceil(nextMonthsLength / 2)
        }
    }

    return (
        <h5>{`Next resupply is in ${calculateDaysLeft(thisMonth).toString()} days`}</h5>
    )
}