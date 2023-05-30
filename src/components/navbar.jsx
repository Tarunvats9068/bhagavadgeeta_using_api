import React from 'react'
import * as mdb from 'mdb-ui-kit';
import { Input } from 'mdb-ui-kit';
function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <h5 className="pt-1">Bhagavad Gita</h5>
        </a>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
    </div>
</nav>
<div></div>
<footer className="bg-primary text-center text-white fixed-bottom">
    <div className="text-center p-3">
        © 2020 Copyright:
        <a className="text-white" href="https://bhagavadgeeta.com/">Bhagavadgeeta.com</a>
    </div>
</footer>
    </>
  )
}

export default Navbar