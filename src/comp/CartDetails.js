import { useState } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFromCart } from "../redux/action/cartActions";
import { decreaseQty } from "../redux/action/productActions";
import PayPal from "./PayPal";

export default function CartDetails() {

   const cartProduct = useSelector((state) => state.cartReducer);
   console.log(cartProduct)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [amount, setAmount] = useState(0);
   const [total, setTotal] = useState(0);


   return (
      <>
         <center>
            <br></br>
            <h1>עגלת קניות</h1><br></br>
            {cartProduct.length > 0 ?
               <>
                  <Table striped bordered hover style={{ width: '50%', marginRight: '25%', marginLeft: '25%' }}>
                     <tr>
                        <th></th>
                        <th style={{ textAlign: "center" }}>מחיר</th>
                        <th style={{ textAlign: "center" }}>כמות</th>
                        <th style={{ textAlign: "center" }}>תמונה</th>
                        <th style={{ textAlign: "center" }}>שם המוצר</th>
                     </tr>
                     {cartProduct.map((item) => (
                        <>
                           <tr>
                              <td style={{ textAlign: "center" }}><Button style={{ backgroundColor: "#F5D43E", color: "black", borderColor: "white" }} onClick={(e) => {
                                 debugger
                                 e.preventDefault();
                                 dispatch(deleteFromCart(item))
                                 console.log(cartProduct)
                              }}
                              > X </Button></td>
                              <td style={{ textAlign: "center" }}>{item.price * item.qty} ₪</td>

                              <td style={{ textAlign: "center" }}>
                                 <Button style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black" }} onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(decreaseQty(item.qty - 1, item.code));
                                 }}>-</Button>
                                 {item.qty}
                                 <Button style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black" }} onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(decreaseQty(item.qty + 1, item.code));
                                 }}>+</Button></td>

                              <td style={{ textAlign: "center" }}><img src={item.product_image} style={{ width: 75, height: 75 }} /></td>
                              <td style={{ textAlign: "center" }}>{item.name}</td>
                           </tr>

                        </>
                     ))}
                  </Table><br /><br />
                  <Button
                     style={{ backgroundColor: '#F5D43E', border: '#F5D43E', width: 200, height: 50 }}
                     onClick={() => navigate(-1)}>להמשך הקניה</Button><br /><br />
                  <PayPal />
               </>
               : <h1 dir='rtl' style={{ color: "gray" }}>עגלת הקניות שלכם ריקה :(</h1>
            }
            <br /><br /><br /><br />
         </center>
      </>
   )
};


//https://stackoverflow.com/questions/75606968/add-to-cart-change-the-qty-in-react