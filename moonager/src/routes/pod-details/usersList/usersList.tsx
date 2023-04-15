import { Pod } from '../../../../backend/pods'
import { User } from '../../../../backend/users'

export default function UsersList(props: {currentPod: Pod}){
    // console.log(props.currentPod.users[0].name);
    const users = props.currentPod.users.map((user: User) =>
        { 
            return (
                <ul key={user.id}>
                    <li key={user.name}>{user.name}</li>
                    {/* <li key={user.height}>Height: {user.height}</li>
                    <li key={user.weight}>Weight: {user.weight}</li>
                    <li key={user.activityLevel}>Activity Level: {user.activityLevel}</li>
                    <li key={user.sex}>Sex: {user.sex}</li>
                    <li key={user.age}>Age: {user.age}</li> 
                    <li key={user.metabolicRate}>Metabolic rate: {user.metabolicRate}</li>
                    */}
                </ul>
        )
    });
    return users;
}