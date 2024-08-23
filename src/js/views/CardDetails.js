import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CardDetails = () => {
    const { actions } = useContext(Context);
    const { id, tipo } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await actions.traerDetallesItem(id, tipo);
            setItem(data);
        };
        fetchData();
    }, [id, tipo, actions]);

    const imagenAlternativa = "https://img.freepik.com/vector-gratis/pagina-error-404-distorsion_23-2148105404.jpg";

    return (
        <div className="container detalles mt-5">
            {item ? (
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/${tipo === "people" ? "characters" : tipo}/${item.uid}.jpg`}
                            className="img-fluid"
                            alt="Item"
                            onError={(e) => e.target.src = imagenAlternativa}
                        />
                    </div>
                    <div className="col-md-6">
                        <h1>{item.properties.name}</h1>
                        <p>{item.description}</p>
                        {tipo === "people" && (
                            <>
                                <p>Height: {item.properties.height}</p>
                                <p>Mass: {item.properties.mass}</p>
                                <p>Hair Color: {item.properties.hair_color}</p>
                                <p>Skin Color: {item.properties.skin_color}</p>
                                <p>Eye Color: {item.properties.eye_color}</p>
                                <p>Birth Year: {item.properties.birth_year}</p>
                                <p>Gender: {item.properties.gender}</p>
                            </>
                        )}
                        {tipo === "planets" && (
                            <>
                                <p>Diameter: {item.properties.diameter}</p>
                                <p>Rotation Period: {item.properties.rotation_period}</p>
                                <p>Orbital Period: {item.properties.orbital_period}</p>
                                <p>Gravity: {item.properties.gravity}</p>
                                <p>Population: {item.properties.population}</p>
                                <p>Climate: {item.properties.climate}</p>
                                <p>Terrain: {item.properties.terrain}</p>
                                <p>Surface Water: {item.properties.surface_water}</p>
                            </>
                        )}
                        {tipo === "vehicles" && (
                            <>
                                <p>Model: {item.properties.model}</p>
                                <p>Vehicle Class: {item.properties.vehicle_class}</p>
                                <p>Manufacturer: {item.properties.manufacturer}</p>
                                <p>Cost in Credits: {item.properties.cost_in_credits}</p>
                                <p>Crew: {item.properties.crew}</p>
                                <p>Passengers: {item.properties.passengers}</p>
                                <p>Max Speed: {item.properties.max_atmosphering_speed}</p>
                                <p>Cargo Capacity: {item.properties.cargo_capacity}</p>
                                <p>Consumables: {item.properties.consumables}</p>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CardDetails;