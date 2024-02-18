import { useSelector } from "react-redux";
import { OrderThing } from "../../../models/orderThing";
import Color from "./Color";

const CurrentList = () => {
    const orderedList = useSelector((gs: any) => gs.order.list);

    return (
        <>
            {orderedList.map((x: OrderThing) => {
                return (
                    <div style={{display: 'inline'}}>
                        <Color item={x} display="inline" key={`Oi_${x.id}`}></Color>
                    </div>
                );
            })}
        </>
    );
};

export default CurrentList;