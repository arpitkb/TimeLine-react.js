import React from "react";
import Button from "./Button";

function Navbar(props) {
  const setHandler = (e) => {
    props.setIndex(e.target.value - 1);
  };
  
  return (
    
    <nav className="navbar mb-5 navbar-light bg-light">
      <div className="container justify-content-center btn-group" role="group">
        <Button id="1" value="1" onsetHandler={setHandler} checked={props.currentidx === 0} />
        <Button id="2" value="2" onsetHandler={setHandler} checked={props.currentidx === 1} />
        <Button id="3" value="3" onsetHandler={setHandler} checked={props.currentidx === 2} />
        <Button id="4" value="4" onsetHandler={setHandler} checked={props.currentidx === 3} />
        <Button id="5" value="5" onsetHandler={setHandler} checked={props.currentidx === 4} />
      </div>
    </nav>
  );
}

export default Navbar;
