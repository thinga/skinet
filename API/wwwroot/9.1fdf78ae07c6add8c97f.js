(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6ANv":function(t,e,n){"use strict";n.r(e),n.d(e,"ShopModule",function(){return F});var c=n("ofXK"),s=n("PCNd"),i=n("tyNb");class o{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6}}var a=n("fXoL"),r=n("tk/3");class p{constructor(){this.data=[]}}var u=n("lJxs"),b=n("LRne"),h=n("AytR");let d=(()=>{class t{constructor(t){this.http=t,this.baseUrl=h.a.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new p,this.shopParams=new o,this.productCache=new Map}getProducts(t){if(!1===t&&(this.productCache=new Map),this.productCache.size>0&&!0===t&&this.productCache.has(Object.values(this.shopParams).join("-")))return this.pagination.data=this.productCache.get(Object.values(this.shopParams).join("-")),Object(b.a)(this.pagination);let e=new r.e;return 0!==this.shopParams.brandId&&(e=e.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(e=e.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(e=e.append("search",this.shopParams.search)),e=e.append("sort",this.shopParams.sort),e=e.append("pageIndex",this.shopParams.pageNumber.toString()),e=e.append("pageSize",this.shopParams.pageSize.toString()),this.http.get(this.baseUrl+"products",{observe:"response",params:e}).pipe(Object(u.a)(t=>(this.productCache.set(Object.values(this.shopParams).join("-"),t.body.data),this.pagination=t.body,this.pagination)))}setShopParams(t){this.shopParams=t}getShopParams(){return this.shopParams}getProduct(t){let e;return this.productCache.forEach(n=>{e=n.find(e=>e.id===t)}),e?Object(b.a)(e):this.http.get(this.baseUrl+"products/"+t)}getBrands(){return this.brands.length>0?Object(b.a)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe(Object(u.a)(t=>(this.brands=t,t)))}getTypes(){return this.types.length>0?Object(b.a)(this.types):this.http.get(this.baseUrl+"products/types").pipe(Object(u.a)(t=>(this.types=t,t)))}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(r.b))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function l(t,e){if(1&t&&(a.Tb(0,"span"),a.Bc(1," Showing "),a.Tb(2,"strong"),a.Bc(3),a.Sb(),a.Bc(4," of "),a.Tb(5,"strong"),a.Bc(6),a.Sb(),a.Bc(7," Results"),a.Sb()),2&t){const t=a.cc();a.Cb(3),a.Ec(" ",(t.pageNumber-1)*t.pageSize+1," - ",t.pageNumber*t.pageSize>t.totalCount?t.totalCount:t.pageNumber*t.pageSize," "),a.Cb(3),a.Cc(t.totalCount)}}function g(t,e){1&t&&(a.Tb(0,"span"),a.Bc(1," There are "),a.Tb(2,"strong"),a.Bc(3,"0"),a.Sb(),a.Bc(4," results for this filter "),a.Sb())}let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(a.Tb(0,"header"),a.zc(1,l,8,3,"span",0),a.zc(2,g,5,0,"span",0),a.Sb()),2&t&&(a.Cb(1),a.ic("ngIf",e.totalCount&&e.totalCount>0),a.Cb(1),a.ic("ngIf",0===e.totalCount))},directives:[c.m],styles:[""]}),t})();var f=n("3Pt+"),S=n("cAP4");let v=(()=>{class t{constructor(t){this.basketService=t}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(S.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:8,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Ob(2,"img",2),a.Tb(3,"div",3),a.Tb(4,"button",4),a.ac("click",function(){return e.addItemToBasket()}),a.Sb(),a.Tb(5,"button",5),a.Bc(6,"View"),a.Sb(),a.Sb(),a.Sb(),a.Tb(7,"div",6),a.Tb(8,"a",7),a.Tb(9,"h6",8),a.Bc(10),a.Sb(),a.Sb(),a.Tb(11,"span",9),a.Bc(12),a.dc(13,"currency"),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Cb(2),a.jc("src",e.product.pictureUrl,a.vc),a.jc("alt",e.product.name),a.Cb(3),a.kc("routerLink","/shop/",e.product.id,""),a.Cb(3),a.kc("routerLink","/shop/",e.product.id,""),a.Cb(2),a.Cc(e.product.name),a.Cb(2),a.Cc(a.ec(13,6,e.product.price)))},directives:[i.d,i.f],pipes:[c.d],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:#e1e1e180;opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-of-type{transform:translateX(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-of-type{transform:translateX(20px)}"]}),t})();var C=n("Lm2G");let P=(()=>{class t{constructor(){this.pageChanged=new a.n}ngOnInit(){}onPagerChange(t){this.pageChanged.emit(t.page)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(t,e){1&t&&(a.Tb(0,"pagination",0),a.ac("pageChanged",function(t){return e.onPagerChange(t)}),a.Sb()),2&t&&a.ic("boundaryLinks",!0)("totalItems",e.totalCount)("ngModel",e.pageNumber)("itemsPerPage",e.pageSize)},directives:[C.a,f.k,f.m],styles:[""]}),t})();const y=["search"];function T(t,e){if(1&t&&(a.Tb(0,"option",17),a.Bc(1),a.Sb()),2&t){const t=e.$implicit,n=a.cc(2);a.ic("selected",n.shopParams.sort===t.value)("value",t.value),a.Cb(1),a.Dc(" ",t.name," ")}}function O(t,e){if(1&t){const t=a.Ub();a.Tb(0,"li",18),a.ac("click",function(){a.tc(t);const n=e.$implicit;return a.cc(2).onBrandSelected(n.id)}),a.Bc(1),a.Sb()}if(2&t){const t=e.$implicit,n=a.cc(2);a.Fb("active",t.id===n.shopParams.brandId),a.ic("value",t.id),a.Cb(1),a.Dc(" ",t.name," ")}}function k(t,e){if(1&t){const t=a.Ub();a.Tb(0,"li",18),a.ac("click",function(){a.tc(t);const n=e.$implicit;return a.cc(2).onTypeSelected(n.id)}),a.Bc(1),a.Sb()}if(2&t){const t=e.$implicit,n=a.cc(2);a.Fb("active",t.id===n.shopParams.typeId),a.ic("value",t.id),a.Cb(1),a.Dc(" ",t.name," ")}}function w(t,e){if(1&t){const t=a.Ub();a.Rb(0),a.Tb(1,"h5",10),a.Bc(2,"Sort"),a.Sb(),a.Tb(3,"select",11),a.ac("change",function(e){return a.tc(t),a.cc().onSortSelected(e.target.value)}),a.zc(4,T,2,3,"option",12),a.Sb(),a.Tb(5,"h5",13),a.Bc(6,"Brands"),a.Sb(),a.Tb(7,"ul",14),a.zc(8,O,2,4,"li",15),a.Sb(),a.Tb(9,"h5",13),a.Bc(10,"Types"),a.Sb(),a.Tb(11,"ul",14),a.zc(12,k,2,4,"li",16),a.Sb(),a.Qb()}if(2&t){const t=a.cc();a.Cb(4),a.ic("ngForOf",t.sortOptions),a.Cb(4),a.ic("ngForOf",t.brands),a.Cb(4),a.ic("ngForOf",t.types)}}function B(t,e){if(1&t){const t=a.Ub();a.Tb(0,"div",19),a.Tb(1,"input",20,21),a.ac("keyup.enter",function(){return a.tc(t),a.cc().onSearch()}),a.Sb(),a.Tb(3,"button",22),a.ac("click",function(){return a.tc(t),a.cc().onSearch()}),a.Bc(4,"Search"),a.Sb(),a.Tb(5,"button",23),a.ac("click",function(){return a.tc(t),a.cc().onReset()}),a.Bc(6,"Reset"),a.Sb(),a.Sb()}}function I(t,e){if(1&t&&(a.Tb(0,"div",24),a.Ob(1,"app-product-item",25),a.Sb()),2&t){const t=e.$implicit;a.Cb(1),a.ic("product",t)}}function z(t,e){if(1&t){const t=a.Ub();a.Tb(0,"div",26),a.Tb(1,"app-pager",27),a.ac("pageChanged",function(e){return a.tc(t),a.cc().onPageChanged(e)}),a.Sb(),a.Sb()}if(2&t){const t=a.cc();a.Cb(1),a.ic("pageSize",t.shopParams.pageSize)("totalCount",t.totalCount)("pageNumber",t.shopParams.pageNumber)}}let x=(()=>{class t{constructor(t){this.shopService=t,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to Hight",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(t=!1){this.shopService.getProducts(t).subscribe(t=>{this.products=t.data,this.totalCount=t.count},t=>{console.log(t)})}getBrands(){this.shopService.getBrands().subscribe(t=>{this.brands=[{id:0,name:"All"},...t]},t=>{console.log(t)})}getTypes(){this.shopService.getTypes().subscribe(t=>{this.types=[{id:0,name:"All"},...t]},t=>{console.log(t)})}onBrandSelected(t){const e=this.shopService.getShopParams();e.brandId=t,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onTypeSelected(t){const e=this.shopService.getShopParams();e.typeId=t,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onSortSelected(t){const e=this.shopService.getShopParams();e.sort=t,this.shopService.setShopParams(e),this.getProducts()}onPageChanged(t){const e=this.shopService.getShopParams();e.pageNumber!==t&&(e.pageNumber=t,this.shopService.setShopParams(e),this.getProducts(!0))}onSearch(){const t=this.shopService.getShopParams();t.search=this.searchTerm.nativeElement.value,t.pageNumber=1,this.shopService.setShopParams(t),this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new o,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(d))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-shop"]],viewQuery:function(t,e){if(1&t&&a.Fc(y,1),2&t){let t;a.qc(t=a.bc())&&(e.searchTerm=t.first)}},decls:11,vars:7,consts:[[1,"container","mt-3"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageSize","pageNumber"],["class","form-inline",4,"ngIf"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-warning","ml-3","mt-4","mb-3"],[1,"custom-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"text-warning","ml-3"],[1,"list-group","my-3"],["class","list-group-item ",3,"active","value","click",4,"ngFor","ngForOf"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"form-inline"],["type","text","placeholder","Search",1,"form-control","mr-2",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","my-2",3,"click"],[1,"btn","btn-outline-success","ml-2","my-2",3,"click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageSize","totalCount","pageNumber","pageChanged"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"section",2),a.zc(3,w,13,3,"ng-container",3),a.Sb(),a.Tb(4,"section",4),a.Tb(5,"div",5),a.Ob(6,"app-paging-header",6),a.zc(7,B,7,0,"div",7),a.Sb(),a.Tb(8,"div",1),a.zc(9,I,2,1,"div",8),a.Sb(),a.zc(10,z,2,3,"div",9),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Cb(3),a.ic("ngIf",e.types&&e.brands),a.Cb(3),a.ic("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber),a.Cb(1),a.ic("ngIf",e.products),a.Cb(2),a.ic("ngForOf",e.products),a.Cb(1),a.ic("ngIf",e.totalCount>0))},directives:[c.m,m,c.l,f.n,f.s,v,P],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item[_ngcontent-%COMP%]:focus{outline:none}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:rgba(233,86,32,.705);border-radius:10px}"]}),t})();var N=n("tc9g");function M(t,e){if(1&t){const t=a.Ub();a.Tb(0,"div",2),a.Tb(1,"div",3),a.Ob(2,"img",4),a.Sb(),a.Tb(3,"div",3),a.Tb(4,"h3"),a.Bc(5),a.Sb(),a.Tb(6,"p",5),a.Bc(7),a.dc(8,"currency"),a.Sb(),a.Tb(9,"div",6),a.Tb(10,"i",7),a.ac("click",function(){return a.tc(t),a.cc().decrementQuantity()}),a.Sb(),a.Tb(11,"span",8),a.Bc(12),a.Sb(),a.Tb(13,"i",9),a.ac("click",function(){return a.tc(t),a.cc().incrementQuantity()}),a.Sb(),a.Tb(14,"button",10),a.ac("click",function(){return a.tc(t),a.cc().addItemToBasket()}),a.Bc(15,"Add to Cart"),a.Sb(),a.Sb(),a.Sb(),a.Tb(16,"div",11),a.Tb(17,"div",12),a.Tb(18,"h4"),a.Bc(19,"Description"),a.Sb(),a.Tb(20,"p"),a.Bc(21),a.Sb(),a.Sb(),a.Sb(),a.Sb()}if(2&t){const t=a.cc();a.Cb(2),a.jc("src",t.product.pictureUrl,a.vc),a.jc("alt",t.product.name),a.Cb(3),a.Cc(t.product.name),a.Cb(2),a.Cc(a.ec(8,6,t.product.price)),a.Cb(5),a.Cc(t.quantity),a.Cb(9),a.Cc(t.product.description)}}const j=[{path:"",component:x},{path:":id",component:(()=>{class t{constructor(t,e,n,c){this.shopService=t,this.activateRoute=e,this.bcService=n,this.basketService=c,this.quantity=1,this.bcService.set("@productDetails","")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get("id")).subscribe(t=>{this.product=t,this.bcService.set("@productDetails",t.name)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(d),a.Nb(i.a),a.Nb(N.c),a.Nb(S.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ml-4",3,"click"],[1,"row","mt-5"],[1,"col-12","ml-3"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.zc(1,M,22,8,"div",1),a.Sb()),2&t&&(a.Cb(1),a.ic("ngIf",e.product))},directives:[c.m],pipes:[c.d],styles:[""]}),t})(),data:{breadcrumb:{alias:"productDetails"}}}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[i.g.forChild(j)],i.g]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[c.c,s.a,_]]}),t})()}}]);