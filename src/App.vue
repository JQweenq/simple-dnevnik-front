<template>
  <div class="wrap">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Sidebar from "./components/Sidebar.vue";
</script>

<style>
.wrap{
	display: flex;
	flex-direction: row;
}
@media (min-width: 768px){
	.sidebar{
		width: var(--sidebar-width);
		height: 100%;
		padding: 10px 14px;
		flex-direction: column;
	}
	.sidebar.close{
		width: var(--sidebar-close);
	}
	.sidebar .item{
		width: 	100%;
	}
	.sidebar .header,
	.sidebar .footer{
		display: flex;
	}
	.separator{
		display: block;
	}
	.sidebar .nav{
		flex-direction: column;
		justify-content: initial;
	}
	.sidebar .router .text{
		display: inline;
	}
	.sidebar .router:hover{
		background: var(--router-hover-color);
	}
	.sidebar .icon {
		min-width: 60px;
		height: 100%;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
	}
	section{
		position: absolute;
		right: 0;
		width: calc(100% - var(--sidebar-width));
		padding: 0 25px;
		transition: var(--tran-05);
	}
	.sidebar.close ~ section{
		width: calc(100% - var(--sidebar-close));
	}
}
@media (min-width: 1024px){}
@media (min-width: 1280px){}
</style>
