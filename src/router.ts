import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue')
		},
		{
			path: '/auth',
			name: 'auth',
			component: () => import('./views/Auth.vue')
		},
		{
			path: '/timetable',
			name: 'timetable',
			component: () => import('./views/Timetable.vue')
		},
		{
			path: '/settings',
			name: 'settings',
			component: () => import('./views/Settings.vue')
		},
		{
			path: '/homework',
			name: 'homework',
			component: () => import('./views/Homework.vue')
		},
	]
})