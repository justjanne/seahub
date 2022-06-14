(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[13],{1585:function(e,t,a){a(55),e.exports=a(1710)},1586:function(e,t,a){},1710:function(e,t,a){"use strict";a.r(t);var i=a(6),s=a(7),n=a(9),r=a(8),c=a(2),o=a.n(c),l=a(24),b=a.n(l),d=a(17),h=a(13),m=a.n(h),j=a(5),u=a(1),g=a(10),p=a(15),O=a(38),f=a(20),x=a(52),D=a(328),v=a(4),P=a(254),w=a.n(P),C=a(11),L=a(0),q=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleInputChange=function(e){s.setState({inputValue:e})},s.formSubmit=function(){var e=s.state.inputValue.map((function(e,t){return e.value})).join(","),t=s.props,a=t.repoID,i=t.commitID;s.setState({submitBtnDisabled:!0}),g.a.updateRepoCommitLabels(a,i,e).then((function(e){s.props.updateCommitLabels(e.data.revisionTags.map((function(e,t){return e.tag}))),s.props.toggleDialog(),C.a.success(Object(u.qb)("Successfully edited labels."))})).catch((function(e){var t=j.a.getErrorMsg(e);s.setState({formErrorMsg:t,submitBtnDisabled:!1})}))},s.state={inputValue:s.props.commitLabels.map((function(e,t){return{label:e,value:e}})),submitBtnDisabled:!1},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.formErrorMsg;return Object(L.jsxs)(v.u,{isOpen:!0,centered:!0,toggle:this.props.toggleDialog,children:[Object(L.jsx)(v.x,{toggle:this.props.toggleDialog,children:Object(u.qb)("Edit labels")}),Object(L.jsx)(v.v,{children:Object(L.jsxs)(o.a.Fragment,{children:[Object(L.jsx)(w.a,{defaultValue:this.props.commitLabels.map((function(e,t){return{label:e,value:e}})),isMulti:!0,onChange:this.handleInputChange,placeholder:""}),e&&Object(L.jsx)("p",{className:"error m-0 mt-2",children:e})]})}),Object(L.jsx)(v.w,{children:Object(L.jsx)("button",{className:"btn btn-primary",disabled:this.state.submitBtnDisabled,onClick:this.formSubmit,children:Object(u.qb)("Submit")})})]})}}]),a}(o.a.Component),M=(a(132),a(149),a(1586),window.app.pageOptions),y=M.repoID,N=M.repoName,S=M.userPerm,I=M.showLabel,k=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getItems=function(e){g.a.getRepoHistory(y,e,s.state.perPage).then((function(t){s.setState({isLoading:!1,currentPage:e,items:t.data.data,hasNextPage:t.data.more})})).catch((function(e){s.setState({isLoading:!1,errorMsg:j.a.getErrorMsg(e,!0)})}))},s.resetPerPage=function(e){s.setState({perPage:e},(function(){s.getItems(1)}))},s.onSearchedClick=function(e){if(!0===e.is_dir){var t=u.qc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(d.c)(t,{repalce:!0})}else{var a=u.qc+"lib/"+e.repo_id+"/file"+j.a.encodePath(e.path);window.open("about:blank").location.href=a}},s.goBack=function(e){e.preventDefault(),window.history.back()},s.state={isLoading:!0,errorMsg:"",currentPage:1,perPage:25,hasNextPage:!1,items:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new URL(window.location).searchParams,a=this.state,i=a.currentPage,s=a.perPage;this.setState({perPage:parseInt(t.get("per_page")||s),currentPage:parseInt(t.get("page")||i)},(function(){e.getItems(e.state.currentPage)}))}},{key:"render",value:function(){return Object(L.jsx)(o.a.Fragment,{children:Object(L.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(L.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[Object(L.jsx)("a",{href:u.qc,children:Object(L.jsx)("img",{src:u.Ob+u.Jb,height:u.Ib,width:u.Kb,title:u.rc,alt:"logo"})}),Object(L.jsx)(x.a,{onSearchedClick:this.onSearchedClick})]}),Object(L.jsx)("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto",children:Object(L.jsx)("div",{className:"row",children:Object(L.jsxs)("div",{className:"col-md-10 offset-md-1",children:[Object(L.jsx)("h2",{dangerouslySetInnerHTML:{__html:j.a.generateDialogTitle(Object(u.qb)("{placeholder} Modification History"),N)}}),Object(L.jsx)("a",{href:"#",className:"go-back",title:Object(u.qb)("Back"),onClick:this.goBack,role:"button","aria-label":Object(u.qb)("Back"),children:Object(L.jsx)("span",{className:"fas fa-chevron-left"})}),"rw"==S&&Object(L.jsx)("p",{className:"tip",children:Object(u.qb)("Tip: a snapshot will be generated after modification, which records the library state after the modification.")}),Object(L.jsx)(_,{isLoading:this.state.isLoading,errorMsg:this.state.errorMsg,items:this.state.items,currentPage:this.state.currentPage,hasNextPage:this.state.hasNextPage,curPerPage:this.state.perPage,resetPerPage:this.resetPerPage,getListByPage:this.getItems})]})})})]})})}}]),a}(o.a.Component),_=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getPreviousPage=function(){s.props.getListByPage(s.props.currentPage-1)},s.getNextPage=function(){s.props.getListByPage(s.props.currentPage+1)},s.theadData=I?[{width:"43%",text:Object(u.qb)("Description")},{width:"12%",text:Object(u.qb)("Time")},{width:"9%",text:Object(u.qb)("Modifier")},{width:"12%",text:"".concat(Object(u.qb)("Device")," / ").concat(Object(u.qb)("Version"))},{width:"12%",text:Object(u.qb)("Labels")},{width:"12%",text:""}]:[{width:"43%",text:Object(u.qb)("Description")},{width:"15%",text:Object(u.qb)("Time")},{width:"15%",text:Object(u.qb)("Modifier")},{width:"15%",text:"".concat(Object(u.qb)("Device")," / ").concat(Object(u.qb)("Version"))},{width:"12%",text:""}],s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.errorMsg,i=e.items,s=e.curPerPage,n=e.currentPage,r=e.hasNextPage;return t?Object(L.jsx)(p.a,{}):a?Object(L.jsx)("p",{className:"error mt-6 text-center",children:a}):Object(L.jsxs)(o.a.Fragment,{children:[Object(L.jsxs)("table",{className:"table-hover",children:[Object(L.jsx)("thead",{children:Object(L.jsx)("tr",{children:this.theadData.map((function(e,t){return Object(L.jsx)("th",{width:e.width,children:e.text},t)}))})}),Object(L.jsx)("tbody",{children:i.map((function(e,t){return e.isFirstCommit=1==n&&0==t,e.showDetails=r||t!=i.length-1,Object(L.jsx)(B,{item:e},t)}))})]}),Object(L.jsx)(O.a,{gotoPreviousPage:this.getPreviousPage,gotoNextPage:this.getNextPage,currentPage:n,hasNextPage:r,curPerPage:s,resetPerPage:this.props.resetPerPage})]})}}]),a}(o.a.Component),B=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleMouseOver=function(){s.setState({isIconShown:!0})},s.handleMouseOut=function(){s.setState({isIconShown:!1})},s.showCommitDetails=function(e){e.preventDefault(),s.setState({isCommitDetailsDialogOpen:!s.state.isCommitDetailsDialogOpen})},s.toggleCommitDetailsDialog=function(){s.setState({isCommitDetailsDialogOpen:!s.state.isCommitDetailsDialogOpen})},s.editLabel=function(e){e.preventDefault(),s.setState({isCommitLabelUpdateDialogOpen:!s.state.isCommitLabelUpdateDialogOpen})},s.toggleLabelEditDialog=function(){s.setState({isCommitLabelUpdateDialogOpen:!s.state.isCommitLabelUpdateDialogOpen})},s.updateLabels=function(e){s.setState({labels:e})},s.state={labels:s.props.item.tags,isIconShown:!1,isCommitLabelUpdateDialogOpen:!1,isCommitDetailsDialogOpen:!1},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item,t=this.state,a=t.isIconShown,i=t.isCommitLabelUpdateDialogOpen,s=t.isCommitDetailsDialogOpen,n=t.labels,r="";return r=e.email?e.second_parent_id?Object(u.qb)("None"):Object(L.jsx)("a",{href:"".concat(u.qc,"profile/").concat(encodeURIComponent(e.email),"/"),children:e.name}):Object(u.qb)("Unknown"),Object(L.jsxs)(o.a.Fragment,{children:[Object(L.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,onFocus:this.handleMouseOver,children:[Object(L.jsxs)("td",{children:[e.description,e.showDetails&&Object(L.jsx)("a",{href:"#",className:"details",onClick:this.showCommitDetails,role:"button",children:Object(u.qb)("Details")})]}),Object(L.jsx)("td",{title:m()(e.time).format("LLLL"),children:m()(e.time).format("YYYY-MM-DD")}),Object(L.jsx)("td",{children:r}),Object(L.jsx)("td",{children:e.client_version?"".concat(e.device_name," / ").concat(e.client_version):"API / --"}),I&&Object(L.jsxs)("td",{children:[n.map((function(e,t){return Object(L.jsx)("span",{className:"commit-label",children:e},t)})),"rw"==S&&Object(L.jsx)("a",{href:"#",role:"button",className:"attr-action-icon fa fa-pencil-alt ".concat(a?"":"invisible"),title:Object(u.qb)("Edit"),"aria-label":Object(u.qb)("Edit"),onClick:this.editLabel})]}),Object(L.jsx)("td",{children:"rw"==S&&(e.isFirstCommit?Object(L.jsx)("span",{className:a?"":"invisible",children:Object(u.qb)("Current Version")}):Object(L.jsx)("a",{href:"".concat(u.qc,"repo/").concat(y,"/snapshot/?commit_id=").concat(e.commit_id),className:a?"":"invisible",children:Object(u.qb)("View Snapshot")}))})]}),s&&Object(L.jsx)(f.a,{children:Object(L.jsx)(D.a,{repoID:y,commitID:e.commit_id,commitTime:e.time,toggleDialog:this.toggleCommitDetailsDialog})}),i&&Object(L.jsx)(f.a,{children:Object(L.jsx)(q,{repoID:y,commitID:e.commit_id,commitLabels:n,updateCommitLabels:this.updateLabels,toggleDialog:this.toggleLabelEditDialog})})]})}}]),a}(o.a.Component);b.a.render(Object(L.jsx)(k,{}),document.getElementById("wrapper"))},328:function(e,t,a){"use strict";var i=a(6),s=a(7),n=a(9),r=a(8),c=a(2),o=a.n(c),l=a(4),b=a(13),d=a.n(b),h=a(1),m=a(10),j=a(5),u=a(15),g=(a(523),a(0)),p=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={isLoading:!0,errorMsg:""},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.repoID,i=t.commitID;m.a.getCommitDetails(a,i).then((function(t){e.setState({isLoading:!1,errorMsg:"",commitDetails:t.data})})).catch((function(t){var a=j.a.getErrorMsg(t);e.setState({isLoading:!1,errorMsg:a})}))}},{key:"render",value:function(){var e=this.props,t=e.toggleDialog;e.commitTime;return Object(g.jsxs)(l.u,{isOpen:!0,centered:!0,toggle:t,children:[Object(g.jsx)(l.x,{toggle:t,children:Object(h.qb)("Modification Details")}),Object(g.jsxs)(l.v,{children:[Object(g.jsx)("p",{className:"small",children:d()(this.props.commitTime).format("YYYY-MM-DD HH:mm:ss")}),Object(g.jsx)(O,{data:this.state})]})]})}}]),a}(o.a.Component),O=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).renderDetails=function(e){for(var t=[{type:"new",title:Object(h.qb)("New files")},{type:"removed",title:Object(h.qb)("Deleted files")},{type:"renamed",title:Object(h.qb)("Renamed or Moved files")},{type:"modified",title:Object(h.qb)("Modified files")},{type:"newdir",title:Object(h.qb)("New directories")},{type:"deldir",title:Object(h.qb)("Deleted directories")}],a=!0,i=0,s=t.length;i<s;i++)if(e[t[i].type].length){a=!1;break}return a?Object(g.jsx)("p",{children:e.cmt_desc}):Object(g.jsx)(o.a.Fragment,{children:t.map((function(t,a){if(e[t.type].length)return Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsx)("h6",{children:t.title}),Object(g.jsx)("ul",{children:e[t.type].map((function(e,t){return Object(g.jsx)("li",{dangerouslySetInnerHTML:{__html:e},className:"commit-detail-item"},t)}))})]},a)}))})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.isLoading,a=e.errorMsg,i=e.commitDetails;return t?Object(g.jsx)(u.a,{}):a?Object(g.jsx)("p",{className:"error mt-4 text-center",children:a}):this.renderDetails(i)}}]),a}(o.a.Component);t.a=p},523:function(e,t,a){}},[[1585,1,0]]]);
//# sourceMappingURL=repoHistory.chunk.js.map