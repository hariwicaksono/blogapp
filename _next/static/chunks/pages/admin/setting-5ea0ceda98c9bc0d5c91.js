_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"4mae":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting",function(){return a("PqvI")}])},PqvI:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),i=a("vuIU"),c=a("JX7q"),r=a("Ji7U"),s=a("md7G"),l=a("foSv"),o=a("rePB"),d=a("nKUr"),b=a("q1tI"),u=a("g4pe"),m=a.n(u),h=a("20a2"),j=a.n(h),p=a("HuT5"),f=a("CafY"),O=a("S7XH"),x=a("FGyW"),v=a("7vrA"),y=a("XWsC"),g=a("3Z9Z"),w=a("JI6e"),N=a("6xyR"),P=a("QojX"),C=a("cWnB"),S=a("T/rR"),I=a("KYPV"),k=a("UGp+"),q=a("sZxp"),F=a.n(q),_=a("ma3e");function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var i=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var B=k.b({company:k.c().required("Field harus diisi"),website:k.c().required("Field harus diisi"),phone:k.c().required("Field harus diisi"),email:k.c().required("Field harus diisi")}),E=function(e){Object(r.a)(a,e);var t=R(a);function a(e){var i;return Object(n.a)(this,a),i=t.call(this,e),Object(o.a)(Object(c.a)(i),"componentDidMount",(function(){if(!Object(p.a)())return j.a.push("/login");O.a.GetSetting().then((function(e){setTimeout((function(){return i.setState({company:e.data[0].company,website:e.data[0].website,phone:e.data[0].phone,email:e.data[0].email,loading:!1})}),100)}))})),i.state={company:"",website:"",phone:"",email:"",loading:!0},i}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(f.a,{admin:!0,children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)("title",{children:["Setting - ",f.c]})}),Object(d.jsxs)(v.a,{className:"my-3",fluid:!0,children:[Object(d.jsxs)(y.a,{className:"mb-2",children:[Object(d.jsx)(y.a.Item,{children:"Admin"}),Object(d.jsx)(y.a.Item,{active:!0,children:"Pengaturan"})]}),Object(d.jsx)(g.a,{children:Object(d.jsx)(w.a,{children:Object(d.jsxs)(N.a,{body:!0,children:[Object(d.jsx)("h3",{className:"mb-3",children:"Pengaturan"}),this.state.loading?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(F.a,{count:4,height:40,className:"mb-1"}),Object(d.jsx)(F.a,{width:100,height:40})]}):Object(d.jsx)(I.a,{initialValues:{company:this.state.company,website:this.state.website,phone:this.state.phone,email:this.state.email},onSubmit:function(e,t){O.a.PutSetting(e).then((function(e){1===e.status&&x.b.success("Data berhasil disimpan",{position:"top-center"})})).catch((function(e){console.log(e.response),x.b.warn("Tidak ada data yang diubah",{position:"top-center"})})),setTimeout((function(){t.setSubmitting(!1)}),1e3)},validationSchema:B,enableReinitialize:!0,children:function(e){var t=e.handleSubmit,a=e.handleChange,n=e.handleBlur,i=e.values,c=e.touched,r=e.errors,s=e.isSubmitting;return Object(d.jsxs)(P.a,{noValidate:!0,onSubmit:t,children:[Object(d.jsxs)(P.a.Group,{children:[Object(d.jsx)(P.a.Label,{children:"Nama Perusahaan *"}),Object(d.jsx)(P.a.Control,{type:"text",name:"company",placeholder:"",className:"form-control",onChange:a,onBlur:n,value:i.company,isInvalid:!!r.company&&c.company}),r.company&&c.company&&Object(d.jsx)(P.a.Control.Feedback,{type:"invalid",children:r.company})]}),Object(d.jsxs)(P.a.Group,{children:[Object(d.jsx)(P.a.Label,{children:"Website"}),Object(d.jsx)(P.a.Control,{type:"text",name:"website",placeholder:"",className:"form-control",onChange:a,onBlur:n,value:i.website,isInvalid:!!r.website&&c.website}),r.website&&c.website&&Object(d.jsx)(P.a.Control.Feedback,{type:"invalid",children:r.website})]}),Object(d.jsx)(P.a.Group,{children:Object(d.jsxs)(P.a.Row,{children:[Object(d.jsxs)(w.a,{children:[Object(d.jsx)(P.a.Label,{children:"Telepon *"}),Object(d.jsx)(P.a.Control,{type:"text",name:"phone",placeholder:"",className:"form-control",onChange:a,onBlur:n,value:i.phone,isInvalid:!!r.phone&&c.phone}),r.phone&&c.phone&&Object(d.jsx)(P.a.Control.Feedback,{type:"invalid",children:r.phone})]}),Object(d.jsxs)(w.a,{children:[Object(d.jsx)(P.a.Label,{children:"Email *"}),Object(d.jsx)(P.a.Control,{type:"text",name:"email",placeholder:"",className:"form-control",onChange:a,onBlur:n,value:i.email,isInvalid:!!r.email&&c.email}),r.email&&c.email&&Object(d.jsx)(P.a.Control.Feedback,{type:"invalid",children:r.email})]})]})}),Object(d.jsx)(C.a,{variant:"primary",type:"submit",disabled:s,children:s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})," Memuat..."]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_.h,{})," Simpan"]})})]})}})]})})})]})]})}}]),a}(b.Component);t.default=E},XWsC:function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),c=a("TSYQ"),r=a.n(c),s=a("q1tI"),l=a.n(s),o=a("vUet"),d=a("qHfc"),b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.listProps,d=e.children,b=e.label,u=e.as,m=void 0===u?"nav":u,h=Object(i.a)(e,["bsPrefix","className","listProps","children","label","as"]),j=Object(o.b)(a,"breadcrumb");return l.a.createElement(m,Object(n.a)({"aria-label":b,className:c,ref:t},h),l.a.createElement("ol",Object(n.a)({},s,{className:r()(j,null==s?void 0:s.className)}),d))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}},b.Item=d.a,t.a=b},qHfc:function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),c=a("TSYQ"),r=a.n(c),s=a("q1tI"),l=a.n(s),o=a("dbZe"),d=a("vUet"),b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.active,s=e.children,b=e.className,u=e.as,m=void 0===u?"li":u,h=e.linkAs,j=void 0===h?o.a:h,p=e.linkProps,f=e.href,O=e.title,x=e.target,v=Object(i.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),y=Object(d.b)(a,"breadcrumb-item");return l.a.createElement(m,Object(n.a)({ref:t},v,{className:r()(y,b,{active:c}),"aria-current":c?"page":void 0}),c?s:l.a.createElement(j,Object(n.a)({},p,{href:f,title:O,target:x}),s))}));b.displayName="BreadcrumbItem",b.defaultProps={active:!1,linkProps:{}},t.a=b}},[["4mae",0,2,4,1,3,5,6,7,8]]]);