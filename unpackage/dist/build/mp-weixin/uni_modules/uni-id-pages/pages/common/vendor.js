(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/common/vendor"],{d936:function(e,t,r){"use strict";(function(e){var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("9523")),i=r("d07c"),s=n(r("ec33"));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={data:function(){return{config:s.default,uniIdRedirectUrl:"",isMounted:!1}},onUnload:function(){},mounted:function(){this.isMounted=!0},onLoad:function(t){var r=this;if(t.is_weixin_redirect){if(e.showLoading({mask:!0}),window.location.href.includes("#")){var n=window.location.href.split("?")[1].split("&");n.forEach((function(e){var r=e.split("=");"code"==r[0]&&(t.code=r[1])}))}this.$nextTick((function(e){r.$refs.uniFabLogin.login({code:t.code},"weixin")}))}t.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(t.uniIdRedirectUrl)),1===getCurrentPages().length&&(e.hideHomeButton(),console.log("已隐藏：返回首页按钮"))},computed:{needAgreements:function(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get:function(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set:function(e){this.$refs.agreements?this.$refs.agreements.isAgree=e:console.log("不存在 隐私政策协议组件")}}},methods:{loginSuccess:function(e){i.mutations.loginSuccess(a(a({},e),{},{uniIdRedirectUrl:this.uniIdRedirectUrl}))}}},d=c;t.default=d}).call(this,r("543d")["default"])},eb37:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("ec33")),i=o.default.passwordStrength,s={super:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,strong:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,medium:/^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$)[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,weak:/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,16}$/},u={normal:{noPwd:"请输入密码",noRePwd:"再次输入密码",rePwdErr:"两次输入密码不一致"},passwordStrengthError:{super:"密码必须包含大小写字母、数字和特殊符号，密码长度必须在8-16位之间",strong:"密码必须包含字母、数字和特殊符号，密码长度必须在8-16位之间",medium:"密码必须为字母、数字和特殊符号任意两种的组合，密码长度必须在8-16位之间",weak:"密码必须包含字母，密码长度必须在6-16位之间"}};function a(e){return!(i&&s[i]&&!new RegExp(s[i]).test(e))||u.passwordStrengthError[i]}var c={ERROR:u,validPwd:a,getPwdRules:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"password",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"password2",r={};return r[e]={rules:[{required:!0,errorMessage:u.normal.noPwd},{validateFunction:function(e,t,r,n){var o=a(t);return!0!==o&&n(o),!0}}]},t&&(r[t]={rules:[{required:!0,errorMessage:u.normal.noRePwd},{validateFunction:function(t,r,n,o){return r!=n[e]&&o(u.normal.rePwdErr),!0}}]}),r}};t.default=c},f0bf:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("9523")),i=n(r("eb37"));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({username:{rules:[{required:!0,errorMessage:"请输入用户名"},{minLength:3,maxLength:32,errorMessage:"用户名长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(e,t,r,n){return(/^1\d{10}$/.test(t)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(t))&&n("用户名不能是：手机号或邮箱"),/^\d+$/.test(t)&&n("用户名不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(t)&&n("用户名不能包含中文"),!0}}],label:"用户名"},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(e,t,r,n){return(/^1\d{10}$/.test(t)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(t))&&n("昵称不能是：手机号或邮箱"),/^\d+$/.test(t)&&n("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(t)&&n("昵称不能包含中文"),!0}}],label:"昵称"}},i.default.getPwdRules());t.default=u}}]);