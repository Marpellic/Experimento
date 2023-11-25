import{_ as f,r as c,o as a,c as d,b as t,a as n,h as b,t as o,g as I,D as P,E as k,G as O,w as D,F as L,d as C,e as v,f as z,j as x}from"./index-4ca67c65.js";import{n as N}from"./not-logged-in.component-00c8f410.js";import{g as B}from"./categories.service-32ccc348.js";const q={props:{product:{required:!0}}},$={class:"flex flex-row"},U={class:"flex flex-col align-left"},A={class:"flex-row gap-1"},w=t("div",{class:"main-text"}," Nombre: ",-1),R={class:"text"},E={class:"flex-row gap-1"},F=t("div",{class:"main-text"}," Franquicia: ",-1),j={class:"text"},M={class:"flex-row gap-1"},S=t("div",{class:"main-text"}," Precio: ",-1),T={class:"text"},V={class:"flex-row gap-1"},G=t("div",{class:"main-text"}," Cantidad: ",-1),H={class:"text"};function J(e,s,r,y,i,_){const l=c("pv-image");return a(),d("div",$,[t("div",{class:b(r.product.category==="Lectura"?"order-manga-image":"order-product-image")},[n(l,{src:`images/product-images/${r.product.id}/${r.product.image}`},null,8,["src"])],2),t("div",U,[t("div",A,[w,t("div",R,o(r.product.name),1)]),t("div",E,[F,t("div",j,o(r.product.franchise),1)]),t("div",M,[S,t("div",T,o(r.product.unitPrice),1)]),t("div",V,[G,t("div",H,o(r.product.amount),1)])])])}const K=f(q,[["render",J]]);const Q={components:{orderProductComponent:K},props:{orderData:{required:!0,products:{required:!0,type:Array}},categories:{required:!0},userInfo:{required:!0}},data(){return{totalProductsAmount:0,productsLoaded:0,loadingPercentage:0,options:{color:"red",animation:!1}}},methods:{loadProducts(){this.loadingPercentage=0,this.productsLoaded=0,this.totalProductsAmount=Object.keys(this.orderData.products).length;for(const e in this.orderData.products)I(e).then(s=>{this.productsLoaded++,this.loadingPercentage=this.productsLoaded/this.totalProductsAmount*100,this.orderData.products[e].id=s.id,this.orderData.products[e].category=this.categories[s.category].name,this.orderData.products[e].subcategory=this.categories[s.category].subcategory[s.subcategory].name,this.orderData.products[e].franchise=this.categories[s.category].subcategory[s.subcategory].franchise[s.franchise].name,this.orderData.products[e].name=s.name,this.orderData.products[e].image=s.image[0],this.orderData.products[e].totalPrice=this.orderData.products[e].unitPrice*this.orderData.products[e].amount})},restartLoading(){this.totalProductsAmount===this.productsLoaded&&this.loadProducts()},getRegionalInformation(){P(this.orderData.shipping.district_id).then(e=>{this.orderData.shipping.district=e}),k(this.orderData.shipping.province_id).then(e=>{this.orderData.shipping.province=e}),O(this.orderData.shipping.department_id).then(e=>{this.orderData.shipping.department=e})}},created(){this.loadProducts(),this.getRegionalInformation()}},W={key:0},X={class:"flex-justify-content"},Y=t("div",null,null,-1),Z={class:"align-center"},tt={class:"main-order-container flex-justify-content"},et={id:"products-area"},st={class:"fill-and-center"},ot={key:0,class:"flex-col gap-2"},rt={key:1},it={class:"align-center"},at={class:"margin-1"},dt=t("div",{class:"text-2"},"Cargando productos...",-1),nt={class:"force-center"},ct=t("div",{class:"margin-0"},null,-1),lt={id:"vertical-separator"},_t={id:"horizontal-separator"},ut={id:"details-area",class:"margin-1"},ht={class:"fill-and-center"},pt={class:"align-left"},gt={id:"personal_info"},mt=t("div",{class:"text-2"}," Informacion del Receptor: ",-1),vt={class:"margin-0"},ft={class:"info-table"},yt=t("td",null," Nombre: ",-1),Dt=t("td",null," Sexo: ",-1),xt=t("td",null," Telefono: ",-1),Lt={id:"shipping_info"},Ct=t("div",{class:"text-2"}," Direccion de Envío: ",-1),bt={class:"margin-0"},It={class:"info-table"},Pt=t("td",null," Direccion: ",-1),kt=t("td",null," Distrito: ",-1),Ot=t("td",null," Provincia: ",-1),zt=t("td",null," Departamento: ",-1),Nt={id:"shipping_info"},Bt=t("div",{class:"text-2"}," Información de Pago: ",-1),qt={class:"margin-0"},$t={class:"info-table"},Ut={id:"status"},At=t("div",{class:"text-2"}," Estado del Pedido: ",-1),wt={class:"margin-0"},Rt={class:"info-table"};function Et(e,s,r,y,i,_){const l=c("pv-divider"),h=c("orderProductComponent"),p=c("pv-progress-bar"),g=c("pv-image"),u=c("pv-card");return r.orderData?(a(),d("div",W,[n(u,null,{title:D(()=>[t("div",X,[Y,t("div",Z," ORDEN N° "+o(r.orderData.id),1),t("div",null,[t("i",{class:"pi pi-sync",onClick:s[0]||(s[0]=(...m)=>_.restartLoading&&_.restartLoading(...m))})])]),n(l)]),content:D(()=>[t("div",tt,[t("div",et,[t("div",st,[i.totalProductsAmount===i.productsLoaded?(a(),d("div",ot,[(a(!0),d(L,null,C(r.orderData.products,m=>(a(),d("div",null,[n(h,{product:m},null,8,["product"])]))),256))])):(a(),d("div",rt,[t("div",it,[t("div",at,[dt,t("div",null,"("+o(i.productsLoaded)+" / "+o(i.totalProductsAmount)+")",1)]),t("div",nt,[n(p,{style:{width:"20rem"},mode:"indeterminate"})]),ct])]))])]),t("div",lt,[n(l,{layout:"vertical"})]),t("div",_t,[n(l)]),t("div",ut,[t("div",ht,[t("div",pt,[t("div",gt,[mt,t("div",vt,[t("table",ft,[t("tr",null,[yt,t("td",null,o(this.userInfo.personal.firstName+" "+this.userInfo.personal.lastName),1)]),t("tr",null,[Dt,t("td",null,o(this.userInfo.personal.genre?"Masculino":"Femenino"),1)]),t("tr",null,[xt,t("td",null,o(this.userInfo.personal.phone),1)])])])]),t("div",Lt,[Ct,t("div",bt,[t("table",It,[t("tr",null,[Pt,t("td",null,o(this.orderData.shipping.address),1)]),t("tr",null,[kt,t("td",null,o(this.orderData.shipping.district?this.orderData.shipping.district:"Cargando distrito..."),1)]),t("tr",null,[Ot,t("td",null,o(this.orderData.shipping.province?this.orderData.shipping.province:"Cargando provincia..."),1)]),t("tr",null,[zt,t("td",null,o(this.orderData.shipping.department?this.orderData.shipping.department:"Cargando departamento..."),1)])])])]),t("div",Nt,[Bt,t("div",qt,[t("table",$t,[t("tr",null,[t("td",null,o(this.orderData.payment.stringData.name)+": ",1),t("td",null,o(this.orderData.payment.stringData.value),1)])])])]),t("div",Ut,[At,t("div",wt,[t("table",Rt,[t("tr",null,[t("td",null,[n(g,{src:`images/statuses/${this.orderData.status.img}`},null,8,["src"])]),t("td",null,o(this.orderData.status.name),1)])])])])])])])])]),_:1})])):v("",!0)}const Ft=f(Q,[["render",Et]]);const jt={components:{orderComponent:Ft,notLoggedInComponent:N},props:{amountToRead:{required:!1,type:Number,default:10},loadMoreButton:{required:!1,type:Boolean,default:!0},title:{required:!1,type:Boolean,default:!0}},data(){return{userInfo:null,isUserLogged:!1,ordersData:[],displayedOrders:[],categories:[]}},methods:{restartLazyLoad(){this.displayedOrders=[],this.ordersData=this.userInfo.shop.ordersData.sort((e,s)=>s.id-e.id)},executeLazyLoad(){const e=this.displayedOrders.length;let s=this.displayedOrders.length+this.amountToRead;this.ordersData.length<s&&(s=this.ordersData.length);for(let r=e;r<s;r++)this.displayedOrders.push(this.ordersData[r])},getUserInfo(e){e!=null&&e?(this.userInfo=e,this.userInfo.shop.ordersData!==this.ordersData&&(this.restartLazyLoad(),this.executeLazyLoad()),this.isUserLogged||(this.isUserLogged=!0)):this.isUserLogged&&(this.isUserLogged=!1)},getCategoriesData(){B().then(e=>{this.categories=e})}},created(){this.userInfo=z.methods.watchUser(this.getUserInfo),this.isUserLogged=!!this.userInfo,this.isUserLogged&&(this.restartLazyLoad(),this.executeLazyLoad(),this.getCategoriesData()),console.log("Orders Data: ",this.ordersData,"Displayed Data: ",this.displayedOrders)}},Mt={key:0,class:"flex-col gap-6"},St={key:0,class:"text-6 align-center"},Tt={key:1,class:"flex-col gap-6"},Vt={key:2,class:"align-center"},Gt=t("div",null,"No has realizado ninguna orden",-1);function Ht(e,s,r,y,i,_){const l=c("orderComponent"),h=c("pv-button"),p=c("pv-image"),g=c("notLoggedInComponent");return i.isUserLogged?(a(),d("div",Mt,[r.title?(a(),d("div",St," Ordenes de "+o(i.userInfo.personal.firstName)+" "+o(i.userInfo.personal.lastName)+": ",1)):v("",!0),i.displayedOrders&&i.displayedOrders.length>0?(a(),d("div",Tt,[(a(!0),d(L,null,C(i.displayedOrders,u=>(a(),d("div",{key:u},[n(l,{"order-data":u,categories:i.categories,"user-info":i.userInfo},null,8,["order-data","categories","user-info"])]))),128)),r.loadMoreButton?(a(),x(h,{key:0,onClick:_.executeLazyLoad,disabled:i.ordersData.length===i.displayedOrders.length,label:"Cargar más",size:"large",severity:"secondary",rounded:""},null,8,["onClick","disabled"])):v("",!0)])):(a(),d("div",Vt,[n(p,{src:"/images/characters/astronaut_confused.png",class:"character"}),Gt]))])):(a(),x(g,{key:1}))}const Wt=f(jt,[["render",Ht]]);export{Wt as default};
