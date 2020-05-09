import React from "react";
import { Route } from "react-router-dom";
import Main from "./main";
import Customizing from "./customizing";

const Router = () => {
    return (
      <>
        <Route exact path="/" component={Main}></Route>
        <Route path="/imgTemplate/:id" component={Customizing}></Route>
      </>
    );
  };
  
  export default Router;