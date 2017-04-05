//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    poster: '',
    name: '一课一练',
    author: 'Susan英语学堂',
    src: 'http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/A001Introduction%20.MP3'

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
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
  }
})


