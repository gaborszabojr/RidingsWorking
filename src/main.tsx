import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
// Import next-compatible analytics in case of Vercel build environment checks
import { Analytics as NextAnalytics } from '@vercel/analytics/next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
);
