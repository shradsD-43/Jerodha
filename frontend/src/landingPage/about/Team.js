import React from "react";

function Team() {
  return (
    <div className="container border-top p-5">
      <div className="row text-center pb-5 mt-5">
        <h1 className="fs-2">People</h1>
      </div>
      <div className="row p-4" style={{ lineHeight: "1.6", fontSize: "1.1em" }}>
        <div className="col p-2 text-center">
          <img
            src="media/images/myPic.jpg"
            alt="Shraddha Desai"
            style={{ borderRadius: "100%", width: "60%" }}
          ></img>
          <h4 className="mt-2 fs-5">Shraddha Desai</h4>
          <h6 className="text-muted mt-2 fs-6">Web Developer</h6>
        </div>
        <div className="col p-2">
          <p>
            I’m a recent B.Tech graduate from Pune. Through internships and
            projects, I've gained skills in building full-stack web development & CI/CD pipeline tools
            .Also played around with software testing.
          </p>
          <p>
            Technology excites me and am always fascinated how it transforms the
            world. With this project of Zerodha clone, I understood how
            platforms handle financial data, simplify complex financial markets
            with reliability and clarity.
          </p>
          <p>
            I'm a self-motivated, curious individual, who makes up for any lack
            in skill with determination to learn.
          </p>
          <p>Let's connect !<a href="https://www.linkedin.com/in/shraddha-desai-814453290/">Linkedin</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
