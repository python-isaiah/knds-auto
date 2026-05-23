import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles = "w-full py-3 px-6 text-sm uppercase tracking-widest font-bold transition-all duration-200 ease-in-out";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200",
    outline: "bg-transparent text-white border border-zinc-700 hover:border-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}