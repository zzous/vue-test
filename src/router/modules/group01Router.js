const group01Router = 	{ 
	path:"/group01",
	name:"group01",
	component:()=>import("@/layout/group01/index.vue"),
	children: [
		{
			path: "/",
			redirect: "/group01/home",
		},
		{
			path: "/group01/home",
			component: () => import("@/views/group01/index.vue"),
		},
	],
}

export default group01Router;