import './index.css'
import { CSSProperties, FocusEvent, MouseEvent, ChangeEvent } from 'react'

export interface CheckBoxProps {
    className?: string
    style?: CSSProperties
    checked?: boolean
    disabled?: boolean
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void
    onChange?: (value: boolean) => void
    onClick?: (e: MouseEvent<HTMLInputElement>) => void
    tabIndex?: number
    required?: boolean
    autoFocus?: boolean
    value?: any
    title?: string
}

const defaultCheckBox = {
    className: '',
    style: {},
    checked: false,
    disabled: false,
    onFocus() {},
    onBlur() {},
    onChange() {},
    onclick() {},
    title: '',
}
export const CheckBox = (props: CheckBoxProps = defaultCheckBox) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { disabled, onChange } = props
        if (disabled) return
        onChange(e.target.checked)
    }
    return (
        <span>
            <input type="checkbox" {...props} onChange={handleChange} />
            <span />
        </span>
    )
}
