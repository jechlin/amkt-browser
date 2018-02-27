import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => {

    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about-us">About</Link>
            </header>

            <main>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about-us" component={About}/>
            </main>
        </div>
    );
}
export default App;
