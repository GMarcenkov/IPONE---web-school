import React,{Fragment} from 'react';
import './App.css';
import Routes from "./desktop/routes";
import AdminRoutes from "./admin/routes";

function App() {
  return (
    <Fragment>
      <Routes/>
      <AdminRoutes/>
    </Fragment>
  );
}

export default App;
