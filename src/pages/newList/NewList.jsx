import { useState } from "react";
import "./newlist.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/apiCalls";


export default function NewList() {


  //const [ inputs , setInputs ] = useState({});
  const [ list , setList ] = useState(null);
  //const [ cat , setCat ] = useState([]);
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setList(
       {...list, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nouveau Produit</h1>
      <form className="addProductForm">
        
        <div className="addProductItem">
          <label>Titre</label>
          <input
            name="title" 
            type="text" 
            placeholder="Apple Airpods" 
            onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            name="genre"  
            type="text" 
            placeholder="genre . . ." 
            onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange}>
            <option value='movies'>Movies</option>
            <option value='series'>Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Content</label>
          <select name="type" onChange={handleChange}>
            <option value='movies'>Movies</option>
            <option value='series'>Series</option>
          </select>
        </div>
        <button
          onClick={handleSubmit} 
          className="addProductButton">Créer</button>
      </form>
    </div>
  );
}
