import { connect } from "react-redux";

import { requestData, requestPostData } from "../redux/actions/action_creators";
import App from "../components/App/App";

const mapStateToProps = state => {
    return {
        posts: state.posts,
        post: {
            topic: state.topic,
            subject: state.subject,
            author: state.author,
            date: state.date
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestData: () => dispatch(requestData()),
        requestPostData: id => dispatch(requestPostData(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
