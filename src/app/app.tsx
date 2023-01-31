import './styles/index.scss'
import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "pages/main";
import {useTheme} from "app/providers/theme_provider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/about";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/>
            </Routes>
            </Suspense>
        </div>
    )
}