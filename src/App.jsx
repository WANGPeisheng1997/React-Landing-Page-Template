import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Team data={landingPageData.Team} /> */}
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 律奕技术
          </p>
          <div className="license" style={{marginTop: '10px', fontSize: '14px', color: '#666'}}>
            <span>
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402009095" target="_blank" rel="noopener noreferrer" style={{color: '#666', textDecoration: 'none'}}>
                <img width="10" height="10" src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/icpicon.png" alt="公安图标" style={{marginRight: '5px'}}/>沪公网安备 31010402009095号
              </a>
            </span>
            {' | '}
            <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" style={{color: '#666', textDecoration: 'none'}}>沪ICP备2024086563号-2</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
