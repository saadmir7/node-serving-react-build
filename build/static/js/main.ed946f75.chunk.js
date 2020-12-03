(this.webpackJsonpsalesforcetooracleinterface=this.webpackJsonpsalesforcetooracleinterface||[]).push([[0],{19:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},21:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(7),a(3)),c=a(17),s=a(18),o=a(2),i=a(22),m=a(20),d=a(4),u=a.n(d),h=a(5),b=(a(48),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmitDate=function(e){if(n.setState({btnState:!0}),e.preventDefault(),!n.state.pin)return alert("Please Enter a Valid PIN to Continue..."),void n.setState({btnState:!1});u()({method:"post",url:h.URL.Node+"SF/date-wise",data:{pin:n.state.pin,stDate:n.state.stDate,enDate:n.state.enDate}}).then((function(e){"invalidPIN"===e.data.status?alert("Invalid PIN..."):"completed"===e.data.status?(alert("Request Succeeded...\nThere are "+e.data.dataCount+" Records Exists in Salesforce For Selected Date Frame i.e "+n.state.stDate+" to "+n.state.enDate+"\n It will be updated in Oracle Database in approx "+(e.data.dataCount/2e3+1).toFixed()+" minutes..."),window.location.reload()):"alreadyRunning"===e.data.status?alert("Previous Request is already in process, Please wait for approx 2-20 Minutes..."):"errorOccurred"===e.data.status?alert("An Error Occurred, Contact IT Team.."):alert("Unknown Error Occurred..."),n.setState({btnState:!1})})).catch((function(e){alert("Unknown Error Occurred..."),n.setState({btnState:!1})}))},n.handleSubmitInv=function(e){if(n.setState({btnState:!0}),e.preventDefault(),!n.state.pin)return alert("Please enter a valid PIN to continue..."),void n.setState({btnState:!1});u()({method:"post",url:h.URL.Node+"SF/inv-number",data:{pin:n.state.pin,invName:n.state.invName}}).then((function(e){"invalidPIN"===e.data.status?alert("Invalid PIN..."):"completed"===e.data.status?(alert("Request Succeeded, if "+n.state.invName+" Exists in Salesforce data, it will be updated in Oracle Database in about 2 minutes..."),window.location.reload()):"alreadyRunning"===e.data.status?alert("Previous Request is already in process, Please wait for approx 2-20 Minutes..."):"errorOccurred"===e.data.status?alert("An Error Occurred, Contact IT Team.."):alert("Unknown Error Occurred..."),n.setState({btnState:!1})})).catch((function(e){alert("Unknown Error Occurred..."),n.setState({btnState:!1})}))},n.handleInputChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,r=t.name;if("stDate"===e.target.name){var c,s=new Date(a);s.setDate(s.getDate()+29),n.setState((c={},Object(l.a)(c,r,a),Object(l.a)(c,"enDate",s.toISOString().split("T")[0]),c))}else n.setState(Object(l.a)({},r,a))},n.state={pin:null,stDate:null,enDate:null,invName:null,btnState:!1,currentStatus:null},n.handleSubmitDate=n.handleSubmitDate.bind(Object(o.a)(n)),n.handleSubmitInv=n.handleSubmitInv.bind(Object(o.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u()({method:"get",url:h.URL.Node+"SF/currentStatus"}).then((function(t){"inProgress"===t.data.status?e.setState({currentStatus:"Busy \u274e"}):"notRunning"===t.data.status?e.setState({currentStatus:"Free \u2705"}):e.setState({currentStatus:"API Not Connected \u274c"})})).catch((function(t){console.log(t),e.setState({currentStatus:"API Not Connected \u274c"}),e.setState({btnState:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container py-3"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"text-center mb-3"},"MTBC/Care Cloud - Salesforce/Oracle Integration"),r.a.createElement("nav",{className:"btn-toolbar justify-content-center",role:"toolbar","aria-label":"Toolbar with button groups"}),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",{className:"anchor",id:"formLogin"}),r.a.createElement("h5",null,"Status: ",this.state.currentStatus),r.a.createElement("div",{className:"card card-outline-secondary"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"mb-0"},"PIN Authentication")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{autoComplete:"off",className:"form",id:"formLogin",name:"formLogin",role:"form"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"pin",className:"col-2 col-form-label"},"PIN"),r.a.createElement("div",{className:"col-10"},r.a.createElement("input",{autoComplete:"new-password",value:this.state.pin,className:"form-control",name:"pin",id:"pin",required:!0,type:"password",onChange:this.handleInputChange}))),r.a.createElement("p",null,"Required field, please enter a valid PIN...")))))),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card card-outline-secondary"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"mb-0"},"Search By Date Range")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{autoComplete:"off",className:"form",role:"form",onSubmit:this.handleSubmitDate},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"stDate",className:"col-3 col-form-label"},"Start Date"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{className:"form-control",type:"date",min:"2020-06-01",name:"stDate",id:"stDate",required:!0,value:this.state.stDate,onChange:this.handleInputChange}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"enDate",className:"col-3 col-form-label",disabled:!0},"End Date"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{className:"form-control",type:"date",name:"enDate",id:"enDate",disabled:!0,value:this.state.enDate,onChange:this.handleInputChange}))),r.a.createElement("p",null,"Please select 'Start Date', 'End Date' will be automatically selected at range of 30 days..."),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-m float-right",type:"submit",disabled:this.state.btnState},"Submit"))))))),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",{className:"anchor",id:"formChangePassword"}),r.a.createElement("div",{className:"card card-outline-secondary"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"mb-0"},"Search By Invoice Name")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{autoComplete:"off",className:"form",role:"form",onSubmit:this.handleSubmitInv},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"invName",className:"col-3 col-form-label"},"Invoice Name"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{className:"form-control",id:"invName",name:"invName",required:!0,type:"text",value:this.state.invName,onChange:this.handleInputChange}))),r.a.createElement("p",null,"Please enter a valid invoice name - [INV-#########]"),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-m float-right",type:"submit",disabled:this.state.btnState},"Submit"))))))),r.a.createElement("hr",{className:"mb-4"})))))}}]),a}(n.Component));t.a=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}},23:function(e,t,a){e.exports=a(24)},24:function(e,t,a){"use strict";a.r(t),function(e){var t=a(0),n=a.n(t),r=a(16),l=a.n(r),c=(a(30),a(21)),s=a(19);e.SC_DISABLE_SPEEDY=!0,l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.a,null)),document.getElementById("root")),s.a()}.call(this,a(25))},30:function(e,t,a){},5:function(e,t){t.URL={Node:"http://172.16.6.178:7007/"}},7:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.ed946f75.chunk.js.map