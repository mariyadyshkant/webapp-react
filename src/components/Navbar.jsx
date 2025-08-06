import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const menu = [
        { id: 1, name: 'Home', path: '/' }
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">MyApp</div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {menu.map(item => (
                            <li className="nav-item" key={item.id}>
                                <NavLink className="nav-link" to={item.path}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}