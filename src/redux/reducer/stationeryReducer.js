import s1 from '../StationeryImage/s1.webp'
import s2 from '../StationeryImage/s2.webp'
import s3 from '../StationeryImage/s3.webp'
import s4 from '../StationeryImage/s4.webp'
import s5 from '../StationeryImage/s5.webp'
import s6 from '../StationeryImage/s6.webp'
import s7 from '../StationeryImage/s7.webp'
import s8 from '../StationeryImage/s8.webp'
import s9 from '../StationeryImage/s9.webp'
import s10 from '../StationeryImage/s10.webp'
import s11 from '../StationeryImage/s11.webp'
import s12 from '../StationeryImage/s12.webp'
import s13 from '../StationeryImage/s13.webp'
import s14 from '../StationeryImage/s14.webp'
import s15 from '../StationeryImage/s15.webp'
import s16 from '../StationeryImage/s16.webp'
import s17 from '../StationeryImage/s17.webp'
import s18 from '../StationeryImage/s18.webp'
import s19 from '../StationeryImage/s19.webp'
import s20 from '../StationeryImage/s20.webp'
import s21 from '../StationeryImage/s21.webp'

const products = [{
    id: 0,
    name: "עט ג'ל ",
    description: "0.4 PILOT",
    product_image: s1,
    price: 8.90,
    qty: 100,
    code: 64
},
{
    id: 1,
    name: "עיפרון שפיצים",
    description: "0.5 PILOT",
    product_image: s2,
    price: 6.90,
    qty: 100,
    code: 65
},
{
    id: 2,
    name: "עט לורד",
    description: " מארז 12 יחידות",
    product_image: s3,
    price: 37.90,
    qty: 100,
    code: 66
},
{
    id: 3,
    name: "בקבוק טיפקס",
    description: "מארז 3 יחידות",
    product_image: s4,
    price: 10.50,
    qty: 100,
    code: 67
},
{
    id: 4,
    name: "עיפרון מכני",
    description: "0.7 MONAMI",
    product_image: s5,
    price: 6.90,
    qty: 100,
    code: 68
},
{
    id: 5,
    name: "לורדים דקים",
    description: "10 יחידות במארז",
    product_image: s6,
    price: 15.90,
    qty: 100,
    code: 69
},
{
    id: 6,
    name: "מחדד",
    description: "מתכת STAEDTLER",
    product_image: s7,
    price: 4.90,
    qty: 100,
    code: 70
},
{
    id: 7,
    name: "סט סרגלים",
    description: "שקוף ARDA",
    product_image: s8,
    price: 9.90,
    qty: 100,
    code: 71
},
{
    id: 8,
    name: "סרגל",
    description: "מתכת",
    product_image: s9,
    price: 3.90,
    qty: 100,
    code: 72
},
{
    id: 9,
    name: "לורד הדגשה",
    description: "זוהר",
    product_image: s10,
    price: 4.00,
    qty: 100,
    code: 73
},
{
    id: 10,
    name: "עפרונות",
    description: "מארז 12 עפרונות",
    product_image: s11,
    price: 5.90,
    qty: 100,
    code: 74
},
{
    id: 11,
    name: "לורד הדגשה",
    description: "STABILO",
    product_image: s12,
    price: 9.90,
    qty: 100,
    code: 75
},
{
    id: 12,
    name: "מחדד מעוצב",
    description: "MAPED",
    product_image: s13,
    price: 8.90,
    qty: 100,
    code: 76
},
{
    id: 13,
    name: "בקבוק טיפקס",
    description: "TIPP-EX",
    product_image: s14,
    price: 6.90,
    qty: 100,
    code: 77
},
{
    id: 14,
    name: "מארז  עטי פיילוט",
    description: "10 עטים",
    product_image: s15,
    price: 79.90,
    qty: 100,
    code: 78
},
{
    id: 15,
    name: "שבלונה",
    description: "במגוון צורות ARDA",
    product_image: s16,
    price: 14.90,
    qty: 100,
    code: 79
},
{
    id: 16,
    name: "מחוגה",
    description: "בטיחותית MAPED",
    product_image: s17,
    price: 10.50,
    qty: 100,
    code: 80
},
{
    id: 17,
    name: "מחזיק ארגונומי לעיפרון",
    description: "INHOUSE",
    product_image: s18,
    price: 6.90,
    qty: 100,
    code: 81
},
{
    id: 18,
    name: "עופרת-שפיץ",
    description: "0.7 PENAC",
    product_image: s19,
    price: 2.90,
    qty: 100,
    code: 82
},
{
    id: 19,
    name: "לורד סימון",
    description: "MONAMI שחור",
    product_image: s20,
    price: 4.90,
    qty: 100,
    code: 83
},
{
    id: 20,
    name: "דבק סטיק ",
    description: "3 יחידות ",
    product_image: s21,
    price: 18.00,
    qty: 3,
    code: 84
}
]

const stationeryReducer = (state = products, action) => {
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
export default stationeryReducer;