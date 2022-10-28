import React from "react";
import profileImg from "./images/profile-img.png";
import bigShare from "./images/big-share-button.png";
import smallShare from "./images/Icon.png";
import footerImg from "./images/Footer.png";
import zuriLogo from "./images/Vector.png";
import i4g from "./images/I4G.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="share-container">
        <img src={bigShare} alt="" className="big-share" />
        <img src={smallShare} alt="" className="small-share" />
      </div>
      <main>
        <img src={profileImg} alt="" id="profile-img" />
        <h4 className="profile-name">Annette Black</h4>
        <div className="btn-container">
          <Link to="https://twitter.com/codexive_zech" className="btn">
            Twitter Link
          </Link>
          <Link to="https://training.zuri.team" id="btn__zuri" className="btn">
            Zuri Team
          </Link>
          <Link to="https://books.zuri.team" id="books" className="btn">
            Zuri Books
          </Link>
          <Link
            to="https://books.zuri.team/python-for-beginners"
            ref_id="zech"
            id="python__book"
            className="btn"
          >
            Python Books
          </Link>
          <Link to="https://background.zuri.team" className="btn" id="pitch">
            Background Check for Coders
          </Link>
          <Link
            to="https://books.zuri.team/design-rule"
            className="btn"
            id="book__design"
          >
            Design Books
          </Link>
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