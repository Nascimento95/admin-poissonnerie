import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import ModifProduct from './pages/ModifProduct';
import ModifOneProduct from './pages/ModifOneProduct';
import Categorie from './pages/Categorie';
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/categorie" element={<Categorie/>} />
      <Route  path="/modif" element={<ModifProduct/>} />
      <Route exact path="/modif/:id" element={<ModifOneProduct/>} />
     </Routes>
 </BrowserRouter>
  );
};

export default App;