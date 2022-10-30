import React from "react";
import profileImg from "./images/self.jpg";
import bigShare from "./images/big-share-button.png";
import smallShare from "./images/small-share-button.png";
import footerImg from "./images/Footer.png";
import zuriLogo from "./images/Vector.png";
import i4g from "./images/I4G.png";
import links from "./linkdata/links";
const Home = () => {
  return (
    <>
      <div className="share-container">
        <img src={bigShare} alt="" className="big-share" />
        <img src={smallShare} alt="" className="small-share" />
      </div>
      <main>
        <img src={profileImg} alt="" id="profile-img" />
        <h4 id="twitter">@ codexive-zech</h4>
        <p id="slack">ZechariahH</p>
        <div className="btn-container">
          {links.map((link) => {
            const { id, title, path, btnId, subText } = link;
            return (
              <sub className="tooltip btn" data-tooltip={subText} key={id}>
                <a href={path} id={btnId}>
                  {title}
                </a>
              </sub>
            );
          })}
        </div>
        <img src={footerImg} alt="" className="footer-img" />
      </main>
      <hr />
      <footer>
        <img src={zuriLogo} alt="" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="" />
      </footer>
    </>
  );
};

export default Home;
