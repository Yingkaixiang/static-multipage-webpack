// 使用npm包
import Lazyload from 'vanilla-lazyload';
import $ from 'jquery';
// 使用nodejs方法
import qs from 'querystring';
// 使用项目中公共方法
import Common from '../../common/js/lib/common';
import Comment from '../../common/js/lib/comment';
// 引入css
import '../../common/sass/reset.scss';
import './index.scss';

// 引入外部的http请求
require('http://res.wx.qq.com/open/js/jweixin-1.2.0.js');

// 懒加载，如何使用请查看官方文档
const lazyload = new Lazyload({
  container: $('.lazyload-container')[0],
});

// 加载评论
const comment = new Comment({
  momentId: '1',
  container: $('#comment'),
});
comment.init();

// 结果为：a=1&b=2&c=3
console.log(qs.stringify({ a: 1, b: 2, c: 3 }));

// 判断是不是relaapp，结果为：false
console.log(Common.isRelaApp());

