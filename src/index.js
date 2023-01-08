import React from 'react';
import { createRoot } from 'react-dom/client';

import './scss/index.scss';

createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <div>Blablabla</div>
  </React.StrictMode>
);
