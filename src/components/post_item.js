import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, selectPost } from '../actions';

class PostItem extends Component {  

    deletePost(){
        this.props.deletePost(this.props.id);
    }

    onPostSelect(){
        this.props.selectPost(this.props.id);        
    }

    render() {
        return (
        <li className="list-group-item post-item">
            <input 
                type="checkbox" 
                style={{ marginRight: '10px' }} 
                onClick={this.onPostSelect.bind(this)}
            />
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

export default connect(null, { deletePost, selectPost })(PostItem);