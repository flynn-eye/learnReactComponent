import React,{useState,createContext} from 'react'
import classNames from 'classnames'
import {MenuItemProps} from './menuItem'
type SelectCallBack = (selectIndex:string)=>void;
type MenuModeType= 'horizontal' | 'vertical'
interface IMenuContext {
    index: string;
    onSelect?: SelectCallBack,
    mode?: MenuModeType;
    defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({index:'0'})
export interface MenuProps {
    defaultIndex?:string;
    className?:string;
    mode?: MenuModeType;
    style?: React.CSSProperties,
    onSelect?: SelectCallBack,
    defaultOpenSubMenus?: string[];
}
const Menu: React.FC<MenuProps> = (props) => {
    const {
        defaultIndex,
        className,
        mode,
        style,
        onSelect,
        children,
        defaultOpenSubMenus,
        ...restProps
    } = props
    const [ currentActive, setActive ] = useState(defaultIndex)
    const classes = classNames('menu',className,{
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const handleClick = (index: string) => {
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext:IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus,
    }
    const renderChildren = ()=>{
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {name} = childElement.type
            if(name==='MenuItem'||name==='SubMenu'){
                return React.cloneElement(childElement,{
                    index: index.toString()
                })
            }else{
                console.error("warning: Menu has a child which is not a MenuItem component")
            }
        })
    }
    return(
        <ul {...restProps} className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
            {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex:'0',
    mode:'horizontal',
    defaultOpenSubMenus: []
}
export default Menu