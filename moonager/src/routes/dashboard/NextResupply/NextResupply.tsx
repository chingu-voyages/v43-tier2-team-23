// import type { month } from './NextResupplyTypes';

export default function NextResupply(props: { time:number }) {
    // const options:Intl.DateTimeFormatOptions = { weekday: undefined, year: '2-digit', month: 'numeric', day: 'numeric', hour12: true} as const;
    const now = new Date(props.time);
    // const localTime = date.toLocaleDateString(undefined, options);
    const today = now.getDate();
    const thisMonth = now.getMonth();
    
    function calculateDaysInMonth(thisMonth:number) {
        if (thisMonth === 2) {
            return 28
        } else if (
            thisMonth === 4 || 
            thisMonth === 6 ||
            thisMonth === 9 || 
            thisMonth === 11) {
             return 30
        } else {
            return 31
        }
    }
    
    function calculateDaysLeft(thisMonth:number):number{
        const thisMonthsLength:number = calculateDaysInMonth(thisMonth);
        const resupplyDate:number = 15;
        
        if (today <= resupplyDate){
            // console.log(`${resupplyDate} - ${today}`)
            return resupplyDate - today;
        } else {
            // console.log(`${thisMonthsLength} - ${today} + ${resupplyDate}`)
            return thisMonthsLength - today + resupplyDate;
        }
    }

    return (
        <h5>{`Next resupply is in ${calculateDaysLeft(thisMonth).toString()} days`}</h5>
    )
}