import '../resources/resources.styles.scss';

type ResourcesProps = {
    menuIsOpen: boolean
}

function Resources(props: ResourcesProps) {
    return(
        <div className={`resources ${props.menuIsOpen ? 'open' : 'closed'}` }>
            <h1>Resources</h1>
        </div>

    )
}

export default Resources;