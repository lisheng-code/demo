<template>
	<div>
		<div class="nav">
			<el-menu default-active="/left/f_music" router="true" class="el-menu-demo" mode="horizontal" active-text-color="#c70000">
				<el-menu-item class="emi"></el-menu-item>
				<el-menu-item index="/left/f_music">个性推荐</el-menu-item>
				<el-menu-item index="2">歌单</el-menu-item>
				<el-menu-item index="3">主播电台</el-menu-item>
				<el-menu-item index="4">排行榜</el-menu-item>
				<el-menu-item index="5">歌手</el-menu-item>
				<el-menu-item index="6">最新音乐</el-menu-item>
			</el-menu>
		</div>
		<carousel class="carousel"></carousel>
		<router-view></router-view>
	</div>
</template>

<script>
	import carousel from './carousel.vue'
	export default{
		components:{
			'carousel':carousel
		}
	}
</script>

<style scoped>
	.nav {
		width: 800px;
		margin-left: 30px;
		margin-bottom: 20px;
	}

	.el-menu-demo {
		border: none;
		width: 1170px;
		border-bottom: 0.5px solid #e6e6e6;
	}
	.carousel{
		margin-left: 120px;
	}
	.emi {
		width: 310px;
		cursor: default;
	}
</style>
