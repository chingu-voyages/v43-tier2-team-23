import '../account/account.styles.scss';

type AccountProps = {
    menuIsOpen: boolean
}

function Account(props: AccountProps) {
    return(
        <div className={`account ${props.menuIsOpen ? 'open' : 'closed'}`}>
            <h1>Account</h1>
        </div>

    )
}

export default Account;