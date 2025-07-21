import React from "react"

const Button = React.forwardRef(
  ({ className = "", variant = "primary", size = "default", asChild = false, children, ...props }, ref) => {
    const baseClass = "btn"
    const variantClass = `btn-${variant}`
    const sizeClass = size !== "default" ? `btn-${size}` : ""

    const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: buttonClass,
        ref,
        ...props,
      })
    }

    return (
      <button className={buttonClass} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }
