import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{backgroundColor: '#F5FFC7'}}>
      <div className="intro" style={{backgroundColor: '#F5FFC7'}}>
        <div className="overlay" style={{background: 'transparent'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                
                {/* Banner Image */}
                <div style={{marginTop: '60px'}}>
                  <img 
                    src="img/wesing-banner.png" 
                    alt="芥末唱 Banner" 
                    style={{maxWidth: '100%', height: 'auto', marginBottom: '20px'}}
                  />
                </div>
                
                {/* Features Image */}
                <div>
                  <img 
                    src="img/wesing-features.png" 
                    alt="芥末唱功能特色" 
                    style={{maxWidth: '50%', height: 'auto'}}
                  />
                </div>
                
                {/* Description Text */}
                <p style={{color: '#333', fontSize: '22px', fontWeight: '300', lineHeight: '30px', margin: '80px auto 60px'}}>
                  {props.data ? (
                    <>
                      乐律独家合唱教学软件<strong>芥末唱</strong>，让天下没有难搞的合唱团！
                      <br />
                      基于精准的音频分析技术为合唱团员提供专业的训练体验。
                    </>
                  ) : "Loading..."}
                </p>
                
                {/* Download Buttons */}
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '30px'}}>
                  {/* iOS Download Button */}
                  <a
                    href="#"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: '#2E7D32',
                      color: '#fff',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fa fa-apple" style={{fontSize: '22px', marginRight: '10px'}}></i>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                      <span style={{fontSize: '12px', opacity: '0.9'}}>iOS用户点击这里</span>
                      <span style={{fontSize: '16px', fontWeight: 'bold', lineHeight: '1'}}>App Store</span>
                    </div>
                  </a>
                  
                  {/* Android Download Button */}
                  <a
                    href="#"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: '#2E7D32',
                      color: '#fff',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fa fa-android" style={{fontSize: '22px', marginRight: '10px'}}></i>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                      <span style={{fontSize: '12px', opacity: '0.9'}}>安卓用户点击这里</span>
                      <span style={{fontSize: '16px', fontWeight: 'bold', lineHeight: '1'}}>下载APK安装包</span>
                    </div>
                  </a>
                </div>
                
                {/* Learn More Button */}
                <div style={{textAlign: 'center'}}>
                  <a
                    href="#features"
                    className="page-scroll"
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#FF7043',
                      color: '#fff',
                      padding: '14px 34px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '15px',
                      fontWeight: '500',
                      fontFamily: '"Raleway", sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(255, 112, 67, 0.3)',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#F4511E';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(244, 81, 30, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#FF7043';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(255, 112, 67, 0.3)';
                    }}
                  >
                    了解更多
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
