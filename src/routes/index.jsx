
import Edit from "../pages/admin/products/Edit";
import products_list from "../pages/admin/products/products_list";
import index from "../pages/admin/dashboard";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [{
    path :'/login',
    component:Login
},{
    path :'/404',
    component:PageNotFound
}]

//后台路由
export const adminRoutes = [{
    path:'/admin/dashboard',
    component:index,
    isShow:true,
    title:'看板'
},{
    path:"/admin/products",
    component:products_list,
    exact:true,
    isShow:true,
    title:'商品管理'
},{
    path:'/admin/products/edit/:id?',
    component:Edit,
    isShow:false
}]