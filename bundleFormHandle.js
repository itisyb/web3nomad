"use strict";(()=>{var f=()=>document.documentElement.getAttribute("data-wf-site");var S=async a=>{var i,p,m;let{Webflow:n}=window;if(!(!n||!("destroy"in n)||!("ready"in n)||!("require"in n))&&!(a&&!a.length)){if(a||(n.destroy(),n.ready()),!a||a.includes("ix2")){let l=n.require("ix2");if(l){let{store:c,actions:y}=l,{eventState:s}=c.getState().ixSession,t=Object.entries(s);a||l.destroy(),l.init(),await Promise.all(t.map(u=>c.dispatch(y.eventStateChanged(...u))))}}if(!a||a.includes("commerce")){let l=n.require("commerce"),c=f();l&&c&&(l.destroy(),l.init({siteId:c,apiUrl:"https://render.webflow.com"}))}return a!=null&&a.includes("lightbox")&&((i=n.require("lightbox"))==null||i.ready()),a!=null&&a.includes("slider")&&((p=n.require("slider"))==null||p.redraw()),a!=null&&a.includes("tabs")&&((m=n.require("tabs"))==null||m.redraw()),new Promise(l=>n.push(()=>l(void 0)))}};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let a={1:0,2:15,3:15,4:16,5:16,6:17.05,7:17.05,8:18.15,9:18.15,10:19.3,11:19.3,12:20.5,13:20.5,14:21.75,15:21.75,16:23.05,17:23.05,18:24.4,19:24.4,20:25.8,21:25.8,22:27.25,23:27.25,24:28.75,25:28.75,26:30.3,27:30.3,28:31.9,29:31.9,30:33.55,31:33.55,32:35.25,33:35.25,34:37,35:37,36:38.8,37:38.8,38:40.65,39:40.65,40:42.55,41:42.55,42:44.5,43:44.5,44:46.5,45:46.5,46:48.55,47:48.55,48:50.65,49:50.65,50:52.8},n=(o,e)=>(console.log(o),Math.round(.01*e*o*(100-a[e])*100)/100),i=document.querySelector("#numberOfJobs"),p=document.querySelectorAll('input[type=radio][name="selected-plan-wrapper"]'),m=document.querySelector("[credit-left]"),l=document.querySelector("[add-btn]"),c=document.querySelector("[del-btn]"),y=document.querySelectorAll(".top-job-item").length,s=document.querySelector('[name="selected-plan-wrapper"]:checked')!=null?document.querySelector('[name="selected-plan-wrapper"]:checked').value:document.querySelector('[name="selected-plan-wrapper"]').value,t=1,u=1;y==5&&(document.querySelector(".absolute-pointer--premium").classList.remove("hide"),document.querySelector(".is--premium").style.pointerEvents="none"),document.querySelector("[discount_percent]").innerHTML="0",document.querySelector("[amount_saved]").innerHTML="0",$('input[name="CreditsLeft"]').val(u-t),document.querySelector("[add-btn]").style.pointerEvents="none",document.querySelector("[add-btn]").style.opacity="50%",i.value=1,p.forEach(o=>{o.addEventListener("click",async e=>{if(console.log("changed plan"),e.target)if(e.target.value=="749"){if(u>1){alert("You have more than 1 jobs please select the number of jobs to 1");return}document.querySelector(".fs-slider--wrapper").style.pointerEvents="none",document.querySelector("[add-btn]").style.pointerEvents="none",document.querySelector("[add-btn]").style.opacity="50%",document.querySelector('input[name="SelectedPlan"]').value=e.target.value,document.querySelector("#submit-btn").value="Post a job $"+n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector('input[name="FinalAmount"]').value=n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector("[final_amount]").innerHTML=n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector("[amount_saved]").innerHTML=Math.round((e.target.value*parseInt(document.querySelector("#numberOfJobs").value)-n(e.target.value,document.querySelector("#numberOfJobs").value))*100)/100,s=e.target.value}else u>1?(document.querySelector(".fs-slider--wrapper").style.pointerEvents="auto",document.querySelector("[add-btn]").style.pointerEvents="none",document.querySelector("[add-btn]").style.opacity="50%",document.querySelector('input[name="SelectedPlan"]').value=e.target.value,document.querySelector("#submit-btn").value="Post a job $"+n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector('input[name="FinalAmount"]').value=n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector("[final_amount]").innerHTML=n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector("[amount_saved]").innerHTML=Math.round((e.target.value*parseInt(document.querySelector("#numberOfJobs").value)-n(e.target.value,document.querySelector("#numberOfJobs").value))*100)/100,s=e.target.value):(document.querySelector(".fs-slider--wrapper").style.pointerEvents="auto",document.querySelector("[add-btn]").style.pointerEvents="auto",document.querySelector("[add-btn]").style.opacity="100%",document.querySelector('input[name="SelectedPlan"]').value=e.target.value,document.querySelector("#submit-btn").value="Post a job $"+n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector('input[name="FinalAmount"]').value=n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector("[final_amount]").innerHTML=n(e.target.value,document.querySelector("#numberOfJobs").value),document.querySelector("[amount_saved]").innerHTML=Math.round((e.target.value*parseInt(document.querySelector("#numberOfJobs").value)-n(e.target.value,document.querySelector("#numberOfJobs").value))*100)/100,s=e.target.value)})}),i?i.addEventListener("change",async o=>{var e,d,r,v;o.target&&(u=o.target.value,i.value=o.target.value,y<5?((e=document.querySelector(".absolute-pointer--premium"))==null||e.classList.add("hide"),document.querySelector(".is--premium").style.pointerEvents="auto",o.target.value>1?((d=document.querySelector(".absolute-pointer--single_job"))==null||d.classList.remove("hide"),document.querySelector(".is--premium").style.pointerEvents="none",document.querySelector("[add-btn]").style.pointerEvents="auto",document.querySelector("[add-btn]").style.opacity="100%"):((r=document.querySelector(".absolute-pointer--single_job"))==null||r.classList.add("hide"),document.querySelector(".is--premium").style.pointerEvents="auto",document.querySelector("[add-btn]").style.pointerEvents="none",document.querySelector("[add-btn]").style.opacity="50%")):((v=document.querySelector(".absolute-pointer--premium"))==null||v.classList.remove("hide"),document.querySelector(".is--premium").style.pointerEvents="none"),document.querySelector("[add-btn]").style.pointerEvents="auto",document.querySelector("[add-btn]").style.opacity="100%",b(u,t),document.querySelector("[discount_percent]").innerHTML=a[o.target.value],document.querySelector("[amount_saved]").innerHTML=Math.round((parseInt(document.querySelector('input[name="SelectedPlan').value)*o.target.value-n(parseInt(document.querySelector('input[name="SelectedPlan').value),o.target.value))*100)/100,document.querySelector("[final_amount").innerHTML=n(parseInt(document.querySelector('input[name="SelectedPlan').value),o.target.value),document.querySelector("#submit-btn").value="Post a job $"+n(document.querySelector('input[name="SelectedPlan').value,o.target.value),document.querySelector('input[name="FinalAmount"]').value=n(document.querySelector('input[name="SelectedPlan').value,o.target.value),document.querySelector("input[field=salary]").addEventListener("keyup",function(){q(o.target)}))}):console.error("slider not found");function b(o,e){$('input[name="CreditsLeft"]').val(o-e),m&&(m.innerHTML=`${o-e}`)}function q(o){var e=g(o.val());e==0?o.val(""):o.val(e.toLocaleString())}function g(o){for(var e=o.split(""),d=new Array,r=0;r<e.length;r++)isNaN(e[r])==!1&&d.push(e[r]);return Number(d.join(""))}l==null||l.addEventListener("click",_),c==null||c.addEventListener("click",h);function _(){if(s=="749")return alert("Only avaiable with single job"),!0;if(u<=t)return $("html, body").animate({scrollTop:$(".fs-slider--wrapper").offset().top-140},2e3),alert("Please select more number of jobs in the slider"),!0;{let e=function(){console.log(t),$("#parent-job-wrapper").find('select[custom-jobtags="*"]').select2("destroy");var r=$("#parent-job-wrapper").clone().attr("id","parent-job-wrapper-"+t);$("#parent-job-wrapper").find('select[custom-jobtags="*"]').select2({placeholder:"Select tags"}),r.find(".ql-toolbar").remove(),r.find(".select2").remove(),r.find('input[name="JobTitle_1"]').attr("name","JobTitle_"+t),r.find('select[name="JobExperienceLevel_1"]').attr("name","JobExperienceLevel_"+t),r.find('select[name="JobCountry_1"]').attr("name","JobCountry_"+t),r.find('select[name="JobRegion_1"]').attr("name","JobRegion_"+t),r.find('select[name="JobType_1"]').attr("name","JobType_"+t),r.find('select[name="JobTags_1"]').attr({id:"JobTags_"+t,name:"JobTags_"+t}),r.find('input[name="EmailToApply_1"]').attr("name","EmailToApply_"+t),r.find('input[name="MinSal_1"]').attr("name","MinSal_"+t),r.find('input[name="MaxSal_1"]').attr("name","MaxSal_"+t),r.find('input[name="OptionPayInCrypto_1"]').attr("name","OptionPayInCrypto_"+t),r.find('input[name="MinEq_1"]').attr("name","MinEq_"+t),r.find('input[name="MaxEq_1"]').attr("name","MaxEq_"+t),r.find('input[name="EmailToApply_1"]').attr("name","EmailToApply_"+t),r.find('input[name="WebsiteToApply_1"]').attr("name","WebsiteToApply_"+t),r.find('input[name="IsRemote_1"]').attr("name","IsRemote_"+t),r.find('textarea[name="JobDescription_1"]').attr("name","JobDescription_"+t),r.find("#JobDescription_1").attr("id","JobDescription_"+t),r.find("#Toolbar_1").attr("id","Toolbar_"+t),$('[add-btn="1"]').attr("add-btn",t),$('[del-btn="1"]').attr("del-btn",t),r.find(`select[name="JobTags_${t}"]`).select2({placeholder:"Select tags",maximumSelectionLength:5}),r.find("[clone-job-counter]").each(function(){$(this).text(t)}),$("#jobs-wrapper").append(r)};var o=e;if(u<2)return document.querySelector("[add-btn]").style.pointerEvents="none",document.querySelector("[add-btn]").style.opacity="50%",$("html, body").animate({scrollTop:$(".fs-slider--wrapper").offset().top-140},2e3),alert("Please add more than one job"),!0;document.querySelector("[add-btn]").style.pointerEvents="auto",document.querySelector("[add-btn]").style.opacity="100%",t++,b(u,t),console.log("Creating Dom");async function d(){await e(),console.log("dom_loaded hopefully");var r=new Quill(`#JobDescription_${t}`,{modules:{toolbar:[[{container:`#Tooldbar_${t}`}],[{header:2},{header:3},{header:4}],["bold","italic"],["link","blockquote"],[{list:"ordered"},{list:"bullet"}]]},placeholder:"Add Description",theme:"snow"});window.quill_array.push(r),console.log(window.quill_array)}d(),$("input[field=salary]").on("keyup",function(){q($(this))}),S()}}async function h(){if(t<=1)document.querySelector("[add-btn]").style.pointerEvents="none",document.querySelector("[add-btn]").style.opacity="50%",alert("cannot delete");else{console.log("deleting now");var o=document.getElementsByClassName("parent-job-wrapper");o[o.length-1].remove(),$('[add-btn="1"]').attr("add-btn",t),$('[del-btn="1"]').attr("del-btn",t),t--,b(u,t)}}});})();
