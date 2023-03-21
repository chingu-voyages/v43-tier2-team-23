export const users = {
    name : '',
    job : '',
    age : '',
    sex : '',
    weight : null,
    activityLevel: '',
    metabolicRate : null,
};

export type User = {
    name : string,
    job : string,
    age : string,
    sex : string,
    weight : number,
    activityLevel: 'low' | 'average' | 'high',
    metabolicRate : number
}