import React, {useState} from 'react'
import { Container, Table, Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { dataIncome } from '../components/datadummy'
import NavbarUser from '../components/navbar'
import '../assets/styles.css';
import logo from "../assets/logo.svg";
import barcode from '../assets/barcode.png'
import iceblend from '../assets/ice-blend.png'

function MyVerticallyCenteredModal(props) {
    return (
    <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
            </Modal.Title>
        </Modal.Header> */}
        <Modal.Body style={{backgroundColor:"#F6DADA", width:"100%", borderRadius:"6px"}}>
            <Row>
            <Col xs={12}>
                    <div>
                        <h4 className='text-start fw-bold fs-4 mb-3' style={{color:"#613D2B"}}>My Transaction</h4>
                    </div>
                    <Row className="p-3" style={{backgroundColor:"#F6DADA", borderRadius:"5px"}}>
                        <Col xs={12} md={8}>
                            <Row className="pt-2">
                                <div className="d-flex mb-2">
                                    <img
                                    src={iceblend}
                                    style={{width:"25%", borderRadius:"8px"}}
                                    className=''
                                    alt=''
                                    />
                                    <ul className="text-start">
                                        <li style={{listStyle:"none", fontSize:"8px"}}><h4 className='text-danger fw-bold'>Ice Coffee Palm Sugar</h4></li>
                                        <li style={{listStyle:"none", fontSize:"14px"}}><p className='text-danger fw-normal'><span className='fw-bold'>Saturday,</span> 5 march 2020</p></li>
                                        <li style={{listStyle:"none", fontSize:"14px", marginBottom:"-10px"}}><p className='text-danger fw-semibold'> <snap className="fw-bold" style={{color:"#613D2B"}}>Topping :</snap> berry boba, mango boba</p></li>
                                        <li style={{listStyle:"none", fontSize:"14px"}}> <p className="fw-normal" style={{color:"#613D2B"}}>Price : Rp. <span>27.000,-</span></p></li>
                                    </ul>
                                </div>
                                <div className="d-flex mb-2">
                                    <img
                                    src={iceblend}
                                    style={{width:"25%", borderRadius:"8px"}}
                                    className=''
                                    alt=''
                                    />
                                    <ul className="text-start">
                                        <li style={{listStyle:"none", fontSize:"8px"}}><h4 className='text-danger fw-bold'>Ice Coffee Palm Sugar</h4></li>
                                        <li style={{listStyle:"none", fontSize:"14px"}}><p className='text-danger fw-normal'><span className='fw-bold'>Saturday,</span> 5 march 2020</p></li>
                                        <li style={{listStyle:"none", fontSize:"14px", marginBottom:"-10px"}}><p className='text-danger fw-semibold'> <snap className="fw-bold" style={{color:"#613D2B"}}>Topping :</snap> berry boba, mango boba</p></li>
                                        <li style={{listStyle:"none", fontSize:"14px"}}> <p className="fw-normal" style={{color:"#613D2B"}}>Price : Rp. <span>27.000,-</span></p></li>
                                    </ul>
                                </div>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className='mb-3'>
                                <img
                                src={logo}
                                style={{width:"30%"}}
                                className=''
                                alt=''
                                />
                            </div>
                            <div>
                                <img
                                src={barcode}
                                style={{width:"40%"}}
                                className='mb-3'
                                alt=''
                                />
                            </div>
                            <div className='d-flex justify-content-center mb-3' style={{backgroundColor:'rgb(255,175,25, 0.5)', borderRadius:"8px"}}>
                                <p className='text-align-center fw-semibold' style={{color:"#FF9900"}}>Waiting Approve</p>
                            </div>
                            <div className=''>
                                <p className='fw-bold' style={{color:"#974A4A"}}>Sub total : Rp. <span style={{color:"#974A4A"}}>27.000</span></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
        </Modal>
    );
}
export default function IncomeTransaction(props) {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
        <Container>
        <NavbarUser />
            <div>
                <h1 className='text-start text-danger fw-semibold mb-5 mt-2'>Income Transaction</h1>
            </div>
            <Table>
                <thead style={{backgroundColor:"#E5E5E5", border:"1px solid grey"}}>
                    <tr>
                        <th style={{border:"1px solid grey"}}>No</th>
                        <th style={{border:"1px solid grey"}}>Name</th>
                        <th style={{border:"1px solid grey"}}>Address</th>
                        <th style={{border:"1px solid grey"}}>Post Code</th>
                        <th style={{border:"1px solid grey"}}>Income</th>
                        <th style={{border:"1px solid grey"}}>Status</th>
                    </tr>
                </thead>
                <tbody className='triggered' style={{border:"1px solid grey"}}>
                        <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    {dataIncome.map((item, index) => (
                        <tr  onClick={() => setModalShow(true)} key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td style={{border:"1px solid grey"}}>
                                {item.name}
                            </td>
                            <td style={{border:"1px solid grey"}}>
                                {item.address}
                            </td>
                            <td style={{border:"1px solid grey"}}>
                                {item.postcode}
                            </td>
                            <td style={{border:"1px solid grey"}}>
                                Rp.{item.income}
                            </td>
                            <td className={item.status === "success" ? "success" : item.status === "ontheway" ? "ontheway" : item.status === "canceled" ? "canceled" : item.status === "waiting" ? "waiting" : "error"} style={{border:"1px solid grey"}}>
                                {item.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    </div>
  )
}
