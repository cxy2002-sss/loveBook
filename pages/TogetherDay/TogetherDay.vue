<template>
	<view>
		<view class="setDay">
			<view>请选择日期</view>
			<view class="day">
				<picker style="color: #a8a8a8;" mode="date" fields="day" @change="changeDay">
					<view>{{date}}</view>
				</picker>
				<uni-icons style="color: #a8a8a8" type="bottom" size="20"></uni-icons>
			</view>
			
		</view>
		<button type="submit" @click="submit" class="submit">保存</button>
	</view>
</template>

<script>
	import {
		getDate
	} from "../../untils/date.js"
	export default {
		data() {
			const currentDate = getDate({
				format: true
			})
			return {
				date: currentDate,
				id:''
			}
		},
		onLoad() {
			
		},
		methods: {
			submit(){
				const db=uniCloud.database()
				db.collection("TogethorDay").where({
					_id:this.id
				}).remove()
				db.collection("TogethorDay").add({
					day:this.date
				}).then((res)=>{
					uni.navigateBack({
						delta:1
					})
				})
			},
			getDay(){
				const db=uniCloud.database()
				db.collection("TogethorDay").where("user_id==$cloudEnv_uid").get().then((res)=>{
					this.id=res.result.data[0]._id
					this.date=res.result.data[0].day
				})
			},
			changeDay(e) {
				this.date = e.detail.value
			},
		}
	}
</script>

<style lang="scss">
.setDay {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: white;

		view:nth-child(1) {
			margin: 20rpx;
			width: 200rpx;
		}

		.day {
			display: flex;
			align-items: center;
		}
	}
.submit{
		background-color: #6365b7;
		color: white;
		margin-top: 30rpx;
	}
</style>
