import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const menu = [
        { id: 1, name: 'Home', path: '/' }
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MyApp</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {menu.map(item => (
                            <li className="nav-item" key={item.id}>
                                <NavLink className="nav-link" to={item.path} activeClassName="active">
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