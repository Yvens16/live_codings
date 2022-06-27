import { useParams } from "react-router-dom";

export default function Game() {
  let {categoryId} = useParams();
  return <div className="Game">Hello, {categoryId}</div>;
}
