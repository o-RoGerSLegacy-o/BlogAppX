import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-42176b4aa28615860eb53d67bd52ed37"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Kakashi Hatake -The Copy Ninja</h2>
        <p className="info">
          <a href=" " className="author">
            RogerS
          </a>
          <time>2023-7-29 16.36</time>
        </p>
        <p className="summary">
          As an adult, Kakashi typically has a relaxed and almost bored
          attitude, not prone to getting too worked up about anything or by
          anyone. Despite his increasingly growing reputation and prowess as a
          ninja, Kakashi has shown no signs of arrogance, and is rather modest
          about his abilities.
        </p>
      </div>
    </div>
  );
};

export default Post;
