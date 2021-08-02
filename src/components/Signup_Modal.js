// import React, { useState, useEffect } from 'react';
// import Modal from '@material-ui/core/Modal';
// import '../styling/SignUp_Modal.css';
// import { Button, Input, makeStyles } from '@material-ui/core';

// import watchBoxLogo from '../images/watchbox.jpg'


// function Signup_Modal() {

//   return (
//     <Modal
//     open={open}
//     onClose={() => setOpen(false)}
//   >
//     <div style={modalStyle} className={classes.paper}>
//       <form>
//         <div className="signup__header">
//           {/* <img src={watchBoxLogo} alt="" className="signup__image" /> */}
//           <div>
//             <p>Sign Up With Your Details Below</p>
//           </div>
//         </div>
//           <div className="signup__input__grid">
//             <div className="signup__inputs">
//               <Input
//                 type="text"
//                 placeholder="username"
//                 value={username}
//                 onChange={(e) => {setUserUsername(e.target.value)}}
//               />
//               <Input
//                 type="text"
//                 placeholder="email"
//                 value={email}
//                 onChange={(e) => {setUserEmail(e.target.value)}}
//               />
//               <Input
//                 type="text"
//                 placeholder="password"
//                 value={password}
//                 onChange={(e) => {setUserPassword(e.target.value)}}
//               />
//               <Button
//                 style={{
//                     borderRadius: 5,
//                     marginTop: "20px",
//                     backgroundColor: "aqua",
//                     padding: "8px 78px",
//                     fontSize: "18px"
//                   }}
//                 type="button"
//                 value="submit"
//               >SignUp</Button>
//             </div>
//             <div className="signup__image">
//               <img src={watchBoxLogo} alt="" className="signup__image" />
//             </div>
//           </div>
//       </form>
//     </div>
//   </Modal>
//   );
// }

// export default Signup_Modal;
