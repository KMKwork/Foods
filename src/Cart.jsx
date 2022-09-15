import React from "react";
import {Link} from "react-router-dom";
 
function Cart(props){
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
          <div class="card-body">
          <h5 class="card-title">Order summary</h5>
          <h6 class="card-subtitle mb-2 text-muted">your items</h6>
          <h5>Total:0</h5>
          <div class="btn-group" id="popup_buttons">
                    <button type="button" class="btn btn-primary"><Link to="/thankyou" className="linkstyle">SAVE AND CHECKOUT</Link></button>
                    <button type="button" class="btn text-primary" onClick={props.handleClose}>CANCEL</button>
          </div>
          </div>
      </div>
    </div>
          
  );
};
 
export default Cart;