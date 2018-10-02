import { connect } from "react-redux";
import FullPost from "../components/forum/FullPost/FullPost";

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
)(FullPost);
