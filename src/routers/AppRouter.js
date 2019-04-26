import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import PortfolioList from '../components/Portfolios-list';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/contact" component={Contact} />
                <Route path="/portfolio" component={PortfolioList} exact={true} />
                <Route path="/portfolio/:id" component={Portfolio} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;