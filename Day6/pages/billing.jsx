import React from "react";
import '../assets/css/billing.css'
import { Button } from "@mui/material";

import { Link } from 'react-router-dom';
export default function Billing(){
    const [value, setValue] = React.useState();
  
  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };
  const msg=()=>
  {
    alert("Payment Succesfull");
  }
    return(
        <div>
       
        <div id="homebodyc2">
      <div id="layerh2">
        
        <div id='bill12'>
        <div id='bill-container12'>
        <div id='billform12'>
        <div id='billhead12'>
        <h1>BILLING</h1>
        </div>
       
        <br/>
        
        <label>
        PAYMENT TYPE : 
        <select value={value} onChange={handleChange}>
        <option value="cash">cash</option>
       
        </select>
        </label>
        <br/>
        <label>AMOUNT : <input  id="inputbilling" type="number"/>
        </label>
        <br/>
        <br/>
        <Button id='list12'>
        <div id='button1' onClick={msg}>
        Pay
        </div>
        
       <Link to='/home'> <div id='button2' >
        Cancel
        </div></Link>
        </Button>
       
        </div>
        </div>
        </div>
       

       
      </div>
      
    </div>
    </div>
    )
}