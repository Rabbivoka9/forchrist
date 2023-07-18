import React from "react";
import { Navbar,Icon,NavItem } from "react-materialize";
import '../App.css';



function Header (){
    return(
                <Navbar
                    alignLinks="right"
                    brand={<a className="brand-logo" href="#"><img className="logo" src="christlogo.png" alt="" /></a>}
                    centerChildren
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                    >
                    <NavItem className="a" to="/"  href="">
                        Accueil
                    </NavItem>
                    <NavItem className="a" to="/Emision" >
                         Emision
                    </NavItem>

                    <NavItem className="a" to="/Predication" >
                         Predication
                    </NavItem>
        </Navbar>
    )
} export default Header
