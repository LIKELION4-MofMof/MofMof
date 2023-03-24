import { Link } from "react-router-dom";
const Main = () => {
  // const [geckoItems, setGeckoItems] = useState(data);
  return(
    <>
      <button>
        <Link to={"/fattail-home"}>펫테일 페이지</Link>
      </button>
    </>
  )
}

export default Main;