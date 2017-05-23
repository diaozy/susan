var requests = require('../../requests/request.js');

Page({
  data: {
    imgUrls: [
      'http://susanlistening-1253455298.file.myqcloud.com/images/ad11.jpg',
      'http://susanlistening-1253455298.file.myqcloud.com/images/ad12.jpg',
      'http://susanlistening-1253455298.file.myqcloud.com/images/ad13.jpg',
    ],
    bookID:'111'
  },


  onLoad: function (param) {
    this.setData({
      bookID: param.bookID,
    })
    
    requests.getList(this.data.bookID,(data) => {
      var rs = [],
        idsMap = {},
        keys = Object.keys(data),
        len = keys.length;

      for (var i = 0; i < len; i++) {
        var k = keys[i];

        rs.push(Object.assign({
          id: k,
        }, data[k]));

        idsMap[k] = {
          preid: i > 0 ? keys[i - 1] : 0,
          nextid: i < len - 1 ? keys[i + 1] : 0
        }
      }

      idsMap[keys[0]].preid = keys[len - 1];
      idsMap[keys[len - 1]].nextid = keys[0];

      this.setData({
        recommends: rs
      });

      wx.setStorageSync('ids', idsMap);

    }, null, () => {
    });



	},
	playTap: function(e) {
		const dataset = e.currentTarget.dataset;
		wx.navigateTo({
			url: `../play/index?id=${dataset.id}&bookID=`+this.data.bookID
		})
	},

  onShareAppMessage: function () {
    return {
      title: 'Susan英语学堂学习小助手',
      path: '/pages/list/index?id=${dataset.id}&bookID=' +this.data.bookID,
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },

})