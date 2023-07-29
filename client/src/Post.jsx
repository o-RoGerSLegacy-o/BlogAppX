import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>
          Googles DeepMind team highlights new system for teaching robots novel
          tasks
        </h2>
        <p className="info">
          <a href=" " className="author">
            RogerS
          </a>
          <time>2023-7-29 16.36</time>
        </p>
        <p className="summary">
          oday at its special launch event, home backup power giant EcoFlow
          launched a flurry of new products, including a “Whole-Home Backup
          Power Solution.” The company also launched a battery-powered fridge
          and a portable battery-powered air-conditioning unit, which both makes
          sense. There’s also a lawn mower, which makes me think that preppers
          will have delightfully pristine lawns, even as the apocalypse looms.
        </p>
      </div>
    </div>
  );
};

export default Post;
