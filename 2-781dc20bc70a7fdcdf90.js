(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{223:function(A,e,a){"use strict";a(250);var t=a(207),n=a.n(t),c=a(0),r=a.n(c),i=a(288);var o=function(A){var e,a;function t(){for(var e,a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return(e=A.call.apply(A,[this].concat(t))||this).renderContactsInfo=function(A,e){return r.a.createElement("div",{className:i.footerContainer_contacts_info},r.a.createElement("h5",{className:i.footerContainer_contacts_header},A,":"),r.a.createElement("p",null,e))},e}return a=A,(e=t).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,t.prototype.render=function(){return r.a.createElement("div",{className:i.footerContainer},r.a.createElement("div",{className:i.footerContainer_section},r.a.createElement("div",{className:i.footerContainer_section_item},r.a.createElement("p",null,"Rooms"),r.a.createElement("p",null,"Privacy Policy"),r.a.createElement("p",null,"Terms & Conditions")),r.a.createElement("div",{className:i.footerContainer_section_item},this.renderContactsInfo("Email","info@yourdomain.com"),this.renderContactsInfo("Social Media","Facebook"))),r.a.createElement("hr",{className:i.footerContainer_horizontalline}),r.a.createElement("div",{className:i.footerContainer_footer},r.a.createElement("p",null,"Copyright ©2019 All rights reserved"),r.a.createElement("div",{className:i.footerContainer_footer_links},r.a.createElement(n.a,{type:"facebook"}),r.a.createElement(n.a,{type:"ant-design"}))))},t}(r.a.Component),l=(a(93),a(133),a(341),a(349)),s=a.n(l),E=a(348);var d=function(A){var e,a;function t(){return A.apply(this,arguments)||this}return a=A,(e=t).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,t.prototype.render=function(){var A=this.props.show,e=!0;return r.a.createElement("div",{className:E.attractionsContainer,ref:this.props.htmlRef},r.a.createElement("p",{style:{fontFamily:"Mukta Mahee, arial, sans-serif",fontWeight:"bold",color:"slategray",paddingBottom:"20px"}},"YOU CAN VISIT"),r.a.createElement("div",null,r.a.createElement("ol",{className:E.attractionsContainer_list},Array.from({length:4},function(a,t){return r.a.createElement("li",{className:E.attractionsImage+" "+(A?E.attractionsImage__show:E.attractionsImage__hide)},r.a.createElement(s.a,{bodyStyle:{padding:0},loading:e,bordered:e},r.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"})),r.a.createElement("p",null,"Restaurant"))}))))},t}(r.a.Component),p=a(229),m=a(395),B=function(A){return r.a.createElement("div",{className:m.menuModal+" "+(A.showModal?m.menuModal_open:m.menuModal_closed)},r.a.createElement("div",{className:m.menuContainer},r.a.createElement("ol",{className:m.menuActions},r.a.createElement("li",{className:m.menuActions_li},r.a.createElement(p.a,{to:"/"},"Home")),r.a.createElement("li",{className:m.menuActions_li},r.a.createElement(p.a,{to:"/about/"},"About")),r.a.createElement("li",{className:m.menuActions_li},r.a.createElement(p.a,{to:"/apartments/"},"Apartments"))),r.a.createElement("div",{className:m.menuContacts},r.a.createElement("div",{className:m.menuContacts_Info},r.a.createElement("h5",{className:m.menuContacts_header},"CONTACT INFO"),r.a.createElement("p",null,"info@yourdomain.com")),r.a.createElement("div",{className:m.menuContacts_SocialMedia},r.a.createElement("h5",{className:m.menuContacts_header},"CONNECT WITH US"),r.a.createElement("p",null,"Facebook"),r.a.createElement("p",null,"AirBnb")))))},g=(a(22),a(140),a(141),a(396),a(397)),u=a(398),h=a.n(u),f=function(A){return r.a.createElement(p.b,{query:"644985347",render:function(e){var a=e.images.edges.find(function(e){return e.node.relativePath.includes(A.filename)});return a?r.a.createElement(h.a,Object.assign({filename:A.filename,fluid:a.node.childImageSharp.fluid},A)):null},data:g})},j=(a(401),a(406)),Q=a.n(j),N=(a(403),a(419)),b=a.n(N),C=a(405);var Y=function(A){var e,a;function t(e){return A.call(this,e)||this}return a=A,(e=t).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,t.prototype.render=function(){var A=this.props.show;return r.a.createElement("div",{className:C.photosContainer+" "+(A?C.photosContainer__show:C.photosContainer__hide),ref:this.props.htmlRef},r.a.createElement("div",{className:C.photosContainer_info},r.a.createElement("h1",{className:C.photosContainer_header},"A gorgeous place to enjoy your holiday"),r.a.createElement("p",{className:C.photosContainer_description},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.")),r.a.createElement("div",{className:C.photosContainer_carousel},r.a.createElement(Q.a,{className:C.photosContainer_carousel_photos,effect:"fade",arrows:!0,draggable:!0,autoplay:!0},r.a.createElement(b.a,{active:!0,loading:!1},r.a.createElement(f,{filename:"slider-1.jpg"})),r.a.createElement(b.a,{active:!0,loading:!1},r.a.createElement(f,{filename:"slider-2.jpg"})),r.a.createElement(b.a,{active:!0,loading:!1},r.a.createElement(f,{filename:"slider-3.jpg"})))))},t}(r.a.Component),x=(a(423),a(426)),w=a.n(x),R=a(425);var v=function(A){var e,a;function t(){for(var e,a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return(e=A.call.apply(A,[this].concat(t))||this).renderComments=function(){return[1,2,3].map(function(A){return r.a.createElement("div",{className:R.reviewsComment},r.a.createElement(w.a,{size:64,icon:"user"}),r.a.createElement("p",{className:R.reviewsComment_description},"“Et quidem, impedit eum fugiat excepturi iste aliquid suscipit, tempore, delectus rem soluta voluptatem distinctio sed dolores, magni fugit nemo cum expedita. Totam a accusantium sunt aut autem placeat officia.”"),r.a.createElement("p",{className:R.reviewsComment_user},"- User Smith"))})},e}return a=A,(e=t).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,t.prototype.render=function(){var A=this.props,e=A.htmlRef,a=A.show;return r.a.createElement("div",{className:R.reviewsContainer+" "+(a?R.reviewsContainer__show:R.reviewsContainer__hide),ref:e},r.a.createElement("h1",{className:R.reviewsContainer_title},"Reviews"),r.a.createElement("div",{className:R.reviewsComment_container},this.renderComments()))},t}(r.a.Component),P=a(427),D=function(A){return r.a.createElement("div",{className:P.navbar},r.a.createElement(p.a,{to:"/"},r.a.createElement(n.a,{type:"gitlab",className:P.navbar_icon})),r.a.createElement("div",{className:P.navbar_icon+" "+P.menu_icon+" \n        "+(A.menuToggled?P.menu_icon__open:P.menu_icon__closed),onClick:A.handleToggle},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},M=a(428),I=(a(429),function(A){M.data;return r.a.createElement("div",A,r.a.createElement("main",null,A.children))});a.d(e,"b",function(){return o}),a.d(e,"a",function(){return d}),a.d(e,"e",function(){return B}),a.d(e,"c",function(){return f}),a.d(e,"g",function(){return Y}),a.d(e,"h",function(){return v}),a.d(e,"f",function(){return D}),a.d(e,"d",function(){return I})},229:function(A,e,a){"use strict";a.d(e,"b",function(){return l});var t=a(0),n=a.n(t),c=a(69),r=a.n(c);a.d(e,"a",function(){return r.a});a(280),a(9).default.enqueue;var i=n.a.createContext({});function o(A){var e=A.staticQueryData,a=A.data,t=A.query,c=A.render,r=a?a.data:e[t]&&e[t].data;return n.a.createElement(n.a.Fragment,null,r&&c(r),!r&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(A){var e=A.data,a=A.query,t=A.render,c=A.children;return n.a.createElement(i.Consumer,null,function(A){return n.a.createElement(o,{data:e,query:a,render:t||c,staticQueryData:A})})}},280:function(A,e,a){var t;A.exports=(t=a(394))&&t.default||t},394:function(A,e,a){"use strict";a.r(e);a(22);var t=a(0),n=a.n(t),c=a(124);e.default=function(A){var e=A.location,a=A.pageResources;return a?n.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null}},397:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/Aelan-Place/static/4a9773549091c227cd2eb82ccd9c5e3a/b2727/gatsby-icon.png",srcSet:"/Aelan-Place/static/4a9773549091c227cd2eb82ccd9c5e3a/f3a16/gatsby-icon.png 480w,\n/Aelan-Place/static/4a9773549091c227cd2eb82ccd9c5e3a/b2727/gatsby-icon.png 512w",sizes:"(max-width: 512px) 100vw, 512px",presentationWidth:512}}}},{node:{relativePath:"slider-2.jpg",name:"slider-2",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAVNRNBZj6X//xAAaEAEAAgMBAAAAAAAAAAAAAAABAhEAAxIh/9oACAEBAAEFAoVfl8mG1E2ykXIz/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oACAEDAQE/AYy//8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oACAECAQE/Aa0//8QAGRAAAgMBAAAAAAAAAAAAAAAAABEQITJR/9oACAEBAAY/AkxOb6aP/8QAGhAAAwADAQAAAAAAAAAAAAAAAAERITFBkf/aAAgBAQABPyHZZTBa+Io6RHJKrrOyQYCo/9oADAMBAAIAAwAAABDX3//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAwEBPxBrX//EABcRAQADAAAAAAAAAAAAAAAAAAARUWH/2gAIAQIBAT8QwjT/xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMVH/2gAIAQEAAT8QnIOgsuu/oKVFyCrc9d5DwAqQ5uo0gL8mQBODv//Z",aspectRatio:1.4973333333333334,src:"/Aelan-Place/static/4d996b7bd7e18e93edbac71a81009bcc/d2078/slider-2.jpg",srcSet:"/Aelan-Place/static/4d996b7bd7e18e93edbac71a81009bcc/cf0dd/slider-2.jpg 480w,\n/Aelan-Place/static/4d996b7bd7e18e93edbac71a81009bcc/76319/slider-2.jpg 960w,\n/Aelan-Place/static/4d996b7bd7e18e93edbac71a81009bcc/d2078/slider-2.jpg 1123w",sizes:"(max-width: 1123px) 100vw, 1123px",presentationWidth:1123}}}},{node:{relativePath:"gatsby-astronaut.png",name:"gatsby-astronaut",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/Aelan-Place/static/6d91c86c0fde632ba4cd01062fd9ccfa/ea5de/gatsby-astronaut.png",srcSet:"/Aelan-Place/static/6d91c86c0fde632ba4cd01062fd9ccfa/f3a16/gatsby-astronaut.png 480w,\n/Aelan-Place/static/6d91c86c0fde632ba4cd01062fd9ccfa/ea5de/gatsby-astronaut.png 800w",sizes:"(max-width: 800px) 100vw, 800px",presentationWidth:800}}}},{node:{relativePath:"slider-1.jpg",name:"slider-1",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADBP/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHYFUgLmi//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDERMSIv/aAAgBAQABBQLVtaWrRPCJ8STOEn//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQMS/9oACAEDAQE/AVMwj//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwG1a//EABoQAAICAwAAAAAAAAAAAAAAAAABETICEJH/2gAIAQEABj8Cqyu5Gox4f//EABoQAAMBAQEBAAAAAAAAAAAAAAERIQAxQWH/2gAIAQEAAT8hoTMecH6ca8xAKRqEx1iXmcoRz//aAAwDAQACAAMAAAAQR9//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EKLZBTxH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhUf/aAAgBAgEBPxB1B6H/xAAbEAEBAQACAwAAAAAAAAAAAAABEQAhMUHB8P/aAAgBAQABPxACCllSXDAPw+M/RONrOUjg95fJMqiqs7MK7Eqd/9k=",aspectRatio:1.4973333333333334,src:"/Aelan-Place/static/aa037f3bb5ec187ecccb89b96346e6fa/d2078/slider-1.jpg",srcSet:"/Aelan-Place/static/aa037f3bb5ec187ecccb89b96346e6fa/cf0dd/slider-1.jpg 480w,\n/Aelan-Place/static/aa037f3bb5ec187ecccb89b96346e6fa/76319/slider-1.jpg 960w,\n/Aelan-Place/static/aa037f3bb5ec187ecccb89b96346e6fa/d2078/slider-1.jpg 1123w",sizes:"(max-width: 1123px) 100vw, 1123px",presentationWidth:1123}}}},{node:{relativePath:"slider-3.jpg",name:"slider-3",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIFBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAFdLzxokcb/xAAaEAACAwEBAAAAAAAAAAAAAAACAwABERIh/9oACAEBAAEFAhafIPPCZMqWzqi8n//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhL/2gAIAQMBAT8BmNMaP//EABcRAQADAAAAAAAAAAAAAAAAAAABAhH/2gAIAQIBAT8BmzX/xAAbEAADAAIDAAAAAAAAAAAAAAAAARECIRAxYf/aAAgBAQAGPwKRG8U/TpFhtcf/xAAaEAACAwEBAAAAAAAAAAAAAAABEQAhUTFx/9oACAEBAAE/IQdrvFLMJiNItrZ0ICfJXDrChDYKmHU//9oADAMBAAIAAwAAABCfH//EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAwEBPxDMhFv/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QyIWX/8QAHBABAAMBAAMBAAAAAAAAAAAAAQARMSFBUYHB/9oACAEBAAE/EHj5ChenmLAHr0P5AZZ1eH1Oik1en7MylYN9AicQUCxVqz//2Q==",aspectRatio:1.4973333333333334,src:"/Aelan-Place/static/8818f8dc363a65ae1a40229670515625/d2078/slider-3.jpg",srcSet:"/Aelan-Place/static/8818f8dc363a65ae1a40229670515625/cf0dd/slider-3.jpg 480w,\n/Aelan-Place/static/8818f8dc363a65ae1a40229670515625/76319/slider-3.jpg 960w,\n/Aelan-Place/static/8818f8dc363a65ae1a40229670515625/d2078/slider-3.jpg 1123w",sizes:"(max-width: 1123px) 100vw, 1123px",presentationWidth:1123}}}},{node:{relativePath:"slider-4.jpg",name:"slider-4",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADBP/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHYFUgLmi//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDERMSIv/aAAgBAQABBQLVtaWrRPCJ8STOEn//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQMS/9oACAEDAQE/AVMwj//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwG1a//EABoQAAICAwAAAAAAAAAAAAAAAAABETICEJH/2gAIAQEABj8Cqyu5Gox4f//EABoQAAMBAQEBAAAAAAAAAAAAAAERIQAxQWH/2gAIAQEAAT8hoTMecH6ca8xAKRqEx1iXmcoRz//aAAwDAQACAAMAAAAQR9//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EKLZBTxH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhUf/aAAgBAgEBPxB1B6H/xAAbEAEBAQACAwAAAAAAAAAAAAABEQAhMUHB8P/aAAgBAQABPxACCllSXDAPw+M/RONrOUjg95fJMqiqs7MK7Eqd/9k=",aspectRatio:1.4973333333333334,src:"/Aelan-Place/static/6a415db9176fbc7eb139f540bc88053a/d2078/slider-4.jpg",srcSet:"/Aelan-Place/static/6a415db9176fbc7eb139f540bc88053a/cf0dd/slider-4.jpg 480w,\n/Aelan-Place/static/6a415db9176fbc7eb139f540bc88053a/76319/slider-4.jpg 960w,\n/Aelan-Place/static/6a415db9176fbc7eb139f540bc88053a/d2078/slider-4.jpg 1123w",sizes:"(max-width: 1123px) 100vw, 1123px",presentationWidth:1123}}}},{node:{relativePath:"palm-trees1.png",name:"palm-trees1",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkUlEQVQozwXBiU7aAAAA0H6XiduSybY4degiKh6AgiBHoZSjiLQcLS20tBxtOcrlEJigILjAItPMReMy44zTHU7Nln3J3gM+/bw7vX04u/tz9fDQOzmyh6HJ5bFH05Pjq3otrFvRyhTzMiRJly5uC1/v6pc3aIEnq9VUq74A64Dezf3R73+Ht38/Xv9408gvmhXPFU8sHkP5/SAQhpSKEYNuVsiul3bS3e/3teMPS/ZZtcsI+U3PZkaAxvk3f7HcOb8YXP8qZBGddmx8cc4rZKR3fYV6GjJPqPTao8uL3unH0m4VZX2vFkenlqd0tgnENwMItfKLuYlgOo4nqTjtFko5JsspTdpEo80Us1HCAjlBLBXzxvyw36zSDsunn+qN4yA8GsJngFK3i0WCGB1g+WgiSUhvK81+K5TkqgcDN8uGooHtftca8i+ZFqKk3gbKZ1WTyqUpN7bmwiDAjCKZ7Xrn9Kx9fFLdb+NMgMoKxXYrXMiJnb60XTv4fNb5chXL8QgKrqwqrfbVtCRSfBTymIGhlzKrz7N3fpXd25erlXRRqhwclts7pJRGM0Kx1WwOuulGma9V1CYV7NCZYXO+XjX5HMNjMkAf5rByg9vt8VuSRiO3EBTBk0HaG465H48NoQEYDZmcuNuVSHg5DvZBJBMS8yLoR4xOEHCIJSUWfm2xoilab1QZaB6hAlYERFkKDOEEueFLJoitpiWwQWQEC2x0JlN4pW4RN41UDDCxgo5k5h2IIcLqnI713CYh5T005eJzhkSeyWVD5a2NTJGu1X25YlhM2wXJQRFzJGdNpgENzmhJdi0SV/twjdMNcQIYYWxBDKIibjzIEF6CxDYJG0aThijniDKaeAYV+QWG10bY/5maXsIFWb5RAAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/Aelan-Place/static/ac37759cfe5093c1aa172284d2071a05/a3403/palm-trees1.png",srcSet:"/Aelan-Place/static/ac37759cfe5093c1aa172284d2071a05/f3a16/palm-trees1.png 480w,\n/Aelan-Place/static/ac37759cfe5093c1aa172284d2071a05/c2bc8/palm-trees1.png 960w,\n/Aelan-Place/static/ac37759cfe5093c1aa172284d2071a05/a3403/palm-trees1.png 1920w",sizes:"(max-width: 1920px) 100vw, 1920px",presentationWidth:1920}}}},{node:{relativePath:"palm-trees.png",name:"palm-trees",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADcklEQVQ4yy2O2W+UdRRAvz9DY3gSfdII+AQxMTE2ElnULrFC01B8aLQUa1sxYGUJEgRKsRiQpVRHsGlLK9N1OtPO/s1CpzOdtbM4Wzv70kJLcYkPx980PpzcLffcK/kK/+LO/rOFK/03C6m/eCywC2wrFf7EmnyOObaJ8Y8N9JEN5kJPmfGvMekpo3QVGXXkGbKn+U1eRppPbGKPbWCPb2AVuZx4hhx/hkn0KgJDhcg6+vA6WiGaDT5FHVhjylPikTPHyHxmS/ZATqIwJZDkyCpyWBBZwyxyvYj68Bq60KoQrKENVqIgWGY2UGLGVxSyAmPOrPguvyUckGM8MMe5q/YgaX0Z9IE8xqUC5nAZU6iEPlhEFywJSRGt6GsDBWb9edS+HCpPlsnFNFPuLAq1FYVmnnEhH7JE6f5lGMngW8ESzGKPFNC5Y8iBjKhzyALzUhaTqI3+FHpfCp03hdazjMa9zJwvzckLp2nuPMYP9x8y4UgwMOdCsi+t4AinsPmjXO+7hc7hwxEtYg2msYWy/5PBFs5gDVeOpcWxFAZ/ksFpDYMTM5zpvohSXkTjjCG5oxkMDje/jgxicXpxhRK4RM+TKAjyLMZyLMZzeJJ5XPEszspsuYQzlmFsToNR7Fy5003/7wPYQymkpWSO0EoBbyRBIJYinCoSza5idroIJtMiL5IqP2F18zm5J+ssl9ZRySYMYm6yW7j643cMPFSg1qvo7etF8kaTqM0G5r0+5n1+HAE/nkgE88JjwitpIdkgkc+TLpfJlIoE4lFsbgdD40M4PC7MFh1WqxbHgpnp2TGky71nOX3+OLfvXWNg5D5K1Sgagwanz4vaOIsz4EN2WBidGkZvM6LSTuD2O1HPKtGKr2SLHo1GyehIP37vAtLU8HVUj26hnvgZzZQC1cQ9Jqf7GJvup19xmSHlHUbGb3Ohp52Wrkau3eziUk8H53uO03q2jos3PqP7Zhu9d7/myk8dSF3f19L27V6OdL5N84l3ONq5h4b2N2lofo32k29x4tReWlrqONR4gIPVVbSe2k/npSqqDm1n94cv8e7hl6k79jqHv9rJe5++grSz9gXeqH+R3bXb2Fe/nU8+30GrEH1z7n2+6DhA05Fq6j+upqZmHzXVB2lo3M+Zq9Wcu/EBdV/uYk/NNj5qepWm1h0cbdvFf27cLdB8fRZnAAAAAElFTkSuQmCC",aspectRatio:1.4963579604578563,src:"/Aelan-Place/static/e2349305e94a48c12b814a1e183f844e/a65c6/palm-trees.png",srcSet:"/Aelan-Place/static/e2349305e94a48c12b814a1e183f844e/f3a16/palm-trees.png 480w,\n/Aelan-Place/static/e2349305e94a48c12b814a1e183f844e/c2bc8/palm-trees.png 960w,\n/Aelan-Place/static/e2349305e94a48c12b814a1e183f844e/a65c6/palm-trees.png 1438w",sizes:"(max-width: 1438px) 100vw, 1438px",presentationWidth:1438}}}},{node:{relativePath:"hero_2.jpg",name:"hero_2",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGCptQ44wL/AP/EABkQAQADAQEAAAAAAAAAAAAAAAIBAxESMv/aAAgBAQABBQKoLKDlq9Q9KHEJRv8A/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Bqv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AYj/xAAcEAEAAgIDAQAAAAAAAAAAAAABAAIRQRIhMlH/2gAIAQEABj8Cbcckc71HuVqADPs8E//EABsQAQEBAAIDAAAAAAAAAAAAAAERACFBMVFx/9oACAEBAAE/ITWKynWQHENM5+dH3nCkKB24IK/HBgOZ/9oADAMBAAIAAwAAABAs7//EABcRAQADAAAAAAAAAAAAAAAAAAARMXH/2gAIAQMBAT8QrDL/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBh/8QAHBABAAIDAAMAAAAAAAAAAAAAAQARITFRYYHB/9oACAEBAAE/EBxXEwCM/YjixuWXvkCAQU8MygGyDYFr2BaMYFV6IdAttxuf/9k=",aspectRatio:1.499605367008682,src:"/Aelan-Place/static/dcd75b06565472790e163eb4ec62fc57/040a7/hero_2.jpg",srcSet:"/Aelan-Place/static/dcd75b06565472790e163eb4ec62fc57/cf0dd/hero_2.jpg 480w,\n/Aelan-Place/static/dcd75b06565472790e163eb4ec62fc57/76319/hero_2.jpg 960w,\n/Aelan-Place/static/dcd75b06565472790e163eb4ec62fc57/040a7/hero_2.jpg 1900w",sizes:"(max-width: 1900px) 100vw, 1900px",presentationWidth:1900}}}},{node:{relativePath:"hero_1.jpg",name:"hero_1",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGqihovkUqf/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAIBAxESE//aAAgBAQABBQKNMWRg5KNa2jvMHRj/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8BjH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFX/8QAGBAAAgMAAAAAAAAAAAAAAAAAEDEAAnH/2gAIAQEABj8CctgbP//EABoQAAMBAQEBAAAAAAAAAAAAAAABESFhMZH/2gAIAQEAAT8hVLgo7yNEWOKCMD0GsrHT1fD/2gAMAwEAAgADAAAAEHD/AP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8QB0s3/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxBXjbv/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFRYaHh/9oACAEBAAE/EGYUC8MF4lWvu613uCvgLPgljJyF1WfkWTBObeNy49An/9k=",aspectRatio:1.499605367008682,src:"/Aelan-Place/static/f196184ea4bcbbdcb927adaa4126581b/040a7/hero_1.jpg",srcSet:"/Aelan-Place/static/f196184ea4bcbbdcb927adaa4126581b/cf0dd/hero_1.jpg 480w,\n/Aelan-Place/static/f196184ea4bcbbdcb927adaa4126581b/76319/hero_1.jpg 960w,\n/Aelan-Place/static/f196184ea4bcbbdcb927adaa4126581b/040a7/hero_1.jpg 1900w",sizes:"(max-width: 1900px) 100vw, 1900px",presentationWidth:1900}}}}]}}}},428:function(A){A.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}}}]);
//# sourceMappingURL=2-781dc20bc70a7fdcdf90.js.map