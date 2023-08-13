"use strict";(self["webpackChunktame_pos"]=self["webpackChunktame_pos"]||[]).push([[64],{8129:function(e,t){t["Z"]={install(e,t){e.config.globalProperties.$confirm=e=>{var n=document.createElement("div");n.setAttribute("id","alert-container");const r=` <div\n          class="modal fade show"\n          id="modal-default"\n          tabindex="-1"\n          role="dialog"\n          style="display: block"\n        >\n          <div\n            class="modal-dialog modal- modal-dialog-centered"\n            role="document"\n          >\n            <div class="modal-content" style="border-color: transparent">\n              <div class="modal-header py-2">\n                <h5 class="modal-title">\n                  ${e.title}\n                </h5>\n                <a\n                  href="javascript:void(0)"\n                  class="close text-dark"\n                >\n                <svg height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">\n                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>\n                    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>\n                </svg>\n                  </a>\n              </div>\n    \n              <div class="modal-body text-left h6 mb-0">\n                  ${e.content}\n              </div>\n              <div class="modal-footer">\n                <button\n                  type="button"\n                  class="mr-auto ${e.classes}"\n                  id="action-btn"\n                >\n                  <span id="action-text">${e.actionText}</span>\n                  <p id="alert-loading"><span></span><span></span><span></span></p>\n                <button\n                  type="button"\n                  class="btn btn-light ms-auto"\n                  id="close-btn"\n                >\n                <span>${e.closeText}</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="modal-backdrop fade show"></div>`;n.innerHTML=r,n.querySelector(".close").addEventListener("click",(()=>{document.querySelector("#alert-container").remove()})),n.querySelector("#close-btn").addEventListener("click",(()=>{document.querySelector("#alert-container").remove()})),n.querySelector("#action-btn").addEventListener("click",(()=>{t.commit("REGISTER_CONFIRM_MODAL"),n.querySelector("#action-text").remove(),n.querySelector("#alert-loading").classList.add("d-block"),e.action()})),document.body.prepend(n)}}}},2650:function(e,t,n){n.d(t,{h:function(){return r}});const r={data:()=>({uploadsUrl:"/api/uploads",modalOpen:!1,filterKey:null,publicPath:"/pos/",permissionsPath:null}),computed:{isUserLoggedIn:function(){return this.$store.getters.isLoggedIn},userPermissions(){if(this.$store.getters.user){let e=this.$store.getters.user.role;if(e)return e.permissions}return{}},appSettings(){const e=this.$store.state.settings||{};return e.result||{}},loggedUser(){return this.$store.getters.user||{}},userRole(){return this.loggedUser.role?this.loggedUser.role.name:null},currentBranch(){return this.$store.getters.branch}},methods:{getSiteLogo(){const e=this.appSettings?.site_logo;return e?""+(this.uploadsUrl+"/"+e):`${this.publicPath}img/logo.jpg`},handleLogout(){this.$http.post("auth/logout",this.$helper.generateFormData({})).then((e=>{e.data.status&&this.$store.dispatch("logout").then((()=>{window.location.replace(this.$router.resolve({name:"Login"}).href)}))}))},toggleModal(){this.$helper.toggleModalOpen(),this.modalOpen=!this.modalOpen},formatMoney(e){return`${this.appSettings.currency} ${this.$helper.formatNumber(e)}`},getPaymentsMeta(){this.$store.commit("SET_REQUEST_FLAG","GET_PAYMENTS_META"),this.$http.get("shared/payments-meta").then((e=>{this.$store.commit("SET_PAYMENT_META",e.data)}))}}}},2745:function(e,t,n){var r=n(6675);t["Z"]={install(e){e.config.globalProperties.$helper={timeZone:localStorage.getItem("_tz")||"Africa/Kigali",baseUrl(e=null){let t=location.origin;return e&&(t+=`/${e}`),t},formatNumber(e){if(!e)return 0;let t=e.toString();const n=t.indexOf("."),r=3;if(-1!==n){const e=t.substr(n+1,r);t=t.substr(0,n+1)+e}return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},reloadPage(){location.reload()},showFilePicker(e){document.getElementById(e).click()},isEmpty(e){const t=Object.values(e).every((e=>null===e));return 0===Object.keys(e).length||!0===t},empty(e){let t,n,r,o;const a=[t,null,!1,0,"","0"];for(r=0,o=a.length;r<o;r++)if(e===a[r])return!0;if("object"===typeof e){for(n in e)if(Object.prototype.hasOwnProperty.call(e,n))return!1;return!0}return!1},handleArrayPush(e,t){return[t,...e]},handlePrint(e){const t=new r.gR,n=[`${location.origin}/pos/css/thermal-print.css`];t.print(document.querySelector(e),n)},resetObjectValues(e){for(let t in e)if(!0===e[t])e[t]=!1;else{if(!1===e[t])continue;e[t]=null}return e},formatDate(e){let t={month:"short",day:"numeric",year:"numeric",timeZone:this.timeZone},n=new Date(e);return n.toLocaleDateString("en-US",t)},formatTime(e){return new Date(e).toLocaleTimeString("en-US",{timeZone:this.timeZone})},formatOrderTime(e){return new Date(e).toTimeString("en-US",{timeZone:this.timeZone}).slice(0,5)},generateFormData(e){const t=new FormData;for(let n in e)null!==e[n]&&"undefined"!==typeof e[n]&&("object"===typeof e[n]?t.append(n,JSON.stringify(e[n])):t.append(n,e[n]));return t},toggleModalOpen(){const e=document.documentElement;e.classList.contains("modal-open")?e.classList.remove("modal-open"):e.classList.add("modal-open");const t=document.body;t.classList.contains("modal-open")?t.classList.remove("modal-open"):t.classList.add("modal-open")},encodeQuery(e,t){let n="";for(let r in t)!this.empty(t[r])&&e.indexOf(`?${r}`)<0&&e.indexOf(`&${r}`)<0&&(n+=encodeURIComponent(r)+"="+encodeURIComponent(t[r])+"&");return e.indexOf("?")>-1?`${e}&${n.slice(0,-1)}`:`${e}?${n.slice(0,-1)}`},generateVoucherNo(e){let t=e.toString().length;return t>=4?e:1==t?`000${e}`:2==t?`00${e}`:3==t?`0${e}`:void 0},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)},inputTitle(e){return e.split("_").join(" ")},createTitleSlug(e){return e.toLowerCase().split(" ").join("_")},createKeyPath(e=[]){return e.join(".")},getKeyValue(e,t){return e.split(".").reduce(((e,t)=>e&&e[t]||null),t)},timeDifference(e,t=new Date(TODAY)){var n,r,o=6e4,a=60*o,i=24*a,s=30*i,l=365*i,c=e-t;c>0?c<o?(n=Math.round(c/1e3),r="second"):c<a?(n=Math.round(c/o),r="minute"):c<i?(n=Math.round(c/a),r="hour"):c<s?(n=Math.round(c/i),r="day"):c<l?(n=Math.round(c/s),r="month"):(n=Math.round(c/l),r="year"):c>-1*o?(n=Math.round(c/1e3),r="second"):c>-1*a?(n=Math.round(c/o),r="minute"):c>-1*i?(n=Math.round(c/a),r="hour"):c>-1*s?(n=Math.round(c/i),r="day"):c>-1*l?(n=Math.round(c/s),r="month"):(n=Math.round(c/l),r="year");const d=new Intl.RelativeTimeFormat;return d.format(n,r)},getRandomElement(e){return e[Math.floor(Math.random()*e.length)]},randomDate(e,t){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))},generateRandomText(e){let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<e;r++){const e=Math.floor(Math.random()*n.length);t+=n.charAt(e)}return t},formatOrderDate(e){var t=this.timeDifference(new Date(e));let n=this.formatDate(e),r=this.formatDate(new Date(TODAY));return n==r?"today":t.indexOf("yesterday")>-1||t.indexOf("hour")>-1?"yesterday":this.formatDate(e)},padNumber(e,t=5){let n=e.toString();if(n.length<t){let e=new Array(t-n.length+1).join("0");return e+n}},toggleFullscreen(e){e=e||document.documentElement,document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}}}},8502:function(e,t){t["Z"]={install:(e,t)=>{e.config.globalProperties.$notify=e=>{t.commit("SET_FLASH_MESSAGE",e)}}}},4493:function(e,t,n){n.d(t,{aF:function(){return r},mG:function(){return o},sW:function(){return a},tH:function(){return i}});const r=(e,t)=>{let n="";for(let r in t)t[r]&&e.indexOf(`?${r}`)<0&&e.indexOf(`&${r}`)<0&&(n+=encodeURIComponent(r)+"="+encodeURIComponent(t[r])+"&");return e.indexOf("?")>-1?`${e}&${n.slice(0,-1)}`:`${e}?${n.slice(0,-1)}`},o=["Process Payment","Credit Post"],a=["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d"],i=e=>"/api/uploads/"+e},2895:function(e,t,n){var r=n(5431);(0,r.z)("/pos/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}})},8403:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2483);const o=[{path:"/front-office",name:"FrontOfficeLogin",component:()=>n.e(263).then(n.bind(n,4629)),meta:{title:"Login"}},{path:"/front-office/home",name:"FrontOfficeHome",component:()=>n.e(263).then(n.bind(n,6579)),meta:{title:"Front Office Home"}},{path:"/front-office/orders",name:"WaiterOrders",component:()=>n.e(263).then(n.bind(n,6779)),meta:{title:"Waiter Orders",requireFrontOfficeAuth:!0}},{path:"/front-office/orders/:action/:reference?",name:"OrdersCreator",component:()=>n.e(263).then(n.bind(n,9766)),meta:{title:"Order Creator",requireFrontOfficeAuth:!0}},{path:"/front-office/kitchen/orders",name:"KitchenOrders",component:()=>n.e(263).then(n.bind(n,7357)),meta:{title:"Kitchen Orders",requireFrontOfficeAuth:!0}},{path:"/front-office/bar/orders",name:"BarOrders",component:()=>n.e(263).then(n.bind(n,7357)),meta:{title:"Bar Orders",requireFrontOfficeAuth:!0}},{path:"/front-office/reports/sales",name:"FrontOfficeSalesReport",component:()=>n.e(263).then(n.bind(n,2608)),meta:{title:"Sales Report",requiresAdminAuth:!0}}],a=[{path:"/dashboard",name:"Dashboard",component:()=>n.e(263).then(n.bind(n,4917)),meta:{title:"Dashboard",requiresAdminAuth:!0}},{path:"/items",name:"Items",component:()=>n.e(263).then(n.bind(n,2402)),meta:{title:"Food Items",requiresAdminAuth:!0}},{path:"/items/:action/:reference?",name:"CreateOrEditItem",component:()=>n.e(263).then(n.bind(n,9123)),meta:{title:"Create Menu Item",requiresAdminAuth:!0}},{path:"/branches",name:"Branches",component:()=>n.e(263).then(n.bind(n,1122)),meta:{title:"All Branches",requiresAdminAuth:!0}},{path:"/settings/general",name:"GeneralSettings",component:()=>n.e(263).then(n.bind(n,580)),meta:{title:"General Settings",requiresAdminAuth:!0}},{path:"/settings/Tables",name:"Tables",component:()=>n.e(263).then(n.bind(n,5186)),meta:{title:"Tables Settings",requiresAdminAuth:!0}},{path:"/settings/user-roles",name:"UserRoles",component:()=>n.e(263).then(n.bind(n,3995)),meta:{title:"User Roles Settings",requiresAdminAuth:!0}},{path:"/settings/items-categories",name:"ItemsType",component:()=>n.e(263).then(n.bind(n,9645)),meta:{title:"Items Categories Settings",requiresAdminAuth:!0}},{path:"/orders",name:"Orders",component:()=>n.e(263).then(n.bind(n,9062)),meta:{title:"Orders Listing",requiresAdminAuth:!0}},{path:"/eod/create",name:"EodCreator",component:()=>n.e(263).then(n.bind(n,9062)),meta:{title:"Create a new day",requiresAdminAuth:!0}},{path:"/lead/users",name:"Users",component:()=>n.e(263).then(n.bind(n,6297)),meta:{title:"All Users",requiresAdminAuth:!0}},{path:"/lead/clients",name:"Clients",component:()=>n.e(263).then(n.bind(n,6521)),meta:{title:"All Clients",requiresAdminAuth:!0}},{path:"/sales",name:"Sales",component:()=>n.e(263).then(n.bind(n,4209)),meta:{title:"Sales Listing",requiresAdminAuth:!0}},{path:"/finance/invoices/pay",name:"InvoicesBulkPayment",component:()=>n.e(263).then(n.bind(n,1418)),meta:{title:"Bulk Invoice Payment",requiresAdminAuth:!0}},{path:"/reports",name:"ReportsIndex",component:()=>n.e(263).then(n.bind(n,7775)),meta:{title:"Reports",requiresAdminAuth:!0}},{path:"/reports/sales",name:"SalesReport",component:()=>n.e(263).then(n.bind(n,2608)),meta:{title:"Sales Report",requiresAdminAuth:!0}},{path:"/reports/orders",name:"OrdersReport",component:()=>n.e(263).then(n.bind(n,9478)),meta:{title:"Orders Report",requiresAdminAuth:!0}},{path:"/reports/invoices",name:"InvoicesReport",component:()=>n.e(263).then(n.bind(n,7635)),meta:{title:"Invoices Report",requiresAdminAuth:!0}},{path:"/reports/details",name:"DetailsReport",component:()=>n.e(263).then(n.bind(n,3042)),meta:{title:"Sales by items Report",requiresAdminAuth:!0}},{path:"/reports/credit-post",name:"CreditPostReport",component:()=>n.e(263).then(n.bind(n,2608)),meta:{title:"Credit Post Report",requiresAdminAuth:!0}},{path:"/reports/waiters-balance",name:"WaitersBalanceReport",component:()=>n.e(263).then(n.bind(n,6043)),meta:{title:"Waiters Balance Report",requiresAdminAuth:!0}},{path:"/reports/customers-balance",name:"CustomerBalance",component:()=>n.e(263).then(n.bind(n,6982)),meta:{title:"Customers Balance Report",requiresAdminAuth:!0}},{path:"/reports/payments-received-report",name:"PaymentsReceived",component:()=>n.e(263).then(n.bind(n,1102)),meta:{title:"Payment Received Report",requiresAdminAuth:!0}}];var i=n(4239);const s=[{path:"/:pathMatch(.*)*",name:"error404",component:()=>n.e(263).then(n.bind(n,6100)),meta:{title:"Page Not Found"}},{path:"/",name:"Login",component:()=>n.e(263).then(n.bind(n,600)),meta:{title:"Login"}}],l=(0,r.p7)({history:(0,r.PO)("/pos/"),routes:[...s,...o,...a],scrollBehavior(){return{x:0,y:0}}}),c="/pos/";l.beforeEach(((e,t,n)=>{if(e.matched.some((e=>e.meta.requiresAdminAuth))){if(i.Z.getters.isLoggedIn)return void n();window.location.replace(c)}else if(e.matched.some((e=>e.meta.requireFrontOfficeAuth))){if(i.Z.getters.isLoggedIn)return void n();window.location.replace(c+"front-office/")}else n()}));const d="TAME POS";l.afterEach((e=>{document.title=e.meta.title+" | "+d||d,i.Z.state.drawerOpen&&(i.Z.state.drawerOpen=!1),[...document.querySelectorAll("div.dropdown-menu")].forEach((e=>{e.classList.remove("show")}))}));var u=l},4239:function(e,t,n){var r=n(7139);t["Z"]=(0,r.MT)({state:{timeZone:localStorage.getItem("_tz")||"Africa/Kigali",today:localStorage.getItem("today")||(new Date).toLocaleString("fr-CA",{timeZone:"Africa/Kigali"}).slice(0,10),token:localStorage.getItem("token")||"",branch:JSON.parse(localStorage.getItem("_branch"))||{},user:{},isLoading:!1,requestFlag:null,isCorrectSystemDay:!1,drawerOpen:!0,hasActiveModal:!1,flashMessage:{},branches:[],settings:{site_address:null,site_name:null,currency:null,site_logo:null,contact_one:null,app_phone:null,app_email:null,app_tin:null,momo_code:null,airtel_code:null},notifications:{requisitions:0,purchase_orders:0,suppliers_payments:0,pending_orders:0},routes:{},accounts:[],paymentModes:[]},mutations:{SET_PAYMENT_META(e,t){e.accounts=t.accounts,e.paymentModes=t.modes},REQUEST_RESOLVED(e){e.isLoading=!1,e.requestFlag=null,e.hasActiveModal&&(e.hasActiveModal=!1,document.querySelector("#alert-container").remove())},REGISTER_CONFIRM_MODAL(e){e.requestFlag="HANDLING_ALERT_ACTION",e.hasActiveModal=!0},SET_APP_SETTINGS(e,t){e.settings=t,localStorage.setItem("_tz",t.timezone),localStorage.setItem("today",t.today)},SET_LOCKED_BLANCH(e,t){null!=t?localStorage.setItem("_branch",JSON.stringify(t)):localStorage.removeItem("_branch"),e.branch=t},SET_REQUEST_FLAG(e,t){e.requestFlag=t},SET_FLASH_MESSAGE(e,t){e.flashMessage=t,setTimeout((()=>{e.flashMessage={}}),5e3)},logout(e){e.status="",e.token=""},SET_CURRENT_USER(e,t){e.user=t},SET_BRANCHES(e,t){e.branches=t},SET_MENU_NOTIFICATIONS(e,t){e.notifications={...e.notifications,...t}},REDUCE_NOTIFICATIONS(e,t){e.notifications[t.key]-=t.total||1}},actions:{logout({commit:e}){return new Promise((t=>{e("logout"),localStorage.removeItem("_branch"),localStorage.removeItem("token"),localStorage.clear(),t()}))}},getters:{isLoggedIn:e=>!!e.token,authStatus:e=>e.status,user:e=>e.user,branch:e=>e.branch,requestFlag:e=>e.requestFlag}})},9990:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9199);function o(e,t,n,o,a,i){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"user-avatar",style:(0,r.normalizeStyle)(`background:${e.colours[i.getIndex(n.name)]};width:${n.width};height:${n.height}`)},[(0,r.createElementVNode)("span",{style:(0,r.normalizeStyle)(""+(n.isLarge?"font-size: 2rem":""))},(0,r.toDisplayString)(i.getInitials(n.name)),5)],4)}var a={name:"Avatar",props:{name:{type:String,required:!0},width:{type:String,default:"40px"},height:{type:String,default:"40px"},isLarge:{type:Boolean,default:!1}},data:()=>({colours:["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d"]}),methods:{getInitials(e,t=2){var n=e.charAt(0).toUpperCase();if(e.indexOf(" ")>-1&&t>1){var r=e.split(" ");n=r[0].charAt(0).toUpperCase()+r[1].charAt(0).toUpperCase()}return n},getIndex(e){var t=0;if(e.indexOf(" ")>-1){var n=e.split(" ");t=n[0].toUpperCase().charCodeAt(0)+n[1].toUpperCase().charCodeAt(n[1].length-1)}else t=e.toUpperCase().charCodeAt(0)+e.toUpperCase().charCodeAt(e.length-1);return t%=19,t}}},i=n(89);const s=(0,i.Z)(a,[["render",o],["__scopeId","data-v-ff9824dc"]]);var l=s},1486:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(9199);const o={id:"temu-loader"},a=(0,r.createStaticVNode)('<div class="preloader" data-v-55d01dcc><div class="preloader-inner" data-v-55d01dcc><div class="loading text-center" data-v-55d01dcc><div class="load-circle1" data-v-55d01dcc></div><div class="load-circle2" data-v-55d01dcc></div><div class="load-circle3" data-v-55d01dcc></div><div class="load-circle4" data-v-55d01dcc></div><div class="load-circle5" data-v-55d01dcc></div></div></div></div>',1),i=[a];function s(e,t,n,a,s,l){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,i)}var l={name:"Loader"},c=n(89);const d=(0,c.Z)(l,[["render",s],["__scopeId","data-v-55d01dcc"]]);var u=d},5261:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(9199);const o=e=>((0,r.pushScopeId)("data-v-2733554c"),e=e(),(0,r.popScopeId)(),e),a=["disabled"],i={key:0,id:"loading"},s=o((()=>(0,r.createElementVNode)("span",null,null,-1))),l=o((()=>(0,r.createElementVNode)("span",null,null,-1))),c=o((()=>(0,r.createElementVNode)("span",null,null,-1))),d=[s,l,c];function u(e,t,n,o,s,l){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{onClick:t[0]||(t[0]=(...e)=>l.handleClick&&l.handleClick(...e)),disabled:l.isRequesting||n.disabler},[l.isRequesting?((0,r.openBlock)(),(0,r.createElementBlock)("p",i,d)):(0,r.renderSlot)(e.$slots,"default",{key:1},void 0,!0)],8,a)}var m=n(7139),p={name:"WolfButton",props:{activator:{type:String,required:!0},disabler:{type:Boolean,default:!1}},computed:{...(0,m.rn)({requestFlag:e=>e.requestFlag,isLoading:e=>e.isLoading}),isRequesting(){return this.isLoading&&this.requestFlag===this.activator}},methods:{handleClick(){this.$store.commit("SET_REQUEST_FLAG",this.activator),this.$emit("clicked")}}},h=n(89);const g=(0,h.Z)(p,[["render",u],["__scopeId","data-v-2733554c"]]);var f=g}}]);
//# sourceMappingURL=chunk-common.d2749609.js.map