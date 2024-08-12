import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="list-none p-2 m-auto flex justify-content-start flex-wrap gap-3 md:gap-5 xl:gap-5">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/categoria" 
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/meus-pedidos" 
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
