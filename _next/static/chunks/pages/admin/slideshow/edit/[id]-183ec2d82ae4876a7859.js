_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"4Ryt":function(e,t,a){"use strict";a.r(t);var i=a("o0o1"),n=a.n(i),r=a("HaE+"),s=a("1OyB"),c=a("vuIU"),l=a("JX7q"),o=a("Ji7U"),d=a("md7G"),u=a("foSv"),b=a("rePB"),h=a("nKUr"),j=a("q1tI"),f=a("8Kt/"),m=a.n(f),x=a("YFqc"),p=a.n(x),O=a("CafY"),v=a("S7XH"),g=a("d0xl"),w=a("7vrA"),y=a("XWsC"),_=a("6xyR"),P=a("QojX"),N=a("cWnB"),S=a("T/rR"),E=a("ma3e"),k=a("FGyW"),I=a("sZxp"),R=a.n(I),q=a("KYPV"),T=a("UGp+");function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=Object(u.a)(e);if(t){var n=Object(u.a)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Object(d.a)(this,a)}}var F=T.b({text_slide:T.c().required()}),H=function(e){Object(o.a)(a,e);var t=C(a);function a(e){var i;return Object(s.a)(this,a),i=t.call(this,e),Object(b.a)(Object(l.a)(i),"componentDidMount",(function(){var e=i.props.id;v.a.GetSlideshowId(e).then((function(e){console.log(e),setTimeout((function(){return i.setState({id:e.data[0].id,image:e.data[0].img_slide,text_slide:e.data[0].text_slide,loading:!1})}),100)}))})),i.state={id:"",image:"",text_slide:"",url:Object(g.a)(),loading:!0},i}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(O.a,{admin:!0,children:[Object(h.jsx)(m.a,{children:Object(h.jsxs)("title",{children:["Edit Slideshow - ",O.c]})}),Object(h.jsx)(w.a,{fluid:!0,children:this.state.loading?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(R.a,{count:4,height:40,className:"mb-1"}),Object(h.jsx)(R.a,{width:100,height:40})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(y.a,{className:"my-3",children:[Object(h.jsx)(p.a,{href:"/admin",passHref:!0,children:Object(h.jsx)(y.a.Item,{children:"Home"})}),Object(h.jsx)(p.a,{href:"/admin/slideshow",passHref:!0,children:Object(h.jsx)(y.a.Item,{children:"Slideshow"})}),Object(h.jsx)(y.a.Item,{active:!0,children:"Edit"})]}),Object(h.jsxs)(_.a,{className:"mb-2",body:!0,children:[Object(h.jsx)("h5",{className:"mb-3",style:{fontWeight:"400"},children:"Edit Slideshow"}),Object(h.jsx)(q.a,{initialValues:{id:this.state.id,text_slide:this.state.text_slide},onSubmit:function(e,t){v.a.PutSlideshow(e).then((function(e){1===e.status&&k.b.success("Data berhasil disimpan",{position:"top-center"})})).catch((function(e){console.log(e.response),k.b.warn("Tidak ada data yang diubah",{position:"top-center"})})),setTimeout((function(){t.setSubmitting(!1)}),1e3)},validationSchema:F,enableReinitialize:!0,children:function(t){var a=t.handleSubmit,i=t.handleChange,n=t.handleBlur,r=(t.setFieldValue,t.values),s=t.touched,c=t.errors,l=t.isSubmitting;return Object(h.jsxs)(P.a,{noValidate:!0,onSubmit:a,children:[Object(h.jsxs)(P.a.Group,{children:[Object(h.jsx)(P.a.Label,{children:"Gambar"}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{src:e.state.url+e.state.image,width:"200",alt:""})]}),Object(h.jsxs)(P.a.Group,{children:[Object(h.jsx)(P.a.Label,{children:"Teks Slide"}),Object(h.jsx)(P.a.Control,{name:"text_slide",placeholder:"",className:"form-control",onChange:i,onBlur:n,value:r.text_slide,isInvalid:!!c.text_slide&&s.text_slide}),c.text_slide&&s.text_slide&&Object(h.jsx)(P.a.Control.Feedback,{type:"invalid",children:c.text_slide})]}),Object(h.jsx)(N.a,{variant:"primary",type:"submit",disabled:l,children:l?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})," Memuat..."]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(E.h,{})," Simpan"]})})]})}})]})]})})]})}}],[{key:"getInitialProps",value:function(){var e=Object(r.a)(n.a.mark((function e(t){var a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,i=a.id,e.abrupt("return",{id:i});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),a}(j.Component);t.default=H},"HaE+":function(e,t,a){"use strict";function i(e,t,a,i,n,r,s){try{var c=e[r](s),l=c.value}catch(o){return void a(o)}c.done?t(l):Promise.resolve(l).then(i,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function c(e){i(s,n,r,c,l,"next",e)}function l(e){i(s,n,r,c,l,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return n}))},XWsC:function(e,t,a){"use strict";var i=a("wx14"),n=a("zLVn"),r=a("TSYQ"),s=a.n(r),c=a("q1tI"),l=a.n(c),o=a("vUet"),d=a("qHfc"),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.listProps,d=e.children,u=e.label,b=e.as,h=void 0===b?"nav":b,j=Object(n.a)(e,["bsPrefix","className","listProps","children","label","as"]),f=Object(o.b)(a,"breadcrumb");return l.a.createElement(h,Object(i.a)({"aria-label":u,className:r,ref:t},j),l.a.createElement("ol",Object(i.a)({},c,{className:s()(f,null==c?void 0:c.className)}),d))}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}},u.Item=d.a,t.a=u},ctlt:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/slideshow/edit/[id]",function(){return a("4Ryt")}])},qHfc:function(e,t,a){"use strict";var i=a("wx14"),n=a("zLVn"),r=a("TSYQ"),s=a.n(r),c=a("q1tI"),l=a.n(c),o=a("dbZe"),d=a("vUet"),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.active,c=e.children,u=e.className,b=e.as,h=void 0===b?"li":b,j=e.linkAs,f=void 0===j?o.a:j,m=e.linkProps,x=e.href,p=e.title,O=e.target,v=Object(n.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),g=Object(d.b)(a,"breadcrumb-item");return l.a.createElement(h,Object(i.a)({ref:t},v,{className:s()(g,u,{active:r}),"aria-current":r?"page":void 0}),r?c:l.a.createElement(f,Object(i.a)({},m,{href:x,title:p,target:O}),c))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}},t.a=u}},[["ctlt",0,2,4,1,3,5,6,7,8]]]);