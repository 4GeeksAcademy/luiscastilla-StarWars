import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar bg-light">
            <Link to="/">
                <img src="https://i.pinimg.com/736x/1e/72/5d/1e725dcdef32a797b5f208b631aaad68.jpg" className="imagen ms-5" alt="Star Wars Logo" />
            </Link>
            <div className="ml-auto">
                <div className="dropdown me-5">
                    <button 
                        className="btn btn-primary dropdown-toggle" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-bs-toggle="dropdown"
                        aria-haspopup="true" 
                        aria-expanded="false"
                        >
                        Favorites <span className="badge badge-light">{store.favorites.length}</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((fav, index) => (
                                <div 
                                    key={index} 
                                    className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link 
                                        to={`/details/${fav.tipo}/${fav.uid}`} 
                                        className="dropdown-item">
                                        {fav.name}
                                    </Link>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            actions.quitarFavorito(fav.uid);
                                        }}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <span className="dropdown-item">No favorites yet</span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;