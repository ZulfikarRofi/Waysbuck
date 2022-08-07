import React, {useContext, useState} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import NavbarUser from '../components/navbar';
import iceblend from '../assets/ice-blend.png';
import trash from '../assets/trash2.svg';
import PaymentModal from '../components/paymentmodal';
import { UserContext } from '../context/userContext';
import NavbarLogin from '../components/navbarUser';

export default function Cart() {
    const [payShow, setPayShow] = useState(false);
    const handlePay =()=> setPayShow(true);
    const handleClose =()=> setPayShow(false);
    console.log(setPayShow)

    const [state, dispatch] = useContext(UserContext)
    const [addCart, setAddChart] = useState(0)

  return (
    <div>
        <NavbarLogin  show={addCart}/>
        <Container className='mt-5'>
            <Row className="">
                <Col xs={12} md={7} className="mt-5 py-5 px-4" style={{}}>
                    <div style={{backgroundColor:"white", borderTop:"2px solid red", borderBottom:"2px solid red"}}>
                        <Row className="p-3">
                            <Col xs={12} md={2} style={{}}>
                                <img src={iceblend} alt="" style={{width:"100%", borderRadius:"8px"}} />
                            </Col>
                            <Col xs={12} md={6} style={{}}>
                                <ul className="description justify-content-start align-items-center pt-4 ps-0 mb-0">
                                    <li>
                                        <p className='text-danger fw-bold'>Ice Coffee Palm Sugar</p>
                                    </li>
                                    <li>
                                        <p className='text-danger text-start fw-semibold'><span className='text-danger fw-bold'>Topping, </span>Mango boba, bill berry boba</p>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={12} md={4} style={{}}>
                            <ul className="description text-end align-items-center pt-4 pr-3 ps-0 mb-0">
                                    <li>
                                        <p className='text-danger fw-semibold'>Rp. 25.000,-</p>
                                    </li>
                                    <li>
                                        <img src={trash} alt="" style={{width:""}} />
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="p-3">
                            <Col xs={12} md={2} style={{}}>
                                <img src={iceblend} alt="" style={{width:"100%", borderRadius:"8px"}} />
                            </Col>
                            <Col xs={12} md={6} style={{}}>
                                <ul className="description justify-content-start align-items-center pt-4 ps-0 mb-0">
                                    <li>
                                        <p className='text-danger fw-bold'>Ice Coffee Palm Sugar</p>
                                    </li>
                                    <li>
                                        <p className='text-danger text-start fw-semibold'><span className='text-danger fw-bold'>Topping, </span>Mango boba, bill berry boba</p>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={12} md={4} style={{}}>
                            <ul className="description text-end align-items-center pt-4 pr-3 ps-0 mb-0">
                                    <li>
                                        <p className='text-danger fw-semibold'>Rp. 25.000,-</p>
                                    </li>
                                    <li>
                                        <img src={trash} alt="" style={{width:""}} />
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={5} className="mt-5 p-5">
                    <div className="p-2" style={{borderTop:"2px solid red", borderBottom:"2px solid red", width:"80%"}}>
                       <div className='d-flex justify-content-between'>
                            <p className='text-danger'>Subtotal</p>
                            <p className='text-danger'>Rp. 69.000,-</p>
                       </div>
                       <div className='d-flex justify-content-between'>
                            <p className='text-danger'>Qty</p>
                            <p className='text-danger'>2</p>
                       </div>
                    </div>
                     <div className='d-flex justify-content-between' style={{width:"80%"}}>
                        <p className='text-danger fw-bold'>Total</p>
                        <p className='text-danger fw-bold'> Rp. 69.000,-</p>
                   </div>
                   <div className="mt-5" style={{width:"80%"}}>
                    <Button onClick={() => handlePay()} className="btn btn-danger fw-bold px-5" style={{width:"100%"}}>
                        Pay
                    </Button>
                    <PaymentModal payShow={payShow} Close={handleClose} />
                   </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
