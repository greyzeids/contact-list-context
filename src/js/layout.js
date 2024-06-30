import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { AddContact } from "./views/AddContact";
import { ContactList } from "./views/ContactList";
import injectContext from "./store/appContext";

import { Footer } from "./component/Footer";
import ConditionalNavbar from "./component/ConditionalNavbar";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <ConditionalNavbar />
                    <Routes>
                        <Route path="/" element={<ContactList />} />
                        <Route path="/add" element={<AddContact />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
