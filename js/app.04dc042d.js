(function(){"use strict";var e={681:function(e,n,t){var o=t(1829),r=t(6166);const a={id:"app"},s={class:"main-content"};function i(e,n,t,o,i,c){const l=(0,r.g2)("ThemeToggleComponent"),h=(0,r.g2)("ShareComponent"),d=(0,r.g2)("SocialMediaLinks"),p=(0,r.g2)("FooterComponent");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(l),(0,r.Lk)("main",s,[(0,r.bF)(h),n[0]||(n[0]=(0,r.Lk)("img",{alt:"App logo",src:"/logo.webp",height:"150",class:"app-logo"},null,-1)),(0,r.bF)(d,{title:"@moriswebdeveloper",description:"Full Stack Web Developer | Technical Support Engineer"})]),(0,r.bF)(p)])}var c=t(7803);const l={class:"container"},h={class:"title"},d={class:"description"},p={class:"links-display"},f={class:"social-link-container"},u={class:"linkedin-link social-link",href:"https://www.linkedin.com/in/moris-iarossi/",target:"_blank",rel:"noopener noreferrer"},k={class:"facebook-link social-link",href:"https://www.facebook.com/moris.iarossi/",target:"_blank",rel:"noopener noreferrer"},g={class:"github-link social-link",href:"http://www.github.com/othryades",target:"_blank",rel:"noopener noreferrer"},b={class:"link-container"},m={class:"link-container"};function v(e,n,t,o,a,s){const i=(0,r.g2)("fa-icon"),v=(0,r.g2)("LinkComponent");return(0,r.uX)(),(0,r.CE)("div",l,[(0,r.Lk)("h3",h,(0,c.v_)(t.title),1),(0,r.Lk)("p",d,(0,c.v_)(t.description),1),(0,r.Lk)("div",p,[(0,r.Lk)("div",f,[(0,r.Lk)("a",u,[(0,r.bF)(i,{icon:"fa-brands fa-2xl fa-linkedin"})]),(0,r.Lk)("a",k,[(0,r.bF)(i,{icon:"fa-brands fa-facebook"})]),(0,r.Lk)("a",g,[(0,r.bF)(i,{icon:"fa-brands fa-2xl fa-github"})])])]),n[0]||(n[0]=(0,r.Lk)("h3",{class:"subtitle"},"Learn More",-1)),(0,r.Lk)("div",b,[(0,r.bF)(v,{image:"/logo.webp",alt:"logo",title:"personal website I",url:"https://moris-dev.surge.sh/"}),(0,r.bF)(v,{image:"/logo.webp",alt:"logo",title:"personal website II",url:"https://moris-dev.surge.sh/"})]),n[1]||(n[1]=(0,r.Lk)("h3",{class:"subtitle"},"Projects",-1)),(0,r.Lk)("div",m,[(0,r.bF)(v,{image:"/image.webp",alt:"logo",title:"WormGate",url:"https://modern-area-incalculable.on-fleek.app/"})])])}const w=["href"],L=["src"],S={class:"link-title"};function y(e,n,t,o,a,s){return(0,r.uX)(),(0,r.CE)("a",{class:"card-link hover-paint",onMouseover:n[0]||(n[0]=e=>o.hovering=!0),onMouseout:n[1]||(n[1]=e=>o.hovering=!1),href:t.url,target:"_blank",rel:"noopener noreferrer"},[(0,r.Lk)("img",{class:"link-img",alt:"logo",width:"20",height:"20",src:t.image},null,8,L),(0,r.Lk)("p",S,(0,c.v_)(t.title),1)],40,w)}var F=t(5302),C={name:"LinkComponent",setup(){const e=(0,F.KR)(!1);return{hovering:e}},props:{image:String,title:String,url:String},methods:{shareDialog(){navigator.share?navigator.share({title:this.title,text:this.title,url:this.url}).then((()=>console.log("Successful share"))).catch((e=>console.log("Error sharing",e))):console.log("Share not supported")}}},x=t(4347);const _=(0,x.A)(C,[["render",y]]);var T=_,E={name:"SocialMediaLinks",props:{title:String,description:String},components:{LinkComponent:T}};const A=(0,x.A)(E,[["render",v],["__scopeId","data-v-abc5d5ec"]]);var j=A;const I={class:"float-container"},M={key:0,class:"dialog-container"},O={class:"dialog"},X={class:"dialog-header"},R={class:"dialog-body"},D=["href"],P=["href"],Q=["href"],V=["href"],W=["href"],Y=["href"],K=["href"],B={id:"copyTextEl"};function H(e,n,t,a,s,i){const l=(0,r.g2)("fa-icon");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",I,[(0,r.Lk)("a",{class:"share-btn",onClick:n[0]||(n[0]=e=>s.show=!s.show)},[(0,r.bF)(l,{icon:"fa-solid fa-share"})])]),s.show?((0,r.uX)(),(0,r.CE)("div",M,[(0,r.Lk)("div",O,[(0,r.Lk)("div",X,[n[3]||(n[3]=(0,r.Lk)("h4",null,"Share this",-1)),(0,r.Lk)("a",{class:"close-btn",onClick:n[1]||(n[1]=e=>s.show=!s.show)},[(0,r.bF)(l,{icon:"fa-solid fa-x"})])]),(0,r.Lk)("div",R,[(0,r.Lk)("a",{class:"card-link-share",href:s.fbShare,target:"_blank",rel:"noopener noreferrer"},[(0,r.bF)(l,{class:"box fb-brand",icon:"fa-brands fa-facebook"}),n[4]||(n[4]=(0,r.Lk)("p",null,"Share on Facebook",-1)),(0,r.bF)(l,{icon:"fa-solid fa-chevron-right"})],8,D),(0,r.Lk)("a",{class:"card-link-share",href:s.inShare,target:"_blank",rel:"noopener noreferrer"},[(0,r.bF)(l,{class:"box in-brand",icon:"fa-brands fa-linkedin"}),n[5]||(n[5]=(0,r.Lk)("p",null,"Share on Linkedin",-1)),(0,r.bF)(l,{icon:"fa-solid fa-chevron-right"})],8,P),(0,r.Lk)("a",{class:"card-link-share",href:s.twShare,target:"_blank",rel:"noopener noreferrer"},[(0,r.bF)(l,{class:"box tw-brand",icon:"fa-brands fa-twitter"}),n[6]||(n[6]=(0,r.Lk)("p",null,"Share on Twitter",-1)),(0,r.bF)(l,{icon:"fa-solid fa-chevron-right"})],8,Q),(0,r.Lk)("a",{class:"card-link-share",href:s.waShare,target:"_blank",rel:"noopener noreferrer"},[(0,r.bF)(l,{class:"box wa-brand",icon:"fa-brands fa-whatsapp"}),n[7]||(n[7]=(0,r.Lk)("p",null,"Share via WhatsApp",-1)),(0,r.bF)(l,{icon:"fa-solid fa-chevron-right"})],8,V),(0,r.Lk)("a",{class:"card-link-share",href:s.igShare,target:"_blank",rel:"noopener noreferrer"},[(0,r.bF)(l,{class:"box ig-brand",icon:"fa-brands fa-instagram"}),n[8]||(n[8]=(0,r.Lk)("p",null,"Share via Instagram",-1)),(0,r.bF)(l,{icon:"fa-solid fa-chevron-right"})],8,W),(0,r.Lk)("a",{class:"card-link-share",href:s.msnShare,target:"_blank",rel:"noopener noreferrer"},[(0,r.bF)(l,{class:"box msn-brand",icon:"fa-brands fa-facebook-messenger"}),n[9]||(n[9]=(0,r.Lk)("p",null,"Share via Messenger",-1)),(0,r.bF)(l,{icon:"fa-solid fa-chevron-right"})],8,Y),(0,r.Lk)("a",{class:"card-link-share",href:s.emShare,target:"_blank",rel:"noopener noreferrer"},[(0,r.bF)(l,{class:"box em-brand",icon:"fa-solid fa-envelope"}),n[10]||(n[10]=(0,r.Lk)("p",null,"Share via Email",-1)),(0,r.bF)(l,{icon:"fa-solid fa-chevron-right"})],8,K),(0,r.Lk)("div",{class:"card-link-copy",onClick:n[2]||(n[2]=(0,o.D$)((e=>i.onCopy()),["prevent"]))},[n[11]||(n[11]=(0,r.Lk)("img",{width:"20",height:"20",src:"/webp.png"},null,-1)),(0,r.Lk)("p",B,(0,c.v_)(s.copyShare),1),(0,r.Lk)("div",null,[(0,r.bF)(l,{class:"copy-icon",icon:"fa-solid fa-copy"}),(0,r.eW)(" "+(0,c.v_)(s.copyTxt),1)])])])])])):(0,r.Q3)("",!0)],64)}var $={name:"ShareComponent",data(){return{show:!1,copyTxt:"Copy",fbShare:"https://www.facebook.com/sharer/sharer.php?u=https://www.webdev.com",twShare:"https://twitter.com/intent/tweet?text=Check%20out%20this%20Link%20-%20https://www.webdev.com",inShare:"https://www.linkedin.com/sharing/share-offsite/?url=https://www.webdev.com",igShare:"https://www.instagram.com/direct/new",waShare:"https://web.whatsapp.com/send?text=Check+out+this+Link%21+-+https://www.webdev.com",msnShare:"https://www.messenger.com/new",emShare:"mailto:?subject=Hey%20check%20this%20out&body=https://www.webdev.com",copyShare:"https://othryades.github.io/"}},methods:{onCopy(){const e=document.getElementById("copyTextEl"),n=document.createRange();e.textContent=`https://${this.copyShare}`,n.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(n),document.execCommand("copy"),e.textContent=this.copyShare,window.getSelection().removeAllRanges(),this.copyTxt="Copied!",setTimeout((()=>{this.copyTxt="Copy"}),3e3)}}};const z=(0,x.A)($,[["render",H],["__scopeId","data-v-160e164f"]]);var G=z;const J={class:"theme-switch-wrapper"},N={class:"theme-switch",for:"checkbox"};function U(e,n,t,o,a,s){return(0,r.uX)(),(0,r.CE)("div",J,[(0,r.Lk)("label",N,[(0,r.Lk)("input",{type:"checkbox",id:"checkbox",onChange:n[0]||(n[0]=e=>s.switchTheme(e))},null,32),n[1]||(n[1]=(0,r.Lk)("div",{class:"slider round"},[(0,r.Lk)("span",{class:"sun-icon"},"☀️"),(0,r.Lk)("span",{class:"moon-icon"},"🌙")],-1))])])}var Z={name:"ThemeToggleComponent",data(){return{theme:"dark"===localStorage.getItem("theme")?"dark":"light"}},methods:{switchTheme(e){const n=document.getElementById("checkbox"),t=e?.target.checked||n?.checked;t?(this.theme="dark",document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(this.theme="light",document.documentElement.setAttribute("data-theme",this.theme))}},async created(){this.switchTheme()}};const q=(0,x.A)(Z,[["render",U]]);var ee=q;const ne={class:"footer"};function te(e,n,t,o,a,s){return(0,r.uX)(),(0,r.CE)("footer",ne,n[0]||(n[0]=[(0,r.Fv)('<div class="footer-content"><div class="footer-section"><p class="made-with"> Made with <span class="heart">❤️</span> using <a href="https://vitejs.dev" target="_blank" class="tech-link"><img src="/vite.svg" alt="Vite" class="tech-logo"></a> + <a href="https://vuejs.org" target="_blank" class="tech-link"><img src="/vue.svg" alt="Vue" class="tech-logo"></a></p></div></div>',1)]))}var oe={name:"FooterComponent",computed:{currentYear(){return(new Date).getFullYear()}}};const re=(0,x.A)(oe,[["render",te]]);var ae=re,se={name:"App",components:{SocialMediaLinks:j,ShareComponent:G,ThemeToggleComponent:ee,FooterComponent:ae}};const ie=(0,x.A)(se,[["render",i]]);var ce=ie,le=t(9378),he=t(1071),de=t(8752),pe=t(208);le.Yv.add(de.aUl,de.QV6,de.EYA,de.Vz1,de.IAJ,de.HQ1,de.LA0,pe.y_8,pe.Qbn,pe.XkK,pe.jPR,pe.t5Z),(0,o.Ef)(ce).component("fa-icon",he.gc).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var s=1/0;for(h=0;h<e.length;h++){o=e[h][0],r=e[h][1],a=e[h][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(h--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,s=o[0],i=o[1],c=o[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var h=c(t)}for(n&&n(o);l<s.length;l++)a=s[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(h)},o=self["webpackChunkMoris_social_links"]=self["webpackChunkMoris_social_links"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(681)}));o=t.O(o)})();
//# sourceMappingURL=app.04dc042d.js.map