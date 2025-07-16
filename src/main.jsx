import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './componects/practiceExample/cartcontext.jsx';
import 'leaflet/dist/leaflet.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);

// ✅ Hide loader when everything is ready
window.addEventListener('load', () => {
  const loader = document.getElementById('global-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});
