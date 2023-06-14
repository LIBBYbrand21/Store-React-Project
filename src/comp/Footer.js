import { useState } from "react";
import { Form, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import axios from 'axios';
import '../css/Footer.css';

export default function Footer() {

    const [email, setEmail] = useState('')

    const handleClick = () => {
        debugger
        axios.post('/send-email', { email }).then(() => {
            debugger
            console.log("Email sent successfully!");
        }
        ).catch(() => {
            debugger
            console.log("Email don't sent successfully!");
        });
    };

    return (
        <>
            <div style={{ backgroundColor: "#F5D43E" }}>
                <br></br><br></br><br></br>
                <center>
                    <h3 dir="rtl"><b>רוצים להשאר מעודכנים?</b></h3><br></br>
                    <h4>הצטרפו לניוזלטר שלנו</h4><br></br>
                    <InputGroup className="mb-3" style={{ width: '40%', }}>
                        <Button variant="outline-secondary" id="button-addon1"
                            style={{ backgroundColor: 'black', color: 'white' }}
                            onClick={() => {
                                debugger
                                // window.$crisp.push(["set", "session:event", [[["newsletter_subscription"]]]]);
                                handleClick()
                            }}>
                            להרשמה
                        </Button>
                        <Form.Control
                            placeholder="כתובת הדואר האלקטרוני שלך"
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            style={{ textAlign: "right" }}
                            onChange={
                                (e) => {
                                    setEmail(e.target.value)
                                }
                            }
                        />
                    </InputGroup>
                </center>
                <br></br><br></br><br></br>
            </div>
            <div dir="rtl">
                <center>
                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>שרות לקוחות</b></Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://hannan.co.il/pages/%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D-%D7%95%D7%94%D7%97%D7%96%D7%A8%D7%95%D7%AA"
                            target={"_blank"}
                        >משלוחים והחזרות</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://hannan.co.il/pages/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F-%D7%A9%D7%99%D7%9E%D7%95%D7%A9-%D7%91%D7%90%D7%AA%D7%A8"
                            target={"_blank"}
                        >תקנון</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://hannan.co.il/pages/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8"
                            target={"_blank"}
                        >צור קשר</Nav.Link>
                        <Nav.Link>עלינו</Nav.Link>
                    </div>
                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>עקבו אחרינו</b></Nav.Link>

                        <Nav.Link
                            className='footer-link'
                            href="https://www.instagram.com/hannand2018/"
                            target={"_blank"}>
                            <AiFillInstagram /> Instagram </Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://www.facebook.com/%D7%97%D7%A0%D7%9F-%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99-%D7%9B%D7%AA%D7%99%D7%91%D7%94-149160448977812/"
                            target={"_blank"}>
                            <AiFillFacebook /> Facebook </Nav.Link>
                    </div>
                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>לשמור על קשר</b></Nav.Link>
                        <Nav.Link>טל': 972-2-5357425</Nav.Link>
                        <Nav.Link>פקס: 972-2-6366217</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="mailto:hanan.project.exe@gmail.com">
                            hanan.project.exe@gmail.com </Nav.Link>

                        <Nav.Link>ת.ד. 548, מעלה אדומים 98100</Nav.Link>
                    </div>

                </center>
            </div>
        </>
    )
}