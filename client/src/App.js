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
// import Cabinet from './pages/Cabinet';
// import Artifact from './pages/Artifact';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
        <div className="flex-column justify-flex-start min-100-vh" 
        style={{backgroundImage: `url(${backgroundPic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <Header />
          <main>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/cabinet/:cabinetID"
                // element={<Cabinet />}
              />
              <Route
                path="/artifact/:artifactId"
                // element={<Artifact />}
              />
            </Routes>
          </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
