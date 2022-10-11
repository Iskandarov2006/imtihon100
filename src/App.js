import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./Components/Admin Panel/AdminPanel";
import Sozlamalar from "./Components/Admin Panel/Sozlamalar/Sozlamalar";
import AddProduct from "./Components/AppProduct/AddProduct";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Magazin from "./Components/Magazin/Magazin";
import Nav from "./Components/Nav/Nav";
import Register from "./Components/Register/Register";
import SingleCard from "./Components/SinglePageCard/SingleCard";

function App() {
  return (
    <Fragment>
      <Nav />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/add-product' element={<Magazin />} />
        <Route path="/products/:id" element={<SingleCard />} />
        <Route path="/registerpage" element={<Register />} />
        <Route path="/magazin" element={<AddProduct />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/adminpanel-sozlamalar" element={<Sozlamalar />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
