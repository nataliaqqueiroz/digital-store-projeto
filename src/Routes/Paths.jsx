import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />}/>
                        <Route path="/products" element={<ProductListingPage />}/>
                        <Route path="/pagina-produto/:id/:nome" element={<ProductViewPage />}/>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;