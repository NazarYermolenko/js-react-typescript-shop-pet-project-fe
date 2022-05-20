import { IShopItem } from "./IShopItem";

export function ShopItem(props: { item: IShopItem, usdUAHprice: number }) {
    return <div className="item">
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <div>
            <div>Items left: {props.item.count}</div>
            <div>USD:{props.item.priceUSD} $</div>
            <div>UAH:{props.item.priceUAH || props.item.priceUSD * props.usdUAHprice} Hryvna</div>
        </div>
    </div>
}