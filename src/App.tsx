import * as React from 'react';

const App = () => {

    return (
        <>  
            <div id="main_div">
                <div id="example_img">
                    <img src="/img/a.jpg"></img>
                </div>
            </div>
            <div id="side_menu">
                <div className='input'>
                    <span><label>Tag:</label></span>
                    <span><input className='tag form-control' type="text"></input></span>
                    <input className="name form-control" type="text"></input>
                </div>
            </div>
        </>
    )
}

export default App;
