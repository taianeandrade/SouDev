import React from 'react';
import Button from '../Button';
import './index.css';


export default function Header()
{
   return(
    <>
       <header>
          <div className='logo'>Logo</div>
          <div className='busca'>Busca</div>
         <Button texto="Cadastre-se"/>
         <Button texto="Entrar"/>
        </header>
    </>
   );
}

