import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Product from "./pages/Product";
import Carts from "./pages/Carts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Profile />
      <Users />
      <Product />
      <Carts />
    </div>
  );
}

export default App;
