import { useParams, useSearchParams } from "react-router-dom";

export function Page2WithParams() {
    const qp = useParams();

    const [queryParams, setQueryParams] = useSearchParams();

    console.log(qp);
    console.log(queryParams);

    return <div>Страница 2 c параметром id: {qp.id} и параметром text: {qp.text} <br></br>
        параметр поиск: {queryParams.get("search")}</div>;
}