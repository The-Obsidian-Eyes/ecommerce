import React from "react";

// Minimal, accessible stub for Sheet primitives used by the admin sidebar.
// This intentionally keeps behavior very small so the app can run until
// a full UI component is implemented.

export function Sheet({ open = false, onOpenChange = () => {}, children }) {
  // For simplicity just render children. Mobile behavior isn't implemented.
  return <div>{children}</div>;
}

export function SheetContent({ side = "right", className = "", children, ...props }) {
  // Provide basic wrapper and allow className passthrough used by layout.
  return (
    <div role="dialog" data-side={side} className={className} {...props}>
      {children}
    </div>
  );
}

export function SheetHeader({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function SheetTitle({ className = "", children, ...props }) {
  return (
    <h3 className={className} {...props}>
      {children}
    </h3>
  );
}

export default Sheet;
