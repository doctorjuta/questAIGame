import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import styles from '../less/style.less';


const root = createRoot(document.getElementById('appbody'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);