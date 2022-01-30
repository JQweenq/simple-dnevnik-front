<template>
  <aside class="close">
    <header>
      <h1>{{ title }}</h1>
      <b @click="toggle"></b>
    </header>
    <hr />
    <Collection />
    <hr />
    <footer>
      <a href="#" class="item">
        <i :class="`bx ${icon} icon`"></i>
        <span class="text">{{ log }}</span>
      </a>
    </footer>
  </aside>
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
      document.querySelector("aside")?.classList.toggle("close");
    },
  },
  components: {
    Collection,
  },
};
</script>

<style>
aside{
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
aside header,
aside footer{
	width: 100%;
	height: 75px;
	display: none;
	justify-content: center;
	align-items: center;
}
aside header h1{
	font-size: 48px;
	font-family: 'Montserrat', sans-serif;
}
aside hr{
	border: 2px solid var(--primary-color);
	color: var(--primary-color);
	background-color: var(--primary-color);
	border-radius: .5rem;
	display: none;
	margin: 10px 0;
}
aside.close header h1{
	opacity: 0;
}
aside header b{
	background: var(--body-color);
	transform: rotate(45deg);
	position: absolute;
	right: -12.5px;
	width: 25px;
	height: 25px;
	border-radius: 5px;
	transition: var(--tran-05);
}
aside.close header b{
	background: var(--sidebar-color);
}
aside .icon{
	min-width: 50px;
	height: 100%;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
}
aside footer{
	position: relative;
	bottom: 10;
}
</style>

