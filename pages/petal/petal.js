Page({

  /**
   * 页面的初始数据
   */
  data: {
    inl:'他背过身来与人们拥抱。',
    introduceList:[{
      title:'花瓣说',
      content:'他背过身来与人们拥抱。常常在想人与人交往的时候。我以为这是“只有先与人疏离，才能最终与他们在一起”的含义。'
    },
    {
      title:"素加",
      content:"米兰·昆德拉在《不朽》",
      p:"\n1.瞬间爆\n 2.onbody\n 3.noPro"
    },
    {
      title:'执笔',
      content:'米兰·昆德拉在《不朽》里，描写过人类的两种灵魂，一种是做加法的灵魂，要不断的表现自我，彰显自我，要与这个世界产生千丝万缕的联系，否则就失去了生活的意义，而另外一种人，他们则有一个做减法的灵魂，他们觉得跟这个世界没什么太大的关系，经常试图削弱甚至去除和人的关系'
    }]
  },
  // copy
  copy:function(){
    let that = this;
    if(wx.setClipboardData){
      wx.setClipboardData({
        data: that.data.inl,
        success: function (res) {
          wx.showModal({
            title: '复制',
            content: '复制成功啦，赶快去粘贴吧',
            showCancel: true,//显示取消按钮
            confirmText: 'GO' //确认按钮文字
          })
        }
      })
    }else{
      wx.showModal({
        title: '警告',
        content: '您的微信版本过低，请升级',
      })
    }
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