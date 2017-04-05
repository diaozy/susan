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

http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/A001Introduction%20.MP3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P003_Chapter%2001_Exercise%20C%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P004_Chapter%2001_Exercise%20E%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P005_Chapter%2001_Exercise%20F%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P005_Chapter%2001_Exercise%20H%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P006_Chapter%2002_Exercise%20B%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P011_Chapter%2002_Exercise%20J%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P011_Chapter%2002_Exercise%20K%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P012_Chapter%2002_Exercise%20M%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P012_Chapter%2002_Exercise%20N%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P015_Chapter%2003_Exercise%20C%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P016_Chapter%2003_Exercise%20D%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P018_Chapter%2003_Exercise%20F%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P020_Check-Up%20Test%20Chapters%2001-03_Exercise%20D%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P022_Chapter%2004_Exercise%20C%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P024_Chapter%2004_Exercise%20F%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P024_Chapter%2004_Exercise%20G%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P027_Chapter%2005_Exercise%20C%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P029_Chapter%2005_Exercise%20F%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P032_Chapter%2005_Exercise%20K%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P034_Chapter%2005_Exercise%20O%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P034_Chapter%2005_Exercise%20P%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P036_Chapter%2006_Exercise%20B%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P037_Chapter%2006_Exercise%20D%20GrammarSong.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P039_Chapter%2006_Exercise%20F%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P040_Check-Up%20Test%20Chapters%2004-06_Exercise%20E%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P043_Chapter%2007_Exercise%20C%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P044_Chapter%2007_Exercise%20E%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P049_Chapter%2007_Exercise%20J%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P051_Chapter%2008_Exercise%20D%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P052_Chapter%2008_Exercise%20E%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P054_Chapter%2008_Exercise%20H%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P054_Chapter%2008_Exercise%20I%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P057_Chapter%2008_Exercise%20N%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P057_Chapter%2008_Exercise%20O%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P059_Chapter%2008_Exercise%20Q%20GrammarSong.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P061_Check-Up%20Test%20Chapters%2007-08_Exercise%20F%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P063_Chapter%2009_Exercise%20B%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P065_Chapter%2009_Exercise%20E%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P066_Chapter%2009_Exercise%20G%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P068_Chapter%2009_Exercise%20J%20Listening%20and%20Pronounce.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P070_Chapter%2010_Exercise%20D%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P072_Chapter%2010_Exercise%20I%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P073_Chapter%2010_Exercise%20J%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P075_Check-Up%20Test%20Chapters%2009-10_Exercise%20D%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P077_Chapter%2011_Exercise%20C%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P078_Chapter%2011_Exercise%20G%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P079_Chapter%2011_Exercise%20I%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P082_Chapter%2011_Exercise%20N%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P085_Chapter%2012_Exercise%20C%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P085_Chapter%2012_Exercise%20D%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P089_Chapter%2012_Exercise%20H%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P091_Check-Up%20Test%20Chapters%2011-12_Exercise%20E%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P093_Chapter%2013_Exercise%20D%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P095_Chapter%2013_Exercise%20G%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P097_Chapter%2013_Exercise%20K%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P098_Chapter%2013_Exercise%20M%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P099_Chapter%2013_Exercise%20N%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P099_Chapter%2013_Exercise%20O%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P101_Chapter%2014_Exercise%20D%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P102_Chapter%2014_Exercise%20H%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P103_Chapter%2014_Exercise%20J%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P107_Chapter%2014_Exercise%20Q%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P108_Chapter%2014_Exercise%20T%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P110_Chapter%2014_Exercise%20W%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P111_Chapter%2014_Exercise%20X%20GrammarSong.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P113_Check-Up%20Test%20Chapters%2013-14_Exercise%20G%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P114_Chapter%2015_Exercise%20B%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P115_Chapter%2015_Exercise%20C%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P117_Chapter%2015_Exercise%20F%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P120_Chapter%2015_Exercise%20J%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P125_Chapter%2016_Exercise%20F%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P126_Chapter%2016_Exercise%20I%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P128_Chapter%2016_Exercise%20L%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P128_Chapter%2016_Exercise%20M%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P129_Chapter%2017_Exercise%20B%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P131_Chapter%2017_Exercise%20E%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P133_Chapter%2017_Exercise%20G%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P134_Chapter%2017_Exercise%20I%20Listening.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P135_Chapter%2017_Exercise%20J%20GrammarRap.mp3
http://susan-1253455298.cossh.myqcloud.com/SBS/SBS1%E7%BB%83%E4%B9%A0%E5%86%8C/P137_Check-Up%20Test%20Chapters%2015-17_Exercise%20F%20Listening.mp3



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


