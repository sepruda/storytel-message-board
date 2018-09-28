import PostThread from "../components/forum/PostThread";
import { connect } from "react-redux";

export default connect((state, props) => ({
    post: state.posts.find(post => post.id == props.match.params.id)
}))(PostThread);

// post.id == props.match.params.id
