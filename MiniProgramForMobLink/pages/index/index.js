//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    path: '下面是分享时的path👇: \n' + app.globalData.receiveData.path,
    query: '下面是分享时携带的query👇: \n' + JSON.stringify(app.globalData.receiveData.query),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    params: '',
    launch: '',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindSwiperTap: function () {
    wx.navigateTo({
      url: '../swiper/swiper'
    })
  },
  launchAppError: function (e) {
    console.log('sssssss')
    console.log(e.detail.errMsg)

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        params: JSON.stringify(app.globalData.userInfo)
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          params: JSON.stringify(app.globalData.userInfo)
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            params: JSON.stringify(app.globalData.userInfo)
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      params: JSON.stringify(e.detail.userInfo)
    })
  }
})
