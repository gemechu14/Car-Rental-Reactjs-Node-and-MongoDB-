
// import Sidebar from "../../sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./feedback.css";

export default function FeedBack() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  
  return (
    <div className="feedback">
      <div className="settingsWrapper">
        
        <form className="settingsForm" >
          <label>Feedback</label>
          <div className="settingsPP">
           
            
           
          </div>
       
         
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Comment</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Submit
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    
    </div>
  );
}