import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {NavLink} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

function Customizing(props: any) {

    const [show, setShow] = useState(false);

    const savePDF = async () => {

        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const printArea1 = document.getElementById("frame1");
        const canvas = await html2canvas(printArea1!);
        
        const dataURL = canvas.toDataURL();
        pdf.addImage(dataURL, 'JPEG', 0,0); 
        
        pdf.save('saved.pdf')

    }

    const openModal = () => {
        setShow(true);
        console.log("click the open modal");
    }


    const imgPth: string = `/img/${props.match.params.id}.jpg`;

    return (
        <>  
            <div id="main_div">
                <NavLink to='/'><Button>메인으로 가기</Button></NavLink>
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
                    <button onClick={openModal}>다음 페이지</button>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)} ></Modal>
        </>
    );
}

export default Customizing;
