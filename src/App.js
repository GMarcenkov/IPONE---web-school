import React, {Fragment, useEffect} from 'react';
import './App.css';
import Routes from "./desktop/routes";
import AdminRoutes from "./admin/routes";
import ReactGa from  'react-ga';

function App() {
    useEffect(()=>{
        ReactGa.initialize("UA-165034235-1")
        ReactGa.pageview('/login')
    },[])

  return (
    <Fragment>
      <Routes/>
      <AdminRoutes/>
    </Fragment>
  );
}

export default App;
