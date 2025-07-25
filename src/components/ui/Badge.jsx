import React from "react"

const Badge = React.forwardRef(({ className = "", variant = "default", ...props }, ref) => {
  const variantClass = variant === "secondary" ? "badge-secondary" : "badge"

  return <div ref={ref} className={`badge ${variantClass} ${className}`} {...props} />
})
Badge.displayName = "Badge"

export { Badge }
