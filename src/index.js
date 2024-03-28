import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';


import { Loading } from './components';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <App/>
    </Suspense>
  </React.StrictMode>
);
  


