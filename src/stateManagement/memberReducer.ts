import Member from "../models/Member";


interface State {
    member: Member | null;
}

const initState = {
    member: null
}

export const MemberActions = Object.freeze({
    setMember: (member: Member) => ({ type: '[COUNTER_STATE] SET_MEMBER', payload: member }),
});

const memberReducer = (state: State = initState, action: any) => {
    console.log(action);
    switch (action.type) {
        case '[COUNTER_STATE] SET_MEMBER':
            return { ...state, member: action.payload };
        default:
            return { ...state };
    }
}

export default memberReducer;