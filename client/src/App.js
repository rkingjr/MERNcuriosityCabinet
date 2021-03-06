import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
// import Cabinet from './pages/Cabinet';
import Artifact from "./pages/Artifact";
import AddCollection from "./pages/AddCollection";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wallpaper from "./components/Assets/wallpaper-light.jpg";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={{ backgroundImage: `url(${Wallpaper})` }}>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/addcollection" element={<AddCollection />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/cabinet/:cabinetID"
                  // element={<Cabinet />}
                />
                <Route
                  path="/collection/:collectionID"
                  element={<Collections />}
                />
                <Route path="/artifact/:imageID" element={<Artifact />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
