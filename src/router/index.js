import Vue from "vue";
import VueRouter from "vue-router";
import group01Router from "./modules/group01Router"
import group02Router from "./modules/group02Router";
Vue.use(VueRouter);


const constantRoutes = [
	{
		path: "/",
		name: "home",
		redirect: "/login",
		
	},
	{
		path: "/login",
		name: "login",
		component: () =>import("../views/login/index.vue"),
	}
]


const router = new VueRouter({
	mode:"history",
	routes: [
		...constantRoutes,
		group01Router,
		group02Router
	]
});

export default router;
