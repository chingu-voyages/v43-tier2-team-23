import '../resources/resources.styles.scss';
import { ResourcesProps } from './resources-types';


function Resources(props: ResourcesProps) {
    return(
        <div className={`resources ${props.menuIsOpen ? 'open' : 'closed'}` }>
            <h1>Resources</h1>
            <div style={{marginTop: '15px', marginLeft: '5px', fontWeight: 600 }} >
                Coming Soon!
            </div>
        </div>

    )
}

export default Resources;