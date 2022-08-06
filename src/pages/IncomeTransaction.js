import React, {useState} from 'react'
import { Container, Table, Col, Row } from 'react-bootstrap'
// import Modal from 'react-bootstrap/Modal'
import { dataIncome } from '../components/datadummy'
import NavbarUser from '../components/navbar'
import '../assets/styles.css';
import TransModal from '../components/transmodal';

export default function IncomeTransaction() {
    const [modalShow, setModalShow] = useState(false);
    const handleShow = () => setModalShow(true);
    const handleClose = () => setModalShow(false);
    // console.log(modalShow);
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
                        <TransModal
                        modalShow={modalShow} close={handleClose}
                        />
                    {dataIncome.map((item, index) => (
                        <tr onClick={handleShow} key={index}>
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
                            <td className={item.status} style={{border:"1px solid grey"}}>
                                {item.status === "success" ? "Success" : item.status === "ontheway" ? "On The Way" : item.status === "waiting" ? "Waiting Approve" : item.status === "canceled" ? "Canceled": ""}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    </div>
  )
}
