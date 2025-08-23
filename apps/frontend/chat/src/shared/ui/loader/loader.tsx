import { cn } from '@packages/utils';
import {
  motion,
  stagger,
  type Transition,
  type Variants
} from 'motion/react';

import type { FC } from 'react';


const containerVariantsLoader: Variants = {
  initial: {
    transition: {
      delayChildren: stagger(0.2, { from: 'first' }),
    }
  },
  animate: {
    transition: {
      delayChildren: stagger(0.2, { from: 'first' }),
    }
  }
};

const itemVariantsLoader: Variants = {
  initial: {
    y: '15%',
  },
  animate: {
    y: '0%',
  },
};

const itemTransitionLoader: Transition = {
  duration: 0.5,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'reverse',
};


interface ILoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  textLoading?: string;
}

export const Loader: FC<ILoaderProps> = ({ className, size = 'md', textLoading = 'Loading' }) => (
  <div className={cn(`chat:w-fit chat:h-fit
    chat:flex chat:items-center chat:justify-center chat:text-${size}
    chat:text-brown chat:dark:text-white/80`, className)}>
    {textLoading}
    <motion.div
      variants={containerVariantsLoader}
      className='chat:w-fit chat:h-fit chat:flex'
      initial='initial'
      animate='animate'
    >
      <motion.span
        variants={itemVariantsLoader}
        transition={itemTransitionLoader}
      >.</motion.span>
      <motion.span
        variants={itemVariantsLoader}
        transition={itemTransitionLoader}
      >.</motion.span>
      <motion.span
        variants={itemVariantsLoader}
        transition={itemTransitionLoader}
      >.</motion.span>
    </motion.div>
  </div>
);
