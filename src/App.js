import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MainLayout from './components/main-layout/MainLayout.jsx';
import DashboardMain from './components/view/DashboardMain/DashboardMain.jsx';
import FinancialDashboard from './components/view/FinancialDashboard/FinancialDashboard.jsx';
import TaskTracking from './components/view/TaskTracking/TaskTracking.jsx';
import Performance from './components/view/Performance/Performance.jsx';
import ProcurementModule from './components/view/ProcurementModule/ProcurementModule.jsx';
import Grievance from './components/view/Grievance/Grievance.jsx';
import AssetModule from './components/view/AssetModule/AssetModule.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<DashboardMain />}></Route>
          <Route path='/financial-dashboard' element={<FinancialDashboard />}></Route>
          <Route path='/task-tracking' element={<TaskTracking />}></Route>
          <Route path='/performance' element={<Performance/>}></Route>
          <Route path='/procure-module' element={<ProcurementModule />}></Route>
          <Route path='/grievance' element={<Grievance />}></Route>
          <Route path='/asset-module' element={<AssetModule />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
