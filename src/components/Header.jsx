import "primereact/resources/themes/lara-light-pink/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import Navigation from "./Navigation";

import cart from "../assets/mini-cart.svg";
import "./Header.css";

import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();


  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      if (searchTerm.trim()) {
        navigate(`/product?filter=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
      }
    }
  };

  return (
    <>
      <header className="p-8 pt-5 pb-4 m-auto">
        <div className="flex justify-contente-start justify-content-between flex-wrap pr-8">
          <Logo />
          <div>
            <IconField>
              <InputText
                className="bg-gray-100 border-0 w-30rem h-3rem pl-2"
                id="produto"
                type="text"
                placeholder="Pesquisar Produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
              <InputIcon
                className="pi pi-search search-icon"
                onClick={handleSearch}
                style={{ cursor: "pointer" }}
              />
            </IconField>
          </div>

          <a href="" className="cadastro">Cadastre-se</a>
          <a href="" className="entrar">Entrar</a>

          <div className="cart">
            <img src={cart} alt="cart" />
          </div>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;

