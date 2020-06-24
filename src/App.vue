<template>
  <div id="app">
    <router-view name="top"></router-view>
	<router-view name="left"></router-view>
	<router-view name="bottom" class="bottom"></router-view>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped="scoped">
	.bottom{
		width: 100%;
		height: 60px;
		border-top:1px solid #dddddd ;
		background-color: #fbfcff;
		float: left;
	}
</style>
