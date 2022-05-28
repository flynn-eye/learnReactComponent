import { PropsWithChildren, useContext, useRef, useEffect } from 'react'
import { CollapseItemProps } from './interface'
import { CollapseContext } from './collapse'
import './index.css'
import { Transition } from 'react-transition-group';

export const CollapseItem = ({
    children,
    name,
    title,
    ...rest
}: PropsWithChildren<CollapseItemProps>) => {
    const panelRef = useRef<HTMLDivElement>()
    const headerRef = useRef<HTMLDivElement>()
    const ctx = useContext(CollapseContext);
    useEffect(() => {
        if (ctx.accordion && !ctx.activeKeys.includes(name)) {
            panelRef.current.classList.remove('collapse-panel-active')
            panelRef.current.style.cssText = `
                height: 0;
                display: block;
            `
            panelRef.current.style.display = 'none'
        }
    }, [ctx.activeKeys])

    const onClick = () => {
        if (ctx.activeKeys.includes(name)) {
            // panelRef.current.classList.remove('collapse-panel-active')
            // panelRef.current.style.cssText = `
            //     height: 0px;
            //     display: block;
            // `
            headerRef.current.classList.remove('collapse-header-active')
        } else {
            // panelRef.current.style.cssText = `
            //     display: block;
            //     height: auto;
            // `
            headerRef.current.classList.add('collapse-header-active')
            panelRef.current.classList.add('collapse-panel-active')

        }
        ctx.onClick(name)
    }
    return (
        <div className={'collapse-item'}>
            <div ref={headerRef} className={'collapse-header'} onClick={onClick}>
                {title}
            </div>
            <Transition
                in={ctx.activeKeys.includes(name)}
                addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, false);
                }}
                onEnter={(e) => {
                    e.style.height = 0;
                    e.style.display = 'block';
                }}
                onEntering={(e) => {
                    e.style.height = `${e.scrollHeight}px`;
                }}
                onEntered={(e) => {
                    e.style.height = 'auto';
                }}
                onExit={(e) => {
                    e.style.display = 'block';
                    e.style.height = `${e.offsetHeight}px`;
                    e.offsetHeight;
                }}
                onExiting={(e) => {
                    e.style.height = 0;
                }}
                onExited={(e) => {
                    e.style.display = 'none';
                    e.style.height = 'auto';
                }}
            >
            <div ref={panelRef} className={'collapse-panel collapse-animate'}>
                <div className={'collapse-item-content'}>
                    {children}
                </div>
            </div>
            </Transition>
        </div>

    )
}
