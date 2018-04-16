const app = getApp();//获取app数据

Page({ 
  /**
   * 页面的初始数据
   */
  data: {
    // swiper
    imgUrls: [
      '../img/images/swip01.jpg',
      '../img/images/swip02.jpg',
      '../img/images/swip03.jpg',
      '../img/images/swip04.jpg',
      '../img/images/swip05.jpg',
    ],
    indicatorDots:false,
    autoplay:true,
    interval: 3500,//自动切换时长
    duration: 800,//滑动动画时长
    circular: false, //是否采用衔接滑动	
    vertical: false,//滑动方向是否为纵向	
    indicatorDots: true, //是否显示指示点
    // city
    index: 0,
    multiIndex: [0, 0, 0],
    region: ['北京市', '北京市', '全部'],
    customItem: '全部',
    // main
     mainList:null
    // [
    //   {
    //     logo:'../img/serverlunbo03.jpg',
    //     title:'此乃标题',
    //     price:'99.8\n仅仅是一棵树',
    //     logoone:"../img/manjian01.png",
    //     logotwo:"../img/manjian02.png"
    //   }
    // ]
    ,
    // city 单向选择
    // cityList:["北京","上海","广州","太原","西安"],
    // cityLi: "北京市"
  },
  // bindChar:function(e){
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     cityLi:e.detail.value
  //   })
  // },
  // city 三级联动
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      test:'01'
    })
    this.getmainList();
  },
  // listmain JSON
  getmainList:function(){
    var that = this;
    wx.request({
      url: 'http://ccytsoft.com/simple/index.json',
      method:'GET',
      success:function(res){
        console.log(res.data);
        that.setData({
          mainList:res.data
        })
      },
      fail:function(res){
        console.log(res);
      }
    })
   
  },
 
  // 99元满减5元
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    // 跳转详情页
    var mainList = this.data.mainList;
    var title = mainList[index].title;
    var price = mainList[index].price;
    wx.navigateTo({
      url: '/pages/money/money?title=' + title + '&price=' + price,
    })
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