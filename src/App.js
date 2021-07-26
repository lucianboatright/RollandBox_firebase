import React from 'react';
import './App.css';
import Post from './components/Post'
import titleImage from './images/watchrollfullopen.webp';

function App() {
  return (
    <div className="app">
      <div className="app_Header">
        <img className="app_Header_image" id src={titleImage} alt="" style={{width: "120px"}} />

      </div>
      <h1>POSTS</h1>
      <Post className="" />
      {/* Header */}
      {/* Post */}
      {/* */}
      {/* */}
    </div>
  );
}

export default App;
