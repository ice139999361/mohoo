require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');

// 为 imageDatas 对象生成 imageURL 对象
(function() {
	imageDatas.forEach((imageData) => {
		imageData.imageURL = require('../images/' + imageData.fileName);
	});
})();

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
