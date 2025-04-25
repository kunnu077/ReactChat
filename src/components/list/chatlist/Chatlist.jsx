import { useState } from 'react';
import React from 'react';
import "./chatlist.css";

const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);
  
  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="search icon" />
          <input type="text" placeholder="search" />
        </div>
        <img 
          src={addMode ? "./minus.png" : "./plus.png"} 
          alt="add or remove" 
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>kunal kushwah</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>kunal kushwah</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>kunal kushwah</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>kunal kushwah</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>kunal kushwah</span>
          <p>Hello</p>
        </div>
      </div> 

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>kunal kushwah</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <addUser/>}
    </div>

  )
}

export default Chatlist;