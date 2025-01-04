import React from 'react'
import Header from '../layout/Header';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
    
        <Header />
        <Outlet />
        
    </>
  )
}

export default MainLayout;
