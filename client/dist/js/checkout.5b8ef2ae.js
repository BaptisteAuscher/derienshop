(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkout"],{"083a":function(e,t,i){"use strict";i("f95c")},"1ce9":function(e,t,i){"use strict";i("20a6")},"20a6":function(e,t,i){},"25f0":function(e,t,i){"use strict";var r=i("6eeb"),n=i("825a"),c=i("d039"),a=i("ad6d"),s="toString",o=RegExp.prototype,l=o[s],u=c((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&r(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),i=e.flags,r=String(void 0===i&&e instanceof RegExp&&!("flags"in o)?a.call(e):i);return"/"+t+"/"+r}),{unsafe:!0})},4081:function(e,t,i){"use strict";i("ef0d")},"502e":function(e,t,i){e.exports=i.p+"img/amex.a187af91.svg"},"605e":function(e,t,i){var r={"./credit-cards/amex.svg":"502e","./credit-cards/cb.svg":"d000","./credit-cards/discover.svg":"6aa6","./credit-cards/jcb.svg":"b823","./credit-cards/mastercard.svg":"c892","./credit-cards/unionpay.svg":"ab1c","./credit-cards/visa.svg":"748c"};function n(e){var t=c(e);return i(t)}function c(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id="605e"},"65e0":function(e,t,i){"use strict";i("c247")},"6aa6":function(e,t,i){e.exports=i.p+"img/discover.192f961f.svg"},"701f":function(e,t,i){"use strict";i("acba")},"748c":function(e,t,i){e.exports=i.p+"img/visa.01e2dcfa.svg"},"7cb4":function(e,t,i){"use strict";i.r(t);i("b0c0");var r=i("7a23"),n={class:"checkout"},c={class:"step"},a={class:"step__number"},s={class:"step__name"};function o(e,t,i,o,l,u){var d=Object(r["y"])("router-link"),p=Object(r["y"])("Identify"),m=Object(r["y"])("Delivery"),b=Object(r["y"])("Payment"),O=Object(r["y"])("Recap");return Object(r["r"])(),Object(r["e"])("div",n,[Object(r["i"])("nav",c,[Object(r["i"])("ul",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(e.steps,(function(t){return Object(r["r"])(),Object(r["e"])("li",{key:t.index},[Object(r["i"])(d,{to:"/checkout/"+t.slug,class:e.currentStep<t.index?"disabled":""},{default:Object(r["H"])((function(){return[Object(r["i"])("span",a,Object(r["A"])(t.index),1),Object(r["i"])("span",s,Object(r["A"])(t.name),1)]})),_:2},1032,["to","class"])])})),128))])]),Object(r["I"])(Object(r["i"])(p,{onNextStep:t[1]||(t[1]=function(e){return u.incrementStep(1)})},null,512),[[r["F"],"identify"==e.$route.params.step]]),Object(r["I"])(Object(r["i"])(m,{onNextStep:t[2]||(t[2]=function(e){return u.incrementStep(2)})},null,512),[[r["F"],"delivery"==e.$route.params.step]]),Object(r["I"])(Object(r["i"])(b,{onNextStep:t[3]||(t[3]=function(e){return u.incrementStep(3)})},null,512),[[r["F"],"payment"==e.$route.params.step]]),"recap"==e.$route.params.step?(Object(r["r"])(),Object(r["e"])(O,{key:0})):Object(r["f"])("",!0)])}var l=i("5530"),u=Object(r["K"])("data-v-373d956d");Object(r["u"])("data-v-373d956d");var d={class:"identify"},p=Object(r["i"])("h3",null,"S'identifier",-1),m=Object(r["i"])("span",null,"Prénom *",-1),b=Object(r["i"])("span",null,"Nom *",-1),O=Object(r["i"])("span",null,"Email *",-1),j=Object(r["i"])("button",{type:"submit"},"SUIVANT",-1),f={key:0},h=Object(r["i"])("h3",null,"Votre commande",-1),v={class:"qty"},y={class:"subtotal"};Object(r["s"])();var g=u((function(e,t,i,n,c,a){return Object(r["r"])(),Object(r["e"])("section",d,[Object(r["i"])("form",{onSubmit:t[4]||(t[4]=function(){return a.next.apply(a,arguments)})},[p,Object(r["i"])("label",null,[m,Object(r["I"])(Object(r["i"])("input",{type:"text",placeholder:"John","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.newIdentity.firstname=e}),class:c.newIdentity.firstname?"green":""},null,2),[[r["E"],c.newIdentity.firstname]])]),Object(r["i"])("label",null,[b,Object(r["I"])(Object(r["i"])("input",{type:"text",placeholder:"Doe","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.newIdentity.lastname=e}),class:c.newIdentity.lastname?"green":""},null,2),[[r["E"],c.newIdentity.lastname]])]),Object(r["i"])("label",null,[O,Object(r["I"])(Object(r["i"])("input",{type:"text",placeholder:"email@example.com","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.newIdentity.email=e}),class:a.isEmailValid(c.newIdentity.email)?"green":""},null,2),[[r["E"],c.newIdentity.email]])]),j],32),e.windowWidth>1050?(Object(r["r"])(),Object(r["e"])("aside",f,[h,(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(e.cart.items,(function(e,t){return Object(r["r"])(),Object(r["e"])("div",{class:"item",key:t},[Object(r["i"])("img",{src:e.image_link,alt:e.alt},null,8,["src","alt"]),Object(r["i"])("p",null,Object(r["A"])(e.name),1),Object(r["i"])("p",null,Object(r["A"])(e.color),1),Object(r["i"])("p",null,Object(r["A"])(e.size),1),Object(r["i"])("p",null,Object(r["A"])(a.formatPrice(e.price)),1),Object(r["i"])("p",v,"x"+Object(r["A"])(e.qty),1)])})),128)),Object(r["i"])("p",y,"sous-total : "+Object(r["A"])(a.formatPrice(e.cart.subtotal)),1)])):Object(r["f"])("",!0)])})),x=(i("b680"),i("d3b7"),i("5502")),S={name:"Identify",methods:{next:function(e){var t=this;e.preventDefault(),console.log(e),this.formValidateIdentity(this.newIdentity).then((function(e){t.$store.commit("SETCUSTOMERIDENTITY",e),t.$emit("next-step"),t.$router.push({name:"Checkout",params:{step:"delivery"}})})).catch((function(e){t.$store.commit("ui/setMessage",e)}))},formatPrice:function(e){return(e/100).toFixed(2)+"EUR"},isEmailValid:function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)},formValidateIdentity:function(e){var t=this;return new Promise((function(i,r){e.email&&e.firstname&&e.lastname?t.isEmailValid(e.email)?i(e):r({type:"error",message:"E-mail invalide."}):r({type:"error",message:"Remplis tous les champs."})}))}},computed:Object(l["a"])({},Object(x["c"])({windowWidth:"ui/getWindowWidth",cart:"getCart",customer:"getCustomer"})),data:function(){return{newIdentity:{firstname:null,lastname:null,email:null}}}};i("083a");S.render=g,S.__scopeId="data-v-373d956d";var I=S,w=Object(r["K"])("data-v-f05d5d86");Object(r["u"])("data-v-f05d5d86");var k=Object(r["i"])("h3",null,"Infomations de livraison",-1),_=Object(r["i"])("span",null,"Adresse *",-1),A=Object(r["i"])("span",null,"Informations complémentaires",-1),C=Object(r["i"])("span",null,"Code postal *",-1),E=Object(r["i"])("span",null,"Ville *",-1),T=Object(r["i"])("span",null,"Pays *",-1),P=Object(r["i"])("button",{type:"submit"},"SUIVANT",-1),V=Object(r["i"])("h3",null,"Mode de livraison",-1),$=Object(r["i"])("p",null,[Object(r["h"])("L'interface de commande en ligne "),Object(r["i"])("a",{href:"https://derienshop.com",target:"_blank"},"derienshop.com"),Object(r["h"])(" ne propose pour l'instant qu'un seul mode de livraison partout en France : la livraison "),Object(r["i"])("a",{href:"https://www.laposte.fr/colissimo-en-ligne",target:"_blank"},"La Poste"),Object(r["h"])(" sous 7 jours à 5€.")],-1),R=Object(r["i"])("h3",null,"Détails",-1),U=Object(r["i"])("td",null,"Sous-total :",-1),F=Object(r["i"])("td",null,"Livraison :",-1),D=Object(r["i"])("td",null,"Total :",-1);Object(r["s"])();var L=w((function(e,t,i,n,c,a){return Object(r["r"])(),Object(r["e"])("section",null,[Object(r["i"])("form",{onSubmit:t[6]||(t[6]=function(){return a.next.apply(a,arguments)})},[k,Object(r["i"])("label",null,[_,Object(r["I"])(Object(r["i"])("input",{type:"text",placeholder:"55 rue du Faubourg Saint-Honoré","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.customer.line1=e}),class:c.customer.line1?"green":""},null,2),[[r["E"],c.customer.line1]])]),Object(r["i"])("label",null,[A,Object(r["I"])(Object(r["i"])("input",{type:"text",placeholder:"Digicode, étage, etc ...","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.customer.line2=e})},null,512),[[r["E"],c.customer.line2]])]),Object(r["i"])("label",null,[C,Object(r["I"])(Object(r["i"])("input",{type:"text",placeholder:"75008","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.customer.postal=e}),class:1==a.isPostalCodeValid(c.customer.postal)?"green":""},null,2),[[r["E"],c.customer.postal,void 0,{number:!0}]])]),Object(r["i"])("label",null,[E,Object(r["I"])(Object(r["i"])("input",{type:"text",placeholder:"Paris","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.customer.city=e}),class:c.customer.city?"green":""},null,2),[[r["E"],c.customer.city]])]),Object(r["i"])("label",null,[T,Object(r["I"])(Object(r["i"])("input",{type:"text",placeholder:"France","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.customer.country=e}),class:a.isCountryValid(c.customer.country)?"green":""},null,2),[[r["E"],c.customer.country]])]),P],32),Object(r["i"])("aside",null,[V,$,R,Object(r["i"])("table",null,[Object(r["i"])("tr",null,[U,Object(r["i"])("td",null,Object(r["A"])(a.formatPrice(e.cart.subtotal)),1)]),Object(r["i"])("tr",null,[F,Object(r["i"])("td",null,Object(r["A"])(a.formatPrice(c.deliveryFee)),1)]),Object(r["i"])("tr",null,[D,Object(r["i"])("td",null,Object(r["A"])(a.formatPrice(c.deliveryFee+e.cart.subtotal)),1)])])])])})),N=(i("25f0"),i("bc3a")),z=i.n(N),M={methods:{next:function(e){var t=this;e.preventDefault(),this.formValidateDelivery(this.customer).then((function(e){t.$store.commit("SETCUSTOMERDELIVERY",e),t.$emit("next-step"),t.$store.commit("SETSHIPPINGCOST",t.deliveryFee),z()({method:"post",headers:{},url:"https://api.derienshop.com/api/stripe/create-payment-intent",data:{cart:t.cart}}).then((function(e){t.$store.commit("SETCLIENTSECRET",e.data.clientSecret)})).catch((function(e){return console.log(e)})),t.$router.push({name:"Checkout",params:{step:"payment"}})})).catch((function(e){t.$store.commit("ui/setMessage",e)}))},formatPrice:function(e){return(e/100).toFixed(2)+"EUR"},isPostalCodeValid:function(e){if("number"==typeof e&&5==e.toString().length)return!0},isCountryValid:function(e){if(e&&"FRANCE"==e.toUpperCase())return!0},formValidateDelivery:function(e){var t=this;return new Promise((function(i,r){e.line1&&e.postal&&e.city&&e.country?t.isPostalCodeValid(e.postal)?t.isCountryValid(e.country)?i(e):r({type:"error",message:"La livraison est en France uniquement."}):r({type:"error",message:"Code postal incorrect."}):r({type:"error",message:"Remplis tous les champs."})}))}},computed:Object(l["a"])({},Object(x["c"])({cart:"getCart"})),data:function(){return{deliveryFee:500,customer:{line1:null,line2:null,postal:null,city:null,country:null}}}};i("65e0");M.render=L,M.__scopeId="data-v-f05d5d86";var q=M,J=Object(r["K"])("data-v-7822d3da");Object(r["u"])("data-v-7822d3da");var K=Object(r["i"])("h3",null,"Paiement sécurisé",-1),W={class:"customer_info"},Y={class:"no-capitalize"},B={class:"no-capitalize"},G={ref:"card",class:"stripe-elements"},H={class:"termsAgreement"},Z=Object(r["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-check"},[Object(r["i"])("polyline",{points:"20 6 9 17 4 12"})],-1),X=Object(r["i"])("label",{for:"agreeToTerms"},"J'agrée à la politique de paiement de derien.",-1),Q={class:"acceptedCards"},ee=Object(r["i"])("div",{class:"paypal__container"},[Object(r["i"])("p",null,"ou"),Object(r["i"])("div",{id:"paypal-button-container"})],-1),te=Object(r["g"])('<aside data-v-7822d3da><h3 data-v-7822d3da>Mes données banquaires sont en sécurité ?</h3><p data-v-7822d3da>L&#39;interface de commande en ligne <a href="https://derienshop.com" target="_blank" data-v-7822d3da>derienshop.com</a> utilise <a href="http://stripe.com" target="_blank" data-v-7822d3da>Stripe</a> pour gérer ses paiements en ligne de manière sécurisé. Vos données banquaires sont directement transmis aux serveurs de Stripe pour être traités sans être sauvegardés et ne sont pas colléctés par derien. Pour plus d&#39;information, vous pouvez consulter notre <a href="" target="_blank" data-v-7822d3da>politique de paiement</a>.</p><h3 data-v-7822d3da>Comment annuler ma commande ?</h3><p data-v-7822d3da>Vous disposez de 24 heures après la réception de l&#39;e-mail de confirmation pour annuler votre commande. Il suffira de cliquer sur le lien d&#39;annulation reçu par mail. Vous serez ensuite remboursés intégralement sous 14 jours. En cas de problème vous pouvez nous <a href="/contact" target="_blank" data-v-7822d3da>contacter</a> par mail. </p></aside>',1);Object(r["s"])();var ie=J((function(e,t,n,c,a,s){return Object(r["r"])(),Object(r["e"])("section",null,[Object(r["i"])("form",null,[K,Object(r["i"])("div",W,[Object(r["i"])("span",null,Object(r["A"])(e.customer.identity.firstname+" "+e.customer.identity.lastname),1),Object(r["i"])("span",Y,Object(r["A"])(e.customer.identity.email),1),Object(r["i"])("span",B,Object(r["A"])(e.customer.delivery.line1+" "+(e.customer.delivery.line2?e.customer.delivery.line2:"")),1),Object(r["i"])("span",null,Object(r["A"])(e.customer.delivery.postal+" "+e.customer.delivery.city),1),Object(r["i"])("span",null,Object(r["A"])(e.customer.delivery.country),1)]),Object(r["i"])("div",G,null,512),Object(r["i"])("div",H,[Object(r["I"])(Object(r["i"])("input",{type:"checkbox",name:"agreeToTerms",id:"agreeToTerms","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.agreeToTerms=e})},null,512),[[r["C"],a.agreeToTerms],[r["F"],!1]]),Object(r["i"])("label",{for:"agreeToTerms",class:"box "+(a.agreeToTerms?"checked":"")},[Z],2),X]),Object(r["i"])("button",{type:"submit",onClick:t[2]||(t[2]=Object(r["J"])((function(){return s.valider.apply(s,arguments)}),["prevent"])),disabled:!a.isClickable},Object(r["A"])(a.isLoading?"PAIEMENT EN COURS":"PAYER "+s.formatPrice(e.cart.total)),9,["disabled"]),Object(r["i"])("div",Q,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(a.creditCardsAccepted,(function(e,t){return Object(r["r"])(),Object(r["e"])("div",{key:t},[Object(r["i"])("img",{src:i("605e")("./credit-cards".concat(e.path)),alt:"Image of "+e.class,class:e.class},null,10,["src","alt"])])})),128))]),ee]),te])})),re=(i("96cf"),i("1da1")),ne={data:function(){return{stripe:void 0,spk:"pk_live_C6Kidu4hNdsX75RGjyP0lJdS00lfR4vXqu",card:void 0,agreeToTerms:!1,isClickable:!0,isLoading:!1,creditCardsAccepted:[{path:"/visa.svg",class:"visa"},{path:"/mastercard.svg",class:"mastercard"},{path:"/cb.svg",class:"cb"},{path:"/amex.svg",class:"amex"}]}},computed:Object(l["a"])({},Object(x["c"])({cart:"getCart",customer:"getCustomer",clientSecret:"getClientSecret"})),methods:{formatPrice:function(e){return(e/100).toFixed(2)+"EUR"},valider:function(){var e=this;return this.clientSecret&&this.customer.identity.email&&this.customer.identity.lastname&&this.customer.identity.firstname&&this.customer.delivery.city&&this.customer.delivery.line1&&this.customer.delivery.postal?(this.isClickable=!1,this.isLoading=!0,this.agreeToTerms?(this.stripe.confirmCardPayment(this.clientSecret,{payment_method:{card:this.card,billing_details:{email:this.customer.identity.email,name:this.customer.identity.firstname+" "+this.customer.identity.lastname,address:{city:this.customer.delivery.city,line1:this.customer.delivery.line1,line2:this.customer.delivery.line2,postal_code:this.customer.delivery.postal}}}}).then((function(t){t.error?(e.$store.commit("ui/setMessage",{type:"error",message:t.error.message}),e.isClickable=!0):t.paymentIntent&&!t.error&&(e.$store.commit("ui/setMessage",{type:"success",message:"Achat réussi !"}),e.setOrder("Stripe",t.paymentIntent.id.toString()))})),void(this.isLoading=!1)):(this.$store.commit("ui/setMessage",{type:"error",message:"Veuillez agreer au termes."}),void(this.isClickable=!0))):(this.$store.commit("ui/setMessage",{type:"error",message:"Oups, veuillez réessayer !"}),void this.$router.push({name:"Checkout",params:{step:"indentify"}}))},setOrder:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(t,i){var r,n,c,a,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=this.customer,console.log(r),n=this.cart,console.log(n),c={customer:{identity:r.identity,delivery:r.delivery,payment:{method:t,orderID:i}},cart:n},this.$store.dispatch("emptyCart"),a={method:"post",url:"https://api.derienshop.com/api/orders",headers:{"Content-Type":"application/json"},data:{order:c}},e.next=9,z()(a).then((function(e){var t=e.data;s.$store.commit("SETORDERID",t.id),s.$emit("next-step"),s.$router.push({name:"Checkout",params:{step:"recap"}})})).catch((function(e){return console.log(e)}));case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}()},mounted:function(){var e={fonts:[{cssSrc:"https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;800&display=swap"},{cssSrc:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,800;1,400;1,800&display=swap"}]},t={base:{fontSize:"14px",fontFamily:'"Montserrat", Sans-Serif',color:"black"}};this.stripe=window.Stripe(this.spk),this.card=this.stripe.elements(e).create("card",{style:t}),this.card.mount(this.$refs.card);var i=this;window.paypal.Buttons({fundingSource:window.paypal.FUNDING.PAYPAL,style:{layout:"vertical",label:"paypal",color:"silver"},createOrder:function(e,t){return t.order.create({purchase_units:[{amount:{value:(i.cart.total/100).toString()}}]})},onApprove:function(e,t){return t.order.capture().then((function(e){console.log(e),i.setOrder("Paypal",e.id),i.$store.commit("ui/setMessage",{message:"Achat réussi !",type:"success"})}))}}).render("#paypal-button-container")}};i("4081");ne.render=ie,ne.__scopeId="data-v-7822d3da";var ce=ne,ae=Object(r["K"])("data-v-763c5234");Object(r["u"])("data-v-763c5234");var se=Object(r["i"])("h3",null,"Merci pour votre commande !",-1),oe=Object(r["i"])("p",null,[Object(r["h"])("Vous devriez recevoir un mail de derien dans les plus brefs délais. Votre livraison sera assuré par "),Object(r["i"])("a",{href:"https://www.laposte.fr/colissimo-en-ligne",target:"_blank"},"La Poste"),Object(r["h"])(" sous une semaine. En cas de problème veuillez "),Object(r["i"])("a",{href:"/contact",target:"_blank"},"nous contacter"),Object(r["h"])(".")],-1),le={key:0},ue=Object(r["i"])("h3",null,"Récapitulatif de la commande",-1),de={class:"item__info"},pe={class:"cart__info"},me={class:"cart__subtotal"},be=Object(r["i"])("p",null,"Sous-total",-1),Oe={class:"cart__shipping"},je=Object(r["i"])("p",null,"Livraison",-1),fe={class:"cart__total"},he=Object(r["i"])("p",null,"Total",-1),ve=Object(r["i"])("h3",null,"Information client",-1),ye={class:"client client__identity"},ge={class:"client client__delivery"},xe={key:1,class:"loading"};Object(r["s"])();var Se=ae((function(e,t,i,n,c,a){var s=Object(r["y"])("Spinner");return Object(r["r"])(),Object(r["e"])("section",null,[Object(r["i"])("article",null,[se,oe,Object(r["i"])("button",{onClick:t[1]||(t[1]=function(e){return a.backToShop()})},"RETOUR À LA BOUTIQUE")]),c.order?(Object(r["r"])(),Object(r["e"])("aside",le,[ue,(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(c.order.cart.items,(function(e,t){return Object(r["r"])(),Object(r["e"])("div",{class:"item",key:t},[Object(r["i"])("img",{src:e.image_link,alt:"Image of the product you ordered",width:"50",height:"50"},null,8,["src"]),Object(r["i"])("div",de,[Object(r["i"])("p",null,Object(r["A"])(e.name),1),Object(r["i"])("p",null,Object(r["A"])(e.color),1),Object(r["i"])("p",null,Object(r["A"])(e.size),1)]),Object(r["i"])("p",null,Object(r["A"])(a.formatPrice(e.price)),1),Object(r["i"])("p",null,"x"+Object(r["A"])(e.qty),1)])})),128)),Object(r["i"])("div",pe,[Object(r["i"])("div",me,[be,Object(r["i"])("p",null,Object(r["A"])(a.formatPrice(c.order.cart.subtotal)),1)]),Object(r["i"])("div",Oe,[je,Object(r["i"])("p",null,Object(r["A"])(a.formatPrice(c.order.cart.shippingCost)),1)]),Object(r["i"])("div",fe,[he,Object(r["i"])("p",null,Object(r["A"])(a.formatPrice(c.order.cart.total)),1)])]),ve,Object(r["i"])("div",ye,[Object(r["i"])("p",null,Object(r["A"])(c.order.customer.identity.firstname+" "+c.order.customer.identity.lastname),1),Object(r["i"])("p",null,Object(r["A"])(c.order.customer.identity.email),1)]),Object(r["i"])("div",ge,[Object(r["i"])("p",null,Object(r["A"])(c.order.customer.delivery.line1+" "+(c.order.customer.delivery.line2?c.order.customer.delivery.line2:"")),1),Object(r["i"])("p",null,Object(r["A"])(c.order.customer.delivery.postal+" "+c.order.customer.delivery.city),1),Object(r["i"])("p",null,Object(r["A"])(c.order.customer.delivery.country),1)])])):Object(r["f"])("",!0),c.order?Object(r["f"])("",!0):(Object(r["r"])(),Object(r["e"])("aside",xe,[Object(r["i"])(s)]))])})),Ie=Object(r["K"])("data-v-591ec2c0");Object(r["u"])("data-v-591ec2c0");var we={class:"spinner"},ke=Object(r["i"])("div",null,null,-1);Object(r["s"])();var _e=Ie((function(e,t,i,n,c,a){return Object(r["r"])(),Object(r["e"])("div",we,[ke])})),Ae={};i("701f");Ae.render=_e,Ae.__scopeId="data-v-591ec2c0";var Ce=Ae,Ee={data:function(){return{order:null,databaseId:null}},components:{Spinner:Ce},methods:{backToShop:function(){this.$router.push({name:"Shop"})},formatPrice:function(e){return(e/100).toFixed(2)+"EUR"}},mounted:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.state.checkout.orderDatabaseId;case 2:this.databaseId=e.sent,z()("https://api.derienshop.com/api/orders/"+this.databaseId).then((function(e){t.order=e.data}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()};i("a3d4");Ee.render=Se,Ee.__scopeId="data-v-763c5234";var Te=Ee,Pe={data:function(){return{currentStep:1,steps:[{index:1,name:"S'identifier",slug:"identify"},{index:2,name:"Livraison",slug:"delivery"},{index:3,name:"Paiement",slug:"payment"},{index:4,name:"Recapitulatif",slug:"recap"}]}},components:{Identify:I,Delivery:q,Payment:ce,Recap:Te},computed:Object(l["a"])({},Object(x["c"])({customer:"getCustomer"})),methods:{incrementStep:function(e){e==this.currentStep&&(this.currentStep+=1)}},created:function(){this.$store.state.cart.cart.items.length<1&&this.$router.push({name:"Cart"}),this.currentStep<4&&(this.$router.push({name:"Checkout",params:{step:"identify"}}),this.currentStep=1)}};i("1ce9");Pe.render=o;t["default"]=Pe},"94d9":function(e,t,i){},a3d4:function(e,t,i){"use strict";i("94d9")},ab1c:function(e,t,i){e.exports=i.p+"img/unionpay.af9882d1.svg"},acba:function(e,t,i){},ad6d:function(e,t,i){"use strict";var r=i("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b823:function(e,t,i){e.exports=i.p+"img/jcb.a01fe9c2.svg"},c247:function(e,t,i){},c892:function(e,t,i){e.exports=i.p+"img/mastercard.543bc93b.svg"},d000:function(e,t,i){e.exports=i.p+"img/cb.e5f5c267.svg"},ef0d:function(e,t,i){},f95c:function(e,t,i){}}]);
//# sourceMappingURL=checkout.5b8ef2ae.js.map