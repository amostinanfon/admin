import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getLists } from "../../redux/apiCalls";



export default function ListList() {

  const dispatch = useDispatch();
 
  const lists = useSelector((state) => state.list.lists);



  useEffect(() => {
    getLists(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteMovie(id , dispatch);
  };

  const columns = [
    {field: '_id', headerName: "ID", width: 90 },
    {field: 'title', headerName: "TITLE", width: 120 },
    {field: 'genre', headerName: "GENRE", width: 120 },
    {field: 'type', headerName: "TYPE", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to="/movie/" + ${params.row._id} state={{movie: params.row}}> */}
            <Link to={{pathname: '/product' + params.row._id, movie: params.row}}>
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
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        getRowId= {(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
