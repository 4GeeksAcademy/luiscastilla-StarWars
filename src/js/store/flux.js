const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [],
            favorites: []  
        },
        actions: {
            cargarDatosPersonajes: async () => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/people/`);
                    const data = await res.json();
                    setStore({ personajes: data.results });
                } catch (error) {
                    console.error("Error al cargar los personajes:", error);
                }
            },
            cargarDatosPlanetas: async () => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/planets/`);
                    const data = await res.json();
                    setStore({ planetas: data.results });
                } catch (error) {
                    console.error("Error al cargar los planetas:", error);
                }
            },
            cargarDatosVehiculos: async () => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/vehicles/`);
                    const data = await res.json();
                    setStore({ vehiculos: data.results });
                } catch (error) {
                    console.error("Error al cargar los vehículos:", error);
                }
            },
            getItemDetails: async (id, tipo) => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/${tipo}/${id}`);
                    const data = await res.json();
                    return data.result;
                } catch (error) {
                    console.error("Error al cargar los detalles:", error);
                }
            },
            // Agregar a favoritos
            addFavorite: (item, tipo) => {
                const store = getStore();
                const newItem = { ...item, tipo }; // Agrega 'tipo' al item
                if (!store.favorites.some(fav => fav.uid === item.uid)) {
                    setStore({ favorites: [...store.favorites, newItem] });
                }
            },
            // Eliminar de favoritos
            removeFavorite: (uid) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.uid !== uid);
                setStore({ favorites: updatedFavorites });
            }
        }
    };
};

export default getState;