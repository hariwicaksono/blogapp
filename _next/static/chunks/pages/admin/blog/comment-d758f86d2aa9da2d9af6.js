_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"Mf/K":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/blog/comment",function(){return n("WXSg")}])},WXSg:function(e,t,n){"use strict";n.r(t);var a=n("h4VS"),r=n("1OyB"),i=n("vuIU"),o=n("JX7q"),c=n("Ji7U"),s=n("md7G"),u=n("foSv"),l=n("rePB"),d=n("nKUr"),b=n("q1tI"),f=n("g4pe"),j=n.n(f),h=(n("20a2"),n("YFqc"),n("HuT5"),n("d0xl")),p=n("CafY"),m=n("S7XH"),x=n("FGyW"),O=n("QojX"),g=n("cWnB"),v=n("7vrA"),y=n("XWsC"),w=n("3Z9Z"),C=n("JI6e"),S=n("6xyR"),k=n("KYPV"),_=(n("UGp+"),n("Y1ui")),T=n.n(_),F=n("d76Q"),R=n.n(F),X=n("vOnD"),B=n("baXo"),N=n.n(B);function D(){var e=Object(a.a)(["\n      padding: 10px;\n      display: block;\n      width: 100%;\n\n      p {\n        font-size: 14px;\n        font-weight: 400;\n        word-break: break-all;\n      }\n    "]);return D=function(){return e},e}function I(){var e=Object(a.a)(["\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px;\n      height: 34px;\n      width: 32px;\n      text-align: center;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    "]);return I=function(){return e},e}function K(){var e=Object(a.a)(["\n      font-size: 14px;\n      height: 34px;\n      width: 250px;\n      border-radius: 3px;\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border: 1px solid #e5e5e5;\n      padding: 0 32px 0 16px;\n      &:hover {\n        cursor: pointer;\n      }\n    "]);return K=function(){return e},e}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var z={lines:13,length:20,width:10,radius:30,scale:.35,corners:1,color:"#fff",opacity:.25,rotate:0,direction:1,speed:1,trail:60,fps:20,zIndex:2e9,top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"},H=function(e){Object(c.a)(n,e);var t=P(n);function n(e){var a;return Object(r.a)(this,n),a=t.call(this,e),Object(l.a)(Object(o.a)(a),"componentDidMount",(function(){m.a.GetComment().then((function(e){e.data.length>0?setTimeout((function(){return a.setState({Comment:e.data,loading:!1})}),100):setTimeout((function(){return a.setState({error:"No Data Found",loading:!1})}),100)})).catch((function(e){console.log(e.response)}))})),a.state={Comment:[],url:Object(h.a)(),loading:!0},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=[{name:"Nama",sortable:!0,cell:function(e){return Object(d.jsxs)(d.Fragment,{children:[e.name," - ",e.email]})}},{name:"Body",selector:"body",sortable:!0},{name:"Aktif",sortable:!0,cell:function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(k.a,{initialValues:{id:e.id,active:e.active},onSubmit:function(e,t){alert("Apakah anda yakin akan mengubah data ini?"),m.a.PutComment({id:e.id,active:e.active?"true":""}).then((function(e){1===e.status&&x.b.success("Data berhasil disimpan",{position:"top-center"})})).catch((function(e){console.log(e.response),x.b.warn("Tidak ada data yang diubah",{position:"top-center"})})),setTimeout((function(){t.setSubmitting(!1)}),1e3)},children:function(t){var n=t.handleSubmit,a=t.handleChange,r=t.handleBlur,i=(t.setFieldValue,t.values);t.touched,t.errors,t.isSubmitting;return Object(d.jsx)(O.a,{onChange:n,children:Object(d.jsx)(O.a.Group,{children:Object(d.jsx)(O.a.Check,{type:"switch",id:"custom-switch"+e.id,name:"active",value:i.active,label:"Aktifkan?",defaultChecked:e.active,onChange:a,onBlur:r,checked:i.active})})})}})})}}],n={rows:{style:{fontSize:"1rem"}},headCells:{style:{fontSize:"1rem"}},cells:{style:{fontSize:"1rem"}}},a=X.default.input(K()),r=Object(X.default)(g.a)(I()),i=X.default.div(D()),o=function(e){var t=e.data;return Object(d.jsx)(i,{children:Object(d.jsxs)("p",{children:["Tanggal dibuat: ",t.created_at?t.created_at:"-",Object(d.jsx)("br",{}),"Tanggal diubah: ",t.updated_at?t.updated_at:"-",Object(d.jsx)("br",{})]})})},c=function(e){var t=e.filterText,n=e.onFilter,i=e.onClear;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a,{id:"search",type:"text",placeholder:"Filter By Body","aria-label":"Search Input",value:t,onChange:n}),Object(d.jsx)(r,{variant:"secondary",type:"button",onClick:i,children:"X"})]})},s=function(){var a=Object(b.useState)(""),r=a[0],i=a[1],s=Object(b.useState)(!1),u=s[0],l=s[1],f=e.state.Comment.filter((function(e){return e.body&&e.body.toLowerCase().includes(r.toLowerCase())})),j=Object(b.useMemo)((function(){return Object(d.jsx)(c,{onFilter:function(e){return i(e.target.value)},onClear:function(){r&&(l(!u),i(""))},filterText:r})}),[r,u]);return Object(d.jsx)(R.a,{title:"Semua Komentar",columns:t,data:f,pagination:!0,paginationResetDefaultPage:u,subHeader:!0,subHeaderComponent:j,persistTableHead:!0,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(d.jsx)(o,{}),customStyles:n})};return Object(d.jsxs)(p.a,{admin:!0,children:[Object(d.jsx)(j.a,{children:Object(d.jsxs)("title",{children:["Komentar Blog - ",p.c]})}),Object(d.jsxs)(v.a,{fluid:!0,children:[Object(d.jsxs)(y.a,{className:"my-3",children:[Object(d.jsx)(y.a.Item,{children:"Home"}),Object(d.jsx)(y.a.Item,{active:!0,children:"Komentar"})]}),Object(d.jsx)(w.a,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(S.a,{body:!0,children:this.state.loading?Object(d.jsx)(T.a,{options:z,className:"spinner"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s,{}),Object(d.jsx)(N.a,{ref:function(t){e.dialog=t}})]})})})})]})]})}}]),n}(b.Component);t.default=H}},[["Mf/K",1,2,4,0,3,5,6,7,8,10]]]);