import './styles/index.scss'
import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AboutLazy} from "./pages/about/about.lazy";
import {MainLazy} from "./pages/main/main.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                    <Route path={'/about'} element={<AboutLazy />}/>
                    <Route path={'/'} element={<MainLazy />}/>
            </Routes>
            </Suspense>
        </div>
    )
}