interface State {
    text: string | null;
    counter: number;
}

const initState = {
    text: 'Счетчик',
    counter: 15
}

export const Actions = Object.freeze({
    incr: (counter: number) => ({ type: '[COUNTER_STATE] INCR', payload: counter + 1 }),
    decr: (counter: number) => ({ type: '[COUNTER_STATE] DECR', payload: counter - 1 }),
    setText: (text: string) => ({ type: '[COUNTER_STATE] SET_TEXT', payload: text }),
});

const counterReducer = (state: State = initState, action: any) => {
    console.log(action);
    switch (action.type) {
        case '[COUNTER_STATE] INCR':
            return { ...state, counter: action.payload };
        case '[COUNTER_STATE] DECR':
            return { ...state, counter: action.payload };
        case '[COUNTER_STATE] SET_TEXT':
            return { ...state, text: action.payload };
        default:
            return { ...state };
    }
}

export default counterReducer;