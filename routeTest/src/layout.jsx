import { Outlet, Link } from "react-router-dom";


export default function Layout() {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}