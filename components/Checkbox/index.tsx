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
}

const defaultCheckBox = {
    className: '',
    style: {},
    checked: false,
    disabled: false,
    onFocus(){},
    onBlur(){},
    onChange(){},
    onclick(){},
}
export const CheckBox = (props: CheckBoxProps = defaultCheckBox) => {
    const handleChange = (e: ChangeEvent) => {
        console.warn(e)
    }
    return (
        <span>
            <input type='checkbox' {...props} onChange={ handleChange } />
            <span />
        </span>
    )
}

