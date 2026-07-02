import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type ButtonBaseProps = {
  children?: ReactNode;
  className?: string;
  href?: string;
  iconOnly?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = NativeButtonProps | AnchorButtonProps;

const buttonBase =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold outline-none transition-all duration-normal ease-standard focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-glow hover:shadow-elevated hover:brightness-105",
  secondary:
    "bg-secondary text-secondary-foreground shadow-soft hover:shadow-card hover:brightness-105",
  ghost: "text-foreground hover:bg-muted hover:text-foreground",
  outline:
    "border border-border bg-background/60 text-foreground hover:border-primary/50 hover:bg-muted",
  danger:
    "bg-destructive text-destructive-foreground shadow-soft hover:shadow-card hover:brightness-105"
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 p-0"
};

export function Button(props: ButtonProps) {
  const { children, className, iconOnly = false, variant = "primary" } = props;
  const size = props.size ?? (iconOnly ? "icon" : "md");
  const classes = cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);

  if ("href" in props && props.href) {
    const anchor = props as AnchorButtonProps;
    const {
      children: _children,
      className: _className,
      iconOnly: _iconOnly,
      size: _size,
      variant: _variant,
      ...anchorProps
    } = anchor;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const native = props as NativeButtonProps;
  const {
    children: _children,
    className: _className,
    href: _href,
    iconOnly: _iconOnly,
    size: _size,
    variant: _variant,
    ...buttonProps
  } = native;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
