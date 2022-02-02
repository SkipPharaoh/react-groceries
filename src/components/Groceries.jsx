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

const GroceriesList = ({item, brand, price, quantity}) => {
    const [groceries, setGroceries] = useState(Groceries)
    const itemArr = Groceries.map((Groceries, index)=>{
        return <li>{Groceries.item}</li>
    })
    const brandArr = Groceries.map((Groceries, index)=>{
        return <li>{Groceries.brand}</li>
    })
    const quantityArr = Groceries.map((Groceries, index)=>{
        return <li>{Groceries.quantity}</li>
    })
    const priceArr = Groceries.map((Groceries, index)=>{
        return <li>{Groceries.price}</li>
    })

    return (
        <>
            <ul>
                {itemArr}
            </ul>
            <ul>
                {brandArr}
            </ul>
            <ul>
                {quantityArr}
            </ul>
            <ul>
                {priceArr}
            </ul>
        </>
    )
}

export default GroceriesList