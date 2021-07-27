import React from 'react';
import image1 from '../images/watches/7.jpg';
import '../styling/Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, watchname, avatar, imageUrl, watchinfo, comments  }) {
    return (
        <div className="post">
            {/* header -> avatar + username */}
            {/* image */}
            <div>
                <img className="post__image" src={image1} alt="watch image" />
            </div>
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    src={avatar}
                    alt="avi" 
                />
                <h3 className="post__username">{username}</h3>
            </div>
            {/* username */}
            {/* watchname + caption */}
            <div>
                <p className="post__watchname">{watchname}</p>
                <p className="post__watchinfo">information on the watch whcih may be quite a lot of text and wil need to be managed</p>
                <p className="post__comments_title">Comments</p>
                <input className="post__comment__input" type="text" placeholder="Comments..." />
                <p className="post__comments">user comment on watch</p>
                <p className="post__comments">user comment on watch</p>
            </div>
            
            
        </div>
    )
}

export default Post
