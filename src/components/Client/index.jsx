import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Email from '../Email';
import Phone from '../Phone';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Client extends React.Component{
    render(){
        const {firstName, lastName, phoneNumber, avatar, jobTitle} = this.props;
        console.log(firstName, lastName);
    
        return (
            <>
                <Card style={{ width: '18rem'}} className='mb-5'>
                    <Card.Img variant="top" src={avatar} />
                    <Card.Body>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                        <Card.Text>
                            {jobTitle}
                        </Card.Text>
                        <Button variant="light"><Phone number={phoneNumber} /></Button>{' '}
                        <Button variant="light"><Email firstName={firstName} lastName={lastName}/></Button>
                    </Card.Body>
                </Card>
            </>
        );
    }
    
}
export default Client;