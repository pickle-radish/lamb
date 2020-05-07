import React from "react";
import { Route } from "react-router-dom";
import Customizing from "./Customizing";

const Router = () => {
    return (
      <>
        {/* <Route exact path="/" component={Map}></Route> */}
        <Route path="/" component={Customizing}></Route>
        
      </>
    );
  };
  
  export default Router;