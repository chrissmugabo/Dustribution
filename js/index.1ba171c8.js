(function(){"use strict";var e={4057:function(e,t,a){var o=a(9199);const n={key:0,id:"ember201",class:"notification-message text-center zf-notification-container ember-view",style:{transform:"translateY(0px)",opacity:"1",transition:"transform 0.6s ease 0s"}},r={align:"center"},l={key:0,class:"svg-icon",viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},s=(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},null,-1),c=[s],i={key:1,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},d=(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},null,-1),m=[d],p={key:2,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},u=(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"},null,-1),h=[u],g={key:3,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},v=(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"},null,-1),f=[v],E={class:"msg"},b=(0,o.createElementVNode)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 512 512","xml:space":"preserve",class:"icon-remove"},[(0,o.createElementVNode)("path",{d:"M455.2 9.2L256 208.4 56.8 9.2C44.5-3.1 24.6-3.1 12.2 9.2l-2.9 2.9C-3 24.4-3 44.4 9.3 56.7L208.4 256 9.2 455.2c-12.3 12.3-12.3 32.3 0 44.6l2.9 2.9c12.3 12.3 32.3 12.3 44.6 0L256 303.6l199.2 199.2c12.3 12.3 32.3 12.3 44.6 0l2.9-2.9c12.3-12.3 12.3-32.3 0-44.6L303.6 256 502.8 56.8c12.3-12.3 12.3-32.3 0-44.6l-2.9-2.9c-12.5-12.4-32.4-12.4-44.7-.1z"})],-1),N=[b],V={id:"content",class:"content"},y={class:"d-none"},k={id:"order-preview"};function w(e,t,a,s,d,u){const v=(0,o.resolveComponent)("loader"),b=(0,o.resolveComponent)("router-view"),w=(0,o.resolveComponent)("nav-bar"),S=(0,o.resolveComponent)("app-header"),C=(0,o.resolveComponent)("OrderPreview");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(o.Transition,{name:"bounce"},{default:(0,o.withCtx)((()=>[e.$helper.empty(u.flashMessage)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(`message-container ${u.flashMessage.type}`)},[(0,o.createElementVNode)("div",null,["warning"==u.flashMessage.type?((0,o.openBlock)(),(0,o.createElementBlock)("svg",l,c)):(0,o.createCommentVNode)("",!0),"info"==u.flashMessage.type?((0,o.openBlock)(),(0,o.createElementBlock)("svg",i,m)):(0,o.createCommentVNode)("",!0),"success"==u.flashMessage.type?((0,o.openBlock)(),(0,o.createElementBlock)("svg",p,h)):(0,o.createCommentVNode)("",!0),"danger"==u.flashMessage.type?((0,o.openBlock)(),(0,o.createElementBlock)("svg",g,f)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",E,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(u.flashMessage.message),1)]),(0,o.createElementVNode)("div",{onClick:t[0]||(t[0]=t=>e.$store.commit("SET_FLASH_MESSAGE",{}))},N)],2)])]))])),_:1}),(0,o.createElementVNode)("div",{id:"root",class:(0,o.normalizeClass)("root "+(e.isUserLoggedIn?"mn--max hd--expanded":"front-container"))},[(0,o.createElementVNode)("section",V,[u.globalAjaxRequest?((0,o.openBlock)(),(0,o.createBlock)(v,{key:0})):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(b)]),u.appReady?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.createVNode)(w),(0,o.createVNode)(S)],64)):(0,o.createCommentVNode)("",!0)],2),(0,o.createElementVNode)("div",y,[(0,o.createElementVNode)("div",k,[(0,o.createVNode)(C,{round:e.printableRound,order:e.placedOrder,items:e.roundItems},null,8,["round","order","items"])])])],64)}const S={class:"header"},C={class:"header__inner"},B={class:"header__brand"},_={class:"brand-wrap"},x={href:"javascript:void(0)",class:"brand-img stretched-link"},D=["src"],T=(0,o.createElementVNode)("div",{class:"brand-title"},"TAME",-1),L={class:"header__content"},$={class:"header__content-start",style:{"flex-grow":"0"}},A=(0,o.createElementVNode)("button",{type:"button",class:"nav-toggler header__btn btn btn-icon btn-sm"},[(0,o.createElementVNode)("i",{class:"demo-psi-view-list"})],-1),O={class:"mx-auto"},M={class:"dropdown"},I={href:"javascript:void(0)",class:"d-flex flex-nowrap align-items-center","data-bs-toggle":"dropdown"},R=["src"],z={class:"h5 ms-1 text-white mb-0"},F={class:"dropdown-menu dropdown-menu-end","data-popper-placement":"bottom-end"},Z={class:"list-group list-group-borderless listgroup-search scrollable-content"},P={key:0,class:"list-group-item list-group-item-action d-flex align-items-start mb-2"},j=["onClick"],U={class:"header__content-end"},q={class:""},G={class:"header__btn btn btn-icon btn-sm",type:"button","data-bs-toggle":"dropdown"},H={class:"dropdown-menu dropdown-menu-end w-md-250px","data-popper-placement":"bottom-end",style:{}},Q={class:"d-flex align-items-center border-bottom px-3 py-2"},Y={class:"flex-shrink-0"},K={class:"flex-grow-1 ms-3"},J={class:"mb-0"},W={class:"text-muted fst-italic"},X={class:"row"},ee={class:"col-md-12"},te={class:"list-group list-group-borderless h-100 py-3"},ae=(0,o.createElementVNode)("i",{class:"demo-pli-male fs-5 me-2"},null,-1),oe=(0,o.createElementVNode)("i",{class:"demo-pli-gear fs-5 me-2"},null,-1),ne=(0,o.createElementVNode)("i",{class:"demo-pli-computer-secure fs-5 me-2"},null,-1),re=(0,o.createElementVNode)("span",null,"Start a Day",-1),le=(0,o.createElementVNode)("span",{class:"badge rounded bg-danger p-1 ms-1"},[(0,o.createElementVNode)("span",{class:"visually-hidden"})],-1),se=[ne,re,le],ce=(0,o.createElementVNode)("i",{class:"demo-pli-unlock fs-5 me-2"},null,-1),ie=(0,o.createElementVNode)("span",null,"Start a new day",-1),de={class:"w-100"},me={class:"form-group mb-2"},pe=(0,o.createElementVNode)("label",{for:"from-date"},"System Date",-1),ue={class:"form-group mb-2"},he=(0,o.createElementVNode)("label",{for:"to-date"},"Current Date",-1),ge={class:"form-check"},ve=(0,o.createElementVNode)("label",{for:"_dm-loginCheck",class:"form-check-label"}," I do Confirm ",-1),fe={class:"form-group mt-2"},Ee=["disabled"];function be(e,t,a,n,r,l){const s=(0,o.resolveComponent)("avatar"),c=(0,o.resolveComponent)("router-link"),i=(0,o.resolveComponent)("loading-dots"),d=(0,o.resolveComponent)("bootstrap-modal");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("header",S,[(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("div",B,[(0,o.createElementVNode)("div",_,[(0,o.createElementVNode)("a",x,[(0,o.createElementVNode)("img",{src:`${e.publicPath}img/logo-min.png`,alt:"TAME Logo",class:"logo",width:"40",height:"40"},null,8,D)]),T])]),(0,o.createElementVNode)("div",L,[(0,o.createElementVNode)("div",$,[A,(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",O,[(0,o.createElementVNode)("div",M,[(0,o.createElementVNode)("a",I,[(0,o.createElementVNode)("img",{src:`${e.publicPath}img/restaurant.png`,class:"img-xs",alt:"Branch Icon"},null,8,R),(0,o.createElementVNode)("span",z,(0,o.toDisplayString)(e.lockedBranch.name||"All Branches"),1)]),(0,o.createElementVNode)("div",F,[(0,o.createElementVNode)("div",Z,[e.$helper.empty(e.lockedBranch)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",P,[(0,o.createElementVNode)("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=(0,o.withModifiers)((e=>l.setBranch(null)),["prevent"])),class:"h6 d-block mb-0 stretched-link text-decoration-none"},"All Branches")])),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.branches,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:e.id,class:"list-group-item list-group-item-action d-flex align-items-start mb-2"},[(0,o.createElementVNode)("a",{href:"javascript:void(0)",onClick:(0,o.withModifiers)((t=>l.setBranch(e)),["prevent"]),class:"h6 d-block mb-0 stretched-link text-decoration-none"},(0,o.toDisplayString)(e.name),9,j)])))),128))])])])]),(0,o.createElementVNode)("div",U,[(0,o.createElementVNode)("div",q,[(0,o.createElementVNode)("button",G,[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(["demo-psi-gear fs-4",{"notification-bell":!e.isCorrectSystemDay}])},null,2)]),(0,o.createElementVNode)("div",H,[(0,o.createElementVNode)("div",Q,[(0,o.createElementVNode)("div",Y,[(0,o.createVNode)(s,{name:e.loggedUser.name,width:"2.25rem",height:"2.25rem"},null,8,["name"])]),(0,o.createElementVNode)("div",K,[(0,o.createElementVNode)("h5",J,(0,o.toDisplayString)(e.loggedUser.name),1),(0,o.createElementVNode)("span",W,(0,o.toDisplayString)(e.loggedUser.email),1)])]),(0,o.createElementVNode)("div",X,[(0,o.createElementVNode)("div",ee,[(0,o.createElementVNode)("div",te,[(0,o.createVNode)(c,{to:{name:""},class:"list-group-item list-group-item-action"},{default:(0,o.withCtx)((()=>[ae,(0,o.createTextVNode)(" Profile ")])),_:1}),(0,o.createVNode)(c,{to:{name:""},class:"list-group-item list-group-item-action"},{default:(0,o.withCtx)((()=>[oe,(0,o.createTextVNode)(" Settings ")])),_:1}),e.isCorrectSystemDay?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("a",{key:0,href:"javascript:void(0)",onClick:t[1]||(t[1]=(0,o.withModifiers)(((...t)=>e.toggleModal&&e.toggleModal(...t)),["prevent"])),class:"list-group-item list-group-item-action mt-auto"},se)),(0,o.createElementVNode)("a",{href:"javascript:void(0)",onClick:t[2]||(t[2]=(0,o.withModifiers)(((...e)=>l.signout&&l.signout(...e)),["prevent"])),class:"list-group-item list-group-item-action"},[ce,(0,o.createTextVNode)(" Logout ")])])])])])])])])])]),e.modalOpen?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,onClose:e.toggleModal,"modal-size":"modal-sm"},{head:(0,o.withCtx)((()=>[ie])),body:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",de,["GET_LAST_EOD"==e.requestFlag?((0,o.openBlock)(),(0,o.createBlock)(i,{key:0})):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[(0,o.createElementVNode)("div",me,[pe,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"date",class:"form-control form-control-lg","onUpdate:modelValue":t[3]||(t[3]=t=>e.newDay.from=t),id:"from-date"},null,512),[[o.vModelText,e.newDay.from]])]),(0,o.createElementVNode)("div",ue,[he,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"date",class:"form-control form-control-lg","onUpdate:modelValue":t[4]||(t[4]=t=>e.newDay.to=t),id:"to-date"},null,512),[[o.vModelText,e.newDay.to]])]),(0,o.createElementVNode)("div",ge,[(0,o.withDirectives)((0,o.createElementVNode)("input",{id:"_dm-loginCheck",class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=t=>e.confirmed=t)},null,512),[[o.vModelCheckbox,e.confirmed]]),ve]),(0,o.createElementVNode)("div",fe,[(0,o.createElementVNode)("button",{type:"button",class:"btn btn-primary w-100 btn-lg",onClick:t[6]||(t[6]=(...e)=>l.createNewDay&&l.createNewDay(...e)),disabled:!e.newDay.from||!e.newDay.to||!e.confirmed}," Confirm ",8,Ee)])],64))])])),_:1},8,["onClose"])):(0,o.createCommentVNode)("",!0)],64)}a(7658);var Ne=a(9990),Ve=a(447),ye=a(7139),ke=a(794),we={name:"AppHeader",components:{Avatar:Ne.Z,BootstrapModal:Ve.Z,LoadingDots:ke.Z},data:()=>({userDropdown:!1,notification:!1,hasReadAll:!1,confirmed:!1,newDay:{from:new Date(TODAY).toLocaleString("fr-CA",{timeZone:TIMEZONE}).slice(0,10),to:new Date(TODAY).toLocaleString("fr-CA",{timeZone:TIMEZONE}).slice(0,10)}}),computed:{...(0,ye.rn)({lockedBranch:e=>e.branch,requestFlag:e=>e.requestFlag,isCorrectSystemDay:e=>e.isCorrectSystemDay,branches:e=>e.branches}),notifications(){return this.loggedUser.alerts||[]},hasNotifications(){return this.notifications.some((e=>null==e.read_at))&&!this.hasReadAll}},created(){},methods:{createNewDay(){this.toggleModal(),this.$router.push({name:"EodCreator",query:{start_date:this.newDay.from,end_date:this.newDay.to}})},showNotifications(){this.notification=!this.notification,this.hasNotifications&&(this.$store.commit("SET_REQUEST_FLAG","READING_NOTIFICATIONS"),this.$http.get("auth/notifications/read").then((()=>{this.hasReadAll=!0})))},notificationIcon(e){var t;switch(e){case"StockTransfer":t="bg-success ni-building-fill";break;case"RequisitionUpdated":t="bg-primary-dim ni-reload";break;default:t="bg-primary ni ni-trend-up"}return t},signout(){this.$http.post("auth/logout",this.$helper.generateFormData({})).then((e=>{e.data.status&&this.$store.dispatch("logout").then((()=>{window.location.replace(this.$router.resolve({name:"Login"}).href)}))}))},setBranch(e){this.$store.commit("SET_LOCKED_BLANCH",e),location.reload()}},mounted(){this.$store.commit("SET_REQUEST_FLAG","GET_LAST_EOD"),this.$http.get("settings/eod/latest").then((e=>{var t=new Date(e.data.yesterday);e.data.row&&(t=e.data.row.to_date),TODAY==t?this.$store.state.isCorrectSystemDay=!0:(this.newDay.from=new Date(t).toLocaleString("fr-CA",{timeZone:TIMEZONE}).slice(0,10),this.toggleModal())}))}},Se=a(89);const Ce=(0,Se.Z)(we,[["render",be]]);var Be=Ce;const _e={id:"mainnav-container",class:"mainnav"},xe={class:"mainnav__inner"},De={class:"mainnav__top-content scrollable-content pb-5"},Te={class:"text-end"},Le={class:"mainnav__categoriy py-1"},$e=(0,o.createElementVNode)("h6",{class:"mainnav__caption mt-0 px-3 fw-bold"},"Navigation",-1),Ae={class:"mainnav__menu nav flex-column"},Oe={class:"nav-label mininav-content ms-1 text-capitalize"},Me=["onClick","id"],Ie={class:"nav-label mininav-content ms-1 text-capitalize"},Re={class:"mininav-content nav collapse"},ze={class:"nk-menu-text text-capitalize"},Fe={class:"nav-item"},Ze=(0,o.createElementVNode)("svg",{class:"fs-5 me-2",height:"15px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"}),(0,o.createElementVNode)("path",{d:"M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"})],-1),Pe=(0,o.createElementVNode)("span",{class:"nav-label mininav-content ms-1 text-capitalize"},"Front Office",-1),je=[Ze,Pe],Ue={class:"mainnav__bottom-content border-top pb-2"},qe={id:"mainnav",class:"mainnav__menu nav flex-column"},Ge={class:"nav-item"},He=(0,o.createElementVNode)("i",{class:"demo-pli-unlock fs-5 me-2"},null,-1),Qe=(0,o.createElementVNode)("span",{class:"nav-label ms-1"},"Logout",-1),Ye=[He,Qe],Ke=(0,o.createElementVNode)("span",null,"Select Branch and Continue",-1),Je={class:"w-100"},We={class:"form-group mb-3"},Xe=(0,o.createElementVNode)("option",{value:"null",hidden:"",disabled:""},"Select Branch",-1),et=["value"],tt={class:"form-group"},at=["disabled"];function ot(e,t,a,n,r,l){const s=(0,o.resolveComponent)("digital-clock"),c=(0,o.resolveComponent)("router-link"),i=(0,o.resolveComponent)("loading-dots"),d=(0,o.resolveComponent)("bootstrap-modal");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("nav",_e,[(0,o.createElementVNode)("div",xe,[(0,o.createElementVNode)("div",De,[(0,o.createElementVNode)("div",Te,[(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)(["fw-bolder",{"text-danger":l.requiredEOD}])},(0,o.toDisplayString)(e.$helper.formatDate(e.today)),3)]),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["mainnav__profile mt-0 d-flex justify-content-end",{"text-danger":l.requiredEOD}])},[(0,o.createVNode)(s)],2),(0,o.createElementVNode)("div",Le,[$e,(0,o.createElementVNode)("ul",Ae,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.menus,(t=>((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[e.$helper.empty(t.submenus)?((0,o.openBlock)(),(0,o.createElementBlock)("li",{class:"nav-item",key:t.title},[(0,o.createVNode)(c,{to:t.url,class:(0,o.normalizeClass)(["nav-link mininav-toggle collapsed",{active:t.url.name==l.currentRoute}])},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(`${t.icon} fs-5 me-2`)},null,2),(0,o.createElementVNode)("span",Oe,(0,o.toDisplayString)(e.$helper.inputTitle(t.title)),1)])),_:2},1032,["to","class"])])):((0,o.openBlock)(),(0,o.createElementBlock)("li",{class:"nav-item has-sub",key:t.title},[(0,o.createElementVNode)("a",{onClick:(0,o.withModifiers)((e=>l.showSubMenus(t.title)),["prevent"]),href:"javascript:void(0)",id:t.title,class:(0,o.normalizeClass)(["nav-link mininav-toggle collapsed",{active:t.url.name==l.currentRoute}])},[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(`${t.icon} fs-5 me-2`)},null,2),(0,o.createElementVNode)("span",Ie,(0,o.toDisplayString)(t.title),1)],10,Me),(0,o.createElementVNode)("ul",Re,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(t.submenus,((t,a)=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{class:"nav-item",key:a},[(0,o.createVNode)(c,{to:t,class:"nav-link"},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("span",ze,(0,o.toDisplayString)(e.$helper.inputTitle(a)),1)])),_:2},1032,["to"])])))),128))])]))],64)))),256)),(0,o.createElementVNode)("li",Fe,[(0,o.createElementVNode)("a",{href:"javascript:void(0)",class:"nav-link mininav-toggle collapsed",onClick:t[0]||(t[0]=(0,o.withModifiers)(((...e)=>l.getBranches&&l.getBranches(...e)),["prevent"]))},je)])])])]),(0,o.createElementVNode)("div",Ue,[(0,o.createElementVNode)("ul",qe,[(0,o.createElementVNode)("li",Ge,[(0,o.createElementVNode)("a",{class:"nav-link mininav-toggle collapsed",onClick:t[1]||(t[1]=(0,o.withModifiers)(((...t)=>e.handleLogout&&e.handleLogout(...t)),["prevent"])),href:"javascript:void(0)","aria-expanded":"false"},Ye)])])])])]),e.modalOpen?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,onClose:e.toggleModal,"modal-size":"modal-sm"},{head:(0,o.withCtx)((()=>[Ke])),body:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",Je,[e.branches.length?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[(0,o.createElementVNode)("div",We,[(0,o.withDirectives)((0,o.createElementVNode)("select",{class:"form-control-lg form-select","onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedBranch=t)},[Xe,((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.branches,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.id,key:e.id},(0,o.toDisplayString)(e.name),9,et)))),128))],512),[[o.vModelSelect,e.selectedBranch]])]),(0,o.createElementVNode)("div",tt,[(0,o.createElementVNode)("button",{type:"button",class:"btn btn-primary w-100 btn-lg",onClick:t[3]||(t[3]=(...e)=>l.handleContinue&&l.handleContinue(...e)),disabled:!e.selectedBranch}," Continue ",8,at)])],64)):((0,o.openBlock)(),(0,o.createBlock)(i,{key:0}))])])),_:1},8,["onClose"])):(0,o.createCommentVNode)("",!0)],64)}const nt=e=>((0,o.pushScopeId)("data-v-e1f4215c"),e=e(),(0,o.popScopeId)(),e),rt={class:"LCD me-0"},lt={class:"hours"},st=nt((()=>(0,o.createElementVNode)("div",{class:"divider"},":",-1))),ct={class:"minutes"},it=nt((()=>(0,o.createElementVNode)("div",{class:"divider"},":",-1))),dt={class:"seconds"};function mt(e,t,a,n,r,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",rt,[(0,o.createElementVNode)("div",lt,(0,o.toDisplayString)(r.hours),1),st,(0,o.createElementVNode)("div",ct,(0,o.toDisplayString)(r.minutes),1),it,(0,o.createElementVNode)("div",dt,(0,o.toDisplayString)(r.seconds),1)])}var pt={name:"DigitalClock",data(){return{hours:0,minutes:0,seconds:0}},mounted(){setInterval((()=>this.setTime()),1e3)},methods:{setTime(){const e=new Date;let t=e.getHours(),a=e.getMinutes(),o=e.getSeconds();t=t<=9?`${t}`.padStart(2,0):t,a=a<=9?`${a}`.padStart(2,0):a,o=o<=9?`${o}`.padStart(2,0):o,this.hours=t,this.minutes=a,this.seconds=o}}};const ut=(0,Se.Z)(pt,[["render",mt],["__scopeId","data-v-e1f4215c"]]);var ht=ut,gt=a(757),vt={name:"NavBar",components:{DigitalClock:ht,BootstrapModal:Ve.Z,LoadingDots:ke.Z},data:()=>({menus:gt.I,selectedBranch:null,branches:[],today:TODAY}),computed:{currentRoute(){return this.$route.name},requiredEOD(){return 0==this.$store.state.isCorrectSystemDay}},methods:{handleContinue(){this.$store.commit("SET_LOCKED_BLANCH",this.selectedBranch);let e=this.$router.resolve({name:"OrdersCreator",params:{action:"new"}}).href;location.href=e},getBranches(){this.toggleModal(),this.branches.length||(this.$store.commit("SET_REQUEST_FLAG","GET_BRANCHES"),this.$http.get("branches/show").then((e=>{this.branches=e.data.branches})))},showSubMenus(e){var t=document.querySelector(`a#${e}`),a=t.parentElement;t.classList.toggle("collapsed");var o=a.querySelector("ul");[...document.querySelectorAll(".mininav-content.nav")].forEach((e=>{e!=o&&(e.classList.remove("show"),e.classList.add("collapsed"))})),o.classList.toggle("show"),o.classList.toggle("collapsed")}}};const ft=(0,Se.Z)(vt,[["render",ot]]);var Et=ft,bt=a(1486);const Nt={id:"print-container"},Vt={class:"fs-5 text-center py-1 border-bottom border-dashed"},yt={class:"site-log"},kt=["src","alt"],wt={class:"h5 mb-1"},St={class:"mb-0 h6"},Ct={class:"mb-0 h6"},Bt={key:0},_t={class:"mb-0 h6"},xt={class:"mb-0 h6"},Dt={key:0,class:"py-1 border-bottom border-dashed"},Tt={class:"table table-sm table-borderless mb-1"},Lt={colspan:"2"},$t={class:"mb-0 h6"},At={class:"mb-0 h6"},Ot={class:"text-end text-nowrap"},Mt={class:"mb-0 h6"},It={class:"mb-0 h6"},Rt={class:"text-end text-nowrap"},zt={class:"mb-0 h6"},Ft={key:1,class:"py-1 border-bottom border-dashed"},Zt={class:"d-flex align-items-center flex-nowrap"},Pt={class:"fw-normal me-3 h6 mb-0 text-foggy"},jt={class:"text-foggy mb-0 h6"},Ut={class:"fw-bold"},qt={class:"ms-auto fw-bolder text-dark h6 mb-0"},Gt={key:0,class:"addons-container ps-1"},Ht={class:"widget widget-categories"},Qt={class:"has-children"},Yt={class:"collapse show py-0"},Kt={href:"javascript:void(0)",class:"d-flex align-items-center fw-normal"},Jt={key:1,class:"mb-1"},Wt=(0,o.createElementVNode)("span",{class:"fw-bolder mb-2"},"Notes:",-1),Xt={class:"mb-0"},ea={class:"py-1 border-bottom border-dashed"},ta={class:"table table-sm table-borderless mb-0"},aa=(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("span",{class:"fw-bolder"},"Grand Total")],-1),oa={class:"text-end text-nowrap"},na={class:"h6 mb-0"};function ra(e,t,a,n,r,l){const s=(0,o.resolveDirective)("for-callback");return(0,o.openBlock)(),(0,o.createElementBlock)("div",Nt,[(0,o.createElementVNode)("div",Vt,[(0,o.createElementVNode)("div",yt,[(0,o.createElementVNode)("img",{src:e.getSiteLogo(),style:{width:"150px"},alt:e.appSettings?.site_name},null,8,kt)]),(0,o.createElementVNode)("p",wt,[(0,o.createElementVNode)("b",null,(0,o.toDisplayString)(e.appSettings.site_name),1)]),(0,o.createElementVNode)("p",St,"TIN: "+(0,o.toDisplayString)(e.appSettings.app_tin),1),(0,o.createElementVNode)("p",Ct,[(0,o.createTextVNode)(" Tel: "+(0,o.toDisplayString)(e.appSettings.app_phone),1),e.appSettings?.contact_one?((0,o.openBlock)(),(0,o.createElementBlock)("span",Bt,"/"+(0,o.toDisplayString)(e.appSettings?.contact_one),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("p",_t,"Email:"+(0,o.toDisplayString)(e.appSettings?.app_email),1),(0,o.createElementVNode)("p",xt,"Address: "+(0,o.toDisplayString)(e.appSettings?.site_address),1)]),e.$helper.empty(a.order)||e.$helper.empty(a.round)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",Dt,[(0,o.createElementVNode)("table",Tt,[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",Lt,[(0,o.createElementVNode)("p",$t,[(0,o.createTextVNode)(" Order NO: "),(0,o.createElementVNode)("b",null,"#"+(0,o.toDisplayString)(e.$helper.generateVoucherNo(a.round.round_no)),1),(0,o.createTextVNode)(" → "+(0,o.toDisplayString)(a.round.destination),1)])])]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("p",At,[(0,o.createTextVNode)(" Served By: "),(0,o.createElementVNode)("b",null,(0,o.toDisplayString)(a.order?.waiter?.last_name||a.order?.waiter?.name),1)])]),(0,o.createElementVNode)("td",Ot,[(0,o.createElementVNode)("p",Mt,[(0,o.createTextVNode)(" Table No: "),(0,o.createElementVNode)("b",null,(0,o.toDisplayString)(a.order?.table?.name),1)])])]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("p",It,[(0,o.createTextVNode)(" Date: "),(0,o.createElementVNode)("b",null,(0,o.toDisplayString)(e.$helper.formatDate(a.order.created_at)),1)])]),(0,o.createElementVNode)("td",Rt,[(0,o.createElementVNode)("p",zt,[(0,o.createElementVNode)("b",null,(0,o.toDisplayString)(e.$helper.formatTime(a.order.created_at)),1)])])])])])),a.items.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",Ft,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.items,((t,n)=>(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"border-bottom mb-2",key:"order_items"+n},[(0,o.createElementVNode)("div",Zt,[(0,o.createElementVNode)("span",Pt,(0,o.toDisplayString)(t.quantity),1),(0,o.createElementVNode)("span",jt,[(0,o.createElementVNode)("span",Ut,(0,o.toDisplayString)(t.name),1)]),(0,o.createElementVNode)("span",qt,(0,o.toDisplayString)(e.formatMoney((t.price||t.cost)*t.quantity)),1)]),t.addons&&t.addons.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",Gt,[(0,o.createElementVNode)("div",Ht,[(0,o.createElementVNode)("ul",null,[(0,o.createElementVNode)("li",Qt,[(0,o.createElementVNode)("ul",Yt,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(t.addons,((e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{key:n+"addon"+t},[(0,o.createElementVNode)("a",Kt,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.name),1)])])))),128))])])])])])):(0,o.createCommentVNode)("",!0),t.comment?((0,o.openBlock)(),(0,o.createElementBlock)("div",Jt,[Wt,(0,o.createElementVNode)("p",Xt,(0,o.toDisplayString)(t.comment),1)])):(0,o.createCommentVNode)("",!0)])),[[s,{key:n,array:a.items,callback:l.callback}]]))),128))])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",ea,[(0,o.createElementVNode)("table",ta,[(0,o.createElementVNode)("tr",null,[aa,(0,o.createElementVNode)("td",oa,[(0,o.createElementVNode)("span",na,(0,o.toDisplayString)(e.formatMoney(l.orderTotal)),1)])])])])])}var la=a(6675),sa={name:"OrderPreview",props:{order:{type:Object,required:!0},round:{type:Object,required:!0},items:{type:Array,required:!0}},computed:{orderTotal(){return this.items.reduce(((e,t)=>e+Number((t.price||t.cost)*t.quantity)),0)}},directives:{forCallback(e,t,a){let o=t.value;var n=o.key,r=0;if(Array.isArray(o.array))r=o.array.length;else if("object"===typeof o.array){var l=Object.keys(o.array);n=l.indexOf(n),r=l.length}n==r-1&&"function"===typeof o.callback&&o.callback.bind(a.context)()}},methods:{handlePrint(e){const t=new la.gR,a=[`${location.origin}/pos/css/thermal-print.css`];t.print(document.querySelector(e),a)},callback(){this.handlePrint("#order-preview")}}};const ca=(0,Se.Z)(sa,[["render",ra]]);var ia=ca,da={components:{AppHeader:Be,NavBar:Et,Loader:bt.Z,OrderPreview:ia},data:()=>({printableRound:{},roundItems:[],printInterval:null,isFetchingRounds:!1,placedOrder:{},latestPrintedRoundId:null}),computed:{flashMessage(){return this.$store.state.flashMessage},appSettings(){return this.$store.state.settings},appReady(){return!this.$helper.empty(this.loggedUser)},globalAjaxRequest(){return this.$store.state.isLoading&&null===this.$store.state.requestFlag},roundsUrl(){return this.latestPrintedRoundId?`next-printable-round?latest=${this.latestPrintedRoundId}`:"next-printable-round"}},beforeCreate(){},created(){this.isUserLoggedIn&&(this.$http.get("auth/me").then((e=>{this.$store.commit("SET_CURRENT_USER",{...e.data.user})})),this.$http.get("branches").then((e=>{this.$store.commit("SET_BRANCHES",e.data.branches)}))),this.$http.post("frontend/preloaders",this.$helper.generateFormData({keys:Object.keys(this.appSettings)})).then((e=>{this.$store.commit("SET_APP_SETTINGS",e.data)}))},methods:{},mounted(){this.$nextTick((()=>{const e=window.localStorage.getItem("__last_printed_round");e&&(this.latestPrintedRoundId=e),(navigator.userAgent.indexOf("Firefox")>0||-1!==navigator.userAgent.toLowerCase().indexOf("firefox"))&&(this.printInterval=setInterval((()=>{this.isFetchingRounds||(this.isFetchingRounds=!0,this.$store.commit("SET_REQUEST_FLAG","GETTING_LOCKED_TABLES"),this.$http.get(this.roundsUrl).then((e=>{this.isFetchingRounds=!1,e.data.status&&(this.printableRound=e.data.round,this.roundItems=e.data.items,this.placedOrder=e.data.order,this.latestPrintedRoundId=this.printableRound.id,window.localStorage.setItem("__last_printed_round",this.latestPrintedRoundId))})))}),3e3))}))},watch:{$route(e){["Orders"].includes(e.name)?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}}};const ma=(0,Se.Z)(da,[["render",w]]);var pa=ma,ua=(a(2895),a(8403)),ha=a(4239),ga=a(70),va=a(2650),fa=a(2745),Ea=a(5261),ba=a(8129),Na=a(8502),Va=a(4493);const ya=(0,o.createApp)(pa);ga.ZP.withCredentials=!0,ga.ZP.interceptors.request.use((e=>{const t=localStorage.getItem("_branch");return t&&(e.url=(0,Va.aF)(e.url,{current_branch:JSON.parse(t).id})),ha.Z.state.isLoading=!0,e}),(e=>(ha.Z.commit("REQUEST_RESOLVED"),Promise.reject(e)))),ga.ZP.interceptors.response.use((e=>(ha.Z.commit("REQUEST_RESOLVED"),e)),(e=>(ha.Z.commit("REQUEST_RESOLVED"),401===e.response.status&&"/"!=location.pathname&&"/pos/"!=location.pathname&&(localStorage.removeItem("token"),location.replace(ua.Z.resolve({name:"Login"}).href)),500==e.response.status&&ha.Z.commit("SET_FLASH_MESSAGE",{type:"danger",message:"Error Occured. Please contact system administrator"}),Promise.reject(e)))),ya.config.globalProperties.$http=ga.ZP,ya.config.globalProperties.$http.defaults.baseURL="/api/pos/";const ka=localStorage.getItem("token");ka&&(ya.config.globalProperties.$http.defaults.headers.common["Authorization"]="Bearer "+ka),ya.component("wolf-button",Ea.Z),ya.mixin(va.h),ya.use(ba.Z,ha.Z).use(Na.Z,ha.Z).use(fa.Z).use(ha.Z).use(ua.Z).mount("#app")},757:function(e,t,a){a.d(t,{I:function(){return o}});const o=[{title:"dashboard",icon:"demo-pli-home",url:{name:"Dashboard"},notifications:[]},{title:"orders",icon:"demo-pli-tag-3",url:{name:"Orders"},notifications:[]},{title:"menu_items",icon:"demo-pli-mine",url:{name:"Items"},notifications:[]},{title:"tables",icon:"demo-pli-receipt-4",url:{name:"Tables"},notifications:[]},{title:"branches",icon:"demo-pli-map-marker",url:{name:"Branches"},notifications:[]},{title:"reports",icon:"demo-pli-information",url:{name:"ReportsIndex"},notifications:[]},{title:"lead",icon:"demo-pli-male-2",url:{name:""},notifications:[],submenus:{users:{name:"Users"},clients:{name:"Clients"}}},{title:"settings",icon:"demo-pli-gear",url:{name:""},notifications:[],submenus:{general:{name:"GeneralSettings"},user_roles:{name:"UserRoles"},items_types:{name:"ItemsType"},items_units:{name:""}}}]},447:function(e,t,a){a.d(t,{Z:function(){return w}});var o=a(9199);const n=e=>((0,o.pushScopeId)("data-v-110930c3"),e=e(),(0,o.popScopeId)(),e),r={class:"modal fade show",style:{display:"block"},tabindex:"-1",role:"dialog"},l={class:"modal-content"},s={class:"modal-header"},c={class:"modal-title w-100"},i=n((()=>(0,o.createElementVNode)("em",{class:"demo-pli-cross fs-5 fw-bolder text-danger"},null,-1))),d=[i],m={class:"modal-body"},p={key:1,class:"modal-footer bg-light"};function u(e,t,a,n,i,u){const h=(0,o.resolveComponent)("progress-bar");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["modal-dialog modal-dialog-centered",[a.modalSize]])},[(0,o.createElementVNode)("div",l,[u.modalRequesting?((0,o.openBlock)(),(0,o.createBlock)(h,{key:0,"bg-color":"#003a60"})):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("h4",c,[(0,o.renderSlot)(e.$slots,"head",{},void 0,!0)]),(0,o.createElementVNode)("a",{href:"javascript:void(0)",class:"close",onClick:t[0]||(t[0]=(0,o.withModifiers)((t=>e.$emit("close")),["prevent"]))},d)]),(0,o.createElementVNode)("div",m,[(0,o.renderSlot)(e.$slots,"body",{},void 0,!0)]),a.showFooter?((0,o.openBlock)(),(0,o.createElementBlock)("div",p,[(0,o.renderSlot)(e.$slots,"foot",{},void 0,!0)])):(0,o.createCommentVNode)("",!0)])],2)]),(0,o.createElementVNode)("div",{class:"modal-backdrop fade show",onClick:t[1]||(t[1]=(0,o.withModifiers)((t=>e.$emit("close")),["self"]))})],64)}const h=e=>((0,o.pushScopeId)("data-v-52453e0d"),e=e(),(0,o.popScopeId)(),e),g=h((()=>(0,o.createElementVNode)("div",{class:"progress-bar"},null,-1))),v=[g];function f(e,t,a,n,r,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"p-container",style:(0,o.normalizeStyle)(`background-color: ${a.bgColor}`)},v,4)}var E={name:"ProgressBar",props:{bgColor:{type:String,default:"#f77c29"}}},b=a(89);const N=(0,b.Z)(E,[["render",f],["__scopeId","data-v-52453e0d"]]);var V=N,y={name:"BootstrapModal",components:{ProgressBar:V},emits:["close"],props:{modalSize:{type:String,default:"modal-default"},showFooter:{type:Boolean,default:!1}},computed:{modalRequesting(){return this.$store.state.isLoading&&"MODAL_REQUEST"==this.$store.state.requestFlag}}};const k=(0,b.Z)(y,[["render",u],["__scopeId","data-v-110930c3"]]);var w=k},794:function(e,t,a){a.d(t,{Z:function(){return m}});var o=a(9199);const n={class:"loading text-center"},r=(0,o.createStaticVNode)('<div class="load-circle1" data-v-acb599ce></div><div class="load-circle2" data-v-acb599ce></div><div class="load-circle3" data-v-acb599ce></div><div class="load-circle4" data-v-acb599ce></div><div class="load-circle5" data-v-acb599ce></div>',5),l=[r];function s(e,t,a,r,s,c){return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,l)}var c={name:"LoadingDots"},i=a(89);const d=(0,i.Z)(c,[["render",s],["__scopeId","data-v-acb599ce"]]);var m=d}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,r){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],r=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||l>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<l&&(l=r));if(s){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/mainChuck.df4479e0.js"}}(),function(){a.miniCssF=function(e){return"css/mainChuck.14e178c3.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tame-pos:";a.l=function(o,n,r,l){if(e[o])e[o].push(n);else{var s,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var m=i[d];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+r){s=m;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[n];var p=function(t,a){s.onerror=s.onload=null,clearTimeout(u);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(a)})),t)return t(a)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/pos/"}(),function(){var e=function(e,t,a,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var r=function(r){if(n.onerror=n.onload=null,"load"===r.type)a();else{var l=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=l,c.request=s,n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=r,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var n=a[o],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===e||r===t))return n}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){n=l[o],r=n.getAttribute("data-href");if(r===e||r===t)return n}},o=function(o){return new Promise((function(n,r){var l=a.miniCssF(o),s=a.p+l;if(t(l,s))return n();e(o,s,n,r)}))},n={826:0};a.f.miniCss=function(e,t){var a={263:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={826:0};a.f.j=function(t,o){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise((function(a,o){n=e[t]=[a,o]}));o.push(n[2]=r);var l=a.p+a.u(t),s=new Error,c=function(o){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",s.name="ChunkLoadError",s.type=r,s.request=l,n[1](s)}};a.l(l,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,l=o[0],s=o[1],c=o[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(c)var d=c(a)}for(t&&t(o);i<l.length;i++)r=l[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},o=self["webpackChunktame_pos"]=self["webpackChunktame_pos"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998,64],(function(){return a(4057)}));o=a.O(o)})();
//# sourceMappingURL=index.1ba171c8.js.map