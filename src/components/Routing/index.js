import { createRouter,createWebHashHistory} from "vue-router";
import MyLayout from "../../components/Layout/MyLayout.vue";

const routes =[
    {
        path:"/",
        name:"Home",
        component:MyLayout,
        children:[
            {
                path:"/adverseInternet",
                name:"Adverse Internet",
                component:() =>
                    import("@/pages/adverseInternet.vue")
            },
            {
                path:"/creaditRisk",
                name:"Credit Risk",
                component:() =>
                    import("@/pages/creaditRisk.vue")
            }
        ]
    }
]


const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router