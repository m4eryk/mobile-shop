(function (t) { function e (e) { for (var a, o, s = e[0], i = e[1], u = e[2], l = 0, d = []; l < s.length; l++)o = s[l], Object.prototype.hasOwnProperty.call(n, o) && n[o] && d.push(n[o][0]), n[o] = 0; for (a in i)Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]); p && p(e); while (d.length)d.shift()(); return c.push.apply(c, u || []), r(); } function r () { for (var t, e = 0; e < c.length; e++) { for (var r = c[e], a = !0, o = 1; o < r.length; o++) { var s = r[o]; n[s] !== 0 && (a = !1); }a && (c.splice(e--, 1), t = i(i.s = r[0])); } return t; } var a = {}, o = { app: 0 }, n = { app: 0 }, c = []; function s (t) { return i.p + 'js/' + ({ about: 'about' }[t] || t) + '.' + { about: '8e6b8a76', 'chunk-1fd0d1ee': '99c912eb', 'chunk-383a92c9': '6e4392eb', 'chunk-3b05bc68': '8762fb88', 'chunk-3b496cd6': 'e9501eef', 'chunk-ac180358': 'bb674d0a' }[t] + '.js'; } function i (e) { if (a[e]) return a[e].exports; var r = a[e] = { i: e, l: !1, exports: {} }; return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports; }i.e = function (t) { var e = [], r = { about: 1, 'chunk-1fd0d1ee': 1, 'chunk-383a92c9': 1, 'chunk-3b05bc68': 1, 'chunk-3b496cd6': 1, 'chunk-ac180358': 1 }; o[t] ? e.push(o[t]) : o[t] !== 0 && r[t] && e.push(o[t] = new Promise(function (e, r) { for (var a = 'css/' + ({ about: 'about' }[t] || t) + '.' + { about: '0103099d', 'chunk-1fd0d1ee': '8952f3c7', 'chunk-383a92c9': '62e41b49', 'chunk-3b05bc68': 'ae09e5fd', 'chunk-3b496cd6': 'a7d30743', 'chunk-ac180358': 'a99e4a23' }[t] + '.css', n = i.p + a, c = document.getElementsByTagName('link'), s = 0; s < c.length; s++) { var u = c[s], l = u.getAttribute('data-href') || u.getAttribute('href'); if (u.rel === 'stylesheet' && (l === a || l === n)) return e(); } var d = document.getElementsByTagName('style'); for (s = 0; s < d.length; s++) { u = d[s], l = u.getAttribute('data-href'); if (l === a || l === n) return e(); } var p = document.createElement('link'); p.rel = 'stylesheet', p.type = 'text/css', p.onload = e, p.onerror = function (e) { var a = e && e.target && e.target.src || n, c = new Error('Loading CSS chunk ' + t + ' failed.\n(' + a + ')'); c.code = 'CSS_CHUNK_LOAD_FAILED', c.request = a, delete o[t], p.parentNode.removeChild(p), r(c); }, p.href = n; var m = document.getElementsByTagName('head')[0]; m.appendChild(p); }).then(function () { o[t] = 0; })); var a = n[t]; if (a !== 0) if (a)e.push(a[2]); else { var c = new Promise(function (e, r) { a = n[t] = [e, r]; }); e.push(a[2] = c); var u, l = document.createElement('script'); l.charset = 'utf-8', l.timeout = 120, i.nc && l.setAttribute('nonce', i.nc), l.src = s(t); var d = new Error(); u = function (e) { l.onerror = l.onload = null, clearTimeout(p); var r = n[t]; if (r !== 0) { if (r) { var a = e && (e.type === 'load' ? 'missing' : e.type), o = e && e.target && e.target.src; d.message = 'Loading chunk ' + t + ' failed.\n(' + a + ': ' + o + ')', d.name = 'ChunkLoadError', d.type = a, d.request = o, r[1](d); }n[t] = void 0; } }; var p = setTimeout(function () { u({ type: 'timeout', target: l }); }, 12e4); l.onerror = l.onload = u, document.head.appendChild(l); } return Promise.all(e); }, i.m = t, i.c = a, i.d = function (t, e, r) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }); }, i.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var r = Object.create(null); if (i.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var a in t)i.d(r, a, function (e) { return t[e]; }.bind(null, a)); return r; }, i.n = function (t) { var e = t && t.__esModule ? function () { return t['default']; } : function () { return t; }; return i.d(e, 'a', e), e; }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, i.p = '/', i.oe = function (t) { throw console.error(t), t; }; var u = window['webpackJsonp'] = window['webpackJsonp'] || [], l = u.push.bind(u); u.push = e, u = u.slice(); for (var d = 0; d < u.length; d++)e(u[d]); var p = l; c.push([0, 'chunk-vendors']), r(); })({ 0: function (t, e, r) { t.exports = r('56d7'); }, '0873': function (t, e, r) { 'use strict'; var a = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'cardTemplate' }, [r('div', { staticClass: 'card mb-4 shadow-sm' }, [r('img', { staticClass: 'card-img-top mt-2', staticStyle: { 'max-height': '700px', 'max-width': '127.135px', margin: 'auto' }, attrs: { src: t.item.productImage, alt: 'Card image cap' } }), r('div', { staticClass: 'card-body' }, [r('h6', { staticClass: 'card-text' }, [t._v(t._s(t.item.productName) + '.')]), r('p', { staticClass: 'card-text' }, [t._v(t._s(t.item.productDescription) + '.')]), r('div', { staticClass: 'd-flex justify-content-between align-items-center' }, [r('div', { staticClass: 'btn-group' }, [r('button', { staticClass: 'btn btn-sm btn-outline-secondary', attrs: { type: 'button' }, on: { click: function (e) { return t.navigateProductDetail(t.item); } } }, [t._v('View')]), t.loggedUser && t.loggedUser.isAdmin ? r('button', { staticClass: 'btn btn-sm btn-outline-secondary', attrs: { type: 'button' }, on: { click: function (e) { return t.updateEditProduct(t.item, t.item._id); } } }, [t._v('Edit')]) : t._e()]), r('small', { staticClass: 'text-muted footerIcons' }, [t._m(0), r('a', { staticClass: 'p-2', attrs: { href: 'javascript:;;' }, on: { click: function (e) { return t.addToCart(t.item); } } }, [r('i', { staticClass: 'fa fa-shopping-cart' })])])])])])]); }, o = [function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('a', { staticClass: 'p-2', attrs: { href: 'javascript:;;' } }, [r('i', { staticClass: 'fa fa-heart' })]); }], n = (r('8e6e'), r('ac6a'), r('456d'), r('7514'), r('bd86')), c = r('2f62'), s = r('6b22'), i = r('2ef0'), u = r.n(i); function l (t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(t); e && (a = a.filter(function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; })), r.push.apply(r, a); } return r; } function d (t) { for (var e = 1; e < arguments.length; e++) { var r = arguments[e] != null ? arguments[e] : {}; e % 2 ? l(r, !0).forEach(function (e) { Object(n['a'])(t, e, r[e]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(r).forEach(function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)); }); } return t; } var p = { name: 'cardTemplate', props: ['item'], data: function () { return { showModal: !1 }; }, components: {}, computed: Object(c['c'])(['loggedUser']), methods: d({ navigateProductDetail: function (t) { this.$router.push({ name: 'productDetails', params: { id: t._id } }); } }, Object(c['b'])(['ADD_CART_LOCAL']), { addToCart: function (t) { var e = u.a.find(this.$store.getters.cartProducts, t); e ? Object(s['b'])('Already Added', 'Product Already Added') : (Object(s['c'])('Added Successfully', 'Product Added Successfully'), this.ADD_CART_LOCAL(t)); }, updateEditProduct: function (t, e) { this.$parent.editProduct(t); } }), mounted: function () {} }, m = p, f = r('2877'), v = Object(f['a'])(m, a, o, !1, null, null, null); e['a'] = v.exports; }, '1d07': function (t, e, r) { 'use strict'; var a = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'modal edit-product showModal', attrs: { id: 'editProduct', tabindex: '-1', role: 'dialog', 'aria-labelledby': 'editProductLabel', 'aria-hidden': 'true' } }, [r('div', { staticClass: 'modal-dialog', attrs: { role: 'document' } }, [r('div', { staticClass: 'modal-content' }, [r('div', { staticClass: 'modal-header' }, [r('h5', { staticClass: 'modal-title', attrs: { id: 'editProductLabel' } }, [t._v(t._s(t.header))]), r('button', { staticClass: 'close', attrs: { type: 'button', 'aria-label': 'Close' }, on: { click: function (e) { return t.$emit('close'); } } }, [r('span', { attrs: { 'aria-hidden': 'true' } }, [t._v('×')])])]), r('div', { staticClass: 'modal-body' }, [t._t('default'), r('br')], 2)])])]); }, o = [], n = { props: ['header'], data: function () { return {}; }, methods: {} }, c = n, s = (r('41cb'), r('2877')), i = Object(s['a'])(c, a, o, !1, null, null, null); e['a'] = i.exports; }, '1df9': function (t, e, r) { 'use strict'; var a = r('4d44'), o = r.n(a); o.a; }, 2222: function (t, e, r) { 'use strict'; var a = r('3b91'), o = r.n(a); o.a; }, '3b91': function (t, e, r) {}, '41cb': function (t, e, r) { 'use strict'; var a = r('7e8b'), o = r.n(a); o.a; }, '4d44': function (t, e, r) {}, 5307: function (t, e, r) {}, '56d7': function (t, e, r) { 'use strict'; r.r(e); r('7f7f'), r('cadf'), r('551c'), r('f751'), r('097d'); var a = r('2b0e'), o = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a('div', { staticClass: 'container', attrs: { id: 'app' } }, [a('main', [a('nav', { staticClass: 'navbar navbar-expand-lg navbar-light bg-light', attrs: { id: 'nav' } }, [a('img', { attrs: { alt: 'Vue logo', src: r('cf05'), width: '50px' } }), t._m(0), a('div', { staticClass: 'collapse navbar-collapse', attrs: { id: 'navbarText' } }, [a('ul', { staticClass: 'navbar-nav mr-auto' }, [a('li', { staticClass: 'nav-item active' }, [a('router-link', { staticClass: 'nav-link', attrs: { to: '/' } }, [t._v('Home')])], 1), a('li', { staticClass: 'nav-item' }, [a('router-link', { staticClass: 'nav-link', attrs: { to: '/products' } }, [t._v('All Products')])], 1), t._m(1), a('li', { staticClass: 'nav-item' }, [a('router-link', { staticClass: 'nav-link', attrs: { to: '/about' } }, [t._v('About')])], 1)]), a('ul', { staticClass: 'navbar-nav ml-auto' }, [a('li', { staticClass: 'nav-item' }, [a('router-link', { staticClass: 'nav-link', attrs: { to: '/cart' } }, [a('i', { staticClass: 'fa fa-shopping-cart mr-1' }, [a('span', { staticClass: 'ml-1' }, [t._v(t._s(this.cartProducts.length))])])])], 1), t.isLogged() ? a('li', { staticClass: 'nav-item dropdown' }, [a('a', { staticClass: 'nav-link dropdown-toggle', attrs: { href: '#', id: 'navbarDropdownMenuLink', role: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' } }, [t._v(t._s(this.loggedUser.firstName))]), a('div', { staticClass: 'dropdown-menu', attrs: { 'aria-labelledby': 'navbarDropdownMenuLink' } }, [a('router-link', { staticClass: 'dropdown-item', attrs: { to: '/' } }, [t._v('Profile')]), a('router-link', { staticClass: 'dropdown-item text-danger', attrs: { to: '/' }, nativeOn: { click: function (e) { return t.loc_logout(e); } } }, [t._v('Logout')])], 1)]) : t._e(), t.isLogged() ? t._e() : a('li', { staticClass: 'nav-item' }, [a('router-link', { staticClass: 'nav-link', attrs: { to: '/login' } }, [t._v('Login')])], 1)])])]), a('router-view')], 1), t._m(2)]); }, n = [function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('button', { staticClass: 'navbar-toggler', attrs: { type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarText', 'aria-controls': 'navbarText', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' } }, [r('span', { staticClass: 'navbar-toggler-icon' })]); }, function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('li', { staticClass: 'nav-item' }, [r('a', { staticClass: 'nav-link', attrs: { href: '#' } }, [t._v('Pricing')])]); }, function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('footer', { staticClass: 'container-fluid footer text-left mt-3' }, [r('p', { staticClass: 'mr-auto' }, [t._v('\n      Developed by:\n      '), r('strong', [t._v('Mohammed Ismail')])]), r('div', { staticStyle: { float: 'right' } }, [r('a', { staticStyle: { 'margin-right': '10px' }, attrs: { href: 'mailto:ikismail7@gmail.com' } }, [r('i', { staticClass: 'fa fa-envelope-open', staticStyle: { 'font-size': '20px' }, attrs: { 'aria-hidden': 'true' } })]), r('a', { staticStyle: { 'margin-right': '10px' }, attrs: { href: 'https://github.com/ikismail', target: '_blank' } }, [r('i', { staticClass: 'fa fa-github', staticStyle: { 'font-size': '20px' }, attrs: { 'aria-hidden': 'true' } })]), r('a', { staticStyle: { 'margin-right': '10px' }, attrs: { href: 'https://www.linkedin.com/in/ikismail7/', target: '_blank' } }, [r('i', { staticClass: 'fa fa-linkedin', staticStyle: { 'font-size': '20px' }, attrs: { 'aria-hidden': 'true' } })])])]); }], c = (r('8e6e'), r('ac6a'), r('456d'), r('bd86')), s = r('2f62'), i = r('794f'); function u (t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(t); e && (a = a.filter(function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; })), r.push.apply(r, a); } return r; } function l (t) { for (var e = 1; e < arguments.length; e++) { var r = arguments[e] != null ? arguments[e] : {}; e % 2 ? u(r, !0).forEach(function (e) { Object(c['a'])(t, e, r[e]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(r).forEach(function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)); }); } return t; } var d = { data: function () { return { cartValue: 0 }; }, computed: Object(s['c'])(['cartProducts', 'loggedUser']), methods: l({}, Object(s['b'])(['SET_CART_PRODUCTS', 'ADD_LOGGED_USER']), { getLocalProducts: function () { var t = JSON.parse(localStorage.getItem('iki-cart')); t && this.SET_CART_PRODUCTS(t); }, isLogged: function () { return Object(i['c'])(); }, loc_logout: function () { localStorage.removeItem('_auth'), this.$router.push('/'), location.reload(); } }), created: function () { this.getLocalProducts(); var t = Object(i['b'])(); this.ADD_LOGGED_USER(t), console.log('production'), console.log('https://vue-shop-cart.herokuapp.com/api'); } }, p = d, m = (r('5c0b'), r('2877')), f = Object(m['a'])(p, o, n, !1, null, null, null), v = f.exports, g = r('8c4f'), h = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'home-component' }, [t._m(0), r('nav', { attrs: { 'aria-label': 'breadcrumb' } }, [r('ol', { staticClass: 'breadcrumb' }, [r('li', { staticClass: 'breadcrumb-item active', attrs: { 'aria-current': 'page' } }, [t._v('Our Best Products')]), r('li', { staticClass: 'ml-auto', attrs: { 'aria-current': 'page' } }, [r('router-link', { attrs: { to: '/products' } }, [t._v('Show All')])], 1)])]), r('BestProducts'), r('nav', { attrs: { 'aria-label': 'breadcrumb' } }, [r('ol', { staticClass: 'breadcrumb' }, [r('li', { staticClass: 'breadcrumb-item active ', attrs: { 'aria-current': 'page' } }, [t._v('Our Top Products')]), r('li', { staticClass: 'ml-auto', attrs: { 'aria-current': 'page' } }, [r('router-link', { attrs: { to: '/products' } }, [t._v('Show All')])], 1)])]), r('TopProducts')], 1); }, b = [function () { var t = this, e = t.$createElement, a = t._self._c || e; return a('div', { staticClass: 'jumbotron jumbotron-fluid' }, [a('div', { staticClass: 'container' }, [a('img', { attrs: { alt: 'Vue logo', src: r('cf05'), width: '100px' } }), a('h3', { staticClass: 'display-5 ' }, [a('span', { staticStyle: { color: '#42b983' } }, [t._v('ikismail - VueShop')])]), a('p', { staticClass: 'lead' }, [t._v('A ShoppingCart (Ecommerce) Application using Vue.js.')])])]); }], _ = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'hello' }, [r('h1', [t._v(t._s(t.msg))]), t._m(0), r('h3', [t._v('Installed CLI Plugins')]), t._m(1), r('h3', [t._v('Essential Links')]), t._m(2), r('h3', [t._v('Ecosystem')]), t._m(3)]); }, C = [function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('p', [t._v('\n    For guide and recipes on how to configure / customize this project,'), r('br'), t._v('\n    check out the\n    '), r('a', { attrs: { href: 'https://cli.vuejs.org', target: '_blank', rel: 'noopener' } }, [t._v('vue-cli documentation')]), t._v('.\n  ')]); }, function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('ul', [r('li', [r('a', { attrs: { href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel', target: '_blank', rel: 'noopener' } }, [t._v('babel')])]), r('li', [r('a', { attrs: { href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint', target: '_blank', rel: 'noopener' } }, [t._v('eslint')])]), r('li', [r('a', { attrs: { href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa', target: '_blank', rel: 'noopener' } }, [t._v('pwa')])])]); }, function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('ul', [r('li', [r('a', { attrs: { href: 'https://vuejs.org', target: '_blank', rel: 'noopener' } }, [t._v('Core Docs')])]), r('li', [r('a', { attrs: { href: 'https://forum.vuejs.org', target: '_blank', rel: 'noopener' } }, [t._v('Forum')])]), r('li', [r('a', { attrs: { href: 'https://chat.vuejs.org', target: '_blank', rel: 'noopener' } }, [t._v('Community Chat')])]), r('li', [r('a', { attrs: { href: 'https://twitter.com/vuejs', target: '_blank', rel: 'noopener' } }, [t._v('Twitter')])]), r('li', [r('a', { attrs: { href: 'https://news.vuejs.org', target: '_blank', rel: 'noopener' } }, [t._v('News')])])]); }, function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('ul', [r('li', [r('a', { attrs: { href: 'https://router.vuejs.org', target: '_blank', rel: 'noopener' } }, [t._v('vue-router')])]), r('li', [r('a', { attrs: { href: 'https://vuex.vuejs.org', target: '_blank', rel: 'noopener' } }, [t._v('vuex')])]), r('li', [r('a', { attrs: { href: 'https://github.com/vuejs/vue-devtools#vue-devtools', target: '_blank', rel: 'noopener' } }, [t._v('vue-devtools')])]), r('li', [r('a', { attrs: { href: 'https://vue-loader.vuejs.org', target: '_blank', rel: 'noopener' } }, [t._v('vue-loader')])]), r('li', [r('a', { attrs: { href: 'https://github.com/vuejs/awesome-vue', target: '_blank', rel: 'noopener' } }, [t._v('awesome-vue')])])]); }], y = { name: 'HelloWorld', props: { msg: String } }, P = y, k = (r('a5c6'), Object(m['a'])(P, _, C, !1, null, 'f64a417c', null)), w = k.exports, O = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'best-products' }, [r('div', { staticClass: 'row' }, [t.loading ? r('card-loader', { attrs: { loopCount: 4 } }) : t._e(), t._l(t.bestProducts, function (t, e) { return r('div', { key: e, staticClass: 'col-md-3' }, [r('card-template', { attrs: { item: t } })], 1); })], 2), r('edit-product', { ref: 'editProduct' })], 1); }, j = [], S = r('bc3a'), x = r.n(S), E = r('6b22'), D = r('6a8c'), T = r('0873'), A = r('d912'), $ = { name: 'BestProducts', components: { CardLoader: D['a'], CardTemplate: T['a'], EditProduct: A['a'] }, data: function () { return { bestProducts: [], loading: !1 }; }, methods: { editProduct: function (t) { this.$refs.editProduct.setProduct(t); }, getBestProducts: function () { var t = this; this.loading = !0, x.a.get(''.concat('https://vue-shop-cart.herokuapp.com/api', '/best/products')).then(function (e) { t.loading = !1, t.bestProducts = e.data; }).catch(function (t) { console.log(t), Object(E['a'])('The server encountered an unexpected condition.', 'Internal Error 500'); }); } }, created: function () { this.getBestProducts(); } }, N = $, L = (r('6acc'), Object(m['a'])(N, O, j, !1, null, null, null)), B = L.exports, I = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'top-products' }, [r('div', { staticClass: 'row' }, [t.loading ? r('card-loader', { attrs: { loopCount: 4 } }) : t._e(), t._l(t.topProducts, function (t, e) { return r('div', { key: e, staticClass: 'col-md-3' }, [r('card-template', { attrs: { item: t } })], 1); })], 2), r('edit-product', { ref: 'editProduct' })], 1); }, U = [], R = { name: 'TopProducts', components: { CardLoader: D['a'], CardTemplate: T['a'], EditProduct: A['a'] }, data: function () { return { topProducts: [], loading: !1 }; }, methods: { editProduct: function (t) { this.$refs.editProduct.setProduct(t); }, getTopProducts: function () { var t = this; this.loading = !0, x.a.get(''.concat('https://vue-shop-cart.herokuapp.com/api', '/top/products')).then(function (e) { t.loading = !1, t.topProducts = e.data; }).catch(function (t) { Object(E['a'])('The server encountered an unexpected condition.', 'Internal Error 500'); }); } }, created: function () { this.getTopProducts(); } }, M = R, F = (r('2222'), Object(m['a'])(M, I, U, !1, null, null, null)), V = F.exports, q = { name: 'home', components: { HelloWorld: w, BestProducts: B, TopProducts: V } }, G = q, H = (r('cccb'), Object(m['a'])(G, h, b, !1, null, null, null)), J = H.exports; a['a'].use(g['a']); var z = new g['a']({ mode: 'hash', base: '/', routes: [{ path: '/', name: 'home', component: J }, { path: '/about', name: 'about', component: function () { return r.e('about').then(r.bind(null, 'f820')); } }, { path: '/products', name: 'products', component: function () { return r.e('chunk-1fd0d1ee').then(r.bind(null, 'e6dc')); } }, { path: '/products/:id', name: 'productDetails', component: function () { return r.e('chunk-383a92c9').then(r.bind(null, 'f7b1')); } }, { path: '/cart', name: 'cart', component: function () { return r.e('chunk-3b496cd6').then(r.bind(null, '70a4')); }, beforeEnter: function (t, e, r) { Object(i['c'])() ? r() : r({ name: 'login', query: { from: t.name } }); } }, { path: '/checkout', name: 'checkout', component: function () { return r.e('chunk-3b05bc68').then(r.bind(null, '31e7')); }, beforeEnter: function (t, e, r) { Object(i['c'])() ? r() : r({ name: 'login', query: { from: t.name } }); } }, { path: '/login', name: 'login', component: function () { return r.e('chunk-ac180358').then(r.bind(null, 'dd7b')); } }] }); a['a'].use(s['a']); var W = new s['a'].Store({ state: { cartProducts: [], loggedUser: {} }, getters: { cartProducts: function (t) { return t.cartProducts; }, getLoggedUser: function (t) { return t.loggedUser; } }, mutations: { ADD_CART_LOCAL: function (t, e) { t.cartProducts.push(e), localStorage.setItem('iki-cart', JSON.stringify(t.cartProducts)); }, ADD_LOGGED_USER: function (t, e) { t.loggedUser = e, localStorage.setItem('_auth', Object(i['a'])(e)); }, SET_CART_PRODUCTS: function (t, e) { t.cartProducts = [], t.cartProducts = e; } }, actions: {} }), K = r('9483'); Object(K['a'])(''.concat('/', 'service-worker.js'), { ready: function () { console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'); }, cached: function () { console.log('Content has been cached for offline use.'); }, updated: function () { console.log('New content is available; please refresh.'), Object(E['b'])('Please refresh', 'New content is available'); }, offline: function () { console.log('No internet connection found. App is running in offline mode.'); }, error: function (t) { console.error('Error during service worker registration:', t), Object(E['a'])('Error during service worker registration', t); } }); var Q = r('7212'), X = r.n(Q), Y = r('323e'), Z = r.n(Y); r('dfa4'), r('a5d8'); a['a'].use(X.a), a['a'].config.productionTip = !1, z.beforeResolve(function (t, e, r) { t.name && Z.a.start(), r(); }), z.afterEach(function () { Z.a.done(); }); new a['a']({ router: z, store: W, render: function (t) { return t(v); } }).$mount('#app'); }, '5c0b': function (t, e, r) { 'use strict'; var a = r('e332'), o = r.n(a); o.a; }, '6a8c': function (t, e, r) { 'use strict'; var a = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'cardLoader' }, [r('div', { staticClass: 'row' }, t._l(t.loopCount, function (t) { return r('div', { key: t, staticClass: 'col-md-3' }, [r('vcl-instagram', { staticStyle: { padding: '20px' }, attrs: { width: 220, height: 450 } })], 1); }), 0)]); }, o = [], n = r('68ee'), c = { name: 'cardLoader', props: ['loopCount'], components: { VclInstagram: n['VclInstagram'] } }, s = c, i = r('2877'), u = Object(i['a'])(s, a, o, !1, null, null, null); e['a'] = u.exports; }, '6acc': function (t, e, r) { 'use strict'; var a = r('5307'), o = r.n(a); o.a; }, '6b22': function (t, e, r) { 'use strict'; r.d(e, 'c', function () { return n; }), r.d(e, 'a', function () { return c; }), r.d(e, 'b', function () { return s; }); var a = r('854a'), o = r.n(a), n = function (t, e) { return o.a.success(e, t); }, c = function (t, e) { return o.a.error(e, t); }, s = function (t, e) { return o.a.info(e, t); }; }, '794f': function (t, e, r) { 'use strict'; (function (t) { r.d(e, 'a', function () { return a; }), r.d(e, 'c', function () { return n; }), r.d(e, 'b', function () { return c; }); r('6b54'); var a = function (e) { var r = JSON.stringify(e), a = new t(r).toString('base64'); return a; }, o = function () { var e = localStorage.getItem('_auth'); if (!e) return null; var r = new t(e || '', 'base64').toString('utf8'), a = JSON.parse(r); return a; }, n = function () { var t = o(); return !!t; }, c = function () { var t = o(); return t; }; }).call(this, r('b639').Buffer); }, '7e8b': function (t, e, r) {}, a5c6: function (t, e, r) { 'use strict'; var a = r('e606'), o = r.n(a); o.a; }, b566: function (t, e, r) { 'use strict'; var a = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'productForm' }, [t.loading ? t._e() : r('form', { attrs: { id: 'productCU' }, on: { submit: t.actionProduct } }, [t.errors.length ? r('p', [r('b', [t._v('Please correct the following error(s):')]), r('ul', t._l(t.errors, function (e) { return r('li', { key: e }, [t._v(t._s(e))]); }), 0)]) : t._e(), r('div', { staticClass: 'form-group' }, [r('label', { attrs: { for: 'productName' } }, [t._v('Product Name')]), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.product.productName, expression: 'product.productName' }], staticClass: 'form-control', attrs: { type: 'text', id: 'productName', name: 'productName', 'aria-describedby': 'emailHelp', placeholder: 'Enter Product Name' }, domProps: { value: t.product.productName }, on: { input: function (e) { e.target.composing || t.$set(t.product, 'productName', e.target.value); } } }), r('small', { staticClass: 'form-text text-muted', attrs: { id: 'emailHelp' } }, [t._v('We\'ll never share your email with anyone else.')])]), r('div', { staticClass: 'form-group' }, [r('label', { attrs: { for: 'productCategory' } }, [t._v('Product Category')]), t.product.productCategory !== 'Create New' ? r('select', { directives: [{ name: 'model', rawName: 'v-model', value: t.product.productCategory, expression: 'product.productCategory' }], staticClass: 'form-control', attrs: { id: 'productCategory', name: 'productCategory' }, on: { change: function (e) { var r = Array.prototype.filter.call(e.target.options, function (t) { return t.selected; }).map(function (t) { var e = '_value' in t ? t._value : t.value; return e; }); t.$set(t.product, 'productCategory', e.target.multiple ? r : r[0]); } } }, t._l(t.categories, function (e, a) { return r('option', { key: a, domProps: { value: e.productCategory } }, [t._v(t._s(e.productCategory) + '\n                ')]); }), 0) : t._e(), t.product.productCategory === 'Create New' ? r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.product.productCategroyDummy, expression: 'product.productCategroyDummy' }], staticClass: 'form-control', attrs: { type: 'password', id: 'productCategroyDummy', placeholder: 'Password', name: 'productCategroyDummy' }, domProps: { value: t.product.productCategroyDummy }, on: { input: function (e) { e.target.composing || t.$set(t.product, 'productCategroyDummy', e.target.value); } } }) : t._e()]), r('div', { staticClass: 'form-group' }, [r('label', { attrs: { for: 'productSeller' } }, [t._v('Product Seller')]), t.product.productSeller !== 'Create New' ? r('select', { directives: [{ name: 'model', rawName: 'v-model', value: t.product.productSeller, expression: 'product.productSeller' }], staticClass: 'form-control', attrs: { id: 'productSeller', name: 'productSeller' }, on: { change: function (e) { var r = Array.prototype.filter.call(e.target.options, function (t) { return t.selected; }).map(function (t) { var e = '_value' in t ? t._value : t.value; return e; }); t.$set(t.product, 'productSeller', e.target.multiple ? r : r[0]); } } }, t._l(t.sellers, function (e, a) { return r('option', { key: a, domProps: { value: e.productSeller } }, [t._v(t._s(e.productSeller) + '\n                ')]); }), 0) : t._e(), t.product.productSeller === 'Create New' ? r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.product.productSellerDummy, expression: 'product.productSellerDummy' }], staticClass: 'form-control', attrs: { type: 'password', id: 'productSellerDummy', placeholder: 'Password', name: 'productSellerDummy' }, domProps: { value: t.product.productSellerDummy }, on: { input: function (e) { e.target.composing || t.$set(t.product, 'productSellerDummy', e.target.value); } } }) : t._e()]), r('div', { staticClass: 'row' }, [r('div', { staticClass: 'col' }, [r('div', { staticClass: 'form-group' }, [r('label', { attrs: { for: 'isBestProduct' } }, [t._v('Best Product')]), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.product.isBestProduct, expression: 'product.isBestProduct' }], staticClass: 'form-control', attrs: { type: 'checkbox', id: 'isBestProduct', name: 'isBestProduct', placeholder: 'Password' }, domProps: { checked: Array.isArray(t.product.isBestProduct) ? t._i(t.product.isBestProduct, null) > -1 : t.product.isBestProduct }, on: { change: function (e) { var r = t.product.isBestProduct, a = e.target, o = !!a.checked; if (Array.isArray(r)) { var n = null, c = t._i(r, n); a.checked ? c < 0 && t.$set(t.product, 'isBestProduct', r.concat([n])) : c > -1 && t.$set(t.product, 'isBestProduct', r.slice(0, c).concat(r.slice(c + 1))); } else t.$set(t.product, 'isBestProduct', o); } } })])]), r('div', { staticClass: 'col' }, [r('div', { staticClass: 'form-group' }, [r('label', { attrs: { for: 'isTopProduct' } }, [t._v('Top Product')]), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.product.isTopProduct, expression: 'product.isTopProduct' }], staticClass: 'form-control', attrs: { type: 'checkbox', id: 'isTopProduct', name: 'isTopProduct', placeholder: 'Password' }, domProps: { checked: Array.isArray(t.product.isTopProduct) ? t._i(t.product.isTopProduct, null) > -1 : t.product.isTopProduct }, on: { change: function (e) { var r = t.product.isTopProduct, a = e.target, o = !!a.checked; if (Array.isArray(r)) { var n = null, c = t._i(r, n); a.checked ? c < 0 && t.$set(t.product, 'isTopProduct', r.concat([n])) : c > -1 && t.$set(t.product, 'isTopProduct', r.slice(0, c).concat(r.slice(c + 1))); } else t.$set(t.product, 'isTopProduct', o); } } })])]), t._m(0)]), r('div', { staticClass: 'form-group' }, [r('label', { attrs: { for: 'productImage' } }, [t._v('Product Image')]), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.product.productImage, expression: 'product.productImage' }], staticClass: 'form-control', attrs: { type: 'text', id: 'productImage', placeholder: 'Product Image URL' }, domProps: { value: t.product.productImage }, on: { input: function (e) { e.target.composing || t.$set(t.product, 'productImage', e.target.value); } } })]), r('br'), r('button', { staticClass: 'btn buttonGreen', attrs: { type: 'submit' } }, [t._v('Save changes')])]), t.loading ? r('div', { staticClass: 'lds-dual-ring' }) : t._e()]); }, o = [function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'col' }, [r('div', { staticClass: 'form-group' }, [r('label', { attrs: { for: 'productRating' } }, [t._v('Product Rating')]), r('input', { staticClass: 'form-control', attrs: { type: 'password', id: 'productRating', placeholder: 'Password' } })])]); }], n = r('bc3a'), c = r.n(n), s = r('6b22'), i = { name: 'productForm', props: ['product'], data: function () { return { errors: [], productCategroyDummy: '', productSellerDummy: '', categories: [], sellers: [], loading: !1 }; }, methods: { actionProduct: function (t) { t.preventDefault(), this.$emit('submit-form', this.product); } }, created: function () { var t = this; this.loading = !0, c.a.get(''.concat('https://vue-shop-cart.herokuapp.com/api', '/products')).then(function (e) { t.categories = _.uniqBy(_.map(e.data, function (t) { return _.pick(t, ['productCategory']); }), 'productCategory'), t.categories.push({ productCategory: 'Create New' }), t.sellers = _.uniqBy(_.map(e.data, function (t) { return _.pick(t, ['productSeller']); }), 'productSeller'), t.sellers.push({ productSeller: 'Create New' }), t.loading = !1; }).catch(function (t) { console.log(t), Object(s['a'])('Error while fetching products', ''); }); } }, u = i, l = (r('1df9'), r('2877')), d = Object(l['a'])(u, a, o, !1, null, null, null); e['a'] = d.exports; }, cccb: function (t, e, r) { 'use strict'; var a = r('d563'), o = r.n(a); o.a; }, cf05: function (t, e, r) { t.exports = r.p + 'img/logo.06017326.png'; }, d563: function (t, e, r) {}, d912: function (t, e, r) { 'use strict'; var a = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'edit-product' }, [t.showModal ? r('modal', { attrs: { header: 'Edit Product', isShow: t.showModal }, on: { close: function (e) { t.showModal = !1; } } }, [r('product-form', { attrs: { product: t.product }, on: { 'submit-form': t.productAction } })], 1) : t._e()], 1); }, o = [], n = r('1d07'), c = r('b566'), s = { name: 'editProduct', components: { Modal: n['a'], ProductForm: c['a'] }, data: function () { return { product: new Object(), showModal: !1 }; }, methods: { setProduct: function (t) { this.showModal = !0, this.product = t; }, productAction: function (t) { console.log('Updated Product Details', t); } } }, i = s, u = r('2877'), l = Object(u['a'])(i, a, o, !1, null, null, null); e['a'] = l.exports; }, e332: function (t, e, r) {}, e606: function (t, e, r) {} });
// # sourceMappingURL=app.87478713.js.map
