import { connect } from "react-redux";

import { requestData, postDataHandler } from "../redux/actions/action_creators";
import App from "../components/App/App";

const mapStateToProps = state => {
    return {
        messages: state.messages,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestData: () => dispatch(requestData()),
        postDataHandler: data => dispatch(postDataHandler(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
