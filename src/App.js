import React, { useState, useEffect } from 'react';
import './App.css';
import Watch from './components/Watch'
import titleImage from './images/watchrollfullopen.webp';
import { db } from './firebase/firebase.js';
import { Button, Input, makeStyles } from '@material-ui/core';
import Modal from './components/Signup_Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [watch, setWatches] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUserUsername] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

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
        <Modal />
        <Button onClick={() => setOpen(true)}>Sign up</Button>
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
