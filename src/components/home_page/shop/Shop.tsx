import { useContext, useEffect, useState } from "react"
import { getNbuData } from "../../../common/currencies/getNbuData"
import { ShopItem } from "./shopItem/ShopItem"
import "./shop.css"
import { ShopContext } from "../../../common/context/ShopContext"

export function Shop() {
    const [isPriceLoading, setIsPriceLoaded] = useState(false)
    const { items, deleteItem } = useContext(ShopContext)
    const [usdUAHprice, setUsdUahPrice] = useState(0)

    useEffect(() => {
        getNbuData().then(data => {
            const usdData = data.find((currency) => currency.cc === "USD")
            setUsdUahPrice(usdData.rate)
            setIsPriceLoaded(true)
        })
    })

    return <div className="container">
        <div className="shop-section">
            {items.map((item) => {
                return <ShopItem
                    deleteHandler={deleteItem}
                    key={item.id}
                    item={item}
                    usdUAHprice={usdUAHprice}
                    isPriceLoading={isPriceLoading}
                ></ShopItem>
            })}
        </div>
    </div>
}