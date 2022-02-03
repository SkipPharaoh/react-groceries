import React, {useState} from 'react'

const Groceries = [
    {
        item: 'Flour',
        brand: 'Golden Start',
        price: 12,
        quantity: '1lb',
        isPurchased: false
    },
    {
        item: 'Butter',
        brand: "Miyoko's Creamery",
        price: 8,
        quantity: '227G',
        isPurchased: false
    },
    {
        item: 'Turbinado Cane Sugar',
        brand: 'Sugar In The Raw',
        price: 7,
        quantity: '6lb',
        isPurchased: false
    },
    {
        item: 'Whole Grains Oatnut Bread',
        brand: 'Arnold',
        price: 4,
        quantity: '16 Slices',
        isPurchased: false
    },
    {
        item: 'Oatmilk',
        brand: 'Oatly',
        price: 5,
        quantity: '1/2 gallon',
        isPurchased: false
    },
    {
        item: 'Black Bean Burger',
        brand: 'Don Lee Farms',
        price: 14,
        quantity: '12',
        isPurchased: false
    },
    {
        item: 'Pinot Noir',
        brand: 'Domaine Serene',
        price: 75,
        quantity: '1 Bottle',
        isPurchased: false
    },
    {
        item: 'Udon Noodles',
        brand: 'Nongshim',
        price: 18,
        quantity: '6 ct',
        isPurchased: false
    },
]
const GroceriesList = (props) => {

    function CalculateTotal() {
        let total = 0
        for (let i = 0; i < Groceries.length; i++) {
            total = total + Groceries[i].price
        }
        return total
    }


    return (
        <div>
            <div className="listItems">
                {Groceries.map((item) => {

                    let purchased = "Not Purchased"
                    if (item.isPurchased === true) {
                        purchased = "Purchased"
                    }

                    return (
                        <ul className='List'>
                            <li><h4>{item.item}</h4></li>
                            <li>{item.brand}</li>
                            <li>{item.quantity}</li>
                            <li>{item.price}</li>
                            <li>{purchased}</li>
                        </ul>
                    )
                })}
            </div>
            <h3>Total Price:</h3><p>${CalculateTotal().toFixed(2)}</p>
        </div>
    )
}
export default GroceriesList