import { scan } from 'react-scan';
// по требованию документации импортировать scan первым
// eslint-disable-next-line import/order
import { createRoot } from 'react-dom/client';

import { App } from './app';

scan({
  enabled: process.env.NODE_ENV === 'development',
});

const root = document.getElementById('root');

if(!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(<App/>);
