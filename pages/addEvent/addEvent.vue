<template>
	<view class="all">
		<view class="head">
			添加心事
		</view>
		<form @submit="formSubmit">
			<input name="input" class="title" maxlength="16" confirm-type="done" type="text" placeholder="请输入标题"
				auto-blur='true' />
			<textarea class="content" name="textarea" :maxlength="-1" type="text" placeholder="今天发生了什么？心事详情在这里请填写吧~"
				auto-blur='true'></textarea>
			<view class="images">
				<uni-file-picker v-model="imageValue" fileMediatype="image" @select="select" mode="grid"
					@success="success" limit="1" @fail="fail" :auto-upload="false" ref="files" />
			</view>
			<view class="day">
				<view>心事日期</view>
				<picker name="picker" mode="date" fields="day" @change="bindDateChange">
					<view>{{date}}</view>
				</picker>
			</view>
			<button class="submit" form-type="submit">发布</button>
		</form>
	</view>
</template>

<script>
	import {
		computed
	} from "vue";
	import {
		getDate
	} from '../../untils/date.js'
	export default {
		data() {
			const currentDate = getDate({
				format: true
			})
			return {
				imageValue: [],
				images: [],
				date: currentDate,
				value: {}
			};
		},
		onLoad(option) {
			if (!option.id) {
				uni.switchTab({
					url: '../HeardEvent/HeardEvent'
				})
			}
		},
		methods: {
			// 上传成功
			select(e) {
				console.log(e)
			},
			success(e) {
				this.images = e.tempFilePaths
				// const db = uniCloud.database()
				// db.collection("HeardEvent").add({
				// 	date: this.date,
				// 	image: this.images,
				// 	input: this.value.input,
				// 	textarea:this.value.textarea
				// }).then(() => {
				// 	uni.switchTab({
				// 		url: '../HeardEvent/HeardEvent' 
				// 	})
				// })
			},
			fail(){
				uni.showModal({
					content:"上传失败请检查网络?"
				})
			},
			async formSubmit(e) {
				this.value = e.detail.value
				console.log(this.value)
				if (this.value.input == "" || this.value.textarea == "") {
					console.log(this.value)
					uni.showModal({
						title: '提示',
						content: '请完整填写内容'
					})
				} else {
					let result = await this.$refs.files.upload()
					console.log(result)
					const db = uniCloud.database()
					db.collection("HeardEvent").add({
						date: this.date,
						image: this.images,
						input: this.value.input,
						textarea: this.value.textarea
					}).then(() => {
						uni.switchTab({
							url: '../HeardEvent/HeardEvent'
						})
					})
					// setTimeout(()=>{
					// 	uni.showModal({
					// 		content:"是否要选择图片？",
					// 		success: (res) => {
					// 			if(res.confirm){
					// 				const db = uniCloud.database()
					// 				db.collection("HeardEvent").add({
					// 					date: this.date,
					// 					image: this.images,
					// 					input: this.value.input,
					// 					textarea: this.value.textarea
					// 				}).then(()=>{
					// 					uni.switchTab({
					// 						url: '../HeardEvent/HeardEvent' 
					// 					})
					// 				})
					// 			}
					// 			if(res.cancel){
					// 				const db = uniCloud.database()
					// 				db.collection("HeardEvent").add({
					// 					date: this.date,
					// 					image: [],
					// 					input: this.value.input,
					// 					textarea: this.value.textarea
					// 				}).then(()=>{
					// 					uni.switchTab({
					// 						url: '../HeardEvent/HeardEvent' 
					// 					})
					// 				})
					// 			}
					// 		}
					// 	})
					// },1000)


					// if(this.images.length==0){
					// 	const db = uniCloud.database()
					// 	db.collection("HeardEvent").add({
					// 		date: this.date,
					// 		image: this.images,
					// 		input: value.input,
					// 		textarea: value.textarea
					// 	}).then(() => {
					// 		uni.switchTab({
					// 			url: url
					// 		})
					// 	})
					// }
					// setTimeout(() => {
					// 	console.log(this.images.length==0)
					// 	if(this.images.length==0){
					// 	const db = uniCloud.database()
					// 	db.collection("HeardEvent").add({
					// 		date: this.date,
					// 		image: this.images,
					// 		input: this.value.input,
					// 		textarea: this.value.textarea
					// 	}).then(() => {
					// 		uni.switchTab({
					// 			url: '../HeardEvent/HeardEvent' 
					// 		})
					// 	})
					// 	}
					// }, 1000)
				}
			},
			bindDateChange(e) {
				this.date = e.detail.value
			}
		},
		computed: {
			day() {
				let time = Date.parse(new Date());
				let lasttime = Date.parse("2022-12-19");
				let day = parseInt((time - lasttime) / (1000 * 60 * 60 * 24));
				return day
			}
		}
	}
</script>

<style lang="scss">
	.all {
		margin: auto 20rpx;

		.title {
			width: 750rpx;
			margin: 20rpx auto;
			padding-bottom: 20rpx;
			font-size: 30rpx;
			border-bottom: 1px solid #eee;
		}

		.content {
			width: 750rpx;
			margin: 20rpx auto;
			font-size: 30rpx;
		}

		.images {
			display: flex;
			width: 750rpx;
			padding-bottom: 20rpx;

			.selectImages {
				width: 150rpx;
				height: 150rpx;
				background-color: #a6a6a6;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					width: 100rpx;
					height: 100rpx;
				}
			}

			.imageItem {
				image {
					position: relative;
					margin-right: 20rpx;
					width: 150rpx;
					height: 150rpx;
					pointer-events: none;

					&::before {
						color: white;
						content: '-';
						font-size: 45rpx;
						position: absolute;
						display: block;
						top: -20rpx;
						left: 120rpx;
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						background: black;
						pointer-events: auto;
					}
				}
			}
		}

		.day {
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;
			display: flex;
			height: 80rpx;
			align-items: center;
			justify-content: space-between;
		}

		.submit {
			width: 350rpx;
			color: white;
			border-radius: 50rpx;
			background: #6365b7;
			margin-top: 30rpx;
		}
	}
</style>