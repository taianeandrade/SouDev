import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Header()
{
    return (
        <>
           {/* <header>
             <Link to="/">Home</Link>
             <Link to="/alunos">Alunos</Link>
           </header> */}

           <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="/">Navbar</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
       </button>
         <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                 </li>
                   <li className="nav-item">
                      <Link className='nav-link' to="/alunos">Alunos</Link>
              </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}





