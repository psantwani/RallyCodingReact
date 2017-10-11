import _ from 'lodash';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, createPost, deletePost } from "../actions";
import PostItem from '../components/post_item';
import SelectedPosts from '../components/selected_posts_list';

class App extends Component {

  state = {
    post: ''
  }

  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){    
    return _.map(this.props.posts, (post, key) => {
      return (<PostItem key={key} id={key} post={post}></PostItem>);
    });
  }

  handleInputChange(event){
    this.setState({
      post: event.target.value
    });
  }

  handleFormSubmit(event){
    event.preventDefault();
    this.props.createPost(this.state.post);
    this.setState({
      post: ''
    });
  }

  render() {
    return (
      <div>
        <h4 style={{marginTop : '10px'}}>Selected Posts</h4>
        <SelectedPosts />
        <hr />
        <h4 style={{marginTop : '10px'}}>Create a Post</h4>
        <form          
          className="form-inline create-post-form"
          onSubmit={this.handleFormSubmit.bind(this)}
        >
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a post"
              value={this.state.post}
              onChange={this.handleInputChange.bind(this)}
            />
            <button action="submit" className="btn btn-primary">
              Create Post
            </button>
          </div>
        </form>
        <ul className="list-group">
            {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts, selectedPostIds }){
  return { posts, selectedPostIds };
}

export default connect(mapStateToProps, { fetchPosts, createPost, deletePost })(App);
