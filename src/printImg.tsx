import React from 'react';
import {Button} from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Print = (props:any) => {
    
    const card = props.location.state.card;
    const count = props.location.state.count;


    const saveCard = async () => {
        alert("이미지를 만들고 있습니다 잠시만 기다려주세요!");
        const pdf = new jsPDF('p', 'mm', 'a4');

        for(let i=0; i<count; i++){
            const printArea = document.getElementById("card"+i.toString());
            
            const canvas = await html2canvas(printArea!);
            const dataURL = canvas.toDataURL();
            
            
            switch(i%4){
                case 0:
                    pdf.addImage(dataURL, 'JPEG', 5,5); 
                    break;
                case 1:
                    pdf.addImage(dataURL, 'JPEG', 105,5); 
                    break;
                case 2:
                    pdf.addImage(dataURL, 'JPEG', 5,155); 
                    break;
                case 3:
                    pdf.addImage(dataURL, 'JPEG', 105, 155); 
                    if(i+1 !== count){
                        pdf.addPage();
                    }
                    break;
                default:
                    break;    
            }
        }
        
        
        pdf.save('saved.pdf');
    }

    return(
        <>
            <div id="waitMessage">
                이미지가 만들어 졌습니다.
            </div>
            <Button onClick={saveCard}>저장하기</Button>
            {card}
        </>
    )
}


export default Print;