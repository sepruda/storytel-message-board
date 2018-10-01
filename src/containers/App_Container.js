import { connect } from "react-redux";

import {
    requestData,
    postDataHandler,
    setIdEditedMessage
} from "../redux/actions/action_creators";
import App from "../components/App/App";

const mapStateToProps = state => {
    return {
        messages: state.messages,
        selectedMessage: state.selectedMessage,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestData: () => dispatch(requestData()),
        postDataHandler: data => dispatch(postDataHandler(data)),
        setIdEditedMessage: id => dispatch(setIdEditedMessage(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
