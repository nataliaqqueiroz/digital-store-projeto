import React from 'react';
import logo from '../assets/logo-footer.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import InfoComponent from './InfoComponent';
import "primeflex/primeflex.css";
import "./Footer.css";

const informations = [
    {
      "text": "Sobre Drip Store",
      "link": "/about"
    },
    {
      "text": "Segurança",
      "link": "/security"
    },
    {
      "text": "Wishlist",
      "link": "/wishlist"
    },
    {
      "text": "Blog",
      "link": "/blog"
    },
    {
        "text": "Trabalhe Conosco",
        "link": "/recruitment"
    },
    {
        "text": "Meus pedidos",
        "link": "/orders"
    }
  ];
  
  const category = [
    {
      "text": "Camisetas",
      "link": "/camisetas"
    },
    {
      "text": "Calças",
      "link": "/caças"
    },
    {
      "text": "Bonés",
      "link": "/bones"
    },
    {
      "text": "Headphones",
      "link": "/headphones"
    },
    {
        "text": "Tênis",
        "link": "/tenis"
      }
  ];

  const contact = [
    {
      "text": "Av. Santos Domunt, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    },
    {
      "text": "(85) 3051-3411",
    }
  ];

const Footer = () => {
    return ( 
        <>
            <footer className="p-8 pt-7 pb-4 m-auto text-white">
                <div className='flex '>
                    <div className="flex flex-column w-5 gap-4">
                        <div className='logo'>
                            <img src={logo} alt="Logo"/>
                        </div>
                    <p className="text-left line-height-3 w-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis saepe ipsum corporis repellat facere.
                    </p>
                    <div className="w-5 flex gap-5">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </div>
                    <div className='flex justify-content-between w-6 gap-8 pb-3'>
                        <InfoComponent title="Informação" informations={informations} />
                        <InfoComponent title="Categorias" informations={category} />
                        <InfoComponent title="Contato" informations={contact} />
                    </div>
                </div>
                <div>
                  <hr className='hr'/>
                    <p className='pt-3 text-center'>© 2024 Digital Store</p>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;