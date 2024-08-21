import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Star Wars</span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites <span className="badge badge-light">{store.favorites.length}</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((fav, index) => (
                                <div key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/details/${fav.tipo}/${fav.uid}`} className="dropdown-item">{fav.name}</Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => actions.removeFavorite(fav.uid)}>Remove</button>
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