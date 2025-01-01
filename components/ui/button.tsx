import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'cta'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default',
  asChild = false,
  ...props 
}, ref) => {
  const baseStyles = 'font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center'
  
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    cta: 'bg-[#8B0000] text-white hover:bg-[#8B0000]/90 transition-all duration-300 hover:scale-105 active:scale-98'
  }
  
  const sizeStyles = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    cta: 'px-8 py-6 text-lg'
  }

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp 
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[variant === 'cta' ? 'cta' : size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  )
})

Button.displayName = 'Button'

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'cta'
type ButtonSize = 'default' | 'sm' | 'lg'

interface ButtonVariantsProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const buttonVariants = ({
  variant = 'default',
  size = 'default'
}: ButtonVariantsProps = {}) => {
  const baseStyles = 'font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center'
  
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    cta: 'bg-[#8B0000] text-white hover:bg-[#8B0000]/90 transition-all duration-300 hover:scale-105 active:scale-98'
  }
  
  const sizeStyles = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8'
  }

  return cn(
    baseStyles,
    variantStyles[variant],
    variant === 'cta' ? sizeStyles.lg : sizeStyles[size]
  )
}

export type { ButtonProps, ButtonVariant, ButtonSize }