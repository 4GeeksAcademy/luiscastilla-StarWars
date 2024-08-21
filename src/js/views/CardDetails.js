import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardDetails = () => {
    const { store, actions } = useContext(Context);
    const { id, tipo } = useParams(); // Ahora obtenemos el 'tipo' y el 'id' de la URL
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await actions.getItemDetails(id, tipo);
            setItem(data);
        };
        fetchData();
    }, [id, tipo, actions]);

    return (
        <div className="container">
            {item ? (
                <div>
                    {tipo === "people" && (
                        <>
                            <h1>{item.properties.name}</h1>
                            <p>Details: {item.description}</p>
                            <p>height: {item.properties.height}</p>
                            <p>mass: {item.properties.mass}</p>
                            <p>hair_color: {item.properties.hair_color}</p>
                            <p>skin_color: {item.properties.skin_color}</p>
                            <p>eye_color: {item.properties.eye_color}</p>
                            <p>birth_year: {item.properties.birth_year}</p>
                            <p>gender: {item.properties.gender}</p>
                        </>
                    )}
                    {tipo === "planets" && (
                        <>
                            <h1>{item.properties.name}</h1>
                            <p>Details: {item.description}</p>
                            <p>diameter: {item.properties.diameter}</p>
                            <p>rotation_period: {item.properties.rotation_period}</p>
                            <p>orbital_period: {item.properties.orbital_period}</p>
                            <p>gravity: {item.properties.gravity}</p>
                            <p>population: {item.properties.population}</p>
                            <p>climate: {item.properties.climate}</p>
                            <p>terrain: {item.properties.terrain}</p>
                            <p>surface_water: {item.properties.surface_water}</p>
                        </>
                    )}
                    {tipo === "vehicles" && (
                        <>
                           <h1>{item.properties.name}</h1>
                           <p>Details: {item.description}</p>
                           <p>model: {item.properties.model}</p>
                           <p>vehicle_class: {item.properties.vehicle_class}</p>
                           <p>manufacturer: {item.properties.manufacturer}</p>
                           <p>cost_in_credits: {item.properties.cost_in_credits}</p>
                           <p>crew: {item.properties.crew}</p>
                           <p>passengers: {item.properties.passengers}</p>
                           <p>max_atmosphering_speed: {item.properties.max_atmosphering_speed}</p>
                           <p>cargo_capacity: {item.properties.cargo_capacity}</p>
                           <p>consumables: {item.properties.consumables}</p>
                        </>
                    )} 
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CardDetails;