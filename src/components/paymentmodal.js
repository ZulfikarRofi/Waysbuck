import React from 'react'
import {Modal, Col, Row, ModalBody} from 'react-bootstrap'
import iceblend from '../assets/ice-blend.png'
import logo from '../assets/logo.svg'
import barcode from '../assets/barcode.png'

export default function PaymentModal(payShow, Close, props) {
  return (
    <Modal show={payShow} onHide={Close} 
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>
            <p className="text-center fw-semibold fs-4 p-5" style={{color:"#469F74"}}>Thank you for ordering in us, please wait to verify your order</p>
        </Modal.Body>
    </Modal>
  )
}
