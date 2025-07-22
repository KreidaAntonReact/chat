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
  ...props
}) => (
  <button
    className={cn(`chat:text-white/80 chat:bg-brown/30
      chat:flex chat:items-center chat:gap-2 chat:text-sm
      chat:rounded-sm chat:p-2 chat:cursor-pointer
      chat:duration-[0.2s] chat:active:scale-95
      chat:transition-colors chat:hover:bg-brown/70 chat:active:bg-brown
      chat:dark:text-white chat:justify-center`, className)}
    type={type}
    onMouseDown={onClick}
    {...props}
  >
    {Icon && <Icon className={cn('chat:w-6 chat:h-6', iconClassName)}/>}
    {children}
  </button>
);
