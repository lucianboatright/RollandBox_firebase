import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import '../styling/SignUp_Modal.css';
import { Button, Input, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import watchBoxLogo from '../images/watchbox.jpg'

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

export default function Signup_Modal({ open, onClose }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [username, setUserUsername] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  if (!open) return null;
  return (
    <Modal
    open={open}
    // onClose={() => setOpen(false)}
  >
    <div style={modalStyle} className={classes.paper}>
      <form>
        <div className="signup__header">
          {/* <img src={watchBoxLogo} alt="" className="signup__image" /> */}
          <div>
            <p>Sign Up With Your Details Below</p>
          </div>
        </div>
          <div className="signup__input__grid">
            <div className="signup__inputs">
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {setUserUsername(e.target.value)}}
              />
              <Input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => {setUserEmail(e.target.value)}}
              />
              <Input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => {setUserPassword(e.target.value)}}
              />
              <Button
                style={{
                    borderRadius: 5,
                    marginTop: "20px",
                    backgroundColor: "aqua",
                    padding: "8px 78px",
                    fontSize: "18px"
                  }}
                type="button"
                value="submit"
                onClick={onClose}
              >SignUp</Button>
            </div>
            <div className="signup__image">
              <img src={watchBoxLogo} alt="" className="signup__image" />
            </div>
          </div>
      </form>
    </div>
  </Modal>
  );
}

Signup_Modal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
}

