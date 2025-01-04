import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/layout/Header.jsx'
import Sidebar from './components/layout/Sidebar.jsx';
import MainLayout from './components/main-layout/MainLayout.jsx';
import DashboardMain from './components/view/DashboardMain/DashboardMain.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<DashboardMain />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
