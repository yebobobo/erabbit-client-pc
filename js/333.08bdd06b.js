"use strict";(self["webpackChunkerabbit_client_pc"]=self["webpackChunkerabbit_client_pc"]||[]).push([[333],{7333:function(a,t,e){e.r(t),e.d(t,{default:function(){return xa}});var c=e(3396);const s={class:"app-body"};function d(a,t,e,d,r,o){const n=(0,c.up)("common-shortcuts"),i=(0,c.up)("common-header"),l=(0,c.up)("common-sticky"),v=(0,c.up)("router-view"),u=(0,c.up)("common-footer");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(n),(0,c.Wm)(i),(0,c.Wm)(l),(0,c._)("div",s,[(0,c.Wm)(v)]),(0,c.Wm)(u)],64)}const r=a=>((0,c.dD)("data-v-768e24b8"),a=a(),(0,c.Cn)(),a),o={class:"shortcuts"},n={class:"wrapper"},i=(0,c.Uk)("请先登录"),l=(0,c.Uk)("免费注册"),v=(0,c.Uk)("我的订单"),u=(0,c.Uk)("会员中心"),p=r((()=>(0,c._)("a",{href:"javascript:;"},"帮助我们",-1))),f=r((()=>(0,c._)("a",{href:"javascript:;"},"关于我们",-1))),m=r((()=>(0,c._)("a",{href:"javascript:;"},[(0,c._)("i",{class:"iconfont icon-phone"}),(0,c.Uk)("手机版")],-1)));function _(a,t,e,s,d,r){const _=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("div",o,[(0,c._)("div",n,[(0,c.Wm)(_,{to:"/login"},{default:(0,c.w5)((()=>[i])),_:1}),(0,c.Wm)(_,{to:"/register"},{default:(0,c.w5)((()=>[l])),_:1}),(0,c.Wm)(_,{to:"/login"},{default:(0,c.w5)((()=>[v])),_:1}),(0,c.Wm)(_,{to:"/login"},{default:(0,c.w5)((()=>[u])),_:1}),p,f,m])])}var b={name:"CommonShortcuts"},h=e(89);const w=(0,h.Z)(b,[["render",_],["__scopeId","data-v-768e24b8"]]);var g=w;const k=a=>((0,c.dD)("data-v-3ebfc4c1"),a=a(),(0,c.Cn)(),a),C={class:"header wrapper"},y={class:"logo"},W=(0,c.Uk)("小兔鲜儿"),D=k((()=>(0,c._)("div",{class:"search"},[(0,c._)("i"),(0,c._)("input",{type:"text",placeholder:"搜一搜"})],-1)));function j(a,t,e,s,d,r){const o=(0,c.up)("router-link"),n=(0,c.up)("header-nav"),i=(0,c.up)("header-cart");return(0,c.wg)(),(0,c.iD)("div",C,[(0,c._)("h1",y,[(0,c.Wm)(o,{to:"/"},{default:(0,c.w5)((()=>[W])),_:1})]),(0,c.Wm)(n),D,(0,c.Wm)(i)])}var x=e(7139);const H={class:"header-nav",ref:"target"},U={class:"home"},$=(0,c.Uk)("首页"),z=["onMouseover","onMouseleave"],I=["src"];function Z(a,t,e,s,d,r){const o=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("ul",H,[(0,c._)("li",U,[(0,c.Wm)(o,{to:"/"},{default:(0,c.w5)((()=>[$])),_:1})]),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(s.list,(a=>((0,c.wg)(),(0,c.iD)("li",{key:a.id,onMouseover:t=>s.show(a),onMouseleave:t=>s.hide(a)},[(0,c.Wm)(o,{to:`/category/${a.id}`,onClick:t=>s.hide(a)},{default:(0,c.w5)((()=>[(0,c.Uk)((0,x.zw)(a.name),1)])),_:2},1032,["to","onClick"]),(0,c._)("div",{class:(0,x.C_)(["layer",{open:a.open}])},[(0,c._)("ul",null,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(a.children,(t=>((0,c.wg)(),(0,c.iD)("li",{key:t.id},[(0,c.Wm)(o,{to:`/category/sub/${t.id}`,onClick:t=>s.hide(a)},{default:(0,c.w5)((()=>[(0,c._)("img",{src:t.picture,alt:""},null,8,I),(0,c._)("p",null,(0,x.zw)(t.name),1)])),_:2},1032,["to","onClick"])])))),128))])],2)],40,z)))),128))],512)}var P=e(65),q={name:"HeaderNav",setup(){const a=(0,P.oR)(),t=(0,c.Fl)((()=>a.state.category.list));(0,c.bv)((()=>{a.dispatch("getList")}));const e=t=>{a.commit("show",t.id)},s=t=>{a.commit("hide",t.id)};return{list:t,show:e,hide:s}}};const F=(0,h.Z)(q,[["render",Z],["__scopeId","data-v-5dbe7ed7"]]);var M=F;const S=a=>((0,c.dD)("data-v-aa300178"),a=a(),(0,c.Cn)(),a),T={class:"header-cart"},Y=S((()=>(0,c._)("i",{class:"iconfont icon-cart"},null,-1))),A={key:0,class:"layer"},K={class:"list"},L=["src"],N={class:"center"},R={class:"name ellipsis-2"},E={class:"attr ellipsis"},X={class:"right"},B={class:"price"},G={class:"count"},J=["onClick"],O={class:"foot"},Q={class:"total"},V=(0,c.Uk)("去购物车结算");function aa(a,t,e,s,d,r){const o=(0,c.up)("router-link"),n=(0,c.up)("xtx-button");return(0,c.wg)(),(0,c.iD)("div",T,[(0,c.Wm)(o,{to:"/cart",class:"current"},{default:(0,c.w5)((()=>[Y,(0,c._)("em",null,(0,x.zw)(a.$store.getters["cart/validTotal"]),1)])),_:1}),a.$store.getters["cart/validTotal"]>0&&"/cart"!==a.$route.path?((0,c.wg)(),(0,c.iD)("div",A,[(0,c._)("div",K,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(a.$store.getters["cart/validList"],(a=>((0,c.wg)(),(0,c.iD)("div",{class:"item",key:a.skuId},[(0,c.Wm)(o,{to:`/product/${a.id}`},{default:(0,c.w5)((()=>[(0,c._)("img",{src:a.picture,alt:""},null,8,L),(0,c._)("div",N,[(0,c._)("p",R,(0,x.zw)(a.name),1),(0,c._)("p",E,(0,x.zw)(a.attrsText),1)]),(0,c._)("div",X,[(0,c._)("div",B,"￥"+(0,x.zw)(a.nowPrice),1),(0,c._)("p",G,"x"+(0,x.zw)(a.count),1)])])),_:2},1032,["to"]),(0,c._)("i",{onClick:t=>s.deleteCart(a.skuId),class:"iconfont icon-close"},null,8,J)])))),128))]),(0,c._)("div",O,[(0,c._)("div",Q,[(0,c._)("p",null,"共 "+(0,x.zw)(a.$store.getters["cart/validTotal"])+" 件商品",1),(0,c._)("p",null,"￥"+(0,x.zw)(a.$store.getters["cart/validAmount"]),1)]),(0,c.Wm)(n,{onClick:t[0]||(t[0]=t=>a.$router.push("/cart")),type:"primary"},{default:(0,c.w5)((()=>[V])),_:1})])])):(0,c.kq)("",!0)])}var ta={name:"HeaderCart",setup(){const a=(0,P.oR)();a.dispatch("cart/findCart").then((()=>{}));const t=t=>{a.dispatch("cart/deleteCart",t)};return{deleteCart:t}}};const ea=(0,h.Z)(ta,[["render",aa],["__scopeId","data-v-aa300178"]]);var ca=ea,sa={name:"CommonHeader",components:{HeaderNav:M,HeaderCart:ca}};const da=(0,h.Z)(sa,[["render",j],["__scopeId","data-v-3ebfc4c1"]]);var ra=da,oa=e(9242);const na={class:"wrapper"},ia={class:"right"},la=(0,c.Uk)("品牌"),va=(0,c.Uk)("专题");function ua(a,t,e,s,d,r){const o=(0,c.up)("router-link"),n=(0,c.up)("header-nav");return(0,c.wg)(),(0,c.iD)("div",{class:(0,x.C_)(["sticky",{show:s.y>=78}])},[(0,c.wy)((0,c._)("div",na,[(0,c.Wm)(o,{to:"/",class:"logo"}),(0,c.Wm)(n),(0,c._)("div",ia,[(0,c.Wm)(o,{to:"/"},{default:(0,c.w5)((()=>[la])),_:1}),(0,c.Wm)(o,{to:"/"},{default:(0,c.w5)((()=>[va])),_:1})])],512),[[oa.F8,s.y>=78]])],2)}var pa=e(6367),fa={name:"CommonSticky",components:{HeaderNav:M},setup(){const{y:a}=(0,pa.baj)();return{y:a}}};const ma=(0,h.Z)(fa,[["render",ua],["__scopeId","data-v-a399aeb2"]]);var _a=ma,ba=e(3947);const ha={class:"footer"},wa=(0,c.uE)('<div class="contact wrapper clearfix" data-v-6bc65af8><dl data-v-6bc65af8><dt data-v-6bc65af8>客户服务</dt><dd class="chat" data-v-6bc65af8>在线客服</dd><dd class="feedback" data-v-6bc65af8>问题反馈</dd></dl><dl data-v-6bc65af8><dt data-v-6bc65af8>关注我们</dt><dd class="weixin" data-v-6bc65af8>公众号</dd><dd class="weibo" data-v-6bc65af8>微博</dd></dl><dl data-v-6bc65af8><dt data-v-6bc65af8>下载APP</dt><dd class="qrcode" data-v-6bc65af8><img src="'+ba+'" alt="" data-v-6bc65af8></dd><dd class="download" data-v-6bc65af8><span data-v-6bc65af8>扫描二维码</span><span data-v-6bc65af8>立马下载APP</span><a href="javascript:;" data-v-6bc65af8>下载页面</a></dd></dl><dl data-v-6bc65af8><dt data-v-6bc65af8>服务热线</dt><dd class="hotline" data-v-6bc65af8> 400-0000-000 <small data-v-6bc65af8>周一至周日 8:00-18:00</small></dd></dl></div><div class="extra" data-v-6bc65af8><div class="wrapper" data-v-6bc65af8><div class="slogan" data-v-6bc65af8><a href="javascript:;" class="price" data-v-6bc65af8>价格亲民</a><a href="javascript:;" class="express" data-v-6bc65af8>物流快捷</a><a href="javascript:;" class="quality" data-v-6bc65af8>品质新鲜</a></div><div class="copyright" data-v-6bc65af8><p data-v-6bc65af8><a href="javascript:;" data-v-6bc65af8>关于我们</a>| <a href="javascript:;" data-v-6bc65af8>帮助中心</a>| <a href="javascript:;" data-v-6bc65af8>售后服务</a>| <a href="javascript:;" data-v-6bc65af8>配送与验收</a>| <a href="javascript:;" data-v-6bc65af8>商务合作</a>| <a href="javascript:;" data-v-6bc65af8>搜索推荐</a>| <a href="javascript:;" data-v-6bc65af8>友情链接</a></p><p data-v-6bc65af8>CopyRight © 小兔鲜儿</p></div></div></div>',2),ga=[wa];function ka(a,t,e,s,d,r){return(0,c.wg)(),(0,c.iD)("div",ha,ga)}var Ca={name:"CommonFooter"};const ya=(0,h.Z)(Ca,[["render",ka],["__scopeId","data-v-6bc65af8"]]);var Wa=ya,Da={name:"XtxLayout",components:{CommonShortcuts:g,CommonHeader:ra,CommonSticky:_a,CommonFooter:Wa}};const ja=(0,h.Z)(Da,[["render",d]]);var xa=ja},3947:function(a,t,e){a.exports=e.p+"img/qrcode.f8ff6896.jpg"}}]);
//# sourceMappingURL=333.08bdd06b.js.map