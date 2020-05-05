import React from 'react';

const App = () => {


    const save_img = () =>{

    }
    return (
        <>  
            <div id="main_div">
                <div id="frame">
                    <div id="example_img">
                        <img src="/img/b.jpg"></img>   
                        <div id="text1">나상문</div>
                        
                    </div>
                </div>
            </div>
            <div id="side_menu">
                <div className='input'>
                    <span><label>Tag:</label></span>
                    <span><input className='tag form-control' type="text"></input></span>
                    <input className="name form-control" type="text"></input>
                </div>
                <div>
                    <button onClick={save_img}>저장하기</button>
                </div>
            </div>
        </>
    )
}

export default App;