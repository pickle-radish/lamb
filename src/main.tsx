import React from 'react';

import {NavLink} from 'react-router-dom';


function Main() {
    

    return (
        <>  
            <div id="templateMain">
                
                <div className="template" id="addTemplate">
                    <img src='/img/a.jpg' alt="그림1" className="temImg"></img>
                    <div id="addBtn">+</div>
                </div> 
                <NavLink to={{pathname:'/imgTemplate/a'}}>
                    <div className="template">
                        <img src='/img/a.jpg' alt="그림1" className="temImg"></img>
                    </div>
                </NavLink>
                <NavLink to={{pathname:`/imgTemplate/b`}}>
                    <div className="template">
                        <img src='/img/b.jpg' alt="그림2" className="temImg"></img>                
                    </div>  
                </NavLink> 
                      
            </div>
        </>
    );
}

export default Main;
