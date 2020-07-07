<template>
      <b-navbar toggleable="lg" type="dark" variant="primary">
			<b-navbar-brand href="#">리브온</b-navbar-brand>
			<template v-if="menuList && menuList.length">
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item v-for="(item, index) in menuList" :key="index"
							:href="item.url">{{item.label}}</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</template>
		</b-navbar>
</template>

<script>
	export default {
		
		data(){
			return {
				 menuList:[{
                    url: "#1",
                    label: "매물"
                },{
                    url: "#2",
                    label: "시세"
                },{
                    url: "#3",
                    label: "이벤트"
                },{
                    url: "#4",
                    label: "공지사항"
                }],
			}
		}
	}
</script>