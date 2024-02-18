import { useDispatch } from "react-redux";
import { OrderThing } from "../../../models/orderThing";
import { orderCheck } from "../../../stateManagement/slice";
import { Action, ActionCreator, UnknownAction } from "@reduxjs/toolkit";

interface ColorProps {
    item: OrderThing;
    display?: string;
}

const Color = (props: ColorProps) => {
    const { item, display } = props;
    const css = {
        display: display || "block",
        border: `2px solid ${item.color}`,
        width: '100px',
    };

    const dispatch = useDispatch();

    const onChange = (e: any) => {
        dispatch(orderCheck(item));
        // dispatch({
        //     type: orderCheck,
        //     payload: item,
        // });
    };

    return <div style={css}>
        <input type="checkbox" onChange={onChange}></input>
        <span>{item.name}</span>
    </div>;
};

export default Color;
