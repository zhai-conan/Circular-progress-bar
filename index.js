// pages/test/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        progress_txt: '正在匹配中...',
        rotate: "0deg",
        percent: 65

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
        this.countInterval()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    drawCircle: function (step, point) {
        if (step <= 1) {
            this.setData({
                rotate: -(3.6 * step * 50) + "deg",
                rotete2: (-(3.6 * step * 50) + 225) + "deg",
                point: point
            })
        } else {
            this.setData({
                rotate: -(3.6 * step * 50) + "deg",
                rotete3: -((3.6 * (step - 1) * 50) + 135) + "deg",
                point: point
            })
        }
    },

    countInterval: function () {
        var count = 0
        this.countTimer = setInterval(() => {
            if (count <= this.data.percent) {
                this.drawCircle(count / (100 / 2), 100 - count)
                count++;
            } else {
                this.setData({
                    progress_txt: "匹配成功"
                });
                clearInterval(this.countTimer);
            }
        }, 50)
    },
})