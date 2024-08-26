import React, { useContext, useEffect } from "react";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext.js";

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.cargarDatosPersonajes();
        actions.cargarDatosPlanetas();
        actions.cargarDatosVehiculos();
    }, []);

    return (
        <div className="container">
            <h2 className="text-white">Personajes</h2>
            <div className="cartas d-flex overflow-auto">
                {store.personajes.map((personaje, index) => (
                    <div className="col-12 col-ms-5 col-md-4 col-lg-3 me-3 mb-3" key={index}>
                        <Card item={personaje} tipo="people" />
                    </div>
                ))}
            </div>
            <h2 className="text-white">Planetas</h2>
            <div className="cartas d-flex overflow-auto">
                {store.planetas.map((planeta, index) => (
                    <div className="col-12 col-ms-5 col-md-4 col-lg-3 me-3 mb-3" key={index}>
                        <Card item={planeta} tipo="planets" />
                    </div>
                ))}
            </div>
            <h2 className="text-white">Vehículos</h2>
            <div className="cartas d-flex overflow-auto">
                {store.vehiculos.map((vehiculo, index) => (
                    <div className="col-12 col-ms-5 col-md-4 col-lg-3 me-3 mb-3" key={index}>
                        <Card item={vehiculo} tipo="vehicles" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;