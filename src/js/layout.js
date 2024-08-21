import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar.jsx";
import { Home } from "./views/home.js";
import CardDetails from "./views/CardDetails.js";
import injectContext from "./store/appContext";

const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/:tipo/:id" element={<CardDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
