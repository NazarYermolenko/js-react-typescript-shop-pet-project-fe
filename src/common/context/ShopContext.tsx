import { createContext, useState } from "react";
import { IShopItem } from "../../components/home_page/shop/shopItem/IShopItem";

interface IShopContext {
    items: IShopItem[],
    deleteItem?: (itemToDelete: IShopItem) => void
}

const defaultValues = [
    { id: 1, name: "Simple T-short", count: 4, description: "Simple T-short One", priceUSD: 10 },
    { id: 2, name: "Simple T-short", count: 4, description: "Simple T-short Two", priceUSD: 20 },
    { id: 3, name: "Simple T-short", count: 4, description: "Simple T-short Three", priceUSD: 30 },
    { id: 4, name: "Simple T-short", count: 4, description: "Simple T-short Four", priceUSD: 40 },
    { id: 5, name: "Simple T-short", count: 4, description: "Simple T-short Six", priceUSD: 30 },
    { id: 6, name: "Simple T-short", count: 4, description: "Simple T-short Seven", priceUSD: 20 },
    { id: 7, name: "Simple T-short", count: 4, description: "Simple T-short Eight", priceUSD: 10 },
]

export const ShopContext = createContext<IShopContext>(null)


export function ShopContextProvider(props: { children }) {
    const [shopItems, setShopItems] = useState(defaultValues)
    function deleteItem(itemToDelete: IShopItem) {
        setShopItems(() => {
            return shopItems.filter(item => {
                return itemToDelete.id != item.id
            })
        })
    }

    return <ShopContext.Provider value={{ items: shopItems, deleteItem }}>
        {props.children}
    </ShopContext.Provider>
}