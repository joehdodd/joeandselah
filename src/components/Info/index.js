import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div>
      <h2 className="info-headline">Hello!</h2>
      <p className="info-headline-text">We're glad that you found us!</p>
      <hr/>
      <p className="info-text">
        We are Chattanooga wedding photographers specializing in intimate,
        documentary style photography for engagements and weddings. We love
        capturing those intimate details of your wedding day that will remind
        you of how special it really was.
      </p>
      <p className="info-text">
        Interested in choosing us as your Chattanooga wedding photographers? Send
        an email to <a href="mailto:info@joeandselah.co">info@joeandselah.co</a>{" "}
        for information on packages and prices. Our packages currently start at
        $1,600.
      </p>
    </div>
  );
};

export default Info;
