import "./App.scss";

import Route from "./components/route/Route";
import Header from "./components/header/Header";
import Houses from "./components/houses/Houses";
import Footer from "./components/footer/Footer";
import Preview from "./components/preview/Preview";
import Actions from "./components/actions/Actions";
import About from "./components/about/About";
import Rules from "./components/rules/Rules";

export function App() {
    return (
        <div className="App">

            <Header/>

            <Preview/>

            <Actions/>

            {/*<Houses/>*/}

            <About/>

            {/*<div className="feedbacks">*/}
            {/*    <p className="feedbacks__title">Отзывы</p>*/}
            {/*</div>*/}

            <Route/>

            <Rules/>

            <Footer/>
        </div>
    );
}