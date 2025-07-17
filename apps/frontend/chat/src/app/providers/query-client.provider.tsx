import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import type { FC, ReactNode } from 'react';


interface IQueryClientProviderProps {
    children: ReactNode
}

const queryClient = new QueryClient();

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
});

export const QueryClientProvider: FC<IQueryClientProviderProps> = ({ children }) => (
  <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
    <ReactQueryDevtools initialIsOpen={false} />
    {children}
  </PersistQueryClientProvider>
);
