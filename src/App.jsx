import React,{useState, useEffect} from 'react';
import Home from './Home';
import Uefa from './Uefa';
import Live from './Live';
import football from "../src/img/football.gif";
import Background from './Background';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';

const App = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 3000);

    }, [])
    
    return(
        <div>
            {
                loading ?
                <div className="preloader">
                    <img src={football} alt="Football Text" />
                </div>
                :
                <>
                <Background/>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/live" component={Live}/>
                <Route exact path="/uefa" component={Uefa}/>
                </Switch>
                </>
            }
        </div>
    )
}

export default App;