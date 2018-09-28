import { connect } from "react-redux";

import { requestData, requestPostData } from "../redux/actions/action_creators";
import App from "../components/App/App";

const mapStateToProps = state => {
    return {
        posts: state.posts,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestData: () => dispatch(requestData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
