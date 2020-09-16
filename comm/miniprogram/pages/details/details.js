// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabrsohw:false,
    swiper: [
      "cloud://jasper.6a61-jasper-1302923454/title-3.jpg",
      "cloud://jasper.6a61-jasper-1302923454/title-2.jpg",
      "cloud://jasper.6a61-jasper-1302923454/title-1.jpg",
      "cloud://jasper.6a61-jasper-1302923454/title.jpg"
    ],
    title_cat:
      [{ url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1255091987.jpg", name: "布偶猫",id:"8a6c3bf65f53585000d74bd516d521oe" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/wu_mao.jpg", name: "无毛猫", id: "6518b7395f535b6f0102d2e16295b8ae" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/miam.jpg", name: "缅因猫", id: "8a6c3bf65f53585000d74bd516d520ca" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/ai_cat.jpg", name: "矮脚猫", id: "60173c665f5361f200e9dd5c7973d63b" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/de_cat.jpg", name: "德文卷毛猫", id: "60173c665f53638700e9eb8b140035a4" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/jiafei_cat.jpg", name: "加菲猫", id: "7498b5fe5f5364af0108d64c34547444" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/gold_cat.jpg", name: "金渐层", id: "60173c665f53657800e9fbb44d89e4a0" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/duan_cat.jpg", name: "美国短毛", id: "b5416b755f53671a01328a175882eb35" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/last_cat.jpg", name: "美国短毛猫", id: "65825b355f53680b00ddb7a536e2bd3e" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/bosi_cat.jpg", name: "波斯猫", id: "b5416b755f53666f013282f8600db67d" }
      ],
  },

  tabshow(){
    this.setData({
      tabrsohw:!this.data.tabrsohw
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})