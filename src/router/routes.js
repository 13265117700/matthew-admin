const AccountLogin = () =>
  import(/* webpackChunkName: "account" */ "@/views/AccountLogin.vue");
const BasicLayout = () =>
  import(/* webpackChunkName: "BasicLayout" */ "@/components/BasicLayout.vue");
const Administrator = () =>
  import(/* webpackChunkName: "account" */ "@/views/Administrator.vue");

export default [
    {
        path: "/login",
        component: AccountLogin,
        name: "AccountLogin"
    },
    {
        path: "/",
        name: "Root",
        component: BasicLayout,
        redirect: { name: "StackRoot" },
        children:[
            {
                path: "/is",
                name: "UserAdmin",
                component: { render: h => h("router-view") },
                meta: {
                    nav: {
                      icon: "el-icon-collection-tag",
                      title: "用户管理"
                    },
                    slug: "user",//鉴权
                },
                children:[
                    {
                        path:"/is/administrator",
                        name:"Administrator",
                        component: Administrator,
                        meta:{
                            nav: {
                                icon: "el-icon-paperclip",
                                title: "管理员"
                            },
                            slug: "administrator",//鉴权
                        }
                    }
                ]
            }
        ]
    }
]