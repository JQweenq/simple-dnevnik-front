<template>
  <div class="sidebar close">
    <div class="item header">
      <h1>{{ title }}</h1>
      <i class="toggle" @click="toggle"></i>
    </div>
    <hr class="separator" />
    <Collection />
    <hr class="separator" />
    <div class="footer item">
      <a href="#" class="item router">
        <i :class="`bx ${icon} icon`"></i>
        <span class="text">{{ log }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Collection from "./Collection.vue";
export default {
  data: () => ({
    title: "ТТИТ",
    icon: "bxs-log-out",
    log: "Выход",
  }),
  methods: {
    toggle() {
      const sidebar = document.querySelector(".sidebar");
      sidebar?.classList.toggle("close");
    },
  },
  components: {
    Collection,
  },
};
</script>

<style>
.sidebar{
	background: var(--sidebar-color);
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	position: fixed;
	bottom: 0;
	z-index: 100;
	transition: var(--tran-05);
}
.sidebar .item{
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	border-radius: 10px;
}

.sidebar .header,
.sidebar .footer{
	width: 100%;
	height: 75px;
	display: none;
	justify-content: center;
}
.sidebar .header h1{
	font-size: 48px;
	font-family: 'Montserrat', sans-serif;
}
.separator{
	border: 2px solid var(--primary-color);
	color: var(--primary-color);
	background-color: var(--primary-color);
	border-radius: .5rem;
	display: none;
	margin: 10px 0;
}
.sidebar.close .header h1{
	opacity: 0;
}
.sidebar .header .toggle{
	background: var(--body-color);
	transform: rotate(45deg);
	position: absolute;
	right: -12.5px;
	width: 25px;
	height: 25px;
	border-radius: 5px;
	transition: var(--tran-05);
}
.sidebar.close .header .toggle{
	background: var(--sidebar-color);
}
.sidebar .icon {
	min-width: 50px;
	height: 100%;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
}
.sidebar .footer{
	position: relative;
	bottom: 10;
}
</style>

