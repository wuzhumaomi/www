<template>
	<view class="logo">
		<!-- 如果只是展示用户头像昵称，可以使用 <open-data /> 组件 -->
		<view class="touXiang" >
			<open-data class="userImg"  type="userAvatarUrl"></open-data>
		</view>
		<view class="hui">
			申请获得你的公开信息（昵称、头像等）
		</view>
		<!-- <view >
			账户名：<open-data type="userNickName"></open-data>
		</view>
		<view >
			用户名：{{userInfo.nickName}}
		</view> -->
		<!-- <view >
			所在地：{{userInfo.country + ' - '+ userInfo.province + ' - ' + userInfo.city}}
		</view> -->
		<view :class="userInfo.nickName==undefined?'red':'lv'">
			{{userInfo.nickName==undefined?'用户信息尚未获取':'使用此账号登录'}}
		</view>
		
		<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="switchTab">授权登录</button>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				userInfo:{}
			}
		},
		created() {
		},
		mounted() {
			this.getUserInfo()
			// 获取用户信息
			wx.getUserInfo({
				lang:'zh_CN',
				success: res => {
					this.$store.commit('setUserInfo', res.userInfo);
					
					this.$store.state.userInfo
					// console.log(res.userInfo);
				}
			})
		},
		methods: {
			wxGetUserInfo(res){
				this.userInfo = res.detail.userInfo
				// console.log(res.detail)
				this.getUserInfo()
			},
			getUserInfo(){
				let _t = this
				uni.getUserInfo({
				  provider: 'weixin',
					lang:'zh_CN',
				  success: function (infoRes) {
				    // console.log('用户昵称为：' , infoRes.userInfo);
						if(infoRes.userInfo){
							_t.userInfo = infoRes.userInfo
							
							_t.$store.commit('setHasLogin', true);
							// uni.switchTab({
							//     url: '/pages/main-page/main-page'
							// });
						}else{
							console.log('用户尚未登录')
						}
				  }
				});

			},
			switchTab(){
				uni.switchTab({
				    url: '/pages/main-page/main-page'
				});
			},
			
		}
	}
</script>

<style lang="scss">
	.logo{
		// position: absolute;
		text-align: center;
		view{
			font-size: 26rpx;
			font-weight: 600;
			
			margin-top: 20rpx;
			margin-bottom: 20rpx;
		}
		.hui{
			color: $u-content-color;
		}
		.touXiang{
			width: 300rpx;
			height: 300rpx;
			border-radius: 50%;
			overflow: hidden;
			margin: 0 auto;
		}	
		.bottom{
			position: absolute;
			bottom: 20%;
			left: 50%;
			transform: translateX(-50%);
			width: 80%;
		}
		.red{
			color: #FF5A5F;
			
		}
		.lv{
			color: #00ff00;
		}
		.userImg{
			width: 100rpx;
			border-radius: 50%;
			overflow: hidden;
		}
	}
</style>
