(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{206:function(e,t,n){"use strict";n.r(t);n(294);var o=n(295),a=n.n(o),r=n(0),l=n.n(r),s=n(226),i=n(927),c=n(254),w=n(238);var h=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).toggleMenu=function(){var e=n.state.menuToggled;n.setState({menuToggled:!e})},n.handleScroll=function(){var e=n.attractionsRef.current,t=n.photosRef.current,o=n.reviewsRef.current;if(e&&t&&o){var a=n.state,r=a.showAttractions,l=a.showPhotos,s=a.showReviews,i=(window.scrollY+e.getBoundingClientRect().top)/3<window.scrollY,c=(window.scrollY+t.getBoundingClientRect().top)/2<window.scrollY,w=(window.scrollY+o.getBoundingClientRect().top)/2<window.scrollY;r!==i&&n.setState({showAttractions:i}),l!==c&&n.setState({showPhotos:c}),s!==w&&n.setState({showReviews:w})}},n.state={menuToggled:!1,showAttractions:!1,showPhotos:!1,showReviews:!1},n.attractionsRef=l.a.createRef(),n.photosRef=l.a.createRef(),n.reviewsRef=l.a.createRef(),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll)},r.render=function(){var e=this.state,t=e.menuToggled,n=e.showAttractions,o=e.showPhotos,r=e.showReviews;return l.a.createElement(c.e,null,l.a.createElement(c.g,{menuToggled:t,handleToggle:this.toggleMenu}),l.a.createElement(c.f,{showModal:t}),!t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:i.introContainer},l.a.createElement(c.d,{filename:"aelan_8.jpg",imgStyle:{filter:"brightness(0.5)"},style:{height:"100vh"}}),l.a.createElement("div",{className:i.introContainer_main},l.a.createElement("h1",{className:i.introContainer_title},w.landingTitle),l.a.createElement("p",{className:i.introContainer_subtitle},w.landingSubtitle),l.a.createElement("div",{className:i.introContainer_buttons},l.a.createElement(a.a,{type:"primary",shape:"round",size:"large"},l.a.createElement(s.a,{to:"/apartments"},w.exploreBtn)),l.a.createElement(a.a,{ghost:!0,shape:"round",size:"large"},l.a.createElement(s.a,{to:"/contact"},w.contactBtn)))),l.a.createElement("p",{className:i.introContainer_scroll},l.a.createElement("span",{className:i.introContainer_scroll_arrow}),"Scroll")),l.a.createElement(c.a,{show:n,htmlRef:this.attractionsRef}),l.a.createElement(c.h,{show:o,htmlRef:this.photosRef}),l.a.createElement(c.i,{show:r,htmlRef:this.reviewsRef}),l.a.createElement(c.c,null)))},o}(l.a.Component);t.default=h}}]);
//# sourceMappingURL=component---src-pages-index-tsx-54ede17e410d16c9c0c7.js.map