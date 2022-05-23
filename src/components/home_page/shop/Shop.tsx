import { useContext, useEffect, useState } from "react"
import { getNbuData } from "../../../common/currencies/getNbuData"
import { ShopItem } from "./shopItem/ShopItem"
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
        <div className="shop_section">
            {!(items.length > 0) ? <p>No items available</p> : items.map((item) => {
                return <ShopItem
                    key={item.id}
                    item={item}
                    usdUAHprice={usdUAHprice}
                    isPriceLoading={isPriceLoading}
                    deleteHandler={deleteItem}
                ></ShopItem>
            })}
        </div>
    </div>
}