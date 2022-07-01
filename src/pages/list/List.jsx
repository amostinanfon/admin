import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
//import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useSelector } from "react-redux";
// import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";


export default function List() {

    const location = useLocation();
    const list = location.list;
  //   const [pStats, setPStats] = useState([]);

  //   const movie = useSelector((state) => 
  //       state.movie.movie.find((movie) => movie._id === movieId)
  //   )

    
  // const MONTHS = useMemo(
  //   () => [
  //     "JAN",
  //     "FEB",
  //     "MAR",
  //     "APR",
  //     "MAY",
  //     "JUN",
  //     "JUL",
  //     "AUG",
  //     "SEP",
  //     "OCT",
  //     "NOV",
  //     "DEC"
  //   ],
  //   []
  // );
  
  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //           const res = await userRequest.get("/orders/income?pid=" + movieId);

  //         console.log(res.data);
  //         const list = res.data.sort((a,b) => {
  //             return a._id - b._id
  //         })
  //         list.map((item) =>
  //           setPStats((prev) =>[
  //             ...prev,
  //             { name: MONTHS[item._id - 1], Sales: item.total },
  //           ])
  //         );
          
  //   } catch (err) {
  //       console.log(err);
  //   }

  //   }
  //   getStats()

  // }, [movieId,MONTHS])


  //console.log(pStats)

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Créer</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">{ list.title }</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{list._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{list.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">year:</span>
                      <span className="productInfoValue">{list.year}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Titre de la Liste</label>
                  <input type="text" placeholder={list.title} />
                  <label>Type</label>
                  <input type="text" placeholder={list.type} />
                  <label>Genre</label>
                  <input type="text" placeholder={list.genre} />
              </div>
              <div className="productFormRight">
                  <button className="productButton">Metrre à Jour</button>
              </div>
          </form>
      </div>
    </div>
  );
}
