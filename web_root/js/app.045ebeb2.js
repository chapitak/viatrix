(function(t){function e(e){for(var o,i,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)i=r[p],s[i]&&d.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},s={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("1356"),s=n.n(o);s.a},"0442":function(t,e,n){"use strict";var o=n("5262"),s=n.n(o);s.a},1:function(t,e){},1356:function(t,e,n){},"158a":function(t,e,n){"use strict";var o=n("9ef1"),s=n.n(o);s.a},"1d7a":function(t,e,n){},"1e55":function(t,e,n){},"265b":function(t,e,n){},"27ec":function(t,e,n){"use strict";var o=n("265b"),s=n.n(o);s.a},"2e88":function(t,e,n){"use strict";var o=n("c2ec"),s=n.n(o);s.a},"46b9":function(t,e,n){"use strict";var o=n("f092"),s=n.n(o);s.a},"4d08":function(t,e,n){"use strict";var o=n("9a0e"),s=n.n(o);s.a},"4feb":function(t,e,n){"use strict";var o=n("55ba"),s=n.n(o);s.a},5262:function(t,e,n){},"55ba":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),s=n("bb71");n("da64");o["a"].use(s["a"],{iconfont:"md"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("div",{staticClass:"text-xs-center"}),n("v-list-tile",{on:{click:function(e){t.move("/")}}},[n("v-list-tile-action",[n("v-icon",[t._v("account_circle")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("About")])],1)],1),n("v-list-tile",{on:{click:function(e){t.move("/blog")}}},[n("v-list-tile-action",[n("v-icon",[t._v("library_books")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Blog")])],1)],1),n("v-list-tile",{on:{click:function(e){t.move("/DBBlog")}}},[n("v-list-tile-action",[n("v-icon",[t._v("library_books")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Blog(DB)")])],1)],1)],1)],1),n("v-toolbar",{attrs:{color:"midnightblue",light:"",fixed:"",app:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[n("v-toolbar-items",[n("v-btn",{attrs:{large:"",flat:""},on:{click:function(e){t.move("/")}}},[t._v("jeongkyo.kim")])],1)],1),n("v-spacer"),null==this.$store.state.user?n("v-btn",{attrs:{small:"",flat:"",target:"_blank"},on:{click:function(e){t.move("/SignIn")}}},[t._v("Sign In")]):n("span",{on:{click:function(e){t.logout()}}},[t._v(t._s(this.$store.state.user.username))])],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{shrink:""}},[n("router-view")],1)],1)],1)],1),n("v-footer",{staticClass:"black--text",attrs:{light:"",app:""}},[n("span"),n("v-spacer"),n("span",[t._v("©2018 ")])],1)],1)},i=[],r={name:"app",data:()=>({drawer:null,drawerRight:!1,right:!1,left:!1,dropdown_user:[{text:"Sign Out",callback:()=>(void 0).$router.push("/")}]}),methods:{move:function(t){this.$router.push(t)},logout(){localStorage.accessToken="",this.$store.state.user=null,this.$router.push("/")}},props:{source:String},mounted(){null!=localStorage.accessToken?this.$http.get("http://54.180.32.24:1337/users/me").then(t=>{this.$store.state.user=t.data,this.$store.state.user=t.data,localStorage.id=this.$store.state.user._id}).catch(t=>{console.log("An error occurred:",t),this.$router.push("/SignIn")}):(localStorage.id=null,this.$store.state.user=null)}},l=r,c=(n("034f"),n("2877")),u=n("6544"),p=n.n(u),d=n("7496"),v=n("8336"),m=n("a523"),h=n("549c"),f=n("0e8f"),g=n("553a"),_=n("132d"),b=n("a722"),y=n("8860"),k=n("ba95"),x=n("40fe"),T=n("5d23"),V=n("f774"),w=n("9910"),S=n("71d9"),$=n("2a7f"),C=n("706c"),B=Object(c["a"])(l,a,i,!1,null,null,null);B.options.__file="App.vue";var L=B.exports;p()(B,{VApp:d["a"],VBtn:v["a"],VContainer:m["a"],VContent:h["a"],VFlex:f["a"],VFooter:g["a"],VIcon:_["a"],VLayout:b["a"],VList:y["a"],VListTile:k["a"],VListTileAction:x["a"],VListTileContent:T["a"],VListTileTitle:T["c"],VNavigationDrawer:V["a"],VSpacer:w["a"],VToolbar:S["a"],VToolbarItems:$["a"],VToolbarSideIcon:C["a"],VToolbarTitle:$["b"]});var O=n("8c4f"),P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("img",{attrs:{src:n("7d8b"),width:"100"}}),o("br"),o("h1",[t._v("Fix Kim")]),o("br"),o("v-icon",{attrs:{small:""}},[t._v("account_circle")]),t._v(" 커피 쏟기의 귀재\n  "),o("br"),o("v-icon",{attrs:{small:""}},[t._v("my_location")]),t._v(" 서울특별시 동대문구\n  "),o("br"),o("v-icon",{attrs:{small:""}},[t._v("mail")]),t._v(" chavitak@gmail.com\n")],1)},j=[],I={name:"About"},E=I,D=(n("4d08"),Object(c["a"])(E,P,j,!1,null,"ccbfdf60",null));D.options.__file="About.vue";var A=D.exports;p()(D,{VIcon:_["a"]});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("h1",{staticClass:"text-xs-center"},[t._v("Blog Page")]),n("v-container",[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-list",{attrs:{"two-line":""}},[t._l(t.index,function(e){return[n("v-list-tile",{key:e.path,attrs:{avatar:"",ripple:""},on:{click:function(n){t.move(e.path)}}},[n("v-list-tile-content",[n("v-list-tile-title",{attrs:{pa2:""}},[t._v(t._s(e.title))]),n("v-list-tile-sub-title",{staticClass:"text-xs-right"},[t._v(t._s(e.date.year)+" / "+t._s(e.date.month)+" / "+t._s(e.date.day))])],1)],1),e.relativeId+1<t.index.length?n("v-divider"):t._e()]})],2)],1)],1)],1)],1)],1)},U=[],N={name:"Blog",data(){return{index:[{relativeId:0,title:"aAblogvuejs-3-npm-vue-cli.html",path:"/blog/2018/11/30/aAblogvuejs-3-npm-vue-cli/",date:{year:"2018",month:"11",monthEng:"November",day:"30",dayEng:"30th"}},{relativeId:1,title:"[Blog/VueJS] 2. 개발환경 세팅",path:"/blog/2018/11/29/[TEST] 공백/",date:{year:"2018",month:"11",monthEng:"November",day:"29",dayEng:"29th"}}]}},methods:{move:function(t){this.$router.push(t)}}},M=N,F=(n("46b9"),n("b0af")),q=n("ce7e"),J=Object(c["a"])(M,G,U,!1,null,"ba4c75ce",null);J.options.__file="Blog.vue";var W=J.exports;p()(J,{VCard:F["a"],VContainer:m["a"],VDivider:q["a"],VFlex:f["a"],VLayout:b["a"],VList:y["a"],VListTile:k["a"],VListTileContent:T["a"],VListTileSubTitle:T["b"],VListTileTitle:T["c"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogpost"},[n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.article)}})])},z=[],R=n("d4cd"),K=n.n(R),X={name:"BlogPost",data(){return{year:this.$route.params.year,month:this.$route.params.month,day:this.$route.params.day,title:this.$route.params.title,article:""}},mounted(){var t="/blog_contents/"+this.year+"/"+this.month+"/"+this.day+"/"+this.title+".html";this.$http.get(t).then(t=>{var e=K()({html:!0});this.article=e.render(t.data)}).catch(t=>{window.location.href="/404"})}},Q=X,Y=(n("4feb"),Object(c["a"])(Q,H,z,!1,null,"e16fa548",null));Y.options.__file="BlogPost.vue";var Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dbblog"},[n("h1",{staticClass:"text-xs-center"},[t._v("Blog")]),n("v-container",[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-list",{attrs:{"two-line":""}},[t._l(t.posts,function(e,o){return[n("v-list-tile",{key:e.index,attrs:{avatar:"",ripple:""},on:{click:function(n){t.move(e.id)}}},[n("v-list-tile-content",[n("v-list-tile-title",{attrs:{pa2:""}},[t._v(t._s(e.title))]),n("v-list-tile-sub-title",{staticClass:"text-xs-right"},[t._v(t._s(e.createdAt.substring(0,10)))])],1)],1),o+1<t.posts.length?n("v-divider"):t._e()]})],2)],1)],1)],1)],1)],1)},et=[],nt={name:"DBBlog",data(){return{posts:[],errors:[]}},methods:{move:function(t){this.$router.push({name:"DBBlogpost",params:{postid:t}})}},created(){this.$http.get("http://54.180.32.24:1337/posts",{params:{_sort:"createdAt:desc"}}).then(t=>{this.posts=t.data}).catch(t=>{this.errors.push(t)})}},ot=nt,st=(n("8bd6"),Object(c["a"])(ot,tt,et,!1,null,"46e2556b",null));st.options.__file="DBBlog.vue";var at=st.exports;p()(st,{VCard:F["a"],VContainer:m["a"],VDivider:q["a"],VFlex:f["a"],VLayout:b["a"],VList:y["a"],VListTile:k["a"],VListTileContent:T["a"],VListTileSubTitle:T["b"],VListTileTitle:T["c"]});var it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dbblogpost"},[n("div",{staticClass:"markdown-body"},[n("h1",[t._v(t._s(t.post.title))]),n("span",{staticStyle:{float:"right"}},[t._v(t._s(String(t.post.createdAt).substring(0,10)))]),n("div",{domProps:{innerHTML:t._s(t.post.text)}})]),n("Comment",{attrs:{props_post_id:t.post.id}})],1)},rt=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.props_post_id?n("div",{staticClass:"Comment"},[n("div",{attrs:{id:"read-comment"}},[n("v-list",{staticStyle:{background:"#fafafa"}},[t._l(t.comments,function(e,o){return[n("v-list-tile",{key:e.index},[n("v-list-tile-content",[n("v-list-tile-sub-title",[t._v(t._s(e.user.username))]),n("div",{staticStyle:{width:"100%"},attrs:{pa2:""}},[t._v(t._s(e.content)+" \n              \n                  "),t.$store.state.user._id==e.user._id?n("v-icon",{staticStyle:{float:"right"},attrs:{small:"",color:"red"},on:{click:function(n){t.deleteComment(e._id)}}},[t._v("close")]):t._e()],1)],1)],1),o+1<t.comments.length?n("v-divider",{key:e.index}):t._e()]})],2)],1),n("div",{attrs:{id:"write-comment"}},[n("v-form",[n("v-textarea",{attrs:{solo:"",name:"Conent Textarea",label:"코멘트를 작성해주세요"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}},[t._v(t._s(t.comment))]),n("v-btn",{staticClass:"pa-0 ma-0",staticStyle:{float:"right"},on:{click:function(e){t.sendComment()}}},[t._v("\n          등록\n          ")])],1)],1)]):t._e()},ct=[],ut={name:"Comment",props:["props_post_id"],data(){return{comment:"",comments:[]}},watch:{props_post_id:function(){return this.$http({url:"http://54.180.32.24:1337/graphql",method:"post",data:{query:'\n                  query {\n                      comments(where: {post_id: "'+this.props_post_id+'"}) { \n                          content,\n                          _id,\n                          post_id, \n                          user {\n                          username,\n                          _id\n                      },\n                      \n                      }\n                      } \n\n                  '}}).then(t=>{this.comments=t.data.data.comments,console.log(this.comments)}),null}},methods:{sendComment(){this.$http.post("http://jeongkyo.kim:1337/comments/",{post_id:this.props_post_id,register_id:this.$store.state.user._id,content:this.comment,post:this.props_post_id,user:this.$store.state.user._id}).then(t=>{console.log("Well done, your post has been successfully created: ",t.data)}).catch(t=>{console.log("An error occurred:",t)}),this.comments.push({content:this.comment,user:{username:this.$store.state.user.username,_id:this.$store.state.user._id}}),this.comment=""},deleteComment(t){console.log(t);var e=confirm("정말 삭제하시곘습니까?");if(1==e){this.$http.delete("http://jeongkyo.kim:1337/comments/"+t).then;const e=this.comments.findIndex(function(e){return e._id===t});e>-1&&this.comments.splice(e,1)}}}},pt=ut,dt=(n("158a"),n("2e88"),n("4bd4")),vt=n("a844"),mt=Object(c["a"])(pt,lt,ct,!1,null,"975f5dd8",null);mt.options.__file="Comment.vue";var ht=mt.exports;p()(mt,{VBtn:v["a"],VDivider:q["a"],VForm:dt["a"],VIcon:_["a"],VList:y["a"],VListTile:k["a"],VListTileContent:T["a"],VListTileSubTitle:T["b"],VTextarea:vt["a"]});var ft={name:"DBBlogPost",components:{Comment:ht},data(){return{post:[],errors:[]}},created(){this.$http.get("http://54.180.32.24:1337/posts/"+this.$route.params.postid).then(t=>{this.post=t.data;var e=K()();this.post.text=e.render(t.data.text)}).catch(t=>{this.errors.push(t)})}},gt=ft,_t=(n("27ec"),Object(c["a"])(gt,it,rt,!1,null,"794a274a",null));_t.options.__file="DBBlogPost.vue";var bt=_t.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"EditPost"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.postPost(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.vtitle,expression:"vtitle"}],attrs:{type:"text"},domProps:{value:t.vtitle},on:{input:function(e){e.target.composing||(t.vtitle=e.target.value)}}}),n("markdown-editor",{ref:"markdownEditor",model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("v-btn",[t._v("submit")])],1)])},kt=[],xt={data(){return{vtitle:"",content:""}},methods:{postPost(){this.$http.post("http://54.180.32.24:1337/posts/",{title:this.vtitle,text:this.content})}}},Tt=xt,Vt=(n("ecd9"),Object(c["a"])(Tt,yt,kt,!1,null,"1b19baae",null));Vt.options.__file="EditPost.vue";var wt=Vt.exports;p()(Vt,{VBtn:v["a"]});var St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SignIn"},[n("div",{attrs:{id:"gSignInWrapper"}},[n("span",{staticClass:"label"},[t._v("Sign in with: ")]),n("div",{staticClass:"customGPlusSignIn",attrs:{id:"customBtn"},on:{click:function(e){t.login()}}},[n("span",{staticClass:"icon"}),n("span",{staticClass:"buttonText"},[t._v("Google")])])])])},$t=[],Ct={data(){return{loginWindow:""}},methods:{login(){this.loginWindow=window.open("http://54.180.32.24:1337/connect/google","_blank","width=500, height=500")}},computed:{}},Bt=Ct,Lt=(n("0442"),Object(c["a"])(Bt,St,$t,!1,null,"ac82802e",null));Lt.options.__file="SignIn.vue";var Ot=Lt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SignInProcess"},[t._v("\n"+t._s(t.registerUrl)+"\n")])},jt=[],It={data(){return{token:"",registerUrl:"",response:""}},methods:{},mounted(){this.token=this.$route.fullPath,this.registerUrl=this.token.substring(14),this.registerUrl="http://jeongkyo.kim:1337/auth/google/callback"+this.registerUrl;const t=this.registerUrl;var e=new XMLHttpRequest;e.open("GET",t,!1),e.send(null),200==e.status&&(this.response=JSON.parse(e.responseText),localStorage.accessToken=this.response.jwt),opener.location.reload(),self.close()}},Et=It,Dt=(n("e2b0"),Object(c["a"])(Et,Pt,jt,!1,null,"13beae3c",null));Dt.options.__file="SignInProcess.vue";var At=Dt.exports;o["a"].use(O["a"]);var Gt=new O["a"]({routes:[{path:"/",name:"about",component:A},{path:"/blog",name:"blog",component:W},{path:"/Blog/:year/:month/:day/:title",name:"blogpost",component:Z},{path:"/DBBlog",name:"DBBlog",component:at},{path:"/DBBlog/:postid",name:"DBBlogpost",component:bt},{path:"/EditPost",name:"EditPost",component:wt},{path:"/SignIn",name:"SignIn",component:Ot},{path:"/SignInProcess",name:"SignInProcess",component:At}]}),Ut=n("bc3a"),Nt=n.n(Ut),Mt=n("0493"),Ft=n.n(Mt),qt=n("2f62");o["a"].use(qt["a"]);const Jt=()=>{const{accessToken:t}=localStorage;t&&(Nt.a.defaults.headers.common["Authorization"]=`Bearer ${t}`)};Jt();var Wt=new qt["a"].Store({state:{accessToken:localStorage.accessToken,user:null},getters:{},mutations:{LOGIN(t,{accessToken:e}){t.accessToken=e,localStorage.accessToken=e},LOGOUT(t){t.accessToken=null,localStorage.accessToken=null}},actions:{LOGIN({commit:t},{accessToken:e}){t("LOGIN",{accessToken:e})},LOGOUT({commit:t}){t("LOGOUT")}}});n("54ba"),n("b116");o["a"].use(qt["a"]),o["a"].use(Ft.a),o["a"].prototype.$http=Nt.a,o["a"].config.productionTip=!1;const Ht=localStorage.accessToken;Ht&&(o["a"].prototype.$http.defaults.headers.common["Authorization"]="Bearer "+Ht),new o["a"]({router:Gt,store:Wt,render:t=>t(L)}).$mount("#app")},"7d8b":function(t,e,n){t.exports=n.p+"img/goyoung.87c8d23b.png"},"82d8":function(t,e,n){},"8bd6":function(t,e,n){"use strict";var o=n("1e55"),s=n.n(o);s.a},"9a0e":function(t,e,n){},"9ef1":function(t,e,n){},c2ec:function(t,e,n){},e2b0:function(t,e,n){"use strict";var o=n("1d7a"),s=n.n(o);s.a},ecd9:function(t,e,n){"use strict";var o=n("82d8"),s=n.n(o);s.a},f092:function(t,e,n){}});
//# sourceMappingURL=app.045ebeb2.js.map