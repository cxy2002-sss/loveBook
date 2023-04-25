<template>
	<view>
		<view class="setDay">
			<view>Ta的生日</view>
			<picker mode="date" fields="day" @change="bindDateChange">
				<view>{{date}}</view>
			</picker>
		</view>
		<button @click='getBack'>保存</button>
	</view>
</template>

<script>
	import {
		getDate
	} from '../../../untils/date.js'
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
			this.getDate()
			
		},
		methods: {
			bindDateChange(e) {
				this.date = e.detail.value
			},
			day(m,d) {
				let time = Date.parse(new Date());
				let month = new Date().getMonth() + 1;
				let year = new Date().getFullYear();
				let futuretime = Date.parse(`${m>month ? year:year+1}-${m}-${d}`);
				let day = parseInt((futuretime-time) / (1000 * 60 * 60 * 24));
				return day
			},
			getDate(){
				const db=uniCloud.database()
				db.collection("Birthday").where("user_id==$cloudEnv_uid").get().then((res)=>{
					this.date=res.result.data[0].date
					this.id=res.result.data[0]._id
				})
			},
			// getDay(){
			// 	const db=uniCloud.database()
			// 	db.collection("Birthday").where({
			// 		_id:"6433b76328064a03b7a4b278"
			// 	}).update({
			// 		day:this.day(this.date.split('-')[1],this.date.split('-')[2]),
			// 		date:this.date
			// 	})
			// },
			getBack(){
				const db=uniCloud.database()
				db.collection("Birthday").where({
					_id:this.id
				}).remove()
				db.collection("Birthday").add({
					day:this.day(this.date.split('-')[1],this.date.split('-')[2]),
					date:this.date
				}).then(()=>{
					uni.navigateBack({
					delta:1
				})
				})
				
			}
		}
	}
</script>

<style lang="scss">
.setDay{
	width: 750rpx;
	height: 100rpx;
	background: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20rpx
}
button{
	background: #6365b7;
	color: white;
}
</style>
