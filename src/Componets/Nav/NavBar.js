import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './NavBarstyke.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
               Zов Родины
            </Link>
            <ul>
                <CustomLink to="/about">О Нас</CustomLink>
                <CustomLink to="/donate">Поддержать</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
