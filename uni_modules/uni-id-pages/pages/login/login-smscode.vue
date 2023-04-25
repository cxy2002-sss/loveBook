<!-- 短信验证码登录页 -->
<template>
	<view class="uni-content">
		<view class="login-logo">
			<image :src="logo"></image>
		</view>
		<!-- 顶部文字 -->
		<text class="title">请输入验证码</text>
		<text class="tip">先输入图形验证码，再获取短信验证码</text>
		<uni-forms>
			<uni-id-pages-sms-form focusCaptchaInput v-model="code" type="login-by-sms" ref="smsCode" :phone="phone">
			</uni-id-pages-sms-form>
			<button class="uni-btn send-btn" type="primary" @click="submit">登录</button>
		</uni-forms>
		<uni-popup-captcha @confirm="submit" v-model="captcha" scene="login-by-sms" ref="popup"></uni-popup-captcha>
	</view>
</template>
<script>
	import mixin from '@/uni_modules/uni-id-pages/common/login-page.mixin.js';
	export default {
		mixins: [mixin],
		data() {
			return {
				"code": "",
				"phone": "",
				"captcha": "",
				"logo": "/static/logo.png"
			}
		},
		computed: {
			tipText() {
				return '验证码已通过短信发送至' + this.phone;
			},
		},
		onLoad({
			phoneNumber
		}) {
			this.phone = phoneNumber;
		},
		onShow() {
			// #ifdef H5
			document.onkeydown = event => {
				var e = event || window.event;
				if (e && e.keyCode == 13) { //回车键的键值为13
					this.submit()
				}
			};
			// #endif
		},
		methods: {
			submit() { //完成并提交
				const uniIdCo = uniCloud.importObject("uni-id-co", {
					errorOptions: {
						type: 'toast'
					}
				})
				if (this.code.length != 6) {
					this.$refs.smsCode.focusSmsCodeInput = true
					return uni.showToast({
						title: '验证码不能为空',
						icon: 'none',
						duration: 3000
					});
				}
				uniIdCo.loginBySms({
					"mobile": this.phone,
					"code": this.code,
					"captcha": this.captcha
				}).then(e => {
					this.loginSuccess(e)
					console.log(e.type)
					if(e.type==="register"){
						console.log(e.uid)
						const db=uniCloud.database() 
						db.collection("Stuff").add({
						        	item:[
						        {
						            "id": 1,
						            "title": "一起去电影院看电影",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 2,
						            "title": "一起穿情侣装逛街",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 3,
						            "title": "一起去迪士尼乐园（世界上有6个迪士尼乐园，要和同一个人去6次哦）",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 4,
						            "title": "一起去游泳",
						            "active": false
						        },
						        {
						            "id": 5,
						            "title": "一起唱首歌并且录下来",
						            "active": false
						        },
						        {
						            "id": 6,
						            "title": "一起在厨房做饭",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 7,
						            "title": "一起去吃烛光晚餐",
						            "active": false
						        },
						        {
						            "id": 8,
						            "title": "一起过生日",
						            "active": false
						        },
						        {
						            "id": 9,
						            "title": "一起打扫卫生",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 10,
						            "title": "一起给对方写信，然后读给对方听",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 11,
						            "title": "一起去鬼屋玩",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 12,
						            "title": "胆大的一起去蹦极",
						            "active": false
						        },
						        {
						            "id": 13,
						            "title": "一起养一只宠物",
						            "active": false
						        },
						        {
						            "id": 14,
						            "title": "一起研究对方感兴趣的东西，比如口红色号或看球赛",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 15,
						            "title": "一起去做一次陶艺",
						            "active": false
						        },
						        {
						            "id": 16,
						            "title": "一起打王者荣耀",
						            "active": false
						        },
						        {
						            "id": 17,
						            "title": "一起吃鸡",
						            "active": false
						        },
						        {
						            "id": 18,
						            "title": "一起看搞笑综艺（比如最近披荆斩棘的哥哥哦）",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 19,
						            "title": "一起泡脚",
						            "active": false
						        },
						        {
						            "id": 20,
						            "title": "一起熬夜通宵跨年",
						            "active": false
						        },
						        {
						            "id": 21,
						            "title": "一起去旅游",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 22,
						            "title": "一起去爬山",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 23,
						            "title": "一起坐一次摩天轮",
						            "active": false
						        },
						        {
						            "id": 24,
						            "title": "一起拍视频记录生活",
						            "active": false
						        },
						        {
						            "id": 25,
						            "title": "一起为对方刷牙，然后亲亲",
						            "active": false
						        },
						        {
						            "id": 26,
						            "title": "一起去看一次海，牵着手沙滩散步",
						            "active": false
						        },
						        {
						            "id": 27,
						            "title": "互穿对方的衣服，拍照留念",
						            "active": false
						        },
						        {
						            "id": 28,
						            "title": "一起逛超市买好吃的",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 29,
						            "title": "一起坐一次热气球",
						            "active": false
						        },
						        {
						            "id": 30,
						            "title": "一起看书，分享自己喜欢的书籍",
						            "active": false
						        },
						        {
						            "id": 31,
						            "title": "一起在下雨天追剧",
						            "active": false
						        },
						        {
						            "id": 32,
						            "title": "一起做一次蛋糕甜点",
						            "active": false
						        },
						        {
						            "id": 33,
						            "title": "一起看日出看日落",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 34,
						            "title": "一起上下班，坐地铁",
						            "active": false
						        },
						        {
						            "id": 35,
						            "title": "一起画画",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 36,
						            "title": "一起弹吉他",
						            "active": false
						        },
						        {
						            "id": 37,
						            "title": "一起玩滑板",
						            "active": false
						        },
						        {
						            "id": 38,
						            "title": "一起玩一次密室逃脱",
						            "active": false
						        },
						        {
						            "id": 39,
						            "title": "一起玩一次情感剧本杀",
						            "active": false
						        },
						        {
						            "id": 40,
						            "title": "一起去健身",
						            "active": false
						        },
						        {
						            "id": 41,
						            "title": "一起用情侣手机壳",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 42,
						            "title": "一起去一次海底世界",
						            "active": false
						        },
						        {
						            "id": 43,
						            "title": "一起喝醉一次",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 44,
						            "title": "一起打扑克牌",
						            "active": false
						        },
						        {
						            "id": 45,
						            "title": "一起去天安门看升国旗",
						            "active": false
						        },
						        {
						            "id": 46,
						            "title": "一起修理电器",
						            "active": false
						        },
						        {
						            "id": 47,
						            "title": "一起看烟花",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 48,
						            "title": "一起吃火锅",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 49,
						            "title": "一起庆祝恋爱纪念日",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 50,
						            "title": "一起去一次教堂",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 51,
						            "title": "一起看雪，堆雪人",
						            "active": false
						        },
						        {
						            "id": 52,
						            "title": "一起换发型，剪头发",
						            "active": false
						        },
						        {
						            "id": 53,
						            "title": "一起和朋友们去吃饭",
						            "active": false
						        },
						        {
						            "id": 54,
						            "title": "一起跳舞",
						            "active": false
						        },
						        {
						            "id": 55,
						            "title": "一起听音乐，听同一首歌",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 56,
						            "title": "一起坐一次船",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 57,
						            "title": "一起露营，住一次帐篷",
						            "active": false
						        },
						        {
						            "id": 58,
						            "title": "一起DIY手工",
						            "active": false
						        },
						        {
						            "id": 59,
						            "title": "一起连麦睡觉",
						            "active": false
						        },
						        {
						            "id": 60,
						            "title": "一起去上过的小学，中学，大学",
						            "active": false
						        },
						        {
						            "id": 61,
						            "title": "一起在沙发上躺着",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 62,
						            "title": "一起睡个懒觉，赖个床",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 63,
						            "title": "偷偷为对方买喜欢又舍不得的东西",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 64,
						            "title": "互换角色一天",
						            "active": false
						        },
						        {
						            "id": 65,
						            "title": "一起坐一次巴士，在没去过的地方下车",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 66,
						            "title": "一起为布置小家出主意",
						            "active": false
						        },
						        {
						            "id": 67,
						            "title": "给对方准备一次浪漫的告白",
						            "active": false
						        },
						        {
						            "id": 68,
						            "title": "一起在午夜看一次恐怖片",
						            "active": false
						        },
						        {
						            "id": 69,
						            "title": "陪对方演一次自己喜欢的片段",
						            "active": false
						        },
						        {
						            "id": 70,
						            "title": "一起看场球赛",
						            "active": false
						        },
						        {
						            "id": 71,
						            "title": "一起去挑选一束花",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 72,
						            "title": "一起去跳一次广场舞",
						            "active": false
						        },
						        {
						            "id": 73,
						            "title": "一起去见证一次别人的婚礼",
						            "active": false
						        },
						        {
						            "id": 74,
						            "title": "一起为对方按摩一次",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 75,
						            "title": "一起放一次风筝",
						            "active": false
						        },
						        {
						            "id": 76,
						            "title": "一起吐槽一次对方的缺点",
						            "active": false
						        },
						        {
						            "id": 77,
						            "title": "一起说出对方的10个优点",
						            "active": false
						        },
						        {
						            "id": 78,
						            "title": "一起聊聊童年趣事",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 79,
						            "title": "一起去甜爱路打卡",
						            "active": false
						        },
						        {
						            "id": 80,
						            "title": "一起穿一次玩偶服",
						            "active": false
						        },
						        {
						            "id": 81,
						            "title": "一起去看樱花",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 82,
						            "title": "一起敷面膜",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 83,
						            "title": "一起自驾游",
						            "active": false
						        },
						        {
						            "id": 84,
						            "title": "一起去一次动物园",
						            "active": false
						        },
						        {
						            "id": 85,
						            "title": "一起骑自行车",
						            "active": false
						        },
						        {
						            "id": 86,
						            "title": "一起拍照洗照片贴房间",
						            "active": false
						        },
						        {
						            "id": 87,
						            "title": "一起去看一场演唱会",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 88,
						            "title": "为对方录想对他说的话",
						            "active": false
						        },
						        {
						            "id": 89,
						            "title": "一起去拍一次写真",
						            "active": false
						        },
						        {
						            "id": 90,
						            "title": "一起去一次酒吧",
						            "active": false
						        },
						        {
						            "id": 91,
						            "title": "一起去听一次相声",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 92,
						            "title": "一起玩一次真心话大冒险",
						            "active": false
						        },
						        {
						            "id": 93,
						            "title": "一起去许愿池许个愿",
						            "active": false
						        },
						        {
						            "id": 94,
						            "title": "一起入住一次五星级酒店，看夜景",
						            "active": false
						        },
						        {
						            "id": 95,
						            "title": "一起去见父母",
						            "active": false
						        },
						        {
						            "id": 96,
						            "title": "一起挑选戒指",
						            "active": false
						        },
						        {
						            "id": 97,
						            "title": "一起挑选婚纱",
						            "active": false
						        },
						        {
						            "id": 98,
						            "title": "一起为小家添置东西",
						            "active": false,
						            "date": ""
						        },
						        {
						            "id": 99,
						            "title": "一起期待未来甜蜜小生活",
						            "active": false
						        },
						        {
						            "id": 100,
						            "title": "在一起啊，也不算太久，就余生吧",
						            "active": false,
						            "date": ""
						        }
						    ],
							user_id:e.uid
						})
					}
					
				}).catch(e => {
					if (e.errCode == 'uni-id-captcha-required') {
						this.$refs.popup.open()
					} else {
						console.log(e.errMsg);
						
						
						       
					}
				}).finally(e => {
					// console.log("注册2")
					this.captcha = ''
				
				// 	db.collection("Stuff").where("user_id==$cloudEnv_uid").get().catch(()=>{
				// 		console.log("3")
				
				// })
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "@/uni_modules/uni-id-pages/common/login-page.scss";

	.tip {
		margin-top: -15px;
		margin-bottom: 15px;
	}

	.popup-captcha {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: 20rpx;
		background-color: #FFF;
		border-radius: 2px;
		flex-direction: column;
		position: relative;
	}

	.popup-captcha .title {
		font-weight: normal;
		padding: 0;
		padding-bottom: 15px;
		color: #666;
	}

	.popup-captcha .close {
		position: absolute;
		bottom: -40px;
		margin-left: -13px;
		left: 50%;
	}

	.popup-captcha .uni-btn {
		margin: 0;
	}
</style>
