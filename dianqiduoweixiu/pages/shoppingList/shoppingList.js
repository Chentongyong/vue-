// pages/shoppingList/shoppingList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice:0,
    selectAllStatus:false,
    list: [{
      id: 1,
      title: '制氧机3L家用吸氧机',
      image: '../../images/Commodity_images.png',
      pro_name: "2匹，白色",
      num: 1,
      price: 2180,
      deal:200,
      numdeal: 200,
      selected: false,
      totalPrice:1980,
      type:0
    },
    {
      id: 2,
      title: '制氧机3L家用吸氧机',
      image: '../../images/Commodity_images.png',
      pro_name: "2匹，白色",
      num: 1,
      price: 2180,
      deal: 200,
      numdeal:200,
      selected: false,
      totalPrice: 2180,
      type:1
    },
    {
      id: 3,
      title: '制氧机3L家用吸氧机',
      image: '../../images/Commodity_images.png',
      pro_name: "2匹，白色",
      num: 1,
      price: 2180,
      deal: 200,
      numdeal: 200,
      selected: false,
      totalPrice: 2180,
      type:1
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.count_price();
  },

  onClose(e) {
    var that = this;
    // 获取索引
    const index = e.currentTarget.dataset.index;
    // 获取商品列表数据
    let list = this.data.list;
    wx.showModal({
      title: '提示',
      content: '确认删除吗',
      success: function (res) {
        if (res.confirm) {
          // 删除索引从1
          list.splice(index, 1);
          // 页面渲染数据
          that.setData({
            list: list
          });
          // 如果数据为空
          if (!list.length) {
            that.setData({
              hasList: false
            });
          } else {
            // 调用金额渲染数据
            that.count_price();
          }
        } else {
          console.log(res);
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  choice_true:function(e){
    
      var that = this;
      // 获取选中的radio索引
      var index = e.currentTarget.dataset.index;
      // 获取到商品列表数据
      var list = that.data.list;
      // 默认全选
      that.data.selectAllStatus = true;
      // 循环数组数据，判断----选中/未选中[selected]
      list[index].selected = !list[index].selected;
      // 如果数组数据全部为selected[true],全选
      for (var i = list.length - 1; i >= 0; i--) {
        if (!list[i].selected) {
          that.data.selectAllStatus = false;
          break;
        }
      }
      // 重新渲染数据
      that.setData({
        list: list,
        selectAllStatus: that.data.selectAllStatus
      })
      // 调用计算金额方法
      that.count_price();
    
  },
 
  onChange:function(e){
    console.log(e)
    let list = this.data.list;
    let detail = e.detail
    let index = e.currentTarget.dataset.index;
    list[index].num = detail;
    list[index].totalPrice = list[index].price*detail;
    this.setData({
      list
    });
    this.count_price();
  },

  // btn_add(e) {
  //   // 获取点击的索引
  //   const index = e.currentTarget.dataset.index;
  //   // 获取商品数据
  //   let list = this.data.list;
  //   // 获取商品数量
  //   let num = list[index].num;
  //   // 点击递增
  //   num = num + 1;
  //   list[index].num = num;
  //   // 重新渲染 ---显示新的数量
  //   this.setData({
  //     list: list
  //   });
  //   // 计算金额方法
  //   this.count_price();
  // },

  count_price() {//计算总价格
    // 获取商品列表数据
    let list = this.data.list;
    // 声明一个变量接收数组列表price
    let total = 0;
    // 循环列表得到每个数据
    for (let i = 0; i < list.length; i++) {
      // 判断选中计算价格
      if (list[i].selected) {
        // 所有价格加起来 count_money
        total += list[i].num * list[i].price;
      }
    }
    // 最后赋值到data中渲染到页面
    this.setData({
      list: list,
      totalPrice: total.toFixed(2)
    });
  },

  selectAll(e) {//全选//
    // 全选ICON默认选中
    let selectAllStatus = this.data.selectAllStatus;
    // true  -----   false
    selectAllStatus = !selectAllStatus;
    // 获取商品数据
    let list = this.data.list;
    // 循环遍历判断列表中的数据是否选中
    for (let i = 0; i < list.length; i++) {
      list[i].selected = selectAllStatus;
    }
    // 页面重新渲染
    this.setData({
      selectAllStatus: selectAllStatus,
      list: list
    });
    // 计算金额方法
    this.count_price();
  },

  settle_accounts:function(){
    let that = this
    let list = that.data.list
    let arr = []
    let totalPrice = that.data.totalPrice
    for(let i =0; i<list.length;i++){
      if (list[i].selected==true){
        arr.push(list[i])
      }
    }
    let length = arr.length
    arr = JSON.stringify(arr)
    if(length != 0){
      wx.navigateTo({
        url: '../indent/indent?arr=' + arr + "&totalPrice=" + totalPrice + '&total_payment=' + 0 + '&time_limit=' + 0 + '&group_purchase=' + 0,
      })
    }else if(length == 0){
      wx.showToast({
        title: '请选择至少一个商品',
        icon: 'none',
        duration: 2000,
      })
    }
    
  },


  tiaoz:function(){
    wx.navigateTo({
      url: '/pages/detailPage/detailPage',
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