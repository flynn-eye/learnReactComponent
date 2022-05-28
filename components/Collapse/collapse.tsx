import './index.css'
import { CollapseProps, CollapseItemProps } from './interface'
import { PropsWithChildren, createContext, useState, useEffect } from 'react'

export const Collapse = ({
    children,
    className,
    style,
    activeKey,
    accordion = false,
    ...rest
}: PropsWithChildren<CollapseProps>) => {
    const [activeKeys, setActiveKeys] = useState<string[]>(() => {
        return Array.isArray(activeKey) ? [].concat(activeKey): []
    })

    const onClick = (name: string) => {
        if (activeKeys.includes(name)) {
            setActiveKeys(
                activeKeys.filter(item => item !== name)
            )
        } else {
            if (accordion) {
                setActiveKeys([name])
            } else {
                setActiveKeys([...activeKeys, name])
            }
        }
    }
    return (
        <CollapseContext.Provider
            value={
                {
                    onClick,
                    activeKeys,
                    accordion,
                }
            }
        >
        <div className={'collapse'}>{children}</div>
        </CollapseContext.Provider>
    )
}

export const CollapseContext = createContext<{
    onClick?: (key: string) => void
    activeKeys: string []
    accordion: boolean
}>({
    onClick: () => {},
    activeKeys:  [],
    accordion: false
})
