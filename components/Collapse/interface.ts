import { CSSProperties, ReactNode } from 'react'

export interface CollapseProps {
    style?: CSSProperties
    className?: string
    activeKey?: string[]
    accordion?: boolean
    expandIcon?: ReactNode
    onChange?: (key: string, keys: string[], e) => void
}

export interface CollapseItemProps {
    style?: CSSProperties
    className?: string
    contentStyle?: CSSProperties
    header?: ReactNode
    name: string
    title: string
    disabled?: boolean
    expandIcon?: ReactNode
    showExpandIcon?: boolean
    extra?: ReactNode
}
