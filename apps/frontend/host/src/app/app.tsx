import '@packages/event-bas';

import './styles/main.css';
import 'chat/styles';
import 'sidebar/styles';

import { RouterProvider } from 'react-router';

import { QueryClientProvider } from './providers';
import { router } from './routers';


export const App = () => (
  <QueryClientProvider>
    <RouterProvider router={router}/>
  </QueryClientProvider>
);
