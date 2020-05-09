import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {NavLink} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

function Customizing(props: any) {

    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    

    const savePDF = async () => {

        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const printArea1 = document.getElementById("frame");
        const canvas = await html2canvas(printArea1!);
        
        const dataURL = canvas.toDataURL();
        pdf.addImage(dataURL, 'JPEG', 0,0); 
        
        pdf.save('saved.pdf')

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
                    <button onClick={()=>setShow(true)}>다음 페이지</button>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}  size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="countDiv">
                        <label>인원수</label><br></br>
                        <input type="number" className="form-control" name="count" onChange={(e: any) => setCount(e.target.value)}></input> 명
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <NavLink to={{pathname:`/list/${props.match.params.id}`, state:{count}}}><Button>다음페이지</Button></NavLink>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Customizing;
