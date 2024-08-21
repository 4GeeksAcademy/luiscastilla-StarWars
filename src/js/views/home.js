import React, { useContext, useEffect } from "react";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.cargarDatosPersonajes();
        actions.cargarDatosPlanetas();
        actions.cargarDatosVehiculos();
    }, []);

    return (
        <div className="container">
            <h2 className="text-danger">Personajes</h2>
            <div className="row">
                {store.personajes.map((character, index) => (
                    <div className="col-4" key={index}>
                        <Card item={character} tipo="people" />
                    </div>
                ))}
            </div>
            <h2 className="text-danger">Planetas</h2>
            <div className="row">
                {store.planetas.map((planeta, index) => (
                    <div className="col-4" key={index}>
                        <Card item={planeta} tipo="planets" />
                    </div>
                ))}
            </div>
            <h2 className="text-danger">Vehículos</h2>
            <div className="row">
                {store.vehiculos.map((vehiculo, index) => (
                    <div className="col-4" key={index}>
                        <Card item={vehiculo} tipo="vehicles" />
                    </div>
                ))}
            </div>
        </div>
    );
};