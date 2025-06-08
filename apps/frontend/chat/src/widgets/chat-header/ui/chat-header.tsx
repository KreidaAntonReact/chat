import { Avatar } from '@/shared';

export const ChatHeder = () => (
  <div className="chat:w-full chat:h-20 chat:bg-dark
    chat:dark:bg-black chat:flex chat:items-center
    chat:px-3 chat:py-[20px]"
  >
    <div className='chat:flex chat:items-center chat:gap-2'>
      <Avatar/>
      <div className='chat:flex chat:gap-1.5 chat:flex-col'>
        <div className='chat:text-white/80 chat:text-sm'>User name</div>
        <div className='chat:text-white/80 chat:text-sm'>Status</div>
      </div>
    </div>
  </div>
);
