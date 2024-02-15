import Member from "./MemberPage"
import MemberItem from "./MemberItem"

const members = [
    { username: "VasyanPro", password: "Cool" },
    { username: "Gickych", password: "Bad" },
    { username: "Olel", password: "lek" }
]

export default function SomeList() {
    return <>
        {members.map((m => <MemberItem member={m}></MemberItem>))}
        <Member></Member>
    </>
}