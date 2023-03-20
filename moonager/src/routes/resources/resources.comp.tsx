import '../resources/resources.styles.scss';
import { ResourcesProps } from './resources-types';


function Resources(props: ResourcesProps) {
    return(
        <div className={`resources ${props.menuIsOpen ? 'open' : 'closed'}` }>
            <h1>Resources</h1>
        </div>

    )
}

export default Resources;