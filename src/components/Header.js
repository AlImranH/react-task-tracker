import propsType from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propsType = {
    title: propsType.string.isRequired
}

export default Header
