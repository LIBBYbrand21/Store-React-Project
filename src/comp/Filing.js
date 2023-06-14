import { useState } from "react";
import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import ShowDetails from "./ShowDetails";
import { TiShoppingCart } from 'react-icons/ti';

export default function Filing() {

    const filings = useSelector((state) => state.filingReducer);
    const [modalShow, setModalShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});



    //debugger
    return (
        <>
            <center dir="rtl">
                <br></br><br></br><br></br><br></br>
                {filings.map((item) => (
                    <>
                        <Card style={{ width: '18rem', display: "inline-block", backgroundColor: "white", textAlign: "center", borderColor: "#F5D43E", margin: 5 }}>
                            <Card.Img variant="top" src={item.product_image} style={{ width: 100, height: 100 }} />
                            <Card.Body>
                                <Card.Title dir="rtl">{item.name}</Card.Title>
                                <Button style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black" }}
                                    variant="primary" onClick={
                                        () => {
                                            setModalShow(true);
                                            setSelectedProduct(item)
                                        }}><TiShoppingCart />   להצגה מהירה </Button>
                            </Card.Body>
                        </Card>

                    </>
                ))}
                <br></br><br></br><br></br><br></br>
            </center>
            <ShowDetails
                products={selectedProduct}
                show={modalShow}
                onHide={() => setModalShow(false)}
            ></ShowDetails>
        </>
    )
};