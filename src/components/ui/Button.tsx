import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-secondary-500 text-white hover:bg-primary-500 focus:ring-secondary-500 shadow-md hover:shadow-lg',
    secondary: 'bg-primary-500 text-white hover:bg-secondary-500 focus:ring-primary-500 shadow-md hover:shadow-lg',
    outline: 'border-2 border-secondary-500 text-secondary-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 focus:ring-secondary-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};