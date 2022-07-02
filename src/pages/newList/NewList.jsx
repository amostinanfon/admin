import { useState } from "react";
import "./newlist.css";
//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/apiCalls";


export default function NewList() {


  const [ movie , setMovie ] = useState(null);
  const [ img , setImg ] = useState(null);
  const [ imgTItle , setImgTitle ] = useState(null);
  const [ imgSm , setImgSm ] = useState(null);
  const [ trailer , setTrailer ] = useState(null);
  const [ video , setVideo ] = useState(null);
  const [ uploaded , setUploaded ] = useState(0);
  const [ list , setList ] = useState(null);

  
  const dispatch = useDispatch()


  const handleUpload = (e) => {
    e.prevemtDefault();
    upload([
      {file: img, label: "img"},
      {file: imgTItle, label: "imgTitle"},
      {file: imgSm, label: "imgSm"},
      {file: trailer, label: "trailer"},
      {file: video, label: "video"},
    ])
  }

  const handleChange = (e) => {
    setList(
       {...list, [e.target.name]: e.target.value});
  }

  const handleSelect = (e) => {
    e.preventDefault();
    let value = Array.from(e.target.selectedOptions, (options =>
      setList({...list,[e.target.name]: value})
      )
  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nouveau Produit</h1>
      <form className="addProductForm">
        
      <div className="addProductItem">
          <label>Image</label>
          <input
            name="img" 
            type="file" 
            onChange={e => set} 
          />
        </div><div className="addProductItem">
          <label>Titre</label>
          <input
            name="title" 
            type="text" 
            placeholder="Apple Airpods" 
            onChange={handleChange} 
          />
        </div><div className="addProductItem">
          <label>Titre</label>
          <input
            name="title" 
            type="text" 
            placeholder="Apple Airpods" 
            onChange={handleChange} 
          />
        </div>
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
