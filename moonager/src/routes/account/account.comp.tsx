import '../account/account.styles.scss';
import { AccountProps } from './account-types';

function Account(props: AccountProps) {
    return(
        <div className={`account ${props.menuIsOpen ? 'open' : 'closed'}`}>
            <h1>Account</h1>
        </div>

    )
}

export default Account;