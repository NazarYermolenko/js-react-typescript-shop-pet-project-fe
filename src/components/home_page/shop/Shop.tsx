import { useState } from "react"
import { IShopItem } from "./shopItem/IShopItem"
import { ShopItem } from "./shopItem/ShopItem"


export function Shop() {
    const [goods, setGoods] = useState<Array<IShopItem>>([
        { id: 1, name: "Simple T-short", count: 4, description: "Simple T-short One", priceUSD: 10 },
        { id: 2, name: "Simple T-short", count: 4, description: "Simple T-short Two", priceUSD: 20 },
        { id: 3, name: "Simple T-short", count: 4, description: "Simple T-short Three", priceUSD: 30 },
        { id: 4, name: "Simple T-short", count: 4, description: "Simple T-short Four", priceUSD: 40 },
        { id: 5, name: "Simple T-short", count: 4, description: "Simple T-short Six", priceUSD: 30 },
        { id: 6, name: "Simple T-short", count: 4, description: "Simple T-short Seven", priceUSD: 20 },
        { id: 7, name: "Simple T-short", count: 4, description: "Simple T-short Eight", priceUSD: 10 },
    ])

    return <div className="deck">
        {goods.map((item) => {
            return <ShopItem item={item} usdUAHprice={29.35}></ShopItem>
        })}
    </div>
}