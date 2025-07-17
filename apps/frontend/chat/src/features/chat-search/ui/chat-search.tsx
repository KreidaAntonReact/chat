import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { Input } from '@/shared/ui';

export const ChatSearch = () =>  (
  <Input
    prefix={(
      <MagnifyingGlassIcon className="chat:w-6 chat:h-6 chat:stroke-white/80" />
    )}
  />
);
