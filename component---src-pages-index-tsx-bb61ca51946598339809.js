(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{193:function(e,t,n){"use strict";n.r(t);n(284);var o=n(285),a=n.n(o),r=n(0),s=n.n(r),l=n(445),i=n(223);var c=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).toggleMenu=function(){var e=n.state.menuToggled;n.setState({menuToggled:!e})},n.handleScroll=function(){var e=n.attractionsRef.current,t=n.photosRef.current,o=n.reviewsRef.current;if(e&&t&&o){var a=n.state,r=a.showAttractions,s=a.showPhotos,l=a.showReviews,i=(window.scrollY+e.getBoundingClientRect().top)/3<window.scrollY,c=(window.scrollY+t.getBoundingClientRect().top)/2<window.scrollY,h=(window.scrollY+o.getBoundingClientRect().top)/2<window.scrollY;r!==i&&n.setState({showAttractions:i}),s!==c&&n.setState({showPhotos:c}),l!==h&&n.setState({showReviews:h})}},n.state={menuToggled:!1,showAttractions:!1,showPhotos:!1,showReviews:!1},n.attractionsRef=s.a.createRef(),n.photosRef=s.a.createRef(),n.reviewsRef=s.a.createRef(),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll)},r.render=function(){var e=this.state,t=e.menuToggled,n=e.showAttractions,o=e.showPhotos,r=e.showReviews;return s.a.createElement(i.d,null,s.a.createElement(i.f,{menuToggled:t,handleToggle:this.toggleMenu}),s.a.createElement(i.e,{showModal:t}),!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:l.introContainer},s.a.createElement(i.c,{filename:"palm-trees1.png",imgStyle:{filter:"brightness(0.5)"},style:{height:"100vh"}}),s.a.createElement("div",{className:l.introContainer_main},s.a.createElement("h1",{className:l.introContainer_title},"Welcome to Aelan Place"),s.a.createElement("p",{className:l.introContainer_subtitle},"Cosy tropical apartments"),s.a.createElement("div",{className:l.introContainer_buttons},s.a.createElement(a.a,{type:"primary",shape:"round",size:"large"},"Explore the beauty"),s.a.createElement(a.a,{ghost:!0,shape:"round",size:"large"},"Contact us")))),s.a.createElement(i.a,{show:n,htmlRef:this.attractionsRef}),s.a.createElement(i.g,{show:o,htmlRef:this.photosRef}),s.a.createElement(i.h,{show:r,htmlRef:this.reviewsRef}),s.a.createElement(i.b,null)))},o}(s.a.Component);t.default=c}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bb61ca51946598339809.js.map