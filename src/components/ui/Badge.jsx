import React from "react"
const Badge = React.forwardRef(({ className="", variant="default", ...props }, ref) => (
  <span ref={ref} className={`badge badge-${variant} ${className}`.trim()} {...props} />
))
Badge.displayName = "Badge"
export { Badge }
