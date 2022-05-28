import { MouseEventHandler, CSSProperties } from 'react'

export interface ProgressProps {
    id?: string
    strokeWidth?: number
    trailWidth?: number
    className?: string
    style?: CSSProperties
    percent?: number | number[]
    strokeColor?: StrokeColorType
    trailColor?: string
    strokeLinecap?: StrokeLinecapType
    gapDegree?: number
    gapPosition?: GapPositionType
    transition?: string
    onClick?: MouseEventHandler
}

export type BaseStrokeColorType = string | Record<string, string>

export type StrokeColorType = BaseStrokeColorType | BaseStrokeColorType[]

export type GapPositionType = 'top' | 'right' | 'bottom' | 'left'

export type StrokeLinecapType = 'round' | 'butt' | 'square'
