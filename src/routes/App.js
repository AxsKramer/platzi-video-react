import React from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Page404 from '../containers/Page404';
import Register from '../containers/Register';
import Layout from '../components/Layout';
import Player from '../containers/Player';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/player/:id' component={Player} />
                <Route component={Page404} />
            </Switch>
        </Layout>
    </BrowserRouter>
)
 
export default App;