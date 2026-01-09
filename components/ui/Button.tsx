import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "whatsapp";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-600 shadow-lg shadow-brand-700/20",
  outline:
    "border border-slatePro-300 text-slatePro-900 hover:border-brand-500 hover:text-brand-700",
  ghost: "text-slatePro-700 hover:text-brand-700",
  whatsapp:
    "bg-whatsapp-500 text-white hover:bg-whatsapp-600 shadow-lg shadow-whatsapp-500/30",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 ease-out hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
        variantStyles[variant]
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
