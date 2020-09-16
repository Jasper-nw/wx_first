//index.js
const app = getApp()

Page({
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
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/miam.jpg", name: "缅因猫", id: "6057d84c5f616cca000d16182a8ec0cd" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/ai_cat.jpg", name: "矮脚猫", id: "60173c665f5361f200e9dd5c7973d63b" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/de_cat.jpg", name: "德文卷毛猫", id: "60173c665f53638700e9eb8b140035a4" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/jiafei_cat.jpg", name: "加菲猫", id: "7498b5fe5f5364af0108d64c34547444" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/gold_cat.jpg", name: "金渐层", id: "60173c665f53657800e9fbb44d89e4a0" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/duan_cat.jpg", name: "美国短毛", id: "b5416b755f53671a01328a175882eb35" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/last_cat.jpg", name: "美国短毛猫", id: "65825b355f53680b00ddb7a536e2bd3e" },
      { url: "cloud://jasper.6a61-jasper-1302923454/title_cat/bosi_cat.jpg", name: "波斯猫", id: "b5416b755f53666f013282f8600db67d" }
      ],
    buou: [
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/wu_cat.jpg", name: "布偶猫", type: "布偶猫", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1753168048.jpg", name: "布偶猫", type: "布偶猫", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1315154985.jpg", name: "布偶猫", type: "布偶宝宝", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1314056906.jpg", name: "布偶猫", type: "布偶猫", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1312434395.jpg", name: "布偶猫", type: "布偶猫", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1311215974.jpg", name: "布偶猫", type: "布偶猫", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1309521369.jpg", name: "布偶猫", type: "布偶宝宝", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1309521369.jpg", name: "布偶猫", type: "布偶宝宝", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1301146114.jpg", name: "布偶猫", type: "布偶猫", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1259371194.jpg", name: "布偶猫", type: "布偶猫", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1256554240.jpg", name: "布偶猫", type: "布偶宝宝", price: "电话或微信咨讯" },
      { url: "cloud://jasper.6a61-jasper-1302923454/wu_cat/1255091987.jpg", name: "布偶猫", type: "布偶宝宝", price: "电话或微信咨讯" }
    ],
   
    shows:[
      {url:"cloud://jasper.6a61-jasper-1302923454/index_image/1700184053.jpg",name:"买家秀"},
      {url:"cloud://jasper.6a61-jasper-1302923454/index_image/1700252936.jpg",name:"买家秀"},
      {url:"cloud://jasper.6a61-jasper-1302923454/index_image/1700305284.jpg",name:"买家秀"},
      {url:"cloud://jasper.6a61-jasper-1302923454/index_image/1700365207.jpg",name:"买家秀"},
      {url:"cloud://jasper.6a61-jasper-1302923454/index_image/1700416330.jpg",name:"买家秀"},
      {url:"cloud://jasper.6a61-jasper-1302923454/index_image/2038001548.jpg",name:"买家秀"}
    ]
  },

  tabshow(){
    this.setData({
      tabrsohw:!this.data.tabrsohw
    })
  },

  logBth:function(options){
      wx.switchTab({
        url: '../detail/detail',
      })
  },

  onLoad: function () {
    // 从后台获得数据,固定写法
    const db = wx.cloud.database();
    const cat = db.collection("comments")
    cat.get({
      success: res => {
        console.log(res.data)
        // this.setData({
        //    swiper:res.data[0].images
        // })
      }
    })
  },

  onGetUserInfo: function (e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
