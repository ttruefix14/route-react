import { connect, useDispatch } from "react-redux";
import { Actions } from "../../../stateManagement/counterReducer";

interface counterProps {
    text: string;
    counter: number;
}

const Counter = (props: counterProps) => {
    let text: string;
    const dispatch = useDispatch();

    const incr = (counter: number) => {
        dispatch(Actions.incr(counter));
    };

    const decr = (counter: number) => {
        dispatch(Actions.decr(counter));
    };

    const setText = (text: string): void => {
        if (text) dispatch(Actions.setText(text));
    };

    const onChange = (event: any) => {
        text = event.target.value;
    }

    return <div>
        <input onChange={onChange}></input>
        <button onClick={() => setText(text)}>Заменить текст</button>
        <button onClick={() => incr(props.counter)}>+</button>
        <button onClick={() => decr(props.counter)}>-</button>
        <p>{props.text + ': ' + props.counter}</p>
    </div>
}

const mapReduxStateToProps = (globalReduxState: any): counterProps => {
    console.log('globalredux', globalReduxState);
    return {
        text: globalReduxState.counter.text,
        counter: globalReduxState.counter.counter,
        //  listOfColor: globalReduxState.order.list
    };
}


// При помощи connect
// Мы соединяем данные redux из mapStateToProps
// С пропсами компонента Thunk
export default connect(mapReduxStateToProps)(Counter);