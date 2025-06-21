import '@packages/event-bas';
import './styles/main.css';
import { RouterProvider } from 'react-router';

import { QueryClientProvider } from './providers';
import { router } from './routers';

export const App = () => (
  <QueryClientProvider>
    <RouterProvider router={router}/>
  </QueryClientProvider>
);
