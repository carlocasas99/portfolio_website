import React from 'react'
import {
    Nav,
    NavSection,
    NavLink,
    ProPic,
    Logo
} from './NavBarElements'
import GlobalFonts from '../../fonts/fonts'

function NavBar() {
    return (
        <Nav>
            <NavSection>
                <Logo />
            </NavSection>
            <NavSection>
                <NavLink exact to='/' activeStyle>Home</NavLink>
                <NavLink to='/about' activeStyle>About</NavLink>
                <NavLink to='/school' activeStyle>School</NavLink>
                <NavLink to='/personal' activeStyle>Personal Projects</NavLink>
            </NavSection>
            <NavSection>
                <ProPic />
            </NavSection>
            <GlobalFonts />
        </Nav>
    )
}

export default NavBar
