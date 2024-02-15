import { useParams } from "react-router";

import { ReactNode } from "react";
import Member from "../../../models/Member";
import { useDispatch } from "react-redux";
import { Actions } from "../../../stateManagement/counterReducer";
import { MemberActions } from "../../../stateManagement/memberReducer";
import { useNavigate } from "react-router-dom";

interface MemberItemProps {
    member: Member;
}

export default function MemberItem(props: MemberItemProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const select = () => {
        dispatch(MemberActions.setMember(props.member));
        navigate(`${props.member.username}`)
    }
    return <>
        <p>User: {props.member.username} with password: {props.member.password}</p>
        <button onClick={select}>Выбрать</button>
    </>
}

