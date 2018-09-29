import { connect } from "react-redux";

import { requestData, postDataHandler } from "../redux/actions/action_creators";
import App from "../components/App/App";

const mapStateToProps = state => {
    return {
        posts: state.posts,
        post: {
            userId: state.post.userId,
            date: state.post.date,
            id: state.post.id,
            title: state.post.title,
            body: state.post.body
        },
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
