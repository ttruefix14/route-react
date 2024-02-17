import { useParams } from "react-router";

import { ReactNode } from "react";
import Member from "../../../models/Member";
import { connect, useSelector } from "react-redux";

interface MemberProps {
    selectedMember?: Member;
}

function MemberPage(props: MemberProps) {
    const counter = useSelector((x: any) => x.counter)
    return <>
        <p>User: {props.selectedMember?.username} with password: {props.selectedMember?.password}</p>
        <p>{JSON.stringify(counter)}</p>
    </>
}

const mapReduxStateToProps = (globalReduxState: any): MemberProps => {
    console.log('globalMember', globalReduxState);
    return {
        selectedMember: globalReduxState.member.member,
    };
}


// При помощи connect
// Мы соединяем данные redux из mapStateToProps
// С пропсами компонента Thunk
export default connect(mapReduxStateToProps)(MemberPage);