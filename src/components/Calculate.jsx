import React, {useState} from 'react'
import GroceriesList from './Groceries'

function CalculateTotal(props){
    // const priceArr = Groceries.map((Groceries, index)=>{
    //     return <li key={index}>{Groceries.price}</li>
    // })

    let total = 0
    // for (let i=0; i<priceArr.length; i++){
    //     total += priceArr[i].props.children
    // }
    for (let i=0; i<props.length; i++){
        total += props[i].price
    }
    console.log(props)
    return total
}



export default CalculateTotal