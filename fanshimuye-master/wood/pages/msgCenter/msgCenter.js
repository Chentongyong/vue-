// pages/msgCenter/msgCenter.js
import {
    msg
} from "../../utils/util";
import {
    messageList
} from "../../utils/api";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        isload: true,
        loading: false,
        page: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getList();
    },
    getList: function() {
        const that = this;
        var isload = this.data.isload;
        var page = that.data.page + 1;
        let size = 10;
        if (!isload) {
            return false;
        }
        that.setData({
            loading: true
        });
        messageList({
            data: {
                page: page,
                size: size
            },
            success: function(res) {
                if (res.code == 200) {
                    let arr = res.data;
                    let num = that.data.list.length;
                    if (arr.length == 0) {
                        that.setData({
                            isload: false,
                            loading: false
                        })
                        return false
                    }
                    if (arr.length < size) {
                        that.setData({
                            isload: false
                        });
                    }
                    arr.forEach((e, index) => {
                        let str = 'list[' + (index + num) + ']';
                        that.setData({
                            [str]: e
                        });
                    });
                    that.setData({
                        loading: false,
                        page: page
                    })
                } else {
                    msg(res.msg);
                }
            }
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        this.getList();
    }
})