(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{370:function(t,e,n){},375:function(t,e,n){"use strict";var o=n(370);n.n(o).a},376:function(t,e,n){},377:function(t,e,n){"use strict";n(201);var o=n(378),r={name:"VoiceBtn",props:{emoji:{default:"🌽",type:String},link:{default:!1,type:Boolean}},data:function(){return{twe_para:{base:"https://emoji.lonelyion.com",folder:"/svg",ext:".svg"},transition:"",width:"0",timer:null,progress:0,playing:!1}},computed:{v_btn_classes:function(){return{"grey--text text--lighten-2 vo-btn-bg-dark":!this.link&&this.$vuetify.theme.dark,"vo-btn-bg-light":!this.link&&!this.$vuetify.theme.dark,playing:this.playing}},emoji_url:function(){var t=o.a.parse(this.emoji,this.twe_para);return/<img[^>]+src="?([^"\s]+)"?\s*\/>/g.exec(t)[1]}}},c=(n(375),n(50)),l=n(94),d=n.n(l),h=n(199),v=n(386),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("v-btn",{staticClass:"ma-1 pa-2 vo-btn",class:[t.v_btn_classes],style:{"--hover-content":"url('"+t.emoji_url+"')","--progress":t.progress+"%","--start-percent":t.progress-5+"%"},attrs:{elevation:o?6:2,rounded:"",height:"max-content","min-height":"36px"}},[n("div",{staticStyle:{"z-index":"2"}},[t._t("default")],2)])]}}],null,!0)})}),[],!1,null,"79321aff",null);e.a=component.exports;d()(component,{VBtn:h.a,VHover:v.a})},382:function(t){t.exports=JSON.parse('{"groups":[{"group_name":"actmoe","group_description":{"zh":"萌","en":"Moe","ja":"萌え"},"voice_list":[{"name":"f-032","path":"f-032.mp3","description":{"zh":"(自我介绍)我叫白上吹雪,是只狐狸!","en":"(Self-intro)I\'m Shirakami Fubuki, a fox!","ja":"自己紹介"}}]},{"group_name":"nakigoe","group_description":{"zh":"叫声","en":"Roaring","ja":"鳴き声"},"voice_list":[{"name":"f-001","path":"f-001.mp3","description":{"zh":"kon-nya-nya-kon~","en":"kon-nya-nya-kon~","ja":"こ～んにゃにゃこ～ん~"}}]}]}')},383:function(t,e,n){},384:function(t,e,n){"use strict";var o=n(376);n.n(o).a},387:function(t,e,n){"use strict";n.r(e);n(13),n(24),n(60);var o=n(17),r=(n(96),n(7),n(4),n(42),n(355),n(382)),c=(n(51),{name:"DevWarning",data:function(){return{dialog:!1}},mounted:function(){window.location.host.startsWith("dev")&&(this.dialog=!0)},methods:{return_to_official:function(){window.location.href="https://hosimiyas.io"}}}),l=n(50),d=n(94),h=n.n(d),v=n(199),f=n(371),m=n(369),_=(n(11),n(8),n(9),n(40)),y=(n(68),n(30),n(31),n(2)),w=(n(383),n(367)),k=n(66),x=n(71),$=n(111),O=n(192),j=n(174),S=n(173),C=n(28),A=n(112),E=n(5),B=n(6),T=n(0);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function V(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D=Object(E.a)(k.a,x.a,$.a,O.a,j.a,S.a,C.a).extend({name:"v-dialog",directives:{ClickOutside:A.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(y.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(y.a)(t,"v-dialog--active",this.isActive),Object(y.a)(t,"v-dialog--persistent",this.persistent),Object(y.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(y.a)(t,"v-dialog--scrollable",this.scrollable),Object(y.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(B.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):O.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===T.n.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(_.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(w.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:V({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=V(V({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(T.f)(this.maxWidth),width:"auto"===this.width?void 0:Object(T.f)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),M=n(368),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"406px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("dev.title"))+"\n    ")]),t._v(" "),n("v-card-text",[t._v("\n      "+t._s(t.$t("dev.desc"))+"\n    ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.return_to_official()}}},[t._v("\n        "+t._s(t.$t("dev.to_stable"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        OK\n      ")])],1)],1)],1)}),[],!1,null,null,null),z=component.exports;h()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDialog:D,VSpacer:M.a});var L=n(377),P=n(46),F={components:{VoiceBtn:L.a,DevWarning:z},data:function(){return{icons:{close:P.e,play:P.j,stop:P.o,selection_ellipse_arrow_inside:P.m,view_parallel:P.q,repeat:P.l,shuffle:P.n,clock_outline:P.d},overlap:!1,random:!1,repeat:!1,fab:!1,groups:r.groups,now_playing:new Set,upcoming_lives:[],lives:[],lives_loading:!0}},computed:{voice_host:function(){return"/voices/"},dark_text:function(){return{"grey--text text--lighten-2":this.$vuetify.theme.dark}},voice_button_color:function(){return{"light-blue darken-4":this.$vuetify.theme.dark,"blue lighten-2 white--text":!this.$vuetify.theme.dark}},fab_icon:function(){return[this.$vuetify.theme.dark?"white--text":"light-blue--text"]},fab_color:function(){return[this.$vuetify.theme.dark?"indigo darken-1":"white"]},speed_dial_color:function(){return[this.$vuetify.theme.dark?"cyan darken-1":"cyan lighten-2"]},current_locale:function(){return this.$i18n.locale},overlap_text:function(){return this.$t("control.overlap")+" "+(this.overlap?this.$t("control.enabled"):this.$t("control.disabled"))},random_text:function(){return this.$t("control.random")+" "+(this.random?this.$t("control.enabled"):this.$t("control.disabled"))},repeat_text:function(){return this.$t("control.repeat")+" "+(this.repeat?this.$t("control.enabled"):this.$t("control.disabled"))}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$vuetify.theme.dark="true"===t.$store.state.dark,e.next=3,t.fetch_live_data();case 3:"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("nexttrack",(function(){t.play_random_voice()})),navigator.mediaSession.setActionHandler("previoustrack",(function(){t.play_random_voice()})),navigator.mediaSession.setActionHandler("pause",(function(){t.stop_all(),navigator.mediaSession.playbackState="paused"})));case 4:case"end":return e.stop()}}),e)})))()},methods:{fetch_live_data:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://api.konkon.icu/v1/live",13,t.$axios.get("https://api.konkon.icu/v1/live",{params:{channel_id:13}}).then((function(e){t.lives=e.data.live,t.upcoming_lives=e.data.upcoming,t.upcoming_lives.sort((function(a,b){return a.live_schedule>b.live_schedule?1:-1}))})).catch((function(t){console.log(t)})).finally((function(){return t.lives_loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},format_time:function(t){return n(202)(t).format("YYYY/M/DD HH:mm")},send_google_event:function(t){ga("send",{hitType:"event",eventCategory:"Audios",eventAction:"play",eventLabel:t.name+" "+t.description.zh})},play:function(t){var e=this,n=null,o=null;this.$refs.voice_btn.forEach((function(i){i.$vnode.data.key===t.name&&(n=i)})),this.overlap||this.now_playing.forEach((function(i){i.pause(),e.now_playing.delete(i),console.log(t.name,"paused before new playing")}));var r=function(){null!==o&&l(),o=setInterval((function(){var t=Number((audio.currentTime/audio.duration*100).toFixed(2));t===1/0||isNaN(t)?n.progress=0:n.progress=t}),50)},c=function(){var t=setInterval((function(){n.progress-=5,n.progress<=0&&(clearInterval(t),t=null)}),50);n.playing=!1},l=function(){clearInterval(o),o=null},audio=new Audio(this.voice_host+t.path);if(audio.load(),"mediaSession"in navigator){var d={title:this.overlap?this.$t("control.overlap_title"):t.description[this.current_locale],artist:this.$t("control.full_name"),album:this.$t("site.title")+"",artwork:[{src:"/img/media-cover.jpg",sizes:"128x128",type:"image/jpeg"}]};navigator.mediaSession.metadata=new window.MediaMetadata(d),navigator.mediaSession.playbackState="playing"}audio.addEventListener("canplay",(function(){audio.volume=1,audio.play(),e.now_playing.add(audio),e.send_google_event(t),n.playing=!0,r()})),audio.addEventListener("ended",(function(){e.repeat?(audio.play(),e.now_playing.add(audio),e.send_google_event(t),n.playing=!0,r()):e.random?e.play_random_voice():(c(),l(),e.now_playing.delete(audio))})),audio.addEventListener("pause",(function(){c(),l(),e.now_playing.delete(audio),"mediaSession"in navigator&&(navigator.mediaSession.playbackState="paused")})),this.$bus.$on("abort_play",(function(){audio.pause(),c(),l(),e.now_playing.delete(audio),delete e.audio}))},get_random_int:function(t){return Math.floor(Math.random()*Math.floor(t))},play_random_voice:function(){var t=this.groups[this.get_random_int(this.groups.length)];this.play(t.voice_list[this.get_random_int(t.voice_list.length)])},stop_all:function(){console.log("stop-all"),this.$bus.$emit("abort_play")}},head:function(){return{title:this.$t("site.title")+"🌟🐧",link:[{rel:"canonical",href:"https://hosimiyas.io"}]}}},W=(n(384),n(381)),H=Object(l.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":"",app:""}},[n("dev-warning"),t._v(" "),t._l(t.groups,(function(e){return n("v-card",{key:e.name},[n("v-card-title",{staticClass:"headline",class:t.dark_text},[t._v("\n      "+t._s(e.group_description[t.current_locale])+"\n    ")]),t._v(" "),n("v-card-text",t._l(e.voice_list,(function(e){return n("voice-btn",{key:e.name,ref:"voice_btn",refInFor:!0,class:t.voice_button_color,nativeOn:{click:function(n){return t.play(e)}}},[t._v("\n        "+t._s(e.description[t.current_locale])+"\n      ")])})),1)],1)}))],2)}),[],!1,null,"6bce9a7a",null);e.default=H.exports;h()(H,{VCard:f.a,VCardText:m.b,VCardTitle:m.c,VLayout:W.a})}}]);