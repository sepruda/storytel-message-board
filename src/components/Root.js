import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../containers/App_Container";
import PostThread from "../containers/PostThread_Container";

const root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/posts/:id" component={PostThread} />
            </Switch>
        </Router>
    </Provider>
);

root.propTypes = {
    store: PropTypes.object.isRequired
};

export default root;
