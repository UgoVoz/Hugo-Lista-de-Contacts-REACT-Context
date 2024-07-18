import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { NewContact } from "./views/newContact";
import { SpecificContact } from "./views/specificContact";
import { EditContact } from "./views/editContact.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/navbar" element={<Navbar />} />
						<Route path="/scrollToTop" element={<ScrollToTop />} />
						<Route path="/contacts" element={<Navigate to="/" />} />
						<Route path="/new-contact" element={<NewContact />} />
						<Route path="/edit-contact/:id" element={<EditContact />} />
						<Route path="/contacts/:id" element={<SpecificContact />} />
						<Route
							path="*"
							element={<h1 className="text-center h1 fw-bold">Not found!</h1>}
						/>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);