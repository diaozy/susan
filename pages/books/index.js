var requests = require('../../requests/request.js');

Page({
  data: {
    imgUrls: [
      'http://susanlistening-1253455298.file.myqcloud.com/images/ad1.jpg',
      'http://susanlistening-1253455298.file.myqcloud.com/images/ad2.jpg',
      'http://susanlistening-1253455298.file.myqcloud.com/images/ad3.jpg',
    ],
  },

  onLoad: function () {
    
    requests.getBooks((data) => {
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
			url: `../list/index?bookID=${dataset.id}`
		})
	},

  onShareAppMessage: function () {
    return {
      title: 'Susan英语学堂学习小助手',
      path: '/pages/books/index',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },

})