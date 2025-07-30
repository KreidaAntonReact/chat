import { cn } from '@packages/utils';

import type {
  ButtonHTMLAttributes,
  ComponentType,
  FC,
  SVGProps
} from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    text?: string
    iconClassName?: string
}


export const Button: FC<IButtonProps> = ({
  type = 'button',
  className,
  icon: Icon,
  iconClassName,
  children,
  onClick,
  disabled,
  ...props
}) => (
  <button
    className={cn(`chat:text-white/80 chat:bg-brown/30
      chat:flex chat:items-center chat:gap-2 chat:text-sm
      chat:rounded-sm chat:p-2 chat:cursor-pointer chat:border-0
      chat:duration-[0.2s] chat:active:scale-95
      chat:transition-colors chat:hover:bg-brown/70 chat:active:bg-brown
      chat:dark:text-white chat:justify-center`, {
      [`chat:disabled:cursor-not-allowed chat:disabled:bg-gray-400/30
        chat:disabled:hover:bg-gray-400/30 chat:disabled:scale-100
        chat:disabled:text-white/50`]: disabled,
    }, className)}
    type={type}
    onMouseDown={onClick}
    disabled={disabled}
    {...props}
  >
    {Icon && <Icon className={cn('chat:w-6 chat:h-6', iconClassName)}/>}
    {children}
  </button>
);
