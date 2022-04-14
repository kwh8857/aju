import React from "react";
interface cat {
  category: string;
  title: string;
  sub: string;
  mbsub: string;
}

function S6({ agent, s6 }: { agent: string; s6: Array<cat> }) {
  return (
    <div className="wrapper">
      <div className="sub">사업분야</div>
      <div className="title">세부사업분야</div>
      <div className="list">
        {s6.map(({ category, title, sub, mbsub }, idx) => {
          return (
            <div key={idx} className="card">
              <div className="category">{category}</div>
              <div className="content">
                <div className="title">{title}</div>
                <div className="sub">{agent === "mobile" ? mbsub : sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default S6;
