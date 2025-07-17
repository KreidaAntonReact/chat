import '@packages/event-bas';

import './styles/main.css';
import 'sidebar/styles';

import { RouterProvider } from 'react-router';

import { QueryClientProvider, ThemeProvider } from './providers';
import { router } from './routers';

export const App = () => (
  <QueryClientProvider>
    <ThemeProvider/>
    <RouterProvider router={router}/>
  </QueryClientProvider>
);
