(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{207:function(e,t,n){"use strict";n.r(t);n(285);var o=n(286),a=n.n(o),r=n(0),s=n.n(r),l=n(233),i=n(808),c=n(251);var h=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).toggleMenu=function(){var e=n.state.menuToggled;n.setState({menuToggled:!e})},n.handleScroll=function(){var e=n.attractionsRef.current,t=n.photosRef.current,o=n.reviewsRef.current;if(e&&t&&o){var a=n.state,r=a.showAttractions,s=a.showPhotos,l=a.showReviews,i=(window.scrollY+e.getBoundingClientRect().top)/3<window.scrollY,c=(window.scrollY+t.getBoundingClientRect().top)/2<window.scrollY,h=(window.scrollY+o.getBoundingClientRect().top)/2<window.scrollY;r!==i&&n.setState({showAttractions:i}),s!==c&&n.setState({showPhotos:c}),l!==h&&n.setState({showReviews:h})}},n.state={menuToggled:!1,showAttractions:!1,showPhotos:!1,showReviews:!1},n.attractionsRef=s.a.createRef(),n.photosRef=s.a.createRef(),n.reviewsRef=s.a.createRef(),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll)},r.render=function(){var e=this.state,t=e.menuToggled,n=e.showAttractions,o=e.showPhotos,r=e.showReviews;return s.a.createElement(c.d,null,s.a.createElement(c.f,{menuToggled:t,handleToggle:this.toggleMenu}),s.a.createElement(c.e,{showModal:t}),!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:i.introContainer},s.a.createElement(c.c,{filename:"palm-trees1.png",imgStyle:{filter:"brightness(0.5)"},style:{height:"100vh"}}),s.a.createElement("div",{className:i.introContainer_main},s.a.createElement("h1",{className:i.introContainer_title},"Welcome to Aelan Place"),s.a.createElement("p",{className:i.introContainer_subtitle},"Cosy tropical apartments"),s.a.createElement("div",{className:i.introContainer_buttons},s.a.createElement(a.a,{type:"primary",shape:"round",size:"large"},s.a.createElement(l.a,{to:"/apartments"},"Explore the beauty")),s.a.createElement(a.a,{ghost:!0,shape:"round",size:"large"},s.a.createElement(l.a,{to:"/contact"},"Contact us"))))),s.a.createElement(c.a,{show:n,htmlRef:this.attractionsRef}),s.a.createElement(c.g,{show:o,htmlRef:this.photosRef}),s.a.createElement(c.h,{show:r,htmlRef:this.reviewsRef}),s.a.createElement(c.b,null)))},o}(s.a.Component);t.default=h}}]);
//# sourceMappingURL=component---src-pages-index-tsx-486398306b97f2366884.js.map