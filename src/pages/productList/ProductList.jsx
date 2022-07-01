import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getMovies } from "../../redux/apiCalls";



export default function ProductList() {
  const dispatch = useDispatch();
  const movie= useSelector((state) => state.movie.movies);


  //const movies= useSelector((state) => state.movie.movie);
  console.log(movie);


  useEffect(() => {
    getMovies(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteMovie(id , dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "movie",
      headerName: "Movies",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "series", headerName: "isSeries", width:300},
    {
      field: "genre",
      headerName: "genre",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/movie/" + params.row._id}>
              <button className="productListEdit">Editer</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movie?movie:1}
        disableSelectionOnClick
        columns={columns}
        getRowId= {(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
