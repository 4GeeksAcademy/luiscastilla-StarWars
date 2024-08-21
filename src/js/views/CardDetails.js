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
                    <h1>{item.properties.name}</h1>
                    <p>Details: {item.description}</p>
                    {/* Aquí puedes agregar más detalles del personaje */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CardDetails;