import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'


function Input() {
  return (
    <Container className='bg-dark style position-absolute top-100 start-50  translate-middle'>
    <div className='d-flex flex-start mx-5' >
      <Form.Group className="flex-grow-1 m-auto my-5" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Shorten a link here..." />
      </Form.Group>
    <Button variant="info"  className='my-5 text-white fw-bold  mx-2'  type="submit">
        Shorten It!
      </Button>
      </div>
    </Container>
  )
}

export default Input