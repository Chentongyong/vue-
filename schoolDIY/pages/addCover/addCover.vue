<template>
	<view class="wrap">
		<scroll-view class="scroll_view" scroll-x="true">
			<view class="list">
				<block v-for="(item, index) in list" :key="index">
					<image class="cover" :src="item.img" mode="aspectFill" lazy-load="true"></image>
				</block>
			</view>
		</scroll-view>
		<view class="paper_box">
			<image class="bg" src="../../static/page_content.png" mode="widthFix"></image>
			<view class="paper_content">
				<view class="float_item"><text class="label">封面文字：</text></view>
				<textarea v-model="data.word.txt" placeholder="60字以内" maxlength="60" />
			</view>
		</view>
		<!--  -->
		<view class="tips">
			<text class="color_main">*</text>
			请按要求填写并上传（文字不能漏填，否则无法为您提供设计服务）
		</view>
		<!--  -->
		<view class="btns">
			<view class="btn color_main" @tap="upTemp">自己上传</view>
			<view class="btn bg_main" @click="start">开始设计</view>
		</view>
	</view>
</template>

<script>
import api from '../../utils/api.js';
import util from '../../utils/util.js';
const app = getApp();
export default {
	data() {
		return {
			type: 1,
			list: [],
			data: {
				type: 1,
				action: '',
				name: '封面',
				images: [],
				word: {
					txt: ''
				},
				file: '',
				f_id: '',
				id: ''
			}
		};
	},
	onLoad(options) {
		const that = this;
		// 添加还是编辑
		if (options.id) {
			api.photoDetail({
				data: {
					id: options.id
				},
				success: function(res) {
					res.action = "edit";
					res.type = that.type;
					res.word = JSON.parse(res.word);
					res.images = [];
					that.data = res;
				}
			});
		}else{
			this.data.action = "add";
		}
		// 获取模板列表
		api.keeperCover({
			data: {
				id: this.type
			},
			success: function(res) {
				that.list = res.list;
			}
		});
	},
	methods: {
		upTemp() {
			const that = this;
			let data = JSON.parse(JSON.stringify(that.data));
			data.word = JSON.stringify(data.word);
			api.uploadImage({
				num: 1,
				success: function(result) {
					uni.uploadFile({
						url: app.globalData.host + 'common/upload',
						header: {
							'content-type': 'multipart/form-data',
							'token': app.globalData.token
						},
						filePath: result[0],
						name: 'file',
						formData: data,
						success: function(res) {
							let data = JSON.parse(res.data);
							if (data.code == 200) {
								util.success(
									'上传成功',
									function() {
										uni.redirectTo({
											url: '../albumList/albumList'
										});
									},
									1200
								);
							} else {
								util.msg(data.msg);
							}
						},
						fail: function(res) {
							console.log(res);
						}
					});
				}
			});
		},
		start() {
			if (!this.data.word.txt) {
				util.msg('请输入封面文字');
				return false;
			}
			app.globalData.templateData = this.data;
			// 开始设计
			uni.navigateTo({
				url: '../templateList/templateList?id=' + this.type
			});
		}
	},
	onUnload() {
		app.globalData.templateData = {};
	}
};
</script>

<style lang="less">
.wrap{
	padding-bottom: 120rpx;
	background-color: #FFFFFF;
}
.scroll_view {
	width: 100%;
	height: 300rpx;
	.list {
		padding: 20rpx 0 0 30rpx;
		white-space: nowrap;
	}
	.cover {
		display: inline-block;
		margin-right: 30rpx;
		width: 230rpx;
		height: 250rpx;
		background-color: #ffffff;
		border-radius: 20rpx 70rpx 20rpx 20rpx;
	}
}
.paper_box {
	margin: auto;
	width: 690rpx;
	overflow: hidden;
	position: relative;
	z-index: 0;
	.bg {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.paper_content {
		padding: 50rpx 30rpx;
		color: #813e19;
		position: relative;
		z-index: 0;
		.float_item {
			margin-top: 12rpx;
			min-height: 60rpx;
			overflow: hidden;
		}
		.label {
			height: 60rpx;
			line-height: 60rpx;
			float: left;
		}
		input {
			height: 60rpx;
			border-bottom: 1rpx dashed #efc0a7;
		}
		textarea {
			box-sizing: border-box;
			padding: 20rpx;
			width: 100%;
			border: 1rpx dashed #efc0a7;
		}
	}
}
.tips {
	margin: 40rpx 30rpx;
	font-size: 24rpx;
	color: #999999;
}
.btns {
	box-sizing: border-box;
	margin: 40rpx 0;
	padding: 0 30rpx;
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	.btn {
		width: 266rpx;
		height: 78rpx;
		line-height: 78rpx;
		border-radius: 40rpx;
		border: 1rpx solid #ff3a51;
		text-align: center;
		&:not(.bg_main){
			background-color: #FFFFFF;
		}
	}
}
</style>
