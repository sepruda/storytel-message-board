import PostThread from "../components/forum/PostThread/PostThread";
import { connect } from "react-redux";

export default connect((state, props) => ({
    post: state.posts.find(
        post => post.id === parseInt(props.match.params.id, 10)
    )
}))(PostThread);
