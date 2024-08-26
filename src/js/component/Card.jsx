import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ item, tipo }) => {
    const { store, actions } = useContext(Context);

    const esFavorito = store.favorites.some(fav => fav.uid === item.uid && fav.tipo === tipo);
    const imagenAlternativa = "https://img.freepik.com/vector-gratis/pagina-error-404-distorsion_23-2148105404.jpg";

    return (
        <div className="card h-100">
            <div className="container-img">
                <img
                    src={`https://starwars-visualguide.com/assets/img/${tipo === "people" ? "characters" : tipo}/${item.uid}.jpg`}
                    className="card-img-top"
                    alt="Item Image"
                    onError={(e) => e.target.src = imagenAlternativa}
                />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        {`Si quieres obtener más información acerca de ${item.name}, dale en el botón "Learn more!"`}
                    </p>
                </div>
                <div className="d-flex justify-content-between mt-auto">
                    <Link to={`/details/${tipo}/${item.uid}`} className="btn btn-primary">Learn more!</Link>
                    <button
                        className="btn btn-outline-warning"
                        onClick={(event) => {
                            event.stopPropagation();
                            esFavorito ? actions.quitarFavorito(item.uid, tipo) : actions.añadirFavorito(item, tipo);
                        }}
                    >
                        <i className={esFavorito ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;