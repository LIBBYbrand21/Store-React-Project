import p1 from '../PaperImage/p1.webp'
import p2 from '../PaperImage/p2.webp'
import p3 from '../PaperImage/p3.webp'
import p4 from '../PaperImage/p4.webp'
import p5 from '../PaperImage/p5.webp'
import p6 from '../PaperImage/p6.webp'
import p7 from '../PaperImage/p7.webp'
import p8 from '../PaperImage/p8.webp'
import p9 from '../PaperImage/p9.webp'
import p10 from '../PaperImage/p10.webp'
import p11 from '../PaperImage/p11.webp'
import p12 from '../PaperImage/p12.webp'
import p13 from '../PaperImage/p13.webp'
import p14 from '../PaperImage/p14.webp'
import p15 from '../PaperImage/p15.webp'
import p16 from '../PaperImage/p16.webp'
import p17 from '../PaperImage/p17.webp'
import p18 from '../PaperImage/p18.webp'
import p19 from '../PaperImage/p19.webp'
import p20 from '../PaperImage/p20.webp'
import p21 from '../PaperImage/p21.webp'

const products = [{
    id: 0,
    name: "מחברת ",
    description: "כריכת קרטון A5",
    product_image: p1,
    price: "1.60",
    qty: 100,
    code: 43
},
{
    id: 1,
    name: "מחברת ספירל",
    description: "כריכת פלסטיק איכותי",
    product_image: p2,
    price: "14.90",
    qty: 100,
    code: 44
},
{
    id: 2,
    name: "מדבקות שם",
    description: "לעיפרון HERMA",
    product_image: p3,
    price: "4.90",
    qty: 100,
    code: 45
},
{
    id: 3,
    name: "בריסטול לבן",
    description: "70 יחידות A4",
    product_image: p4,
    price: "15.90",
    qty: 100,
    code: 46
},
{
    id: 4,
    name: "מדבקות לבבות",
    description: "HERMA MAGIC",
    product_image: p5,
    price: "4.90",
    qty: 100,
    code: 47
},
{
    id: 5,
    name: "מעטפות לבנות",
    description: "1000 יחידות",
    product_image: p6,
    price: "110.90",
    qty: 100,
    code: 48
},
{
    id: 6,
    name: "סט 30 מדבקות",
    description: "במגוון עיצובים מרהיבים",
    product_image: p7,
    price: "7.90",
    qty: 100,
    code: 49
},
{
    id: 7,
    name: "מדבקות שם",
    description: "10 יחידות",
    product_image: p8,
    price: "2.50",
    qty: 100,
    code: 50
},
{
    id: 8,
    name: "מחברת תווים",
    description: "פיגנה A4",
    product_image: p9,
    price: "8.90",
    qty: 100,
    code: 51
},
{
    id: 9,
    name: "מחברת ספירל",
    description: "כריכת פלסטיק A4",
    product_image: p10,
    price: "17.90",
    qty: 100,
    code: 52
},
{
    id: 10,
    name: "מדבקות פרחים",
    description: "HERMA MAGIC",
    product_image: p11,
    price: "4.90",
    qty: 100,
    code: 53
},
{
    id: 11,
    name: "דפדפת בודד",
    description: "A4 שורה איכותי",
    product_image: p12,
    price: "7.50",
    qty: 100,
    code: 54
},
{
    id: 12,
    name: "נייר הדפסה",
    description: "5 חבילות A4",
    product_image: p13,
    price: "119.90",
    qty: 100,
    code: 55
},
{
    id: 13,
    name: "דפדפת בודד",
    description: " 40 דף A5",
    product_image: p14,
    price: "1.80",
    qty: 100,
    code: 56
},
{
    id: 14,
    name: "מחברת חומה",
    description: "40 דף CAMPUS",
    product_image: p15,
    price: "1.50",
    qty: 100,
    code: 57
},
{
    id: 15,
    name: "מחברת יומן",
    description: "INHOUSE",
    product_image: p16,
    price: "3.90",
    qty: 100,
    code: 58
},
{
    id: 16,
    name: "דפדפת",
    description: "מארז 5 יחידות A5",
    product_image: p17,
    price: "19.90",
    qty: 100,
    code: 59
},
{
    id: 17,
    name: "בלוק ספירל",
    description: "A4 לבן משובץ",
    product_image: p18,
    price: "21.90",
    qty: 100,
    code: 60
},
{
    id: 18,
    name: "בלוק כתיבה",
    description: "כריכה קשה 100 דף",
    product_image: p19,
    price: "27.90",
    qty: 100,
    code: 61
},
{
    id: 19,
    name: "נייר הדפסה",
    description: "NAVIGATOR A4",
    product_image: p20,
    price: "29.90",
    qty: 100,
    code: 62
},
{
    id: 20,
    name: "מדבקות לבנות",
    description: "HERMA 32 דף",
    product_image: p21,
    price: "7.90",
    qty: 100,
    code: 63
}
]

const paperReducer = (state = products, action) => {
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
export default paperReducer;