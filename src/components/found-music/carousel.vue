<template>
	<div class="ec">
		<el-carousel :interval="4000" type="card" height="200px">
			<el-carousel-item v-for="item in list" :key="item" class="eci">
				<img :src="item" height="200px" width="500px" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				list: [require('@/assets/eason.jpg'),
					require('@/assets/jd.jpg'),
					require('@/assets/nhy.jpg'),
					require('@/assets/xg.jpg'),
					require('@/assets/yft.jpg'),
					require('@/assets/zj.jpg')
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.ec{
		width:1000px;
		overflow: hidden;
	}
	.eci {
		width: 500px;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
