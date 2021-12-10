import React from "react";
import Header from "../componentes/Header";
import Footer from '../componentes/Footer'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default class Signup extends React.Component {

    componentDidMount() {
        
    }

    render() {


        return (
            <>

                <Header />


                <div className="form signin">

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="username" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Surname" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                        


                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    </Form>

                </div>

                <Footer />

            </>

        )
    }
}