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
          {/* <Form.Label className='text-start text-danger fw-semibold fs-1'>Product</Form.Label> */}
          <div className="mt-5 mb-5">
            <h1 className="text-start text-align-center text-danger fw-bold"> Product </h1>
          </div>
          <Form>
            <Form.Group className="mb-5">
              <Form.Control style={{border:"3px solid red"}} type='text' placeholder='name product' className='mb-4'/>
              <Form.Control style={{border:"3px solid red"}} type='text' placeholder='price'className='mb-4'/>
              <Form.Control style={{border:"3px solid red"}} type='file' className='mb-4'/>
            </Form.Group>
            <Button className="btn btn-danger mt-4" style={{width:"80%"}}>
              Add Product
            </Button>
          </Form>
          </Col>
          <Col xs={12} md={5} className="mt-5">
            <img
            src={iceblend}
            className=''
            style={{height:"80%",borderRadius:"10px"}}
            alt=''
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default AddProduct;