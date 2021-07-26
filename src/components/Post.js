import React from 'react'
import image1 from '../images/watches/7.jpg'
import '../styling/Post.css'


function Post() {
    return (
        <div className="post">
            {/* header -> avatar + username */}
            <div className="post__header">
                <img className="post__avatar" src={`https://www.scimex.org/__data/assets/image/0009/94842/microcephaly-please-credit-Centers-for-Disease-Control-and-Prevention,-National-Center-on-Birth-Defects-and-Developmental-Disabilities-cropped.jpg`} alt="image" />
                <h3 className="post__username">Watch Name - Username</h3>
            </div>
            {/* image */}
            <div>
                <img className="post__image" src={image1} alt="" />
            </div>
            {/* username */}
            {/* watchname + caption */}
            <div>
                <h3 className="post__watchname">watch name</h3>
                <h3 className="post__watchinfo">information on the watch </h3>
                
                <h3 className="post__comments">Comments</h3>
            </div>
            
            
        </div>
    )
}

export default Post
