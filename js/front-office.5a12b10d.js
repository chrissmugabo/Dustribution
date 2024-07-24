(function(){"use strict";var e={6127:function(e,t,n){n.d(t,{k:function(){return r}});var o=n(1540);const r={computed:{loggedUser(){return this.$store.state.user||{}},isReady(){return this.loggedUser&&Object.keys(this.loggedUser).length>0},permissions(){return this.isReady&&(this.loggedUser.role.pos_permissions||this.loggedUser.role.permissions)},routePathString(){return this.$store.state.routes[this.$route.name]||""},isCashier(){if("ADMINISTRATOR"==this.userRole||!this.loggedUser.role_id)return!0;const e=this.permissions&&this.permissions.front_office;if(e){const t=e.waiter_orders.access.others;return o.mG.every((e=>!0===t[e]))}return!1},isCashierOnly(){const e=this.permissions&&this.permissions.front_office;if(e){const t=e?.waiter_orders?.access?.others;if(t)return o.mG.every((e=>!0===t[e]))}return!1},canChangePrice(){if("ADMINISTRATOR"==this.userRole||!this.loggedUser.role_id)return!0;const e=this.permissions&&this.permissions.front_office;if(e){const t=e.place_orders.access.others;return o.tH.every((e=>!0===t[e]))}return!1}},methods:{isWaiter(e){const t=e?.role?.permissions?.front_office;return!!t&&(t?.place_orders?.accessible&&t?.waiter_orders?.accessible)},hasPermissionTo(e,t=null){if(!this.loggedUser.role_id||8==this.loggedUser.role_id)return!0;const n=-1!=location.pathname.indexOf("/front-office/")?"front_office":"back_office";if("front_office"==n){const t=this.routePathString.split(".").reduce(((e,t)=>e&&e[t]||null),this.permissions[n]),o=t?.access?.priviledges;return o&&o.includes(e)}{const o=this.permissions[n];let r={};r=t?t.split(".").reduce(((e,t)=>e&&e[t]||null),o):this.routePathString.split(".").reduce(((e,t)=>e&&e[t]||null),o);const s=r?.access||r;return s&&s.includes(e)}}}}},5769:function(e,t,n){var o=n(1005);const r={key:0,id:"ember201",class:"notification-message text-center zf-notification-container ember-view",style:{transform:"translateY(0px)",opacity:"1",transition:"transform 0.6s ease 0s"}},s={align:"center"},a={key:0,class:"svg-icon",viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},i=(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},null,-1),l=[i],c={key:1,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},d=(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},null,-1),m=[d],u={key:2,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},h=(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"},null,-1),p=[h],v={key:3,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},f=(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"},null,-1),g=[f],w={class:"msg"},E=(0,o.createElementVNode)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 512 512","xml:space":"preserve",class:"icon-remove"},[(0,o.createElementVNode)("path",{d:"M455.2 9.2L256 208.4 56.8 9.2C44.5-3.1 24.6-3.1 12.2 9.2l-2.9 2.9C-3 24.4-3 44.4 9.3 56.7L208.4 256 9.2 455.2c-12.3 12.3-12.3 32.3 0 44.6l2.9 2.9c12.3 12.3 32.3 12.3 44.6 0L256 303.6l199.2 199.2c12.3 12.3 32.3 12.3 44.6 0l2.9-2.9c12.3-12.3 12.3-32.3 0-44.6L303.6 256 502.8 56.8c12.3-12.3 12.3-32.3 0-44.6l-2.9-2.9c-12.5-12.4-32.4-12.4-44.7-.1z"})],-1),b=[E],V={id:"root",class:"root hd--expanded mn--min"},y={class:"content__boxed"};function N(e,t,n,i,d,h){const f=(0,o.resolveComponent)("loader"),E=(0,o.resolveComponent)("router-view"),N=(0,o.resolveComponent)("navigation-bar"),k=(0,o.resolveComponent)("app-header"),x=(0,o.resolveComponent)("ShiftManager");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(o.Transition,{name:"bounce"},{default:(0,o.withCtx)((()=>[e.$helper.empty(h.flashMessage)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(`message-container ${h.flashMessage.type}`)},[(0,o.createElementVNode)("div",null,["warning"==h.flashMessage.type?((0,o.openBlock)(),(0,o.createElementBlock)("svg",a,l)):(0,o.createCommentVNode)("",!0),"info"==h.flashMessage.type?((0,o.openBlock)(),(0,o.createElementBlock)("svg",c,m)):(0,o.createCommentVNode)("",!0),"success"==h.flashMessage.type?((0,o.openBlock)(),(0,o.createElementBlock)("svg",u,p)):(0,o.createCommentVNode)("",!0),"danger"==h.flashMessage.type?((0,o.openBlock)(),(0,o.createElementBlock)("svg",v,g)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(h.flashMessage.message),1)]),(0,o.createElementVNode)("div",{onClick:t[0]||(t[0]=t=>e.$store.commit("SET_FLASH_MESSAGE",{}))},b)],2)])]))])),_:1}),(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("section",{id:"content",class:(0,o.normalizeClass)(["content",{"bg-white":h.requiredWhiteBg}])},[(0,o.createElementVNode)("div",y,[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["content__wrap",{"p-0":"OrdersCreator"==h.currentRoute}])},[h.globalAjaxRequest?((0,o.openBlock)(),(0,o.createBlock)(f,{key:0})):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(E)],2)])],2),h.appReady?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.createVNode)(N),(0,o.createVNode)(k),e.loggedUser?.working||e.isCashier?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)(x,{key:0}))],64)):(0,o.createCommentVNode)("",!0)])],64)}const k={class:"header"},x={class:"header__inner"},_={class:"header__brand",style:{background:"#fff","border-bottom":"1px solid #141543"}},C={class:"brand-wrap"},S={href:"javascript:void(0)",class:"brand-img stretched-link"},z=["src"],B=(0,o.createElementVNode)("div",{class:"brand-title"},"TAME",-1),A={class:"header__content"},M=(0,o.createElementVNode)("div",{class:"header__content-start"},null,-1),T={class:"header__content-end"},$={class:"d-flex align-items-center"},R={class:"mx-2"},L={key:0,class:"ms-2 position-relative"},O=(0,o.createStaticVNode)('<div class="position-absolute end-0" style="top:6px;"><div class="vibrating-dot bg-success"></div></div><button class="header__btn btn btn-icon btn-sm" type="button" data-bs-toggle="dropdown"><svg height="22px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-success"><path d="M15.385 6.115a.485.485 0 0 0-.048-.736A12.443 12.443 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z"></path><path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"></path></svg></button>',2),D=[O],H={key:1,class:""},U=(0,o.createElementVNode)("button",{class:"header__btn btn btn-icon btn-sm",type:"button","data-bs-toggle":"dropdown"},[(0,o.createElementVNode)("svg",{height:"22px",class:"text-danger",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[(0,o.createElementVNode)("path",{d:"M10.706 3.294A12.545 12.545 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404l.785-.785c.63.24 1.228.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.934-.933a6.454 6.454 0 0 1 2.012.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905l.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .048.737.518.518 0 0 1-.668.05 11.496 11.496 0 0 0-1.812-1.07zM9.02 11.78c.238.14.236.464.04.66l-.706.706a.5.5 0 0 1-.708 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.373 0 .722.102 1.02.28zm4.355-9.905a.53.53 0 1 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z"})])],-1),j=[U],Z={class:"ms-"},I=(0,o.createElementVNode)("button",{class:"header__btn btn btn-icon btn-sm",type:"button","data-bs-toggle":"dropdown","aria-label":"User dropdown","aria-expanded":"false"},[(0,o.createElementVNode)("i",{class:"demo-psi-male"})],-1),F={class:"dropdown-menu dropdown-menu-end w-md-200px","data-popper-placement":"bottom-end",style:{}},P={class:"d-flex align-items-center border-bottom px-3 py-2"},q={class:"flex-shrink-0"},G={class:"flex-grow-1 ms-3"},W={class:"mb-0"},Y={class:"text-muted fst-italic"},K={class:"row"},Q={class:"col-md-12"},J={class:"list-group list-group-borderless h-100 py-3"},X=(0,o.createElementVNode)("i",{class:"demo-pli-unlock fs-5 me-2"},null,-1);function ee(e,t,n,r,s,a){const i=(0,o.resolveComponent)("digital-clock"),l=(0,o.resolveComponent)("avatar");return(0,o.openBlock)(),(0,o.createElementBlock)("header",k,[(0,o.createElementVNode)("div",x,[(0,o.createElementVNode)("div",_,[(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("a",S,[(0,o.createElementVNode)("img",{src:`${e.publicPath}img/logo-min.png`,alt:"TAME Logo",class:"logo",width:"40",height:"40"},null,8,z)]),B])]),(0,o.createElementVNode)("div",A,[M,(0,o.createElementVNode)("div",T,[(0,o.createElementVNode)("div",$,[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["d-flex align-items-center cursor-pointer",{"text-danger":a.invalidDate}]),onClick:t[0]||(t[0]=e=>a.goToOrders())},[(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)(["h4 mb-0",{"text-danger":a.invalidDate}]),style:{color:"#fff"}},(0,o.toDisplayString)(a.systemDate),3),(0,o.createElementVNode)("div",R,[(0,o.createVNode)(i)])],2)]),e.isOffline?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[e.isOnline?((0,o.openBlock)(),(0,o.createElementBlock)("div",L,D)):((0,o.openBlock)(),(0,o.createElementBlock)("div",H,j))],64)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",Z,[I,(0,o.createElementVNode)("div",F,[(0,o.createElementVNode)("div",P,[(0,o.createElementVNode)("div",q,[(0,o.createVNode)(l,{name:e.loggedUser.name,width:"2.25rem",height:"2.25rem"},null,8,["name"])]),(0,o.createElementVNode)("div",G,[(0,o.createElementVNode)("h5",W,(0,o.toDisplayString)(e.loggedUser.name),1),(0,o.createElementVNode)("span",Y,(0,o.toDisplayString)(e.userRole||"Administrator"),1)])]),(0,o.createElementVNode)("div",K,[(0,o.createElementVNode)("div",Q,[(0,o.createElementVNode)("div",J,[(0,o.createElementVNode)("a",{href:"javascript:void(0)",onClick:t[1]||(t[1]=(0,o.withModifiers)(((...e)=>a.signout&&a.signout(...e)),["prevent"])),class:"list-group-item list-group-item-action"},[X,(0,o.createTextVNode)(" Logout ")])])])])])])])])])])}n(1788);var te=n(8845);const ne=e=>((0,o.pushScopeId)("data-v-09ee046e"),e=e(),(0,o.popScopeId)(),e),oe={class:"LCD me-0"},re={class:"hours"},se=ne((()=>(0,o.createElementVNode)("div",{class:"divider"},":",-1))),ae={class:"minutes"},ie=ne((()=>(0,o.createElementVNode)("div",{class:"divider"},":",-1))),le={class:"seconds"};function ce(e,t,n,r,s,a){return(0,o.openBlock)(),(0,o.createElementBlock)("div",oe,[(0,o.createElementVNode)("div",re,(0,o.toDisplayString)(e.hours),1),se,(0,o.createElementVNode)("div",ae,(0,o.toDisplayString)(e.minutes),1),ie,(0,o.createElementVNode)("div",le,(0,o.toDisplayString)(e.seconds),1)])}var de={name:"DigitalClock",data:()=>({hours:0,minutes:0,seconds:0}),mounted(){this.$nextTick((()=>setInterval((()=>this.setTime()),1e3)))},methods:{setTime(){const e=new Date;let t=e.getHours(),n=e.getMinutes(),o=e.getSeconds();t=t<=9?`${t}`.padStart(2,0):t,n=n<=9?`${n}`.padStart(2,0):n,o=o<=9?`${o}`.padStart(2,0):o,this.hours=t,this.minutes=n,this.seconds=o}}},me=n(9646);const ue=(0,me.Z)(de,[["render",ce],["__scopeId","data-v-09ee046e"]]);var he=ue,pe=n(6127),ve=n(5047),fe={name:"AppHeader",mixins:[pe.k,ve.j],components:{Avatar:te.Z,DigitalClock:he},computed:{systemDate(){return this.$store.state.system_date},invalidDate(){return this.$store.state.invalid_date}},methods:{goToOrders(){this.invalidDate&&this.isCashier&&this.$router.push({name:"EOD_Handler"})},signout(){this.$http.post("auth/logout",this.$helper.generateFormData({})).then((e=>{e.data.status&&this.$store.dispatch("logout").then((()=>{window.location.replace(this.$router.resolve({name:"FrontOfficeLogin"}).href)}))}))}}};const ge=(0,me.Z)(fe,[["render",ee]]);var we=ge;const Ee=e=>((0,o.pushScopeId)("data-v-16bda152"),e=e(),(0,o.popScopeId)(),e),be={id:"mainnav-container",class:"mainnav border-end"},Ve={class:"mainnav__inner"},ye={class:"mainnav__top-content scrollable-content pb-5"},Ne={class:"mainnav__profile mt-3 d-flex3"},ke=Ee((()=>(0,o.createElementVNode)("div",{class:"mt-2 d-mn-max"},null,-1))),xe={class:"mininav-toggle text-center d-flex justify-content-center collapsed"},_e={class:"mainnav__categoriy pb-2 pt-5"},Ce={class:"mainnav__menu nav flex-column"},Se={key:0,class:"nav-item py-2"},ze={class:"mb-0 w-100"},Be=["innerHTML"],Ae={class:"text-capitalize fw-normal fw-bold"},Me={class:"mainnav__bottom-content border-top pb-2"},Te={id:"mainnav",class:"mainnav__menu nav flex-column"},$e={key:0,class:"nav-item py-2 border-bottom"},Re=(0,o.createStaticVNode)('<h6 class="mb-0 w-100" data-v-16bda152><svg height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-info" data-v-16bda152><circle cx="12" cy="12" r="10" data-v-16bda152></circle><rect x="9" y="9" width="6" height="6" data-v-16bda152></rect></svg></h6><span class="text-capitalize fw-bold" style="font-size:13px;" data-v-16bda152>End Shift</span>',2),Le=[Re],Oe={class:"nav-item"},De=Ee((()=>(0,o.createElementVNode)("h4",{class:"mb-0 w-100"},[(0,o.createElementVNode)("i",{class:"demo-pli-unlock fs-4 fw-bold text-danger"})],-1))),He=Ee((()=>(0,o.createElementVNode)("span",{class:"text-capitalize fw-bold"},"Logout",-1))),Ue=[De,He];function je(e,t,n,r,s,a){const i=(0,o.resolveComponent)("avatar"),l=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)("nav",be,[(0,o.createElementVNode)("div",Ve,[(0,o.createElementVNode)("div",ye,[(0,o.createElementVNode)("div",Ne,[ke,(0,o.createElementVNode)("div",xe,[(0,o.createVNode)(i,{height:"2rem",width:"2rem",name:e.loggedUser.name},null,8,["name"])])]),(0,o.createElementVNode)("div",_e,[(0,o.createElementVNode)("ul",Ce,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.menus,(e=>((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:e.title},[a.canAccess(e.title)?((0,o.openBlock)(),(0,o.createElementBlock)("li",Se,[(0,o.createVNode)(l,{to:e.url,class:(0,o.normalizeClass)(["text-center fw-bolder menu-text d-flex flex-column",{active:e.url.name==a.currentRoute}])},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("h4",ze,[(0,o.createElementVNode)("span",{innerHTML:e.icon},null,8,Be)]),(0,o.createElementVNode)("span",Ae,(0,o.toDisplayString)(e.alias??""),1)])),_:2},1032,["to","class"])])):(0,o.createCommentVNode)("",!0)],64)))),128))])])]),(0,o.createElementVNode)("div",Me,[(0,o.createElementVNode)("ul",Te,[a.isCashier?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("li",$e,[(0,o.createElementVNode)("a",{class:"text-center fw-bolder menu-text d-flex flex-column",onClick:t[0]||(t[0]=(0,o.withModifiers)(((...e)=>a.handleShiftClosing&&a.handleShiftClosing(...e)),["prevent"])),href:"javascript:void(0)","aria-expanded":"false"},Le)])),(0,o.createElementVNode)("li",Oe,[(0,o.createElementVNode)("a",{class:"text-center fw-bolder menu-text d-flex flex-column",onClick:t[1]||(t[1]=(0,o.withModifiers)(((...e)=>a.signout&&a.signout(...e)),["prevent"])),href:"javascript:void(0)","aria-expanded":"false"},Ue)])])])])])}var Ze=n(1540),Ie=n(2210),Fe={name:"NavigationBar",components:{Avatar:te.Z},data:()=>({menus:Ie.I}),computed:{currentRoute(){return this.$route.name},user(){return this.$store.state.user||{}},isReady(){return this.user&&Object.keys(this.user).length>0},permissions(){return this.isReady&&(this.user?.role?.pos_permissions||this.user?.role?.permissions)},isCashier(){if("ADMINISTRATOR"==this.userRole||!this.loggedUser.role_id)return!0;const e=this.permissions&&this.permissions.front_office;if(e){const t=e.waiter_orders.access.others;return Ze.mG.every((e=>!0===t[e]))}return!1}},mounted(){const e={};Ie.I.forEach((t=>{if(t.submenus)for(let n in t.submenus)e[t.submenus[n].name]=`${t.title}.${n}`;else e[t.url.name]=t.title})),this.$store.state.routes=e},methods:{handleShiftClosing(){this.$confirm({title:"Ending Shift",content:"Are you sure you to end your shift?",classes:"btn btn-danger",actionText:"Confirm",closeText:"Cancel",action:()=>{this.$http.get("auth/close-shift").then((e=>{const{status:t}=e.data;if(t){const e=this.loggedUser;e.working=!1,this.$store.commit("SET_CURRENT_USER",e),this.$notify({type:"success",message:"Shift ended successfully"}),this.signout()}}))}})},canAccess(e,t=null){return!this.user.role_id||"ADMINISTRATOR"==this.userRole||(t?this.permissions.front_office[e]&&this.permissions.front_office[e][t]&&this.permissions.front_office[e][t].includes("R"):this.permissions.front_office[e]&&1==this.permissions.front_office[e].accessible)},signout(){"ADMINISTRATOR"==this.userRole||null==this.userRole?this.handleLogout():this.$http.post("auth/logout",this.$helper.generateFormData({})).then((e=>{e.data.status&&this.$store.dispatch("logout").then((()=>{window.location.replace(this.$router.resolve({name:"FrontOfficeLogin"}).href)}))}))}}};const Pe=(0,me.Z)(Fe,[["render",je],["__scopeId","data-v-16bda152"]]);var qe=Pe,Ge=n(9269);const We={class:"modal fade show",id:"shift_manager_modal",role:"dialog",tabindex:"-1","aria-modal":"true",style:{"padding-right":"15px",display:"block"}},Ye={class:"modal-dialog modal-md modal-dialog-centered",role:"document"},Ke={class:"modal-content"},Qe={class:"modal-body"},Je=(0,o.createStaticVNode)('<div class="d-flex border shadow p-2 align-items-center rounded border-start-yellow"><span class="me-2"><svg height="48px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></span><div class=""><h4> You can not start working until yo start your shift. Please start your shift. </h4></div></div><hr>',2),Xe={class:"row mb-2 align-items-center"},et=(0,o.createElementVNode)("label",{class:"col-lg-3"},"Work Day",-1),tt={class:"col-lg-6"},nt=["value"],ot={class:"row mb-2 align-items-center"},rt=(0,o.createElementVNode)("label",{class:"col-lg-3"},"Start Time",-1),st={class:"col-lg-6"},at=["value"],it={class:"row mb-2 align-items-center"},lt=(0,o.createElementVNode)("label",{class:"col-lg-3"},null,-1),ct={class:"col-lg-6"},dt=(0,o.createElementVNode)("div",{class:"modal-backdrop fade show"},null,-1);function mt(e,t,n,r,s,a){const i=(0,o.resolveComponent)("wolf-button");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("div",We,[(0,o.createElementVNode)("div",Ye,[(0,o.createElementVNode)("div",Ke,[(0,o.createElementVNode)("div",Qe,[e.loggedUser?.working?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[Je,(0,o.createElementVNode)("div",Xe,[et,(0,o.createElementVNode)("div",tt,[(0,o.createElementVNode)("input",{type:"text",class:"form-control",readonly:"",value:e.today},null,8,nt)])]),(0,o.createElementVNode)("div",ot,[rt,(0,o.createElementVNode)("div",st,[(0,o.createElementVNode)("input",{type:"text",class:"form-control",value:e.now(),readonly:""},null,8,at)])]),(0,o.createElementVNode)("div",it,[lt,(0,o.createElementVNode)("div",ct,[(0,o.createVNode)(i,{class:"btn btn-primary btn-lg",activator:"STARTING_SHIFT",onClicked:a.handleShiftStart},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Start Your Shift ")])),_:1},8,["onClicked"])])])],64))])])])]),dt],64)}var ut={name:"ShiftManager",data:()=>({today:window.TODAY,now:()=>{const e=Date.now(),t=new Date(e),n=t.getHours(),o=t.getMinutes();return`${n}:${o}`}}),methods:{handleShiftStart(){this.$confirm({title:"Starting Shift",content:"Are you sure you start your shift?",classes:"btn btn-primary",actionText:"Confirm",closeText:"Cancel",action:()=>{this.$http.get("auth/start-shift").then((e=>{const{status:t}=e.data;if(t){const e=this.loggedUser;e.working=!0,this.$store.commit("SET_CURRENT_USER",e),this.$notify({type:"success",message:"Shift started successfully"})}}))}})}}};const ht=(0,me.Z)(ut,[["render",mt]]);var pt=ht,vt={mixins:[pe.k],components:{AppHeader:we,NavigationBar:qe,Loader:Ge.Z,ShiftManager:pt},data:()=>({}),computed:{flashMessage(){return this.$store.state.flashMessage},appSettings(){return this.$store.state.settings},appReady(){return!this.$helper.empty(this.loggedUser)},globalAjaxRequest(){return this.$store.state.isLoading&&!Object.keys(this.$store.getters.pendingRequests).length},currentRoute(){return this.$route.name},requiredWhiteBg(){return["FrontOfficeSalesReport"].includes(this.$route.name)}},created(){this.isUserLoggedIn&&this.$http.get("auth/myself").then((e=>{this.$store.commit("SET_CURRENT_USER",{...e.data.user})})),this.$http.post("frontend/preloaders",this.$helper.generateFormData({keys:Object.keys(this.appSettings)})).then((e=>{this.$store.commit("SET_APP_SETTINGS",e.data)}))},watch:{$route(e){"OrdersCreator"==e.name?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}}};const ft=(0,me.Z)(vt,[["render",N]]);var gt=ft,wt=(n(8314),n(3478)),Et=n(7934),bt=n(8068),Vt=n(2950),yt=n(2493),Nt=n(6320),kt=n(9090);const xt=(0,o.createApp)(gt);bt.Z.withCredentials=!0,bt.Z.interceptors.request.use((e=>{const t=localStorage.getItem("_branch");return t&&(e.url=(0,Ze.aF)(e.url,{current_branch:JSON.parse(t).id})),Et.Z.state.isLoading=!0,Et.Z.state.requestFlag&&(Et.Z.state.pendingRequests[Et.Z.state.requestFlag]=e.url,Et.Z.state.requestFlag=null),e}),(e=>(Et.Z.commit("REQUEST_RESOLVED",e.config.url),Promise.reject(e)))),bt.Z.interceptors.response.use((e=>(Et.Z.commit("REQUEST_RESOLVED",e.config.url),e)),(e=>(Et.Z.commit("REQUEST_RESOLVED",e.config.url),401===e.response.status&&localStorage.removeItem("token"),500==e.response.status&&Et.Z.commit("SET_FLASH_MESSAGE",{type:"danger",message:"Error Occured. Please contact system administrator"}),Promise.reject(e)))),xt.config.globalProperties.$http=bt.Z,xt.config.globalProperties.$http.defaults.baseURL=`${Ze.v2}pos/`;const _t=localStorage.getItem("token");_t&&(xt.config.globalProperties.$http.defaults.headers.common["Authorization"]="Bearer "+_t),xt.component("wolf-button",yt.Z),xt.mixin(ve.h),xt.use(Nt.Z,Et.Z).use(kt.Z,Et.Z).use(Vt.Z).use(Et.Z).use(wt.Z).mount("#app")},2210:function(e,t,n){n.d(t,{I:function(){return r}});var o=n(1540);const r=[{title:"place_orders",icon:'<i class="demo-pli-mine fs-4"></i>',url:{name:"OrdersCreator",params:{action:"new"}},extras:o.tH,alias:"Menu"},{title:"waiter_orders",icon:'<svg height="18px" class="fs-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path><path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path></svg>',url:{name:"WaiterOrders"},extras:o.mG,alias:"Orders"},{title:"kitchen_orders",icon:'<svg height="15px" class="fs-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"></path><path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path></svg>',url:{name:"KitchenOrders"},extras:[],alias:"Kitech"},{title:"bar_orders",icon:'<svg height="17px" class="fs-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',url:{name:"BarOrders"},extras:[],alias:"Bar"},{title:"sales_report",icon:'<svg height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',url:{name:"FrontOfficeSalesReport"},extras:[],alias:"Sales"}]}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,s){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/mainChuck.c48c1f62.js"}}(),function(){n.miniCssF=function(e){return"css/mainChuck.e58a9078.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tame-pos:";n.l=function(o,r,s,a){if(e[o])e[o].push(r);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+s){i=m;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=o),e[o]=[r];var u=function(t,n){i.onerror=i.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/pos/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var a=function(n){if(s.onerror=s.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=i,s.parentNode&&s.parentNode.removeChild(s),r(l)}};return s.onerror=s.onload=a,s.href=t,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],s=r.getAttribute("data-href");if(s===e||s===t)return r}},o=function(o){return new Promise((function(r,s){var a=n.miniCssF(o),i=n.p+a;if(t(a,i))return r();e(o,i,null,r,s)}))},r={670:0};n.f.miniCss=function(e,t){var n={263:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={670:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var s=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=s);var a=n.p+n.u(t),i=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var d=l(n)}for(t&&t(o);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},o=self["webpackChunktame_pos"]=self["webpackChunktame_pos"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998,64],(function(){return n(5769)}));o=n.O(o)})();
//# sourceMappingURL=front-office.5a12b10d.js.map