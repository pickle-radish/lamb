import React from "react";
import { Route } from "react-router-dom";
import Main from "./main";
import Customizing from "./customizing";
import List from "./list";
import PringImg from "./printImg";

const Router = () => {
    return (
      <>
        <Route exact path="/" component={Main}></Route>
        <Route path="/imgTemplate/:id" component={Customizing}></Route>
        <Route path="/list/:id" component={List}></Route>
        <Route path="/print" component={PringImg}></Route>
      </>
    );
  };
  
  export default Router;