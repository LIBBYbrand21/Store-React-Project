import e1 from '../ElectronicImage/e1.webp'
import e2 from '../ElectronicImage/e2.webp'
import e3 from '../ElectronicImage/e3.webp'
import e4 from '../ElectronicImage/e4.webp'
import e5 from '../ElectronicImage/e5.webp'
import e6 from '../ElectronicImage/e6.webp'
import e7 from '../ElectronicImage/e7.webp'
import e8 from '../ElectronicImage/e8.webp'
import e9 from '../ElectronicImage/e9.webp'
import e10 from '../ElectronicImage/e10.webp'
import e11 from '../ElectronicImage/e11.webp'
import e12 from '../ElectronicImage/e12.webp'
import e13 from '../ElectronicImage/e13.webp'
import e14 from '../ElectronicImage/e14.webp'
import e15 from '../ElectronicImage/e15.webp'
import e16 from '../ElectronicImage/e16.webp'
import e17 from '../ElectronicImage/e17.webp'
import e18 from '../ElectronicImage/e18.webp'
import e19 from '../ElectronicImage/e19.webp'
import e20 from '../ElectronicImage/e20.webp'
import e21 from '../ElectronicImage/e21.webp'

const products = [{
    id: 0,
    name: "דיסק און קי ",
    description: "Sandisk",
    product_image: e1,
    price: 19.90,
    qty: 100,
    code: 1
},
{
    id: 1,
    name: "כרטיס זכרון",
    description: "SANDISK 16 GB",
    product_image: e2,
    price: 29.90,
    qty: 100,
    code: 2
},
{
    id: 2,
    name: "כרטיס מיקרו",
    description: "SANDISK 16 GB",
    product_image: e3,
    price: 19.90,
    qty: 100,
    code: 3
},
{
    id: 3,
    name: "רמקולים למחשב",
    description: "LOGITECH S120",
    product_image: e4,
    price: 54.90,
    qty: 100,
    code: 4
},
{
    id: 4,
    name: "עכבר חוטי",
    description: "LOGITECH M90",
    product_image: e5,
    price: 36.90,
    qty: 100,
    code: 5
},
{
    id: 5,
    name: "מקלדת חוטית",
    description: "LOGITECH -120",
    product_image: e6,
    price: 49.90,
    qty: 100,
    code: 6
},
{
    id: 6,
    name: "מטען קיר",
    description: "Cycle 1A",
    product_image: e7,
    price: 19.90,
    qty: 100,
    code: 7
},
{
    id: 7,
    name: "אוזניות",
    description: "JBL C100SI INEAR",
    product_image: e8,
    price: 69.90,
    qty: 100,
    code: 8
},
{
    id: 8,
    name: "אוזניות קשת",
    description: "Philips SHL3075",
    product_image: e9,
    price: 149.90,
    qty: 100,
    code: 9
},
{
    id: 9,
    name: "מצלמת רשת",
    description: "SILVERLINE WC500 FHD",
    product_image: e10,
    price: 199.90,
    qty: 100,
    code: 10
},
{
    id: 10,
    name: "נגן MP3",
    description: "8G קליפ ספורט",
    product_image: e11,
    price: 229.90,
    qty: 100,
    code: 11
},
{
    id: 11,
    name: "סוללות AA",
    description: "מארז 10 יחידות ",
    product_image: e12,
    price: 19.90,
    qty: 100,
    code: 12
},
{
    id: 12,
    name: "מחשבון מדעי",
    description: "CASIO FX-82ES PLUS",
    product_image: e13,
    price: 49.90,
    qty: 100,
    code: 13
},
{
    id: 13,
    name: "מחשבון מדעי",
    description: "CASIO FX-991-ES",
    product_image: e14,
    price: 99.90,
    qty: 100,
    code: 14
},
{
    id: 14,
    name: "רמקול נייד ואלחוטי",
    description: "CONCEPT BTS-F7",
    product_image: e15,
    price: 69.90,
    qty: 100,
    code: 15
},
{
    id: 15,
    name: "מנורת שולחן ",
    description: "לבנה מתקפלת",
    product_image: e16,
    price: 49.90,
    qty: 100,
    code: 16
}
    , {
    id: 16,
    name: "כבל למדפסת",
    description: "USB 2 מטר",
    product_image: e17,
    price: 12.90,
    qty: 100,
    code: 17
},
{
    id: 17,
    name: "מקלדת + עכבר",
    description: "LOGITECH MK-270",
    product_image: e18,
    price: 119.90,
    qty: 100,
    code: 18
},
{
    id: 18,
    name: "כונן חיצוני ",
    description: "1T USB 3.0 WD",
    product_image: e19,
    price: 249.90,
    qty: 100,
    code: 19
},
{
    id: 19,
    name: "סוללות AAA",
    description: "ENERGIZER במארז",
    product_image: e20,
    price: 11.90,
    qty: 100,
    code: 20
},
{
    id: 20,
    name: " רמקולים למחשב ",
    description: " LOGITECH",
    product_image: e21,
    price: 79.90,
    qty: 100,
    code: 21
}
]

const electeonicReducer = (state = products, action) => {
    debugger
    if (action.type === "DECREASE_QTY_PRODUCT") {
        // return { ...state, qty: action.payload }
        const index = action.i;
        const newArray = [...state];
        newArray[index].qty = action.payload;
        state = newArray;
    }
    if (action.type === "ADD_QTY_PRODUCT") {
        // return { ...state, qty: action.payload }
        const index = action.i;
        const newArray = [...state];
        newArray[index].qty = action.payload;
        state = newArray;
    }
    return state
};
export default electeonicReducer;