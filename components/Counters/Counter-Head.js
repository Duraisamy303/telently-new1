import React from "react";

const CounterHead = ({ bgClass, tag, title, subTitle, desc, mb }) => {
  return (
    <div className={`row ${mb}`}>
      <div className="col-lg-12">
        <div className="section-title text-center">
          <span className={`subtitle ${bgClass}`}>{tag}</span>
          <h2 className="title" style={{fontWeight:"500",fontSize:"38px"}}>
            {title} <br /> {subTitle}
          </h2>
          <p className="description has-medium-font-size mt--15 mb--0">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterHead;
