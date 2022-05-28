import { MouseEvent, KeyboardEvent, ReactNode, FC, forwardRef } from 'react'

export type SwitchChangeEventType = (
    checked: boolean,
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
) => void

export interface SwitchProps {
    className?: string
    style?: string
    disabled?: boolean
    checkedChildren?: ReactNode
    unCheckedChildren?: ReactNode
    onChange?: SwitchChangeEventType
    checked?: boolean
    loadingIcon?: ReactNode
    title?: string
}

export const Switch: FC<SwitchProps> = forwardRef(
    (
        {
            checked,
            onChange,
            checkedChildren,
            unCheckedChildren,
            loadingIcon,
            ...restProps
        },
        ref
    ) => {
        return (
            <button type="button" role="switch" aria-checked={checked}>
                {loadingIcon}
                <span>{checked ? checkedChildren : unCheckedChildren}</span>
            </button>
        )
    }
)

Switch.displayName = 'Switch'
