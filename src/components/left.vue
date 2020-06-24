<template>
	<div>
		<div class="left">
		<dl v-for="(item,index) of list">
			<dt class="title">&nbsp;{{index}}</dt>
			<dd v-for="(i,index) of item" :key="index" @click="change(i.title)">
				<router-link to="/left/f_music" class="router-div" tag="div" :class="i.title==active?'active':''">
					<img :src="i.src" width="20px"height="20px"/>&nbsp; {{i.title}}
				</router-link>
			</dd>
		</dl>
		</div>
		<div class="right">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				active:'发现音乐',
				list:{
					"推荐":[
						{
							title:'发现音乐',
							src:require('@/assets/音乐.svg')
						},{
							title:'私人FM',
							src:require('@/assets/FM.svg')
						},{
							title:'LOOK直播',
							src:require('@/assets/look.svg')
						},{
							title:'视频',
							src:require('@/assets/视频.svg')
						},{
							title:'朋友',
							src:require('@/assets/朋友.svg')
						}],
					"我的音乐":[{
							title:'本地音乐',
							src:require('@/assets/本地音乐.svg')
						},{
							title:'下载管理',
							src:require('@/assets/下载.svg')
						},{
							title:'我的音乐云盘',
							src:require('@/assets/云盘.svg')
						},{
							title:'我的收藏',
							src:require('@/assets/收藏.svg')
						}],
					"创建的歌单":[],
					"收藏的歌单":[]
				}
			}
		},
		methods:{
			change(info){
				this.active = info
			}
		}
	}
</script>

<style scoped>
	.left{
		width: 15%;
		height:695px;
		background-color: #fbfcff;
		float: left;
		box-sizing: border-box;
		border-right:1px solid #dddddd ;
	}
	.right{
		width: 85%;
		height:695px;
		background-color: #ffffff;
		float: left;
	}
	
	dt{
		margin-bottom: 10px;
	}
	dl>dd{
		cursor: pointer;
		color: gray;
		margin:0; 
		margin-bottom: 10px;
	}
	.router-div{
		border-left:3px solid transparent;
		color: gray;
		line-height: 30px;
		padding-left: 20px;
	}
	.active{
		background-color: #e4e4e4;
		box-sizing: border-box;
		border-left: 3px solid #c70000;
	}
	.router-div:hover{
		color: #000000;
	}
</style>
