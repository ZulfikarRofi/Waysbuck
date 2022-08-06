import React from 'react'
import { Col, Container, Row, Form, Button, FormControl } from 'react-bootstrap'
import NavbarUser from '../components/navbar'
import berry from '../assets/berry.svg'
import paperclip from '../assets/paperclip.png'

export default function AddTopping() {
  return (
    <div>
        <Container>
            <NavbarUser />
            <Row>
                <Col xs={12} md={7}>
                <Form>
                    <Form.Label className='text-start text-danger fw-semibold fs-1'>Product</Form.Label>
                    <Form.Group>
                    <Form.Control type='text' placeholder='name product' className='mb-4'/>
                    <Form.Control type='text' placeholder='price'className='mb-4'/>
                    <Form.Control type='file' className='form-control mb-4'/>
                    </Form.Group>
                    <Button className="btn btn-danger" style={{width:"70%"}}>
                    Add Product
                    </Button>
                </Form>
                </Col>
                <Col xs={12} md={5}>
                    <img
                    src={berry}
                    alt=''
                    style={{width:"70%", borderRadius:"7px"}}
                    className=''
                    />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
