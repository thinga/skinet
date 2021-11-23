(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jcJX:function(t,e,r){"use strict";r.r(e),r.d(e,"AccountModule",function(){return x});var n=r("ofXK"),i=r("tyNb"),o=r("3Pt+"),s=r("fXoL"),a=r("2rwd"),c=r("gA0Q");let l=(()=>{class t{constructor(t,e,r){this.accountService=t,this.router=e,this.activatedRoute=r}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.e({email:new o.c("",[o.q.required,o.q.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new o.c("",o.q.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(a.a),s.Nb(i.c),s.Nb(i.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-login"]],decls:10,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"form",2),s.ac("ngSubmit",function(){return e.onSubmit()}),s.Tb(3,"div",3),s.Tb(4,"h1",4),s.Bc(5,"Login"),s.Sb(),s.Sb(),s.Ob(6,"app-text-input",5),s.Ob(7,"app-text-input",6),s.Tb(8,"button",7),s.Bc(9,"Sign in"),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(2),s.ic("formGroup",e.loginForm),s.Cb(4),s.ic("label","Email Address"),s.Cb(1),s.ic("label","Password")("type","password"),s.Cb(1),s.ic("disabled",e.loginForm.invalid))},directives:[o.r,o.l,o.f,c.a,o.k,o.d],styles:[""]}),t})();var b=r("HDdC"),u=r("D0XW"),m=r("DH7j");function p(t){return!Object(m.a)(t)&&t-parseFloat(t)+1>=0}var d=r("z+Ro");function f(t){const{index:e,period:r,subscriber:n}=t;if(n.next(e),!n.closed){if(-1===r)return n.complete();t.index=e+1,this.schedule(t,r)}}var g=r("LRne"),h=r("eIep"),w=r("lJxs");function v(t,e){if(1&t&&(s.Tb(0,"li"),s.Bc(1),s.Sb()),2&t){const t=e.$implicit;s.Cb(1),s.Dc(" ",t," ")}}function S(t,e){if(1&t&&(s.Tb(0,"ul",10),s.zc(1,v,2,1,"li",11),s.Sb()),2&t){const t=s.cc();s.Cb(1),s.ic("ngForOf",t.errors)}}const y=[{path:"login",component:l},{path:"register",component:(()=>{class t{constructor(t,e,r){this.fb=t,this.accountService=e,this.router=r}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.q.required]],email:[null,[o.q.required,o.q.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,o.q.required]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(t=>{this.router.navigateByUrl("/shop")},t=>{console.log(t),this.errors=t.errors})}validateEmailNotTaken(){return t=>function(t=0,e,r){let n=-1;return p(e)?n=Number(e)<1?1:Number(e):Object(d.a)(e)&&(r=e),Object(d.a)(r)||(r=u.a),new b.a(e=>{const i=p(t)?t:+t-r.now();return r.schedule(f,i,{index:0,period:n,subscriber:e})})}(500).pipe(Object(h.a)(()=>t.value?this.accountService.checkEmailExists(t.value).pipe(Object(w.a)(t=>t?{emailExists:!0}:null)):Object(g.a)(null)))}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(o.b),s.Nb(a.a),s.Nb(i.c))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-register"]],decls:12,vars:6,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"form",2),s.ac("ngSubmit",function(){return e.onSubmit()}),s.Tb(3,"div",3),s.Tb(4,"h1",4),s.Bc(5,"Register"),s.Sb(),s.Sb(),s.Ob(6,"app-text-input",5),s.Ob(7,"app-text-input",6),s.Ob(8,"app-text-input",7),s.zc(9,S,2,1,"ul",8),s.Tb(10,"button",9),s.Bc(11,"Register"),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(2),s.ic("formGroup",e.registerForm),s.Cb(4),s.ic("label","Display Name"),s.Cb(1),s.ic("label","Email address"),s.Cb(1),s.ic("label","Password")("type","password"),s.Cb(1),s.ic("ngIf",e.errors))},directives:[o.r,o.l,o.f,c.a,o.k,o.d,n.m,n.l],styles:[""]}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({imports:[[i.g.forChild(y)],i.g]}),t})();var C=r("PCNd");let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({imports:[[n.c,N,C.a]]}),t})()}}]);