import React,{StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';
import "./index.css";
import { ScrollApp } from './ScrollApp';
const root  = createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter} />);
root.render(<StrictMode><ScrollApp/></StrictMode>);  