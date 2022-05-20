import { useEffect, useState } from "react"
import { getNbuData } from "../../../common/currencies/getNbuData"
import { IShopItem } from "./shopItem/IShopItem"
import { ShopItem } from "./shopItem/ShopItem"


export function Shop() {
    const [isPriceLoading, setIsPriceLoaded] = useState(false)
    const [shopItems, setShopItems] = useState<Array<IShopItem>>([
        { id: 1, name: "Simple T-short", count: 4, description: "Simple T-short One", priceUSD: 10 },
        { id: 2, name: "Simple T-short", count: 4, description: "Simple T-short Two", priceUSD: 20 },
        { id: 3, name: "Simple T-short", count: 4, description: "Simple T-short Three", priceUSD: 30 },
        { id: 4, name: "Simple T-short", count: 4, description: "Simple T-short Four", priceUSD: 40 },
        { id: 5, name: "Simple T-short", count: 4, description: "Simple T-short Six", priceUSD: 30 },
        { id: 6, name: "Simple T-short", count: 4, description: "Simple T-short Seven", priceUSD: 20 },
        { id: 7, name: "Simple T-short", count: 4, description: "Simple T-short Eight", priceUSD: 10 },
    ])
    const [usdUAHprice, setUsdUahPrice] = useState(0)

    useEffect(() => {
        getNbuData().then(data => {
            const usdData = data.find((currency) => currency.cc === "USD")
            setUsdUahPrice(usdData.rate)
            setIsPriceLoaded(true)
        })

    })

    return <div className="deck">

        {shopItems.map((item) => {
            return <ShopItem
                key={item.id}
                item={item}
                usdUAHprice={usdUAHprice}
                isPriceLoading={isPriceLoading}
            ></ShopItem>
        })}
    </div>
}