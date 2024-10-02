(()=>{"use strict";var e,r={10:(e,r,a)=>{const i=window.wp.blocks,l=window.wp.i18n,n=window.wp.serverSideRender;var t=a.n(n);const o=window.wp.blockEditor,d=window.wp.components,s=window.ReactJSXRuntime,m=JSON.parse('{"UU":"lizardberg/lizardberg-image"}');(0,i.registerBlockType)(m.UU,{edit:function(e){const{attributes:r,setAttributes:a}=e,i=(0,o.useBlockProps)();return(0,s.jsxs)("div",{...i,children:[(0,s.jsx)(o.InspectorControls,{children:(0,s.jsxs)(d.PanelBody,{title:(0,l.__)("Lizardberg Image Settings","lizardberg-image"),children:[(0,s.jsx)(d.__experimentalSpacer,{children:(0,s.jsx)(d.__experimentalText,{children:(0,l.__)("Lizardberg Image will ensure your image scales to a more appropriate size based on the viewport.","lizardberg-image")})}),(0,s.jsx)(d.__experimentalSpacer,{children:(0,s.jsxs)(d.__experimentalGrid,{columns:2,children:[(0,s.jsx)(o.MediaUploadCheck,{children:(0,s.jsx)(o.MediaUpload,{onSelect:e=>{a({imageID:e.id,imageURL:e.url})},allowedTypes:["image"],value:r.imageID,render:({open:e})=>(0,s.jsx)(d.Button,{onClick:e,variant:"primary",children:r.imageID?(0,l.__)("Change Image","lizardberg-image"):(0,l.__)("Select Image","lizardberg-image")})})}),r.imageID>0&&(0,s.jsx)(d.Button,{onClick:()=>{a({imageID:0,imageURL:""})},variant:"secondary",children:(0,l.__)("Remove Image","lizardberg-image")})]})}),(0,s.jsx)(d.__experimentalSpacer,{children:(0,s.jsx)(d.__experimentalUnitControl,{onChange:e=>{a({minWidth:e})},value:r.minWidth,units:[{value:"px",label:"px",default:768},{value:"vw",label:"vw",default:90}],label:(0,l.__)("Minimum width for tablet and smaller","lizardberg-image")})}),(0,s.jsx)(d.__experimentalSpacer,{children:(0,s.jsx)(d.__experimentalUnitControl,{onChange:e=>{a({maxWidth:e})},value:r.maxWidth,units:[{value:"px",label:"px",default:768},{value:"vw",label:"vw",default:100}],label:(0,l.__)("Maximum width on desktop","lizardberg-image"),isPressEnterToChange:!0})})]})}),(0,s.jsx)(t(),{block:"lizardberg/lizardberg-image",attributes:e.attributes})]})}})}},a={};function i(e){var l=a[e];if(void 0!==l)return l.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.m=r,e=[],i.O=(r,a,l,n)=>{if(!a){var t=1/0;for(m=0;m<e.length;m++){a=e[m][0],l=e[m][1],n=e[m][2];for(var o=!0,d=0;d<a.length;d++)(!1&n||t>=n)&&Object.keys(i.O).every((e=>i.O[e](a[d])))?a.splice(d--,1):(o=!1,n<t&&(t=n));if(o){e.splice(m--,1);var s=l();void 0!==s&&(r=s)}}return r}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,l,n]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var a in r)i.o(r,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={57:0,350:0};i.O.j=r=>0===e[r];var r=(r,a)=>{var l,n,t=a[0],o=a[1],d=a[2],s=0;if(t.some((r=>0!==e[r]))){for(l in o)i.o(o,l)&&(i.m[l]=o[l]);if(d)var m=d(i)}for(r&&r(a);s<t.length;s++)n=t[s],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(m)},a=self.webpackChunklizardberg=self.webpackChunklizardberg||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})();var l=i.O(void 0,[350],(()=>i(10)));l=i.O(l)})();