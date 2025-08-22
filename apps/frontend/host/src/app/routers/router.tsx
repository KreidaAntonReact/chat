import routers from 'chat/routers';
import { createBrowserRouter } from 'react-router';


export const router = createBrowserRouter([
  {
    path: '/',
    children: routers
  }
]);
