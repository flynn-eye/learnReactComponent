import React from 'react'
import classNames from 'classnames'
export enum SizeType {
    small='sm',
    large='lg'
}
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
interface BaseButtonProps{
    className?:string,
    disabled?:boolean,
    size?:SizeType,
    btnType?:ButtonType,
    href?:string
}
const Button:React.FC<ButtonProps> = (props)=>{
    const {
        children,
        disabled,
        size,
        btnType,
        href,
        className,
        ...restProps
    } = props
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType===ButtonType.Link)&&disabled
    })
    if(btnType===ButtonType.Link&&href){
        return (
            <a 
            {...restProps}
            className={classes}
            href={href}
            >
            {children}
            </a>
        )
    }else{
        return (
            <button
            {...restProps}
            className={classes}
            disabled={disabled}
            >
            {children}
            </button>
        )
    }
}
Button.defaultProps = {
    disabled:false,
    btnType:ButtonType.Default
}
export default Button