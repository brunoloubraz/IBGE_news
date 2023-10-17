import trybeLogo  from "../../images/trybe_logo.svg"
import "../Header/index.css"
import { fetchApi } from "../../services/fetchApi";
import { useEffect, useState } from "react";
import { news } from "../../utils/types";

function Header() {

  const [data, setData] = useState<news[]>([]);

  useEffect(() => {
    async function getFetch() {
      const fetch = await fetchApi('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100')
      setData(fetch);
    }
    getFetch();
  }, [])
  console.log(data);
  return (
    <header>
        <div className="title">
          <img src={ trybeLogo } alt="Logo Trybe"/>
          <h1>Trybe News</h1>
        </div>
        <div className="most-recent-news">
          <h5>Notícia mais recente</h5>
          {/* <h3>{ data[0].page }</h3> */}
        </div>
    </header>
  )
}

export default Header;