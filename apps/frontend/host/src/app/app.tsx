import '@packages/event-bas';

import './styles/main.css';
import 'chat/styles';

import { RouterProvider } from 'react-router';

import { router } from './routers';


export const App = () => (
  <RouterProvider router={router}/>
);
