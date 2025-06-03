import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  // 横屏图片列表
  const landscapeImages = ['intunes', 'pitchsinging'];
  
  // 判断是否为横屏图片
  const isLandscape = (title) => {
    return landscapeImages.some(name => title.toLowerCase().includes(name) || title.includes('微分音') || title.includes('模唱'));
  };

  if (!props.data) {
    return <div>Loading...</div>;
  }

  // 分离竖屏和横屏图片
  const portraitImages = props.data.filter(d => !isLandscape(d.title));
  const landscapeImagesData = props.data.filter(d => isLandscape(d.title));

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>产品展示</h2>
          <p>
            芥末唱AI合唱教学软件的界面展示和功能演示
          </p>
        </div>
        <div className="gallery-container">
          {/* 竖屏图片 - 一排6个 */}
          <div className="portrait-row">
            {portraitImages.map((d, i) => (
              <div key={`portrait-${d.title}-${i}`} className="portrait-item">
                <Image
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              </div>
            ))}
          </div>
          
          {/* 横屏图片 - 一排2个 */}
          <div className="landscape-row">
            {landscapeImagesData.map((d, i) => (
              <div key={`landscape-${d.title}-${i}`} className="landscape-item">
                <Image
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
