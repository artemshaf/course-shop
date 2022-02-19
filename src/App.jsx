import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './index.css';
import Slider from "./components/Slider/Slider";

import { Container } from "@mui/material";
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";

function App() {
    return (
        <div>
            <Header />
            <Slider/>
            <Container>
              <Products/>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
