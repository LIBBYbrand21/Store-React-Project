import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/cartActions';
import { decreaseQty } from '../redux/action/productActions';


export default function ShowDetails(props) {

    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();
    

    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ textAlign: "center" }}
                animation={true}
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body dir='rtl'>
                    <Image variant="top" src={props.products.product_image} style={{ width: 200, height: 200 }} />
                    <Modal.Title id="contained-modal-title-vcenter" style={{ textAlign: "center" }}>
                        {props.products.name}
                    </Modal.Title>
                    <h5>{props.products.description}</h5>
                    <h4>{props.products.price * amount} ₪</h4>
                    <Button style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black" }} onClick={() => {
                        setAmount(Math.min(props.products.qty, amount + 1))
                    }}>+</Button>
                    <h4 style={{ display: "inline-block", margin: 10 }}>{amount}</h4>
                    <Button style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black" }} onClick={() => {
                        setAmount(Math.max(1, amount - 1))
                    }}>-</Button><br></br><br></br>
                    <Button  style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black", width: 200 }} onClick={(e) => {
                        debugger
                        e.preventDefault();
                        console.log('this is e')
                        dispatch(decreaseQty(props.products.qty - amount, props.products.id));
                        console.log(props.products.qty - amount, "id" + props.products.id)
                        dispatch(addToCart(props.products,amount))
                        setAmount(1);
                        props.onHide();
                    }}>הוספה לסל</Button>
                </Modal.Body>

            </Modal>
        </>
    );
};