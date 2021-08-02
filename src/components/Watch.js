import React from 'react';
import image1 from '../images/watches/7.jpg';
import '../styling/Watch.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, watchname, avatar, imageUrl, watchinfo, comments  }) {
    return (
        <div className="watch">
            {/* header -> avatar + username */}
            {/* image */}
            <div>
                <img className="watch__image" src={image1} alt="watch image" />
            </div>
            <div className="watch__header">
                <Avatar
                    className="watch__avatar"
                    src={avatar}
                    alt="avi" 
                />
                <h3 className="watch__username">{username}</h3>
            </div>
            {/* username */}
            {/* watchname + caption */}
            <div>
                <p className="watch__watchname">{watchname}</p>
                <p className="watch__watchinfo">information on the watch whcih may be quite a lot of text and wil need to be managed</p>
                <p className="watch__comments_title">Comments</p>
                <input className="watch__comment__input" type="text" placeholder="Comments..." />
                <p className="watch__comments">user comment on watch</p>
                <p className="watch__comments">user comment on watch</p>
            </div>
            
            
        </div>
    )
}

export default Post
