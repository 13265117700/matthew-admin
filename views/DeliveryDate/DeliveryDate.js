// views/DeliveryDate/DeliveryDate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    //tab 渲染数据
    region:[{
      id:'01',
      title:'全部货源',
    },{
      id:'02',
      title:'珠三角',
    },{
      id:'03',
      title:'西江',
    },{
      id:'04',
      title:'北江',
    },{
      id:'05',
      title:'东江',
    }]
  },
  //tab 点击事件
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
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