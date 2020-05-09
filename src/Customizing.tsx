import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Customizing(props: any) {

    const savePDF = async () => {

        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const printArea1 = document.getElementById("frame1");
        const canvas = await html2canvas(printArea1!);
        
        const dataURL = canvas.toDataURL();
        pdf.addImage(dataURL, 'JPEG', 0,0); 
        
        pdf.save('saved.pdf')

    }

    console.log(props);

    const imgPth: string = `/img/${props.match.params.id}.jpg`;

    return (
        <>  
            <div id="main_div">
                <div id="frame">
                    <div id="example_img">
                        <img src={imgPth} alt="명찰"></img>   
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
                <div>
                    <button>다음 페이지</button>
                </div>
            </div>
        </>
    );
}

export default Customizing;
