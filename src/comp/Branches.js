import { ListGroup } from 'react-bootstrap';
import map from '../Image/map.webp'
import location from '../Image/location.png'
import { useNavigate } from 'react-router-dom';



export default function Branches() {
    const branches = [{
        a: "סניף תלפיות - סניף נגיש",
        b: "פייר קניג 26 , קניון הדר, ירושלים",
        c: "02-6730794",
        d: "054-7840873",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 09:30-21:00, ימי שישי וערבי חג - 09:00-14:00",
        g: "מוצש - שעה אחרי שבת עד 23:00",
        h: 'https://www.google.co.il/maps/place/%D7%92%D7%A0%D7%A8%D7%9C+%D7%A4%D7%99%D7%99%D7%A8+%D7%A7%D7%A0%D7%99%D7%92+26,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.7537904,35.2142115,3a,75y,285.76h,90t/data=!3m5!1e1!3m3!1s8iKm8wtg8ejIlEcFQCi4oA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D8iKm8wtg8ejIlEcFQCi4oA%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D285.7611%26pitch%3D0%26thumbfov%3D100!4m6!3m5!1s0x1502d7e1cb50376f:0x7aa4bf421c2604d2!8m2!3d31.753935!4d35.2136091!16s%2Fg%2F11hdcgj601?hl=iw'
    },
    {
        a: "סניף כיכר ציון - ניתן שירות החוצה לבעלי מוגבלויות",
        b: "יפו 42, ירושלים",
        c: "02-6234248",
        d: "054-7840872",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 08:00-20:00",
        g: "שישי וערבי חג - 08:00-13:00",
        h: 'https://www.google.co.il/maps/place/%D7%99%D7%A4%D7%95+42,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.7820481,35.2198546,17z/data=!4m6!3m5!1s0x150329d731cece7f:0x570a2d546f2a8785!8m2!3d31.7820481!4d35.2198546!16s%2Fg%2F11f5k1_2h4?hl=iw'
    },
    {
        a: "סניף בר אילן",
        b: "בר אילן 11 ירושלים",
        c: "02-5324894",
        d: "054-7840871",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 08:30-20:30",
        g: "שישי וערבי חג - 08:00-13:00",
        h: 'https://www.google.co.il/maps/place/%D7%91%D7%A8+%D7%90%D7%99%D7%9C%D7%9F+11,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.7950925,35.2190444,17z/data=!4m6!3m5!1s0x150329e0bfc700a7:0x4a59d9e4e595adf7!8m2!3d31.7950925!4d35.2190444!16s%2Fg%2F11h_fshhtp?hl=iw'
    },
    {
        a: "סניף כיכר השבת",
        b: "יחזקאל 1 ירושלים",
        c: "02-5004392",
        d: "054-6601212",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 09:00-20:00",
        g: "שישי וערבי חג - 08:30-13:00",
        h: 'https://www.google.co.il/maps/place/%D7%99%D7%97%D7%96%D7%A7%D7%90%D7%9C+1,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.788447,35.2185678,17z/data=!4m6!3m5!1s0x150329d93a113cff:0x3f3a95d3aaebe665!8m2!3d31.788447!4d35.2185678!16s%2Fg%2F11fkdjx9hj?hl=iw'
    },
    {
        a: "סניף גבעת שאול",
        b: "בית הדפוס 12 ירושלים",
        c: "02-5370950",
        d: "054-7840846",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 08:00-19:00",
        g: "שישי וערבי חג - 08:00-13:00",
        h: 'https://www.google.co.il/maps/place/%D7%91%D7%99%D7%AA+%D7%94%D7%93%D7%A4%D7%95%D7%A1+12,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.7864338,35.1884026,17z/data=!4m6!3m5!1s0x1502d64b9e809e99:0x65a1bab3f3d30736!8m2!3d31.7864338!4d35.1884026!16s%2Fg%2F11dzmxqfgy?hl=iw'
    },
    {
        a: "סניף מרכז העיר - ניתן שירות החוצה לבעלי מוגבלויות",
        b: "יפו 50 ירושלים",
        c: "02-5001334",
        d: "054-7840100",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי 08:30-21:00",
        g: "שישי וערבי חג - 08:00-14:00",
        h: 'https://www.google.co.il/maps/place/%D7%99%D7%A4%D7%95+50,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.78289,35.2186329,17z/data=!4m6!3m5!1s0x150329d76b55b753:0x6c037eda53e93436!8m2!3d31.78289!4d35.2186329!16s%2Fg%2F11gh4m6m7r?hl=iw'
    },
    {
        a: "סניף קניון רמות - סניף נגיש",
        b: "גולדה מאיר 255 ירושלים",
        c: "02-5794166",
        d: "054-7840955",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי 09:30-22:00. ימי שישי - 09:00-15:00",
        g: "מוצש - שעה אחרי שבת עד 23:00",
        h: 'https://www.google.co.il/maps/place/%D7%A9%D7%93%D7%A8%D7%95%D7%AA+%D7%92%D7%95%D7%9C%D7%93%D7%94+%D7%9E%D7%90%D7%99%D7%A8+255,+%E2%80%A2+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D,+%D8%A7%D9%84%D9%82%D8%AF%D8%B3,+Jerusalem,+Yerushalayim,+%D8%A3%D9%88%D8%B1%D8%B4%D9%84%D9%8A%D9%85,+%D7%99-%D7%9D,+%E0%A4%9C%E0%A5%87%E0%A4%B0%E0%A5%82%E0%A4%B8%E0%A4%B2%E0%A4%AE,+%E0%B0%9C%E0%B1%87%E0%B0%B0%E0%B1%81%E0%B0%B8%E0%B0%B2%E0%B0%82,+%D0%95%D1%80%D1%83%D1%81%D0%B0%D0%BB%D0%B8%D0%BC,+Jeruzal%C3%A9m,+J%C3%A9rusalem,+Jeruzalem,+%CE%99%CE%B5%CF%81%CE%BF%CF%85%CF%83%CE%B1%CE%BB%CE%AE%CE%BC,+Jeruzs%C3%A1lem,+Yerusal%E2%80%A6JerusalemJerusalem%E2%80%AD/@31.8177725,35.1944093,17z/data=!4m6!3m5!1s0x1502d60b14cba06b:0xf22620ae0e62bc05!8m2!3d31.8177725!4d35.1944093!16s%2Fg%2F12hrqxlvz?hl=iw'
    },
    {
        a: "סניף קניון הראל - סניף נגיש",
        b: "שדרות הראל 1 מבשרת ציון",
        c: "02-5877370",
        d: "054-7095657",
        e: "שעות פתיחה:",
        f: "ראשון עד חמישי - 09:00-21:00. בימי שישי - 09:00-14:30",
        g: "מוצש - שעה אחרי שבת עד 22:30",
        h: 'https://www.google.co.il/maps/place/%D7%A7%D7%A0%D7%99%D7%95%D7%9F+%D7%94%D7%A8%D7%90%D7%9C%E2%80%AD/@31.7998291,35.1489846,17z/data=!4m6!3m5!1s0x1502d6e0a07a2d7d:0x4480c216410c9aea!8m2!3d31.7998291!4d35.1489846!16s%2Fg%2F1wcj_thq?hl=iw'
    },
    {
        a: "סניף מחנה יהודה",
        b: "אגריפס 69 ירושלים",
        c: "02-5718676",
        d: "054-3995593",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 08:00-20:00",
        g: "שישי וערבי חג - 08:00-14:00",
        h: 'https://www.google.co.il/maps/place/%D7%90%D7%92%D7%A8%D7%99%D7%A4%D7%A1+69,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.7837642,35.2136123,17z/data=!4m6!3m5!1s0x1502d62837987dbf:0x5e8edb9589dc719b!8m2!3d31.7837642!4d35.2136123!16s%2Fg%2F11n0_yt0_y?hl=iw'
    },
    {
        a: "סניף גוש עציון - סניף נגיש",
        b: "קניון הרים, צומת הגוש, גוש עציון",
        c: "02-9921305",
        d: "054-5450211",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 09:00-20:00",
        g: "שישי וערבי חג- 09:00-13:00",
        h: 'https://www.google.co.il/maps/place/%D7%A6%D7%95%D7%9E%D7%AA+%D7%92%D7%95%D7%A9+%D7%A2%D7%A6%D7%99%D7%95%D7%9F%E2%80%AD/@31.645641,35.131809,17z/data=!4m6!3m5!1s0x1502de814901350b:0x9d7adf8a6ba746b!8m2!3d31.645641!4d35.131809!16s%2Fg%2F12hs52q1s?hl=iw'
    },
    {
        a: "סניף יד חרוצים - סניף נגיש",
        b: "יד חרוצים 19 ירושלים",
        c: "02-5406344",
        d: "054-6337474",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 08:30-20:30",
        g: "שישי וערבי חג 08:30-13:30",
        h: 'https://www.google.com/maps/place/%D7%99%D7%93+%D7%97%D7%A8%D7%95%D7%A6%D7%99%D7%9D+19,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.751189,35.2160953,17z/data=!4m6!3m5!1s0x1503281e1464d3dd:0x72796411b1cde388!8m2!3d31.751002!4d35.2162114!16s%2Fg%2F11h6ddsjwb'
    },
    {
        a: "סניף ירמיהו",
        b: "רח' ירמיהו 9",
        c: "054-6100221",
        d: "",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 08:30-20:00",
        g: "שישי וערב חג- 08:00-13:00",
        h: 'https://www.google.co.il/maps/place/%D7%A9%D7%9E%D7%92%D7%A8+4,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.792685,35.2088866,17z/data=!4m6!3m5!1s0x1502d62405636767:0x315c2f549b66e516!8m2!3d31.792685!4d35.2088866!16s%2Fg%2F11h01wy47p?hl=iw'
    },
    {
        a: "סניף המושבה הגרמנית - כניסה נגישה לכסא סטנדרטי",
        b: "עמק רפאים 43 ירושלים",
        c: "054-9420099",
        d: "",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 08:30-20:00",
        g: "שישי וערב חג- 08:30-13:00",
        h: 'https://www.google.com/maps/place/%D7%A2%D7%9E%D7%A7+%D7%A8%D7%A4%D7%90%D7%99%D7%9D+43,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/@31.7623699,35.2183278,17z/data=!4m6!3m5!1s0x150328264ff275dd:0x798f819aaea3cd1f!8m2!3d31.7623699!4d35.2183278!16s%2Fg%2F11gl361h4v'
    },
    {
        a: "סניף מישור אדומים - סניף נגיש",
        b: "דקלה 5. מתחם צרפתי החדש",
        c: "02-6473131",
        d: "054-5438624",
        e: "שעות פתיחה:",
        f: "ראשון-חמישי - 08:30-19:00",
        g: "שישי וערב חג - 08:30-13:00",
        h: 'https://www.google.com/maps/search/%D7%93%D7%A7%D7%9C%D7%94+5.+%D7%9E%D7%AA%D7%97%D7%9D+%D7%A6%D7%A8%D7%A4%D7%AA%D7%99+%D7%94%D7%97%D7%93%D7%A9%E2%80%AD/@31.7831677,35.2309399,21z?hl=he'
    }];

    
    const handleClick = (link) => {
        window.open(link, '_blank');
    };


    return (
        <>
            <br /><br /><br />
            {branches.map((item) => (
                <>
                    <ListGroup horizontal >
                        <ListGroup.Item
                            style={{ width: '10%', marginLeft: '14%', backgroundColor: '#f6f6f6', borderColor: '#f6f6f6', textAlign: 'center' , cursor:'pointer'}}
                            onClick={() => { handleClick(`${item.h}`) }}
                        >
                            הוראות<br /> הגעה<br /><br />
                            <img src={location}></img>
                        </ListGroup.Item>

                        <ListGroup.Item
                            style={{ width: '2%', backgroundColor: 'white', borderColor: 'white', textAlign: 'center' }}>
                        </ListGroup.Item>

                        <ListGroup.Item dir='rtl'
                            style={{ width: '40%', backgroundColor: '#f6f6f6', borderColor: '#f6f6f6' }}>
                            <b>{item.e}</b><br />
                            {item.f}<br />
                            {item.g}<br />
                        </ListGroup.Item>

                        <ListGroup.Item dir='rtl'
                            style={{ width: '20%', backgroundColor: '#f6f6f6', borderColor: '#f6f6f6' }}>
                            <b>{item.a}</b><br />
                            {item.b}<br />
                            {item.c}<br />
                            {item.d}
                        </ListGroup.Item>



                    </ListGroup>
                    <br />
                </>
            ))}


            <br></br>
            <img src={map} style={{ width: '100%' }}></img>
        </>
    );
}