import React from "react";
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },

    ]


    return (
        <header className="py-3 shadow bg-slate-300">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to='/'>
                            <Logo width='70px' />

                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {
                            navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className={`inline-block px-6 py-2 duration-200
                                             rounded-full 
                                            ${location.pathname === item.slug
                                                    ? "bg-slate-500 text-white/80"
                                                    : "hover:bg-blue-100"}`}

                                        >{item.name}</button>
                                    </li>
                                ) : null
                            )
                        }
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                </nav>
            </Container>
        </header>
    )
}
export default Header;