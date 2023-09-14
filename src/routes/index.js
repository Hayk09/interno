import React from "react";
import { Routes, Route } from "react-router-dom";
import config from "../pages/config";


const RoutesProviders = () => {
  
    return(
        <Routes>
         {
            config.map(({element,path,Layout},idx) => (
                <Route key={idx} element={<Layout>{element}</Layout>}  path={path}/>
            ))
         }
        </Routes>
    )
}

export default RoutesProviders