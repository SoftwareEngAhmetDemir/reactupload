(this["webpackJsonpmern-stack"]=this["webpackJsonpmern-stack"]||[]).push([[14],{1231:function(e,a,t){"use strict";t.r(a);var l=t(28),n=t.n(l),r=t(37),c=t(2),s=t(6),o=t(0),i=t.n(o),d=t(18),u=t(8),m=t.n(u),p=t(56),f=t(27),b=t(15),h=t(26),g=t(204),E=t(779),v=t(55),y=t(93),j=t(257),O="https://serverbigfilserve.herokuapp.com";a.default=function(e){var a=Object(b.b)(),t=Object(s.a)(a,1)[0],l=Object(f.b)().enqueueSnackbar,u=Object(o.useContext)(d.a),k=u.user,w=u.gState,D=u.seTgState,_=Object(p.g)(),C=Object(o.useState)([]),x=Object(s.a)(C,2),N=x[0],z=x[1],S=Object(o.useState)([]),P=Object(s.a)(S,2),T=P[0],A=P[1],U=Object(o.useState)([]),L=Object(s.a)(U,2),B=L[0],K=L[1],M=Object(o.useState)({username:"",name:"",surname:"",password:"",phone:"",created_user:"",tckn:"",group_id:"",birthday:Date.now(),gsm:"",tel:"",estates:"",docs:"",city:"",neighborhood:"",town:"",zipcode:"",address:""}),G=Object(s.a)(M,2),F=G[0],J=G[1],Y={option:function(e,a){return Object(c.a)(Object(c.a)({},e),{},{border:"1px solid #ebebeb",borderRadius:"4px",height:"100%"})},control:function(){return{width:"80%",height:"40px",textAlign:"center",display:"flex",border:"1px solid #ebebeb",marginTop:"20px"}},singleValue:function(e,a){var t=a.isDisabled?.5:1;return Object(c.a)(Object(c.a)({},e),{},{opacity:t,transition:"opacity 300ms"})}},q=Object(o.useState)([{customers:!1,staffonlyyou:!0,staffcreate:!1,staffedit:!1,stafflist:!1,staffdelete:!1,customersonlyyou:!0,customerscreate:!1,customersedit:!1,customerslist:!1,customersdelete:!1,productsonlyyou:!0,productscreate:!1,productsedit:!1,productslist:!1,productsdelete:!1,bankaccountsonlyyou:!0,bankaccountscreate:!1,bankaccountsedit:!1,bankaccountslist:!1,bankaccountsdelete:!1,customersgrouponlyyou:!0,customersgroupcreate:!1,customersgroupedit:!1,customersgrouplist:!1,customersgroupdelete:!1,invoicesonlyyou:!0,invoicescreate:!1,invoicesedit:!1,invoiceslist:!1,invoicesdelete:!1,paymentsonlyyou:!0,paymentscreate:!1,paymentsedit:!1,paymentslist:!1,paymentsdelete:!1,productsCategoriesonlyyou:!0,productsCategoriescreate:!1,productsCategoriesedit:!1,productsCategorieslist:!1,productsCategoriesdelete:!1}]),R=Object(s.a)(q,2),V=(R[0],R[1]);console.log(k),console.log(F),Object(o.useEffect)((function(){m.a.get(O+"/city").then((function(e){if(e.data.length>0){var a=[];for(var t in e.data)a.push({label:e.data[t].sehir_title,value:[e.data[t].sehir_title,e.data[t].sehir_id,e.data[t].sehir_key]});z(a)}})).catch((function(e){return console.log(e)})),k&&""!==k.id?!0===k.role[0].customers?m.a.get(O+"/staff/customer/".concat(k.id)).then((function(e){J(Object(c.a)(Object(c.a)({},F),{},{username:e.data.username,name:e.data.name,surname:e.data.surname,phone:e.data.phone,tckn:e.data.tckn,group_id:e.data.group_id,birthday:e.data.birthday,tel:e.data.tel,estates:e.data.estates,docs:e.data.docs,zipcode:e.data.zipcode,address:e.data.address,_id:e.data._id,selectedDefaultCity:e.data.city,selectedDefaultNeighborhoods:e.data.neighborhood,selectedDefaultDistrict:e.data.town,files:e.data.files}))})):m.a.get(O+"/staff/".concat(k.id)).then((function(e){J(Object(c.a)(Object(c.a)({},F),{},{username:e.data.username,name:e.data.name,surname:e.data.surname,phone:e.data.phone,tckn:e.data.tckn,group_id:e.data.group_id,birthday:e.data.birthday,tel:e.data.tel,estates:e.data.estates,docs:e.data.docs,zipcode:e.data.zipcode,address:e.data.address,_id:e.data._id,selectedDefaultCity:e.data.city,selectedDefaultNeighborhoods:e.data.neighborhood,selectedDefaultDistrict:e.data.town,files:e.data.files})),V(e.data.role)})):_.push("/")}),[]);var H=function(){var e=Object(r.a)(n.a.mark((function e(a){var r,s,o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=[],F.password&&(n=F._id,d=F.password,!0===k.role[0].customers?m.a.post(O+"/staff/updatePasswordCustomer",{_id:n,password:d}).then((function(e){"success"==e.data.variant?l(t("Password Updated "),{variant:"success"}):l(t("Password Not Updated ")+e.data.messagge,{variant:"error"})})).catch((function(e){return console.log(e)})):!1===k.role[0].customers&&m.a.post(O+"/staff/updatePasswordSuperadmin",{_id:n,password:d}).then((function(e){"success"==e.data.variant?l(t("Password Updated "),{variant:"success"}):l(t("Password Not Updated ")+e.data.messagge,{variant:"error"})})).catch((function(e){return console.log(e)}))),!w.uploadPdf){e.next=10;break}for(console.log(w.uploadPdf),s=new FormData,o=0;o<w.uploadPdf.length;o++)s.append("file",w.uploadPdf[o]);return e.next=9,m.a.post(O+"/uploadimg/uploadimg/userpdf",s).then((function(e){for(var a=0;a<e.data.length;a++){var t=e.data[a].path.replace("\\","/").replace("uploads","/uploads");r.push(t)}})).catch((function(e){console.log("upload fail"+e)}));case 9:D(Object(c.a)(Object(c.a)({},w),{},{uploadPdf:""}));case 10:i={username:F.username,name:F.name,surname:F.surname,phone:F.phone,tckn:F.tckn,group_id:F.group_id,birthday:F.birthday,tel:F.tel,estates:F.estates,docs:F.docs,city:F.selectedDefaultCity,neighborhood:F.selectedDefaultNeighborhoods,town:F.selectedDefaultDistrict,zipcode:F.zipcode,address:F.address,files:r},!0===k.role[0].customers?(console.log(i),m.a.post(O+"/staff/customer/".concat(F._id),i).then((function(e){"error"==e.data.variant?l(t("Staff Not Updated ")+e.data.messagge,{variant:e.data.variant}):l(t("Staff Updated"),{variant:e.data.variant})})).catch((function(e){return console.log(e)}))):m.a.post(O+"/staff/".concat(F._id),i).then((function(e){"error"==e.data.variant?l(t("Staff Not Updated ")+e.data.messagge,{variant:e.data.variant}):l(t("Staff Updated"),{variant:e.data.variant})})).catch((function(e){return console.log(e)}));case 12:case"end":return e.stop()}var n,d}),e)})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement("div",{style:{marginTop:"50px"}},i.a.createElement("section",{id:"profile"},i.a.createElement("div",{className:"container-wide-xl"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"activeTenders"},i.a.createElement("div",{className:"profile-pic"},i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"img/bankLogo/logo-black.png",alt:"#"})),i.a.createElement("span",null,F.name," ",F.surname),i.a.createElement("button",null,"Profili G\xfcncelle")),i.a.createElement("div",{className:" profile-menu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{className:"active",href:"#"},i.a.createElement("img",{src:"#",alt:""}),i.a.createElement("span",null,"Aktif \u0130haleler"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"#",alt:""}),i.a.createElement("span",null,"Kat\u0131ld\u0131\u011f\u0131m \u0130haleler"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"#",alt:""}),i.a.createElement("span",null,"Kazand\u0131\u011f\u0131m \u0130haleler"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"#",alt:""}),i.a.createElement("span",null,"Takibe Ald\u0131\u011f\u0131m \u0130haleler"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"#",alt:""}),i.a.createElement("span",null,"Pasif \u0130haleler"))))))),i.a.createElement("div",{className:"col-md-9 activeTenders"},i.a.createElement("div",{className:"row"},i.a.createElement("h1",null,"Profile"),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"row"},i.a.createElement("form",{id:"profile-information",action:"",onSubmit:H},i.a.createElement("h3",null,"Ki\u015fisel Bilgiler"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("label",null,"Ad\u0131n\u0131z"),i.a.createElement("input",{type:"text",placeholder:"Ad\u0131n\u0131z",value:F.name,onChange:function(e){J(Object(c.a)(Object(c.a)({},F),{},{name:e.target.value}))}})),i.a.createElement("li",null,i.a.createElement("label",null,"Soyad\u0131n\u0131z"),i.a.createElement("input",{type:"text",placeholder:"Soyad\u0131n\u0131z",value:F.surname,onChange:function(e){J(Object(c.a)(Object(c.a)({},F),{},{surname:e.target.value}))}})),i.a.createElement("li",null,i.a.createElement("label",null,"Cinsiyet"),i.a.createElement("ul",null,i.a.createElement("li",{style:{width:"100%"}},i.a.createElement("select",null,i.a.createElement("option",null,"Kad\u0131n"))))),i.a.createElement("li",null," ",i.a.createElement("label",null,"Do\u011fum Tarihi"),i.a.createElement(g.b,{utils:v.a,locale:y.a},i.a.createElement(E.b,{style:{width:"%100",height:"40px",display:"block",marginTop:"0"},id:"date-picker-dialog",format:"dd/MM/yyyy",maxDate:new Date,value:F.birthday||"",onChange:function(e){return J(Object(c.a)(Object(c.a)({},F),{},{birthday:e}))}}))),i.a.createElement("li",null,i.a.createElement("label",null,"Cep Telefonu"),i.a.createElement("input",{type:"text",value:F.phone||"",onChange:function(e){J(Object(c.a)(Object(c.a)({},F),{},{phone:e.target.value}))}})),i.a.createElement("li",null,i.a.createElement("label",null,"\u0130\u015f Telefonu"),i.a.createElement("input",{type:"text",value:F.tel||"",onChange:function(e){J(Object(c.a)(Object(c.a)({},F),{},{tel:e.target.value}))}}))),i.a.createElement("h3",null,"Adres Bilgileri"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("label",null,"Adres Ba\u015fl\u0131\u011f\u0131"),i.a.createElement("input",{type:"text",value:F.address||"",onChange:function(e){J(Object(c.a)(Object(c.a)({},F),{},{address:e.target.value}))}})),i.a.createElement("li",null,i.a.createElement("label",null,"\u0130l"),i.a.createElement(h.a,{styles:Y,placeholder:t("\u015eehir Se\xe7iniz"),value:F.selectedDefaultCity||"",options:N,onChange:function(e){m.a.get(O+"/city/district/"+e.value[2]).then((function(e){if(e.data.length>0){var a=[];for(var t in e.data)a.push({label:e.data[t].ilce_title,value:[e.data[t].ilce_title,e.data[t].ilce_id,e.data[t].ilce_key]});A(a)}})).catch((function(e){return console.log(e)})),J(Object(c.a)(Object(c.a)({},F),{},{selectedDefaultCity:[{label:e.label,value:e.label}]}))}})),i.a.createElement("li",null,i.a.createElement("label",null,"\u0130l\xe7e"),i.a.createElement(h.a,{styles:Y,placeholder:t("\u0130l\xe7e Se\xe7iniz"),value:F.selectedDefaultDistrict||"",options:T,onChange:function(e){m.a.get(O+"/city/neighborhood/"+e.value[2]).then((function(e){if(e.data.length>0){var a=[];for(var t in e.data)a.push({label:e.data[t].mahalle_title,value:[e.data[t].mahalle_title,e.data[t].mahalle_id,e.data[t].mahalle_ilcekey]});K(a)}})).catch((function(e){return console.log(e)})),J(Object(c.a)(Object(c.a)({},F),{},{selectedDefaultDistrict:[{label:e.label,value:e.label}]}))}})),i.a.createElement("li",null,i.a.createElement("label",null,"Mahalle"),i.a.createElement(h.a,{styles:Y,placeholder:t("Mahalle Se\xe7iniz"),value:F.selectedDefaultNeighborhoods||"",options:B,onChange:function(e){J(Object(c.a)(Object(c.a)({},F),{},{selectedDefaultNeighborhoods:[{label:e.label,value:e.label}]}))}}))),i.a.createElement("h3",null,"\u015eifre"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("label",null,"E-Posta"),i.a.createElement("input",{type:"mail",value:F.username,onChange:function(e){J(Object(c.a)(Object(c.a)({},F),{},{username:e.target.value}))}})),i.a.createElement("li",null,i.a.createElement("label",null,"\u015eifre"),i.a.createElement("input",{type:"password",placeholder:"*******",value:F.password,onChange:function(e){J(Object(c.a)(Object(c.a)({},F),{},{password:e.target.value}))}}))),i.a.createElement("button",{style:{marginTop:"25px"},type:"submit"},"G\xdcNCELLE")))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"notes"},i.a.createElement("ul",null,i.a.createElement("li",{className:"title"},"\u015eifrenizi G\xfcncellemek i\xe7in"),i.a.createElement("li",null,"Lorem \u0130psum Dolor Sit Amet"),i.a.createElement("li",null,"Lorem \u0130psum Dolor Sit Amet"),i.a.createElement("li",null,"Lorem \u0130psum Dolor Sit Amet")),i.a.createElement("span",null,"L\xfctfen gerekli d\xfczenlemeler i\xe7in bizimle irtiabata ge\xe7iniz. \u0130rtibat numaram\u0131z:"," ",i.a.createElement("strong",null,"+90 216 515 40 05"))),i.a.createElement("div",{style:{width:"70%",marginTop:"25px"}}," ",i.a.createElement("p",{style:{fontSize:"15px"}},"Dosyalar\u0131n\u0131z\u0131 Buradan Y\xfckleyebilirsiniz"),i.a.createElement(j.a,{buttonText:"PDF Y\xfckleyin",single:!1}))," ")))))))}}}]);