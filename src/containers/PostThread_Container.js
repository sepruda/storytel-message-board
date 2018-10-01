import { connect } from "react-redux";

import { editMessageHandler } from "../redux/actions/action_creators";
import PostThread from "../components/forum/PostThread/PostThread";

const mapStateToProps = state => {
    return {
        messages: state.messages,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostThread);
