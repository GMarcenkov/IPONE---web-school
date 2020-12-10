import React, {Fragment, useEffect} from 'react';
import './App.css';
import Routes from "./desktop/routes";
import AdminRoutes from "./admin/routes";
import ReactGa from  'react-ga';

function App() {
    useEffect(()=>{
        ReactGa.initialize("G-JE6QZ9D1JS")
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
