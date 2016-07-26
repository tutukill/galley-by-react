require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// 获取图片相关数据

let imagesData = require('../data/imagesData.json');

// 将图片信息转化成URL路径
imagesData = (function genImagesURL(imagesDataArr){
	for (var i=0, j=imagesDataArr.lenght; i < j; i++){
		var singleImagesData = imagesDataArr;

		singleImagesData.imagesURL = require('../images/'+ singleImagesData.flieName);
		imagesDataArr[i] = singleImagesData;
	}
	return imagesDataArr;
})(imgagesData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">

      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
