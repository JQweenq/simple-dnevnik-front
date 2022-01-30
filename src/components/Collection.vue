<template>
  <nav>
    <router-link
      v-for="router in routers"
      :key="router.url"
      :to="router.url"
    >
      <i :class="`bx ${router.icon} icon`"></i>
      <span>{{ router.title }}</span>
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
aside nav{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-grow: 1;
	overflow-y: scroll;
}
aside nav::-webkit-scrollbar{
	display: none;
}
aside a{
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	border-radius: 10px;
	background: var(--router-color);
	color: var(--text-color);
	text-decoration: none;
	transition: var(--tran-05);
}
aside a span{
	display: none;
	white-space: nowrap;
	font-family: 'Nunito', sans-serif;
	font-size: 17px;
	transition: var(--tran-03);
}
aside.close a span{
	opacity: 0;
}
</style>