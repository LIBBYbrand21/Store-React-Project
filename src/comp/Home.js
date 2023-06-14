import { Card, Carousel } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import img1 from '../Image/a1.webp';
import img2 from '../Image/a2.webp';
import img3 from '../Image/a3.webp';
import img4 from '../Image/a4.webp';
import paper from '../Image/paper1.png';
import electronic from '../Image/Elec.png';
import filing from '../Image/filing.png';
import stationery from '../Image/Pen.png';
import Electronic from './Electronic';
import Filing from './Filing';
import Paper from './Paper';
import Stationery from './Stationery';
import '../css/Home.css'
export default function Home() {

    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img src={img1} alt="logo" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={img2} alt="logo" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={img3} alt="logo" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img4} alt="logo" className="d-block w-100" />
                </Carousel.Item>
            </Carousel>
            <br /> <br />
            <center>
                {/* #מכשירי כתיבה */}
                <Card border="warning"
                    className='card'
                    onClick={() => {scrollToTop(); navigate('/stationery')}}
                    style={{ width: '18rem', display: "inline-block", margin: 5 , cursor:'pointer'}}>
                    <Card.Body>
                        <Card.Title>מכשירי כתיבה</Card.Title>
                        <Card.Img variant="top" src={stationery} />
                    </Card.Body>
                </Card>
                {/* #אלקטרוניקה*/}
                <Card border="warning"
                    className='card'
                    onClick={() =>{scrollToTop(); navigate('/electronic')}}
                    style={{ width: '18rem', display: "inline-block", margin: 5 , cursor:'pointer'}}>
                    <Card.Body>
                        <Card.Title>אלקטרוניקה</Card.Title>
                        <Card.Img variant="top" src={electronic} />
                    </Card.Body>
                </Card>
                {/* #נייר */}
                <Card border="warning"
                    className='card'
                    onClick={() => {scrollToTop(); navigate('/paper')}}
                    style={{ width: '18rem', display: "inline-block", margin: 5 , cursor:'pointer'}}>
                    <Card.Body>
                        <Card.Title>נייר ומוצריו</Card.Title>
                        <Card.Img variant="top" src={paper} />
                    </Card.Body>
                </Card>
                {/* #אחסון*/}
                <Card border="warning"
                    className='card'
                    onClick={() =>{scrollToTop();  navigate('/filing')}}
                    style={{ width: '18rem', display: "inline-block", margin: 5 , cursor:'pointer'}}>
                    <Card.Body>
                        <Card.Title>אחסון</Card.Title>
                        <Card.Img variant="top" src={filing} />
                    </Card.Body>
                </Card>
            </center>

            <br /> <br />

            {/* <BrowserRouter> */}
            <Routes>
                {/* <Router> */}
                <Route exact path='/electronic' element={<Electronic />} />
                <Route exact path='/paper' element={<Paper />} />
                <Route exact path='/filing' element={<Filing />} />
                <Route exact path='/stationery' element={<Stationery />} />
                {/* </Router> */}
            </Routes>
            {/* </BrowserRouter> */}

        </>
    );
}