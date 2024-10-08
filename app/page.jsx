import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text orange_gradient text-center">
        AI-Powered Prompts
        <br className="md:hidden" />
        <span className="blue_gradient text-center"> Discover & Share</span>
      </h1>
      <p className="desc text-center">
        Promptworld is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
