import { Route } from "react-router-dom";
import SomeList from "./SomeList";
import MemberPage from "./MemberPage";

export const routes = [
    <Route index element={<SomeList></SomeList>}></Route>,
    <Route path=":username" element={<MemberPage></MemberPage>}></Route>
]