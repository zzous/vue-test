const group02Router = {
	path:"/group02",
	name:"group02",
	component:()=>import("@/layout/group02/index.vue"),
	children: [
		{
			path: "/",
			redirect: "/group02/home",
		},
		{
			path: "/group02/home",
			component: () => import("@/views/group02/index.vue"),
		},{
			path: "/group02/hello",
			component: () => import("@/views/group02/hello.vue")
		},
	],
}

export default group02Router;