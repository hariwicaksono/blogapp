_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"4mae":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting",function(){return t("PqvI")}])},"6xyR":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),i=t("TSYQ"),c=t.n(i),s=t("q1tI"),l=t.n(s),o=t("vUet"),d=t("YdCC"),b=t("U1MP"),u=t("Wzyw"),m=t("WjzP"),j=Object(b.a)("h5"),h=Object(b.a)("h6"),p=Object(d.a)("card-body"),f=Object(d.a)("card-title",{Component:j}),O=Object(d.a)("card-subtitle",{Component:h}),x=Object(d.a)("card-link",{Component:"a"}),v=Object(d.a)("card-text",{Component:"p"}),y=Object(d.a)("card-header"),g=Object(d.a)("card-footer"),w=Object(d.a)("card-img-overlay"),P=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,d=e.bg,b=e.text,m=e.border,j=e.body,h=e.children,f=e.as,O=void 0===f?"div":f,x=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(o.b)(t,"card"),y=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return l.a.createElement(u.a.Provider,{value:y},l.a.createElement(O,Object(n.a)({ref:a},x,{className:c()(i,v,d&&"bg-"+d,b&&"text-"+b,m&&"border-"+m)}),j?l.a.createElement(p,null,h):h))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=m.a,P.Title=f,P.Subtitle=O,P.Body=p,P.Link=x,P.Text=v,P.Header=y,P.Footer=g,P.ImgOverlay=w,a.a=P},PqvI:function(e,a,t){"use strict";t.r(a);var n=t("1OyB"),r=t("vuIU"),i=t("JX7q"),c=t("Ji7U"),s=t("md7G"),l=t("foSv"),o=t("rePB"),d=t("nKUr"),b=t("q1tI"),u=t("g4pe"),m=t.n(u),j=(t("20a2"),t("HuT5"),t("CafY")),h=t("S7XH"),p=t("FGyW"),f=t("7vrA"),O=t("XWsC"),x=t("3Z9Z"),v=t("JI6e"),y=t("6xyR"),g=t("QojX"),w=t("cWnB"),P=t("T/rR"),N=t("KYPV"),C=t("UGp+"),I=t("sZxp"),S=t.n(I),k=t("ma3e");function q(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(l.a)(e);if(a){var r=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(s.a)(this,t)}}var E=C.b({company:C.c().required("Field harus diisi"),website:C.c().required("Field harus diisi"),phone:C.c().required("Field harus diisi"),email:C.c().required("Field harus diisi")}),R=function(e){Object(c.a)(t,e);var a=q(t);function t(e){var r;return Object(n.a)(this,t),r=a.call(this,e),Object(o.a)(Object(i.a)(r),"componentDidMount",(function(){h.a.GetSetting().then((function(e){setTimeout((function(){return r.setState({company:e.data[0].company,website:e.data[0].website,phone:e.data[0].phone,email:e.data[0].email,loading:!1})}),100)}))})),r.state={company:"",website:"",phone:"",email:"",loading:!0},r}return Object(r.a)(t,[{key:"render",value:function(){return Object(d.jsxs)(j.a,{admin:!0,children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)("title",{children:["Setting - ",j.c]})}),Object(d.jsxs)(f.a,{className:"my-3",fluid:!0,children:[Object(d.jsxs)(O.a,{className:"mb-2",children:[Object(d.jsx)(O.a.Item,{children:"Admin"}),Object(d.jsx)(O.a.Item,{active:!0,children:"Pengaturan"})]}),Object(d.jsx)(x.a,{children:Object(d.jsx)(v.a,{children:Object(d.jsxs)(y.a,{body:!0,children:[Object(d.jsx)("h3",{className:"mb-3",children:"Pengaturan"}),this.state.loading?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S.a,{count:4,height:40,className:"mb-1"}),Object(d.jsx)(S.a,{width:100,height:40})]}):Object(d.jsx)(N.a,{initialValues:{company:this.state.company,website:this.state.website,phone:this.state.phone,email:this.state.email},onSubmit:function(e,a){h.a.PutSetting(e).then((function(e){1===e.status&&p.b.success("Data berhasil disimpan",{position:"top-center"})})).catch((function(e){console.log(e.response),p.b.warn("Tidak ada data yang diubah",{position:"top-center"})})),setTimeout((function(){a.setSubmitting(!1)}),1e3)},validationSchema:E,enableReinitialize:!0,children:function(e){var a=e.handleSubmit,t=e.handleChange,n=e.handleBlur,r=e.values,i=e.touched,c=e.errors,s=e.isSubmitting;return Object(d.jsxs)(g.a,{noValidate:!0,onSubmit:a,children:[Object(d.jsxs)(g.a.Group,{children:[Object(d.jsx)(g.a.Label,{children:"Nama Perusahaan *"}),Object(d.jsx)(g.a.Control,{type:"text",name:"company",placeholder:"",className:"form-control",onChange:t,onBlur:n,value:r.company,isInvalid:!!c.company&&i.company}),c.company&&i.company&&Object(d.jsx)(g.a.Control.Feedback,{type:"invalid",children:c.company})]}),Object(d.jsxs)(g.a.Group,{children:[Object(d.jsx)(g.a.Label,{children:"Website"}),Object(d.jsx)(g.a.Control,{type:"text",name:"website",placeholder:"",className:"form-control",onChange:t,onBlur:n,value:r.website,isInvalid:!!c.website&&i.website}),c.website&&i.website&&Object(d.jsx)(g.a.Control.Feedback,{type:"invalid",children:c.website})]}),Object(d.jsx)(g.a.Group,{children:Object(d.jsxs)(g.a.Row,{children:[Object(d.jsxs)(v.a,{children:[Object(d.jsx)(g.a.Label,{children:"Telepon *"}),Object(d.jsx)(g.a.Control,{type:"text",name:"phone",placeholder:"",className:"form-control",onChange:t,onBlur:n,value:r.phone,isInvalid:!!c.phone&&i.phone}),c.phone&&i.phone&&Object(d.jsx)(g.a.Control.Feedback,{type:"invalid",children:c.phone})]}),Object(d.jsxs)(v.a,{children:[Object(d.jsx)(g.a.Label,{children:"Email *"}),Object(d.jsx)(g.a.Control,{type:"text",name:"email",placeholder:"",className:"form-control",onChange:t,onBlur:n,value:r.email,isInvalid:!!c.email&&i.email}),c.email&&i.email&&Object(d.jsx)(g.a.Control.Feedback,{type:"invalid",children:c.email})]})]})}),Object(d.jsx)(w.a,{variant:"primary",type:"submit",disabled:s,children:s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})," Memuat..."]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k.i,{})," Simpan"]})})]})}})]})})})]})]})}}]),t}(b.Component);a.default=R},U1MP:function(e,a,t){"use strict";var n=t("wx14"),r=t("q1tI"),i=t.n(r),c=t("TSYQ"),s=t.n(c);a.a=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(n.a)({},a,{ref:t,className:s()(a.className,e)}))}))}},WjzP:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),i=t("TSYQ"),c=t.n(i),s=t("q1tI"),l=t.n(s),o=t("vUet"),d=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.variant,d=e.as,b=void 0===d?"img":d,u=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(o.b)(t,"card-img");return l.a.createElement(b,Object(n.a)({ref:a,className:c()(s?m+"-"+s:m,i)},u))}));d.displayName="CardImg",d.defaultProps={variant:null},a.a=d},XWsC:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),i=t("TSYQ"),c=t.n(i),s=t("q1tI"),l=t.n(s),o=t("vUet"),d=t("qHfc"),b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.listProps,d=e.children,b=e.label,u=e.as,m=void 0===u?"nav":u,j=Object(r.a)(e,["bsPrefix","className","listProps","children","label","as"]),h=Object(o.b)(t,"breadcrumb");return l.a.createElement(m,Object(n.a)({"aria-label":b,className:i,ref:a},j),l.a.createElement("ol",Object(n.a)({},s,{className:c()(h,null==s?void 0:s.className)}),d))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}},b.Item=d.a,a.a=b},qHfc:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),i=t("TSYQ"),c=t.n(i),s=t("q1tI"),l=t.n(s),o=t("dbZe"),d=t("vUet"),b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.active,s=e.children,b=e.className,u=e.as,m=void 0===u?"li":u,j=e.linkAs,h=void 0===j?o.a:j,p=e.linkProps,f=e.href,O=e.title,x=e.target,v=Object(r.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),y=Object(d.b)(t,"breadcrumb-item");return l.a.createElement(m,Object(n.a)({ref:a},v,{className:c()(y,b,{active:i}),"aria-current":i?"page":void 0}),i?s:l.a.createElement(h,Object(n.a)({},p,{href:f,title:O,target:x}),s))}));b.displayName="BreadcrumbItem",b.defaultProps={active:!1,linkProps:{}},a.a=b}},[["4mae",1,2,4,0,3,5,6]]]);