import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
//import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";


export default function Product() {

    const location = useLocation();
    const movieId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([]);

    const movie = useSelector((state) => 
        state.movie.movie.find((movie) => movie._id === movieId)
    )

    
  const MONTHS = useMemo(
    () => [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ],
    []
  );
  
  useEffect(() => {
    const getStats = async () => {
      try {
            const res = await userRequest.get("/orders/income?pid=" + movieId);

          console.log(res.data);
          const list = res.data.sort((a,b) => {
              return a._id - b._id
          })
          list.map((item) =>
            setPStats((prev) =>[
              ...prev,
              { name: MONTHS[item._id - 1], Sales: item.total },
            ])
          );
          
    } catch (err) {
        console.log(err);
    }

    }
    getStats()

  }, [movieId,MONTHS])


  //console.log(pStats)

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Produit</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Créer</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={ pStats } dataKey="Sales" title="Performance de vente"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img 
                    src={movie.img}
                    alt="" 
                    className="productInfoImg" 
                />
                  <span className="productName">{ movie.title }</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">{movie._id}:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">ventes:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">en stock:</span>
                      <span className="productInfoValue">{}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nom du produit</label>
                  <input type="text" placeholder={movie.title} />
                  <label>Description du produit</label>
                  <input type="text" placeholder={movie.title} />
                  <label>Price</label>
                  <input type="text" placeholder={movie.price} />
                  <label>En Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="true">Oui</option>
                      <option value="false">Non</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={movie.img} alt=""/>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Metrre à Jour</button>
              </div>
          </form>
      </div>
    </div>
  );
}
