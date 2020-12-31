// views/ShippingDate/ShippingDate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:[{
      
      useName:'Catherine',  //用户信息
      frequency:'188',   //交易次数
      time:'2020-03-26' //发布时间
    }],

    // 船源信息
    information:[{
      category:'船名',
      text:'XXXX船名名称'
    },{
      category:'空船港',
      text:'广东省 广州市 海珠大桥港口'
    },{
      category:'船区/载货量(T）',
      text:'A级 3000T   B级 2000T    '
    },{
      category:'船舶类型',
      text:'自卸船  / 油船'
    },{
      category:'备注',
      text:'备注内容备注内容备注内容'
    }],
    information_a:[{
      category:'船主姓名：',
      text:'鹏梅梅'
    },{
      category:'联系方式：',
      text:'18613168923'
    },{
      category:'企业名称：',
      text:'企业名称企业名称'
    },{
      category:'船代公司：',
      text:'XXXX船名名称'
    }],
    information_a_a:[{
      category:'AIS码：',
      text:'419878963'
    },{
      category:'与船舶关系：',
      text:'自有船舶'
    },{
      category:'船代公司：',
      text:'XXXX船名名称'
    },{
      category:'封仓设备：',
      text:'封仓设备'
    },{
      category:'船龄：',
      text:'3年'
    },{
      category:'船籍港:',
      text:'船籍港'
    },{
      category:'船总吨位：',
      text:'船总吨位'
    },{
      category:'船总长：',
      text:'船总长'
    },{
      category:'船总宽：',
      text:'船总宽'
    },{
      category:'船总高：',
      text:'船总高'
    },{
      category:'满载吃水：',
      text:'满载吃水'
    },{
      category:'型深:',
      text:'型深'
    },{
      category:'监控装备：',
      text:'监控装备'
    },{
      category:'船舶保险：',
      text:'监船舶保险'
    },{
      category:'可拉货物：',
      text:'可拉货物'
    }]
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