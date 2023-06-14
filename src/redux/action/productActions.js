export const decreaseQty =(qty,index)=>{
    debugger
    return{
        type: "DECREASE_QTY_PRODUCT",
        i : index,
        payload : qty
    }
}

export const addQty =(qty, index)=>{
    return{
        type: "ADD_QTY_PRODUCT",
        i : index,
        payload : qty
    }
}                                                                                               