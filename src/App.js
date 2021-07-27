import React, { useState, useEffect } from 'react';
import './App.css';
import Watch from './components/Watch'
import titleImage from './images/watchrollfullopen.webp';
import { db } from './firebase/firebase.js';

function App() {
  const [watch, setWatches] = useState([]);

  useEffect(() => {
    db.collection('watches').onSnapshot(snapshot => {
      setWatches(snapshot.docs.map(doc => ({
        id: doc.id,
        watch: doc.data()
      })));
    });

  },[]);

  return (
    <div className="app">
      <div className="app_Header">
        <img className="app_Header_image" id src={titleImage} alt="" style={{width: "120px"}} />

      </div>
      <h1>POSTS</h1>
      <div className="post__flexbox">
      {
        watch.map(({id, watch}) => (
          <Watch key={id} username={watch.username} watchname={watch.watchname} avatar={watch.avatar} watchinfo={watch.watchinfo} comments={watch.comments} />
        ))
      }
  
      </div>
      {/* Header */}
      {/* Post */}
      {/* */}
      {/* */}
    </div>
  );
}

export default App;
