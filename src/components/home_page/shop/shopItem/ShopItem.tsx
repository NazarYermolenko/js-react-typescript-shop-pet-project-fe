import { Button } from "../../../common_components/button/Button";
import { IShopItem } from "./IShopItem";

export function ShopItem(props: { item: IShopItem, usdUAHprice: number, isPriceLoading: boolean, deleteHandler: (item: IShopItem) => void }) {
    const priceUah = props.item.priceUAH || (props.item.priceUSD * props.usdUAHprice).toFixed(2)

    return <div className="shop_item">
        <div className="title">
            <h3>{props.item.name}</h3>
        </div>
        <div className="description">
            <p>{props.item.description}</p>
        </div>
        <div>
            <div>Items left: {props.item.count}</div>
            <div>USD:{props.item.priceUSD} $</div>
            {props.isPriceLoading &&
                <div>UAH:{props.item.priceUAH || priceUah} Hryvnas</div>
            }
        </div>
        <Button onClick={props.deleteHandler.bind(this, props.item)}>Delete</Button>
    </div >
}