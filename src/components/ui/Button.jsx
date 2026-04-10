import React from "react"
const Button = React.forwardRef(({ className="", variant="primary", size="default", asChild=false, children, ...props }, ref) => {
  const cls = `btn btn-${variant} ${size!=="default"?`btn-${size}`:""} ${className}`.trim()
  if (asChild && React.isValidElement(children))
    return React.cloneElement(children, { className: cls, ref, ...props })
  return <button className={cls} ref={ref} {...props}>{children}</button>
})
Button.displayName = "Button"
export { Button }
