import React from 'react'
import { dataTopping } from '../components/datadummy';
import iceblend from '../assets/ice-blend.png';
import { Container, Row, Col, Button} from 'react-bootstrap';
import NavbarUser from '../components/navbar'

function Detail (){
    return(
        <div>
            <NavbarUser/>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={5}>
                        <img 
                        src={iceblend}
                        style={{width: "80%" }}
                        className="img-fluid"
                        alt="transaction"
                        />
                    </Col>
                    <Col xs={12} md={7} style={{backgroundColor:"white"}}>
                        <div>
                            <h1 className='text-start text-danger fw-bold'>Ice Coffee Palm Sugar</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-start text-danger' style={{fontSize:"22px"}}>Rp. 25.000,-</p>
                        </div>
                        <div className='mb-5 mt-3'>
                            <h4 className='text-start text-danger fw-bold mb-5 mt-5'>Topping</h4>
                            <Row>
                                {dataTopping.map((item, index) => (
                                <Col xs={4} md={3}>
                                    <img 
                                    src={item.image}
                                    className=''
                                    style={{height:"100px",borderRadius:"10px"}}
                                    alt=''
                                    />
                                    <p className='text-align-center text-danger mb-5'>{item.name}</p>
                                </Col>
                                ))}
                            </Row>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h2 className='text-danger fw-bold fs-4 mt-3 mb-5'>Total</h2>
                            <h2 className='text-danger fw-bold fs-4 mt-3 mb-5'>Rp. 27.000,-</h2>
                        </div>
                    <div className=''>
                        <Button className="btn btn-danger fw-bold mt-3" style={{width:"100%"}}>Add to Cart</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Detail;