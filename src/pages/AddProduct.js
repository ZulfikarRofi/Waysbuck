import React from 'react'
import {Col, Container, Form, Row, Button} from 'react-bootstrap';
import iceblend from '../assets/ice-blend.png';
import NavbarUser from '../components/navbar';


function AddProduct() {
  return (
    <div>
      <NavbarUser />
      <Container>
        <Row>
          <Col xs={12} md={7}>
          <Form>
              <Form.Label className='text-start text-danger fw-semibold fs-1'>Product</Form.Label>
            <Form.Group>
              <Form.Control type='text' placeholder='name product' className='mb-4'/>
              <Form.Control type='text' placeholder='price'className='mb-4'/>
              <Form.Control type='file' className='mb-4'/>
            </Form.Group>
            <Button className="btn btn-danger" style={{width:"100%"}}>
              Add Product
            </Button>
          </Form>
          </Col>
          <Col xs={12} md={5} className="mt-5">
            <img 
            src={iceblend}
            className=''
            style={{height:"100%",borderRadius:"10px"}}
            alt=''
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default AddProduct;