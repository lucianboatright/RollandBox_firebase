import React from 'react'
import image1 from '../images/watches/7.jpg'
import '../styling/Post.css'


function Post() {
    return (
        <div className="post">
            {/* header -> avatar + username */}
            <div className="post__header">
                <img className="post__avatar" src={`https://www.scimex.org/__data/assets/image/0009/94842/microcephaly-please-credit-Centers-for-Disease-Control-and-Prevention,-National-Center-on-Birth-Defects-and-Developmental-Disabilities-cropped.jpg`} alt="image" />
                <h3 className="post__username">Username</h3>
            </div>
            {/* image */}
            <div>
                <img className="post__image" src={image1} alt="" />
            </div>
            {/* username */}
            {/* watchname + caption */}
            <div>
                <p className="post__watchname">watch name</p>
                <p className="post__watchinfo">information on the watch whcih may be quite a lot of text and wil need to be managed</p>
                <p className="post__comments_title">Comments</p>
                <p className="post__comments">user comment on watch</p>
                <p className="post__comments">user comment on watch</p>
            </div>
            
            
        </div>
    )
}

export default Post
