import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListList from "./pages/listList/ListList";
import NewList from './pages/newList/NewList'

function App() {

  //const admin =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
const admin = "is_Admin"

  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          { admin && (<>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/movie/:movieId">
                <Product />
              </Route> 
              <Route path="/newmovie">
                <NewProduct />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
