(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{208:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(901),l=n(227),i=n(909),s=n(256),c=n(237),m=n(243);var w=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).toggleMenu=function(){var e=n.state.menuToggled;n.setState({menuToggled:!e})},n.handleScroll=function(){var e=n.attractionsRef.current,t=n.photosRef.current,o=n.reviewsRef.current;if(e&&t&&o){var a=n.state,r=a.showAttractions,l=a.showPhotos,i=a.showReviews,s=(window.scrollY+e.getBoundingClientRect().top)/3<window.scrollY,c=(window.scrollY+t.getBoundingClientRect().top)/2<window.scrollY,m=(window.scrollY+o.getBoundingClientRect().top)/2<window.scrollY;r!==s&&n.setState({showAttractions:s}),l!==c&&n.setState({showPhotos:c}),i!==m&&n.setState({showReviews:m})}},n.state={menuToggled:!1,showAttractions:!1,showPhotos:!1,showReviews:!1},n.attractionsRef=a.a.createRef(),n.photosRef=a.a.createRef(),n.reviewsRef=a.a.createRef(),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var w=o.prototype;return w.componentDidMount=function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleScroll)},w.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll)},w.render=function(){var e=this.state,t=e.menuToggled,n=e.showAttractions,o=e.showPhotos,w=e.showReviews;return a.a.createElement(s.f,null,a.a.createElement(s.l,{title:"Overview"}),a.a.createElement(s.h,{showModal:t}),a.a.createElement(s.i,{menuToggled:t,handleToggle:this.toggleMenu}),!t&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:i.introContainer},a.a.createElement(s.e,{filename:"aelan_8.jpg",imgStyle:{filter:"brightness(0.5)"},style:{height:"100vh"}}),a.a.createElement("div",{className:i.introContainer_main},a.a.createElement("h1",{className:i.introContainer_title},m.landingTitle),a.a.createElement(c.a,{className:i.introContainer_locationName}),a.a.createElement("h1",{className:i.introContainer_title},m.landingSubtitle),a.a.createElement("br",null),a.a.createElement("div",{className:i.introContainer_links},a.a.createElement(l.a,{to:"/apartments",className:i.introContainer_links_item},m.exploreBtn),a.a.createElement(l.a,{to:"/contact",className:i.introContainer_links_item},m.contactBtn))),a.a.createElement(r.Link,{className:i.introContainer_scroll,to:"photos_section",smooth:!0},a.a.createElement("span",{className:i.introContainer_scroll_arrow}))),a.a.createElement(s.j,{show:o,htmlRef:this.photosRef}),a.a.createElement(s.a,{show:n,htmlRef:this.attractionsRef}),a.a.createElement(s.k,{show:w,htmlRef:this.reviewsRef}),a.a.createElement(s.d,null)))},o}(a.a.Component);t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-tsx-78e5b4a5e9e9b11666ad.js.map