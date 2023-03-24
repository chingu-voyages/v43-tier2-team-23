import './developerModeSwitch.scss';

export default function DeveloperModeSwitch(prop: { developerMode:boolean, setDeveloperMode:Function }) {
    return (
        <div className="switch-wrapper">
            <input 
                type="checkbox" 
                id="toggle" 
                className="checkbox" 
                // checked={checked}
                onChange={ () => prop.setDeveloperMode(!prop.developerMode) }/>
            <label htmlFor="toggle" className="switch"></label>
        </div>
    )
}