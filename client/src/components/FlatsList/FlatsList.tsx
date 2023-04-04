import { useGetFlatsQuery } from "../../store/reducers/section.api";

function FlatsList() {
  const {data: flatsFromServer, isSuccess} = useGetFlatsQuery();
  return (<ul>list
    {isSuccess && flatsFromServer.map((flat) => <li key={flat.id}>{flat.price}</li>)}
  </ul>)
}

export { FlatsList };
