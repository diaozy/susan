//index.js
//获取应用实例
var px2rpx = 2, windowWidth=375
var app = getApp()
Page({
  data: {
    userInfo: {},
    poster: '',
    name: '一课一练',
    author: 'Susan英语学堂',
    src: 'http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/A001Introduction%20.MP3',
 pictures: [ 'http://susan-1253455298.cossh.myqcloud.com/images/niujin22.jpg',
 'http://susan-1253455298.cossh.myqcloud.com/images/sbs1.jpg','http://susan-1253455298.cossh.myqcloud.com/images/sbs1.jpg' ],
  imageSize:{},
  index:[1,2,3],
  ppp:''
  },
  //事件处理函数

  onLoad: function () {
 wx.getSystemInfo({
 success: function(res) {
 windowWidth = res.windowWidth;
 px2rpx = 750 / windowWidth;
 }
 })
  },

bindtapgo:function()
{
index = e.currentTarget.dataset.index
this.setdata({ppp:index})

},

 onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')

  },

  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },

 previewImage: function(e){
 var that = this,
 index = e.currentTarget.dataset.index,
 pictures = this.data.pictures;
 wx.previewImage({
 current: pictures[index],
 urls: pictures
 })
 },

 imageLoad:function(e){
 //单位rpx
 var originWidth = e.detail.width*px2rpx, 
 originHeight = e.detail.height*px2rpx,
 ratio = originWidth/originHeight;
 var viewWidth = 710,viewHeight//设定一个初始宽度
 //当它的宽度大于初始宽度时，实际效果跟mode=widthFix一致
 if(originWidth>= viewWidth){
 //宽度等于viewWidth,只需要求出高度就能实现自适应
 viewHeight = viewWidth/ratio;
 }else{
 //如果宽度小于初始值，这时就不要缩放了
 viewWidth = originWidth;
 viewHeight = originHeight;
 }
 var imageSize = this.data.imageSize;
 imageSize[e.target.dataset.index] = {
 width:viewWidth,
 height:viewHeight
 }
 this.setData({
 imageSize:imageSize
 })
 }

})


