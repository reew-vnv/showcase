import {classNames} from "shared/lib/classNames/classNames";
import cls from './sidebar.module.scss'
import {useState} from "react";
import {Button, ThemeButton} from "shared/ui/button/button";
import {ThemeSwitcher} from "widgets/theme_switcher";
import {LangSwitcher} from "widgets/lang_switcher";

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button onClick={onToggle} theme={ThemeButton.CLEAR}>Toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};