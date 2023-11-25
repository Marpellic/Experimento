import{p as f}from"./product-group.component-552bc087.js";import{_ as P,r as h,o as r,c,a,n as b,b as o,t as g,i as u,g as y,F as x,d as w,e as T}from"./index-4ca67c65.js";import{g as p}from"./categories.service-32ccc348.js";const C={props:{product:{required:!0},categories:{required:!0}},methods:{showDetails(){this.product.imageOpacity=.3,this.product.showText="-13rem;"},hideDetails(){this.product.imageOpacity=1,this.product.showText="8rem;"},showProduct(s){this.$emit("product",s)}},created(){this.product.imageOpacity=1}},k={class:"abs-pos"},D={class:"text text-8 montserrat"},B={class:"text text-2 montserrat"},N={class:"margin-1-height"};function q(s,n,e,v,t,i){const m=h("pv-image"),d=h("pv-button");return r(),c("div",{class:"width-full big-container",onMouseenter:n[1]||(n[1]=_=>i.showDetails()),onMouseleave:n[2]||(n[2]=_=>i.hideDetails())},[a(m,{class:"big-component",src:`/images/category-images/${e.product.id}/big.png`,style:b(`opacity: ${e.product.imageOpacity};`)},null,8,["src","style"]),o("div",k,[o("div",{class:"margin-3-width information",style:b(`top: ${e.product.showText}`)},[o("div",D,g(e.product.name),1),o("div",B,g(e.categories[e.product.category].subcategory[e.product.subcategory].franchise[e.product.franchise].name),1),o("div",N,[a(d,{outlined:"",rounded:"",label:"Comprar",size:"large",onClick:n[0]||(n[0]=_=>i.showProduct(this.product))})])],4)])],32)}const O=P(C,[["render",q]]),F={components:{productGroupComponent:f,bigProductComponent:O},data(){return{categories:[],bigProduct:{},ignoreThisPart:u}},props:{category:{default:u,type:Number,required:!1},subcategory:{default:u,type:Number,required:!1},franchise:{default:u,type:Number,required:!1}},methods:{async getCategories(){await p().then(s=>{this.categories=s}).catch(s=>{console.log(s)})},getBigProduct(){this.category===u?y(this.categories[0].bigProduct).then(s=>{this.bigProduct=s}):this.subcategory===u?y(this.categories[this.category].bigProduct).then(s=>{this.bigProduct=s}):y(this.categories[this.category].subcategory[this.subcategory].bigProduct).then(s=>{this.bigProduct=s})},showProduct(s){this.$emit("product",s)}},created(){this.getCategories().then(s=>{this.getBigProduct()})}},V={key:0},z={key:0,class:"margin-2"},M={class:"margin-2"},S={class:"flex align-center text-4"},E={class:"flex align-center text-1"},G={key:1,class:"margin-2"},I={class:"margin-2"},L={class:"margin-2"},j={class:"flex align-center text-4"},A={key:2,class:"margin-2"},H={class:"margin-2"},J={class:"margin-2"},K={class:"flex align-center text-4"},Q={key:3,class:"margin-2"},R={class:"margin-2"},U={class:"margin-2"},W={class:"flex align-center text-4"},X={key:1,class:"flex align-center"},Y={class:"content-margin"},Z=o("div",{class:"text-4 margin-1"},"Cargando productos...",-1),$={class:"margin-1"};function ee(s,n,e,v,t,i){const m=h("bigProductComponent"),d=h("product-group-component"),_=h("pv-progress-bar");return t.categories.length!==0&&t.bigProduct&&t.bigProduct.category!==void 0?(r(),c("div",V,[a(m,{categories:t.categories,product:this.bigProduct,onProduct:i.showProduct},null,8,["categories","product","onProduct"]),e.category===t.ignoreThisPart?(r(),c("div",z,[(r(!0),c(x,null,w(t.categories,l=>(r(),c("div",{key:l.id,class:"margin-2"},[o("div",M,[o("div",S,g(l.title),1),o("div",E,g(l.subtitle),1)]),a(d,{categories:t.categories,category:l.id,rows:2,onProduct:i.showProduct,"is-manga":l.id===2},null,8,["categories","category","onProduct","is-manga"])]))),128))])):e.category!==t.ignoreThisPart&&e.subcategory===t.ignoreThisPart?(r(),c("div",G,[o("div",I,[o("div",L,[o("div",j,g(t.categories[this.category].name),1)]),a(d,{categories:t.categories,category:e.category,rows:10,onProduct:i.showProduct,"is-manga":e.category===2},null,8,["categories","category","onProduct","is-manga"])])])):e.category!==t.ignoreThisPart&&e.subcategory!==t.ignoreThisPart&&e.franchise===t.ignoreThisPart?(r(),c("div",A,[o("div",H,[o("div",J,[o("div",K,g(t.categories[e.category].subcategory[e.subcategory].name),1)]),a(d,{categories:t.categories,category:e.category,subcategory:e.subcategory,rows:10,onProduct:i.showProduct,"is-manga":e.category===2},null,8,["categories","category","subcategory","onProduct","is-manga"])])])):e.category!==t.ignoreThisPart&&e.subcategory!==t.ignoreThisPart&&e.franchise!==t.ignoreThisPart?(r(),c("div",Q,[o("div",R,[o("div",U,[o("div",W,g(t.categories[e.category].subcategory[e.subcategory].franchise[e.franchise].name),1)]),a(d,{categories:t.categories,category:e.category,subcategory:e.subcategory,franchise:e.franchise,rows:10,onProduct:i.showProduct,"is-manga":e.category===2},null,8,["categories","category","subcategory","franchise","onProduct","is-manga"])])])):T("",!0)])):(r(),c("div",X,[o("div",Y,[Z,o("div",$,[a(_,{style:{width:"24rem"},mode:"indeterminate"})])])]))}const ie=P(F,[["render",ee]]);export{ie as default};
