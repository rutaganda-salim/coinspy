import React from "react";
import "./styles.css";


function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      {/* <h2 className="logo" onClick={() => topFunction()}>
        CoinSpy<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.twitter.com/salimnunez01">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/salimnunez01">
          <LinkedIn className="social-link" />
        </a>
        <a href="https://www.github.com/rutaganda-salim">
          <GitHub className="social-link" />
        </a>
      </div> */}
    </div>
  );
}

export default Footer;
