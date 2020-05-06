import React from 'react';
import logo from './logo.svg';
import './css/example.css';
import html2canvas from 'html2canvas';
import jsPDF  from 'jspdf';

function App() {
    const savePDF = () => {

        const printArea = document.getElementById("frame");
        
        html2canvas(printArea!).then(canvas => {
            const dataURL = canvas.toDataURL();
            const pdf = new jsPDF('p', 'mm', 'a4');

            pdf.addImage(dataURL, 'JPEG', 0,0);
            pdf.addImage(dataURL, 'JPEG', 100,0);

            pdf.save('saved.pdf')
        })

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
                <button onClick={savePDF}>저장하기</button>
            </div>
        </div>
    </>
  );
}

export default App;
