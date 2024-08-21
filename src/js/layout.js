import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./views/Home.js";
import CardDetails from "./views/CardDetails.js";
import injectContext from "./store/appContext";

const Layout = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:tipo/:id" element={<CardDetails />} />
			</Routes>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
