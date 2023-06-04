(function(){"use strict";var e={771:function(e,t,o){var a=o(9199);const n={key:0,id:"ember201",class:"notification-message text-center zf-notification-container ember-view",style:{transform:"translateY(0px)",opacity:"1",transition:"transform 0.6s ease 0s"}},l={align:"center"},r={key:0,class:"svg-icon",viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},s=(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},null,-1),c=[s],i={key:1,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},d=(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},null,-1),m=[d],u={key:2,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},p=(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"},null,-1),h=[p],v={key:3,class:"svg-icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},g=(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"},null,-1),f=[g],E={class:"msg"},b=(0,a.createElementVNode)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 512 512","xml:space":"preserve",class:"icon-remove"},[(0,a.createElementVNode)("path",{d:"M455.2 9.2L256 208.4 56.8 9.2C44.5-3.1 24.6-3.1 12.2 9.2l-2.9 2.9C-3 24.4-3 44.4 9.3 56.7L208.4 256 9.2 455.2c-12.3 12.3-12.3 32.3 0 44.6l2.9 2.9c12.3 12.3 32.3 12.3 44.6 0L256 303.6l199.2 199.2c12.3 12.3 32.3 12.3 44.6 0l2.9-2.9c12.3-12.3 12.3-32.3 0-44.6L303.6 256 502.8 56.8c12.3-12.3 12.3-32.3 0-44.6l-2.9-2.9c-12.5-12.4-32.4-12.4-44.7-.1z"})],-1),N=[b],k={id:"content",class:"content"};function y(e,t,o,s,d,p){const g=(0,a.resolveComponent)("loader"),b=(0,a.resolveComponent)("router-view"),y=(0,a.resolveComponent)("nav-bar"),V=(0,a.resolveComponent)("app-header");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(a.Transition,{name:"bounce"},{default:(0,a.withCtx)((()=>[e.$helper.empty(p.flashMessage)?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createElementBlock)("div",n,[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(`message-container ${p.flashMessage.type}`)},[(0,a.createElementVNode)("div",null,["warning"==p.flashMessage.type?((0,a.openBlock)(),(0,a.createElementBlock)("svg",r,c)):(0,a.createCommentVNode)("",!0),"info"==p.flashMessage.type?((0,a.openBlock)(),(0,a.createElementBlock)("svg",i,m)):(0,a.createCommentVNode)("",!0),"success"==p.flashMessage.type?((0,a.openBlock)(),(0,a.createElementBlock)("svg",u,h)):(0,a.createCommentVNode)("",!0),"danger"==p.flashMessage.type?((0,a.openBlock)(),(0,a.createElementBlock)("svg",v,f)):(0,a.createCommentVNode)("",!0)]),(0,a.createElementVNode)("div",E,[(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(p.flashMessage.message),1)]),(0,a.createElementVNode)("div",{onClick:t[0]||(t[0]=t=>e.$store.commit("SET_FLASH_MESSAGE",{}))},N)],2)])]))])),_:1}),(0,a.createElementVNode)("div",{id:"root",class:(0,a.normalizeClass)("root "+(e.isUserLoggedIn?"mn--max hd--expanded":"front-container"))},[(0,a.createElementVNode)("section",k,[p.globalAjaxRequest?((0,a.openBlock)(),(0,a.createBlock)(g,{key:0})):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(b)]),p.appReady?((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:0},[(0,a.createVNode)(y),(0,a.createVNode)(V)],64)):(0,a.createCommentVNode)("",!0)],2)],64)}const V={class:"header"},w={class:"header__inner"},C={class:"header__brand"},B={class:"brand-wrap"},S={href:"javascript:void(0)",class:"brand-img stretched-link"},_=["src"],x=(0,a.createElementVNode)("div",{class:"brand-title"},"TAME",-1),D={class:"header__content"},L={class:"header__content-start",style:{"flex-grow":"0"}},$=(0,a.createElementVNode)("button",{type:"button",class:"nav-toggler header__btn btn btn-icon btn-sm"},[(0,a.createElementVNode)("i",{class:"demo-psi-view-list"})],-1),T={class:"mx-auto"},M={class:"dropdown"},A={href:"javascript:void(0)",class:"d-flex flex-nowrap align-items-center","data-bs-toggle":"dropdown"},O=["src"],z={class:"h5 ms-1 text-white mb-0"},Z={class:"dropdown-menu dropdown-menu-end","data-popper-placement":"bottom-end"},F={class:"list-group list-group-borderless listgroup-search scrollable-content"},I={key:0,class:"list-group-item list-group-item-action d-flex align-items-start mb-2"},R=["onClick"],j={class:"header__content-end"},U={class:""},P={class:"header__btn btn btn-icon btn-sm",type:"button","data-bs-toggle":"dropdown"},q={class:"dropdown-menu dropdown-menu-end w-md-250px","data-popper-placement":"bottom-end",style:{}},H={class:"d-flex align-items-center border-bottom px-3 py-2"},G={class:"flex-shrink-0"},Q={class:"flex-grow-1 ms-3"},Y={class:"mb-0"},K={class:"text-muted fst-italic"},J={class:"row"},W={class:"col-md-12"},X={class:"list-group list-group-borderless h-100 py-3"},ee=(0,a.createElementVNode)("i",{class:"demo-pli-male fs-5 me-2"},null,-1),te=(0,a.createElementVNode)("i",{class:"demo-pli-gear fs-5 me-2"},null,-1),oe=(0,a.createElementVNode)("i",{class:"demo-pli-computer-secure fs-5 me-2"},null,-1),ae=(0,a.createElementVNode)("span",null,"Start a Day",-1),ne=(0,a.createElementVNode)("span",{class:"badge rounded bg-danger p-1 ms-1"},[(0,a.createElementVNode)("span",{class:"visually-hidden"})],-1),le=[oe,ae,ne],re=(0,a.createElementVNode)("i",{class:"demo-pli-unlock fs-5 me-2"},null,-1),se=(0,a.createElementVNode)("span",null,"Start a new day",-1),ce={class:"w-100"},ie={class:"form-group mb-2"},de=(0,a.createElementVNode)("label",{for:"from-date"},"System Date",-1),me={class:"form-group mb-2"},ue=(0,a.createElementVNode)("label",{for:"to-date"},"Current Date",-1),pe={class:"form-check"},he=(0,a.createElementVNode)("label",{for:"_dm-loginCheck",class:"form-check-label"}," I do Confirm ",-1),ve={class:"form-group mt-2"},ge=["disabled"];function fe(e,t,o,n,l,r){const s=(0,a.resolveComponent)("avatar"),c=(0,a.resolveComponent)("router-link"),i=(0,a.resolveComponent)("loading-dots"),d=(0,a.resolveComponent)("bootstrap-modal");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createElementVNode)("header",V,[(0,a.createElementVNode)("div",w,[(0,a.createElementVNode)("div",C,[(0,a.createElementVNode)("div",B,[(0,a.createElementVNode)("a",S,[(0,a.createElementVNode)("img",{src:`${e.publicPath}img/logo-min.png`,alt:"TAME Logo",class:"logo",width:"40",height:"40"},null,8,_)]),x])]),(0,a.createElementVNode)("div",D,[(0,a.createElementVNode)("div",L,[$,(0,a.createCommentVNode)("",!0)]),(0,a.createElementVNode)("div",T,[(0,a.createElementVNode)("div",M,[(0,a.createElementVNode)("a",A,[(0,a.createElementVNode)("img",{src:`${e.publicPath}img/restaurant.png`,class:"img-xs",alt:"Branch Icon"},null,8,O),(0,a.createElementVNode)("span",z,(0,a.toDisplayString)(e.lockedBranch.name||"All Branches"),1)]),(0,a.createElementVNode)("div",Z,[(0,a.createElementVNode)("div",F,[e.$helper.empty(e.lockedBranch)?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createElementBlock)("div",I,[(0,a.createElementVNode)("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=(0,a.withModifiers)((e=>r.setBranch(null)),["prevent"])),class:"h6 d-block mb-0 stretched-link text-decoration-none"},"All Branches")])),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.branches,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:e.id,class:"list-group-item list-group-item-action d-flex align-items-start mb-2"},[(0,a.createElementVNode)("a",{href:"javascript:void(0)",onClick:(0,a.withModifiers)((t=>r.setBranch(e)),["prevent"]),class:"h6 d-block mb-0 stretched-link text-decoration-none"},(0,a.toDisplayString)(e.name),9,R)])))),128))])])])]),(0,a.createElementVNode)("div",j,[(0,a.createElementVNode)("div",U,[(0,a.createElementVNode)("button",P,[(0,a.createElementVNode)("i",{class:(0,a.normalizeClass)(["demo-psi-gear fs-4",{"notification-bell":!e.isCorrectSystemDay}])},null,2)]),(0,a.createElementVNode)("div",q,[(0,a.createElementVNode)("div",H,[(0,a.createElementVNode)("div",G,[(0,a.createVNode)(s,{name:e.loggedUser.name,width:"2.25rem",height:"2.25rem"},null,8,["name"])]),(0,a.createElementVNode)("div",Q,[(0,a.createElementVNode)("h5",Y,(0,a.toDisplayString)(e.loggedUser.name),1),(0,a.createElementVNode)("span",K,(0,a.toDisplayString)(e.loggedUser.email),1)])]),(0,a.createElementVNode)("div",J,[(0,a.createElementVNode)("div",W,[(0,a.createElementVNode)("div",X,[(0,a.createVNode)(c,{to:{name:""},class:"list-group-item list-group-item-action"},{default:(0,a.withCtx)((()=>[ee,(0,a.createTextVNode)(" Profile ")])),_:1}),(0,a.createVNode)(c,{to:{name:""},class:"list-group-item list-group-item-action"},{default:(0,a.withCtx)((()=>[te,(0,a.createTextVNode)(" Settings ")])),_:1}),e.isCorrectSystemDay?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createElementBlock)("a",{key:0,href:"javascript:void(0)",onClick:t[1]||(t[1]=(0,a.withModifiers)(((...t)=>e.toggleModal&&e.toggleModal(...t)),["prevent"])),class:"list-group-item list-group-item-action mt-auto"},le)),(0,a.createElementVNode)("a",{href:"javascript:void(0)",onClick:t[2]||(t[2]=(0,a.withModifiers)(((...e)=>r.signout&&r.signout(...e)),["prevent"])),class:"list-group-item list-group-item-action"},[re,(0,a.createTextVNode)(" Logout ")])])])])])])])])])]),e.modalOpen?((0,a.openBlock)(),(0,a.createBlock)(d,{key:0,onClose:e.toggleModal,"modal-size":"modal-sm"},{head:(0,a.withCtx)((()=>[se])),body:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",ce,["GET_LAST_EOD"==e.requestFlag?((0,a.openBlock)(),(0,a.createBlock)(i,{key:0})):((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:1},[(0,a.createElementVNode)("div",ie,[de,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"date",class:"form-control form-control-lg","onUpdate:modelValue":t[3]||(t[3]=t=>e.newDay.from=t),id:"from-date"},null,512),[[a.vModelText,e.newDay.from]])]),(0,a.createElementVNode)("div",me,[ue,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"date",class:"form-control form-control-lg","onUpdate:modelValue":t[4]||(t[4]=t=>e.newDay.to=t),id:"to-date"},null,512),[[a.vModelText,e.newDay.to]])]),(0,a.createElementVNode)("div",pe,[(0,a.withDirectives)((0,a.createElementVNode)("input",{id:"_dm-loginCheck",class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=t=>e.confirmed=t)},null,512),[[a.vModelCheckbox,e.confirmed]]),he]),(0,a.createElementVNode)("div",ve,[(0,a.createElementVNode)("button",{type:"button",class:"btn btn-primary w-100 btn-lg",onClick:t[6]||(t[6]=(...e)=>r.createNewDay&&r.createNewDay(...e)),disabled:!e.newDay.from||!e.newDay.to||!e.confirmed}," Confirm ",8,ge)])],64))])])),_:1},8,["onClose"])):(0,a.createCommentVNode)("",!0)],64)}var Ee=o(9990),be=o(447),Ne=o(7139),ke=o(794),ye={name:"AppHeader",components:{Avatar:Ee.Z,BootstrapModal:be.Z,LoadingDots:ke.Z},data:()=>({userDropdown:!1,notification:!1,hasReadAll:!1,confirmed:!1,newDay:{from:new Date(TODAY).toLocaleString("fr-CA",{timeZone:TIMEZONE}).slice(0,10),to:new Date(TODAY).toLocaleString("fr-CA",{timeZone:TIMEZONE}).slice(0,10)}}),computed:{...(0,Ne.rn)({lockedBranch:e=>e.branch,requestFlag:e=>e.requestFlag,isCorrectSystemDay:e=>e.isCorrectSystemDay,branches:e=>e.branches}),notifications(){return this.loggedUser.alerts||[]},hasNotifications(){return this.notifications.some((e=>null==e.read_at))&&!this.hasReadAll}},created(){},methods:{showNotifications(){this.notification=!this.notification,this.hasNotifications&&(this.$store.commit("SET_REQUEST_FLAG","READING_NOTIFICATIONS"),this.$http.get("auth/notifications/read").then((()=>{this.hasReadAll=!0})))},notificationIcon(e){var t;switch(e){case"StockTransfer":t="bg-success ni-building-fill";break;case"RequisitionUpdated":t="bg-primary-dim ni-reload";break;default:t="bg-primary ni ni-trend-up"}return t},signout(){this.$http.post("auth/logout",this.$helper.generateFormData({})).then((e=>{e.data.status&&this.$store.dispatch("logout").then((()=>{window.location.replace(this.$router.resolve({name:"Login"}).href)}))}))},createNewDay(){this.$http.post("settings/close-day",this.$helper.generateFormData(this.newDay)).then((e=>{e.data.status&&(this.toggleModal(),this.$store.state.isCorrectSystemDay=!0,this.$store.commit("SET_FLASH_MESSAGE",{type:"success",message:"END OF DAY created successfully"}))}))},setBranch(e){this.$store.commit("SET_LOCKED_BLANCH",e),location.reload()}},mounted(){this.$store.commit("SET_REQUEST_FLAG","GET_LAST_EOD"),this.$http.get("settings/eod/latest").then((e=>{var t=new Date(e.data.yesterday);e.data.row&&(t=e.data.row.to_date),TODAY==t?this.$store.state.isCorrectSystemDay=!0:(this.newDay.from=new Date(t).toLocaleString("fr-CA",{timeZone:TIMEZONE}).slice(0,10),this.toggleModal())}))}},Ve=o(89);const we=(0,Ve.Z)(ye,[["render",fe]]);var Ce=we;const Be={id:"mainnav-container",class:"mainnav"},Se={class:"mainnav__inner"},_e={class:"mainnav__top-content scrollable-content pb-5"},xe={class:"text-end"},De={class:"mainnav__categoriy py-1"},Le=(0,a.createElementVNode)("h6",{class:"mainnav__caption mt-0 px-3 fw-bold"},"Navigation",-1),$e={class:"mainnav__menu nav flex-column"},Te={class:"nav-label mininav-content ms-1 text-capitalize"},Me=["onClick","id"],Ae={class:"nav-label mininav-content ms-1 text-capitalize"},Oe={class:"mininav-content nav collapse"},ze={class:"nk-menu-text text-capitalize"},Ze={class:"nav-item"},Fe=(0,a.createElementVNode)("svg",{class:"fs-5 me-2",height:"15px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"}),(0,a.createElementVNode)("path",{d:"M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"})],-1),Ie=(0,a.createElementVNode)("span",{class:"nav-label mininav-content ms-1 text-capitalize"},"Front Office",-1),Re=[Fe,Ie],je={class:"mainnav__bottom-content border-top pb-2"},Ue={id:"mainnav",class:"mainnav__menu nav flex-column"},Pe={class:"nav-item"},qe=(0,a.createElementVNode)("i",{class:"demo-pli-unlock fs-5 me-2"},null,-1),He=(0,a.createElementVNode)("span",{class:"nav-label ms-1"},"Logout",-1),Ge=[qe,He],Qe=(0,a.createElementVNode)("span",null,"Select Branch and Continue",-1),Ye={class:"w-100"},Ke={class:"form-group mb-3"},Je=(0,a.createElementVNode)("option",{value:"null",hidden:"",disabled:""},"Select Branch",-1),We=["value"],Xe={class:"form-group"},et=["disabled"];function tt(e,t,o,n,l,r){const s=(0,a.resolveComponent)("digital-clock"),c=(0,a.resolveComponent)("router-link"),i=(0,a.resolveComponent)("loading-dots"),d=(0,a.resolveComponent)("bootstrap-modal");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createElementVNode)("nav",Be,[(0,a.createElementVNode)("div",Se,[(0,a.createElementVNode)("div",_e,[(0,a.createElementVNode)("div",xe,[(0,a.createElementVNode)("span",{class:(0,a.normalizeClass)(["fw-bolder",{"text-danger":r.requiredEOD}])},(0,a.toDisplayString)(e.$helper.formatDate(e.today)),3)]),(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(["mainnav__profile mt-0 d-flex justify-content-end",{"text-danger":r.requiredEOD}])},[(0,a.createVNode)(s)],2),(0,a.createElementVNode)("div",De,[Le,(0,a.createElementVNode)("ul",$e,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.menus,(t=>((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[e.$helper.empty(t.submenus)?((0,a.openBlock)(),(0,a.createElementBlock)("li",{class:"nav-item",key:t.title},[(0,a.createVNode)(c,{to:t.url,class:(0,a.normalizeClass)(["nav-link mininav-toggle collapsed",{active:t.url.name==r.currentRoute}])},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("i",{class:(0,a.normalizeClass)(`${t.icon} fs-5 me-2`)},null,2),(0,a.createElementVNode)("span",Te,(0,a.toDisplayString)(e.$helper.inputTitle(t.title)),1)])),_:2},1032,["to","class"])])):((0,a.openBlock)(),(0,a.createElementBlock)("li",{class:"nav-item has-sub",key:t.title},[(0,a.createElementVNode)("a",{onClick:(0,a.withModifiers)((e=>r.showSubMenus(t.title)),["prevent"]),href:"javascript:void(0)",id:t.title,class:(0,a.normalizeClass)(["nav-link mininav-toggle collapsed",{active:t.url.name==r.currentRoute}])},[(0,a.createElementVNode)("i",{class:(0,a.normalizeClass)(`${t.icon} fs-5 me-2`)},null,2),(0,a.createElementVNode)("span",Ae,(0,a.toDisplayString)(t.title),1)],10,Me),(0,a.createElementVNode)("ul",Oe,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(t.submenus,((t,o)=>((0,a.openBlock)(),(0,a.createElementBlock)("li",{class:"nav-item",key:o},[(0,a.createVNode)(c,{to:t,class:"nav-link"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("span",ze,(0,a.toDisplayString)(e.$helper.inputTitle(o)),1)])),_:2},1032,["to"])])))),128))])]))],64)))),256)),(0,a.createElementVNode)("li",Ze,[(0,a.createElementVNode)("a",{href:"javascript:void(0)",class:"nav-link mininav-toggle collapsed",onClick:t[0]||(t[0]=(0,a.withModifiers)(((...e)=>r.getBranches&&r.getBranches(...e)),["prevent"]))},Re)])])])]),(0,a.createElementVNode)("div",je,[(0,a.createElementVNode)("ul",Ue,[(0,a.createElementVNode)("li",Pe,[(0,a.createElementVNode)("a",{class:"nav-link mininav-toggle collapsed",onClick:t[1]||(t[1]=(0,a.withModifiers)(((...t)=>e.handleLogout&&e.handleLogout(...t)),["prevent"])),href:"javascript:void(0)","aria-expanded":"false"},Ge)])])])])]),e.modalOpen?((0,a.openBlock)(),(0,a.createBlock)(d,{key:0,onClose:e.toggleModal,"modal-size":"modal-sm"},{head:(0,a.withCtx)((()=>[Qe])),body:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",Ye,[e.branches.length?((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:1},[(0,a.createElementVNode)("div",Ke,[(0,a.withDirectives)((0,a.createElementVNode)("select",{class:"form-control-lg form-select","onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedBranch=t)},[Je,((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.branches,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("option",{value:e.id,key:e.id},(0,a.toDisplayString)(e.name),9,We)))),128))],512),[[a.vModelSelect,e.selectedBranch]])]),(0,a.createElementVNode)("div",Xe,[(0,a.createElementVNode)("button",{type:"button",class:"btn btn-primary w-100 btn-lg",onClick:t[3]||(t[3]=(...e)=>r.handleContinue&&r.handleContinue(...e)),disabled:!e.selectedBranch}," Continue ",8,et)])],64)):((0,a.openBlock)(),(0,a.createBlock)(i,{key:0}))])])),_:1},8,["onClose"])):(0,a.createCommentVNode)("",!0)],64)}const ot=e=>((0,a.pushScopeId)("data-v-e1f4215c"),e=e(),(0,a.popScopeId)(),e),at={class:"LCD me-0"},nt={class:"hours"},lt=ot((()=>(0,a.createElementVNode)("div",{class:"divider"},":",-1))),rt={class:"minutes"},st=ot((()=>(0,a.createElementVNode)("div",{class:"divider"},":",-1))),ct={class:"seconds"};function it(e,t,o,n,l,r){return(0,a.openBlock)(),(0,a.createElementBlock)("div",at,[(0,a.createElementVNode)("div",nt,(0,a.toDisplayString)(l.hours),1),lt,(0,a.createElementVNode)("div",rt,(0,a.toDisplayString)(l.minutes),1),st,(0,a.createElementVNode)("div",ct,(0,a.toDisplayString)(l.seconds),1)])}var dt={name:"DigitalClock",data(){return{hours:0,minutes:0,seconds:0}},mounted(){setInterval((()=>this.setTime()),1e3)},methods:{setTime(){const e=new Date;let t=e.getHours(),o=e.getMinutes(),a=e.getSeconds();t=t<=9?`${t}`.padStart(2,0):t,o=o<=9?`${o}`.padStart(2,0):o,a=a<=9?`${a}`.padStart(2,0):a,this.hours=t,this.minutes=o,this.seconds=a}}};const mt=(0,Ve.Z)(dt,[["render",it],["__scopeId","data-v-e1f4215c"]]);var ut=mt,pt=o(757),ht={name:"NavBar",components:{DigitalClock:ut,BootstrapModal:be.Z,LoadingDots:ke.Z},data:()=>({menus:pt.I,selectedBranch:null,branches:[],today:TODAY}),computed:{currentRoute(){return this.$route.name},requiredEOD(){return 0==this.$store.state.isCorrectSystemDay}},methods:{handleContinue(){this.$store.commit("SET_LOCKED_BLANCH",this.selectedBranch);let e=this.$router.resolve({name:"OrdersCreator",params:{action:"new"}}).href;location.href=e},getBranches(){this.toggleModal(),this.branches.length||(this.$store.commit("SET_REQUEST_FLAG","GET_BRANCHES"),this.$http.get("branches/show").then((e=>{this.branches=e.data.branches})))},showSubMenus(e){var t=document.querySelector(`a#${e}`),o=t.parentElement;t.classList.toggle("collapsed");var a=o.querySelector("ul");[...document.querySelectorAll(".mininav-content.nav")].forEach((e=>{e!=a&&(e.classList.remove("show"),e.classList.add("collapsed"))})),a.classList.toggle("show"),a.classList.toggle("collapsed")}}};const vt=(0,Ve.Z)(ht,[["render",tt]]);var gt=vt,ft=o(1486),Et={components:{AppHeader:Ce,NavBar:gt,Loader:ft.Z},data:()=>({}),computed:{flashMessage(){return this.$store.state.flashMessage},appSettings(){return this.$store.state.settings},appReady(){return!this.$helper.empty(this.loggedUser)},globalAjaxRequest(){return this.$store.state.isLoading&&null===this.$store.state.requestFlag}},beforeCreate(){},created(){this.isUserLoggedIn&&(this.$http.get("auth/me").then((e=>{this.$store.commit("SET_CURRENT_USER",{...e.data.user})})),this.$http.get("branches").then((e=>{this.$store.commit("SET_BRANCHES",e.data.branches)}))),this.$http.post("frontend/preloaders",this.$helper.generateFormData({keys:Object.keys(this.appSettings)})).then((e=>{this.$store.commit("SET_APP_SETTINGS",e.data)}))},methods:{},mounted(){},watch:{$route(e){["Orders"].includes(e.name)?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}}};const bt=(0,Ve.Z)(Et,[["render",y]]);var Nt=bt,kt=(o(2895),o(8403)),yt=o(4239),Vt=o(70),wt=o(2650),Ct=o(2745),Bt=o(5261),St=o(8129),_t=o(8502),xt=o(4493);const Dt=(0,a.createApp)(Nt);Vt.ZP.withCredentials=!0,Vt.ZP.interceptors.request.use((e=>{const t=localStorage.getItem("_branch");return t&&(e.url=(0,xt.aF)(e.url,{current_branch:JSON.parse(t).id})),yt.Z.state.isLoading=!0,e}),(e=>(yt.Z.commit("REQUEST_RESOLVED"),Promise.reject(e)))),Vt.ZP.interceptors.response.use((e=>(yt.Z.commit("REQUEST_RESOLVED"),e)),(e=>(yt.Z.commit("REQUEST_RESOLVED"),401===e.response.status&&"/"!=location.pathname&&"/pos/"!=location.pathname&&(localStorage.removeItem("token"),location.replace(kt.Z.resolve({name:"Login"}).href)),500==e.response.status&&yt.Z.commit("SET_FLASH_MESSAGE",{type:"danger",message:"Error Occured. Please contact system administrator"}),Promise.reject(e)))),Dt.config.globalProperties.$http=Vt.ZP,Dt.config.globalProperties.$http.defaults.baseURL="/api/pos/";const Lt=localStorage.getItem("token");Lt&&(Dt.config.globalProperties.$http.defaults.headers.common["Authorization"]="Bearer "+Lt),Dt.component("wolf-button",Bt.Z),Dt.mixin(wt.h),Dt.use(St.Z,yt.Z).use(_t.Z,yt.Z).use(Ct.Z).use(yt.Z).use(kt.Z).mount("#app")},757:function(e,t,o){o.d(t,{I:function(){return a}});const a=[{title:"dashboard",icon:"demo-pli-home",url:{name:"Dashboard"},notifications:[]},{title:"orders",icon:"demo-pli-tag-3",url:{name:"Orders"},notifications:[]},{title:"menu_items",icon:"demo-pli-mine",url:{name:"Items"},notifications:[]},{title:"tables",icon:"demo-pli-receipt-4",url:{name:"Tables"},notifications:[]},{title:"branches",icon:"demo-pli-map-marker",url:{name:"Branches"},notifications:[]},{title:"reports",icon:"demo-pli-information",url:{name:"ReportsIndex"},notifications:[]},{title:"lead",icon:"demo-pli-male-2",url:{name:""},notifications:[],submenus:{users:{name:"Users"},clients:{name:"Clients"}}},{title:"settings",icon:"demo-pli-gear",url:{name:""},notifications:[],submenus:{general:{name:""},user_roles:{name:"UserRoles"},items_types:{name:"ItemsType"},items_units:{name:""}}}]},447:function(e,t,o){o.d(t,{Z:function(){return w}});var a=o(9199);const n=e=>((0,a.pushScopeId)("data-v-110930c3"),e=e(),(0,a.popScopeId)(),e),l={class:"modal fade show",style:{display:"block"},tabindex:"-1",role:"dialog"},r={class:"modal-content"},s={class:"modal-header"},c={class:"modal-title w-100"},i=n((()=>(0,a.createElementVNode)("em",{class:"demo-pli-cross fs-5 fw-bolder text-danger"},null,-1))),d=[i],m={class:"modal-body"},u={key:1,class:"modal-footer bg-light"};function p(e,t,o,n,i,p){const h=(0,a.resolveComponent)("progress-bar");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(["modal-dialog modal-dialog-centered",[o.modalSize]])},[(0,a.createElementVNode)("div",r,[p.modalRequesting?((0,a.openBlock)(),(0,a.createBlock)(h,{key:0,"bg-color":"#003a60"})):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("h4",c,[(0,a.renderSlot)(e.$slots,"head",{},void 0,!0)]),(0,a.createElementVNode)("a",{href:"javascript:void(0)",class:"close",onClick:t[0]||(t[0]=(0,a.withModifiers)((t=>e.$emit("close")),["prevent"]))},d)]),(0,a.createElementVNode)("div",m,[(0,a.renderSlot)(e.$slots,"body",{},void 0,!0)]),o.showFooter?((0,a.openBlock)(),(0,a.createElementBlock)("div",u,[(0,a.renderSlot)(e.$slots,"foot",{},void 0,!0)])):(0,a.createCommentVNode)("",!0)])],2)]),(0,a.createElementVNode)("div",{class:"modal-backdrop fade show",onClick:t[1]||(t[1]=(0,a.withModifiers)((t=>e.$emit("close")),["self"]))})],64)}const h=e=>((0,a.pushScopeId)("data-v-52453e0d"),e=e(),(0,a.popScopeId)(),e),v=h((()=>(0,a.createElementVNode)("div",{class:"progress-bar"},null,-1))),g=[v];function f(e,t,o,n,l,r){return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"p-container",style:(0,a.normalizeStyle)(`background-color: ${o.bgColor}`)},g,4)}var E={name:"ProgressBar",props:{bgColor:{type:String,default:"#f77c29"}}},b=o(89);const N=(0,b.Z)(E,[["render",f],["__scopeId","data-v-52453e0d"]]);var k=N,y={name:"BootstrapModal",components:{ProgressBar:k},emits:["close"],props:{modalSize:{type:String,default:"modal-default"},showFooter:{type:Boolean,default:!1}},computed:{modalRequesting(){return this.$store.state.isLoading&&"MODAL_REQUEST"==this.$store.state.requestFlag}}};const V=(0,b.Z)(y,[["render",p],["__scopeId","data-v-110930c3"]]);var w=V},794:function(e,t,o){o.d(t,{Z:function(){return m}});var a=o(9199);const n={class:"loading text-center"},l=(0,a.createStaticVNode)('<div class="load-circle1" data-v-acb599ce></div><div class="load-circle2" data-v-acb599ce></div><div class="load-circle3" data-v-acb599ce></div><div class="load-circle4" data-v-acb599ce></div><div class="load-circle5" data-v-acb599ce></div>',5),r=[l];function s(e,t,o,l,s,c){return(0,a.openBlock)(),(0,a.createElementBlock)("div",n,r)}var c={name:"LoadingDots"},i=o(89);const d=(0,i.Z)(c,[["render",s],["__scopeId","data-v-acb599ce"]]);var m=d}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,l){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],l=e[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&l||r>=l)&&Object.keys(o.O).every((function(e){return o.O[e](a[c])}))?a.splice(c--,1):(s=!1,l<r&&(r=l));if(s){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,n,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,a){return o.f[a](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/mainChuck.9b39f93f.js"}}(),function(){o.miniCssF=function(e){return"css/mainChuck.b20d5356.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tame-pos:";o.l=function(a,n,l,r){if(e[a])e[a].push(n);else{var s,c;if(void 0!==l)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var m=i[d];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+l){s=m;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+l),s.src=a),e[a]=[n];var u=function(t,o){s.onerror=s.onload=null,clearTimeout(p);var n=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/pos/"}(),function(){var e=function(e,t,o,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var l=function(l){if(n.onerror=n.onload=null,"load"===l.type)o();else{var r=l&&("load"===l.type?"missing":l.type),s=l&&l.target&&l.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,n.parentNode.removeChild(n),a(c)}};return n.onerror=n.onload=l,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var n=o[a],l=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(l===e||l===t))return n}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){n=r[a],l=n.getAttribute("data-href");if(l===e||l===t)return n}},a=function(a){return new Promise((function(n,l){var r=o.miniCssF(a),s=o.p+r;if(t(r,s))return n();e(a,s,n,l)}))},n={826:0};o.f.miniCss=function(e,t){var o={263:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=a(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={826:0};o.f.j=function(t,a){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var l=new Promise((function(o,a){n=e[t]=[o,a]}));a.push(n[2]=l);var r=o.p+o.u(t),s=new Error,c=function(a){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var l=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+l+": "+r+")",s.name="ChunkLoadError",s.type=l,s.request=r,n[1](s)}};o.l(r,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,l,r=a[0],s=a[1],c=a[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var d=c(o)}for(t&&t(a);i<r.length;i++)l=r[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},a=self["webpackChunktame_pos"]=self["webpackChunktame_pos"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998,64],(function(){return o(771)}));a=o.O(a)})();
//# sourceMappingURL=index.840791da.js.map