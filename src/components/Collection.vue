<template>
  <nav class="nav">
    <router-link
      v-for="router in routers"
      :key="router.url"
      :to="router.url"
      class="item router"
    >
      <i :class="`bx ${router.icon} icon`"></i>
      <span class="text">{{ router.title }}</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      routers: [
        { icon: "bxs-home", title: "Главная", url: "/" },
        { icon: "bxs-timer", title: "Рассписание", url: "/timetable" },
        { icon: "bxs-briefcase", title: "Домашнее задание", url: "/homework" },
        { icon: "bx-cog", title: "Настройки", url: "/settings" },
      ],
    };
  },
};
</script>

<style>
.sidebar .nav{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-grow: 1;
	overflow-y: scroll;
}
.sidebar .nav::-webkit-scrollbar{
	display: none;
}
.sidebar .router{
	background: var(--router-color);
	color: var(--text-color);
	text-decoration: none;
	transition: var(--tran-05);
}
.sidebar .router .text{
	display: none;
	white-space: nowrap;
	font-family: 'Nunito', sans-serif;
	font-size: 17px;
	transition: var(--tran-03);
}
.sidebar.close .router .text{
	opacity: 0;
}
</style>