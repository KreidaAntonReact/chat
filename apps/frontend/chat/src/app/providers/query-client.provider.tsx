import { QueryClientProvider as Provider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { FC, ReactNode } from 'react';

interface IQueryClientProviderProps {
    children: ReactNode
}

const queryClient = new QueryClient();

export const QueryClientProvider: FC<IQueryClientProviderProps> = ({ children }) => (
  <Provider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    {children}
  </Provider>
);
