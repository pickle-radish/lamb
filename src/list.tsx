import React, {useState, useEffect} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';


const List = (props:any) => {

    // const count = props.location.state.count;
    const count = 11;
    const imgPth: string = `/img/${props.match.params.id}.jpg`;

    const [card, setCard] = useState([<></>,<></>]);
    const [page, setPage] = useState(false);

    const inputName: any = [];
    for (let i=0; i<count; i++){
        inputName.push(<FormControl key={i} name="name" autoComplete="new-password"/>);
    }


    const handleSubmit = (event : any) => {
        event.preventDefault();

        const data = new FormData(event.target);
        
        const name = data.getAll('name');

        const makeImg = name.map((item, index) => {
            const id = "card" + index.toString();
            if(item){
                return (
                    <div id={id} key={index} className="card">
                        <div className="printImg">
                            <img src={imgPth} alt="명찰"></img>   
                            <div className="printName">{item}</div>
                        </div>
                    </div>
                )
            }else{
                return <></>;
            }
        });

        setCard(makeImg);
        setPage(true);
        
    }
    useEffect(()=>{
    }, [card])

    return (
        <>
            <div id="inputList">
                <Form onSubmit={handleSubmit}>
                    <Form.Label>이름</Form.Label>
                    <hr></hr>
                    <Form.Group> 
                        {inputName}
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" id="makeBtn">만들기</Button>
                    </Form.Group>
                </Form>
            </div>
            {
                page && <Redirect to={{pathname:`/print/${props.match.params.id}`, state:{card, count:9}}}></Redirect>
            }
            
        </>
    )
}

export default List;
