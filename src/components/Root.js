import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../containers/App_Container";
import FullPost from "../containers/FullPost_container";

const root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/messages/:id" component={FullPost} />
            </Switch>
        </Router>
    </Provider>
);

root.propTypes = {
    store: PropTypes.object.isRequired
};

export default root;
