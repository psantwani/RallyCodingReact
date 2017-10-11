import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

class PostItem extends Component {  

    deletePost(){
        this.props.deletePost(this.props.id);
    }

    render() {
        return (
        <li className="list-group-item post-item">
            {this.props.post}
            <button
            className="btn btn-danger right"
            onClick={this.deletePost.bind(this)}
            >
            Delete
            </button>
        </li>
        );
    }
}

export default connect(null, { deletePost })(PostItem);