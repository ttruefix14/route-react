import { OrderThing } from "../../../models/orderThing"
import Color from "./Color"


const list: OrderThing[] = [
    {
        id: 1,
        name: 'Красный',
        color: 'red',
    },
    {
        id: 2,
        name: 'Синий',
        color: 'blue',
    },
    {
        id: 3,
        name: 'Зеленый',
        color: 'green',
    }
];



const OrderList = () => {
    return <div style={{padding: '10px'}}>
        {list.map(x => <Color item={x} key={`oi_${x.id}`}></Color>)}
    </div>
};

export default OrderList;