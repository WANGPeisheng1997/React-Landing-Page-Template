import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/wesing-icon.png" alt="芥末唱" style={{height: '30px', width: 'auto', marginRight: '10px', display: 'inline-block', verticalAlign: 'middle'}} />
            芥末唱
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                功能特色
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                关于我们
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                核心服务
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                产品展示
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                用户评价
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                团队介绍
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
