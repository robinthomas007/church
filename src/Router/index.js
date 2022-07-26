import React from 'react'
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard';

import { PublicRoutes } from './PublicRoutes';

function Routes() {
  let element = useRoutes([
    {
      element: <PublicRoutes />,
      children: [
        { path: '/', element: <Dashboard /> },
      ],
    },
  ]);
  return element;
}


const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </Suspense>
  )
}

export default Router