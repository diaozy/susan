//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    poster: '',
    name: '一课一练',
    author: 'Susan英语学堂',
    src: 'http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/A001Introduction%20.MP3',
 pictures: [ 
  'http://susan-1253455298.cossh.myqcloud.com/images/sbs1.jpg', 
  'http://susan-1253455298.cossh.myqcloud.com/images/niujin22.jpg'
 ]

  },
  //事件处理函数

 onLoad: function () {

  },

bindtapgo0:function()
{
wx.navigateTo({url: '../page0/page0'})
},

bindtapgo1:function()
{
wx.navigateTo({url: '../page1/page1'})
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
 }


})


