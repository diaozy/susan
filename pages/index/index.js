//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    poster: '',
    name: '一课一练',
    author: 'Susan英语学堂',
    src: 'http://susan-1253455298.cossh.myqcloud.com/%E4%B8%80%E8%AF%BE%E4%B8%80%E7%BB%83%E7%89%9B%E6%B4%A5/%E4%BA%8C%E5%B9%B4%E7%BA%A7%E4%B8%8B/01%20M1U1.mp3'
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


