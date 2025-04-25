import "./detail.css"
const Details = () => {
  return(
    <div className='detail'>
       <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>kunal kushwah</h2>
        <p>lorem lorem ndfkjkng bdjb</p>
       </div>
       <div className="info">
        <div className="option">
          <div className="title">
          <span>Chat Settings</span>
          <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
          <span>Privacy & help</span>
          <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
          <span>Shared photos</span>
          <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoitem">
              <div className="photodetail">
              <img src="https://c.ndtvimg.com/2025-04/cf333618_cc_625x300_20_April_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="" />

              </div>
             
              <span>photo_7u93.png</span>
              <img src="./download.png" alt="" />
            </div>
          

          </div>

          <div className="photos">
            <div className="photoitem">
              <div className="photodetail">
              <img src="https://c.ndtvimg.com/2025-04/cf333618_cc_625x300_20_April_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="" />

              </div>
             
              <span>photo_7u93.png</span>
              <img src="./download.png" alt="" />
            </div>
          

          </div>
          <div className="photos">
            <div className="photoitem">
              <div className="photodetail">
              <img src="https://c.ndtvimg.com/2025-04/cf333618_cc_625x300_20_April_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="" />

              </div>
             
              <span>photo_7u93.png</span>
              <img src="./download.png" alt="" className="icon" />
            </div>
          

          </div>
        </div >

        <div className="option">
          <div className="title">
          <span>Shared files</span>
          <img src="./arrowDown.png" alt="" />
          </div>
        </div>

       </div>
       <button>Block User</button>
       <button className="logout">Logout</button>
    </div>
  )
}
export default Details