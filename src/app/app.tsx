import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/theme_provider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter />
        </div>
    )
}