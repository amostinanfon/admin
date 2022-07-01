import { useState } from "react";
import "./newProduct.css";
//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../../firebase';
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/apiCalls";


export default function NewProduct() {

  const [ movie , setMovie ] = useState(null);
  const [ img , setImg ] = useState(null);
  const [ imgTItle , setImgTitle ] = useState(null);
  const [ imgSm , setImgSm ] = useState(null);
  const [ trailer , setTrailer ] = useState(null);
  const [ video , setVideo ] = useState(null);
  const [ uploaded , setUploaded ] = useState(0);
  
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setMovie(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const upload = (items) => {
    items.forEach(item => {
      const fileName = new Date().getTime() + item.label + item.file.name
      const uploadTask = storage.ref(`/item/${fileName}`).put(item);

      uploadTask.on('state_changed', 
  (snapshot) => {
    
    const progress = 
    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL.then((url) => {
      setMovie ((prev) => {
        return { ...prev, [item.label]: url};
      });
      setUploaded((prev) => prev + 1);
      //addMovie(movie, dispatch);
    });
   }
  )}
)}

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


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nouveau Produit</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input 
            type="file" 
            name="img" 
            onChange={e => setImg(e.target.files[0])}
        />
        </div>
        <div className="addProductItem">
          <label>Titre image</label>
          <input
            name="imgsm" 
            type="file" 
            onChange={e => e.target.files[0]} 
          />
        </div>
        <div className="addProductItem">
          <label>Titre image</label>
          <input
            name="imgsm" 
            type="file" 
            onChange={e => e.target.files[0]} 
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"  
            type="text" 
            placeholder="Description . . ." 
            onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            name="year" 
            type="text" 
            placeholder="Year" 
            onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            name="genre" 
            type="text" 
            placeholder="Genre" 
            onChange={e => e.target.value}
          />
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            name="trailer"
            type="file" 
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            name="video"
            type="file" 
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            name="duration"
            type="text" 
            placeholder="Duration" 
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select 
            name="isSeries" 
            onChange={handleChange}
          >
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </select>
        </div>
        {
          uploaded === 5 ? (
            <button className="addProductButton">Créer</button>
          ) : (
            <button className="addProductButton" onClick={handleUpload}>Upload</button>
          )
        }
      </form>
    </div>
  );
}
