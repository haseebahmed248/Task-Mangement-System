import React from "react";
import propTypes from "prop-types";

const shapes = {
    round:"rounded-[46px]",
}
const variants={
    fill:{
        primary:"bg-primary-light",
    },
}
const sizes={
    sm:"h-[94px] px-[34px] text-3xl",
    xs:"h-[88px] px-[34px] text-3xl",
}

const Button = ({
    children,
    className="",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size="sm",
    color="primary-light",
    ...restProps
})=>{
    return (
        <button
            className={`flex items-center justify-center ${sizes[size]} ${variants[variant][color]} ${shapes[shape]} ${className}`}
            {...restProps}
        >
            {!!leftIcon&& leftIcon}
            {children}
            {!!rightIcon&& rightIcon}
        </button>
    )
}
Button.propTypes={
    children: propTypes.node,
    className: propTypes.string,
    leftIcon: propTypes.node,
    rightIcon: propTypes.node,
    shape: propTypes.oneOf(["round"]),
    variant: propTypes.oneOf(["fill"]),
    size: propTypes.oneOf(["sm","xs"]),
    color: propTypes.string,
}
export {Button}