import React from 'react'
import {Form} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function Support() {
    return (
        <Form className="support-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="John Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>What are you having issues with?</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Provide a picture if applicable</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
        </Form>
    )
}

export default Support
