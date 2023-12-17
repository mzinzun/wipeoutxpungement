import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <div>
            <Form>
                <Form.Group controlId="legalName">
                    <Form.Label>Legal Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter legal name" />
                </Form.Group>

                <Form.Group controlId="arrestingNames">
                    <Form.Label>Arresting Names:</Form.Label>
                    <Form.Control type="text" placeholder="Enter arresting names" />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone #:</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group controlId="dob">
                    <Form.Label>DOB:</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group controlId="pendingCharges">
                    <Form.Label>Any pending charges?</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter any pending charges" />
                </Form.Group>

                <Form.Group controlId="additionalInfo">
                    <Form.Label>Anything I will need to know as I do my search?</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter additional information" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;
