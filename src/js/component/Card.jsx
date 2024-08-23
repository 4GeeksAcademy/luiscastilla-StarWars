import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ item, tipo }) => {
    const { store, actions } = useContext(Context);

    const esFavorito = store.favorites.some(fav => fav.uid === item.uid && fav.tipo === tipo);
    const imagenAlternativa = "https://img.freepik.com/vector-gratis/pagina-error-404-distorsion_23-2148105404.jpg";

    return (
        <div className="card">
            <img 
                src={`https://starwars-visualguide.com/assets/img/${tipo === "people" ? "characters" : tipo}/${item.uid}.jpg`}
                className="card-img-top"
                alt="Item Image"
                onError={(e) => e.target.src = imagenAlternativa}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    {tipo === "people" && (
                        <>
                            Gender: {item.gender}<br />
                            Hair Color: {item.hair_color}<br />
                            Eye Color: {item.eye_color}
                        </>
                    )}
                    {tipo === "planets" && (
                        <>
                            Population: {item.population}<br />
                            Terrain: {item.terrain}
                        </>
                    )}
                    {tipo === "vehicles" && (
                        <>
                            Model: {item.model}<br />
                            Manufacturer: {item.manufacturer}
                        </>
                    )}
                </p>
                <div className="d-flex justify-content-between">
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