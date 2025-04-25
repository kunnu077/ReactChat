import "./chat.css";
import React, { useRef, useState, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  console.log(text);

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Kunal Kushwah</span>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message own">
          <div className="texts">
            <img src="https://c.ndtvimg.com/2025-04/cf333618_cc_625x300_20_April_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>just now</span>
          </div>
        </div>

        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>just now</span>
          </div>
        </div>

        <div className="message own">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>just now</span>
          </div>
        </div>

        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>just now</span>
          </div>
        </div>

        <div className="message own">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>just now</span>
          </div>
        </div>

        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="/emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          {open && (
            <div className="r">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
