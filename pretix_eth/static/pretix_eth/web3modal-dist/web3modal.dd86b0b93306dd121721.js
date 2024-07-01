/*! For license information please see web3modal.dd86b0b93306dd121721.js.LICENSE.txt */
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var c=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const l="scroll-lock";let u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.caipAddress=n.AccountController.state.address,this.isSiweEnabled=n.yD.state.isSiweEnabled,this.initializeTheming(),n.ApiController.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),n.yD.subscribeKey("isSiweEnabled",(e=>{this.isSiweEnabled=e})),n.AccountController.subscribe((e=>this.onNewAccountState(e)))),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&"success"!==n.yD.state.status&&await n.ConnectionController.disconnect(),n.IN.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=n.ThemeController.state,r=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=l,e.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${l}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:r}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=r),t&&r&&this.caipAddress!==r&&(await n.yD.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const e=await n.yD.getSession();e&&!t?await n.yD.signOut():t&&!e&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?n.RouterController.push("ConnectingSiwe"):n.IN.open({view:"ConnectingSiwe"})}};u.styles=a,c([(0,s.SB)()],u.prototype,"open",void 0),c([(0,s.SB)()],u.prototype,"caipAddress",void 0),c([(0,s.SB)()],u.prototype,"isSiweEnabled",void 0),u=c([(0,i.customElement)("w3m-modal")],u)},914:(e,t,r)=>{"use strict";r.d(t,{AccountController:()=>l,ApiController:()=>k,fz:()=>K,Lr:()=>$,ConnectionController:()=>H,ConnectorController:()=>_,bq:()=>s,j1:()=>a,Xs:()=>M,IN:()=>L,NetworkController:()=>S,OptionsController:()=>b,Ie:()=>x,RouterController:()=>T,_4:()=>Y,yD:()=>q,SnackController:()=>U,MO:()=>g,ThemeController:()=>Z,sl:()=>z});var n=r(6828);function i(e,t,r,i){let o=e[t];return(0,n.Ld)(e,(()=>{const n=e[t];Object.is(o,n)||r(o=n)}),i)}Symbol();const o="https://secure.web3modal.com",s={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:o,SECURE_SITE_DASHBOARD:`${o}/dashboard`,SECURE_SITE_FAVICON:`${o}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},a={isMobile:()=>"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){const e=window.navigator.userAgent.toLowerCase();return a.isMobile()&&e.includes("android")},isIos(){const e=window.navigator.userAgent.toLowerCase();return a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=s.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=s.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+s.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e,t=500){let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout((function(){e(...n)}),t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(a.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;return r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),{redirect:`${r}wc?uri=${encodeURIComponent(t)}`,href:r}},formatUniversalUrl(e,t){if(!a.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;return r.endsWith("/")||(r=`${r}/`),{redirect:`${r}wc?uri=${encodeURIComponent(t)}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise(((t,r)=>{const n=new Image;n.onload=t,n.onerror=r,n.crossOrigin="anonymous",n.src=e}));return Promise.race([t,a.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){const t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:`0.000 ${t}`},isRestrictedRegion(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return s.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>a.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>a.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>a.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},c=(0,n.sj)({isConnected:!1}),l={state:c,subscribe:e=>(0,n.Ld)(c,(()=>e(c))),subscribeKey:(e,t)=>i(c,e,t),setIsConnected(e){c.isConnected=e},setCaipAddress(e){c.caipAddress=e,c.address=e?a.getPlainAddress(e):void 0},setBalance(e,t){c.balance=e,c.balanceSymbol=t},setProfileName(e){c.profileName=e},setProfileImage(e){c.profileImage=e},setAddressExplorerUrl(e){c.addressExplorerUrl=e},resetAccount(){c.isConnected=!1,c.caipAddress=void 0,c.address=void 0,c.balance=void 0,c.balanceSymbol=void 0,c.profileName=void 0,c.profileImage=void 0,c.addressExplorerUrl=void 0}};class u{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach((([e,t])=>{t&&r.searchParams.append(e,t)})),r}}const h="WALLETCONNECT_DEEPLINK_CHOICE",d="@w3m/recent",p="@w3m/connected_wallet_image_url",f="@w3m/connected_connector",g={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(h,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(h);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(h)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=g.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(d,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(d);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(p)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(f)}catch{console.info("Unable to get Connected Connector")}}},m=(0,n.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),y={state:m,subscribeNetworkImages:e=>(0,n.Ld)(m.networkImages,(()=>e(m.networkImages))),subscribeKey:(e,t)=>i(m,e,t),setWalletImage(e,t){m.walletImages[e]=t},setNetworkImage(e,t){m.networkImages[e]=t},setConnectorImage(e,t){m.connectorImages[e]=t},setTokenImage(e,t){m.tokenImages[e]=t}},w=(0,n.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),b={state:w,subscribeKey:(e,t)=>i(w,e,t),setProjectId(e){w.projectId=e},setIncludeWalletIds(e){w.includeWalletIds=e},setExcludeWalletIds(e){w.excludeWalletIds=e},setFeaturedWalletIds(e){w.featuredWalletIds=e},setTokens(e){w.tokens=e},setTermsConditionsUrl(e){w.termsConditionsUrl=e},setPrivacyPolicyUrl(e){w.privacyPolicyUrl=e},setCustomWallets(e){w.customWallets=e},setEnableAnalytics(e){w.enableAnalytics=e},setSdkVersion(e){w.sdkVersion=e},setMetadata(e){w.metadata=e}},v=(0,n.sj)({connectors:[]}),_={state:v,subscribeKey:(e,t)=>i(v,e,t),setConnectors(e){v.connectors=e.map((e=>(0,n.iH)(e)))},addConnector(e){if(v.connectors.push((0,n.iH)(e)),"w3mEmail"===e.id){const t=e,r=(0,n.CO)(b.state);t?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId})}},getEmailConnector:()=>v.connectors.find((e=>"EMAIL"===e.type)),getAnnouncedConnectorRdns:()=>v.connectors.filter((e=>"ANNOUNCED"===e.type)).map((e=>e.info?.rdns)),getConnectors:()=>v.connectors},E=(0,n.sj)({open:!1,selectedNetworkId:void 0}),x={state:E,subscribe:e=>(0,n.Ld)(E,(()=>e(E))),set(e){Object.assign(E,{...E,...e})}},C=(0,n.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),S={state:C,subscribeKey:(e,t)=>i(C,e,t),_getClient(){if(!C._client)throw new Error("NetworkController client not set");return C._client},setClient(e){C._client=(0,n.iH)(e)},setCaipNetwork(e){C.caipNetwork=e,x.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){C.caipNetwork=e,x.set({selectedNetworkId:e?.id}),C.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){C.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();C.supportsAllNetworks=e.supportsAllNetworks,C.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),C.caipNetwork=e},resetNetwork(){C.isDefaultCaipNetwork||(C.caipNetwork=void 0),C.approvedCaipNetworkIds=void 0,C.supportsAllNetworks=!0}},A=new u({baseUrl:a.getApiUrl()}),I=(0,n.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),k={state:I,subscribeKey:(e,t)=>i(I,e,t),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=b.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){const t=`${A.baseUrl}/getWalletImage/${e}`,r=await A.getBlob({path:t,headers:k._getApiHeaders()});y.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){const t=`${A.baseUrl}/public/getAssetImage/${e}`,r=await A.getBlob({path:t,headers:k._getApiHeaders()});y.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){const t=`${A.baseUrl}/public/getAssetImage/${e}`,r=await A.getBlob({path:t,headers:k._getApiHeaders()});y.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=S.state,t=e?.map((({imageId:e})=>e)).filter(Boolean);t&&await Promise.allSettled(t.map((e=>k._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=_.state,t=e.map((({imageId:e})=>e)).filter(Boolean);await Promise.allSettled(t.map((e=>k._fetchConnectorImage(e))))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=b.state;if(e?.length){const{data:t}=await A.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort(((t,r)=>e.indexOf(t.id)-e.indexOf(r.id)));const r=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(r.map((e=>k._fetchWalletImage(e)))),I.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=b.state,n=[...t??[],...r??[]].filter(Boolean),{data:i,count:o}=await A.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:n?.join(",")}}),s=g.getRecentWallets(),a=i.map((e=>e.image_id)).filter(Boolean),c=s.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...a,...c].map((e=>k._fetchWalletImage(e)))),I.recommended=i,I.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=b.state,i=[...I.recommended.map((({id:e})=>e)),...r??[],...n??[]].filter(Boolean),{data:o,count:s}=await A.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:i.join(",")}}),c=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...c.map((e=>k._fetchWalletImage(e))),a.wait(300)]),I.wallets=[...I.wallets,...o],I.count=s>I.count?s:I.count,I.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:r}=b.state;I.search=[];const{data:n}=await A.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),i=n.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...i.map((e=>k._fetchWalletImage(e))),a.wait(300)]),I.search=n},prefetch(){I.prefetchPromise=Promise.race([Promise.allSettled([k.fetchFeaturedWallets(),k.fetchRecommendedWallets(),k.fetchNetworkImages(),k.fetchConnectorImages()]),a.wait(3e3)])}},P=new u({baseUrl:a.getAnalyticsUrl()}),O=["MODAL_CREATED"],R=(0,n.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),M={state:R,subscribe:e=>(0,n.Ld)(R,(()=>e(R))),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=b.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(O.includes(e.data.event)||"undefined"==typeof window)return;await P.post({path:"/e",headers:M._getApiHeaders(),body:{eventId:a.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){R.timestamp=Date.now(),R.data=e,b.state.enableAnalytics&&M._sendAnalyticsEvent(R)}},N=(0,n.sj)({view:"Connect",history:["Connect"]}),T={state:N,subscribeKey:(e,t)=>i(N,e,t),push(e,t){e!==N.view&&(N.view=e,N.history.push(e),N.data=t)},reset(e){N.view=e,N.history=[e]},replace(e,t){N.history.length>1&&N.history.at(-1)!==e&&(N.view=e,N.history[N.history.length-1]=e,N.data=t)},goBack(){if(N.history.length>1){N.history.pop();const[e]=N.history.slice(-1);e&&(N.view=e)}},goBackToIndex(e){if(N.history.length>1){N.history=N.history.slice(0,e+1);const[t]=N.history.slice(-1);t&&(N.view=t)}}},j=(0,n.sj)({loading:!1,open:!1}),L={state:j,subscribe:e=>(0,n.Ld)(j,(()=>e(j))),subscribeKey:(e,t)=>i(j,e,t),async open(e){await k.state.prefetchPromise,e?.view?T.reset(e.view):l.state.isConnected?T.reset("Account"):T.reset("Connect"),j.open=!0,x.set({open:!0}),M.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){j.open=!1,x.set({open:!1}),M.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(e){j.loading=e}},D=new u({baseUrl:a.getBlockchainApiUrl()}),$={fetchIdentity:({caipChainId:e,address:t})=>D.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:b.state.projectId}}),fetchTransactions({account:e,projectId:t,cursor:r}){const n=r?{cursor:r}:{};return D.get({path:`/v1/account/${e}/history?projectId=${t}`,params:n})}},B=(0,n.sj)({message:"",variant:"success",open:!1}),U={state:B,subscribeKey:(e,t)=>i(B,e,t),showSuccess(e){B.message=e,B.variant="success",B.open=!0},showError(e){const t=a.parseError(e);B.message=t,B.variant="error",B.open=!0},hide(){B.open=!1}},F=(0,n.sj)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),z={state:F,subscribe:e=>(0,n.Ld)(F,(()=>e(F))),async fetchTransactions(e){const{projectId:t}=b.state;if(!t||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");F.loading=!0;try{const r=await $.fetchTransactions({account:e,projectId:t,cursor:F.next}),n=this.filterSpamTransactions(r.data),i=[...F.transactions,...n];F.loading=!1,F.transactions=i,F.transactionsByYear=this.groupTransactionsByYear(F.transactionsByYear,n),F.empty=0===i.length,F.next=r.next?r.next:void 0}catch(r){M.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:F.next}}),U.showError("Failed to fetch transactions"),F.loading=!1,F.empty=!0}},groupTransactionsByYear(e={},t=[]){const r=e;return t.forEach((e=>{const t=new Date(e.metadata.minedAt).getFullYear();r[t]||(r[t]=[]),r[t]?.push(e)})),r},filterSpamTransactions:e=>e.filter((e=>!e.transfers.every((e=>!0===e.nft_info?.flags.is_spam)))),resetTransactions(){F.transactions=[],F.transactionsByYear={},F.loading=!1,F.empty=!1,F.next=void 0}},W=(0,n.sj)({wcError:!1,buffering:!1}),H={state:W,subscribeKey:(e,t)=>i(W,e,t),_getClient(){if(!W._client)throw new Error("ConnectionController client not set");return W._client},setClient(e){W._client=(0,n.iH)(e)},connectWalletConnect(){W.wcPromise=this._getClient().connectWalletConnect((e=>{W.wcUri=e,W.wcPairingExpiry=a.getPairingExpiry()}))},async connectExternal(e){await(this._getClient().connectExternal?.(e)),g.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){W.wcUri=void 0,W.wcPairingExpiry=void 0,W.wcPromise=void 0,W.wcLinking=void 0,W.recentWallet=void 0,z.resetTransactions(),g.deleteWalletConnectDeepLink()},setWcLinking(e){W.wcLinking=e},setWcError(e){W.wcError=e,W.buffering=!1},setRecentWallet(e){W.recentWallet=e},setBuffering(e){W.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},V=(0,n.sj)({status:"uninitialized",isSiweEnabled:!1}),q={state:V,subscribeKey:(e,t)=>i(V,e,t),subscribe:e=>(0,n.Ld)(V,(()=>e(V))),_getClient(){if(!V._client)throw new Error("SIWEController client not set");return V._client},async getNonce(){const e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){const e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){const t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){const t=this._getClient();return await t.verifyMessage(e)},async signIn(){const e=this._getClient();return await e.signIn()},async signOut(){const e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){const t=this._getClient();t.onSignIn?.(e)},onSignOut(){const e=this._getClient();e.onSignOut?.()},setSIWEClient(e){V._client=(0,n.iH)(e),V.status="ready",V.isSiweEnabled=e.options.enabled},setNonce(e){V.nonce=e},setStatus(e){V.status=e},setMessage(e){V.message=e},setSession(e){V.session=e}},G=(0,n.sj)({themeMode:"dark",themeVariables:{}}),Z={state:G,subscribe:e=>(0,n.Ld)(G,(()=>e(G))),setThemeMode(e){G.themeMode=e},setThemeVariables(e){G.themeVariables={...G.themeVariables,...e}},getSnapshot:()=>(0,n.CO)(G)},K={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?y.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?y.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?y.state.connectorImages[e.imageId]:void 0},Y={goBackOrCloseModal(){T.state.history.length>1?T.goBack():L.close()},navigateAfterNetworkSwitch(){const{history:e}=T.state,t=e.findIndex((e=>"Networks"===e));t>=1?T.goBackToIndex(t-1):L.close()}}},4145:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TransactionUtil:()=>Rn,UiHelperUtil:()=>st,WuiAccountButton:()=>wt,WuiAllWalletsImage:()=>Ct,WuiAvatar:()=>dt,WuiButton:()=>It,WuiCard:()=>m,WuiCardSelect:()=>$t,WuiCardSelectLoader:()=>Rt,WuiChip:()=>Ft,WuiConnectButton:()=>Ht,WuiCtaButton:()=>Gt,WuiEmailInput:()=>er,WuiFlex:()=>lt,WuiGrid:()=>Cn,WuiIcon:()=>_e,WuiIconBox:()=>gt,WuiIconLink:()=>nr,WuiImage:()=>Ce,WuiInputElement:()=>sr,WuiInputNumeric:()=>lr,WuiInputText:()=>Qt,WuiLink:()=>dr,WuiListAccordion:()=>gn,WuiListContent:()=>wn,WuiListItem:()=>gr,WuiListWallet:()=>Or,WuiListWalletTransaction:()=>_n,WuiLoadingHexagon:()=>Ae,WuiLoadingSpinner:()=>Pe,WuiLoadingThumbnail:()=>Me,WuiLogo:()=>Nr,WuiLogoSelect:()=>Lr,WuiNetworkButton:()=>Br,WuiNetworkImage:()=>jt,WuiNoticeCard:()=>dn,WuiOtp:()=>zr,WuiQrCode:()=>Zr,WuiSearchBar:()=>Yr,WuiSeparator:()=>In,WuiShimmer:()=>je,WuiSnackbar:()=>Xr,WuiTabs:()=>rn,WuiTag:()=>Ir,WuiText:()=>Fe,WuiTooltip:()=>sn,WuiTransactionListItem:()=>Er,WuiTransactionListItemLoader:()=>Cr,WuiTransactionVisual:()=>br,WuiVisual:()=>it,WuiVisualThumbnail:()=>ln,WuiWalletImage:()=>_t,customElement:()=>f,initializeTheming:()=>a,setColorTheme:()=>c,setThemeVariables:()=>l});var n=r(242);let i,o,s;function a(e,t){i=document.createElement("style"),o=document.createElement("style"),s=document.createElement("style"),i.textContent=u(e).core.cssText,o.textContent=u(e).dark.cssText,s.textContent=u(e).light.cssText,document.head.appendChild(i),document.head.appendChild(o),document.head.appendChild(s),c(t)}function c(e){o&&s&&("light"===e?(o.removeAttribute("media"),s.media="enabled"):(s.removeAttribute("media"),o.media="enabled"))}function l(e){i&&o&&s&&(i.textContent=u(e).core.cssText,o.textContent=u(e).dark.cssText,s.textContent=u(e).light.cssText)}function u(e){return{core:n.iv`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${(0,n.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,n.$m)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,n.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,n.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,n.$m)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:n.iv`
      :root {
        --w3m-color-mix: ${(0,n.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,n.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:n.iv`
      :root {
        --w3m-color-mix: ${(0,n.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,n.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const h=n.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,d=n.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,p=n.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function f(e){return function(t){return"function"==typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}const g=n.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let m=class extends n.oi{render(){return n.dy`<slot></slot>`}};m.styles=[h,g],m=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([f("wui-card")],m);var y=r(3215);const w=n.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,b=n.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,v=n.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,_=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,E=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,x=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,C=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,S=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,A=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,I=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,k=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,P=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,O=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,R=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,M=n.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,N=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,T=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,j=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,L=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,D=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,$=n.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,B=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,U=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,F=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,z=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,W=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,H=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,V=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,q=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,G=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Z=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,K=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Y=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Q=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,J=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,X=n.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ee=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,te=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,re=n.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ne=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,ie=n.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,oe=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,se=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ae=n.YP`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,ce=n.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,le=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,ue=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,he=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,de=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,pe=n.YP`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,fe=n.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,ge=n.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,me=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,ye=n.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,we=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var be=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const ve={allWallets:b,alpha:n.YP`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`,appStore:v,chromeStore:M,apple:_,arrowBottom:E,arrowLeft:x,arrowRight:C,arrowTop:S,browser:A,checkmark:I,chevronBottom:k,chevronLeft:P,chevronRight:O,chevronTop:R,clock:N,close:T,compass:L,coinPlaceholder:j,copy:D,cursor:$,desktop:B,disconnect:U,discord:F,etherscan:z,extension:W,externalLink:H,facebook:V,filters:q,github:G,google:Z,helpCircle:K,infoCircle:Y,mail:Q,mobile:J,networkPlaceholder:X,nftPlaceholder:ee,off:te,playStore:re,qrCode:ne,refresh:ie,search:oe,swapHorizontal:se,swapHorizontalBold:ae,swapVertical:ce,telegram:le,twitch:ue,twitter:he,twitterIcon:de,verify:pe,verifyFilled:fe,wallet:me,walletConnect:ye,walletPlaceholder:ge,warningCircle:we};let _e=class extends n.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,n.dy`${ve[this.name]}`}};_e.styles=[h,p,w],be([(0,y.Cb)()],_e.prototype,"size",void 0),be([(0,y.Cb)()],_e.prototype,"name",void 0),be([(0,y.Cb)()],_e.prototype,"color",void 0),_e=be([f("wui-icon")],_e);const Ee=n.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var xe=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ce=class extends n.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return n.dy`<img src=${this.src} alt=${this.alt} />`}};Ce.styles=[h,p,Ee],xe([(0,y.Cb)()],Ce.prototype,"src",void 0),xe([(0,y.Cb)()],Ce.prototype,"alt",void 0),Ce=xe([f("wui-image")],Ce);const Se=n.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Ae=class extends n.oi{render(){return n.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ae.styles=[h,Se],Ae=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([f("wui-loading-hexagon")],Ae);const Ie=n.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var ke=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pe=class extends n.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,n.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Pe.styles=[h,Ie],ke([(0,y.Cb)()],Pe.prototype,"color",void 0),ke([(0,y.Cb)()],Pe.prototype,"size",void 0),Pe=ke([f("wui-loading-spinner")],Pe);const Oe=n.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Re=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Me=class extends n.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,r=116+t,i=245+t,o=360+1.75*t;return n.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};Me.styles=[h,Oe],Re([(0,y.Cb)({type:Number})],Me.prototype,"radius",void 0),Me=Re([f("wui-loading-thumbnail")],Me);const Ne=n.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Te=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let je=class extends n.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,n.dy`<slot></slot>`}};je.styles=[Ne],Te([(0,y.Cb)()],je.prototype,"width",void 0),Te([(0,y.Cb)()],je.prototype,"height",void 0),Te([(0,y.Cb)()],je.prototype,"borderRadius",void 0),je=Te([f("wui-shimmer")],je);var Le=r(9699),De=r(8476);const $e=(0,De.XM)(class extends De.Xe{constructor(e){if(super(e),e.type!==De.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const r=e.element.classList;for(const e of this.it)e in t||(r.remove(e),this.it.delete(e));for(const e in t){const n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return Le.Jb}}),Be=n.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Ue=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Fe=class extends n.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,n.dy`<slot class=${$e(e)}></slot>`}};Fe.styles=[h,Be],Ue([(0,y.Cb)()],Fe.prototype,"variant",void 0),Ue([(0,y.Cb)()],Fe.prototype,"color",void 0),Ue([(0,y.Cb)()],Fe.prototype,"align",void 0),Fe=Ue([f("wui-text")],Fe);const ze=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,We=n.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,He=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,Ve=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,qe=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Ge=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Ze=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Ke=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Ye=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,Qe=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Je=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Xe=n.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,et=n.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,tt=n.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var rt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const nt={browser:ze,dao:We,defi:He,defiAlt:Ve,eth:qe,layers:Ge,lock:Ze,login:Ke,network:Ye,nft:Qe,noun:Je,profile:Xe,system:et};let it=class extends n.oi{constructor(){super(...arguments),this.name="browser"}render(){return n.dy`${nt[this.name]}`}};it.styles=[h,tt],rt([(0,y.Cb)()],it.prototype,"name",void 0),it=rt([f("wui-visual")],it);var ot=r(5118);const st={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:n})=>e.length<=t+r?e:"end"===n?`${e.substring(0,t)}...`:"start"===n?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),i=100-3*Number(n?.replace("px","")),o=`${i}% ${i}% at 65% 40%`,s=[];for(let e=0;e<5;e+=1){const t=this.tintColor(r,.15*e);s.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${s[0]};\n    --local-color-2: ${s[1]};\n    --local-color-3: ${s[2]};\n    --local-color-4: ${s[3]};\n    --local-color-5: ${s[4]};\n    --local-radial-circle: ${o}\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},at=n.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var ct=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let lt=class extends n.oi{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&st.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&st.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&st.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&st.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&st.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&st.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&st.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&st.getSpacingStyles(this.margin,3)};\n    `,n.dy`<slot></slot>`}};lt.styles=[h,at],ct([(0,y.Cb)()],lt.prototype,"flexDirection",void 0),ct([(0,y.Cb)()],lt.prototype,"flexWrap",void 0),ct([(0,y.Cb)()],lt.prototype,"flexBasis",void 0),ct([(0,y.Cb)()],lt.prototype,"flexGrow",void 0),ct([(0,y.Cb)()],lt.prototype,"flexShrink",void 0),ct([(0,y.Cb)()],lt.prototype,"alignItems",void 0),ct([(0,y.Cb)()],lt.prototype,"justifyContent",void 0),ct([(0,y.Cb)()],lt.prototype,"columnGap",void 0),ct([(0,y.Cb)()],lt.prototype,"rowGap",void 0),ct([(0,y.Cb)()],lt.prototype,"gap",void 0),ct([(0,y.Cb)()],lt.prototype,"padding",void 0),ct([(0,y.Cb)()],lt.prototype,"margin",void 0),lt=ct([f("wui-flex")],lt);const ut=n.iv`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ht=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let dt=class extends n.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return n.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=st.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};dt.styles=[h,ut],ht([(0,y.Cb)()],dt.prototype,"imageSrc",void 0),ht([(0,y.Cb)()],dt.prototype,"alt",void 0),ht([(0,y.Cb)()],dt.prototype,"address",void 0),dt=ht([f("wui-avatar")],dt);const pt=n.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var ft=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let gt=class extends n.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i=t?"12%":"16%",o=t?"xxs":r?"s":"3xl",s="gray"===this.background,a="opaque"===this.background,c="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||s?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,n.dy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};gt.styles=[h,d,pt],ft([(0,y.Cb)()],gt.prototype,"size",void 0),ft([(0,y.Cb)()],gt.prototype,"backgroundColor",void 0),ft([(0,y.Cb)()],gt.prototype,"iconColor",void 0),ft([(0,y.Cb)()],gt.prototype,"iconSize",void 0),ft([(0,y.Cb)()],gt.prototype,"background",void 0),ft([(0,y.Cb)({type:Boolean})],gt.prototype,"border",void 0),ft([(0,y.Cb)()],gt.prototype,"borderColor",void 0),ft([(0,y.Cb)()],gt.prototype,"icon",void 0),gt=ft([f("wui-icon-box")],gt);const mt=n.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var yt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let wt=class extends n.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return n.dy`
      <button
        ?disabled=${this.disabled}
        class=${(0,ot.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${st.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?n.dy`<wui-image src=${this.networkSrc}></wui-image>`:n.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return n.dy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};wt.styles=[h,d,mt],yt([(0,y.Cb)()],wt.prototype,"networkSrc",void 0),yt([(0,y.Cb)()],wt.prototype,"avatarSrc",void 0),yt([(0,y.Cb)()],wt.prototype,"balance",void 0),yt([(0,y.Cb)({type:Boolean})],wt.prototype,"disabled",void 0),yt([(0,y.Cb)({type:Boolean})],wt.prototype,"isProfileName",void 0),yt([(0,y.Cb)()],wt.prototype,"address",void 0),yt([(0,y.Cb)()],wt.prototype,"charsStart",void 0),yt([(0,y.Cb)()],wt.prototype,"charsEnd",void 0),wt=yt([f("wui-account-button")],wt);const bt=n.iv`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var vt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _t=class extends n.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),n.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?n.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:n.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};_t.styles=[h,bt],vt([(0,y.Cb)()],_t.prototype,"size",void 0),vt([(0,y.Cb)()],_t.prototype,"name",void 0),vt([(0,y.Cb)()],_t.prototype,"imageSrc",void 0),vt([(0,y.Cb)()],_t.prototype,"walletIcon",void 0),vt([(0,y.Cb)({type:Boolean})],_t.prototype,"installed",void 0),vt([(0,y.Cb)()],_t.prototype,"badgeSize",void 0),_t=vt([f("wui-wallet-image")],_t);const Et=n.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var xt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ct=class extends n.oi{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return n.dy`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>n.dy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,ot.o)(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>n.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Ct.styles=[h,Et],xt([(0,y.Cb)({type:Array})],Ct.prototype,"walletImages",void 0),Ct=xt([f("wui-all-wallets-image")],Ct);const St=n.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var At=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let It=class extends n.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const e="md"===this.size?"paragraph-600":"small-600";return n.dy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?n.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:n.dy``}};It.styles=[h,d,St],At([(0,y.Cb)()],It.prototype,"size",void 0),At([(0,y.Cb)({type:Boolean})],It.prototype,"disabled",void 0),At([(0,y.Cb)({type:Boolean})],It.prototype,"fullWidth",void 0),At([(0,y.Cb)({type:Boolean})],It.prototype,"loading",void 0),At([(0,y.Cb)()],It.prototype,"variant",void 0),At([(0,y.Cb)({type:Boolean})],It.prototype,"hasIconLeft",void 0),At([(0,y.Cb)({type:Boolean})],It.prototype,"hasIconRight",void 0),It=At([f("wui-button")],It);const kt=n.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Pt=n.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Ot=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Rt=class extends n.oi{constructor(){super(...arguments),this.type="wallet"}render(){return n.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?n.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${kt}`:n.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Rt.styles=[h,d,Pt],Ot([(0,y.Cb)()],Rt.prototype,"type",void 0),Rt=Ot([f("wui-card-select-loader")],Rt);const Mt=n.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Nt=n.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Tt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let jt=class extends n.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e="lg"===this.size;return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};\n      --local-width: ${e?"86px":"48px"};\n      --local-height: ${e?"96px":"54px"};\n      --local-icon-size: ${e?"42px":"24px"};\n    `,n.dy`${this.templateVisual()} ${e?Mt:kt}`}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:n.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};jt.styles=[h,Nt],Tt([(0,y.Cb)()],jt.prototype,"size",void 0),Tt([(0,y.Cb)()],jt.prototype,"name",void 0),Tt([(0,y.Cb)()],jt.prototype,"imageSrc",void 0),Tt([(0,y.Cb)({type:Boolean})],jt.prototype,"selected",void 0),jt=Tt([f("wui-network-image")],jt);const Lt=n.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Dt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let $t=class extends n.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return n.dy`
      <button data-selected=${(0,ot.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?n.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,ot.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:n.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,ot.o)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};$t.styles=[h,d,Lt],Dt([(0,y.Cb)()],$t.prototype,"name",void 0),Dt([(0,y.Cb)()],$t.prototype,"type",void 0),Dt([(0,y.Cb)()],$t.prototype,"imageSrc",void 0),Dt([(0,y.Cb)({type:Boolean})],$t.prototype,"disabled",void 0),Dt([(0,y.Cb)({type:Boolean})],$t.prototype,"selected",void 0),Dt([(0,y.Cb)({type:Boolean})],$t.prototype,"installed",void 0),$t=Dt([f("wui-card-select")],$t);const Bt=n.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var Ut=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ft=class extends n.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return n.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:st.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};Ft.styles=[h,d,Bt],Ut([(0,y.Cb)()],Ft.prototype,"variant",void 0),Ut([(0,y.Cb)()],Ft.prototype,"imageSrc",void 0),Ut([(0,y.Cb)({type:Boolean})],Ft.prototype,"disabled",void 0),Ut([(0,y.Cb)()],Ft.prototype,"icon",void 0),Ut([(0,y.Cb)()],Ft.prototype,"href",void 0),Ut([(0,y.Cb)()],Ft.prototype,"text",void 0),Ft=Ut([f("wui-chip")],Ft);const zt=n.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Wt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ht=class extends n.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return n.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?n.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Ht.styles=[h,d,zt],Wt([(0,y.Cb)()],Ht.prototype,"size",void 0),Wt([(0,y.Cb)({type:Boolean})],Ht.prototype,"loading",void 0),Ht=Wt([f("wui-connect-button")],Ht);const Vt=n.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var qt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Gt=class extends n.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return n.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Gt.styles=[h,d,Vt],qt([(0,y.Cb)({type:Boolean})],Gt.prototype,"disabled",void 0),qt([(0,y.Cb)()],Gt.prototype,"label",void 0),qt([(0,y.Cb)()],Gt.prototype,"buttonLabel",void 0),Gt=qt([f("wui-cta-button")],Gt);var Zt=r(5756);const Kt=n.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 10.5px var(--wui-spacing-l) 10.5px 44px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Yt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Qt=class extends n.oi{constructor(){super(...arguments),this.inputElementRef=(0,Zt.V)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return n.dy` ${this.templateIcon()}
      <input
        ${(0,Zt.i)(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,ot.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${(0,ot.o)(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?n.dy`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Qt.styles=[h,d,Kt],Yt([(0,y.Cb)()],Qt.prototype,"size",void 0),Yt([(0,y.Cb)()],Qt.prototype,"icon",void 0),Yt([(0,y.Cb)({type:Boolean})],Qt.prototype,"disabled",void 0),Yt([(0,y.Cb)()],Qt.prototype,"placeholder",void 0),Yt([(0,y.Cb)()],Qt.prototype,"type",void 0),Yt([(0,y.Cb)()],Qt.prototype,"keyHint",void 0),Yt([(0,y.Cb)()],Qt.prototype,"value",void 0),Qt=Yt([f("wui-input-text")],Qt);const Jt=n.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Xt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let er=class extends n.oi{constructor(){super(...arguments),this.disabled=!1}render(){return n.dy`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?n.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};er.styles=[h,Jt],Xt([(0,y.Cb)()],er.prototype,"errorMessage",void 0),Xt([(0,y.Cb)({type:Boolean})],er.prototype,"disabled",void 0),Xt([(0,y.Cb)()],er.prototype,"value",void 0),er=Xt([f("wui-email-input")],er);const tr=n.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var rr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let nr=class extends n.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return n.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};nr.styles=[h,d,p,tr],rr([(0,y.Cb)()],nr.prototype,"size",void 0),rr([(0,y.Cb)({type:Boolean})],nr.prototype,"disabled",void 0),rr([(0,y.Cb)()],nr.prototype,"icon",void 0),rr([(0,y.Cb)()],nr.prototype,"iconColor",void 0),nr=rr([f("wui-icon-link")],nr);const ir=n.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var or=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let sr=class extends n.oi{constructor(){super(...arguments),this.icon="copy"}render(){return n.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};sr.styles=[h,d,ir],or([(0,y.Cb)()],sr.prototype,"icon",void 0),sr=or([f("wui-input-element")],sr);const ar=n.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }
  }
`;var cr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let lr=class extends n.oi{constructor(){super(...arguments),this.disabled=!1}render(){return n.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};lr.styles=[h,d,ar],cr([(0,y.Cb)({type:Boolean})],lr.prototype,"disabled",void 0),lr=cr([f("wui-input-numeric")],lr);const ur=n.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var hr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let dr=class extends n.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return n.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};dr.styles=[h,d,ur],hr([(0,y.Cb)({type:Boolean})],dr.prototype,"disabled",void 0),hr([(0,y.Cb)()],dr.prototype,"color",void 0),dr=hr([f("wui-link")],dr);const pr=n.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var fr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let gr=class extends n.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return n.dy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,ot.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return n.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return n.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?n.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:n.dy``}chevronTemplate(){return this.chevron?n.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var mr;gr.styles=[h,d,pr],fr([(0,y.Cb)()],gr.prototype,"icon",void 0),fr([(0,y.Cb)()],gr.prototype,"iconSize",void 0),fr([(0,y.Cb)()],gr.prototype,"variant",void 0),fr([(0,y.Cb)()],gr.prototype,"iconVariant",void 0),fr([(0,y.Cb)({type:Boolean})],gr.prototype,"disabled",void 0),fr([(0,y.Cb)()],gr.prototype,"imageSrc",void 0),fr([(0,y.Cb)()],gr.prototype,"alt",void 0),fr([(0,y.Cb)({type:Boolean})],gr.prototype,"chevron",void 0),fr([(0,y.Cb)({type:Boolean})],gr.prototype,"loading",void 0),gr=fr([f("wui-list-item")],gr),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(mr||(mr={}));const yr=n.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var wr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let br=class extends n.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r="NFT"===e?.type,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",o=(t?.url?"NFT"===t.type:r)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${i};\n    --local-right-border-radius: ${o};\n    `,n.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?n.dy`<div class="swap-images-container">
        ${e?.url?n.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?n.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?n.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?n.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:n.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?n.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};br.styles=[yr],wr([(0,y.Cb)()],br.prototype,"type",void 0),wr([(0,y.Cb)()],br.prototype,"status",void 0),wr([(0,y.Cb)()],br.prototype,"direction",void 0),wr([(0,y.Cb)({type:Boolean})],br.prototype,"onlyDirectionIcon",void 0),wr([(0,y.Cb)({type:Array})],br.prototype,"images",void 0),wr([(0,y.Cb)({type:Object})],br.prototype,"secondImage",void 0),br=wr([f("wui-transaction-visual")],br);const vr=n.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var _r=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Er=class extends n.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return n.dy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,ot.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,ot.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${mr[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?n.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?n.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};Er.styles=[h,vr],_r([(0,y.Cb)()],Er.prototype,"type",void 0),_r([(0,y.Cb)({type:Array})],Er.prototype,"descriptions",void 0),_r([(0,y.Cb)()],Er.prototype,"date",void 0),_r([(0,y.Cb)({type:Boolean})],Er.prototype,"onlyDirectionIcon",void 0),_r([(0,y.Cb)()],Er.prototype,"status",void 0),_r([(0,y.Cb)()],Er.prototype,"direction",void 0),_r([(0,y.Cb)({type:Array})],Er.prototype,"images",void 0),Er=_r([f("wui-transaction-list-item")],Er);const xr=n.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let Cr=class extends n.oi{render(){return n.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Cr.styles=[h,xr],Cr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([f("wui-transaction-list-item-loader")],Cr);const Sr=n.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var Ar=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ir=class extends n.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,n.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Ir.styles=[h,Sr],Ar([(0,y.Cb)()],Ir.prototype,"variant",void 0),Ir=Ar([f("wui-tag")],Ir);const kr=n.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Pr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Or=class extends n.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return n.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?n.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?n.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?n.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:n.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?n.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?n.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Or.styles=[h,d,kr],Pr([(0,y.Cb)({type:Array})],Or.prototype,"walletImages",void 0),Pr([(0,y.Cb)()],Or.prototype,"imageSrc",void 0),Pr([(0,y.Cb)()],Or.prototype,"name",void 0),Pr([(0,y.Cb)()],Or.prototype,"tagLabel",void 0),Pr([(0,y.Cb)()],Or.prototype,"tagVariant",void 0),Pr([(0,y.Cb)()],Or.prototype,"icon",void 0),Pr([(0,y.Cb)()],Or.prototype,"walletIcon",void 0),Pr([(0,y.Cb)({type:Boolean})],Or.prototype,"installed",void 0),Pr([(0,y.Cb)({type:Boolean})],Or.prototype,"disabled",void 0),Pr([(0,y.Cb)({type:Boolean})],Or.prototype,"showAllWallets",void 0),Or=Pr([f("wui-list-wallet")],Or);const Rr=n.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Mr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Nr=class extends n.oi{constructor(){super(...arguments),this.logo="google"}render(){return n.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Nr.styles=[h,Rr],Mr([(0,y.Cb)()],Nr.prototype,"logo",void 0),Nr=Mr([f("wui-logo")],Nr);const Tr=n.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var jr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Lr=class extends n.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return n.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Lr.styles=[h,d,Tr],jr([(0,y.Cb)()],Lr.prototype,"logo",void 0),jr([(0,y.Cb)({type:Boolean})],Lr.prototype,"disabled",void 0),Lr=jr([f("wui-logo-select")],Lr);const Dr=n.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var $r=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Br=class extends n.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return n.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc}></wui-image>`:n.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Br.styles=[h,d,Dr],$r([(0,y.Cb)()],Br.prototype,"imageSrc",void 0),$r([(0,y.Cb)({type:Boolean})],Br.prototype,"disabled",void 0),Br=$r([f("wui-network-button")],Br);const Ur=n.iv`
  :host {
    position: relative;
    display: block;
  }
`;var Fr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let zr=class extends n.oi{constructor(){super(...arguments),this.length=6,this.valueArr=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.valueArr.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):this.updateInput(n,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&(n.disabled=!1,n.focus())}if("prev"===e){const e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return n.dy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>n.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,r){const n=this.numerics[t],i=e||(n?this.getInputElement(n):void 0);i&&(i.value=r,this.valueArr=this.valueArr.map(((e,n)=>n===t?r:e)))}handleInput(e,t){const r=e.target,n=this.getInputElement(r);if(n){const r=n.value;"insertFromPaste"===e.inputType?this.handlePaste(n,r,t):st.isNumber(r)&&e.data?(this.updateInput(n,t,e.data),this.focusInputField("next",t)):this.updateInput(n,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const n=t[0];if(n&&st.isNumber(n)){this.updateInput(e,r,n);const i=t.substring(1);if(r+1<this.length&&i.length){const e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.valueArr.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};zr.styles=[h,Ur],Fr([(0,y.Cb)({type:Number})],zr.prototype,"length",void 0),Fr([(0,y.SB)()],zr.prototype,"valueArr",void 0),zr=Fr([f("wui-otp")],zr);var Wr=r(2592);function Hr(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}const Vr={generate(e,t,r){const i="#141414",o=[],s=function(e,t){const r=Array.prototype.slice.call(Wr.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(r.length);return r.reduce(((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e),a=t/s.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach((({x:e,y:t})=>{const r=(s.length-7)*a*e,l=(s.length-7)*a*t,u=.45;for(let e=0;e<c.length;e+=1){const t=a*(7-2*e);o.push(n.YP`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*u:t*u}
              ry= ${0===e?(t-5)*u:t*u}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+a*e+2.5:l+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}}));const l=Math.floor((r+25)/a),u=s.length/2-l/2,h=s.length/2+l/2-1,d=[];s.forEach(((e,t)=>{e.forEach(((e,r)=>{if(s[t][r]&&!(t<7&&r<7||t>s.length-8&&r<7||t<7&&r>s.length-8||t>u&&t<h&&r>u&&r<h)){const e=t*a+a/2,n=r*a+a/2;d.push([e,n])}}))}));const p={};return d.forEach((([e,t])=>{p[e]?p[e]?.push(t):p[e]=[t]})),Object.entries(p).map((([e,t])=>{const r=t.filter((e=>t.every((t=>!Hr(e,t,a)))));return[Number(e),r]})).forEach((([e,t])=>{t.forEach((t=>{o.push(n.YP`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)}))})),Object.entries(p).filter((([e,t])=>t.length>1)).map((([e,t])=>{const r=t.filter((e=>t.some((t=>Hr(e,t,a)))));return[Number(e),r]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));const r=[];for(const e of t){const t=r.find((t=>t.some((t=>Hr(e,t,a)))));t?t.push(e):r.push([e])}return[e,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,r])=>{o.push(n.YP`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)}))})),o}},qr=n.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Gr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Zr=class extends n.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,n.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return n.YP`
      <svg height=${e} width=${e}>
        ${Vr.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:n.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Zr.styles=[h,qr],Gr([(0,y.Cb)()],Zr.prototype,"uri",void 0),Gr([(0,y.Cb)({type:Number})],Zr.prototype,"size",void 0),Gr([(0,y.Cb)()],Zr.prototype,"theme",void 0),Gr([(0,y.Cb)()],Zr.prototype,"imageSrc",void 0),Gr([(0,y.Cb)()],Zr.prototype,"alt",void 0),Zr=Gr([f("wui-qr-code")],Zr);const Kr=n.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let Yr=class extends n.oi{constructor(){super(...arguments),this.inputComponentRef=(0,Zt.V)()}render(){return n.dy`
      <wui-input-text
        ${(0,Zt.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Yr.styles=[h,Kr],Yr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([f("wui-search-bar")],Yr);const Qr=n.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Jr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xr=class extends n.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return n.dy`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Xr.styles=[h,Qr],Jr([(0,y.Cb)()],Xr.prototype,"backgroundColor",void 0),Jr([(0,y.Cb)()],Xr.prototype,"iconColor",void 0),Jr([(0,y.Cb)()],Xr.prototype,"icon",void 0),Jr([(0,y.Cb)()],Xr.prototype,"message",void 0),Xr=Jr([f("wui-snackbar")],Xr);const en=n.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var tn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let rn=class extends n.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const r=t===this.activeTab;return n.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),o=n?.querySelector("wui-text"),s=n?.getBoundingClientRect(),a=o?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&s&&a&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(s.width+a.width)+6}px`,n.animate([{width:`${s.width+a.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};rn.styles=[h,d,en],tn([(0,y.Cb)({type:Array})],rn.prototype,"tabs",void 0),tn([(0,y.Cb)()],rn.prototype,"onTabChange",void 0),tn([(0,y.Cb)({type:Array})],rn.prototype,"buttons",void 0),tn([(0,y.Cb)({type:Boolean})],rn.prototype,"disabled",void 0),tn([(0,y.SB)()],rn.prototype,"activeTab",void 0),tn([(0,y.SB)()],rn.prototype,"localTabWidth",void 0),tn([(0,y.SB)()],rn.prototype,"isDense",void 0),rn=tn([f("wui-tabs")],rn);const nn=n.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var on=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let sn=class extends n.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return n.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};sn.styles=[h,d,nn],on([(0,y.Cb)()],sn.prototype,"placement",void 0),on([(0,y.Cb)()],sn.prototype,"message",void 0),sn=on([f("wui-tooltip")],sn);const an=n.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var cn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ln=class extends n.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,n.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:n.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ln.styles=[h,an],cn([(0,y.Cb)()],ln.prototype,"imageSrc",void 0),cn([(0,y.Cb)()],ln.prototype,"alt",void 0),cn([(0,y.Cb)({type:Boolean})],ln.prototype,"borderRadiusFull",void 0),ln=cn([f("wui-visual-thumbnail")],ln);const un=n.iv`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var hn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let dn=class extends n.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return n.dy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};dn.styles=[h,d,un],hn([(0,y.Cb)()],dn.prototype,"label",void 0),hn([(0,y.Cb)()],dn.prototype,"description",void 0),hn([(0,y.Cb)()],dn.prototype,"icon",void 0),dn=hn([f("wui-notice-card")],dn);const pn=n.iv`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var fn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let gn=class extends n.oi{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout((()=>{const e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;const t=e?.scrollHeight;t&&t>100&&(this.enableAccordion=!0,this.scrollHeightElement=t,this.requestUpdate())}}),0)}render(){return n.dy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?n.dy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};gn.styles=[h,d,pn],fn([(0,y.Cb)()],gn.prototype,"textTitle",void 0),fn([(0,y.Cb)()],gn.prototype,"overflowedContent",void 0),gn=fn([f("wui-list-accordion")],gn);const mn=n.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var yn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let wn=class extends n.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return n.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?n.dy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:n.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};wn.styles=[h,d,mn],yn([(0,y.Cb)()],wn.prototype,"imageSrc",void 0),yn([(0,y.Cb)()],wn.prototype,"textTitle",void 0),yn([(0,y.Cb)()],wn.prototype,"textValue",void 0),wn=yn([f("wui-list-content")],wn);const bn=n.iv`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var vn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _n=class extends n.oi{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return n.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?n.dy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:n.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};_n.styles=[h,d,bn],vn([(0,y.Cb)()],_n.prototype,"amount",void 0),vn([(0,y.Cb)()],_n.prototype,"networkCurreny",void 0),vn([(0,y.Cb)()],_n.prototype,"networkImageUrl",void 0),vn([(0,y.Cb)()],_n.prototype,"receiverAddress",void 0),_n=vn([f("wui-list-wallet-transaction")],_n);const En=n.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var xn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Cn=class extends n.oi{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&st.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&st.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&st.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&st.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&st.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&st.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&st.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&st.getSpacingStyles(this.margin,3)};\n    `,n.dy`<slot></slot>`}};Cn.styles=[h,En],xn([(0,y.Cb)()],Cn.prototype,"gridTemplateRows",void 0),xn([(0,y.Cb)()],Cn.prototype,"gridTemplateColumns",void 0),xn([(0,y.Cb)()],Cn.prototype,"justifyItems",void 0),xn([(0,y.Cb)()],Cn.prototype,"alignItems",void 0),xn([(0,y.Cb)()],Cn.prototype,"justifyContent",void 0),xn([(0,y.Cb)()],Cn.prototype,"alignContent",void 0),xn([(0,y.Cb)()],Cn.prototype,"columnGap",void 0),xn([(0,y.Cb)()],Cn.prototype,"rowGap",void 0),xn([(0,y.Cb)()],Cn.prototype,"gap",void 0),xn([(0,y.Cb)()],Cn.prototype,"padding",void 0),xn([(0,y.Cb)()],Cn.prototype,"margin",void 0),Cn=xn([f("wui-grid")],Cn);const Sn=n.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var An=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let In=class extends n.oi{constructor(){super(...arguments),this.text=""}render(){return n.dy`${this.template()}`}template(){return this.text?n.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};In.styles=[h,Sn],An([(0,y.Cb)()],In.prototype,"text",void 0),In=An([f("wui-separator")],In);var kn=r(248);const Pn=["receive","deposit","borrow","claim"],On=["withdraw","repay","burn"],Rn={getTransactionGroupTitle:e=>e===kn.E.getYear()?"This Year":e,getTransactionImages(e){const[t,r]=e,n=Boolean(t)&&e?.every((e=>Boolean(e.nft_info))),i=e?.length>1;return 2!==e?.length||n?i?e.map((e=>this.getTransactionImage(e))):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:Rn.getTransactionTransferTokenType(e),url:Rn.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null;const r=Boolean(e?.nft_info),n=Boolean(e?.fungible_info);return e&&r?t=e?.nft_info?.content?.preview?.url:e&&n&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){const t=e.metadata?.operationType,r=e.transfers,n=e.transfers?.length>0,i=e.transfers?.length>1,o=n&&r?.every((e=>Boolean(e.fungible_info))),[s,a]=r;let c=this.getTransferDescription(s),l=this.getTransferDescription(a);if(!n)return"send"!==t&&"receive"!==t||!o?[e.metadata.status]:(c=st.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=st.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]);if(i)return r.map((e=>this.getTransferDescription(e)));let u="";return Pn.includes(t)?u="+":On.includes(t)&&(u="-"),c=u.concat(c),[c]},getTransferDescription(e){let t="";return e?(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-"),t):t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},3649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__addDisposableResource:()=>T,__assign:()=>o,__asyncDelegator:()=>S,__asyncGenerator:()=>C,__asyncValues:()=>A,__await:()=>x,__awaiter:()=>f,__classPrivateFieldGet:()=>R,__classPrivateFieldIn:()=>N,__classPrivateFieldSet:()=>M,__createBinding:()=>m,__decorate:()=>a,__disposeResources:()=>L,__esDecorate:()=>l,__exportStar:()=>y,__extends:()=>i,__generator:()=>g,__importDefault:()=>O,__importStar:()=>P,__makeTemplateObject:()=>I,__metadata:()=>p,__param:()=>c,__propKey:()=>h,__read:()=>b,__rest:()=>s,__runInitializers:()=>u,__setFunctionName:()=>d,__spread:()=>v,__spreadArray:()=>E,__spreadArrays:()=>_,__values:()=>w,default:()=>D});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function s(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function a(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}function c(e,t){return function(r,n){t(r,n,e)}}function l(e,t,r,n,i,o){function s(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var a,c=n.kind,l="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?n.static?e:e.prototype:null,h=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),d=!1,p=r.length-1;p>=0;p--){var f={};for(var g in n)f[g]="access"===g?{}:n[g];for(var g in n.access)f.access[g]=n.access[g];f.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");o.push(s(e||null))};var m=(0,r[p])("accessor"===c?{get:h.get,set:h.set}:h[l],f);if("accessor"===c){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(a=s(m.get))&&(h.get=a),(a=s(m.set))&&(h.set=a),(a=s(m.init))&&i.unshift(a)}else(a=s(m))&&("field"===c?i.unshift(a):h[l]=a)}u&&Object.defineProperty(u,n.name,h),d=!0}function u(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0}function h(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))}function g(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var m=Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function y(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||m(t,e,r)}function w(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}function E(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function x(e){return this instanceof x?(this.v=e,this):new x(e)}function C(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),o=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){i[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||a(e,t)}))})}function a(e,t){try{(r=i[e](t)).value instanceof x?Promise.resolve(r.value.v).then(c,l):u(o[0][2],r)}catch(e){u(o[0][3],e)}var r}function c(e){a("next",e)}function l(e){a("throw",e)}function u(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}function S(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:x(e[n](t)),done:!1}:i?i(t):t}:i}}function A(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=w(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,i){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,i,(t=e[r](t)).done,t.value)}))}}}function I(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var k=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&m(t,e,r);return k(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function R(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function M(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r}function N(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function T(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if("function"!=typeof n)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var j="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function L(e){function t(t){e.error=e.hasError?new j(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var i=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(i).then(r,(function(e){return t(e),r()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}const D={__extends:i,__assign:o,__rest:s,__decorate:a,__param:c,__metadata:p,__awaiter:f,__generator:g,__createBinding:m,__exportStar:y,__values:w,__read:b,__spread:v,__spreadArrays:_,__spreadArray:E,__await:x,__asyncGenerator:C,__asyncDelegator:S,__asyncValues:A,__makeTemplateObject:I,__importStar:P,__importDefault:O,__classPrivateFieldGet:R,__classPrivateFieldSet:M,__classPrivateFieldIn:N,__addDisposableResource:T,__disposeResources:L}},3215:(e,t,r)=>{"use strict";r.d(t,{Cb:()=>s,SB:()=>a});var n=r(2202);const i={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},o=(e=i,t,r)=>{const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,e),"accessor"===n){const{name:n}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function s(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{const n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function a(e){return s({...e,state:!0,attribute:!1})}},5118:(e,t,r)=>{"use strict";r.d(t,{o:()=>i});var n=r(9699);const i=e=>e??n.Ld},5756:(e,t,r)=>{"use strict";r.d(t,{V:()=>p,i:()=>m});var n=r(9699);const{D:i}=n._$LH;var o=r(8476);const s=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const e of r)e._$AO?.(t,!1),s(e,t);return!0},a=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},c=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),h(t)}};function l(e){void 0!==this._$AN?(a(this),this._$AM=e,c(this)):this._$AM=e}function u(e,t=!1,r=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)s(n[e],!1),a(n[e]);else null!=n&&(s(n,!1),a(n));else s(this,e)}const h=e=>{e.type==o.pX.CHILD&&(e._$AP??=u,e._$AQ??=l)};class d extends o.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),a(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const p=()=>new f;class f{}const g=new WeakMap,m=(0,o.XM)(class extends d{render(e){return n.Ld}update(e,[t]){const r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),n.Ld}ot(e){if("function"==typeof this.G){const t=this.ct??globalThis;let r=g.get(t);void 0===r&&(r=new WeakMap,g.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?g.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},242:(e,t,r)=>{"use strict";r.d(t,{oi:()=>he,iv:()=>l,dy:()=>G,YP:()=>Z,$m:()=>c}),r(2202),r(9699);const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}const c=e=>new a("string"==typeof e?e:e+"",void 0,o),l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new a(r,e,o)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},h=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return c(t)})(e):e,{is:d,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:y}=Object,w=globalThis,b=w.trustedTypes,v=b?b.emptyScript:"",_=w.reactiveElementPolyfillSupport,E=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},C=(e,t)=>!d(e,t),S={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&p(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,t=[...g(e),...m(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??C)(this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$ET??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$Ej()}catch(t){throw e=!1,this._$Ej(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach((e=>this._$EO(e,this[e]))),this._$Ej()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,_?.({ReactiveElement:A}),(w.reactiveElementVersions??=[]).push("2.0.3");const I=globalThis,k=I.trustedTypes,P=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,O="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,M="?"+R,N=`<${M}>`,T=document,j=()=>T.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,$="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,F=/>/g,z=RegExp(`>|${$}(?:([^\\s"'>=/]+)(${$}*=${$}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,H=/"/g,V=/^(?:script|style|textarea|title)$/i,q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),G=q(1),Z=q(2),K=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Q=new WeakMap,J=T.createTreeWalker(T,129);function X(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}const ee=(e,t)=>{const r=e.length-1,n=[];let i,o=2===t?"<svg>":"",s=B;for(let t=0;t<r;t++){const r=e[t];let a,c,l=-1,u=0;for(;u<r.length&&(s.lastIndex=u,c=s.exec(r),null!==c);)u=s.lastIndex,s===B?"!--"===c[1]?s=U:void 0!==c[1]?s=F:void 0!==c[2]?(V.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=z):void 0!==c[3]&&(s=z):s===z?">"===c[0]?(s=i??B,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?z:'"'===c[3]?H:W):s===H||s===W?s=z:s===U||s===F?s=B:(s=z,i=void 0);const h=s===z&&e[t+1].startsWith("/>")?" ":"";o+=s===B?r+N:l>=0?(n.push(a),r.slice(0,l)+O+r.slice(l)+R+h):r+R+(-2===l?t:h)}return[X(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class te{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,o=0;const s=e.length-1,a=this.parts,[c,l]=ee(e,t);if(this.el=te.createElement(c,r),J.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=J.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(O)){const t=l[o++],r=n.getAttribute(e).split(R),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?se:"?"===s[1]?ae:"@"===s[1]?ce:oe}),n.removeAttribute(e)}else e.startsWith(R)&&(a.push({type:6,index:i}),n.removeAttribute(e));if(V.test(n.tagName)){const e=n.textContent.split(R),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],j()),J.nextNode(),a.push({type:2,index:++i});n.append(e[t],j())}}}else if(8===n.nodeType)if(n.data===M)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(R,e+1));)a.push({type:7,index:i}),e+=R.length-1}i++}}static createElement(e,t){const r=T.createElement("template");return r.innerHTML=e,r}}function re(e,t,r=e,n){if(t===K)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=L(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=re(e,i._$AS(e,t.values),i,n)),t}class ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??T).importNode(t,!0);J.currentNode=n;let i=J.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new ie(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new le(i,this,e)),this._$AV.push(t),a=r[++s]}o!==a?.index&&(i=J.nextNode(),o++)}return J.currentNode=T,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),L(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Y&&L(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=te.createElement(X(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new ne(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new te(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new ie(this.k(j()),this.k(j()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class oe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(e,t=this,r,n){const i=this.strings;let o=!1;if(void 0===i)e=re(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==K,o&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=re(this,n[r+s],t,s),a===K&&(a=this._$AH[s]),o||=!L(a)||a!==this._$AH[s],a===Y?e=Y:e!==Y&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.O(e)}O(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends oe{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Y?void 0:e}}class ae extends oe{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class ce extends oe{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=re(this,e,t,0)??Y)===K)return;const r=this._$AH,n=e===Y&&r!==Y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==Y&&(r===Y||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class le{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}const ue=I.litHtmlPolyfillSupport;ue?.(te,ie),(I.litHtmlVersions??=[]).push("3.1.1");class he extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=r?.renderBefore??null;n._$litPart$=i=new ie(t.insertBefore(j(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}he._$litElement$=!0,he.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:he});const de=globalThis.litElementPolyfillSupport;de?.({LitElement:he}),(globalThis.litElementVersions??=[]).push("4.0.3")},2202:(e,t,r)=>{"use strict";r.d(t,{Ts:()=>_,Qu:()=>E});const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}const c=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:u,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:f,getPrototypeOf:g}=Object,m=globalThis,y=m.trustedTypes,w=y?y.emptyScript:"",b=m.reactiveElementPolyfillSupport,v=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?w:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!u(e,t),x={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&h(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...f(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??E)(this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$ET??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$Ej()}catch(t){throw e=!1,this._$Ej(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach((e=>this._$EO(e,this[e]))),this._$Ej()}updated(e){}firstUpdated(e){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[v("elementProperties")]=new Map,C[v("finalized")]=new Map,b?.({ReactiveElement:C}),(m.reactiveElementVersions??=[]).push("2.0.3")},8476:(e,t,r)=>{"use strict";r.d(t,{XM:()=>i,Xe:()=>o,pX:()=>n});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},9699:(e,t,r)=>{"use strict";r.d(t,{Jb:()=>C,Ld:()=>S,_$LH:()=>B});const n=globalThis,i=n.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,s="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,l=`<${c}>`,u=document,h=()=>u.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,f=e=>p(e)||"function"==typeof e?.[Symbol.iterator],g="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,w=/>/g,b=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,_=/"/g,E=/^(?:script|style|textarea|title)$/i,x=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),C=(x(1),x(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),A=new WeakMap,I=u.createTreeWalker(u,129);function k(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}const P=(e,t)=>{const r=e.length-1,n=[];let i,o=2===t?"<svg>":"",c=m;for(let t=0;t<r;t++){const r=e[t];let u,h,d=-1,p=0;for(;p<r.length&&(c.lastIndex=p,h=c.exec(r),null!==h);)p=c.lastIndex,c===m?"!--"===h[1]?c=y:void 0!==h[1]?c=w:void 0!==h[2]?(E.test(h[2])&&(i=RegExp("</"+h[2],"g")),c=b):void 0!==h[3]&&(c=b):c===b?">"===h[0]?(c=i??m,d=-1):void 0===h[1]?d=-2:(d=c.lastIndex-h[2].length,u=h[1],c=void 0===h[3]?b:'"'===h[3]?_:v):c===_||c===v?c=b:c===y||c===w?c=m:(c=b,i=void 0);const f=c===b&&e[t+1].startsWith("/>")?" ":"";o+=c===m?r+l:d>=0?(n.push(u),r.slice(0,d)+s+r.slice(d)+a+f):r+a+(-2===d?t:f)}return[k(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class O{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,l=0;const u=e.length-1,d=this.parts,[p,f]=P(e,t);if(this.el=O.createElement(p,r),I.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=I.nextNode())&&d.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(s)){const t=f[l++],r=n.getAttribute(e).split(a),i=/([.?@])?(.*)/.exec(t);d.push({type:1,index:o,name:i[2],strings:r,ctor:"."===i[1]?j:"?"===i[1]?L:"@"===i[1]?D:T}),n.removeAttribute(e)}else e.startsWith(a)&&(d.push({type:6,index:o}),n.removeAttribute(e));if(E.test(n.tagName)){const e=n.textContent.split(a),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],h()),I.nextNode(),d.push({type:2,index:++o});n.append(e[t],h())}}}else if(8===n.nodeType)if(n.data===c)d.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(a,e+1));)d.push({type:7,index:o}),e+=a.length-1}o++}}static createElement(e,t){const r=u.createElement("template");return r.innerHTML=e,r}}function R(e,t,r=e,n){if(t===C)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=d(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=R(e,i._$AS(e,t.values),i,n)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??u).importNode(t,!0);I.currentNode=n;let i=I.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new N(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new $(i,this,e)),this._$AV.push(t),a=r[++s]}o!==a?.index&&(i=I.nextNode(),o++)}return I.currentNode=u,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),d(e)?e===S||null==e||""===e?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==C&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):f(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&d(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=O.createElement(k(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new M(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new O(e)),t}T(e){p(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new N(this.k(h()),this.k(h()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,t=this,r,n){const i=this.strings;let o=!1;if(void 0===i)e=R(this,e,t,0),o=!d(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=R(this,n[r+s],t,s),a===C&&(a=this._$AH[s]),o||=!d(a)||a!==this._$AH[s],a===S?e=S:e!==S&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.O(e)}O(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends T{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===S?void 0:e}}class L extends T{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class D extends T{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=R(this,e,t,0)??S)===C)return;const r=this._$AH,n=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==S&&(r===S||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ${constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const B={j:s,P:a,A:c,C:1,M:P,L:M,R:f,V:R,D:N,I:T,H:L,N:D,U:j,B:$},U=n.litHtmlPolyfillSupport;U?.(O,N),(n.litHtmlVersions??=[]).push("3.1.1")},3160:(e,t,r)=>{"use strict";r.d(t,{E:()=>i});var n=r(6867);function i(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,n.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},605:(e,t,r)=>{"use strict";r.d(t,{z:()=>o});var n=r(3160),i=r(6867);function o(e,t){t||(t=e.reduce(((e,t)=>e+t.length),0));const r=(0,n.E)(t);let o=0;for(const t of e)r.set(t,o),o+=t.length;return(0,i.P)(r)}},2217:(e,t,r)=>{"use strict";r.d(t,{m:()=>o});var n=r(5114),i=r(6867);function o(e,t="utf8"){const r=n.Z[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.decoder.decode(`${r.prefix}${e}`):(0,i.P)(globalThis.Buffer.from(e,"utf-8"))}},7466:(e,t,r)=>{"use strict";r.d(t,{BB:()=>o.B,mL:()=>i.m,zo:()=>n.z});var n=r(605),i=r(2217),o=r(2263)},2263:(e,t,r)=>{"use strict";r.d(t,{B:()=>i});var n=r(5114);function i(e,t="utf8"){const r=n.Z[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.encoder.encode(e).substring(1):globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}},6867:(e,t,r)=>{"use strict";function n(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}r.d(t,{P:()=>n})},5114:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Ue});var n={};r.r(n),r.d(n,{identity:()=>I});var i={};r.r(i),r.d(i,{base2:()=>k});var o={};r.r(o),r.d(o,{base8:()=>P});var s={};r.r(s),r.d(s,{base10:()=>O});var a={};r.r(a),r.d(a,{base16:()=>R,base16upper:()=>M});var c={};r.r(c),r.d(c,{base32:()=>N,base32hex:()=>D,base32hexpad:()=>B,base32hexpadupper:()=>U,base32hexupper:()=>$,base32pad:()=>j,base32padupper:()=>L,base32upper:()=>T,base32z:()=>F});var l={};r.r(l),r.d(l,{base36:()=>z,base36upper:()=>W});var u={};r.r(u),r.d(u,{base58btc:()=>H,base58flickr:()=>V});var h={};r.r(h),r.d(h,{base64:()=>q,base64pad:()=>G,base64url:()=>Z,base64urlpad:()=>K});var d={};r.r(d),r.d(d,{base256emoji:()=>X});var p={};r.r(p),r.d(p,{sha256:()=>_e,sha512:()=>Ee});var f={};r.r(f),r.d(f,{identity:()=>Ce});var g={};r.r(g),r.d(g,{code:()=>Ae,decode:()=>ke,encode:()=>Ie,name:()=>Se});var m={};r.r(m),r.d(m,{code:()=>Me,decode:()=>Te,encode:()=>Ne,name:()=>Re});const y=function(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(255!==r[s])throw new TypeError(o+" is ambiguous");r[s]=i}var a=e.length,c=e.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function h(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var n=0,i=0;e[t]===c;)n++,t++;for(var o=(e.length-t)*l+1>>>0,s=new Uint8Array(o);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var h=0,d=o-1;(0!==u||h<i)&&-1!==d;d--,h++)u+=a*s[d]>>>0,s[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=h,t++}if(" "!==e[t]){for(var p=o-i;p!==o&&0===s[p];)p++;for(var f=new Uint8Array(n+(o-p)),g=n;p!==o;)f[g++]=s[p++];return f}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,o=t.length;i!==o&&0===t[i];)i++,r++;for(var s=(o-i)*u+1>>>0,l=new Uint8Array(s);i!==o;){for(var h=t[i],d=0,p=s-1;(0!==h||d<n)&&-1!==p;p--,d++)h+=256*l[p]>>>0,l[p]=h%a>>>0,h=h/a>>>0;if(0!==h)throw new Error("Non-zero carry");n=d,i++}for(var f=s-n;f!==s&&0===l[f];)f++;for(var g=c.repeat(r);f<s;++f)g+=e.charAt(l[f]);return g},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw new Error(`Non-${t} character`)}}},w=(new Uint8Array(0),e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")});class b{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class v{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return E(this,e)}}class _{constructor(e){this.decoders=e}or(e){return E(this,e)}decode(e){const t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const E=(e,t)=>new _({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class x{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new b(e,t,r),this.decoder=new v(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const C=({name:e,prefix:t,encode:r,decode:n})=>new x(e,t,r,n),S=({prefix:e,name:t,alphabet:r})=>{const{encode:n,decode:i}=y(r,t);return C({prefix:e,name:t,encode:n,decode:e=>w(i(e))})},A=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>C({prefix:t,name:e,encode:e=>((e,t,r)=>{const n="="===t[t.length-1],i=(1<<r)-1;let o="",s=0,a=0;for(let n=0;n<e.length;++n)for(a=a<<8|e[n],s+=8;s>r;)s-=r,o+=t[i&a>>s];if(s&&(o+=t[i&a<<r-s]),n)for(;o.length*r&7;)o+="=";return o})(e,n,r),decode:t=>((e,t,r,n)=>{const i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;const s=new Uint8Array(o*r/8|0);let a=0,c=0,l=0;for(let t=0;t<o;++t){const o=i[e[t]];if(void 0===o)throw new SyntaxError(`Non-${n} character`);c=c<<r|o,a+=r,a>=8&&(a-=8,s[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s})(t,n,r,e)}),I=C({prefix:"\0",name:"identity",encode:e=>{return t=e,(new TextDecoder).decode(t);var t},decode:e=>(e=>(new TextEncoder).encode(e))(e)}),k=A({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),P=A({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),O=S({prefix:"9",name:"base10",alphabet:"0123456789"}),R=A({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),M=A({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),N=A({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),T=A({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),j=A({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),L=A({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),D=A({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),$=A({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),B=A({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),U=A({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),F=A({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),z=S({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),W=S({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),H=S({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),V=S({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),q=A({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),G=A({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Z=A({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),K=A({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Y=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),Q=Y.reduce(((e,t,r)=>(e[r]=t,e)),[]),J=Y.reduce(((e,t,r)=>(e[t.codePointAt(0)]=r,e)),[]),X=C({prefix:"🚀",name:"base256emoji",encode:function(e){return e.reduce(((e,t)=>e+Q[t]),"")},decode:function(e){const t=[];for(const r of e){const e=J[r.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var ee=128,te=-128,re=Math.pow(2,31),ne=Math.pow(2,7),ie=Math.pow(2,14),oe=Math.pow(2,21),se=Math.pow(2,28),ae=Math.pow(2,35),ce=Math.pow(2,42),le=Math.pow(2,49),ue=Math.pow(2,56),he=Math.pow(2,63);const de=function e(t,r,n){r=r||[];for(var i=n=n||0;t>=re;)r[n++]=255&t|ee,t/=128;for(;t&te;)r[n++]=255&t|ee,t>>>=7;return r[n]=0|t,e.bytes=n-i+1,r},pe=function(e){return e<ne?1:e<ie?2:e<oe?3:e<se?4:e<ae?5:e<ce?6:e<le?7:e<ue?8:e<he?9:10},fe=(e,t,r=0)=>(de(e,t,r),t),ge=e=>pe(e),me=(e,t)=>{const r=t.byteLength,n=ge(e),i=n+ge(r),o=new Uint8Array(i+r);return fe(e,o,0),fe(r,o,n),o.set(t,i),new ye(e,r,t,o)};class ye{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}const we=({name:e,code:t,encode:r})=>new be(e,t,r);class be{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?me(this.code,t):t.then((e=>me(this.code,e)))}throw Error("Unknown type, must be binary type")}}const ve=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),_e=we({name:"sha2-256",code:18,encode:ve("SHA-256")}),Ee=we({name:"sha2-512",code:19,encode:ve("SHA-512")}),xe=w,Ce={code:0,name:"identity",encode:xe,digest:e=>me(0,xe(e))},Se="raw",Ae=85,Ie=e=>w(e),ke=e=>w(e),Pe=new TextEncoder,Oe=new TextDecoder,Re="json",Me=512,Ne=e=>Pe.encode(JSON.stringify(e)),Te=e=>JSON.parse(Oe.decode(e));Symbol.toStringTag,Symbol.for("nodejs.util.inspect.custom"),Symbol.for("@ipld/js-cid/CID");const je={...n,...i,...o,...s,...a,...c,...l,...u,...h,...d};var Le=r(3160);function De(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}const $e=De("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),Be=De("ascii","a",(e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t}),(e=>{e=e.substring(1);const t=(0,Le.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t})),Ue={utf8:$e,"utf-8":$e,hex:je.base16,latin1:Be,ascii:Be,binary:Be,...je}},6828:(e,t,r)=>{"use strict";r.d(t,{sj:()=>h,iH:()=>f,CO:()=>p,Ld:()=>d}),Symbol();const n=Symbol(),i=Object.getPrototypeOf,o=new WeakMap,s=(e,t=!0)=>{o.set(e,t)},a=e=>"object"==typeof e&&null!==e,c=new WeakMap,l=new WeakSet,[u]=((e=Object.is,t=((e,t)=>new Proxy(e,t)),r=(e=>a(e)&&!l.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),u=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),h=new WeakMap,d=((e,t,r=u)=>{const n=h.get(e);if((null==n?void 0:n[0])===t)return n[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return s(i,!0),h.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const n=Reflect.get(e,t),o={value:n,enumerable:!0,configurable:!0};if(l.has(n))s(n,!1);else if(n instanceof Promise)delete o.value,o.get=()=>r(n);else if(c.has(n)){const[e,t]=c.get(n);o.value=d(e,t(),r)}Object.defineProperty(i,t,o)})),Object.preventExtensions(i)}),p=new WeakMap,f=[1,1],g=(s=>{if(!a(s))throw new Error("object required");const u=p.get(s);if(u)return u;let h=f[0];const m=new Set,y=(e,t=++f[0])=>{h!==t&&(h=t,m.forEach((r=>r(e,t))))};let w=f[1];const b=e=>(t,r)=>{const n=[...t];n[1]=[e,...n[1]],y(n,r)},v=new Map,_=e=>{var t;const r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},E=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),x=t(E,{deleteProperty(e,t){const r=Reflect.get(e,t);_(t);const n=Reflect.deleteProperty(e,t);return n&&y(["delete",[t],r]),n},set(t,s,u,h){const d=Reflect.has(t,s),f=Reflect.get(t,s,h);if(d&&(e(f,u)||p.has(u)&&e(f,p.get(u))))return!0;var w;_(s),a(u)&&(u=(e=>e&&(o.has(e)?o.get(e):i(e)===Object.prototype||i(e)===Array.prototype))(w=u)&&w[n]||null||u);let E=u;if(u instanceof Promise)u.then((e=>{u.status="fulfilled",u.value=e,y(["resolve",[s],e])})).catch((e=>{u.status="rejected",u.reason=e,y(["reject",[s],e])}));else{!c.has(u)&&r(u)&&(E=g(u));const e=!l.has(E)&&c.get(E);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(m.size){const r=t[3](b(e));v.set(e,[t,r])}else v.set(e,[t])})(s,e)}return Reflect.set(t,s,E,h),y(["set",[s],u,f]),!0}});p.set(s,x);const C=[E,(e=++f[1])=>(w===e||m.size||(w=e,v.forEach((([t])=>{const r=t[1](e);r>h&&(h=r)}))),h),d,e=>(m.add(e),1===m.size&&v.forEach((([e,t],r)=>{if(t)throw new Error("remove already exists");const n=e[3](b(r));v.set(r,[e,n])})),()=>{m.delete(e),0===m.size&&v.forEach((([e,t],r)=>{t&&(t(),v.set(r,[e]))}))})];return c.set(x,C),Reflect.ownKeys(s).forEach((e=>{const t=Object.getOwnPropertyDescriptor(s,e);"value"in t&&(x[e]=s[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)})),x}))=>[g,c,l,e,t,r,u,h,d,p,f])();function h(e={}){return u(e)}function d(e,t,r){const n=c.get(e);let i;n||console.warn("Please use proxy object");const o=[],s=n[3];let a=!1;const l=s((e=>{o.push(e),r?t(o.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,a&&t(o.splice(0))})))}));return a=!0,()=>{a=!1,l()}}function p(e,t){const r=c.get(e);r||console.warn("Please use proxy object");const[n,i,o]=r;return o(n,i(),t)}function f(e){return l.add(e),e}},4503:(e,t,r)=>{"use strict";function n(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:()=>n})},84:(e,t,r)=>{"use strict";r.d(t,{R:()=>b});var n=r(4503),i=r(6693);const o="0x82ad56cb";var s=r(2027),a=r(377),c=r(5980),l=r(7210),u=r(7799),h=r(7864),d=r(2106),p=r(6445),f=r(7469),g=r(1163),m=r(4688),y=r(2357),w=r(7531);async function b(e,t){const{account:b=e.account,batch:v=Boolean(e.batch?.multicall),blockNumber:_,blockTag:E="latest",accessList:x,data:C,gas:S,gasPrice:A,maxFeePerGas:I,maxPriorityFeePerGas:k,nonce:P,to:O,value:R,...M}=t,N=b?(0,n.T)(b):void 0;try{(0,w.F)(t);const r=(_?(0,d.eC)(_):void 0)||E,n=e.chain?.formatters?.transactionRequest?.format,s=(n||m.tG)({...(0,g.K)(M,{format:n}),from:N?.address,accessList:x,data:C,gas:S,gasPrice:A,maxFeePerGas:I,maxPriorityFeePerGas:k,nonce:P,to:O,value:R});if(v&&function({request:e}){const{data:t,to:r,...n}=e;return!(!t||t.startsWith(o)||!r||Object.values(n).filter((e=>void 0!==e)).length>0)}({request:s}))try{return await async function(e,t){const{batchSize:r=1024,wait:n=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:s="latest",data:p,multicallAddress:f,to:g}=t;let m=f;if(!m){if(!e.chain)throw new a.pZ;m=(0,h.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}const w=(o?(0,d.eC)(o):void 0)||s,{schedule:b}=(0,y.S)({id:`${e.uid}.${w}`,wait:n,shouldSplitBatch(e){const t=e.reduce(((e,{data:t})=>e+(t.length-2)),0);return t>2*r},fn:async t=>{const r=t.map((e=>({allowFailure:!0,callData:e.data,target:e.to}))),n=(0,u.R)({abi:i.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:n,to:m},w]});return(0,l.k)({abi:i.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:v,success:_}]=await b({data:p,to:g});if(!_)throw new c.VQ({data:v});return"0x"===v?{data:void 0}:{data:v}}(e,{...s,blockNumber:_,blockTag:E})}catch(e){if(!(e instanceof a.pZ||e instanceof a.mm))throw e}const p=await e.request({method:"eth_call",params:r?[s,r]:[s]});return"0x"===p?{data:void 0}:{data:p}}catch(n){const i=function(e){if(!(e instanceof s.G))return;const t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(n),{offchainLookup:o,offchainLookupSignature:a}=await Promise.resolve().then(r.bind(r,9770));if(i?.slice(0,10)===a&&O)return{data:await o(e,{data:i,to:O})};throw function(e,{docsPath:t,...r}){const n=(()=>{const t=(0,f.k)(e,r);return t instanceof p.cj?e:t})();return new c.cg(n,{docsPath:t,...r})}(n,{...t,account:N,chain:e.chain})}}},6693:(e,t,r)=>{"use strict";r.d(t,{$o:()=>l,F8:()=>n,X$:()=>c,du:()=>s,k3:()=>o,nZ:()=>a});const n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],s=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],a=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],c=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],l=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},1746:(e,t,r)=>{"use strict";r.d(t,{$:()=>n,Up:()=>i,hZ:()=>o});const n={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},4192:(e,t,r)=>{"use strict";r.d(t,{Bd:()=>o,Zn:()=>i,ez:()=>n});const n={gwei:9,wei:18},i={ether:-9,wei:9},o={ether:-18,gwei:-9}},4849:(e,t,r)=>{"use strict";r.d(t,{normalize:()=>ye});var n="AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";const i=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]),o=4;function s(e){return function(e){let t=0;return()=>e[t++]}(function(e){let t=0;function r(){return e[t++]<<8|e[t++]}let n=r(),i=1,o=[0,1];for(let e=1;e<n;e++)o.push(i+=r());let s=r(),a=t;t+=s;let c=0,l=0;function u(){return 0==c&&(l=l<<8|e[t++],c=8),l>>--c&1}const h=2**31,d=h>>>1,p=h-1;let f=0;for(let e=0;e<31;e++)f=f<<1|u();let g=[],m=0,y=h;for(;;){let e=Math.floor(((f-m+1)*i-1)/y),t=0,r=n;for(;r-t>1;){let n=t+r>>>1;e<o[n]?r=n:t=n}if(0==t)break;g.push(t);let s=m+Math.floor(y*o[t]/i),a=m+Math.floor(y*o[t+1]/i)-1;for(;0==((s^a)&d);)f=f<<1&p|u(),s=s<<1&p,a=a<<1&p|1;for(;s&~a&536870912;)f=f&d|f<<1&p>>>1|u(),s=s<<1^d,a=(a^d)<<1|d|1;m=s,y=1+a-s}let w=n-4;return g.map((t=>{switch(t-w){case 3:return w+65792+(e[a++]<<16|e[a++]<<8|e[a++]);case 2:return w+256+(e[a++]<<8|e[a++]);case 1:return w+e[a++];default:return t-1}}))}(function(e){let t=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach(((e,r)=>t[e.charCodeAt(0)]=r));let r=e.length,n=new Uint8Array(6*r>>3);for(let i=0,o=0,s=0,a=0;i<r;i++)a=a<<6|t[e.charCodeAt(i)],s+=6,s>=8&&(n[o++]=a>>(s-=8));return n}(e)))}function a(e){return 1&e?~e>>1:e>>1}function c(e,t){let r=Array(e);for(let n=0,i=0;n<e;n++)r[n]=i+=a(t());return r}function l(e,t=0){let r=[];for(;;){let n=e(),i=e();if(!i)break;t+=n;for(let e=0;e<i;e++)r.push(t+e);t+=i+1}return r}function u(e){return d((()=>{let t=l(e);if(t.length)return t}))}function h(e){let t=[];for(;;){let r=e();if(0==r)break;t.push(f(r,e))}for(;;){let r=e()-1;if(r<0)break;t.push(g(r,e))}return t.flat()}function d(e){let t=[];for(;;){let r=e(t.length);if(!r)break;t.push(r)}return t}function p(e,t,r){let n=Array(e).fill().map((()=>[]));for(let i=0;i<t;i++)c(e,r).forEach(((e,t)=>n[t].push(e)));return n}function f(e,t){let r=1+t(),n=t(),i=d(t);return p(i.length,1+e,t).flatMap(((e,t)=>{let[o,...s]=e;return Array(i[t]).fill().map(((e,t)=>{let i=t*n;return[o+t*r,s.map((e=>e+i))]}))}))}function g(e,t){return p(1+t(),1+e,t).map((e=>[e[0],e.slice(1)]))}function m(e){return`{${function(e){return e.toString(16).toUpperCase().padStart(2,"0")}(e)}}`}function y(e){let t=e.length;if(t<4096)return String.fromCodePoint(...e);let r=[];for(let n=0;n<t;)r.push(String.fromCodePoint(...e.slice(n,n+=4096)));return r.join("")}function w(e,t){let r=e.length,n=r-t.length;for(let i=0;0==n&&i<r;i++)n=e[i]-t[i];return n}var b="AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";const v=44032,_=4352,E=4449,x=4519,C=28,S=21*C,A=v+19*S,I=_+19,k=E+21,P=x+C;function O(e){return e>>24&255}function R(e){return 16777215&e}let M,N,T,j;function L(e){return e>=v&&e<A}function D(e,t){if(e>=_&&e<I&&t>=E&&t<k)return v+(e-_)*S+(t-E)*C;if(L(e)&&t>x&&t<P&&(e-v)%C==0)return e+(t-x);{let r=j.get(e);return r&&(r=r.get(t),r)?r:-1}}function $(e){M||function(){let e=s(b);M=new Map(u(e).flatMap(((e,t)=>e.map((e=>[e,t+1<<24]))))),N=new Set(l(e)),T=new Map,j=new Map;for(let[t,r]of h(e)){if(!N.has(t)&&2==r.length){let[e,n]=r,i=j.get(e);i||(i=new Map,j.set(e,i)),i.set(n,t)}T.set(t,r.reverse())}}();let t=[],r=[],n=!1;function i(e){let r=M.get(e);r&&(n=!0,e|=r),t.push(e)}for(let n of e)for(;;){if(n<128)t.push(n);else if(L(n)){let e=n-v,t=e%S/C|0,r=e%C;i(_+(e/S|0)),i(E+t),r>0&&i(x+r)}else{let e=T.get(n);e?r.push(...e):i(n)}if(!r.length)break;n=r.pop()}if(n&&t.length>1){let e=O(t[0]);for(let r=1;r<t.length;r++){let n=O(t[r]);if(0==n||e<=n){e=n;continue}let i=r-1;for(;;){let r=t[i+1];if(t[i+1]=t[i],t[i]=r,!i)break;if(e=O(t[--i]),e<=n)break}e=O(t[r])}}return t}function B(e){return $(e).map(R)}function U(e){return function(e){let t=[],r=[],n=-1,i=0;for(let o of e){let e=O(o),s=R(o);if(-1==n)0==e?n=s:t.push(s);else if(i>0&&i>=e)0==e?(t.push(n,...r),r.length=0,n=s):r.push(s),i=e;else{let o=D(n,s);o>=0?n=o:0==i&&0==e?(t.push(n),n=s):(r.push(s),i=e)}}return n>=0&&t.push(n,...r),t}($(e))}const F=45,z=".",W=65039,H=1,V=e=>Array.from(e);function q(e,t){return e.P.has(t)||e.Q.has(t)}class G extends Array{get is_emoji(){return!0}}let Z,K,Y,Q,J,X,ee,te,re,ne,ie,oe;function se(){if(Z)return;let e=s(n);const t=()=>l(e),r=()=>new Set(t());Z=new Map(h(e)),K=r(),Y=t(),Q=new Set(t().map((e=>Y[e]))),Y=new Set(Y),J=r(),X=r();let i=u(e),o=e();const a=()=>new Set(t().flatMap((e=>i[e])).concat(t()));ee=d((t=>{let r=d(e).map((e=>e+96));if(r.length){let n=t>=o;return r[0]-=32,r=y(r),n&&(r=`Restricted[${r}]`),{N:r,P:a(),Q:a(),M:!e(),R:n}}})),te=r(),re=new Map;let c=t().concat(V(te)).sort(((e,t)=>e-t));c.forEach(((t,r)=>{let n=e(),i=c[r]=n?c[r-n]:{V:[],M:new Map};i.V.push(t),te.has(t)||re.set(t,i)}));for(let{V:e,M:t}of new Set(re.values())){let r=[];for(let t of e){let e=ee.filter((e=>q(e,t))),n=r.find((({G:t})=>e.some((e=>t.has(e)))));n||(n={G:new Set,V:[]},r.push(n)),n.V.push(t),e.forEach((e=>n.G.add(e)))}let n=r.flatMap((e=>V(e.G)));for(let{G:e,V:i}of r){let r=new Set(n.filter((t=>!e.has(t))));for(let e of i)t.set(e,r)}}let p=new Set,f=new Set;const g=e=>p.has(e)?f.add(e):p.add(e);for(let e of ee){for(let t of e.P)g(t);for(let t of e.Q)g(t)}for(let e of p)re.has(e)||f.has(e)||re.set(e,H);ne=new Set(V(p).concat(V(B(p)))),ie=function(e){let t=[],r=l(e);return function e({S:r,B:n},i,o){if(!(4&r&&o===i[i.length-1])){2&r&&(o=i[i.length-1]),1&r&&t.push(i);for(let t of n)for(let r of t.Q)e(t,[...i,r],o)}}(function t(n){return{S:e(),B:d((()=>{let n=l(e).map((e=>r[e]));if(n.length)return t(n)})),Q:n}}([]),[]),t}(e).map((e=>G.from(e))).sort(w),oe=new Map;for(let e of ie){let t=[oe];for(let r of e){let e=t.map((e=>{let t=e.get(r);return t||(t=new Map,e.set(r,t)),t}));r===W?t.push(...e):t=e}for(let r of t)r.V=e}}function ae(e){return(ue(e)?"":`${ce(le([e]))} `)+m(e)}function ce(e){return`"${e}"‎`}function le(e,t=m){let r=[];var n;n=e[0],se(),Y.has(n)&&r.push("◌");let i=0,o=e.length;for(let n=0;n<o;n++){let o=e[n];ue(o)&&(r.push(y(e.slice(i,n))),r.push(t(o)),i=n+1)}return r.push(y(e.slice(i,o))),r.join("")}function ue(e){return se(),J.has(e)}function he(e,t,r){if(!e)return[];se();let n=0;return e.split(z).map((e=>{let s=function(e){let t=[];for(let r=0,n=e.length;r<n;){let n=e.codePointAt(r);r+=n<65536?1:2,t.push(n)}return t}(e),a={input:s,offset:n};n+=s.length+1;try{let e,n=a.tokens=function(e,t,r){let n=[],i=[];for(e=e.slice().reverse();e.length;){let o=me(e);if(o)i.length&&(n.push(t(i)),i=[]),n.push(r(o));else{let t=e.pop();if(ne.has(t))i.push(t);else{let e=Z.get(t);if(e)i.push(...e);else if(!K.has(t))throw de(t)}}}return i.length&&n.push(t(i)),n}(s,t,r),c=n.length;if(!c)throw new Error("empty label");let l=a.output=n.flat();if(function(e){for(let t=e.lastIndexOf(95);t>0;)if(95!==e[--t])throw new Error("underscore allowed only at start")}(l),!(a.emoji=c>1||n[0].is_emoji)&&l.every((e=>e<128)))!function(e){if(e.length>=4&&e[2]==F&&e[3]==F)throw new Error(`invalid label extension: "${y(e.slice(0,4))}"`)}(l),e="ASCII";else{let t=n.flatMap((e=>e.is_emoji?[]:e));if(t.length){if(Y.has(l[0]))throw fe("leading combining mark");for(let e=1;e<c;e++){let t=n[e];if(!t.is_emoji&&Y.has(t[0]))throw fe(`emoji + combining mark: "${y(n[e-1])} + ${le([t[0]])}"`)}!function(e){let t=e[0],r=i.get(t);if(r)throw fe(`leading ${r}`);let n=e.length,o=-1;for(let s=1;s<n;s++){t=e[s];let n=i.get(t);if(n){if(o==s)throw fe(`${r} + ${n}`);o=s+1,r=n}}if(o==n)throw fe(`trailing ${r}`)}(l);let r=V(new Set(t)),[s]=function(e){let t=ee;for(let r of e){let e=t.filter((e=>q(e,r)));if(!e.length)throw ee.some((e=>q(e,r)))?pe(t[0],r):de(r);if(t=e,1==e.length)break}return t}(r);!function(e,t){for(let r of t)if(!q(e,r))throw pe(e,r);if(e.M){let e=B(t);for(let t=1,r=e.length;t<r;t++)if(Q.has(e[t])){let n=t+1;for(let i;n<r&&Q.has(i=e[n]);n++)for(let r=t;r<n;r++)if(e[r]==i)throw new Error(`duplicate non-spacing marks: ${ae(i)}`);if(n-t>o)throw new Error(`excessive non-spacing marks: ${ce(le(e.slice(t-1,n)))} (${n-t}/${o})`);t=n}}}(s,t),function(e,t){let r,n=[];for(let e of t){let t=re.get(e);if(t===H)return;if(t){let n=t.M.get(e);if(r=r?r.filter((e=>n.has(e))):V(n),!r.length)return}else n.push(e)}if(r)for(let t of r)if(n.every((e=>q(t,e))))throw new Error(`whole-script confusable: ${e.N}/${t.N}`)}(s,r),e=s.N}else e="Emoji"}a.type=e}catch(e){a.error=e}return a}))}function de(e){return new Error(`disallowed character: ${ae(e)}`)}function pe(e,t){let r=ae(t),n=ee.find((e=>e.P.has(t)));return n&&(r=`${n.N} ${r}`),new Error(`illegal mixture: ${e.N} + ${r}`)}function fe(e){return new Error(`illegal placement: ${e}`)}function ge(e){return e.filter((e=>e!=W))}function me(e,t){let r,n=oe,i=e.length;for(;i&&(n=n.get(e[--i]),n);){let{V:o}=n;o&&(r=o,t&&t.push(...e.slice(i).reverse()),e.length=i)}return r}function ye(e){return function(e){return function(e){return e.map((({input:t,error:r,output:n})=>{if(r){let n=r.message;throw new Error(1==e.length?n:`Invalid label ${ce(le(t))}: ${n}`)}return y(n)})).join(z)}(he(e,U,ge))}(e)}},7412:(e,t,r)=>{"use strict";r.d(t,{CI:()=>C,FM:()=>f,Gy:()=>E,KY:()=>v,M4:()=>h,MX:()=>w,S4:()=>b,SM:()=>_,cO:()=>a,dh:()=>x,fM:()=>s,fs:()=>d,gr:()=>u,hn:()=>S,lC:()=>g,mv:()=>m,wM:()=>A,wb:()=>l,xB:()=>c,xL:()=>y,yP:()=>p});var n=r(522),i=r(9135),o=r(2027);class s extends o.G{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class a extends o.G{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class c extends o.G{constructor({data:e,params:t,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${(0,n.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class l extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class h extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class d extends o.G{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class p extends o.G{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class f extends o.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends o.G{constructor(e,{docsPath:t}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class m extends o.G{constructor(e,{docsPath:t}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class y extends o.G{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class w extends o.G{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class b extends o.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,n.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,n.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class v extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class _ extends o.G{constructor({abiItem:e,data:t,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join("\n"),{metaMessages:[`Params: (${(0,n.h)(r,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=i}}class E extends o.G{constructor({abiItem:e,param:t}){super([`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,n.t)(e,{includeName:!0})}".`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class x extends o.G{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class C extends o.G{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class S extends o.G{constructor(e){super([`Value "${e}" is not a valid array.`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class A extends o.G{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},6087:(e,t,r)=>{"use strict";r.d(t,{b:()=>i});var n=r(2027);class i extends n.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},2027:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});var n=r(9008);class i extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,n.bo)()});const r=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return o(this,e)}}function o(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?o(e.cause,t):t?null:e}},377:(e,t,r)=>{"use strict";r.d(t,{Bk:()=>s,Yl:()=>o,hJ:()=>c,mm:()=>i,pZ:()=>a});var n=r(2027);class i extends n.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends n.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class s extends n.G{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class a extends n.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}class c extends n.G{constructor({chainId:e}){super(`Chain ID "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}},5980:(e,t,r)=>{"use strict";r.d(t,{cg:()=>m,uq:()=>y,Lu:()=>w,Dk:()=>b,VQ:()=>v});var n=r(4503),i=r(1746),o=r(6899),s=r(522),a=r(6070);function c({abiItem:e,args:t,includeFunctionName:r=!0,includeName:n=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map(((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,a.P)(t[r]):t[r]}`)).join(", ")})`}var l=r(840),u=r(9625),h=r(7795),d=r(7412),p=r(2027),f=r(3639),g=r(9008);class m extends p.G{constructor(e,{account:t,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:g}){const m=t?(0,n.T)(t):void 0,y=(0,f.xr)({from:m?.address,to:p,value:void 0!==g&&`${(0,u.d)(g)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:s,gasPrice:void 0!==a&&`${(0,h.o)(a)} gwei`,maxFeePerGas:void 0!==c&&`${(0,h.o)(c)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${(0,h.o)(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class y extends p.G{constructor(e,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:a}){const u=(0,l.mE)({abi:t,args:r,name:o}),h=u?c({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,d=u?(0,s.t)(u,{includeName:!0}):void 0,p=(0,f.xr)({address:n&&(0,g.CR)(n),function:d,args:h&&"()"!==h&&`${[...Array(o?.length??0).keys()].map((()=>" ")).join("")}${h}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=n,this.functionName=o,this.sender=a}}class w extends p.G{constructor({abi:e,data:t,functionName:r,message:n}){let a,l,u,h,p;if(t&&"0x"!==t)try{l=(0,o.p)({abi:e,data:t});const{abiItem:r,errorName:n,args:a}=l;if("Error"===n)h=a[0];else if("Panic"===n){const[e]=a;h=i.$[e]}else{const e=r?(0,s.t)(r,{includeName:!0}):void 0,t=r&&a?c({abiItem:r,args:a,includeFunctionName:!1,includeName:!1}):void 0;u=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(n?.length??0).keys()].map((()=>" ")).join("")}${t}`:""]}}catch(e){a=e}else n&&(h=n);a instanceof d.yP&&(p=a.signature,u=[`Unable to decode signature "${p}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`]),super(h&&"execution reverted"!==h||p?[`The contract function "${r}" reverted with the following ${p?"signature":"reason"}:`,h||p].join("\n"):`The contract function "${r}" reverted.`,{cause:a,metaMessages:u}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=l,this.reason=h,this.signature=p}}class b extends p.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends p.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},9760:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,m:()=>i});var n=r(2027);class i extends n.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends n.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},7788:(e,t,r)=>{"use strict";r.d(t,{Cd:()=>o,J5:()=>i,M6:()=>s});var n=r(2027);class i extends n.G{constructor({max:e,min:t,signed:r,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends n.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class s extends n.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},6445:(e,t,r)=>{"use strict";r.d(t,{C_:()=>h,G$:()=>a,Hh:()=>s,M_:()=>o,WF:()=>d,ZI:()=>c,cj:()=>m,cs:()=>g,dR:()=>p,pZ:()=>f,se:()=>u,vU:()=>l});var n=r(7795),i=r(2027);class o extends i.G{constructor({cause:e,message:t}={}){const r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class s extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class a extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class c extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class l extends i.G{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class h extends i.G{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class d extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends i.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends i.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.o)(r)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends i.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},8863:(e,t,r)=>{"use strict";r.d(t,{Gg:()=>s,W5:()=>l,bs:()=>c,c9:()=>a});var n=r(6070),i=r(2027),o=r(9008);class s extends i.G{constructor({body:e,details:t,headers:r,status:i,url:s}){super("HTTP request failed.",{details:t,metaMessages:[i&&`Status: ${i}`,`URL: ${(0,o.Gr)(s)}`,e&&`Request body: ${(0,n.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=s}}class a extends i.G{constructor({body:e,details:t,url:r}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class c extends i.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class l extends i.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},3639:(e,t,r)=>{"use strict";r.d(t,{Bh:()=>d,JC:()=>u,Yb:()=>p,j3:()=>l,mc:()=>f,mk:()=>h,vl:()=>c,xY:()=>a,xr:()=>s});var n=r(9625),i=r(7795),o=r(2027);function s(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),r=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`)).join("\n")}class a extends o.G{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class c extends o.G{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",s(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class u extends o.G{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}class h extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:p,value:f}){const g=s({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:p,value:void 0!==f&&`${(0,n.d)(f)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:a,gas:c,gasPrice:void 0!==l&&`${(0,i.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,i.o)(h)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class d extends o.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:n,index:i}){let o="Transaction";r&&void 0!==i&&(o=`Transaction at block time "${r}" at index "${i}"`),e&&void 0!==i&&(o=`Transaction at block hash "${e}" at index "${i}"`),t&&void 0!==i&&(o=`Transaction at block number "${t}" at index "${i}"`),n&&(o=`Transaction with hash "${n}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class p extends o.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class f extends o.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},9008:(e,t,r)=>{"use strict";r.d(t,{CR:()=>i,Gr:()=>o,bo:()=>s});var n=r(1242);const i=e=>e,o=e=>e,s=()=>`viem@${n.i}`},1242:(e,t,r)=>{"use strict";r.d(t,{i:()=>n});const n="1.21.3"},4450:(e,t,r)=>{"use strict";r.d(t,{r:()=>u});var n=r(7412),i=r(5775),o=r(9135),s=r(3972),a=r(1836),c=r(5946),l=r(5444);function u(e,t){if("0x"===t&&e.length>0)throw new n.wb;if((0,o.d)(t)&&(0,o.d)(t)<32)throw new n.xB({data:t,params:e,size:(0,o.d)(t)});return function({data:e,params:t}){const r=[];let i=0;for(let s=0;s<t.length;s++){if(i>=(0,o.d)(e))throw new n.xB({data:e,params:t,size:(0,o.d)(e)});const a=t[s],{consumed:c,value:l}=h({data:e,param:a,position:i});r.push(l),i+=c}return r}({data:t,params:e})}function h({data:e,param:t,position:r}){const o=(0,l.S)(t.type);if(o){const[n,i]=o;return function(e,{param:t,length:r,position:n}){if(!r){const r=(0,c.ly)((0,s.tP)(e,n,n+32,{strict:!0})),i=(0,c.ly)((0,s.tP)(e,r,r+32,{strict:!0}));let o=0;const a=[];for(let n=0;n<i;++n){const n=h({data:(0,s.tP)(e,r+32),param:t,position:o});o+=n.consumed,a.push(n.value)}return{value:a,consumed:32}}if(d(t)){const i=(0,l.S)(t.type),o=!i?.[0];let a=0;const u=[];for(let i=0;i<r;++i){const r=(0,c.ly)((0,s.tP)(e,n,n+32,{strict:!0})),l=h({data:(0,s.tP)(e,r),param:t,position:o?a:32*i});a+=l.consumed,u.push(l.value)}return{value:u,consumed:32}}let i=0;const o=[];for(let s=0;s<r;++s){const r=h({data:e,param:t,position:n+i});i+=r.consumed,o.push(r.value)}return{value:o,consumed:i}}(e,{length:n,param:{...t,type:i},position:r})}if("tuple"===t.type)return function(e,{param:t,position:r}){const n=0===t.components.length||t.components.some((({name:e})=>!e)),i=n?[]:{};let o=0;if(d(t)){const a=(0,c.ly)((0,s.tP)(e,r,r+32,{strict:!0}));for(let r=0;r<t.components.length;++r){const c=t.components[r],l=h({data:(0,s.tP)(e,a),param:c,position:o});o+=l.consumed,i[n?r:c?.name]=l.value}return{consumed:32,value:i}}for(let s=0;s<t.components.length;++s){const a=t.components[s],c=h({data:e,param:a,position:r+o});o+=c.consumed,i[n?s:a?.name]=c.value}return{consumed:o,value:i}}(e,{param:t,position:r});if("string"===t.type)return function(e,{position:t}){const r=(0,c.ly)((0,s.tP)(e,t,t+32,{strict:!0})),n=(0,c.ly)((0,s.tP)(e,r,r+32,{strict:!0}));if(0===n)return{consumed:32,value:""};return{consumed:32,value:(0,c.rR)((0,a.f)((0,s.tP)(e,r+32,r+32+n,{strict:!0})))}}(e,{position:r});if(t.type.startsWith("bytes"))return function(e,{param:t,position:r}){const[n,i]=t.type.split("bytes");if(!i){const t=(0,c.ly)((0,s.tP)(e,r,r+32,{strict:!0})),n=(0,c.ly)((0,s.tP)(e,t,t+32,{strict:!0}));return 0===n?{consumed:32,value:"0x"}:{consumed:32,value:(0,s.tP)(e,t+32,t+32+n,{strict:!0})}}return{consumed:32,value:(0,s.tP)(e,r,r+parseInt(i),{strict:!0})}}(e,{param:t,position:r});const u=(0,s.tP)(e,r,r+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{param:t}){const r=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?(0,c.y_)(e,{signed:r}):(0,c.ly)(e,{signed:r})}}(u,{param:t});if("address"===t.type)return function(e){return{consumed:32,value:(0,i.x)((0,s.tP)(e,-20))}}(u);if("bool"===t.type)return function(e){return{consumed:32,value:(0,c.XA)(e)}}(u);throw new n.CI(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function d(e){const{type:t}=e;if("string"===t)return!0;if("bytes"===t)return!0;if(t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(d);const r=(0,l.S)(e.type);return!(!r||!d({...e,type:r[1]}))}},6899:(e,t,r)=>{"use strict";r.d(t,{p:()=>l});var n=r(1746),i=r(7412),o=r(3972),s=r(552),a=r(4450),c=r(522);function l({abi:e,data:t}){const r=(0,o.tP)(t,0,4);if("0x"===r)throw new i.wb;const l=[...e||[],n.Up,n.hZ].find((e=>"error"===e.type&&r===(0,s.o)((0,c.t)(e))));if(!l)throw new i.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:l,args:"inputs"in l&&l.inputs&&l.inputs.length>0?(0,a.r)(l.inputs,(0,o.tP)(t,4)):void 0,errorName:l.name}}},7210:(e,t,r)=>{"use strict";r.d(t,{k:()=>a});var n=r(7412),i=r(4450),o=r(840);const s="/docs/contract/decodeFunctionResult";function a({abi:e,args:t,functionName:r,data:a}){let c=e[0];if(r&&(c=(0,o.mE)({abi:e,args:t,name:r}),!c))throw new n.xL(r,{docsPath:s});if("function"!==c.type)throw new n.xL(void 0,{docsPath:s});if(!c.outputs)throw new n.MX(c.name,{docsPath:s});const l=(0,i.r)(c.outputs,a);return l&&l.length>1?l:l&&1===l.length?l[0]:void 0}},5444:(e,t,r)=>{"use strict";r.d(t,{E:()=>h,S:()=>f});var n=r(7412),i=r(6087),o=r(9321),s=r(7040),a=r(1769),c=r(9135),l=r(3972),u=r(2106);function h(e,t){if(e.length!==t.length)throw new n.fs({expectedLength:e.length,givenLength:t.length});const r=function({params:e,values:t}){const r=[];for(let n=0;n<e.length;n++)r.push(d({param:e[n],value:t[n]}));return r}({params:e,values:t}),i=p(r);return 0===i.length?"0x":i}function d({param:e,value:t}){const r=f(e.type);if(r){const[i,o]=r;return function(e,{length:t,param:r}){const i=null===t;if(!Array.isArray(e))throw new n.hn(e);if(!i&&e.length!==t)throw new n.gr({expectedLength:t,givenLength:e.length,type:`${r.type}[${t}]`});let o=!1;const a=[];for(let t=0;t<e.length;t++){const n=d({param:r,value:e[t]});n.dynamic&&(o=!0),a.push(n)}if(i||o){const e=p(a);if(i){const t=(0,u.eC)(a.length,{size:32});return{dynamic:!0,encoded:a.length>0?(0,s.zo)([t,e]):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,s.zo)(a.map((({encoded:e})=>e)))}}(t,{length:i,param:{...e,type:o}})}if("tuple"===e.type)return function(e,{param:t}){let r=!1;const n=[];for(let i=0;i<t.components.length;i++){const o=t.components[i],s=d({param:o,value:e[Array.isArray(e)?i:o.name]});n.push(s),s.dynamic&&(r=!0)}return{dynamic:r,encoded:r?p(n):(0,s.zo)(n.map((({encoded:e})=>e)))}}(t,{param:e});if("address"===e.type)return function(e){if(!(0,o.U)(e))throw new i.b({address:e});return{dynamic:!1,encoded:(0,a.gc)(e.toLowerCase())}}(t);if("bool"===e.type)return function(e){return{dynamic:!1,encoded:(0,a.gc)((0,u.C4)(e))}}(t);if(e.type.startsWith("uint")||e.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(t,{signed:e.type.startsWith("int")});if(e.type.startsWith("bytes"))return function(e,{param:t}){const[,r]=t.type.split("bytes"),i=(0,c.d)(e);if(!r){let t=e;return i%32!=0&&(t=(0,a.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,s.zo)([(0,a.gc)((0,u.eC)(i,{size:32})),t])}}if(i!==parseInt(r))throw new n.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,a.gc)(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){const t=(0,u.$G)(e),r=Math.ceil((0,c.d)(t)/32),n=[];for(let e=0;e<r;e++)n.push((0,a.gc)((0,l.tP)(t,32*e,32*(e+1)),{dir:"right"}));return{dynamic:!0,encoded:(0,s.zo)([(0,a.gc)((0,u.eC)((0,c.d)(t),{size:32})),...n])}}(t);throw new n.dh(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function p(e){let t=0;for(let r=0;r<e.length;r++){const{dynamic:n,encoded:i}=e[r];t+=n?32:(0,c.d)(i)}const r=[],n=[];let i=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?(r.push((0,u.eC)(t+i,{size:32})),n.push(a),i+=(0,c.d)(a)):r.push(a)}return(0,s.zo)([...r,...n])}function f(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},7799:(e,t,r)=>{"use strict";r.d(t,{R:()=>l});var n=r(7412),i=r(7040),o=r(552),s=r(5444),a=r(522),c=r(840);function l({abi:e,args:t,functionName:r}){let l=e[0];if(r&&(l=(0,c.mE)({abi:e,args:t,name:r}),!l))throw new n.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==l.type)throw new n.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const u=(0,a.t)(l),h=(0,o.o)(u),d="inputs"in l&&l.inputs?(0,s.E)(l.inputs,t??[]):void 0;return(0,i.SM)([h,d??"0x"])}},522:(e,t,r)=>{"use strict";r.d(t,{h:()=>o,t:()=>i});var n=r(7412);function i(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new n.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map((e=>function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}(e,{includeName:t}))).join(t?", ":","):""}},840:(e,t,r)=>{"use strict";r.d(t,{mE:()=>c});var n=r(7412),i=r(5102),o=r(4092),s=r(552),a=r(9321);function c({abi:e,args:t=[],name:r}){const a=(0,i.v)(r,{strict:!1}),c=e.filter((e=>a?"function"===e.type?(0,s.o)(e)===r:"event"===e.type&&(0,o.e)(e)===r:"name"in e&&e.name===r));if(0===c.length)return;if(1===c.length)return c[0];let h;for(const e of c)if("inputs"in e)if(t&&0!==t.length){if(e.inputs&&0!==e.inputs.length&&e.inputs.length===t.length&&t.every(((t,r)=>{const n="inputs"in e&&e.inputs[r];return!!n&&l(t,n)}))){if(h&&"inputs"in h&&h.inputs){const r=u(e.inputs,h.inputs,t);if(r)throw new n.S4({abiItem:e,type:r[0]},{abiItem:h,type:r[1]})}h=e}}else if(!e.inputs||0===e.inputs.length)return e;return h||c[0]}function l(e,t){const r=typeof e,n=t.type;switch(n){case"address":return(0,a.U)(e);case"bool":return"boolean"===r;case"function":case"string":return"string"===r;default:return"tuple"===n&&"components"in t?Object.values(t.components).every(((t,r)=>l(Object.values(e)[r],t))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?"number"===r||"bigint"===r:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?"string"===r||e instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)&&Array.isArray(e)&&e.every((e=>l(e,{...t,type:n.replace(/(\[[0-9]{0,}\])$/,"")})))}}function u(e,t,r){for(const n in e){const i=e[n],o=t[n];if("tuple"===i.type&&"tuple"===o.type&&"components"in i&&"components"in o)return u(i.components,o.components,r[n]);const s=[i.type,o.type];if(s.includes("address")&&s.includes("bytes20")||(s.includes("address")&&s.includes("string")||s.includes("address")&&s.includes("bytes"))&&(0,a.U)(r[n]))return s}}},5775:(e,t,r)=>{"use strict";r.d(t,{K:()=>c,x:()=>a});var n=r(6087),i=r(1187),o=r(3199),s=r(9321);function a(e,t){const r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),n=(0,o.w)((0,i.qX)(r),"bytes"),s=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&s[e]&&(s[e]=s[e].toUpperCase()),(15&n[e>>1])>=8&&s[e+1]&&(s[e+1]=s[e+1].toUpperCase());return`0x${s.join("")}`}function c(e,t){if(!(0,s.U)(e))throw new n.b({address:e});return a(e,t)}},9321:(e,t,r)=>{"use strict";r.d(t,{U:()=>i});const n=/^0x[a-fA-F0-9]{40}$/;function i(e){return n.test(e)}},9770:(e,t,r)=>{"use strict";r.d(t,{offchainLookup:()=>b,offchainLookupSignature:()=>y});var n=r(84),i=r(6070),o=r(2027),s=r(9008);class a extends o.G{constructor({callbackSelector:e,cause:t,data:r,extraData:n,sender:i,urls:o}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map((e=>`    ${(0,s.Gr)(e)}`))],`  Sender: ${i}`,`  Data: ${r}`,`  Callback selector: ${e}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class c extends o.G{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,s.Gr)(t)}`,`Response: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class l extends o.G{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=r(8863),h=r(6899),d=r(5444),p=r(6087),f=r(9321),g=r(7040),m=r(5102);const y="0x556f1830",w={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function b(e,{blockNumber:t,blockTag:r,data:o,to:s}){const{args:y}=(0,h.p)({data:o,abi:[w]}),[b,v,_,E,x]=y;try{if(!function(e,t){if(!(0,f.U)(e))throw new p.b({address:e});if(!(0,f.U)(t))throw new p.b({address:t});return e.toLowerCase()===t.toLowerCase()}(s,b))throw new l({sender:b,to:s});const o=await async function({data:e,sender:t,urls:r}){let n=new Error("An unknown error occurred.");for(let o=0;o<r.length;o++){const s=r[o],a=s.includes("{data}")?"GET":"POST",l="POST"===a?{data:e,sender:t}:void 0;try{const r=await fetch(s.replace("{sender}",t).replace("{data}",e),{body:JSON.stringify(l),method:a});let o;if(o=r.headers.get("Content-Type")?.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){n=new u.Gg({body:l,details:o?.error?(0,i.P)(o.error):r.statusText,headers:r.headers,status:r.status,url:s});continue}if(!(0,m.v)(o)){n=new c({result:o,url:s});continue}return o}catch(e){n=new u.Gg({body:l,details:e.message,url:s})}}throw n}({data:_,sender:b,urls:v}),{data:a}=await(0,n.R)(e,{blockNumber:t,blockTag:r,data:(0,g.zo)([E,(0,d.E)([{type:"bytes"},{type:"bytes"}],[o,x])]),to:s});return a}catch(e){throw new a({callbackSelector:E,cause:e,data:o,extraData:x,sender:b,urls:v})}}},7864:(e,t,r)=>{"use strict";r.d(t,{L:()=>i});var n=r(377);function i({blockNumber:e,chain:t,contract:r}){const i=t?.contracts?.[r];if(!i)throw new n.mm({chain:t,contract:{name:r}});if(e&&i.blockCreated&&i.blockCreated>e)throw new n.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:i.blockCreated}});return i.address}},7040:(e,t,r)=>{"use strict";function n(e){return"string"==typeof e[0]?i(e):function(e){let t=0;for(const r of e)t+=r.length;const r=new Uint8Array(t);let n=0;for(const t of e)r.set(t,n),n+=t.length;return r}(e)}function i(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}r.d(t,{SM:()=>i,zo:()=>n})},5102:(e,t,r)=>{"use strict";function n(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:()=>n})},1769:(e,t,r)=>{"use strict";r.d(t,{gc:()=>o,vk:()=>i});var n=r(9760);function i(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new n.$({size:e.length,targetSize:r,type:"bytes"});const i=new Uint8Array(r);for(let n=0;n<r;n++){const o="right"===t;i[o?n:r-n-1]=e[o?n:e.length-n-1]}return i}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;const i=e.replace("0x","");if(i.length>2*r)throw new n.$({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*r,"0")}`}},9135:(e,t,r)=>{"use strict";r.d(t,{d:()=>i});var n=r(5102);function i(e){return(0,n.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:(e,t,r)=>{"use strict";r.d(t,{tP:()=>s});var n=r(9760),i=r(5102),o=r(9135);function s(e,t,r,{strict:n}={}){return(0,i.v)(e,{strict:!1})?function(e,t,r,{strict:n}={}){a(e,t);const i=`0x${e.replace("0x","").slice(2*(t??0),2*(r??e.length))}`;return n&&c(i,t,r),i}(e,t,r,{strict:n}):function(e,t,r,{strict:n}={}){a(e,t);const i=e.slice(t,r);return n&&c(i,t,r),i}(e,t,r,{strict:n})}function a(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new n.m({offset:t,position:"start",size:(0,o.d)(e)})}function c(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new n.m({offset:r,position:"end",size:(0,o.d)(e)})}},1836:(e,t,r)=>{"use strict";function n(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)n++;return r="left"===t?r.slice(n):r.slice(0,r.length-n),"string"==typeof e?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:()=>n})},5946:(e,t,r)=>{"use strict";r.d(t,{XA:()=>l,Yf:()=>a,ly:()=>u,rR:()=>h,y_:()=>c});var n=r(7788),i=r(9135),o=r(1836),s=r(1187);function a(e,{size:t}){if((0,i.d)(e)>t)throw new n.M6({givenSize:(0,i.d)(e),maxSize:t})}function c(e,t={}){const{signed:r}=t;t.size&&a(e,{size:t.size});const n=BigInt(e);if(!r)return n;const i=(e.length-2)/2;return n<=(1n<<8n*BigInt(i)-1n)-1n?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function l(e,t={}){let r=e;if(t.size&&(a(r,{size:t.size}),r=(0,o.f)(r)),"0x00"===(0,o.f)(r))return!1;if("0x01"===(0,o.f)(r))return!0;throw new n.Cd(r)}function u(e,t={}){return Number(c(e,t))}function h(e,t={}){let r=(0,s.nr)(e);return t.size&&(a(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),(new TextDecoder).decode(r)}},1187:(e,t,r)=>{"use strict";r.d(t,{O0:()=>l,nr:()=>d,qX:()=>p});var n=r(2027),i=r(5102),o=r(1769),s=r(5946),a=r(2106);const c=new TextEncoder;function l(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){return d((0,a.eC)(e,t))}(e,t):"boolean"==typeof e?function(e,t={}){const r=new Uint8Array(1);return r[0]=Number(e),"number"==typeof t.size?((0,s.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,i.v)(e)?d(e,t):p(e,t)}const u={zero:48,nine:57,A:65,F:70,a:97,f:102};function h(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function d(e,t={}){let r=e;t.size&&((0,s.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);const a=i.length/2,c=new Uint8Array(a);for(let e=0,t=0;e<a;e++){const r=h(i.charCodeAt(t++)),o=h(i.charCodeAt(t++));if(void 0===r||void 0===o)throw new n.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);c[e]=16*r+o}return c}function p(e,t={}){const r=c.encode(e);return"number"==typeof t.size?((0,s.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},2106:(e,t,r)=>{"use strict";r.d(t,{$G:()=>d,C4:()=>c,NC:()=>a,ci:()=>l,eC:()=>u});var n=r(7788),i=r(1769),o=r(5946);const s=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function a(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?d(e,t):"boolean"==typeof e?c(e,t):l(e,t)}function c(e,t={}){const r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,i.vk)(r,{size:t.size})):r}function l(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=s[e[t]];const n=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(n,{size:t.size}),(0,i.vk)(n,{dir:"right",size:t.size})):n}function u(e,t={}){const{signed:r,size:o}=t,s=BigInt(e);let a;o?a=r?(1n<<8n*BigInt(o)-1n)-1n:2n**(8n*BigInt(o))-1n:"number"==typeof e&&(a=BigInt(Number.MAX_SAFE_INTEGER));const c="bigint"==typeof a&&r?-a-1n:0;if(a&&s>a||s<c){const t="bigint"==typeof e?"n":"";throw new n.J5({max:a?`${a}${t}`:void 0,min:`${c}${t}`,signed:r,size:o,value:`${e}${t}`})}const l=`0x${(r&&s<0?(1n<<BigInt(8*o))+BigInt(s):s).toString(16)}`;return o?(0,i.vk)(l,{size:o}):l}const h=new TextEncoder;function d(e,t={}){return l(h.encode(e),t)}},7469:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var n=r(2027),i=r(6445);function o(e,t){const r=(e.details||"").toLowerCase(),o=e.walk((e=>e.code===i.M_.code));return o instanceof n.G?new i.M_({cause:e,message:o.details}):i.M_.nodeMessage.test(r)?new i.M_({cause:e,message:e.details}):i.Hh.nodeMessage.test(r)?new i.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.G$.nodeMessage.test(r)?new i.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.ZI.nodeMessage.test(r)?new i.ZI({cause:e,nonce:t?.nonce}):i.vU.nodeMessage.test(r)?new i.vU({cause:e,nonce:t?.nonce}):i.se.nodeMessage.test(r)?new i.se({cause:e,nonce:t?.nonce}):i.C_.nodeMessage.test(r)?new i.C_({cause:e}):i.WF.nodeMessage.test(r)?new i.WF({cause:e,gas:t?.gas}):i.dR.nodeMessage.test(r)?new i.dR({cause:e,gas:t?.gas}):i.pZ.nodeMessage.test(r)?new i.pZ({cause:e}):i.cs.nodeMessage.test(r)?new i.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new i.cj({cause:e})}},1163:(e,t,r)=>{"use strict";function n(e,{format:t}){if(!t)return{};const r={};return function t(n){const i=Object.keys(n);for(const o of i)o in e&&(r[o]=e[o]),n[o]&&"object"==typeof n[o]&&!Array.isArray(n[o])&&t(n[o])}(t(e||{})),r}r.d(t,{K:()=>n})},1366:(e,t,r)=>{"use strict";function n(e,t){return({exclude:r,format:n})=>({exclude:r,format:e=>{const i=t(e);if(r)for(const e of r)delete i[e];return{...i,...n(e)}},type:e})}r.d(t,{$:()=>n})},4688:(e,t,r)=>{"use strict";r.d(t,{iy:()=>a,tG:()=>s});var n=r(2106),i=r(1366);const o={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function s(e){return{...e,gas:void 0!==e.gas?(0,n.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,n.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,n.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,n.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,n.eC)(e.nonce):void 0,type:void 0!==e.type?o[e.type]:void 0,value:void 0!==e.value?(0,n.eC)(e.value):void 0}}const a=(0,i.$)("transactionRequest",s)},4092:(e,t,r)=>{"use strict";r.d(t,{e:()=>s});var n=r(1187),i=r(9574),o=r(3199);const s=e=>{return t=(e=>(0,i.r)(e))(e),(0,o.w)((0,n.O0)(t));var t}},552:(e,t,r)=>{"use strict";r.d(t,{o:()=>a});var n=r(3972),i=r(1187),o=r(9574),s=r(3199);const a=e=>{return(0,n.tP)((t=(0,o.r)(e),(0,s.w)((0,i.O0)(t))),0,4);var t}},9574:(e,t,r)=>{"use strict";r.d(t,{r:()=>a});const n=/^tuple(?<array>(\[(\d*)\])*)$/;function i(e){let t=e.type;if(n.test(e.type)&&"components"in e){t="(";const r=e.components.length;for(let n=0;n<r;n++)t+=i(e.components[n]),n<r-1&&(t+=", ");const o=function(e,t){const r=e.exec(t);return r?.groups}(n,e.type);return t+=`)${o?.array??""}`,i({...e,type:t})}return"indexed"in e&&e.indexed&&(t=`${t} indexed`),e.name?`${t} ${e.name}`:t}function o(e){let t="";const r=e.length;for(let n=0;n<r;n++)t+=i(e[n]),n!==r-1&&(t+=", ");return t}var s=r(2027);const a=e=>{var t;return function(e){let t=!0,r="",n=0,i="",o=!1;for(let s=0;s<e.length;s++){const a=e[s];if(["(",")",","].includes(a)&&(t=!0),"("===a&&n++,")"===a&&n--,t)if(0!==n)" "!==a?(i+=a,r+=a):","!==e[s-1]&&","!==r&&",("!==r&&(r="",t=!1);else if(" "===a&&["event","function",""].includes(i))i="";else if(i+=a,")"===a){o=!0;break}}if(!o)throw new s.G("Unable to normalize signature.");return i}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${o(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${o(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${o(t.inputs)})`:"error"===t.type?`error ${t.name}(${o(t.inputs)})`:"constructor"===t.type?`constructor(${o(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")}},3199:(e,t,r)=>{"use strict";function n(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function i(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}r.d(t,{w:()=>O});const s=BigInt(2**32-1),a=BigInt(32);function c(e,t=!1){return t?{h:Number(e&s),l:Number(e>>a&s)}:{h:0|Number(e>>a&s),l:0|Number(e&s)}}function l(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:o,l:s}=c(e[i],t);[r[i],n[i]]=[o,s]}return[r,n]}if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw new Error("Non little-endian hardware is not supported");function u(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!(e instanceof Uint8Array))throw new Error("expected Uint8Array, got "+typeof e);return e}class h{clone(){return this._cloneInto()}}const[d,p,f]=[[],[],[]],g=BigInt(0),m=BigInt(1),y=BigInt(2),w=BigInt(7),b=BigInt(256),v=BigInt(113);for(let e=0,t=m,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],d.push(2*(5*n+r)),p.push((e+1)*(e+2)/2%64);let i=g;for(let e=0;e<7;e++)t=(t<<m^(t>>w)*v)%b,t&y&&(i^=m<<(m<<BigInt(e))-m);f.push(i)}const[_,E]=l(f,!0),x=(e,t,r)=>r>32?((e,t,r)=>t<<r-32|e>>>64-r)(e,t,r):((e,t,r)=>e<<r|t>>>32-r)(e,t,r),C=(e,t,r)=>r>32?((e,t,r)=>e<<r-32|t>>>64-r)(e,t,r):((e,t,r)=>t<<r|e>>>32-r)(e,t,r);class S extends h{constructor(e,t,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var s;this.state=new Uint8Array(200),this.state32=(s=this.state,new Uint32Array(s.buffer,s.byteOffset,Math.floor(s.byteLength/4)))}keccak(){!function(e,t=24){const r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){const n=(t+8)%10,i=(t+2)%10,o=r[i],s=r[i+1],a=x(o,s,1)^r[n],c=C(o,s,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=a,e[t+r+1]^=c}let t=e[2],i=e[3];for(let r=0;r<24;r++){const n=p[r],o=x(t,i,n),s=C(t,i,n),a=d[r];t=e[a],i=e[a+1],e[a]=o,e[a+1]=s}for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}e[0]^=_[n],e[1]^=E[n]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);const{blockLen:t,state:r}=this,n=(e=u(e)).length;for(let i=0;i<n;){const o=Math.min(t-this.pos,n-i);for(let t=0;t<o;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:r,blockLen:n}=this;e[r]^=t,0!=(128&t)&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){o(this,!1),i(e),this.finish();const t=this.state,{blockLen:r}=this;for(let n=0,i=e.length;n<i;){this.posOut>=r&&this.keccak();const o=Math.min(r-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return n(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(function(e,t){i(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:r,outputLen:n,rounds:i,enableXOF:o}=this;return e||(e=new S(t,r,n,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=n,e.enableXOF=o,e.destroyed=this.destroyed,e}}const A=((e,t,r)=>function(e){const t=t=>e().update(u(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}((()=>new S(t,e,r))))(1,136,32);var I=r(5102),k=r(1187),P=r(2106);function O(e,t){const r=t||"hex",n=A((0,I.v)(e,{strict:!1})?(0,k.O0)(e):e);return"bytes"===r?n:(0,P.NC)(n)}},2357:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});const n=new Map;function i({fn:e,id:t,shouldSplitBatch:r,wait:i=0,sort:o}){const s=async()=>{const t=c();a();const r=t.map((({args:e})=>e));0!==r.length&&e(r).then((e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){const{pendingPromise:n}=t[r];n.resolve?.([e[r],e])}})).catch((e=>{for(let r=0;r<t.length;r++){const{pendingPromise:n}=t[r];n.reject?.(e)}}))},a=()=>n.delete(t),c=()=>n.get(t)||[],l=e=>n.set(t,[...c(),e]);return{flush:a,async schedule(e){const t={},n=new Promise(((e,r)=>{t.resolve=e,t.reject=r})),o=r?.([...c().map((({args:e})=>e)),e]);return o&&s(),c().length>0?(l({args:e,pendingPromise:t}),n):(l({args:e,pendingPromise:t}),setTimeout(s,i),n)}}}},6070:(e,t,r)=>{"use strict";r.d(t,{P:()=>n});const n=(e,t,r)=>JSON.stringify(e,((e,r)=>{const n="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,n):n}),r)},7531:(e,t,r)=>{"use strict";r.d(t,{F:()=>c});var n=r(4503),i=r(6087),o=r(6445),s=r(3639),a=r(9321);function c(e){const{account:t,gasPrice:r,maxFeePerGas:c,maxPriorityFeePerGas:l,to:u}=e,h=t?(0,n.T)(t):void 0;if(h&&!(0,a.U)(h.address))throw new i.b({address:h.address});if(u&&!(0,a.U)(u))throw new i.b({address:u});if(void 0!==r&&(void 0!==c||void 0!==l))throw new s.xY;if(c&&c>2n**256n-1n)throw new o.Hh({maxFeePerGas:c});if(l&&c&&l>c)throw new o.cs({maxFeePerGas:c,maxPriorityFeePerGas:l})}},9625:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(4192),i=r(5229);function o(e,t="wei"){return(0,i.b)(e,n.ez[t])}},7795:(e,t,r)=>{"use strict";r.d(t,{o:()=>o});var n=r(4192),i=r(5229);function o(e,t="wei"){return(0,i.b)(e,n.Zn[t])}},5229:(e,t,r)=>{"use strict";function n(e,t){let r=e.toString();const n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(t,"0");let[i,o]=[r.slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${o?`.${o}`:""}`}r.d(t,{b:()=>n})}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);i.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>r[e]));return s.default=()=>r,i.d(o,s),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";var e=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},t=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function r(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}var n=i(6729);function o(e,t={}){const{fees:r=e.fees,formatters:n=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:r,formatters:n,serializers:i}}const s=o({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),a=o({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},l=(e,t,r)=>(c(e,t,"read from private field"),r?r.call(e):t.get(e)),u=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},h=(e,t,r,n)=>(c(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),d=(e,t,r)=>(c(e,t,"access private method"),r),p=class extends n{constructor({chains:e=[s,a],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){const{default:t,...r}=e.blockExplorers??{};if(t)return[t.url,...Object.values(r).map((e=>e.url))]}isChainUnsupported(e){return!this.chains.some((t=>t.id===e))}setStorage(e){this.storage=e}},f=i(5775),g=i(2027),m=i(8863);class y extends g.G{constructor(e,{code:t,docsPath:r,metaMessages:n,shortMessage:i}){super(i,{cause:e,docsPath:r,metaMessages:n||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof m.bs?e.code:t??-1}}class w extends y{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class b extends y{constructor(e){super(e,{code:b.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class v extends y{constructor(e){super(e,{code:v.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class _ extends y{constructor(e){super(e,{code:_.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class E extends y{constructor(e){super(e,{code:E.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class x extends y{constructor(e){super(e,{code:x.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class C extends y{constructor(e){super(e,{code:C.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class S extends y{constructor(e){super(e,{code:S.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(S,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class A extends y{constructor(e){super(e,{code:A.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(A,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class I extends y{constructor(e){super(e,{code:I.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class k extends y{constructor(e){super(e,{code:k.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class P extends y{constructor(e){super(e,{code:P.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class O extends y{constructor(e){super(e,{code:O.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class R extends w{constructor(e){super(e,{code:R.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class M extends w{constructor(e){super(e,{code:M.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class N extends w{constructor(e){super(e,{code:N.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(N,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class T extends w{constructor(e){super(e,{code:T.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class j extends w{constructor(e){super(e,{code:j.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class L extends w{constructor(e){super(e,{code:L.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(L,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class D extends y{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}var $=i(4503);const B=256;let U,F=B;function z(e=11){if(!U||F+e>2*B){U="",F=0;for(let e=0;e<B;e++)U+=(256+256*Math.random()|0).toString(16).substring(1)}return U.substring(F,F+++e)}function W(e){const{batch:t,cacheTime:r=e.pollingInterval??4e3,key:n="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=e,a=e.chain,c=e.account?(0,$.T)(e.account):void 0,{config:l,request:u,value:h}=e.transport({chain:a,pollingInterval:o}),d={account:c,batch:t,cacheTime:r,chain:a,key:n,name:i,pollingInterval:o,request:u,transport:{...l,...h},type:s,uid:z()};return Object.assign(d,{extend:function e(t){return r=>{const n=r(t);for(const e in d)delete n[e];const i={...t,...n};return Object.assign(i,{extend:e(i)})}}(d)})}var H=i(5946);async function V(e){const t=await e.request({method:"eth_chainId"});return(0,H.ly)(t)}var q=i(2106),G=i(7412),Z=i(7040),K=i(5444);const Y="/docs/contract/encodeDeployData";function Q({abi:e,args:t,bytecode:r}){if(!t||0===t.length)return r;const n=e.find((e=>"type"in e&&"constructor"===e.type));if(!n)throw new G.fM({docsPath:Y});if(!("inputs"in n))throw new G.cO({docsPath:Y});if(!n.inputs||0===n.inputs.length)throw new G.cO({docsPath:Y});const i=(0,K.E)(n.inputs,t);return(0,Z.SM)([r,i])}class J extends g.G{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join("\n"),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}var X=i(377);function ee({chain:e,currentChainId:t}){if(!e)throw new X.Bk;if(t!==e.id)throw new X.Yl({chain:e,currentChainId:t})}var te=i(6445),re=i(3639),ne=i(7469),ie=i(1163),oe=i(4688);function se(e,t,r){return n=>e[t.name||r]?.(n)??t(e,n)}var ae=i(7531),ce=i(7795);class le extends g.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class ue extends g.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class he extends g.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,ce.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class de extends g.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}var pe=i(1366);const fe={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function ge(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,H.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,H.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?fe[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}const me=(0,pe.$)("transaction",ge);function ye(e){const t=e.transactions?.map((e=>"string"==typeof e?e:ge(e)));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}const we=(0,pe.$)("block",ye);async function be(e,{blockHash:t,blockNumber:r,blockTag:n,includeTransactions:i}={}){const o=n??"latest",s=i??!1,a=void 0!==r?(0,q.eC)(r):void 0;let c=null;if(c=t?await e.request({method:"eth_getBlockByHash",params:[t,s]}):await e.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!c)throw new de({blockHash:t,blockNumber:r});return(e.chain?.formatters?.block?.format||ye)(c)}async function ve(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function _e(e,t){const{block:r,chain:n=e.chain,request:i}=t||{};if("function"==typeof n?.fees?.defaultPriorityFee){const t=r||await se(e,be,"getBlock")({});return n.fees.defaultPriorityFee({block:t,client:e,request:i})}if(void 0!==n?.fees?.defaultPriorityFee)return n?.fees?.defaultPriorityFee;try{const t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,H.y_)(t)}catch{const[t,n]=await Promise.all([r?Promise.resolve(r):se(e,be,"getBlock")({}),se(e,ve,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new ue;const i=n-t.baseFeePerGas;return i<0n?0n:i}}async function Ee(e,t){const{block:r,chain:n=e.chain,request:i,type:o="eip1559"}=t||{},s=await(async()=>"function"==typeof n?.fees?.baseFeeMultiplier?n.fees.baseFeeMultiplier({block:r,client:e,request:i}):n?.fees?.baseFeeMultiplier??1.2)();if(s<1)throw new le;const a=10**(s.toString().split(".")[1]?.length??0),c=e=>e*BigInt(Math.ceil(s*a))/BigInt(a),l=r||await se(e,be,"getBlock")({});if("function"==typeof n?.fees?.estimateFeesPerGas)return n.fees.estimateFeesPerGas({block:r,client:e,multiply:c,request:i,type:o});if("eip1559"===o){if("bigint"!=typeof l.baseFeePerGas)throw new ue;const t=i?.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await _e(e,{block:l,chain:n,request:i}),r=c(l.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??r+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??c(await se(e,ve,"getGasPrice")({}))}}var xe=i(9625);class Ce extends g.G{constructor(e,{account:t,docsPath:r,chain:n,data:i,gas:o,gasPrice:s,maxFeePerGas:a,maxPriorityFeePerGas:c,nonce:l,to:u,value:h}){const d=(0,re.xr)({from:t?.address,to:u,value:void 0!==h&&`${(0,xe.d)(h)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:i,gas:o,gasPrice:void 0!==s&&`${(0,ce.o)(s)} gwei`,maxFeePerGas:void 0!==a&&`${(0,ce.o)(a)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,ce.o)(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",d].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}async function Se(e,t){const r=t.account??e.account;if(!r)throw new J({docsPath:"/docs/actions/public/estimateGas"});const n=(0,$.T)(r);try{const{accessList:r,blockNumber:i,blockTag:o,data:s,gas:a,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:h,to:d,value:p,...f}="local"===n.type?await ke(e,t):t,g=(i?(0,q.eC)(i):void 0)||o;(0,ae.F)(t);const m=e.chain?.formatters?.transactionRequest?.format,y=(m||oe.tG)({...(0,ie.K)(f,{format:m}),from:n.address,accessList:r,data:s,gas:a,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:h,to:d,value:p}),w=await e.request({method:"eth_estimateGas",params:g?[y,g]:[y]});return BigInt(w)}catch(r){throw function(e,{docsPath:t,...r}){const n=(()=>{const t=(0,ne.k)(e,r);return t instanceof te.cj?e:t})();return new Ce(n,{docsPath:t,...r})}(r,{...t,account:n,chain:e.chain})}}async function Ae(e,{address:t,blockTag:r="latest",blockNumber:n}){const i=await e.request({method:"eth_getTransactionCount",params:[t,n?(0,q.eC)(n):r]});return(0,H.ly)(i)}function Ie(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new re.j3({transaction:e})}async function ke(e,t){const{account:r=e.account,chain:n,gas:i,nonce:o,type:s}=t;if(!r)throw new J;const a=(0,$.T)(r),c=await se(e,be,"getBlock")({blockTag:"latest"}),l={...t,from:a.address};if(void 0===o&&(l.nonce=await se(e,Ae,"getTransactionCount")({address:a.address,blockTag:"pending"})),void 0===s)try{l.type=Ie(l)}catch{l.type="bigint"==typeof c.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===l.type){const{maxFeePerGas:r,maxPriorityFeePerGas:i}=await Ee(e,{block:c,chain:n,request:l});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<i)throw new he({maxPriorityFeePerGas:i});l.maxPriorityFeePerGas=i,l.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new ue;const{gasPrice:r}=await Ee(e,{block:c,chain:n,request:l,type:"legacy"});l.gasPrice=r}return void 0===i&&(l.gas=await se(e,Se,"estimateGas")({...l,account:{address:a.address,type:"json-rpc"}})),(0,ae.F)(l),l}async function Pe(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}async function Oe(e,t){const{account:r=e.account,chain:n=e.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:h,value:d,...p}=t;if(!r)throw new J({docsPath:"/docs/actions/wallet/sendTransaction"});const f=(0,$.T)(r);try{let r;if((0,ae.F)(t),null!==n&&(r=await se(e,V,"getChainId")({}),ee({currentChainId:r,chain:n})),"local"===f.type){const t=await se(e,ke,"prepareTransactionRequest")({account:f,accessList:i,chain:n,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:h,value:d,...p});r||(r=await se(e,V,"getChainId")({}));const g=n?.serializers?.transaction,m=await f.signTransaction({...t,chainId:r},{serializer:g});return await se(e,Pe,"sendRawTransaction")({serializedTransaction:m})}const g=e.chain?.formatters?.transactionRequest?.format,m=(g||oe.tG)({...(0,ie.K)(p,{format:g}),accessList:i,data:o,from:f.address,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:h,value:d});return await e.request({method:"eth_sendTransaction",params:[m]})}catch(e){throw function(e,{docsPath:t,...r}){const n=(()=>{const t=(0,ne.k)(e,r);return t instanceof te.cj?e:t})();return new re.mk(n,{docsPath:t,...r})}(e,{...t,account:f,chain:t.chain||void 0})}}var Re=i(5102),Me=i(6070),Ne=i(6087),Te=i(9321),je=i(9135);const Le=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,De=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function $e({domain:e,message:t,primaryType:r,types:n}){const i=n,o=(e,t)=>{for(const r of e){const{name:e,type:n}=r,s=n,a=t[e],c=s.match(De);if(c&&("number"==typeof a||"bigint"==typeof a)){const[e,t,r]=c;(0,q.eC)(a,{signed:"int"===t,size:parseInt(r)/8})}if("address"===s&&"string"==typeof a&&!(0,Te.U)(a))throw new Ne.b({address:a});const l=s.match(Le);if(l){const[e,t]=l;if(t&&(0,je.d)(a)!==parseInt(t))throw new G.KY({expectedSize:parseInt(t),givenSize:(0,je.d)(a)})}const u=i[s];u&&o(u,a)}};if(i.EIP712Domain&&e&&o(i.EIP712Domain,e),"EIP712Domain"!==r){const e=i[r];o(e,t)}}function Be({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}var Ue=i(7799);function Fe(e){return{addChain:t=>async function(e,{chain:t}){const{id:r,name:n,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,q.eC)(r),chainName:n,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map((({url:e})=>e)):void 0}]})}(e,t),deployContract:t=>function(e,{abi:t,args:r,bytecode:n,...i}){return Oe(e,{...i,data:Q({abi:t,args:r,bytecode:n})})}(e,t),getAddresses:()=>async function(e){return"local"===e.account?.type?[e.account.address]:(await e.request({method:"eth_accounts"})).map((e=>(0,f.x)(e)))}(e),getChainId:()=>V(e),getPermissions:()=>async function(e){return await e.request({method:"wallet_getPermissions"})}(e),prepareTransactionRequest:t=>ke(e,t),requestAddresses:()=>async function(e){return(await e.request({method:"eth_requestAccounts"})).map((e=>(0,f.K)(e)))}(e),requestPermissions:t=>async function(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}(e,t),sendRawTransaction:t=>Pe(e,t),sendTransaction:t=>Oe(e,t),signMessage:t=>async function(e,{account:t=e.account,message:r}){if(!t)throw new J({docsPath:"/docs/actions/wallet/signMessage"});const n=(0,$.T)(t);if("local"===n.type)return n.signMessage({message:r});const i="string"==typeof r?(0,q.$G)(r):r.raw instanceof Uint8Array?(0,q.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[i,n.address]})}(e,t),signTransaction:t=>async function(e,t){const{account:r=e.account,chain:n=e.chain,...i}=t;if(!r)throw new J({docsPath:"/docs/actions/wallet/signTransaction"});const o=(0,$.T)(r);(0,ae.F)({account:o,...t});const s=await se(e,V,"getChainId")({});null!==n&&ee({currentChainId:s,chain:n});const a=n?.formatters||e.chain?.formatters,c=a?.transactionRequest?.format||oe.tG;return"local"===o.type?o.signTransaction({...i,chainId:s},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...c(i),chainId:(0,q.eC)(s),from:o.address}]})}(e,t),signTypedData:t=>async function(e,{account:t=e.account,domain:r,message:n,primaryType:i,types:o}){if(!t)throw new J({docsPath:"/docs/actions/wallet/signTypedData"});const s=(0,$.T)(t),a={EIP712Domain:Be({domain:r}),...o};if($e({domain:r,message:n,primaryType:i,types:a}),"local"===s.type)return s.signTypedData({domain:r,primaryType:i,types:a,message:n});const c=(0,Me.P)({domain:r??{},primaryType:i,types:a,message:n},((e,t)=>(0,Re.v)(t)?t.toLowerCase():t));return e.request({method:"eth_signTypedData_v4",params:[s.address,c]})}(e,t),switchChain:t=>async function(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,q.eC)(t)}]})}(e,t),watchAsset:t=>async function(e,t){return await e.request({method:"wallet_watchAsset",params:t})}(e,t),writeContract:t=>async function(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...s}){const a=(0,Ue.R)({abi:t,args:n,functionName:o});return await se(e,Oe,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:r,...s})}(e,t)}}function ze(e){const{key:t="wallet",name:r="Wallet Client",transport:n}=e;return W({...e,key:t,name:r,transport:e=>n({...e,retryCount:0}),type:"walletClient"}).extend(Fe)}async function We(e){return new Promise((t=>setTimeout(t,e)))}function He(e,{delay:t=100,retryCount:r=2,shouldRetry:n=(()=>!0)}={}){return new Promise(((i,o)=>{const s=async({count:a=0}={})=>{try{const t=await e();i(t)}catch(e){if(a<r&&await n({count:a,error:e}))return(async({error:e})=>{const r="function"==typeof t?t({count:a,error:e}):t;r&&await We(r),s({count:a+1})})({error:e});o(e)}};s()}))}const Ve=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:!!(e instanceof m.Gg&&e.status)&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function qe(e,{retryDelay:t=150,retryCount:r=3}={}){return async n=>He((async()=>{try{return await e(n)}catch(e){const t=e;switch(t.code){case b.code:throw new b(t);case v.code:throw new v(t);case _.code:throw new _(t);case E.code:throw new E(t);case x.code:throw new x(t);case C.code:throw new C(t);case S.code:throw new S(t);case A.code:throw new A(t);case I.code:throw new I(t);case k.code:throw new k(t);case P.code:throw new P(t);case O.code:throw new O(t);case R.code:throw new R(t);case M.code:throw new M(t);case N.code:throw new N(t);case T.code:throw new T(t);case j.code:throw new j(t);case L.code:throw new L(t);case 5e3:throw new R(t);default:if(e instanceof g.G)throw e;throw new D(t)}}}),{delay:({count:e,error:r})=>{if(r&&r instanceof m.Gg){const e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:r,shouldRetry:({error:e})=>!Ve(e)})}function Ge({key:e,name:t,request:r,retryCount:n=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:e,name:t,request:r,retryCount:n,retryDelay:i,timeout:o,type:s},request:qe(r,{retryCount:n,retryDelay:i}),value:a}}function Ze(e,t={}){const{key:r="custom",name:n="Custom Provider",retryDelay:i}=t;return({retryCount:o})=>Ge({key:r,name:n,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:i,type:"custom"})}var Ke,Ye=class extends p{constructor({chains:e,options:t}={}){const n={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;const e=window.ethereum;return e?.providers&&e.providers.length>0?e.providers[0]:e},...t};super({chains:e,options:n}),this.id="injected",u(this,Ke,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,f.K)(e[0])})},this.onChainChanged=e=>{const t=r(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})},this.onDisconnect=async e=>{1013===e.code&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))};const i=n.getProvider();if("string"==typeof n.name)this.name=n.name;else if(i){const e=function(e){if(!e)return"Injected";const t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOktoWallet?"Okto Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){const r=new Set;let n=1;for(const i of e.providers){let e=t(i);e||(e=`Unknown Wallet #${n}`,n+=1),r.add(e)}const i=[...r];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}(i);n.name?this.name=n.name(e):this.name="string"==typeof e?e:e[0]}else this.name="Injected";this.ready=!!i}async connect({chainId:e}={}){try{const r=await this.getProvider();if(!r)throw new t;r.on&&(r.on("accountsChanged",this.onAccountsChanged),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const n=await r.request({method:"eth_requestAccounts"}),i=(0,f.K)(n[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:i,chain:{id:o,unsupported:s}}}catch(e){if(this.isUserRejectedRequestError(e))throw new R(e);if(-32002===e.code)throw new A(e);throw e}}async disconnect(){const e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new t;const r=await e.request({method:"eth_accounts"});return(0,f.K)(r[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new t;return e.request({method:"eth_chainId"}).then(r)}async getProvider(){const e=this.options.getProvider();return e&&h(this,Ke,e),l(this,Ke)}async getWalletClient({chainId:e}={}){const[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return ze({account:r,chain:n,transport:Ze(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new t;return!!await this.getAccount()}catch{return!1}}async switchChain(r){const n=await this.getProvider();if(!n)throw new t;const i=(0,q.eC)(r);try{return await Promise.all([n.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),new Promise((e=>this.on("change",(({chain:t})=>{t?.id===r&&e()}))))]),this.chains.find((e=>e.id===r))??{id:r,name:`Chain ${i}`,network:`${i}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(t){const o=this.chains.find((e=>e.id===r));if(!o)throw new e({chainId:r,connectorId:this.id});if(4902===t.code||4902===t?.data?.originalError?.code)try{if(await n.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[o.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),await this.getChainId()!==r)throw new R(new Error("User rejected switch after adding network."));return o}catch(e){throw new R(e)}if(this.isUserRejectedRequestError(t))throw new R(t);throw new L(t)}}async watchAsset({address:e,decimals:r=18,image:n,symbol:i}){const o=await this.getProvider();if(!o)throw new t;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:r,image:n,symbol:i}}})}isUserRejectedRequestError(e){return 4001===e.code}};Ke=new WeakMap;var Qe=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},Je=(e,t,r)=>(Qe(e,t,"read from private field"),r?r.call(e):t.get(e)),Xe=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},et=(e,t,r,n)=>(Qe(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),tt=i(6693),rt=i(7210),nt=i(7864),it=i(1836),ot=i(1746),st=i(5980);function at(e,t){if(!(e instanceof g.G))return!1;const r=e.walk((e=>e instanceof st.Lu));return r instanceof st.Lu&&("ResolverNotFound"===r.data?.errorName||"ResolverWildcardNotSupported"===r.data?.errorName||!!r.reason?.includes("Wildcard on non-extended resolvers is not supported")||"reverse"===t&&r.reason===ot.$[50])}var ct=i(1187),lt=i(3199);function ut(e){if(66!==e.length)return null;if(0!==e.indexOf("["))return null;if(65!==e.indexOf("]"))return null;const t=`0x${e.slice(1,65)}`;return(0,Re.v)(t)?t:null}function ht(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,q.ci)(t);const r=e.split(".");for(let e=r.length-1;e>=0;e-=1){const n=ut(r[e]),i=n?(0,ct.O0)(n):(0,lt.w)((0,ct.qX)(r[e]),"bytes");t=(0,lt.w)((0,Z.zo)([t,i]),"bytes")}return(0,q.ci)(t)}function dt(e){const t=new Uint8Array(32).fill(0);return e?ut(e)||(0,lt.w)((0,ct.qX)(e)):(0,q.ci)(t)}function pt(e){const t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);const r=new Uint8Array((0,ct.qX)(t).byteLength+2);let n=0;const i=t.split(".");for(let e=0;e<i.length;e++){let t=(0,ct.qX)(i[e]);t.byteLength>255&&(t=(0,ct.qX)(`[${dt(i[e]).slice(2)}]`)),r[n]=t.length,r.set(t,n+1),n+=t.length+1}return r.byteLength!==n+1?r.slice(0,n+1):r}const ft=3;function gt(e,{abi:t,address:r,args:n,docsPath:i,functionName:o,sender:s}){const{code:a,data:c,message:l,shortMessage:u}=e instanceof st.VQ?e:e instanceof g.G?e.walk((e=>"data"in e))||e.walk():{},h=e instanceof G.wb?new st.Dk({functionName:o}):[ft,x.code].includes(a)&&(c||l||u)?new st.Lu({abi:t,data:"object"==typeof c?c.data:c,functionName:o,message:u??l}):e;return new st.uq(h,{abi:t,args:n,contractAddress:r,docsPath:i,functionName:o,sender:s})}var mt=i(84);async function yt(e,{abi:t,address:r,args:n,functionName:i,...o}){const s=(0,Ue.R)({abi:t,args:n,functionName:i});try{const{data:a}=await se(e,mt.R,"call")({data:s,to:r,...o});return(0,rt.k)({abi:t,args:n,functionName:i,data:a||"0x"})}catch(e){throw gt(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/readContract",functionName:i})}}class wt extends g.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class bt extends g.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class vt extends g.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class _t extends g.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const Et=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,xt=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Ct=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,St=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;function At(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function It({uri:e,gatewayUrls:t}){const r=Ct.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};const n=At(t?.ipfs,"https://ipfs.io"),i=At(t?.arweave,"https://arweave.net"),o=e.match(Et),{protocol:s,subpath:a,target:c,subtarget:l=""}=o?.groups||{},u="ipns:/"===s||"ipns/"===a,h="ipfs:/"===s||"ipfs/"===a||xt.test(e);if(e.startsWith("http")&&!u&&!h){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||h)&&c)return{uri:`${n}/${u?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if("ar:/"===s&&c)return{uri:`${i}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let d=e.replace(St,"");if(d.startsWith("<svg")&&(d=`data:image/svg+xml;base64,${btoa(d)}`),d.startsWith("data:")||d.startsWith("{"))return{uri:d,isOnChain:!0,isEncoded:!1};throw new vt({uri:e})}function kt(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new wt({data:e});return e.image||e.image_url||e.image_data}async function Pt({gatewayUrls:e,uri:t}){const{uri:r,isOnChain:n}=It({uri:t,gatewayUrls:e});if(n)return r;const i=await async function(e){try{const t=await fetch(e,{method:"HEAD"});if(200===t.status){const e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){return("object"!=typeof t||void 0===t.response)&&!!globalThis.hasOwnProperty("Image")&&new Promise((t=>{const r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e}))}}(r);if(i)return r;throw new vt({uri:t})}async function Ot(e,{blockNumber:t,blockTag:r,name:n,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=(0,nt.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const o=await se(e,yt,"readContract")({address:s,abi:tt.k3,functionName:"resolve",args:[(0,q.NC)(pt(n)),(0,Ue.R)({abi:tt.nZ,functionName:"text",args:[ht(n),i]})],blockNumber:t,blockTag:r});if("0x"===o[0])return null;const a=(0,rt.k)({abi:tt.nZ,functionName:"text",data:o[0]});return""===a?null:a}catch(e){if(at(e,"resolve"))return null;throw e}}function Rt(e,{method:t}){const r={};return"fallback"===e.transport.type&&e.transport.onResponse?.((({method:e,response:n,status:i,transport:o})=>{"success"===i&&t===e&&(r[n]=o.request)})),t=>r[t]||e.request}class Mt extends g.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var Nt=i(4092),Tt=i(522),jt=i(840);function Lt({abi:e,eventName:t,args:r}){let n=e[0];if(t&&(n=(0,jt.mE)({abi:e,args:r,name:t}),!n))throw new G.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==n.type)throw new G.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=(0,Tt.t)(n),o=(0,Nt.e)(i);let s=[];if(r&&"inputs"in n){const e=n.inputs?.filter((e=>"indexed"in e&&e.indexed)),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map((e=>r[e.name]))??[]:[];t.length>0&&(s=e?.map(((e,r)=>Array.isArray(t[r])?t[r].map(((n,i)=>Dt({param:e,value:t[r][i]}))):t[r]?Dt({param:e,value:t[r]}):null))??[])}return[o,...s]}function Dt({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,lt.w)((0,ct.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new Mt(e.type);return(0,K.E)([e],[t])}async function $t(e,{address:t,abi:r,args:n,eventName:i,fromBlock:o,strict:s,toBlock:a}){const c=Rt(e,{method:"eth_newFilter"}),l=i?Lt({abi:r,args:n,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,q.eC)(o):o,toBlock:"bigint"==typeof a?(0,q.eC)(a):a,topics:l}]});return{abi:r,args:n,eventName:i,id:u,request:c(u),strict:s,type:"event"}}async function Bt(e,{address:t,args:r,event:n,events:i,fromBlock:o,strict:s,toBlock:a}={}){const c=i??(n?[n]:void 0),l=Rt(e,{method:"eth_newFilter"});let u=[];c&&(u=[c.flatMap((e=>Lt({abi:[e],eventName:e.name,args:r})))],n&&(u=u[0]));const h=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,q.eC)(o):o,toBlock:"bigint"==typeof a?(0,q.eC)(a):a,...u.length?{topics:u}:{}}]});return{abi:c,args:r,eventName:n?n.name:void 0,fromBlock:o,id:h,request:l(h),strict:s,toBlock:a,type:"event"}}async function Ut(e){const t=Rt(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}const Ft=new Map,zt=new Map;const Wt=e=>`blockNumber.${e}`;async function Ht(e,{cacheTime:t=e.cacheTime,maxAge:r}={}){const n=await async function(e,{cacheKey:t,cacheTime:r=1/0}){const n=function(e){const t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),r=t(e,Ft),n=t(e,zt);return{clear:()=>{r.clear(),n.clear()},promise:r,response:n}}(t),i=n.response.get();if(i&&r>0&&(new Date).getTime()-i.created.getTime()<r)return i.data;let o=n.promise.get();o||(o=e(),n.promise.set(o));try{const e=await o;return n.response.set({created:new Date,data:e}),e}finally{n.promise.clear()}}((()=>e.request({method:"eth_blockNumber"})),{cacheKey:Wt(e.uid),cacheTime:r??t});return BigInt(n)}var Vt=i(4450);const qt="/docs/contract/decodeEventLog";function Gt({abi:e,data:t,strict:r,topics:n}){const i=r??!0,[o,...s]=n;if(!o)throw new G.FM({docsPath:qt});const a=e.find((e=>"event"===e.type&&o===(0,Nt.e)((0,Tt.t)(e))));if(!a||!("name"in a)||"event"!==a.type)throw new G.lC(o,{docsPath:qt});const{name:c,inputs:l}=a,u=l?.some((e=>!("name"in e&&e.name)));let h=u?[]:{};const d=l.filter((e=>"indexed"in e&&e.indexed));for(let e=0;e<d.length;e++){const t=d[e],r=s[e];if(!r)throw new G.Gy({abiItem:a,param:t});h[t.name||e]=Zt({param:t,value:r})}const p=l.filter((e=>!("indexed"in e&&e.indexed)));if(p.length>0)if(t&&"0x"!==t)try{const e=(0,Vt.r)(p,t);if(e)if(u)h=[...h,...e];else for(let t=0;t<p.length;t++)h[p[t].name]=e[t]}catch(e){if(i){if(e instanceof G.xB)throw new G.SM({abiItem:a,data:e.data,params:e.params,size:e.size});throw e}}else if(i)throw new G.SM({abiItem:a,data:"0x",params:p,size:0});return{eventName:c,args:Object.values(h).length>0?h:void 0}}function Zt({param:e,value:t}){return"string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/)?t:((0,Vt.r)([e],t)||[])[0]}function Kt(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}async function Yt(e,{address:t,blockHash:r,fromBlock:n,toBlock:i,event:o,events:s,args:a,strict:c}={}){const l=c??!1,u=s??(o?[o]:void 0);let h,d=[];return u&&(d=[u.flatMap((e=>Lt({abi:[e],eventName:e.name,args:a})))],o&&(d=d[0])),h=r?await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:"bigint"==typeof n?(0,q.eC)(n):n,toBlock:"bigint"==typeof i?(0,q.eC)(i):i}]}),h.map((e=>{try{const{eventName:t,args:r}=u?Gt({abi:u,data:e.data,topics:e.topics,strict:l}):{eventName:void 0,args:void 0};return Kt(e,{args:r,eventName:t})}catch(t){let r,n;if(t instanceof G.SM||t instanceof G.Gy){if(l)return;r=t.abiItem.name,n=t.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Kt(e,{args:n?[]:{},eventName:r})}})).filter(Boolean)}async function Qt(e,{abi:t,address:r,args:n,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:c}){const l=o?(0,jt.mE)({abi:t,name:o}):void 0,u=l?void 0:t.filter((e=>"event"===e.type));return se(e,Yt,"getLogs")({address:r,args:n,blockHash:i,event:l,events:u,fromBlock:s,toBlock:a,strict:c})}async function Jt(e,{filter:t}){const r="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map((e=>{if("string"==typeof e)return e;try{const{eventName:n,args:i}="abi"in t&&t.abi?Gt({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return Kt(e,{args:i,eventName:n})}catch(r){let n,i;if(r instanceof G.SM||r instanceof G.Gy){if("strict"in t&&t.strict)return;n=r.abiItem.name,i=r.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Kt(e,{args:i?[]:{},eventName:n})}})).filter(Boolean)}async function Xt(e,{blockHash:t,blockNumber:r,blockTag:n,hash:i,index:o}){const s=n||"latest",a=void 0!==r?(0,q.eC)(r):void 0;let c=null;if(i?c=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?c=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,q.eC)(o)]}):(a||s)&&(c=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,(0,q.eC)(o)]})),!c)throw new re.Bh({blockHash:t,blockNumber:r,blockTag:s,hash:i,index:o});return(e.chain?.formatters?.transaction?.format||ge)(c)}const er={"0x0":"reverted","0x1":"success"};function tr(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map((e=>Kt(e))):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,H.ly)(e.transactionIndex):null,status:e.status?er[e.status]:null,type:e.type?fe[e.type]||e.type:null}}const rr=(0,pe.$)("transactionReceipt",tr);async function nr(e,{hash:t}){const r=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!r)throw new re.Yb({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||tr)(r)}async function ir(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}const or="Ethereum Signed Message:\n",sr="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";async function ar(e,{address:t,hash:r,signature:n,...i}){const o=(0,Re.v)(n)?n:(0,q.NC)(n);try{const{data:n}=await se(e,mt.R,"call")({data:Q({abi:tt.$o,args:[t,r,o],bytecode:sr}),...i});return s=n??"0x0",a="0x1",function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}((0,Re.v)(s)?(0,ct.O0)(s):s,(0,Re.v)(a)?(0,ct.O0)(a):a)}catch(e){if(e instanceof st.cg)return!1;throw e}var s,a}function cr({domain:e,message:t,primaryType:r,types:n}){const i=void 0===e?{}:e,o={EIP712Domain:Be({domain:i}),...n};$e({domain:i,message:t,primaryType:r,types:o});const s=["0x1901"];return i&&s.push(function({domain:e,types:t}){return lr({data:e,primaryType:"EIP712Domain",types:t})}({domain:i,types:o})),"EIP712Domain"!==r&&s.push(lr({data:t,primaryType:r,types:o})),(0,lt.w)((0,Z.zo)(s))}function lr({data:e,primaryType:t,types:r}){const n=ur({data:e,primaryType:t,types:r});return(0,lt.w)(n)}function ur({data:e,primaryType:t,types:r}){const n=[{type:"bytes32"}],i=[hr({primaryType:t,types:r})];for(const o of r[t]){const[t,s]=pr({types:r,name:o.name,type:o.type,value:e[o.name]});n.push(t),i.push(s)}return(0,K.E)(n,i)}function hr({primaryType:e,types:t}){const r=(0,q.NC)(function({primaryType:e,types:t}){let r="";const n=dr({primaryType:e,types:t});n.delete(e);const i=[e,...Array.from(n).sort()];for(const e of i)r+=`${e}(${t[e].map((({name:e,type:t})=>`${t} ${e}`)).join(",")})`;return r}({primaryType:e,types:t}));return(0,lt.w)(r)}function dr({primaryType:e,types:t},r=new Set){const n=e.match(/^\w*/u),i=n?.[0];if(r.has(i)||void 0===t[i])return r;r.add(i);for(const e of t[i])dr({primaryType:e.type,types:t},r);return r}function pr({types:e,name:t,type:r,value:n}){if(void 0!==e[r])return[{type:"bytes32"},(0,lt.w)(ur({data:n,primaryType:r,types:e}))];if("bytes"===r)return n="0x"+((n.length%2?"0":"")+n.slice(2)),[{type:"bytes32"},(0,lt.w)(n)];if("string"===r)return[{type:"bytes32"},(0,lt.w)((0,q.NC)(n))];if(r.lastIndexOf("]")===r.length-1){const i=r.slice(0,r.lastIndexOf("[")),o=n.map((r=>pr({name:t,type:i,types:e,value:r})));return[{type:"bytes32"},(0,lt.w)((0,K.E)(o.map((([e])=>e)),o.map((([,e])=>e))))]}return[{type:r},n]}BigInt(0),BigInt(1),BigInt(2);const fr=new Map,gr=new Map;let mr=0;function yr(e,t,r){const n=++mr,i=()=>fr.get(e)||[],o=()=>{const t=gr.get(e);1===i().length&&t&&t(),(()=>{const t=i();fr.set(e,t.filter((e=>e.id!==n)))})()},s=i();if(fr.set(e,[...s,{id:n,fns:t}]),s&&s.length>0)return o;const a={};for(const e in t)a[e]=(...t)=>{const r=i();if(0!==r.length)for(const n of r)n.fns[e]?.(...t)};const c=r(a);return"function"==typeof c&&gr.set(e,c),o}function wr(e,{emitOnBegin:t,initialWaitTime:r,interval:n}){let i=!0;const o=()=>i=!1;return(async()=>{let s;t&&(s=await e({unpoll:o}));const a=await(r?.(s))??n;await We(a);const c=async()=>{i&&(await e({unpoll:o}),await We(n),c())};c()})(),o}function br(e,{emitOnBegin:t=!1,emitMissed:r=!1,onBlockNumber:n,onError:i,poll:o,pollingInterval:s=e.pollingInterval}){let a;return(void 0!==o?o:"webSocket"!==e.transport.type)?yr((0,Me.P)(["watchBlockNumber",e.uid,t,r,s]),{onBlockNumber:n,onError:i},(n=>wr((async()=>{try{const t=await se(e,Ht,"getBlockNumber")({cacheTime:0});if(a){if(t===a)return;if(t-a>1&&r)for(let e=a+1n;e<t;e++)n.onBlockNumber(e,a),a=e}(!a||t>a)&&(n.onBlockNumber(t,a),a=t)}catch(e){n.onError?.(e)}}),{emitOnBegin:t,interval:s}))):(()=>{let t=!0,r=()=>t=!1;return(async()=>{try{const{unsubscribe:o}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!t)return;const r=(0,H.y_)(e.result?.number);n(r,a),a=r},onError(e){i?.(e)}});r=o,t||r()}catch(e){i?.(e)}})(),r})()}function vr(e){return{call:t=>(0,mt.R)(e,t),createBlockFilter:()=>async function(e){const t=Rt(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}(e),createContractEventFilter:t=>$t(e,t),createEventFilter:t=>Bt(e,t),createPendingTransactionFilter:()=>Ut(e),estimateContractGas:t=>async function(e,{abi:t,address:r,args:n,functionName:i,...o}){const s=(0,Ue.R)({abi:t,args:n,functionName:i});try{return await se(e,Se,"estimateGas")({data:s,to:r,...o})}catch(e){const s=o.account?(0,$.T)(o.account):void 0;throw gt(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:s?.address})}}(e,t),estimateGas:t=>Se(e,t),getBalance:t=>async function(e,{address:t,blockNumber:r,blockTag:n="latest"}){const i=r?(0,q.eC)(r):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||n]});return BigInt(o)}(e,t),getBlock:t=>be(e,t),getBlockNumber:t=>Ht(e,t),getBlockTransactionCount:t=>async function(e,{blockHash:t,blockNumber:r,blockTag:n="latest"}={}){const i=void 0!==r?(0,q.eC)(r):void 0;let o;return o=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[i||n]}),(0,H.ly)(o)}(e,t),getBytecode:t=>async function(e,{address:t,blockNumber:r,blockTag:n="latest"}){const i=void 0!==r?(0,q.eC)(r):void 0,o=await e.request({method:"eth_getCode",params:[t,i||n]});if("0x"!==o)return o}(e,t),getChainId:()=>V(e),getContractEvents:t=>Qt(e,t),getEnsAddress:t=>async function(e,{blockNumber:t,blockTag:r,coinType:n,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=(0,nt.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const o=(0,Ue.R)({abi:tt.X$,functionName:"addr",...null!=n?{args:[ht(i),BigInt(n)]}:{args:[ht(i)]}}),a=await se(e,yt,"readContract")({address:s,abi:tt.k3,functionName:"resolve",args:[(0,q.NC)(pt(i)),o],blockNumber:t,blockTag:r});if("0x"===a[0])return null;const c=(0,rt.k)({abi:tt.X$,args:null!=n?[ht(i),BigInt(n)]:void 0,functionName:"addr",data:a[0]});return"0x"===c||"0x00"===(0,it.f)(c)?null:c}catch(e){if(at(e,"resolve"))return null;throw e}}(e,t),getEnsAvatar:t=>async function(e,{blockNumber:t,blockTag:r,gatewayUrls:n,name:i,universalResolverAddress:o}){const s=await se(e,Ot,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await async function(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?async function(e,{gatewayUrls:t,record:r}){const n=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[r,n,i]=t.split("/"),[o,s]=r.split(":"),[a,c]=n.split(":");if(!o||"eip155"!==o.toLowerCase())throw new bt({reason:"Only EIP-155 supported"});if(!s)throw new bt({reason:"Chain ID not found"});if(!c)throw new bt({reason:"Contract address not found"});if(!i)throw new bt({reason:"Token ID not found"});if(!a)throw new bt({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:c,tokenID:i}}(r),i=await async function(e,{nft:t}){if("erc721"===t.namespace)return yt(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return yt(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new _t({namespace:t.namespace})}(e,{nft:n}),{uri:o,isOnChain:s,isEncoded:a}=It({uri:i,gatewayUrls:t});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const e=a?atob(o.replace("data:application/json;base64,","")):o;return Pt({uri:kt(JSON.parse(e)),gatewayUrls:t})}let c=n.tokenID;return"erc1155"===n.namespace&&(c=c.replace("0x","").padStart(64,"0")),async function({gatewayUrls:e,uri:t}){try{const r=await fetch(t).then((e=>e.json()));return await Pt({gatewayUrls:e,uri:kt(r)})}catch{throw new vt({uri:t})}}({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,c)})}(e,{gatewayUrls:t,record:r}):Pt({uri:r,gatewayUrls:t})}(e,{record:s,gatewayUrls:n})}catch{return null}}(e,t),getEnsName:t=>async function(e,{address:t,blockNumber:r,blockTag:n,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=(0,nt.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}const s=`${t.toLowerCase().substring(2)}.addr.reverse`;try{const[i,a]=await se(e,yt,"readContract")({address:o,abi:tt.du,functionName:"reverse",args:[(0,q.NC)(pt(s))],blockNumber:r,blockTag:n});return t.toLowerCase()!==a.toLowerCase()?null:i}catch(e){if(at(e,"reverse"))return null;throw e}}(e,t),getEnsResolver:t=>async function(e,{blockNumber:t,blockTag:r,name:n,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=(0,nt.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[s]=await se(e,yt,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,q.NC)(pt(n))],blockNumber:t,blockTag:r});return s}(e,t),getEnsText:t=>Ot(e,t),getFeeHistory:t=>async function(e,{blockCount:t,blockNumber:r,blockTag:n="latest",rewardPercentiles:i}){const o=r?(0,q.eC)(r):void 0;return{baseFeePerGas:(s=await e.request({method:"eth_feeHistory",params:[(0,q.eC)(t),o||n,i]})).baseFeePerGas.map((e=>BigInt(e))),gasUsedRatio:s.gasUsedRatio,oldestBlock:BigInt(s.oldestBlock),reward:s.reward?.map((e=>e.map((e=>BigInt(e)))))};var s}(e,t),estimateFeesPerGas:t=>async function(e,t){return Ee(e,t)}(e,t),getFilterChanges:e=>Jt(0,e),getFilterLogs:e=>async function(e,{filter:t}){const r=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map((e=>{try{const{eventName:n,args:i}="abi"in t&&t.abi?Gt({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return Kt(e,{args:i,eventName:n})}catch(r){let n,i;if(r instanceof G.SM||r instanceof G.Gy){if("strict"in t&&t.strict)return;n=r.abiItem.name,i=r.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Kt(e,{args:i?[]:{},eventName:n})}})).filter(Boolean)}(0,e),getGasPrice:()=>ve(e),getLogs:t=>Yt(e,t),getProof:t=>async function(e,{address:t,blockNumber:r,blockTag:n,storageKeys:i}){const o=n??"latest",s=void 0!==r?(0,q.eC)(r):void 0;return a=await e.request({method:"eth_getProof",params:[t,i,s||o]}),{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?(0,H.ly)(a.nonce):void 0,storageProof:a.storageProof?(c=a.storageProof,c.map((e=>({...e,value:BigInt(e.value)})))):void 0};var a,c}(e,t),estimateMaxPriorityFeePerGas:t=>async function(e,t){return _e(e,t)}(e,t),getStorageAt:t=>async function(e,{address:t,blockNumber:r,blockTag:n="latest",slot:i}){const o=void 0!==r?(0,q.eC)(r):void 0;return await e.request({method:"eth_getStorageAt",params:[t,i,o||n]})}(e,t),getTransaction:t=>Xt(e,t),getTransactionConfirmations:t=>async function(e,{hash:t,transactionReceipt:r}){const[n,i]=await Promise.all([se(e,Ht,"getBlockNumber")({}),t?se(e,Xt,"getBlockNumber")({hash:t}):void 0]),o=r?.blockNumber||i?.blockNumber;return o?n-o+1n:0n}(e,t),getTransactionCount:t=>Ae(e,t),getTransactionReceipt:t=>nr(e,t),multicall:t=>async function(e,t){const{allowFailure:r=!0,batchSize:n,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=t,c=n??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024);let l=a;if(!l){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");l=(0,nt.L)({blockNumber:i,chain:e.chain,contract:"multicall3"})}const u=[[]];let h=0,d=0;for(let e=0;e<s.length;e++){const{abi:t,address:n,args:i,functionName:o}=s[e];try{const e=(0,Ue.R)({abi:t,args:i,functionName:o});d+=(e.length-2)/2,c>0&&d>c&&u[h].length>0&&(h++,d=(e.length-2)/2,u[h]=[]),u[h]=[...u[h],{allowFailure:!0,callData:e,target:n}]}catch(e){const s=gt(e,{abi:t,address:n,args:i,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw s;u[h]=[...u[h],{allowFailure:!0,callData:"0x",target:n}]}}const p=await Promise.allSettled(u.map((t=>se(e,yt,"readContract")({abi:tt.F8,address:l,args:[t],blockNumber:i,blockTag:o,functionName:"aggregate3"})))),f=[];for(let e=0;e<p.length;e++){const t=p[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<u[e].length;r++)f.push({status:"failure",error:t.reason,result:void 0});continue}const n=t.value;for(let t=0;t<n.length;t++){const{returnData:i,success:o}=n[t],{callData:a}=u[e][t],{abi:c,address:l,functionName:h,args:d}=s[f.length];try{if("0x"===a)throw new G.wb;if(!o)throw new st.VQ({data:i});const e=(0,rt.k)({abi:c,args:d,data:i,functionName:h});f.push(r?{result:e,status:"success"}:e)}catch(e){const t=gt(e,{abi:c,address:l,args:d,docsPath:"/docs/contract/multicall",functionName:h});if(!r)throw t;f.push({error:t,result:void 0,status:"failure"})}}}if(f.length!==s.length)throw new g.G("multicall results mismatch");return f}(e,t),prepareTransactionRequest:t=>ke(e,t),readContract:t=>yt(e,t),sendRawTransaction:t=>Pe(e,t),simulateContract:t=>async function(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...s}){const a=s.account?(0,$.T)(s.account):void 0,c=(0,Ue.R)({abi:t,args:n,functionName:o});try{const{data:a}=await se(e,mt.R,"call")({batch:!1,data:`${c}${i?i.replace("0x",""):""}`,to:r,...s});return{result:(0,rt.k)({abi:t,args:n,functionName:o,data:a||"0x"}),request:{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...s}}}catch(e){throw gt(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a?.address})}}(e,t),verifyMessage:t=>async function(e,{address:t,message:r,signature:n,...i}){const o=function(e,t){const r="string"==typeof e?(0,ct.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,ct.O0)(e.raw),n=(0,ct.qX)(`${or}${r.length}`);return(0,lt.w)((0,Z.zo)([n,r]),void 0)}(r);return ar(e,{address:t,hash:o,signature:n,...i})}(e,t),verifyTypedData:t=>async function(e,{address:t,signature:r,message:n,primaryType:i,types:o,domain:s,...a}){return ar(e,{address:t,hash:cr({message:n,primaryType:i,types:o,domain:s}),signature:r,...a})}(e,t),uninstallFilter:e=>ir(0,e),waitForTransactionReceipt:t=>async function(e,{confirmations:t=1,hash:r,onReplaced:n,pollingInterval:i=e.pollingInterval,timeout:o}){const s=(0,Me.P)(["waitForTransactionReceipt",e.uid,r]);let a,c,l,u=!1;return new Promise(((h,d)=>{o&&setTimeout((()=>d(new re.mc({hash:r}))),o);const p=yr(s,{onReplaced:n,resolve:h,reject:d},(n=>{const o=se(e,br,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(i){if(u)return;let s=i;const h=e=>{o(),e(),p()};try{if(l){if(t>1&&(!l.blockNumber||s-l.blockNumber+1n<t))return;return void h((()=>n.resolve(l)))}if(a||(u=!0,await He((async()=>{a=await se(e,Xt,"getTransaction")({hash:r}),a.blockNumber&&(s=a.blockNumber)}),{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await se(e,nr,"getTransactionReceipt")({hash:r}),t>1&&(!l.blockNumber||s-l.blockNumber+1n<t))return;h((()=>n.resolve(l)))}catch(r){if(a&&(r instanceof re.Bh||r instanceof re.Yb))try{c=a,u=!0;const r=await He((()=>se(e,be,"getBlock")({blockNumber:s,includeTransactions:!0})),{delay:({count:e})=>200*~~(1<<e),retryCount:6,shouldRetry:({error:e})=>e instanceof de});u=!1;const i=r.transactions.find((({from:e,nonce:t})=>e===c.from&&t===c.nonce));if(!i)return;if(l=await se(e,nr,"getTransactionReceipt")({hash:i.hash}),t>1&&(!l.blockNumber||s-l.blockNumber+1n<t))return;let o="replaced";i.to===c.to&&i.value===c.value?o="repriced":i.from===i.to&&0n===i.value&&(o="cancelled"),h((()=>{n.onReplaced?.({reason:o,replacedTransaction:c,transaction:i,transactionReceipt:l}),n.resolve(l)}))}catch(e){h((()=>n.reject(e)))}else h((()=>n.reject(r)))}}})}))}))}(e,t),watchBlocks:t=>function(e,{blockTag:t="latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:c=e.pollingInterval}){const l=void 0!==a?a:"webSocket"!==e.transport.type,u=s??!1;let h;return l?yr((0,Me.P)(["watchBlocks",e.uid,r,n,u,c]),{onBlock:i,onError:o},(i=>wr((async()=>{try{const n=await se(e,be,"getBlock")({blockTag:t,includeTransactions:u});if(n.number&&h?.number){if(n.number===h.number)return;if(n.number-h.number>1&&r)for(let t=h?.number+1n;t<n.number;t++){const r=await se(e,be,"getBlock")({blockNumber:t,includeTransactions:u});i.onBlock(r,h),h=r}}(!h?.number||"pending"===t&&!n?.number||n.number&&n.number>h.number)&&(i.onBlock(n,h),h=n)}catch(e){i.onError?.(e)}}),{emitOnBegin:n,interval:c}))):(()=>{let t=!0,r=()=>t=!1;return(async()=>{try{const{unsubscribe:n}=await e.transport.subscribe({params:["newHeads"],onData(r){if(!t)return;const n=(e.chain?.formatters?.block?.format||ye)(r.result);i(n,h),h=n},onError(e){o?.(e)}});r=n,t||r()}catch(e){o?.(e)}})(),r})()}(e,t),watchBlockNumber:t=>br(e,t),watchContractEvent:t=>function(e,{abi:t,address:r,args:n,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:c,pollingInterval:l=e.pollingInterval,strict:u}){return(void 0!==c?c:"webSocket"!==e.transport.type)?(()=>{const c=(0,Me.P)(["watchContractEvent",r,n,i,e.uid,o,l]),h=u??!1;return yr(c,{onLogs:a,onError:s},(s=>{let a,c,u=!1;const d=wr((async()=>{if(u)try{let l;if(c)l=await se(e,Jt,"getFilterChanges")({filter:c});else{const i=await se(e,Ht,"getBlockNumber")({});l=a&&a!==i?await se(e,Qt,"getContractEvents")({abi:t,address:r,args:n,eventName:o,fromBlock:a+1n,toBlock:i,strict:h}):[],a=i}if(0===l.length)return;if(i)s.onLogs(l);else for(const e of l)s.onLogs([e])}catch(e){c&&e instanceof C&&(u=!1),s.onError?.(e)}else{try{c=await se(e,$t,"createContractEventFilter")({abi:t,address:r,args:n,eventName:o,strict:h})}catch{}u=!0}}),{emitOnBegin:!0,interval:l});return async()=>{c&&await se(e,ir,"uninstallFilter")({filter:c}),d()}}))})():(()=>{let i=!0,c=()=>i=!1;return(async()=>{try{const l=o?Lt({abi:t,eventName:o,args:n}):[],{unsubscribe:h}=await e.transport.subscribe({params:["logs",{address:r,topics:l}],onData(e){if(!i)return;const r=e.result;try{const{eventName:e,args:n}=Gt({abi:t,data:r.data,topics:r.topics,strict:u}),i=Kt(r,{args:n,eventName:e});a([i])}catch(e){let t,n;if(e instanceof G.SM||e instanceof G.Gy){if(u)return;t=e.abiItem.name,n=e.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}const i=Kt(r,{args:n?[]:{},eventName:t});a([i])}},onError(e){s?.(e)}});c=h,i||c()}catch(e){s?.(e)}})(),c})()}(e,t),watchEvent:t=>function(e,{address:t,args:r,batch:n=!0,event:i,events:o,onError:s,onLogs:a,poll:c,pollingInterval:l=e.pollingInterval,strict:u}){const h=void 0!==c?c:"webSocket"!==e.transport.type,d=u??!1;return h?yr((0,Me.P)(["watchEvent",t,r,n,e.uid,i,l]),{onLogs:a,onError:s},(s=>{let a,c,u=!1;const h=wr((async()=>{if(u)try{let l;if(c)l=await se(e,Jt,"getFilterChanges")({filter:c});else{const n=await se(e,Ht,"getBlockNumber")({});l=a&&a!==n?await se(e,Yt,"getLogs")({address:t,args:r,event:i,events:o,fromBlock:a+1n,toBlock:n}):[],a=n}if(0===l.length)return;if(n)s.onLogs(l);else for(const e of l)s.onLogs([e])}catch(e){c&&e instanceof C&&(u=!1),s.onError?.(e)}else{try{c=await se(e,Bt,"createEventFilter")({address:t,args:r,event:i,events:o,strict:d})}catch{}u=!0}}),{emitOnBegin:!0,interval:l});return async()=>{c&&await se(e,ir,"uninstallFilter")({filter:c}),h()}})):(()=>{let n=!0,c=()=>n=!1;return(async()=>{try{const l=o??(i?[i]:void 0);let h=[];l&&(h=[l.flatMap((e=>Lt({abi:[e],eventName:e.name,args:r})))],i&&(h=h[0]));const{unsubscribe:p}=await e.transport.subscribe({params:["logs",{address:t,topics:h}],onData(e){if(!n)return;const t=e.result;try{const{eventName:e,args:r}=Gt({abi:l,data:t.data,topics:t.topics,strict:d}),n=Kt(t,{args:r,eventName:e});a([n])}catch(e){let r,n;if(e instanceof G.SM||e instanceof G.Gy){if(u)return;r=e.abiItem.name,n=e.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}const i=Kt(t,{args:n?[]:{},eventName:r});a([i])}},onError(e){s?.(e)}});c=p,n||c()}catch(e){s?.(e)}})(),c})()}(e,t),watchPendingTransactions:t=>function(e,{batch:t=!0,onError:r,onTransactions:n,poll:i,pollingInterval:o=e.pollingInterval}){return(void 0!==i?i:"webSocket"!==e.transport.type)?yr((0,Me.P)(["watchPendingTransactions",e.uid,t,o]),{onTransactions:n,onError:r},(r=>{let n;const i=wr((async()=>{try{if(!n)try{return void(n=await se(e,Ut,"createPendingTransactionFilter")({}))}catch(e){throw i(),e}const o=await se(e,Jt,"getFilterChanges")({filter:n});if(0===o.length)return;if(t)r.onTransactions(o);else for(const e of o)r.onTransactions([e])}catch(e){r.onError?.(e)}}),{emitOnBegin:!0,interval:o});return async()=>{n&&await se(e,ir,"uninstallFilter")({filter:n}),i()}})):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{const{unsubscribe:o}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!t)return;const r=e.result;n([r])},onError(e){r?.(e)}});i=o,t||i()}catch(e){r?.(e)}})(),i})()}(e,t)}}function _r(e){const{key:t="public",name:r="Public Client"}=e;return W({...e,key:t,name:r,type:"publicClient"}).extend(vr)}function Er(e,t={}){const{key:r="fallback",name:n="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=t;return({chain:t,pollingInterval:a=4e3,timeout:c})=>{let l=e,u=()=>{};const h=Ge({key:r,name:n,async request({method:e,params:r}){const n=async(i=0)=>{const o=l[i]({chain:t,retryCount:0,timeout:c});try{const t=await o.request({method:e,params:r});return u({method:e,params:r,response:t,transport:o,status:"success"}),t}catch(t){if(u({error:t,method:e,params:r,transport:o,status:"error"}),Ve(t))throw t;if(i===l.length-1)throw t;return n(i+1)}};return n()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:e=>u=e,transports:l.map((e=>e({chain:t,retryCount:0})))});if(i){const e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:r,sampleCount:n=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:c=.3}=s,l=[],u=async()=>{const s=await Promise.all(o.map((async t=>{const r=t({chain:e,retryCount:0,timeout:i}),n=Date.now();let o,s;try{await r.request({method:"net_listening"}),s=1}catch{s=0}finally{o=Date.now()}return{latency:o-n,success:s}})));l.push(s),l.length>n&&l.shift();const h=Math.max(...l.map((e=>Math.max(...e.map((({latency:e})=>e)))))),d=o.map(((e,t)=>{const r=l.map((e=>e[t].latency)),n=1-r.reduce(((e,t)=>e+t),0)/r.length/h,i=l.map((e=>e[t].success)),o=i.reduce(((e,t)=>e+t),0)/i.length;return 0===o?[0,t]:[c*n+a*o,t]})).sort(((e,t)=>t[0]-e[0]));r(d.map((([,e])=>o[e]))),await We(t),u()};u()}({chain:t,interval:e.interval??a,onTransports:e=>l=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:l,weights:e.weights})}return h}}class xr extends g.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var Cr=i(2357);const Sr=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}();function Ar(e,{errorInstance:t=new Error("timed out"),timeout:r,signal:n}){return new Promise(((i,o)=>{(async()=>{let s;try{const a=new AbortController;r>0&&(s=setTimeout((()=>{n?a.abort():o(t)}),r)),i(await e({signal:a?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(s)}})()}))}let Ir=0;const kr=new Map;async function Pr(e){let t=kr.get(e);if(t)return t;const{schedule:r}=(0,Cr.S)({id:e,fn:async()=>{const r=new Sr(e),n=new Map,i=new Map,o=({data:e})=>{const t=JSON.parse(e),r="eth_subscription"===t.method,o=r?t.params.subscription:t.id,s=r?i:n,a=s.get(o);a&&a({data:e}),r||s.delete(o)},s=()=>{kr.delete(e),r.removeEventListener("close",s),r.removeEventListener("message",o)};return r.addEventListener("close",s),r.addEventListener("message",o),r.readyState===Sr.CONNECTING&&await new Promise(((e,t)=>{r&&(r.onopen=e,r.onerror=t)})),t=Object.assign(r,{requests:n,subscriptions:i}),kr.set(e,t),[t]}}),[n,[i]]=await r();return i}const Or={http:async function(e,{body:t,fetchOptions:r={},timeout:n=1e4}){const{headers:i,method:o,signal:s}=r;try{const a=await Ar((async({signal:a})=>await fetch(e,{...r,body:Array.isArray(t)?(0,Me.P)(t.map((e=>({jsonrpc:"2.0",id:e.id??Ir++,...e})))):(0,Me.P)({jsonrpc:"2.0",id:t.id??Ir++,...t}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(n>0?a:void 0)})),{errorInstance:new m.W5({body:t,url:e}),timeout:n,signal:!0});let c;if(c=a.headers.get("Content-Type")?.startsWith("application/json")?await a.json():await a.text(),!a.ok)throw new m.Gg({body:t,details:(0,Me.P)(c.error)||a.statusText,headers:a.headers,status:a.status,url:e});return c}catch(r){if(r instanceof m.Gg)throw r;if(r instanceof m.W5)throw r;throw new m.Gg({body:t,details:r.message,url:e})}},webSocket:function(e,{body:t,onResponse:r}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new m.c9({body:t,url:e.url,details:"Socket is closed."});const n=Ir++,i=({data:o})=>{const s=JSON.parse(o);"number"==typeof s.id&&n!==s.id||(r?.(s),"eth_subscribe"===t.method&&"string"==typeof s.result&&e.subscriptions.set(s.result,i),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(n,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:n})),e},webSocketAsync:async function(e,{body:t,timeout:r=1e4}){return Ar((()=>new Promise((r=>Or.webSocket(e,{body:t,onResponse:r})))),{errorInstance:new m.W5({body:t,url:e.url}),timeout:r})}};var Rr=i(4192);function Mr(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;const i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(n=r.getItem(e))?n:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}const Nr=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then:e=>Nr(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>Nr(t)(e)}}},Tr=e=>{let t;const r=new Set,n=(e,n)=>{const i="function"==typeof e?e(t):e;if(!Object.is(i,t)){const e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach((r=>r(t,e)))}},i=()=>t,o={setState:n,getState:i,getInitialState:()=>s,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},s=t=e(n,i,o);return o};var jr=i(5229);function Lr(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,n]of e)if(!Object.is(n,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}var Dr=class extends Error{constructor({activeChain:e,targetChain:t}){super(`Chain mismatch: Expected "${t}", received "${e}".`),this.name="ChainMismatchError"}},$r=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},Br=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},Ur=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},Fr=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},zr=(e,{find:t,replace:r})=>e&&t(e)?r(e):"object"!=typeof e?e:Array.isArray(e)?e.map((e=>zr(e,{find:t,replace:r}))):e instanceof Object?Object.entries(e).reduce(((e,[n,i])=>({...e,[n]:zr(i,{find:t,replace:r})})),{}):e;function Wr(e){const t=JSON.parse(e),r=zr(t,{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return r}function Hr(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(Rr.Bd[e])}function Vr(e,t){return e.slice(0,t).join(".")||"."}function qr(e,t){const{length:r}=e;for(let n=0;n<r;++n)if(e[n]===t)return n+1;return 0}function Gr(e,t,r,n){return JSON.stringify(e,function(e,t){const r="function"==typeof t,n=[],i=[];return function(o,s){if("object"==typeof s)if(n.length){const e=qr(n,this);0===e?n[n.length]=this:(n.splice(e),i.splice(e)),i[i.length]=o;const a=qr(n,s);if(0!==a)return r?t.call(this,o,s,Vr(i,a)):`[ref=${Vr(i,a)}]`}else n[0]=s,i[0]=o;return e.call(this,o,s)}}(((e,r)=>{const n="bigint"==typeof r?`#bigint.${r.toString()}`:r;return t?.(e,n)||n}),n),r??void 0)}var Zr={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function Kr({deserialize:e=Wr,key:t="wagmi",serialize:r=Gr,storage:n}){return{...n,getItem:(r,i=null)=>{const o=n.getItem(`${t}.${r}`);try{return o?e(o):i}catch(e){return console.warn(e),i}},setItem:(e,i)=>{if(null===i)n.removeItem(`${t}.${e}`);else try{n.setItem(`${t}.${e}`,r(i))}catch(e){console.error(e)}},removeItem:e=>n.removeItem(`${t}.${e}`)}}var Yr,Qr,Jr,Xr,en,tn="store",rn=class{constructor({autoConnect:e=!1,connectors:t=[new Ye],publicClient:r,storage:n=Kr({storage:"undefined"!=typeof window?window.localStorage:Zr}),logger:i={warn:console.warn},webSocketPublicClient:o}){Xe(this,Jr),this.publicClients=new Map,this.webSocketPublicClients=new Map,Xe(this,Yr,void 0),Xe(this,Qr,void 0),this.args={autoConnect:e,connectors:t,logger:i,publicClient:r,storage:n,webSocketPublicClient:o};let s,a="disconnected";if(e)try{const e=n.getItem(tn),t=e?.state?.data;a=t?.account?"reconnecting":"connecting",s=t?.chain?.id}catch(e){}const c="function"==typeof t?t():t;var l,u,h,d;c.forEach((e=>e.setStorage(n))),this.store=(d=((e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),((e,t)=>(r,n,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1;const a=new Set,c=new Set;let l;try{l=o.getStorage()}catch(e){}if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...e)}),n,i);const u=Nr(o.serialize),h=()=>{const e=o.partialize({...n()});let t;const r=u({state:e,version:o.version}).then((e=>l.setItem(o.name,e))).catch((e=>{t=e}));if(t)throw t;return r},d=i.setState;i.setState=(e,t)=>{d(e,t),h()};const p=e(((...e)=>{r(...e),h()}),n,i);let f;const g=()=>{var e;if(!l)return;s=!1,a.forEach((e=>e(n())));const t=(null==(e=o.onRehydrateStorage)?void 0:e.call(o,n()))||void 0;return Nr(l.getItem.bind(l))(o.name).then((e=>{if(e)return o.deserialize(e)})).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return f=o.merge(e,null!=(t=n())?t:p),r(f,!0),h()})).then((()=>{null==t||t(f,void 0),s=!0,c.forEach((e=>e(f)))})).catch((e=>{null==t||t(void 0,e)}))};return i.persist={setOptions:e=>{o={...o,...e},e.getStorage&&(l=e.getStorage())},clearStorage:()=>{null==l||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:e=>(a.add(e),()=>{a.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},g(),f||p})(e,t)):((e,t)=>(r,n,i)=>{let o={storage:Mr((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1;const a=new Set,c=new Set;let l=o.storage;if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...e)}),n,i);const u=()=>{const e=o.partialize({...n()});return l.setItem(o.name,{state:e,version:o.version})},h=i.setState;i.setState=(e,t)=>{h(e,t),u()};const d=e(((...e)=>{r(...e),u()}),n,i);let p;i.getInitialState=()=>d;const f=()=>{var e,t;if(!l)return;s=!1,a.forEach((e=>{var t;return e(null!=(t=n())?t:d)}));const i=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=n())?e:d))||void 0;return Nr(l.getItem.bind(l))(o.name).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return p=o.merge(e,null!=(t=n())?t:d),r(p,!0),u()})).then((()=>{null==i||i(p,void 0),p=n(),s=!0,c.forEach((e=>e(p)))})).catch((e=>{null==i||i(void 0,e)}))};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(l=e.storage)},clearStorage:()=>{null==l||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>f(),hasHydrated:()=>s,onHydrate:e=>(a.add(e),()=>{a.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||f(),p||d})(e,t))((()=>({connectors:c,publicClient:this.getPublicClient({chainId:s}),status:a,webSocketPublicClient:this.getWebSocketPublicClient({chainId:s})})),{name:tn,storage:n,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}),(h=(e,t,r)=>{const n=r.subscribe;return r.subscribe=(e,t,i)=>{let o=e;if(t){const n=(null==i?void 0:i.equalityFn)||Object.is;let s=e(r.getState());o=r=>{const i=e(r);if(!n(s,i)){const e=s;t(s=i,e)}},(null==i?void 0:i.fireImmediately)&&t(s,s)}return n(o)},d(e,t,r)})?Tr(h):Tr),this.storage=n,et(this,Qr,n?.getItem("wallet")),(this,l=Jr,u=Xr,Qe(this,l,"access private method"),u).call(this),e&&"undefined"!=typeof window&&setTimeout((async()=>await this.autoConnect()),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState((e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"})))}async destroy(){this.connector&&await(this.connector.disconnect?.()),et(this,Yr,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Je(this,Yr))return;et(this,Yr,!0),this.setState((e=>({...e,status:e.data?.account?"reconnecting":"connecting"})));const e=Je(this,Qr)?[...this.connectors].sort((e=>e.id===Je(this,Qr)?-1:1)):this.connectors;let t=!1;for(const r of e){if(!r.ready||!r.isAuthorized)continue;if(!await r.isAuthorized())continue;const e=await r.connect();this.setState((t=>({...t,connector:r,chains:r?.chains,data:e,status:"connected"}))),t=!0;break}return t||this.setState((e=>({...e,data:void 0,status:"disconnected"}))),et(this,Yr,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t="function"==typeof e?e():e;t.forEach((e=>e.setStorage(this.args.storage))),this.setState((e=>({...e,connectors:t})))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e)return t;if(t=this.publicClients.get(e??-1),t)return t;const{publicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,this.publicClients.set(e??-1,t),t}setPublicClient(e){const t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState((e=>({...e,publicClient:this.getPublicClient({chainId:t})})))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e)return t;if(t=this.webSocketPublicClients.get(e??-1),t)return t;const{webSocketPublicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){const t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState((e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})})))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function nn(){if(!en)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return en}async function on({chainId:e,connector:t}){const r=nn(),n=r.connector;if(n&&t.id===n.id)throw new Br;try{r.setState((e=>({...e,status:"connecting"})));const n=await t.connect({chainId:e});return r.setLastUsedConnector(t.id),r.setState((e=>({...e,connector:t,chains:t?.chains,data:n,status:"connected"}))),r.storage.setItem("connected",!0),{...n,connector:t}}catch(e){throw r.setState((e=>({...e,status:e.connector?"connected":"disconnected"}))),e}}Yr=new WeakMap,Qr=new WeakMap,Jr=new WeakSet,Xr=function(){const e=e=>{this.setState((t=>({...t,data:{...t.data,...e}})))},t=()=>{this.clearState()},r=e=>{this.setState((t=>({...t,error:e})))};this.store.subscribe((({connector:e})=>e),((n,i)=>{i?.off?.("change",e),i?.off?.("disconnect",t),i?.off?.("error",r),n&&(n.on?.("change",e),n.on?.("disconnect",t),n.on?.("error",r))}));const{publicClient:n,webSocketPublicClient:i}=this.args;("function"==typeof n||"function"==typeof i)&&this.store.subscribe((({data:e})=>e?.chain?.id),(e=>{this.setState((t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})})))}))};var sn=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],an=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function cn({chainId:e}={}){const t=nn();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function ln({chainId:e}={}){const t=nn();return await(t.connector?.getWalletClient?.({chainId:e}))||null}async function un({address:e,account:t,chainId:r,abi:n,args:i,functionName:o,blockNumber:s,blockTag:a}){return cn({chainId:r}).readContract({abi:n,address:e,account:t,functionName:o,args:i,blockNumber:s,blockTag:a})}async function hn({contracts:e,blockNumber:t,blockTag:r,...n}){const{allowFailure:i=!0}=n;try{const n=cn(),o=e.reduce(((e,t,r)=>{const i=t.chainId??n.chain.id;return{...e,[i]:[...e[i]||[],{contract:t,index:r}]}}),{}),s=()=>Object.entries(o).map((([e,n])=>async function({chainId:e,contracts:t,blockNumber:r,blockTag:n,...i}){const o=cn({chainId:e});if(!o.chains)throw new Ur;if(e&&o.chain.id!==e)throw new $r({chainId:e});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:r,blockTag:n,contracts:t})}({allowFailure:i,chainId:parseInt(e),contracts:n.map((({contract:e})=>e)),blockNumber:t,blockTag:r}))),a=(await Promise.all(s())).flat(),c=Object.values(o).flatMap((e=>e.map((({index:e})=>e))));return a.reduce(((e,t,r)=>(e&&(e[c[r]]=t),e)),[])}catch(n){if(n instanceof st.uq)throw n;const o=()=>e.map((e=>un({...e,blockNumber:t,blockTag:r})));return i?(await Promise.allSettled(o())).map((e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"})):await Promise.all(o())}}function dn(){const{data:e,connector:t,status:r}=nn();switch(r){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function pn(){const e=nn(),t=e.data?.chain?.id,r=e.chains??[],n=[...e.publicClient?.chains||[],...r].find((e=>e.id===t))??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...n,...e.data?.chain,id:t}:void 0,chains:r}}async function fn({domain:e,message:r,primaryType:n,types:i}){const o=await ln();if(!o)throw new t;const{chainId:s}=e;return s&&wn({chainId:s}),o.signTypedData({message:r,primaryType:n,types:i,domain:e})}async function gn({chainId:e}){const{connector:r}=nn();if(!r)throw new t;if(!r.switchChain)throw new Fr({connector:r});return r.switchChain(e)}function mn(e,{selector:t=(e=>e)}={}){const r=nn().subscribe((({data:e,connector:r,status:n})=>t({address:e?.account,connector:r,status:n})),(()=>e(dn())),{equalityFn:Lr});return r}function yn(e,{selector:t=(e=>e)}={}){const r=nn().subscribe((({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r})),(()=>e(pn())),{equalityFn:Lr});return r}function wn({chainId:e}){const{chain:t,chains:r}=pn(),n=t?.id;if(n&&e!==n)throw new Dr({activeChain:r.find((e=>e.id===n))?.name??`Chain ${n}`,targetChain:r.find((t=>t.id===e))?.name??`Chain ${e}`})}i(7294);let bn=null;var vn=i(914),_n=i(4145),En=i(242),xn=i(3215),Cn=i(5118),Sn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let An=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=vn.AccountController.state.address,this.balanceVal=vn.AccountController.state.balance,this.balanceSymbol=vn.AccountController.state.balanceSymbol,this.profileName=vn.AccountController.state.profileName,this.profileImage=vn.AccountController.state.profileImage,this.network=vn.NetworkController.state.caipNetwork,this.unsubscribe.push(vn.AccountController.subscribe((e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),vn.NetworkController.subscribeKey("caipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=vn.fz.getNetworkImage(this.network),t="show"===this.balance;return En.dy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${(0,Cn.o)(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${(0,Cn.o)(e)}
        avatarSrc=${(0,Cn.o)(this.profileImage)}
        balance=${t?vn.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){vn.IN.open()}};Sn([(0,xn.Cb)({type:Boolean})],An.prototype,"disabled",void 0),Sn([(0,xn.Cb)()],An.prototype,"balance",void 0),Sn([(0,xn.Cb)()],An.prototype,"charsStart",void 0),Sn([(0,xn.Cb)()],An.prototype,"charsEnd",void 0),Sn([(0,xn.SB)()],An.prototype,"address",void 0),Sn([(0,xn.SB)()],An.prototype,"balanceVal",void 0),Sn([(0,xn.SB)()],An.prototype,"balanceSymbol",void 0),Sn([(0,xn.SB)()],An.prototype,"profileName",void 0),Sn([(0,xn.SB)()],An.prototype,"profileImage",void 0),Sn([(0,xn.SB)()],An.prototype,"network",void 0),An=Sn([(0,_n.customElement)("w3m-account-button")],An);const In=En.iv`
  :host {
    display: block;
    width: max-content;
  }
`;var kn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pn=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=vn.AccountController.state.isConnected,this.unsubscribe.push(vn.AccountController.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?En.dy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,Cn.o)(this.balance)}
            .charsStart=${(0,Cn.o)(this.charsStart)}
            .charsEnd=${(0,Cn.o)(this.charsEnd)}
          >
          </w3m-account-button>
        `:En.dy`
          <w3m-connect-button
            size=${(0,Cn.o)(this.size)}
            label=${(0,Cn.o)(this.label)}
            loadingLabel=${(0,Cn.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Pn.styles=In,kn([(0,xn.Cb)({type:Boolean})],Pn.prototype,"disabled",void 0),kn([(0,xn.Cb)()],Pn.prototype,"balance",void 0),kn([(0,xn.Cb)()],Pn.prototype,"size",void 0),kn([(0,xn.Cb)()],Pn.prototype,"label",void 0),kn([(0,xn.Cb)()],Pn.prototype,"loadingLabel",void 0),kn([(0,xn.Cb)()],Pn.prototype,"charsStart",void 0),kn([(0,xn.Cb)()],Pn.prototype,"charsEnd",void 0),kn([(0,xn.SB)()],Pn.prototype,"isAccount",void 0),Pn=kn([(0,_n.customElement)("w3m-button")],Pn);var On=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Rn=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=vn.IN.state.open,this.loading=vn.IN.state.loading,this.unsubscribe.push(vn.IN.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return En.dy`
      <wui-connect-button
        size=${(0,Cn.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?vn.IN.close():this.loading||vn.IN.open()}};On([(0,xn.Cb)()],Rn.prototype,"size",void 0),On([(0,xn.Cb)()],Rn.prototype,"label",void 0),On([(0,xn.Cb)()],Rn.prototype,"loadingLabel",void 0),On([(0,xn.SB)()],Rn.prototype,"open",void 0),On([(0,xn.SB)()],Rn.prototype,"loading",void 0),Rn=On([(0,_n.customElement)("w3m-connect-button")],Rn),i(6541);const Mn=En.iv`
  :host {
    display: block;
    width: max-content;
  }
`;var Nn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Tn=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=vn.NetworkController.state.caipNetwork,this.connected=vn.AccountController.state.isConnected,this.loading=vn.IN.state.loading,this.unsubscribe.push(vn.NetworkController.subscribeKey("caipNetwork",(e=>this.network=e)),vn.AccountController.subscribeKey("isConnected",(e=>this.connected=e)),vn.IN.subscribeKey("loading",(e=>this.loading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return En.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        imageSrc=${(0,Cn.o)(vn.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||vn.IN.open({view:"Networks"})}};Tn.styles=Mn,Nn([(0,xn.Cb)({type:Boolean})],Tn.prototype,"disabled",void 0),Nn([(0,xn.SB)()],Tn.prototype,"network",void 0),Nn([(0,xn.SB)()],Tn.prototype,"connected",void 0),Nn([(0,xn.SB)()],Tn.prototype,"loading",void 0),Tn=Nn([(0,_n.customElement)("w3m-network-button")],Tn);const jn=En.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Ln=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Dn=class extends En.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=vn.RouterController.state.view,this.unsubscribe.push(vn.RouterController.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return En.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return En.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return En.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return En.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return En.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return En.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return En.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return En.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return En.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return En.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return En.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return En.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return En.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return En.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return En.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return En.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return En.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return En.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return En.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return En.dy`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`}}async onViewChange(e){const{history:t}=vn.RouterController.state;let r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};Dn.styles=jn,Ln([(0,xn.SB)()],Dn.prototype,"view",void 0),Dn=Ln([(0,_n.customElement)("w3m-router")],Dn);const $n=En.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var Bn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Un=class extends En.oi{constructor(){super(),this.usubscribe=[],this.address=vn.AccountController.state.address,this.profileImage=vn.AccountController.state.profileImage,this.profileName=vn.AccountController.state.profileName,this.balance=vn.AccountController.state.balance,this.balanceSymbol=vn.AccountController.state.balanceSymbol,this.network=vn.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(vn.AccountController.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):vn.IN.close()})),vn.NetworkController.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=vn.fz.getNetworkImage(this.network);return En.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,Cn.o)(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?_n.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):_n.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${vn.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,Cn.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=vn.MO.getConnectedConnector(),t=vn.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(vn.bq.SECURE_SITE)?null:En.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=vn.MO.getConnectedConnector(),t=vn.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;const r=t.provider.getEmail()??"";return En.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=vn.AccountController.state;return e?En.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=vn.NetworkController.state,t=!!e&&e.length>1,r=e?.find((({id:e})=>e===this.network?.id));return t||!r}onCopyAddress(){try{this.address&&(vn.j1.copyToClopboard(this.address),vn.SnackController.showSuccess("Address copied"))}catch{vn.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&vn.RouterController.push("Networks")}onTransactions(){vn.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),vn.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await vn.ConnectionController.disconnect(),vn.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),vn.IN.close()}catch{vn.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),vn.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=vn.AccountController.state;e&&vn.j1.openHref(e,"_blank")}onGoToUpgradeView(){vn.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),vn.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){vn.RouterController.push("UpdateEmailWallet",{email:e})}};Un.styles=$n,Bn([(0,xn.SB)()],Un.prototype,"address",void 0),Bn([(0,xn.SB)()],Un.prototype,"profileImage",void 0),Bn([(0,xn.SB)()],Un.prototype,"profileName",void 0),Bn([(0,xn.SB)()],Un.prototype,"balance",void 0),Bn([(0,xn.SB)()],Un.prototype,"balanceSymbol",void 0),Bn([(0,xn.SB)()],Un.prototype,"network",void 0),Bn([(0,xn.SB)()],Un.prototype,"disconecting",void 0),Un=Bn([(0,_n.customElement)("w3m-account-view")],Un);var Fn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let zn=class extends En.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=vn.j1.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return En.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?En.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:En.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return vn.j1.isMobile()?En.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){vn.RouterController.push("ConnectingWalletConnect")}};Fn([(0,xn.SB)()],zn.prototype,"search",void 0),zn=Fn([(0,_n.customElement)("w3m-all-wallets-view")],zn);const Wn=En.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Hn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Vn=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.connectors=vn.ConnectorController.state.connectors,this.unsubscribe.push(vn.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return En.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(vn.j1.isMobile())return null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?En.dy`
      <wui-list-wallet
        imageSrc=${(0,Cn.o)(vn.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=vn.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map((e=>En.dy`
        <wui-list-wallet
          imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}featuredTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{featured:e}=vn.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map((e=>En.dy`
        <wui-list-wallet
          imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}recentTemplate(){return vn.MO.getRecentWallets().map((e=>En.dy`
        <wui-list-wallet
          imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((e=>"ANNOUNCED"!==e.type?null:En.dy`
        <wui-list-wallet
          imageSrc=${(0,Cn.o)(vn.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `))}injectedTemplate(){return this.connectors.map((e=>"INJECTED"!==e.type?null:vn.ConnectionController.checkInstalled()?En.dy`
        <wui-list-wallet
          imageSrc=${(0,Cn.o)(vn.fz.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `:null))}externalTemplate(){const e=vn.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map((t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(vn.bq.CONNECTOR_RDNS_MAP[t.id])?null:En.dy`
        <wui-list-wallet
          imageSrc=${(0,Cn.o)(vn.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const e=vn.ApiController.state.count+vn.ApiController.state.featured.length,t=e<10?e:10*Math.floor(e/10),r=t<e?`${t}+`:`${t}`;return En.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{recommended:e}=vn.ApiController.state,{customWallets:t,featuredWalletIds:r}=vn.OptionsController.state,{connectors:n}=vn.ConnectorController.state,i=vn.MO.getRecentWallets(),o=n.filter((e=>"INJECTED"===e.type)),s=n.filter((e=>"ANNOUNCED"===e.type));if(r||t||!e.length)return null;const a=(s.length||Math.max(0,o.length-1))+i.length,c=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,c).map((e=>En.dy`
        <wui-list-wallet
          imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?vn.j1.isMobile()?vn.RouterController.push("AllWallets"):vn.RouterController.push("ConnectingWalletConnect"):vn.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:t}=vn.ConnectorController.state,r=vn.MO.getRecentWallets().map((e=>e.id));return e.filter((e=>!r.includes(e.id)&&!t.find((t=>t.id===e.rdns||t?.info?.rdns===e.rdns))))}onAllWallets(){vn.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),vn.RouterController.push("AllWallets")}onConnectWallet(e){vn.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Vn.styles=Wn,Hn([(0,xn.SB)()],Vn.prototype,"connectors",void 0),Vn=Hn([(0,_n.customElement)("w3m-connect-view")],Vn);const qn=En.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Gn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class Zn extends En.oi{constructor(){super(),this.wallet=vn.RouterController.state.data?.wallet,this.connector=vn.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=vn.fz.getWalletImage(this.wallet)??vn.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=vn.ConnectionController.state.wcUri,this.error=vn.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(vn.ConnectionController.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),vn.ConnectionController.subscribeKey("wcError",(e=>this.error=e)),vn.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),En.dy`
      <wui-flex
        data-error=${(0,Cn.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,Cn.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?En.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(vn.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=vn.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return En.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(vn.j1.copyToClopboard(this.uri),vn.SnackController.showSuccess("Link copied"))}catch{vn.SnackController.showError("Failed to copy")}}}Zn.styles=qn,Gn([(0,xn.SB)()],Zn.prototype,"uri",void 0),Gn([(0,xn.SB)()],Zn.prototype,"error",void 0),Gn([(0,xn.SB)()],Zn.prototype,"ready",void 0),Gn([(0,xn.SB)()],Zn.prototype,"showRetry",void 0),Gn([(0,xn.SB)()],Zn.prototype,"buffering",void 0),Gn([(0,xn.Cb)({type:Boolean})],Zn.prototype,"isMobile",void 0),Gn([(0,xn.Cb)()],Zn.prototype,"onRetry",void 0);const Kn={INJECTED:"browser",ANNOUNCED:"browser"};let Yn=class extends Zn{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");vn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:Kn[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&vn.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await vn.ConnectionController.connectExternal(this.connector),vn.yD.state.isSiweEnabled?vn.RouterController.push("ConnectingSiwe"):vn.IN.close(),vn.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){vn.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Yn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-connecting-external-view")],Yn);var Qn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Jn=class extends En.oi{constructor(){super(...arguments),this.dappName=vn.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return En.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,vn.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{vn.yD.setStatus("loading");const e=await vn.yD.signIn();return vn.yD.setStatus("success"),vn.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return vn.SnackController.showError("Signature declined"),vn.yD.setStatus("error"),vn.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=vn.AccountController.state;e?(await vn.ConnectionController.disconnect(),vn.IN.close()):vn.RouterController.push("Connect"),vn.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};Qn([(0,xn.SB)()],Jn.prototype,"isSigning",void 0),Jn=Qn([(0,_n.customElement)("w3m-connecting-siwe-view")],Jn);var Xn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ei=class extends En.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=vn.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),vn.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),En.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):En.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=vn.ConnectionController.state;if(e||vn.j1.isPairingExpired(t)){if(vn.ConnectionController.connectWalletConnect(),this.wallet){const e=vn.fz.getWalletImage(this.wallet);e&&vn.MO.setConnectedWalletImageUrl(e)}else{const e=vn.ConnectorController.state.connectors.find((e=>"WALLET_CONNECT"===e.type)),t=vn.fz.getConnectorImage(e);t&&vn.MO.setConnectedWalletImageUrl(t)}await vn.ConnectionController.state.wcPromise,this.finalizeConnection(),vn.yD.state.isSiweEnabled?vn.RouterController.push("ConnectingSiwe"):vn.IN.close()}}catch(e){vn.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),vn.ConnectionController.setWcError(!0),vn.j1.isAllowedRetry(this.lastRetry)&&(vn.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=vn.ConnectionController.state;e&&vn.MO.setWalletConnectDeepLink(e),t&&vn.MO.setWeb3ModalRecent(t),vn.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,o=n?.map((({injected_id:e})=>e)).filter(Boolean),s=i?[i]:o??[],a=s.length,c=e,l=r,u=vn.ConnectionController.checkInstalled(s),h=a&&u,d=t&&!vn.j1.isMobile();h&&this.platforms.push("browser"),c&&this.platforms.push(vn.j1.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),d&&this.platforms.push("desktop"),!h&&a&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return En.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return En.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return En.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return En.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return En.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return En.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?En.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Xn([(0,xn.SB)()],ei.prototype,"platform",void 0),Xn([(0,xn.SB)()],ei.prototype,"platforms",void 0),ei=Xn([(0,_n.customElement)("w3m-connecting-wc-view")],ei);let ti=class extends En.oi{constructor(){super(...arguments),this.wallet=vn.RouterController.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return En.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?En.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?En.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?En.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?En.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&vn.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&vn.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&vn.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&vn.j1.openHref(this.wallet.homepage,"_blank")}};ti=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-downloads-view")],ti);let ri=class extends En.oi{render(){return En.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{vn.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=vn.ApiController.state,{customWallets:r}=vn.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map((e=>En.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(e))}
          @click=${()=>{vn.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};ri=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-get-wallet-view")],ri);const ni=En.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ii=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let oi=class extends En.oi{constructor(){super(),this.network=vn.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return En.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,Cn.o)(vn.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:En.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await vn.NetworkController.switchActiveNetwork(this.network),vn.yD.state.isSiweEnabled||vn._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};oi.styles=ni,ii([(0,xn.SB)()],oi.prototype,"showRetry",void 0),ii([(0,xn.SB)()],oi.prototype,"error",void 0),oi=ii([(0,_n.customElement)("w3m-network-switch-view")],oi);const si=En.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var ai=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ci=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=vn.NetworkController.state.caipNetwork,this.unsubscribe.push(vn.NetworkController.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return En.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){vn.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),vn.RouterController.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=vn.NetworkController.state,n=e,i=t,o={};return i&&n&&(n.forEach(((e,t)=>{o[e]=t})),i.sort(((e,t)=>{const r=o[e.id],n=o[t.id];return void 0!==r&&void 0!==n?r-n:void 0!==r?-1:void 0!==n?1:0}))),i?.map((e=>En.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${(0,Cn.o)(vn.fz.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!r&&!n?.includes(e.id)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-card-select>
      `))}async onSwitchNetwork(e){const{isConnected:t}=vn.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=vn.NetworkController.state,{data:o}=vn.RouterController.state;t&&i?.id!==e.id?r?.includes(e.id)?(await vn.NetworkController.switchActiveNetwork(e),vn._4.navigateAfterNetworkSwitch()):n&&vn.RouterController.push("SwitchNetwork",{...o,network:e}):t||(vn.NetworkController.setCaipNetwork(e),vn.RouterController.push("Connect"))}};ci.styles=si,ai([(0,xn.SB)()],ci.prototype,"caipNetwork",void 0),ci=ai([(0,_n.customElement)("w3m-networks-view")],ci);var li=i(248);const ui=En.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var hi=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const di="last-transaction";let pi=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=vn.AccountController.state.address,this.transactions=vn.sl.state.transactions,this.transactionsByYear=vn.sl.state.transactionsByYear,this.loading=vn.sl.state.loading,this.empty=vn.sl.state.empty,this.next=vn.sl.state.next,this.unsubscribe.push(vn.AccountController.subscribe((e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,vn.sl.resetTransactions(),vn.sl.fetchTransactions(e.address))})),vn.sl.subscribe((e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})))}firstUpdated(){0===this.transactions.length&&vn.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return En.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map(((t,r)=>{const n=r===e.length-1,i=parseInt(t,10),o=_n.TransactionUtil.getTransactionGroupTitle(i),s=this.transactionsByYear[i];return s?En.dy`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(s,n)}
          </wui-flex>
        </wui-flex>
      `:null}))}templateRenderTransaction(e,t){const{date:r,descriptions:n,direction:i,isAllNFT:o,images:s,status:a,transfers:c,type:l}=this.getTransactionListItemProps(e),u=c?.length>1;return 2!==c?.length||o?u?c.map(((e,n)=>{const i=_n.TransactionUtil.getTransferDescription(e),o=t&&n===c.length-1;return En.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?di:""}
          status=${a}
          type=${l}
          .onlyDirectionIcon=${!0}
          .images=${[s?.[n]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`})):En.dy`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${t&&this.next?di:""}
        status=${a}
        type=${l}
        .images=${s}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `:En.dy`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${t&&this.next?di:""}
          status=${a}
          type=${l}
          .images=${s}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map(((r,n)=>{const i=t&&n===e.length-1;return En.dy`${this.templateRenderTransaction(r,i)}`}))}templateEmpty(){return En.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(En.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}createPaginationObserver(){const{projectId:e}=vn.OptionsController.state;this.paginationObserver=new IntersectionObserver((([t])=>{t?.isIntersecting&&!this.loading&&(vn.sl.fetchTransactions(this.address),vn.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${di}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=li.E.getRelativeDateFromNow(e?.metadata?.minedAt),r=_n.TransactionUtil.getTransactionDescriptions(e),n=e?.transfers,i=e?.transfers?.[0],o=Boolean(i)&&e?.transfers?.every((e=>Boolean(e.nft_info))),s=_n.TransactionUtil.getTransactionImages(n);return{date:t,direction:i?.direction,descriptions:r,isAllNFT:o,images:s,status:e.metadata?.status,transfers:n,type:e.metadata?.operationType}}};pi.styles=ui,hi([(0,xn.SB)()],pi.prototype,"address",void 0),hi([(0,xn.SB)()],pi.prototype,"transactions",void 0),hi([(0,xn.SB)()],pi.prototype,"transactionsByYear",void 0),hi([(0,xn.SB)()],pi.prototype,"loading",void 0),hi([(0,xn.SB)()],pi.prototype,"empty",void 0),hi([(0,xn.SB)()],pi.prototype,"next",void 0),pi=hi([(0,_n.customElement)("w3m-transactions-view")],pi);const fi=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let gi=class extends En.oi{render(){return En.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${fi}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{vn.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};gi=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-what-is-a-network-view")],gi);const mi=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let yi=class extends En.oi{render(){return En.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${mi}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){vn.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),vn.RouterController.push("GetWallet")}};yi=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-what-is-a-wallet-view")],yi);const wi=En.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,bi={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"};var vi,_i;!function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw new Error},e.arrayToEnum=e=>{const t={};for(const r of e)t[r]=r;return t},e.getValidEnumValues=t=>{const r=e.objectKeys(t).filter((e=>"number"!=typeof t[t[e]])),n={};for(const e of r)n[e]=t[e];return e.objectValues(n)},e.objectValues=t=>e.objectKeys(t).map((function(e){return t[e]})),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{const t=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e.find=(e,t)=>{for(const r of e)if(t(r))return r},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,t=" | "){return e.map((e=>"string"==typeof e?`'${e}'`:e)).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t}(vi||(vi={})),function(e){e.mergeShapes=(e,t)=>({...e,...t})}(_i||(_i={}));const Ei=vi.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),xi=e=>{switch(typeof e){case"undefined":return Ei.undefined;case"string":return Ei.string;case"number":return isNaN(e)?Ei.nan:Ei.number;case"boolean":return Ei.boolean;case"function":return Ei.function;case"bigint":return Ei.bigint;case"symbol":return Ei.symbol;case"object":return Array.isArray(e)?Ei.array:null===e?Ei.null:e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?Ei.promise:"undefined"!=typeof Map&&e instanceof Map?Ei.map:"undefined"!=typeof Set&&e instanceof Set?Ei.set:"undefined"!=typeof Date&&e instanceof Date?Ei.date:Ei.object;default:return Ei.unknown}},Ci=vi.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Si extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(e){return e.message},r={_errors:[]},n=e=>{for(const i of e.issues)if("invalid_union"===i.code)i.unionErrors.map(n);else if("invalid_return_type"===i.code)n(i.returnTypeError);else if("invalid_arguments"===i.code)n(i.argumentsError);else if(0===i.path.length)r._errors.push(t(i));else{let e=r,n=0;for(;n<i.path.length;){const r=i.path[n];n===i.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(i))):e[r]=e[r]||{_errors:[]},e=e[r],n++}}};return n(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,vi.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=(e=>e.message)){const t={},r=[];for(const n of this.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(e(n))):r.push(e(n));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}Si.create=e=>new Si(e);const Ai=(e,t)=>{let r;switch(e.code){case Ci.invalid_type:r=e.received===Ei.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case Ci.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,vi.jsonStringifyReplacer)}`;break;case Ci.unrecognized_keys:r=`Unrecognized key(s) in object: ${vi.joinValues(e.keys,", ")}`;break;case Ci.invalid_union:r="Invalid input";break;case Ci.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${vi.joinValues(e.options)}`;break;case Ci.invalid_enum_value:r=`Invalid enum value. Expected ${vi.joinValues(e.options)}, received '${e.received}'`;break;case Ci.invalid_arguments:r="Invalid function arguments";break;case Ci.invalid_return_type:r="Invalid function return type";break;case Ci.invalid_date:r="Invalid date";break;case Ci.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:vi.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case Ci.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case Ci.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case Ci.custom:r="Invalid input";break;case Ci.invalid_intersection_types:r="Intersection results could not be merged";break;case Ci.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case Ci.not_finite:r="Number must be finite";break;default:r=t.defaultError,vi.assertNever(e)}return{message:r}};let Ii=Ai;function ki(){return Ii}const Pi=e=>{const{data:t,path:r,errorMaps:n,issueData:i}=e,o=[...r,...i.path||[]],s={...i,path:o};let a="";const c=n.filter((e=>!!e)).slice().reverse();for(const e of c)a=e(s,{data:t,defaultError:a}).message;return{...i,path:o,message:i.message||a}};function Oi(e,t){const r=Pi({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,ki(),Ai].filter((e=>!!e))});e.common.issues.push(r)}class Ri{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const n of t){if("aborted"===n.status)return Mi;"dirty"===n.status&&e.dirty(),r.push(n.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const e of t)r.push({key:await e.key,value:await e.value});return Ri.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const n of t){const{key:t,value:i}=n;if("aborted"===t.status)return Mi;if("aborted"===i.status)return Mi;"dirty"===t.status&&e.dirty(),"dirty"===i.status&&e.dirty(),"__proto__"===t.value||void 0===i.value&&!n.alwaysSet||(r[t.value]=i.value)}return{status:e.value,value:r}}}const Mi=Object.freeze({status:"aborted"}),Ni=e=>({status:"dirty",value:e}),Ti=e=>({status:"valid",value:e}),ji=e=>"aborted"===e.status,Li=e=>"dirty"===e.status,Di=e=>"valid"===e.status,$i=e=>"undefined"!=typeof Promise&&e instanceof Promise;var Bi;!function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}(Bi||(Bi={}));class Ui{constructor(e,t,r,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=n}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Fi=(e,t)=>{if(Di(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Si(e.common.issues);return this._error=t,this._error}}};function zi(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:n,description:i}=e;if(t&&(r||n))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:i}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=n?n:t.defaultError}:{message:null!=r?r:t.defaultError},description:i}}class Wi{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return xi(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:xi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Ri,ctx:{common:e.parent.common,data:e.data,parsedType:xi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if($i(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const n={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xi(e)},i=this._parseSync({data:e,path:n.path,parent:n});return Fi(n,i)}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xi(e)},n=this._parse({data:e,path:r.path,parent:r}),i=await($i(n)?n:Promise.resolve(n));return Fi(r,i)}refine(e,t){const r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement(((t,n)=>{const i=e(t),o=()=>n.addIssue({code:Ci.custom,...r(t)});return"undefined"!=typeof Promise&&i instanceof Promise?i.then((e=>!!e||(o(),!1))):!!i||(o(),!1)}))}refinement(e,t){return this._refinement(((r,n)=>!!e(r)||(n.addIssue("function"==typeof t?t(r,n):t),!1)))}_refinement(e){return new Ro({schema:this,typeName:Wo.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Mo.create(this,this._def)}nullable(){return No.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ho.create(this,this._def)}promise(){return Oo.create(this,this._def)}or(e){return go.create([this,e],this._def)}and(e){return bo.create(this,e,this._def)}transform(e){return new Ro({...zi(this._def),schema:this,typeName:Wo.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t="function"==typeof e?e:()=>e;return new To({...zi(this._def),innerType:this,defaultValue:t,typeName:Wo.ZodDefault})}brand(){return new $o({typeName:Wo.ZodBranded,type:this,...zi(this._def)})}catch(e){const t="function"==typeof e?e:()=>e;return new jo({...zi(this._def),innerType:this,catchValue:t,typeName:Wo.ZodCatch})}describe(e){return new(0,this.constructor)({...this._def,description:e})}pipe(e){return Bo.create(this,e)}readonly(){return Uo.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Hi=/^c[^\s-]{8,}$/i,Vi=/^[a-z][a-z0-9]*$/,qi=/^[0-9A-HJKMNP-TV-Z]{26}$/,Gi=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Zi=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let Ki;const Yi=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Qi=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;class Ji extends Wi{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Ei.string){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.string,received:t.parsedType}),Mi}const t=new Ri;let r;for(const s of this._def.checks)if("min"===s.kind)e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),Oi(r,{code:Ci.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),t.dirty());else if("max"===s.kind)e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),Oi(r,{code:Ci.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),t.dirty());else if("length"===s.kind){const n=e.data.length>s.value,i=e.data.length<s.value;(n||i)&&(r=this._getOrReturnCtx(e,r),n?Oi(r,{code:Ci.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):i&&Oi(r,{code:Ci.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),t.dirty())}else if("email"===s.kind)Zi.test(e.data)||(r=this._getOrReturnCtx(e,r),Oi(r,{validation:"email",code:Ci.invalid_string,message:s.message}),t.dirty());else if("emoji"===s.kind)Ki||(Ki=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),Ki.test(e.data)||(r=this._getOrReturnCtx(e,r),Oi(r,{validation:"emoji",code:Ci.invalid_string,message:s.message}),t.dirty());else if("uuid"===s.kind)Gi.test(e.data)||(r=this._getOrReturnCtx(e,r),Oi(r,{validation:"uuid",code:Ci.invalid_string,message:s.message}),t.dirty());else if("cuid"===s.kind)Hi.test(e.data)||(r=this._getOrReturnCtx(e,r),Oi(r,{validation:"cuid",code:Ci.invalid_string,message:s.message}),t.dirty());else if("cuid2"===s.kind)Vi.test(e.data)||(r=this._getOrReturnCtx(e,r),Oi(r,{validation:"cuid2",code:Ci.invalid_string,message:s.message}),t.dirty());else if("ulid"===s.kind)qi.test(e.data)||(r=this._getOrReturnCtx(e,r),Oi(r,{validation:"ulid",code:Ci.invalid_string,message:s.message}),t.dirty());else if("url"===s.kind)try{new URL(e.data)}catch(n){r=this._getOrReturnCtx(e,r),Oi(r,{validation:"url",code:Ci.invalid_string,message:s.message}),t.dirty()}else"regex"===s.kind?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),Oi(r,{validation:"regex",code:Ci.invalid_string,message:s.message}),t.dirty())):"trim"===s.kind?e.data=e.data.trim():"includes"===s.kind?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),Oi(r,{code:Ci.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),t.dirty()):"toLowerCase"===s.kind?e.data=e.data.toLowerCase():"toUpperCase"===s.kind?e.data=e.data.toUpperCase():"startsWith"===s.kind?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),Oi(r,{code:Ci.invalid_string,validation:{startsWith:s.value},message:s.message}),t.dirty()):"endsWith"===s.kind?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),Oi(r,{code:Ci.invalid_string,validation:{endsWith:s.value},message:s.message}),t.dirty()):"datetime"===s.kind?((o=s).precision?o.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${o.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${o.precision}}Z$`):0===o.precision?o.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):o.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(e.data)||(r=this._getOrReturnCtx(e,r),Oi(r,{code:Ci.invalid_string,validation:"datetime",message:s.message}),t.dirty()):"ip"===s.kind?(n=e.data,("v4"!==(i=s.version)&&i||!Yi.test(n))&&("v6"!==i&&i||!Qi.test(n))&&(r=this._getOrReturnCtx(e,r),Oi(r,{validation:"ip",code:Ci.invalid_string,message:s.message}),t.dirty())):vi.assertNever(s);var n,i,o;return{status:t.value,value:e.data}}_regex(e,t,r){return this.refinement((t=>e.test(t)),{validation:t,code:Ci.invalid_string,...Bi.errToObj(r)})}_addCheck(e){return new Ji({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Bi.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Bi.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Bi.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Bi.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Bi.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Bi.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Bi.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Bi.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...Bi.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Bi.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...Bi.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Bi.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Bi.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Bi.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Bi.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Bi.errToObj(t)})}nonempty(e){return this.min(1,Bi.errToObj(e))}trim(){return new Ji({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Ji({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Ji({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((e=>"datetime"===e.kind))}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isEmoji(){return!!this._def.checks.find((e=>"emoji"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get isCUID2(){return!!this._def.checks.find((e=>"cuid2"===e.kind))}get isULID(){return!!this._def.checks.find((e=>"ulid"===e.kind))}get isIP(){return!!this._def.checks.find((e=>"ip"===e.kind))}get minLength(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}function Xi(e,t){const r=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,i=r>n?r:n;return parseInt(e.toFixed(i).replace(".",""))%parseInt(t.toFixed(i).replace(".",""))/Math.pow(10,i)}Ji.create=e=>{var t;return new Ji({checks:[],typeName:Wo.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...zi(e)})};class eo extends Wi{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Ei.number){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.number,received:t.parsedType}),Mi}let t;const r=new Ri;for(const n of this._def.checks)"int"===n.kind?vi.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),Oi(t,{code:Ci.invalid_type,expected:"integer",received:"float",message:n.message}),r.dirty()):"min"===n.kind?(n.inclusive?e.data<n.value:e.data<=n.value)&&(t=this._getOrReturnCtx(e,t),Oi(t,{code:Ci.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),r.dirty()):"max"===n.kind?(n.inclusive?e.data>n.value:e.data>=n.value)&&(t=this._getOrReturnCtx(e,t),Oi(t,{code:Ci.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),r.dirty()):"multipleOf"===n.kind?0!==Xi(e.data,n.value)&&(t=this._getOrReturnCtx(e,t),Oi(t,{code:Ci.not_multiple_of,multipleOf:n.value,message:n.message}),r.dirty()):"finite"===n.kind?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),Oi(t,{code:Ci.not_finite,message:n.message}),r.dirty()):vi.assertNever(n);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Bi.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Bi.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Bi.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Bi.toString(t))}setLimit(e,t,r,n){return new eo({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:Bi.toString(n)}]})}_addCheck(e){return new eo({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Bi.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Bi.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Bi.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Bi.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Bi.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Bi.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Bi.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Bi.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Bi.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind||"multipleOf"===e.kind&&vi.isInteger(e.value)))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}eo.create=e=>new eo({checks:[],typeName:Wo.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...zi(e)});class to extends Wi{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==Ei.bigint){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.bigint,received:t.parsedType}),Mi}let t;const r=new Ri;for(const n of this._def.checks)"min"===n.kind?(n.inclusive?e.data<n.value:e.data<=n.value)&&(t=this._getOrReturnCtx(e,t),Oi(t,{code:Ci.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),r.dirty()):"max"===n.kind?(n.inclusive?e.data>n.value:e.data>=n.value)&&(t=this._getOrReturnCtx(e,t),Oi(t,{code:Ci.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),r.dirty()):"multipleOf"===n.kind?e.data%n.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),Oi(t,{code:Ci.not_multiple_of,multipleOf:n.value,message:n.message}),r.dirty()):vi.assertNever(n);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Bi.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Bi.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Bi.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Bi.toString(t))}setLimit(e,t,r,n){return new to({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:Bi.toString(n)}]})}_addCheck(e){return new to({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Bi.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Bi.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Bi.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Bi.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Bi.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}to.create=e=>{var t;return new to({checks:[],typeName:Wo.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...zi(e)})};class ro extends Wi{_parse(e){if(this._def.coerce&&(e.data=Boolean(e.data)),this._getType(e)!==Ei.boolean){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.boolean,received:t.parsedType}),Mi}return Ti(e.data)}}ro.create=e=>new ro({typeName:Wo.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...zi(e)});class no extends Wi{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Ei.date){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.date,received:t.parsedType}),Mi}if(isNaN(e.data.getTime()))return Oi(this._getOrReturnCtx(e),{code:Ci.invalid_date}),Mi;const t=new Ri;let r;for(const n of this._def.checks)"min"===n.kind?e.data.getTime()<n.value&&(r=this._getOrReturnCtx(e,r),Oi(r,{code:Ci.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),t.dirty()):"max"===n.kind?e.data.getTime()>n.value&&(r=this._getOrReturnCtx(e,r),Oi(r,{code:Ci.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),t.dirty()):vi.assertNever(n);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new no({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Bi.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Bi.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}no.create=e=>new no({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:Wo.ZodDate,...zi(e)});class io extends Wi{_parse(e){if(this._getType(e)!==Ei.symbol){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.symbol,received:t.parsedType}),Mi}return Ti(e.data)}}io.create=e=>new io({typeName:Wo.ZodSymbol,...zi(e)});class oo extends Wi{_parse(e){if(this._getType(e)!==Ei.undefined){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.undefined,received:t.parsedType}),Mi}return Ti(e.data)}}oo.create=e=>new oo({typeName:Wo.ZodUndefined,...zi(e)});class so extends Wi{_parse(e){if(this._getType(e)!==Ei.null){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.null,received:t.parsedType}),Mi}return Ti(e.data)}}so.create=e=>new so({typeName:Wo.ZodNull,...zi(e)});class ao extends Wi{constructor(){super(...arguments),this._any=!0}_parse(e){return Ti(e.data)}}ao.create=e=>new ao({typeName:Wo.ZodAny,...zi(e)});class co extends Wi{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ti(e.data)}}co.create=e=>new co({typeName:Wo.ZodUnknown,...zi(e)});class lo extends Wi{_parse(e){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.never,received:t.parsedType}),Mi}}lo.create=e=>new lo({typeName:Wo.ZodNever,...zi(e)});class uo extends Wi{_parse(e){if(this._getType(e)!==Ei.undefined){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.void,received:t.parsedType}),Mi}return Ti(e.data)}}uo.create=e=>new uo({typeName:Wo.ZodVoid,...zi(e)});class ho extends Wi{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),n=this._def;if(t.parsedType!==Ei.array)return Oi(t,{code:Ci.invalid_type,expected:Ei.array,received:t.parsedType}),Mi;if(null!==n.exactLength){const e=t.data.length>n.exactLength.value,i=t.data.length<n.exactLength.value;(e||i)&&(Oi(t,{code:e?Ci.too_big:Ci.too_small,minimum:i?n.exactLength.value:void 0,maximum:e?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),r.dirty())}if(null!==n.minLength&&t.data.length<n.minLength.value&&(Oi(t,{code:Ci.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),r.dirty()),null!==n.maxLength&&t.data.length>n.maxLength.value&&(Oi(t,{code:Ci.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map(((e,r)=>n.type._parseAsync(new Ui(t,e,t.path,r))))).then((e=>Ri.mergeArray(r,e)));const i=[...t.data].map(((e,r)=>n.type._parseSync(new Ui(t,e,t.path,r))));return Ri.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new ho({...this._def,minLength:{value:e,message:Bi.toString(t)}})}max(e,t){return new ho({...this._def,maxLength:{value:e,message:Bi.toString(t)}})}length(e,t){return new ho({...this._def,exactLength:{value:e,message:Bi.toString(t)}})}nonempty(e){return this.min(1,e)}}function po(e){if(e instanceof fo){const t={};for(const r in e.shape){const n=e.shape[r];t[r]=Mo.create(po(n))}return new fo({...e._def,shape:()=>t})}return e instanceof ho?new ho({...e._def,type:po(e.element)}):e instanceof Mo?Mo.create(po(e.unwrap())):e instanceof No?No.create(po(e.unwrap())):e instanceof vo?vo.create(e.items.map((e=>po(e)))):e}ho.create=(e,t)=>new ho({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Wo.ZodArray,...zi(t)});class fo extends Wi{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const e=this._def.shape(),t=vi.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==Ei.object){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.object,received:t.parsedType}),Mi}const{status:t,ctx:r}=this._processInputParams(e),{shape:n,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof lo&&"strip"===this._def.unknownKeys))for(const e in r.data)i.includes(e)||o.push(e);const s=[];for(const e of i){const t=n[e],i=r.data[e];s.push({key:{status:"valid",value:e},value:t._parse(new Ui(r,i,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof lo){const e=this._def.unknownKeys;if("passthrough"===e)for(const e of o)s.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)o.length>0&&(Oi(r,{code:Ci.unrecognized_keys,keys:o}),t.dirty());else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall;for(const t of o){const n=r.data[t];s.push({key:{status:"valid",value:t},value:e._parse(new Ui(r,n,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then((async()=>{const e=[];for(const t of s){const r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e})).then((e=>Ri.mergeObjectSync(t,e))):Ri.mergeObjectSync(t,s)}get shape(){return this._def.shape()}strict(e){return Bi.errToObj,new fo({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var n,i,o,s;const a=null!==(o=null===(i=(n=this._def).errorMap)||void 0===i?void 0:i.call(n,t,r).message)&&void 0!==o?o:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(s=Bi.errToObj(e).message)&&void 0!==s?s:a}:{message:a}}}:{}})}strip(){return new fo({...this._def,unknownKeys:"strip"})}passthrough(){return new fo({...this._def,unknownKeys:"passthrough"})}extend(e){return new fo({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new fo({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Wo.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new fo({...this._def,catchall:e})}pick(e){const t={};return vi.objectKeys(e).forEach((r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])})),new fo({...this._def,shape:()=>t})}omit(e){const t={};return vi.objectKeys(this.shape).forEach((r=>{e[r]||(t[r]=this.shape[r])})),new fo({...this._def,shape:()=>t})}deepPartial(){return po(this)}partial(e){const t={};return vi.objectKeys(this.shape).forEach((r=>{const n=this.shape[r];e&&!e[r]?t[r]=n:t[r]=n.optional()})),new fo({...this._def,shape:()=>t})}required(e){const t={};return vi.objectKeys(this.shape).forEach((r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof Mo;)e=e._def.innerType;t[r]=e}})),new fo({...this._def,shape:()=>t})}keyof(){return Io(vi.objectKeys(this.shape))}}fo.create=(e,t)=>new fo({shape:()=>e,unknownKeys:"strip",catchall:lo.create(),typeName:Wo.ZodObject,...zi(t)}),fo.strictCreate=(e,t)=>new fo({shape:()=>e,unknownKeys:"strict",catchall:lo.create(),typeName:Wo.ZodObject,...zi(t)}),fo.lazycreate=(e,t)=>new fo({shape:e,unknownKeys:"strip",catchall:lo.create(),typeName:Wo.ZodObject,...zi(t)});class go extends Wi{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map((async e=>{const r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}}))).then((function(e){for(const t of e)if("valid"===t.result.status)return t.result;for(const r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;const r=e.map((e=>new Si(e.ctx.common.issues)));return Oi(t,{code:Ci.invalid_union,unionErrors:r}),Mi}));{let e;const n=[];for(const i of r){const r={...t,common:{...t.common,issues:[]},parent:null},o=i._parseSync({data:t.data,path:t.path,parent:r});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:r}),r.common.issues.length&&n.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;const i=n.map((e=>new Si(e)));return Oi(t,{code:Ci.invalid_union,unionErrors:i}),Mi}}get options(){return this._def.options}}go.create=(e,t)=>new go({options:e,typeName:Wo.ZodUnion,...zi(t)});const mo=e=>e instanceof So?mo(e.schema):e instanceof Ro?mo(e.innerType()):e instanceof Ao?[e.value]:e instanceof ko?e.options:e instanceof Po?Object.keys(e.enum):e instanceof To?mo(e._def.innerType):e instanceof oo?[void 0]:e instanceof so?[null]:null;class yo extends Wi{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ei.object)return Oi(t,{code:Ci.invalid_type,expected:Ei.object,received:t.parsedType}),Mi;const r=this.discriminator,n=t.data[r],i=this.optionsMap.get(n);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(Oi(t,{code:Ci.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Mi)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const n=new Map;for(const r of t){const t=mo(r.shape[e]);if(!t)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const i of t){if(n.has(i))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);n.set(i,r)}}return new yo({typeName:Wo.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n,...zi(r)})}}function wo(e,t){const r=xi(e),n=xi(t);if(e===t)return{valid:!0,data:e};if(r===Ei.object&&n===Ei.object){const r=vi.objectKeys(t),n=vi.objectKeys(e).filter((e=>-1!==r.indexOf(e))),i={...e,...t};for(const r of n){const n=wo(e[r],t[r]);if(!n.valid)return{valid:!1};i[r]=n.data}return{valid:!0,data:i}}if(r===Ei.array&&n===Ei.array){if(e.length!==t.length)return{valid:!1};const r=[];for(let n=0;n<e.length;n++){const i=wo(e[n],t[n]);if(!i.valid)return{valid:!1};r.push(i.data)}return{valid:!0,data:r}}return r===Ei.date&&n===Ei.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class bo extends Wi{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),n=(e,n)=>{if(ji(e)||ji(n))return Mi;const i=wo(e.value,n.value);return i.valid?((Li(e)||Li(n))&&t.dirty(),{status:t.value,value:i.data}):(Oi(r,{code:Ci.invalid_intersection_types}),Mi)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then((([e,t])=>n(e,t))):n(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}bo.create=(e,t,r)=>new bo({left:e,right:t,typeName:Wo.ZodIntersection,...zi(r)});class vo extends Wi{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Ei.array)return Oi(r,{code:Ci.invalid_type,expected:Ei.array,received:r.parsedType}),Mi;if(r.data.length<this._def.items.length)return Oi(r,{code:Ci.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Mi;!this._def.rest&&r.data.length>this._def.items.length&&(Oi(r,{code:Ci.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const n=[...r.data].map(((e,t)=>{const n=this._def.items[t]||this._def.rest;return n?n._parse(new Ui(r,e,r.path,t)):null})).filter((e=>!!e));return r.common.async?Promise.all(n).then((e=>Ri.mergeArray(t,e))):Ri.mergeArray(t,n)}get items(){return this._def.items}rest(e){return new vo({...this._def,rest:e})}}vo.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new vo({items:e,typeName:Wo.ZodTuple,rest:null,...zi(t)})};class _o extends Wi{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Ei.object)return Oi(r,{code:Ci.invalid_type,expected:Ei.object,received:r.parsedType}),Mi;const n=[],i=this._def.keyType,o=this._def.valueType;for(const e in r.data)n.push({key:i._parse(new Ui(r,e,r.path,e)),value:o._parse(new Ui(r,r.data[e],r.path,e))});return r.common.async?Ri.mergeObjectAsync(t,n):Ri.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,r){return new _o(t instanceof Wi?{keyType:e,valueType:t,typeName:Wo.ZodRecord,...zi(r)}:{keyType:Ji.create(),valueType:e,typeName:Wo.ZodRecord,...zi(t)})}}class Eo extends Wi{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Ei.map)return Oi(r,{code:Ci.invalid_type,expected:Ei.map,received:r.parsedType}),Mi;const n=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map((([e,t],o)=>({key:n._parse(new Ui(r,e,r.path,[o,"key"])),value:i._parse(new Ui(r,t,r.path,[o,"value"]))})));if(r.common.async){const e=new Map;return Promise.resolve().then((async()=>{for(const r of o){const n=await r.key,i=await r.value;if("aborted"===n.status||"aborted"===i.status)return Mi;"dirty"!==n.status&&"dirty"!==i.status||t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}}))}{const e=new Map;for(const r of o){const n=r.key,i=r.value;if("aborted"===n.status||"aborted"===i.status)return Mi;"dirty"!==n.status&&"dirty"!==i.status||t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}}}}Eo.create=(e,t,r)=>new Eo({valueType:t,keyType:e,typeName:Wo.ZodMap,...zi(r)});class xo extends Wi{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Ei.set)return Oi(r,{code:Ci.invalid_type,expected:Ei.set,received:r.parsedType}),Mi;const n=this._def;null!==n.minSize&&r.data.size<n.minSize.value&&(Oi(r,{code:Ci.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),null!==n.maxSize&&r.data.size>n.maxSize.value&&(Oi(r,{code:Ci.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());const i=this._def.valueType;function o(e){const r=new Set;for(const n of e){if("aborted"===n.status)return Mi;"dirty"===n.status&&t.dirty(),r.add(n.value)}return{status:t.value,value:r}}const s=[...r.data.values()].map(((e,t)=>i._parse(new Ui(r,e,r.path,t))));return r.common.async?Promise.all(s).then((e=>o(e))):o(s)}min(e,t){return new xo({...this._def,minSize:{value:e,message:Bi.toString(t)}})}max(e,t){return new xo({...this._def,maxSize:{value:e,message:Bi.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}xo.create=(e,t)=>new xo({valueType:e,minSize:null,maxSize:null,typeName:Wo.ZodSet,...zi(t)});class Co extends Wi{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ei.function)return Oi(t,{code:Ci.invalid_type,expected:Ei.function,received:t.parsedType}),Mi;function r(e,r){return Pi({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ki(),Ai].filter((e=>!!e)),issueData:{code:Ci.invalid_arguments,argumentsError:r}})}function n(e,r){return Pi({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ki(),Ai].filter((e=>!!e)),issueData:{code:Ci.invalid_return_type,returnTypeError:r}})}const i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof Oo){const e=this;return Ti((async function(...t){const s=new Si([]),a=await e._def.args.parseAsync(t,i).catch((e=>{throw s.addIssue(r(t,e)),s})),c=await Reflect.apply(o,this,a);return await e._def.returns._def.type.parseAsync(c,i).catch((e=>{throw s.addIssue(n(c,e)),s}))}))}{const e=this;return Ti((function(...t){const s=e._def.args.safeParse(t,i);if(!s.success)throw new Si([r(t,s.error)]);const a=Reflect.apply(o,this,s.data),c=e._def.returns.safeParse(a,i);if(!c.success)throw new Si([n(a,c.error)]);return c.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Co({...this._def,args:vo.create(e).rest(co.create())})}returns(e){return new Co({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new Co({args:e||vo.create([]).rest(co.create()),returns:t||co.create(),typeName:Wo.ZodFunction,...zi(r)})}}class So extends Wi{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}So.create=(e,t)=>new So({getter:e,typeName:Wo.ZodLazy,...zi(t)});class Ao extends Wi{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return Oi(t,{received:t.data,code:Ci.invalid_literal,expected:this._def.value}),Mi}return{status:"valid",value:e.data}}get value(){return this._def.value}}function Io(e,t){return new ko({values:e,typeName:Wo.ZodEnum,...zi(t)})}Ao.create=(e,t)=>new Ao({value:e,typeName:Wo.ZodLiteral,...zi(t)});class ko extends Wi{_parse(e){if("string"!=typeof e.data){const t=this._getOrReturnCtx(e),r=this._def.values;return Oi(t,{expected:vi.joinValues(r),received:t.parsedType,code:Ci.invalid_type}),Mi}if(-1===this._def.values.indexOf(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return Oi(t,{received:t.data,code:Ci.invalid_enum_value,options:r}),Mi}return Ti(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return ko.create(e)}exclude(e){return ko.create(this.options.filter((t=>!e.includes(t))))}}ko.create=Io;class Po extends Wi{_parse(e){const t=vi.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==Ei.string&&r.parsedType!==Ei.number){const e=vi.objectValues(t);return Oi(r,{expected:vi.joinValues(e),received:r.parsedType,code:Ci.invalid_type}),Mi}if(-1===t.indexOf(e.data)){const e=vi.objectValues(t);return Oi(r,{received:r.data,code:Ci.invalid_enum_value,options:e}),Mi}return Ti(e.data)}get enum(){return this._def.values}}Po.create=(e,t)=>new Po({values:e,typeName:Wo.ZodNativeEnum,...zi(t)});class Oo extends Wi{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ei.promise&&!1===t.common.async)return Oi(t,{code:Ci.invalid_type,expected:Ei.promise,received:t.parsedType}),Mi;const r=t.parsedType===Ei.promise?t.data:Promise.resolve(t.data);return Ti(r.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}Oo.create=(e,t)=>new Oo({type:e,typeName:Wo.ZodPromise,...zi(t)});class Ro extends Wi{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Wo.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),n=this._def.effect||null,i={addIssue:e=>{Oi(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),"preprocess"===n.type){const e=n.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then((e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r}))):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===n.type){const e=e=>{const t=n.refinement(e,i);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1===r.common.async){const n=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===n.status?Mi:("dirty"===n.status&&t.dirty(),e(n.value),{status:t.value,value:n.value})}return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then((r=>"aborted"===r.status?Mi:("dirty"===r.status&&t.dirty(),e(r.value).then((()=>({status:t.value,value:r.value}))))))}if("transform"===n.type){if(!1===r.common.async){const e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Di(e))return e;const o=n.transform(e.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then((e=>Di(e)?Promise.resolve(n.transform(e.value,i)).then((e=>({status:t.value,value:e}))):e))}vi.assertNever(n)}}Ro.create=(e,t,r)=>new Ro({schema:e,typeName:Wo.ZodEffects,effect:t,...zi(r)}),Ro.createWithPreprocess=(e,t,r)=>new Ro({schema:t,effect:{type:"preprocess",transform:e},typeName:Wo.ZodEffects,...zi(r)});class Mo extends Wi{_parse(e){return this._getType(e)===Ei.undefined?Ti(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Mo.create=(e,t)=>new Mo({innerType:e,typeName:Wo.ZodOptional,...zi(t)});class No extends Wi{_parse(e){return this._getType(e)===Ei.null?Ti(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}No.create=(e,t)=>new No({innerType:e,typeName:Wo.ZodNullable,...zi(t)});class To extends Wi{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===Ei.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}To.create=(e,t)=>new To({innerType:e,typeName:Wo.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...zi(t)});class jo extends Wi{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},n=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return $i(n)?n.then((e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new Si(r.common.issues)},input:r.data})}))):{status:"valid",value:"valid"===n.status?n.value:this._def.catchValue({get error(){return new Si(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}jo.create=(e,t)=>new jo({innerType:e,typeName:Wo.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...zi(t)});class Lo extends Wi{_parse(e){if(this._getType(e)!==Ei.nan){const t=this._getOrReturnCtx(e);return Oi(t,{code:Ci.invalid_type,expected:Ei.nan,received:t.parsedType}),Mi}return{status:"valid",value:e.data}}}Lo.create=e=>new Lo({typeName:Wo.ZodNaN,...zi(e)});const Do=Symbol("zod_brand");class $o extends Wi{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class Bo extends Wi{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?Mi:"dirty"===e.status?(t.dirty(),Ni(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{const e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?Mi:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new Bo({in:e,out:t,typeName:Wo.ZodPipeline})}}class Uo extends Wi{_parse(e){const t=this._def.innerType._parse(e);return Di(t)&&(t.value=Object.freeze(t.value)),t}}Uo.create=(e,t)=>new Uo({innerType:e,typeName:Wo.ZodReadonly,...zi(t)});const Fo=(e,t={},r)=>e?ao.create().superRefine(((n,i)=>{var o,s;if(!e(n)){const e="function"==typeof t?t(n):"string"==typeof t?{message:t}:t,a=null===(s=null!==(o=e.fatal)&&void 0!==o?o:r)||void 0===s||s,c="string"==typeof e?{message:e}:e;i.addIssue({code:"custom",...c,fatal:a})}})):ao.create(),zo={object:fo.lazycreate};var Wo;!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(Wo||(Wo={}));const Ho=Ji.create,Vo=eo.create,qo=Lo.create,Go=to.create,Zo=ro.create,Ko=no.create,Yo=io.create,Qo=oo.create,Jo=so.create,Xo=ao.create,es=co.create,ts=lo.create,rs=uo.create,ns=ho.create,is=fo.create,os=fo.strictCreate,ss=go.create,as=yo.create,cs=bo.create,ls=vo.create,us=_o.create,hs=Eo.create,ds=xo.create,ps=Co.create,fs=So.create,gs=Ao.create,ms=ko.create,ys=Po.create,ws=Oo.create,bs=Ro.create,vs=Mo.create,_s=No.create,Es=Ro.createWithPreprocess,xs=Bo.create,Cs={string:e=>Ji.create({...e,coerce:!0}),number:e=>eo.create({...e,coerce:!0}),boolean:e=>ro.create({...e,coerce:!0}),bigint:e=>to.create({...e,coerce:!0}),date:e=>no.create({...e,coerce:!0})},Ss=Mi;var As=Object.freeze({__proto__:null,defaultErrorMap:Ai,setErrorMap:function(e){Ii=e},getErrorMap:ki,makeIssue:Pi,EMPTY_PATH:[],addIssueToContext:Oi,ParseStatus:Ri,INVALID:Mi,DIRTY:Ni,OK:Ti,isAborted:ji,isDirty:Li,isValid:Di,isAsync:$i,get util(){return vi},get objectUtil(){return _i},ZodParsedType:Ei,getParsedType:xi,ZodType:Wi,ZodString:Ji,ZodNumber:eo,ZodBigInt:to,ZodBoolean:ro,ZodDate:no,ZodSymbol:io,ZodUndefined:oo,ZodNull:so,ZodAny:ao,ZodUnknown:co,ZodNever:lo,ZodVoid:uo,ZodArray:ho,ZodObject:fo,ZodUnion:go,ZodDiscriminatedUnion:yo,ZodIntersection:bo,ZodTuple:vo,ZodRecord:_o,ZodMap:Eo,ZodSet:xo,ZodFunction:Co,ZodLazy:So,ZodLiteral:Ao,ZodEnum:ko,ZodNativeEnum:Po,ZodPromise:Oo,ZodEffects:Ro,ZodTransformer:Ro,ZodOptional:Mo,ZodNullable:No,ZodDefault:To,ZodCatch:jo,ZodNaN:Lo,BRAND:Do,ZodBranded:$o,ZodPipeline:Bo,ZodReadonly:Uo,custom:Fo,Schema:Wi,ZodSchema:Wi,late:zo,get ZodFirstPartyTypeKind(){return Wo},coerce:Cs,any:Xo,array:ns,bigint:Go,boolean:Zo,date:Ko,discriminatedUnion:as,effect:bs,enum:ms,function:ps,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>Fo((t=>t instanceof e),t),intersection:cs,lazy:fs,literal:gs,map:hs,nan:qo,nativeEnum:ys,never:ts,null:Jo,nullable:_s,number:Vo,object:is,oboolean:()=>Zo().optional(),onumber:()=>Vo().optional(),optional:vs,ostring:()=>Ho().optional(),pipeline:xs,preprocess:Es,promise:ws,record:us,set:ds,strictObject:os,string:Ho,symbol:Yo,transformer:bs,tuple:ls,undefined:Qo,union:ss,unknown:es,void:rs,NEVER:Ss,ZodIssueCode:Ci,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:Si});const Is=As.object({message:As.string()});function ks(e){return As.literal(bi[e])}As.object({accessList:As.array(As.string()),blockHash:As.string().nullable(),blockNumber:As.string().nullable(),chainId:As.string(),from:As.string(),gas:As.string(),hash:As.string(),input:As.string().nullable(),maxFeePerGas:As.string(),maxPriorityFeePerGas:As.string(),nonce:As.string(),r:As.string(),s:As.string(),to:As.string(),transactionIndex:As.string().nullable(),type:As.string(),v:As.string(),value:As.string()});const Ps=As.object({chainId:As.number()}),Os=As.object({email:As.string().email()}),Rs=As.object({otp:As.string()}),Ms=As.object({chainId:As.optional(As.number())}),Ns=As.object({email:As.string().email()}),Ts=As.object({themeMode:As.optional(As.enum(["light","dark"])),themeVariables:As.optional(As.record(As.string(),As.string().or(As.number())))}),js=As.object({metadata:As.object({name:As.string(),description:As.string(),url:As.string(),icons:As.array(As.string())}).optional(),sdkVersion:As.string(),projectId:As.string()}),Ls=As.object({action:As.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),Ds=As.object({email:As.string().email(),address:As.string(),chainId:As.number()}),$s=As.object({isConnected:As.boolean()}),Bs=As.object({chainId:As.number()}),Us=As.object({chainId:As.number()}),Fs=As.object({email:As.string().email()}),zs=As.any(),Ws=As.object({method:As.literal("personal_sign"),params:As.array(As.any())}),Hs=As.object({method:As.literal("eth_sendTransaction"),params:As.array(As.any())}),Vs=As.object({method:As.literal("eth_accounts")}),qs=As.object({method:As.literal("eth_getBalance"),params:As.array(As.any())}),Gs=As.object({method:As.literal("eth_estimateGas"),params:As.array(As.any())}),Zs=As.object({method:As.literal("eth_gasPrice")}),Ks=As.object({method:As.literal("eth_signTypedData_v4"),params:As.array(As.any())}),Ys=As.object({method:As.literal("eth_getTransactionByHash"),params:As.array(As.any())}),Qs=As.object({method:As.literal("eth_blockNumber")}),Js=As.object({method:As.literal("eth_chainId")}),Xs=As.object({token:As.string()}),ea=(As.object({type:ks("APP_SWITCH_NETWORK"),payload:Ps}).or(As.object({type:ks("APP_CONNECT_EMAIL"),payload:Os})).or(As.object({type:ks("APP_CONNECT_DEVICE")})).or(As.object({type:ks("APP_CONNECT_OTP"),payload:Rs})).or(As.object({type:ks("APP_GET_USER"),payload:As.optional(Ms)})).or(As.object({type:ks("APP_SIGN_OUT")})).or(As.object({type:ks("APP_IS_CONNECTED"),payload:As.optional(Xs)})).or(As.object({type:ks("APP_GET_CHAIN_ID")})).or(As.object({type:ks("APP_RPC_REQUEST"),payload:Ws.or(Hs).or(Vs).or(qs).or(Gs).or(Zs).or(Ks).or(Qs).or(Js).or(Ys)})).or(As.object({type:ks("APP_UPDATE_EMAIL"),payload:Ns})).or(As.object({type:ks("APP_AWAIT_UPDATE_EMAIL")})).or(As.object({type:ks("APP_SYNC_THEME"),payload:Ts})).or(As.object({type:ks("APP_SYNC_DAPP_DATA"),payload:js})),As.object({type:ks("FRAME_SWITCH_NETWORK_ERROR"),payload:Is}).or(As.object({type:ks("FRAME_SWITCH_NETWORK_SUCCESS"),payload:Us})).or(As.object({type:ks("FRAME_CONNECT_EMAIL_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_CONNECT_EMAIL_SUCCESS"),payload:Ls})).or(As.object({type:ks("FRAME_CONNECT_OTP_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_CONNECT_OTP_SUCCESS")})).or(As.object({type:ks("FRAME_CONNECT_DEVICE_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_CONNECT_DEVICE_SUCCESS")})).or(As.object({type:ks("FRAME_GET_USER_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_GET_USER_SUCCESS"),payload:Ds})).or(As.object({type:ks("FRAME_SIGN_OUT_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_SIGN_OUT_SUCCESS")})).or(As.object({type:ks("FRAME_IS_CONNECTED_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_IS_CONNECTED_SUCCESS"),payload:$s})).or(As.object({type:ks("FRAME_GET_CHAIN_ID_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_GET_CHAIN_ID_SUCCESS"),payload:Bs})).or(As.object({type:ks("FRAME_RPC_REQUEST_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_RPC_REQUEST_SUCCESS"),payload:zs})).or(As.object({type:ks("FRAME_SESSION_UPDATE"),payload:Xs})).or(As.object({type:ks("FRAME_UPDATE_EMAIL_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_UPDATE_EMAIL_SUCCESS")})).or(As.object({type:ks("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:Fs})).or(As.object({type:ks("FRAME_SYNC_THEME_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_SYNC_THEME_SUCCESS")})).or(As.object({type:ks("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Is})).or(As.object({type:ks("FRAME_SYNC_DAPP_DATA_SUCCESS")})),{set(e,t){localStorage.setItem(`${bi.STORAGE_KEY}${e}`,t)},get:e=>localStorage.getItem(`${bi.STORAGE_KEY}${e}`),delete(e){localStorage.removeItem(`${bi.STORAGE_KEY}${e}`)}}),ta=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ra=3e4,na={getBlockchainApiUrl(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return ta.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const e=ea.get(bi.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<ra){const e=Math.ceil((ra-t)/1e3);throw new Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){const e=ea.get(bi.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<ra)return Math.ceil((ra-t)/1e3)}return 0}};var ia=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let oa=class extends En.oi{constructor(){super(...arguments),this.email=vn.RouterController.state.data?.email,this.emailConnector=vn.ConnectorController.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=na.getTimeToNextEmailLogin(),this.error=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");const e=Boolean(this.timeoutTimeLeft);return En.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?En.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:En.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
              ></wui-otp>
              ${this.error?En.dy`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=na.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){try{if(!this.loading){const t=e.detail;this.emailConnector&&6===t.length&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:t}),vn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await vn.ConnectionController.connectExternal(this.emailConnector),vn.IN.close(),vn.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}}catch(e){vn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=vn.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){const e=vn.ConnectorController.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),vn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),vn.SnackController.showSuccess("Code email resent")}}catch(e){vn.SnackController.showError(e)}finally{this.loading=!1}}};oa.styles=wi,ia([(0,xn.SB)()],oa.prototype,"loading",void 0),ia([(0,xn.SB)()],oa.prototype,"timeoutTimeLeft",void 0),ia([(0,xn.SB)()],oa.prototype,"error",void 0),oa=ia([(0,_n.customElement)("w3m-email-verify-otp-view")],oa);const sa=En.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var aa=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ca=class extends En.oi{constructor(){super(),this.email=vn.RouterController.state.data?.email,this.emailConnector=vn.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return En.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),vn.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),vn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),vn.RouterController.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),vn.SnackController.showSuccess("Code email resent")}}catch(e){vn.SnackController.showError(e)}finally{this.loading=!1}}};ca.styles=sa,aa([(0,xn.SB)()],ca.prototype,"loading",void 0),ca=aa([(0,_n.customElement)("w3m-email-verify-device-view")],ca);const la=En.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var ua=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ha=class extends En.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(vn.IN.subscribeKey("open",(e=>{e||this.onHideIframe()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver((()=>{const t=e?.getBoundingClientRect(),r=t??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${r.width}px`,this.iframe.style.height=r.height-10+"px",this.iframe.style.left=`${r.left}px`,this.iframe.style.top=`${r.top+5}px`,this.ready=!0})),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),En.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};ha.styles=la,ua([(0,xn.SB)()],ha.prototype,"ready",void 0),ha=ua([(0,_n.customElement)("w3m-approve-transaction-view")],ha);let da=class extends En.oi{render(){return En.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${vn.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${vn.bq.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};da=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-upgrade-wallet-view")],da);var pa=i(5756);const fa=En.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var ga=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ma=class extends En.oi{constructor(){super(...arguments),this.formRef=(0,pa.V)(),this.initialValue=vn.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return En.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,pa.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${vn.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=vn.ConnectorController.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),vn.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),vn.RouterController.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(e){vn.SnackController.showError(e),this.loading=!1}}};ma.styles=fa,ga([(0,xn.SB)()],ma.prototype,"email",void 0),ga([(0,xn.SB)()],ma.prototype,"loading",void 0),ma=ga([(0,_n.customElement)("w3m-update-email-wallet-view")],ma);const ya=En.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var wa=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ba=class extends En.oi{constructor(){super(),this.email=vn.RouterController.state.data?.email,this.emailConnector=vn.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return En.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),vn.RouterController.replace("Account"),vn.SnackController.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),vn.SnackController.showSuccess("Code email resent")}}catch(e){vn.SnackController.showError(e)}finally{this.loading=!1}}};ba.styles=ya,wa([(0,xn.SB)()],ba.prototype,"loading",void 0),ba=wa([(0,_n.customElement)("w3m-update-email-wallet-waiting-view")],ba);const va=En.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function _a(e){const{connectors:t}=vn.ConnectorController.state,r=t.filter((e=>"ANNOUNCED"===e.type)).reduce(((e,t)=>t.info?.rdns?(e[t.info.rdns]=!0,e):e),{});return e.map((e=>({...e,installed:Boolean(e.rdns)&&Boolean(r[e.rdns??""])}))).sort(((e,t)=>Number(t.installed)-Number(e.installed)))}var Ea=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const xa="local-paginator";let Ca=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!vn.ApiController.state.wallets.length,this.wallets=vn.ApiController.state.wallets,this.recommended=vn.ApiController.state.recommended,this.featured=vn.ApiController.state.featured,this.unsubscribe.push(vn.ApiController.subscribeKey("wallets",(e=>this.wallets=e)),vn.ApiController.subscribeKey("recommended",(e=>this.recommended=e)),vn.ApiController.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return En.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await vn.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>En.dy`
        <wui-card-select-loader type="wallet" id=${(0,Cn.o)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return _a([...this.featured,...this.recommended,...this.wallets]).map((e=>En.dy`
        <wui-card-select
          imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:n}=vn.ApiController.state,i=window.innerWidth<352?3:4,o=e.length+t.length;let s=Math.ceil(o/i)*i-o+i;return s-=e.length?r.length%i:0,0===n&&r.length>0?null:0===n||[...r,...e,...t].length<n?this.shimmerTemplate(s,xa):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${xa}`);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:r}=vn.ApiController.state;r.length<t&&vn.ApiController.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:t}=vn.ConnectorController.state,r=t.find((({explorerId:t})=>t===e.id));r?vn.RouterController.push("ConnectingExternal",{connector:r}):vn.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Ca.styles=va,Ea([(0,xn.SB)()],Ca.prototype,"initial",void 0),Ea([(0,xn.SB)()],Ca.prototype,"wallets",void 0),Ea([(0,xn.SB)()],Ca.prototype,"recommended",void 0),Ea([(0,xn.SB)()],Ca.prototype,"featured",void 0),Ca=Ea([(0,_n.customElement)("w3m-all-wallets-list")],Ca);const Sa=En.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Aa=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ia=class extends En.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?En.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await vn.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=vn.ApiController.state,t=_a(e);return e.length?En.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map((e=>En.dy`
            <wui-card-select
              imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:En.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=vn.ConnectorController.state,r=t.find((({explorerId:t})=>t===e.id));r?vn.RouterController.push("ConnectingExternal",{connector:r}):vn.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Ia.styles=Sa,Aa([(0,xn.SB)()],Ia.prototype,"loading",void 0),Aa([(0,xn.Cb)()],Ia.prototype,"query",void 0),Ia=Aa([(0,_n.customElement)("w3m-all-wallets-search")],Ia);var ka=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pa=class extends En.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(vn.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return En.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};ka([(0,xn.Cb)({type:Array})],Pa.prototype,"platforms",void 0),ka([(0,xn.Cb)()],Pa.prototype,"onSelectPlatfrom",void 0),ka([(0,xn.SB)()],Pa.prototype,"buffering",void 0),Pa=ka([(0,_n.customElement)("w3m-connecting-header")],Pa);let Oa=class extends Zn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),vn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=vn.ConnectorController.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns)),r=e.find((e=>"INJECTED"===e.type));t?await vn.ConnectionController.connectExternal(t):r&&await vn.ConnectionController.connectExternal(r),vn.IN.close(),vn.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){vn.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Oa=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-connecting-wc-browser")],Oa);let Ra=class extends Zn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),vn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=vn.j1.formatNativeUrl(e,this.uri);vn.ConnectionController.setWcLinking({name:t,href:n}),vn.ConnectionController.setRecentWallet(this.wallet),vn.j1.openHref(r,"_blank")}catch{this.error=!0}}};Ra=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-connecting-wc-desktop")],Ra);let Ma=class extends Zn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),vn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=vn.j1.formatNativeUrl(e,this.uri);vn.ConnectionController.setWcLinking({name:t,href:n}),vn.ConnectionController.setRecentWallet(this.wallet),vn.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){const e=vn.j1.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(vn.ConnectionController.setBuffering(!0),setTimeout((()=>{vn.ConnectionController.setBuffering(!1)}),5e3))}};Ma=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-connecting-wc-mobile")],Ma);const Na=En.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let Ta=class extends Zn{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),vn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),En.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return vn.ConnectionController.setWcLinking(void 0),vn.ConnectionController.setRecentWallet(this.wallet),En.dy` <wui-qr-code
      size=${e}
      theme=${vn.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(this.wallet))}
      alt=${(0,Cn.o)(t)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return En.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Ta.styles=Na,Ta=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-connecting-wc-qrcode")],Ta);const ja=En.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let La=class extends En.oi{constructor(){super(...arguments),this.dappImageUrl=vn.OptionsController.state.metadata?.icons,this.walletImageUrl=vn.MO.getConnectedWalletImageUrl()}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return En.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};La.styles=ja,La=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-connecting-siwe")],La);let Da=class extends En.oi{constructor(){if(super(),this.wallet=vn.RouterController.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");vn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return En.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,Cn.o)(vn.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Da=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-connecting-wc-unsupported")],Da);let $a=class extends Zn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",vn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=vn.j1.formatUniversalUrl(e,this.uri);vn.ConnectionController.setWcLinking({name:t,href:n}),vn.ConnectionController.setRecentWallet(this.wallet),vn.j1.openHref(r,"_blank")}catch{this.error=!0}}};$a=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-connecting-wc-web")],$a);const Ba=En.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ua=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};function Fa(){const e=vn.RouterController.state.data?.connector?.name,t=vn.RouterController.state.data?.wallet?.name,r=vn.RouterController.state.data?.network?.name,n=t??e,i=vn.ConnectorController.getConnectors();return{Connect:`Connect ${1===i.length&&"w3m-email"===i[0]?.id?"Email":""} Wallet`,Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:n?`Get ${n}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let za=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.heading=Fa()[vn.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(vn.RouterController.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),vn.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return En.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){vn.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),vn.RouterController.push("WhatIsAWallet")}async onClose(){vn.yD.state.isSiweEnabled&&"success"!==vn.yD.state.status&&await vn.ConnectionController.disconnect(),vn.IN.close()}titleTemplate(){return En.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=vn.RouterController.state,t="Connect"===e,r="ApproveTransaction"===e;return this.showBack&&!r?En.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:En.dy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?En.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){const t=this.shadowRoot?.querySelector("wui-text");if(t){const r=Fa()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:e}=vn.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===vn.RouterController.state.view?vn.RouterController.push("Connect"):vn.RouterController.goBack()}};za.styles=[Ba],Ua([(0,xn.SB)()],za.prototype,"heading",void 0),Ua([(0,xn.SB)()],za.prototype,"buffering",void 0),Ua([(0,xn.SB)()],za.prototype,"showBack",void 0),za=Ua([(0,_n.customElement)("w3m-header")],za);var Wa=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ha=class extends En.oi{constructor(){super(...arguments),this.data=[]}render(){return En.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>En.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>En.dy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Wa([(0,xn.Cb)({type:Array})],Ha.prototype,"data",void 0),Ha=Wa([(0,_n.customElement)("w3m-help-widget")],Ha);const Va=En.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let qa=class extends En.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=vn.OptionsController.state;return e||t?En.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=vn.OptionsController.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=vn.OptionsController.state;return e?En.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=vn.OptionsController.state;return e?En.dy`<a href=${e}>Privacy Policy</a>`:null}};qa.styles=[Va],qa=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,_n.customElement)("w3m-legal-footer")],qa);const Ga=En.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Za=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ka=class extends En.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:n,homepage:i}=this.wallet,o=vn.j1.isMobile(),s=vn.j1.isIos(),a=vn.j1.isAndroid(),c=[t,r,i,n].filter(Boolean).length>1,l=_n.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!o?En.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>vn.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?En.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?En.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&a?En.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&vn.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&vn.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&vn.j1.openHref(this.wallet.homepage,"_blank")}};Ka.styles=[Ga],Za([(0,xn.Cb)({type:Object})],Ka.prototype,"wallet",void 0),Ka=Za([(0,_n.customElement)("w3m-mobile-download-links")],Ka);const Ya=En.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Qa=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const Ja={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Xa=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=vn.SnackController.state.open,this.unsubscribe.push(vn.SnackController.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=vn.SnackController.state,r=Ja[t];return En.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>vn.SnackController.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Xa.styles=Ya,Qa([(0,xn.SB)()],Xa.prototype,"open",void 0),Xa=Qa([(0,_n.customElement)("w3m-snackbar")],Xa);const ec=En.iv`
  :host {
    padding: var(--wui-spacing-3xs) 0;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: var(--wui-spacing-m);
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-xxs);
  }
`;var tc=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let rc=class extends En.oi{constructor(){super(),this.unsubscribe=[],this.formRef=(0,pa.V)(),this.connectors=vn.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(vn.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=this.connectors.length>1;return this.connectors.find((e=>"EMAIL"===e.type))?En.dy`
      ${this.alphaWarningTemplate()}
      <form ${(0,pa.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?En.dy`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return En.dy`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">
              This is an alpha version to test before launch
            </wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?En.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?En.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=vn.ConnectorController.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await t.provider.connectEmail({email:this.email});vn.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(vn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),vn.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&vn.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(e){const t=vn.j1.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":vn.SnackController.showError(e)}finally{this.loading=!1}}onFocusEvent(){vn.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};rc.styles=ec,tc([(0,xn.SB)()],rc.prototype,"connectors",void 0),tc([(0,xn.SB)()],rc.prototype,"email",void 0),tc([(0,xn.SB)()],rc.prototype,"loading",void 0),tc([(0,xn.SB)()],rc.prototype,"error",void 0),rc=tc([(0,_n.customElement)("w3m-email-login-widget")],rc);let nc=!1;class ic{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{vn.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{vn.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{vn.AccountController.setBalance(e,t)},this.setProfileName=e=>{vn.AccountController.setProfileName(e)},this.setProfileImage=e=>{vn.AccountController.setProfileImage(e)},this.resetAccount=()=>{vn.AccountController.resetAccount()},this.setCaipNetwork=e=>{vn.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>vn.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{vn.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>vn.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{vn.NetworkController.resetNetwork()},this.setConnectors=e=>{vn.ConnectorController.setConnectors(e)},this.addConnector=e=>{vn.ConnectorController.addConnector(e)},this.getConnectors=()=>vn.ConnectorController.getConnectors(),this.resetWcConnection=()=>{vn.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>vn.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{vn.AccountController.setAddressExplorerUrl(e)},this.setSIWENonce=e=>{vn.yD.setNonce(e)},this.setSIWESession=e=>{vn.yD.setSession(e)},this.setSIWEStatus=e=>{vn.yD.setStatus(e)},this.setSIWEMessage=e=>{vn.yD.setMessage(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),vn.IN.open(e)}async close(){await this.initOrContinue(),vn.IN.close()}setLoading(e){vn.IN.setLoading(e)}getThemeMode(){return vn.ThemeController.state.themeMode}getThemeVariables(){return vn.ThemeController.state.themeVariables}setThemeMode(e){vn.ThemeController.setThemeMode(e),(0,_n.setColorTheme)(vn.ThemeController.state.themeMode);try{const e=vn.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeMode:vn.ThemeController.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){vn.ThemeController.setThemeVariables(e),(0,_n.setThemeVariables)(vn.ThemeController.state.themeVariables);try{const e=vn.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeVariables:vn.ThemeController.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return vn.ThemeController.subscribe(e)}getState(){return{...vn.Ie.state}}subscribeState(e){return vn.Ie.subscribe(e)}getEvent(){return{...vn.Xs.state}}subscribeEvents(e){return vn.Xs.subscribe(e)}subscribeSIWEState(e){return vn.yD.subscribe(e)}initControllers(e){if(vn.NetworkController.setClient(e.networkControllerClient),vn.NetworkController.setDefaultCaipNetwork(e.defaultChain),vn.OptionsController.setProjectId(e.projectId),vn.OptionsController.setIncludeWalletIds(e.includeWalletIds),vn.OptionsController.setExcludeWalletIds(e.excludeWalletIds),vn.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),vn.OptionsController.setTokens(e.tokens),vn.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),vn.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),vn.OptionsController.setCustomWallets(e.customWallets),vn.OptionsController.setEnableAnalytics(e.enableAnalytics),vn.OptionsController.setSdkVersion(e._sdkVersion),vn.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){const t=e.siweControllerClient;vn.yD.setSIWEClient(t)}e.metadata&&vn.OptionsController.setMetadata(e.metadata),e.themeMode&&vn.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&vn.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return this.initPromise||nc||!vn.j1.isClient()||(nc=!0,this.initPromise=new Promise((async e=>{await Promise.all([Promise.resolve().then(i.bind(i,4145)),Promise.resolve().then(i.bind(i,6541))]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()}))),this.initPromise}}const oc={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.6.0-544a28f1"},sc={ConnectorExplorerIds:{[oc.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[oc.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[oc.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[oc.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[oc.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[oc.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[oc.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[oc.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[oc.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[oc.INJECTED_CONNECTOR_ID]:"Browser Wallet",[oc.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[oc.COINBASE_CONNECTOR_ID]:"Coinbase",[oc.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[oc.LEDGER_CONNECTOR_ID]:"Ledger",[oc.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[oc.INJECTED_CONNECTOR_ID]:"INJECTED",[oc.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[oc.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[oc.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},ac={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach((([e,r])=>{t[`${oc.EIP155}:${e}`]=r})),t}};function cc(e){if(e)return{id:`${oc.EIP155}:${e.id}`,name:e.name,imageId:sc.EIP155NetworkImageIds[e.id]}}class lc extends ic{constructor(e){const{wagmiConfig:r,siweConfig:n,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...c}=e;if(!r)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!c.projectId)throw new Error("web3modal:constructor - projectId is undefined");const l={switchCaipNetwork:async e=>{const t=ac.caipNetworkIdToNumber(e?.id);t&&await gn({chainId:t})},async getApprovedCaipNetworksData(){const e=localStorage.getItem("wagmi.wallet");if(e?.includes(oc.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:sc.WalletConnectRpcChainIds.map((e=>`${oc.EIP155}:${e}`))};if(e?.includes(oc.WALLET_CONNECT_CONNECTOR_ID)){const e=r.connectors.find((e=>e.id===oc.WALLET_CONNECT_CONNECTOR_ID));if(!e)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const t=await e.getProvider(),n=t.signer?.session?.namespaces,i=n?.[oc.EIP155]?.methods,o=n?.[oc.EIP155]?.chains;return{supportsAllNetworks:i?.includes(oc.ADD_CHAIN_METHOD),approvedCaipNetworkIds:o}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async e=>{const t=r.connectors.find((e=>e.id===oc.WALLET_CONNECT_CONNECTOR_ID));if(!t)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");t.on("message",(r=>{"display_uri"===r.type&&(e(r.data),t.removeAllListeners())}));const n=ac.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await on({connector:t,chainId:n})},connectExternal:async({id:e,provider:t,info:n})=>{const i=r.connectors.find((t=>t.id===e));if(!i)throw new Error("connectionControllerClient:connectExternal - connector is undefined");t&&n&&i.id===oc.EIP6963_CONNECTOR_ID&&i.setEip6963Wallet?.({provider:t,info:n});const o=ac.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await on({connector:i,chainId:o})},checkInstalled:e=>{const t=this.getConnectors().filter((e=>"ANNOUNCED"===e.type)),r=this.getConnectors().find((e=>"INJECTED"===e.type));if(!e)return Boolean(window.ethereum);if(t.length){const r=e.some((e=>t.some((t=>t.info?.rdns===e))));if(r)return!0}return!!r&&!!window?.ethereum&&e.some((e=>Boolean(window.ethereum?.[String(e)])))},disconnect:async()=>{await async function(){const e=nn();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}(),n?.options?.signOutOnDisconnect&&await n.signOut()},signMessage:async e=>async function(e){const r=await ln();if(!r)throw new t;return await r.signMessage({message:e.message})}({message:e})};super({networkControllerClient:l,connectionControllerClient:u,siweControllerClient:n,defaultChain:cc(o),tokens:ac.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${oc.VERSION}`,...c}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(r),this.syncEmailConnector(r),this.listenEIP6963Connector(r),this.listenEmailConnector(r),mn((()=>this.syncAccount())),yn((()=>this.syncNetwork()))}getState(){const e=super.getState();return{...e,selectedNetworkId:ac.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState((t=>e({...t,selectedNetworkId:ac.caipNetworkIdToNumber(t.selectedNetworkId)})))}syncRequestedNetworks(e){const t=e?.map((e=>({id:`${oc.EIP155}:${e.id}`,name:e.name,imageId:sc.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]})));this.setRequestedCaipNetworks(t??[])}async syncAccount(){const{address:e,isConnected:t}=dn(),{chain:r}=pn();if(this.resetAccount(),t&&e&&r){const n=`${oc.EIP155}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){const{address:e,isConnected:t}=dn(),{chain:r}=pn();if(r){const n=String(r.id),i=`${oc.EIP155}:${n}`;if(this.setCaipNetwork({id:i,name:r.name,imageId:sc.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),t&&e){const t=`${oc.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){const t=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,t){if(t.id!==s.id)return this.setProfileName(null),void this.setProfileImage(null);try{const{name:r,avatar:n}=await this.fetchIdentity({caipChainId:`${oc.EIP155}:${t.id}`,address:e});this.setProfileName(r),this.setProfileImage(n)}catch{const r=await async function({address:e,chainId:t}){return cn({chainId:t}).getEnsName({address:(0,f.K)(e)})}({address:e,chainId:t.id});if(r){this.setProfileName(r);const e=await async function({name:e,chainId:t}){const{normalize:r}=await Promise.resolve().then(i.bind(i,4849)),n=cn({chainId:t});return await n.getEnsAvatar({name:r(e)})}({name:r,chainId:t.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){const r=await async function({address:e,chainId:t,formatUnits:r,token:n}){const i=nn(),o=cn({chainId:t});if(n){const i=async({abi:i})=>{const o={abi:i,address:n,chainId:t},[s,a,c]=await hn({allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[e]},{...o,functionName:"decimals"},{...o,functionName:"symbol"}]});return{decimals:a,formatted:(0,jr.b)(s??"0",Hr(r??a)),symbol:c,value:s}};try{return await i({abi:sn})}catch(e){if(e instanceof st.uq){const{symbol:e,...t}=await i({abi:an});return{symbol:(0,H.rR)((0,it.f)(e,{dir:"right"})),...t}}throw e}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:e}),c=s.find((e=>e.id===o.chain.id));return{decimals:c?.nativeCurrency.decimals??18,formatted:(0,jr.b)(a??"0",Hr(r??18)),symbol:c?.nativeCurrency.symbol??"ETH",value:a}}({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const t=[];e.connectors.forEach((({id:e,name:r})=>{[oc.EIP6963_CONNECTOR_ID,oc.EMAIL_CONNECTOR_ID].includes(e)||t.push({id:e,explorerId:sc.ConnectorExplorerIds[e],imageId:sc.ConnectorImageIds[e],imageUrl:this.options?.connectorImages?.[e],name:sc.ConnectorNamesMap[e]??r,type:sc.ConnectorTypesMap[e]??"EXTERNAL"})})),this.setConnectors(t)}async syncEmailConnector(e){const t=e.connectors.find((({id:e})=>"w3mEmail"===e));if(t){const e=await t.getProvider();this.addConnector({id:oc.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e})}}eip6963EventHandler(e,t){if(t.detail){const{info:r,provider:n}=t.detail;this.getConnectors().find((e=>e.name===r.name))||(this.addConnector({id:oc.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[oc.EIP6963_CONNECTOR_ID],name:r.name,provider:n,info:r}),e.isAuthorized({info:r,provider:n}))}}listenEIP6963Connector(e){const t=e.connectors.find((e=>e.id===oc.EIP6963_CONNECTOR_ID));if("undefined"!=typeof window&&t){const e=this.eip6963EventHandler.bind(this,t);window.addEventListener(oc.EIP6963_ANNOUNCE_EVENT,e),window.dispatchEvent(new Event(oc.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){const t=e.connectors.find((e=>e.id===oc.EMAIL_CONNECTOR_ID));if("undefined"!=typeof window&&t){super.setLoading(!0);const e=await t.getProvider(),r=e.getLoginEmailUsed();super.setLoading(r),e.onRpcRequest((()=>{super.open({view:"ApproveTransaction"})})),e.onRpcResponse((()=>{super.close()})),e.onIsConnected((()=>{super.setLoading(!1)}))}}}var uc,hc,dc=function(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r},pc=function(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};const fc="connectedRdns";class gc extends Ye{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",uc.set(this,void 0),hc.set(this,void 0),this.onAccountsChanged=e=>{0===e.length?(this.storage?.removeItem(fc),this.emit("disconnect")):e[0]&&this.emit("change",{account:(0,f.K)(e[0])})},dc(this,uc,this.options.getProvider(),"f")}async connect(e){const t=await super.connect(e);return pc(this,hc,"f")&&this.storage?.setItem(fc,pc(this,hc,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(fc),dc(this,hc,void 0,"f")}async isAuthorized(e){const t=this.storage?.getItem(fc);if(t){if(pc(this,hc,"f")&&t===pc(this,hc,"f").info.rdns){const e=pc(this,hc,"f").provider;if((await e.request({method:"eth_accounts"})).length)return!0}e&&dc(this,hc,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(pc(this,hc,"f")?.provider??pc(this,uc,"f"))}setEip6963Wallet(e){dc(this,hc,e,"f")}}uc=new WeakMap,hc=new WeakMap;var mc,yc,wc=i(8764);"undefined"!=typeof window&&(window.Buffer||(window.Buffer=wc.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var bc=class extends p{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,u(this,mc,void 0),u(this,yc,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,f.K)(e[0])})},this.onChainChanged=e=>{const t=r(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const r=await t.enable(),n=(0,f.K)(r[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,o=this.isChainUnsupported(i)),{account:n,chain:{id:i,unsupported:o}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new R(e);throw e}}async disconnect(){if(!l(this,yc))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,f.K)(t[0])}async getChainId(){return r((await this.getProvider()).chainId)}async getProvider(){if(!l(this,yc)){let e=(await Promise.resolve().then(i.t.bind(i,5811,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),h(this,mc,new e(this.options));const t=l(this,mc).walletExtension?.getChainId(),r=this.chains.find((e=>this.options.chainId?e.id===this.options.chainId:e.id===t))||this.chains[0],n=this.options.chainId||r?.id,o=this.options.jsonRpcUrl||r?.rpcUrls.default.http[0];h(this,yc,l(this,mc).makeWeb3Provider(o,n))}return l(this,yc)}async getWalletClient({chainId:e}={}){const[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return ze({account:r,chain:n,transport:Ze(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const r=await this.getProvider(),n=(0,q.eC)(t);try{return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find((e=>e.id===t))??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find((e=>e.id===t));if(!o)throw new e({chainId:t,connectorId:this.id});if(4902===i.code)try{return await r.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[o.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(e){throw new R(e)}throw new L(i)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}};mc=new WeakMap,yc=new WeakMap;var vc,_c,Ec,xc,Cc,Sc,Ac,Ic,kc,Pc,Oc,Rc,Mc,Nc,Tc,jc,Lc,Dc,$c,Bc,Uc=i(9795),Fc="eip155",zc="requestedChains",Wc="wallet_addEthereumChain",Hc=class extends p{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),u(this,Ec),u(this,Cc),u(this,Ac),u(this,kc),u(this,Oc),u(this,Mc),u(this,Tc),u(this,Lc),u(this,$c),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,u(this,vc,void 0),u(this,_c,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,f.K)(e[0])})},this.onChainChanged=e=>{const t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{d(this,Mc,Nc).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},d(this,Ec,xc).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){const e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw new Error("No chains found on connector.");const n=await this.getProvider();d(this,kc,Pc).call(this);const i=d(this,Ac,Ic).call(this);if(n.session&&i&&await n.disconnect(),!n.session||i){const e=this.chains.filter((e=>e.id!==r)).map((e=>e.id));this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:t,optionalChains:[r,...e]}),d(this,Mc,Nc).call(this,this.chains.map((({id:e})=>e)))}const o=await n.enable(),s=(0,f.K)(o[0]),a=await this.getChainId();return{account:s,chain:{id:a,unsupported:this.isChainUnsupported(a)}}}catch(e){if(/user rejected/i.test(e?.message))throw new R(e);throw e}}async disconnect(){const e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{d(this,Oc,Rc).call(this),d(this,Mc,Nc).call(this,[])}}async getAccount(){const{accounts:e}=await this.getProvider();return(0,f.K)(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return l(this,vc)||await d(this,Ec,xc).call(this),e&&await this.switchChain(e),l(this,vc)}async getWalletClient({chainId:e}={}){const[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return ze({account:r,chain:n,transport:Ze(t)})}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=d(this,Ac,Ic).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){const t=this.chains.find((t=>t.id===e));if(!t)throw new L(new Error("chain not found on connector."));try{const r=await this.getProvider(),n=d(this,Lc,Dc).call(this),i=d(this,$c,Bc).call(this);if(!n.includes(e)&&i.includes(Wc)){await r.request({method:Wc,params:[{chainId:(0,q.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const n=d(this,Tc,jc).call(this);n.push(e),d(this,Mc,Nc).call(this,n)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,q.eC)(e)}]}),t}catch(e){if(/user rejected request/i.test("string"==typeof e?e:e?.message))throw new R(e);throw new L(e)}}};vc=new WeakMap,_c=new WeakMap,Ec=new WeakSet,xc=async function(){return l(this,_c)||"undefined"==typeof window||h(this,_c,d(this,Cc,Sc).call(this)),l(this,_c)},Cc=new WeakSet,Sc=async function(){const{EthereumProvider:e}=await Promise.resolve().then(i.bind(i,3098)),t=this.chains.map((({id:e})=>e));if(t.length){const{projectId:r,showQrModal:n=!0,qrModalOptions:i,metadata:o,relayUrl:s}=this.options;h(this,vc,await e.init({showQrModal:n,qrModalOptions:i,projectId:r,optionalChains:t,rpcMap:Object.fromEntries(this.chains.map((e=>[e.id,e.rpcUrls.default.http[0]]))),metadata:o,relayUrl:s}))}},Ac=new WeakSet,Ic=function(){if(d(this,$c,Bc).call(this).includes(Wc))return!1;if(!this.options.isNewChainsStale)return!1;const e=d(this,Tc,jc).call(this),t=this.chains.map((({id:e})=>e)),r=d(this,Lc,Dc).call(this);return!(r.length&&!r.some((e=>t.includes(e)))||t.every((t=>e.includes(t))))},kc=new WeakSet,Pc=function(){l(this,vc)&&(d(this,Oc,Rc).call(this),l(this,vc).on("accountsChanged",this.onAccountsChanged),l(this,vc).on("chainChanged",this.onChainChanged),l(this,vc).on("disconnect",this.onDisconnect),l(this,vc).on("session_delete",this.onDisconnect),l(this,vc).on("display_uri",this.onDisplayUri),l(this,vc).on("connect",this.onConnect))},Oc=new WeakSet,Rc=function(){l(this,vc)&&(l(this,vc).removeListener("accountsChanged",this.onAccountsChanged),l(this,vc).removeListener("chainChanged",this.onChainChanged),l(this,vc).removeListener("disconnect",this.onDisconnect),l(this,vc).removeListener("session_delete",this.onDisconnect),l(this,vc).removeListener("display_uri",this.onDisplayUri),l(this,vc).removeListener("connect",this.onConnect))},Mc=new WeakSet,Nc=function(e){this.storage?.setItem(zc,e)},Tc=new WeakSet,jc=function(){return this.storage?.getItem(zc)??[]},Lc=new WeakSet,Dc=function(){if(!l(this,vc))return[];const e=l(this,vc).session?.namespaces;if(!e)return[];const t=(0,Uc.fK)(e),r=t[Fc]?.chains?.map((e=>parseInt(e.split(":")[1]||"")));return r??[]},$c=new WeakSet,Bc=function(){if(!l(this,vc))return[];const e=l(this,vc).session?.namespaces;if(!e)return[];const t=(0,Uc.fK)(e),r=t[Fc]?.methods;return r??[]};const Vc={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"},qc=As.object({message:As.string()});function Gc(e){return As.literal(Vc[e])}As.object({accessList:As.array(As.string()),blockHash:As.string().nullable(),blockNumber:As.string().nullable(),chainId:As.string(),from:As.string(),gas:As.string(),hash:As.string(),input:As.string().nullable(),maxFeePerGas:As.string(),maxPriorityFeePerGas:As.string(),nonce:As.string(),r:As.string(),s:As.string(),to:As.string(),transactionIndex:As.string().nullable(),type:As.string(),v:As.string(),value:As.string()});const Zc=As.object({chainId:As.number()}),Kc=As.object({email:As.string().email()}),Yc=As.object({otp:As.string()}),Qc=As.object({chainId:As.optional(As.number())}),Jc=As.object({email:As.string().email()}),Xc=As.object({themeMode:As.optional(As.enum(["light","dark"])),themeVariables:As.optional(As.record(As.string(),As.string().or(As.number())))}),el=As.object({metadata:As.object({name:As.string(),description:As.string(),url:As.string(),icons:As.array(As.string())}).optional(),sdkVersion:As.string(),projectId:As.string()}),tl=As.object({action:As.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),rl=As.object({email:As.string().email(),address:As.string(),chainId:As.number()}),nl=As.object({isConnected:As.boolean()}),il=As.object({chainId:As.number()}),ol=As.object({chainId:As.number()}),sl=As.object({email:As.string().email()}),al=As.any(),cl=As.object({method:As.literal("personal_sign"),params:As.array(As.any())}),ll=As.object({method:As.literal("eth_sendTransaction"),params:As.array(As.any())}),ul=As.object({method:As.literal("eth_accounts")}),hl=As.object({method:As.literal("eth_getBalance"),params:As.array(As.any())}),dl=As.object({method:As.literal("eth_estimateGas"),params:As.array(As.any())}),pl=As.object({method:As.literal("eth_gasPrice")}),fl=As.object({method:As.literal("eth_signTypedData_v4"),params:As.array(As.any())}),gl=As.object({method:As.literal("eth_getTransactionByHash"),params:As.array(As.any())}),ml=As.object({method:As.literal("eth_blockNumber")}),yl=As.object({method:As.literal("eth_chainId")}),wl=As.object({token:As.string()}),bl={appEvent:As.object({type:Gc("APP_SWITCH_NETWORK"),payload:Zc}).or(As.object({type:Gc("APP_CONNECT_EMAIL"),payload:Kc})).or(As.object({type:Gc("APP_CONNECT_DEVICE")})).or(As.object({type:Gc("APP_CONNECT_OTP"),payload:Yc})).or(As.object({type:Gc("APP_GET_USER"),payload:As.optional(Qc)})).or(As.object({type:Gc("APP_SIGN_OUT")})).or(As.object({type:Gc("APP_IS_CONNECTED"),payload:As.optional(wl)})).or(As.object({type:Gc("APP_GET_CHAIN_ID")})).or(As.object({type:Gc("APP_RPC_REQUEST"),payload:cl.or(ll).or(ul).or(hl).or(dl).or(pl).or(fl).or(ml).or(yl).or(gl)})).or(As.object({type:Gc("APP_UPDATE_EMAIL"),payload:Jc})).or(As.object({type:Gc("APP_AWAIT_UPDATE_EMAIL")})).or(As.object({type:Gc("APP_SYNC_THEME"),payload:Xc})).or(As.object({type:Gc("APP_SYNC_DAPP_DATA"),payload:el})),frameEvent:As.object({type:Gc("FRAME_SWITCH_NETWORK_ERROR"),payload:qc}).or(As.object({type:Gc("FRAME_SWITCH_NETWORK_SUCCESS"),payload:ol})).or(As.object({type:Gc("FRAME_CONNECT_EMAIL_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_CONNECT_EMAIL_SUCCESS"),payload:tl})).or(As.object({type:Gc("FRAME_CONNECT_OTP_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_CONNECT_OTP_SUCCESS")})).or(As.object({type:Gc("FRAME_CONNECT_DEVICE_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_CONNECT_DEVICE_SUCCESS")})).or(As.object({type:Gc("FRAME_GET_USER_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_GET_USER_SUCCESS"),payload:rl})).or(As.object({type:Gc("FRAME_SIGN_OUT_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_SIGN_OUT_SUCCESS")})).or(As.object({type:Gc("FRAME_IS_CONNECTED_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_IS_CONNECTED_SUCCESS"),payload:nl})).or(As.object({type:Gc("FRAME_GET_CHAIN_ID_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_GET_CHAIN_ID_SUCCESS"),payload:il})).or(As.object({type:Gc("FRAME_RPC_REQUEST_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_RPC_REQUEST_SUCCESS"),payload:al})).or(As.object({type:Gc("FRAME_SESSION_UPDATE"),payload:wl})).or(As.object({type:Gc("FRAME_UPDATE_EMAIL_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_UPDATE_EMAIL_SUCCESS")})).or(As.object({type:Gc("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:sl})).or(As.object({type:Gc("FRAME_SYNC_THEME_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_SYNC_THEME_SUCCESS")})).or(As.object({type:Gc("FRAME_SYNC_DAPP_DATA_ERROR"),payload:qc})).or(As.object({type:Gc("FRAME_SYNC_DAPP_DATA_SUCCESS")}))},vl={set(e,t){localStorage.setItem(`${Vc.STORAGE_KEY}${e}`,t)},get:e=>localStorage.getItem(`${Vc.STORAGE_KEY}${e}`),delete(e){localStorage.removeItem(`${Vc.STORAGE_KEY}${e}`)}},_l=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],El=3e4,xl={getBlockchainApiUrl(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return _l.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const e=vl.get(Vc.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<El){const e=Math.ceil((El-t)/1e3);throw new Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){const e=vl.get(Vc.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<El)return Math.ceil((El-t)/1e3)}return 0}};class Cl{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=xl.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{window.addEventListener("message",(({data:t})=>{if(!t.type?.includes(Vc.FRAME_EVENT_KEY))return;const r=bl.frameEvent.parse(t);e(r)}))},onAppEvent:e=>{window.addEventListener("message",(({data:t})=>{if(!t.type?.includes(Vc.APP_EVENT_KEY))return;const r=bl.appEvent.parse(t);e(r)}))},postAppEvent:e=>{if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");bl.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")},postFrameEvent:e=>{if(!parent)throw new Error("W3mFrame: parent is not set");bl.frameEvent.parse(e),parent.postMessage(e,"*")}},this.projectId=e,this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),t){this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}));const t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${Vc.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map((e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})));return Object.assign({},...e)}}class Sl{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.w3mFrame=new Cl(e,!0),this.w3mFrame.events.onFrameEvent((e=>{switch(console.log("💻 received",e),e.type){case Vc.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case Vc.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case Vc.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case Vc.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case Vc.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case Vc.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case Vc.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case Vc.FRAME_GET_USER_ERROR:return this.onConnectError(e);case Vc.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case Vc.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case Vc.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case Vc.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case Vc.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case Vc.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case Vc.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case Vc.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case Vc.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case Vc.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case Vc.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case Vc.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case Vc.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case Vc.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(e);case Vc.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(e);case Vc.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case Vc.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);case Vc.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case Vc.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(e);default:return null}}))}getLoginEmailUsed(){return Boolean(vl.get(Vc.EMAIL_LOGIN_USED_KEY))}getEmail(){return vl.get(Vc.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,xl.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:Vc.APP_CONNECT_EMAIL,payload:e}),new Promise(((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}}))}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_CONNECT_DEVICE}),new Promise(((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}}))}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_CONNECT_OTP,payload:e}),new Promise(((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}}))}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_IS_CONNECTED,payload:void 0}),new Promise(((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}}))}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_GET_CHAIN_ID}),new Promise(((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}}))}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,xl.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:Vc.APP_UPDATE_EMAIL,payload:e}),new Promise(((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}}))}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_AWAIT_UPDATE_EMAIL}),new Promise(((e,t)=>{this.awaitUpdateEmailResolver={resolve:e,reject:t}}))}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_SYNC_THEME,payload:e}),new Promise(((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}}))}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_SYNC_DAPP_DATA,payload:e}),new Promise(((e,t)=>{this.syncDappDataResolver={resolve:e,reject:t}}))}async connect(e){const t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_GET_USER,payload:{chainId:t}}),new Promise(((e,t)=>{this.connectResolver={resolve:e,reject:t}}))}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise(((e,t)=>{this.switchChainResolver={resolve:e,reject:t}}))}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Vc.APP_SIGN_OUT}),new Promise(((e,t)=>{this.disconnectResolver={resolve:e,reject:t}}))}async request(e){return await this.w3mFrame.frameLoadPromise,"eth_chainId"===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:Vc.APP_RPC_REQUEST,payload:e}),new Promise(((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}})))}onRpcRequest(e){this.w3mFrame.events.onAppEvent((t=>{t.type.includes(Vc.RPC_METHOD_KEY)&&e(t)}))}onRpcResponse(e){this.w3mFrame.events.onFrameEvent((t=>{t.type.includes(Vc.RPC_METHOD_KEY)&&e(t)}))}onIsConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===Vc.FRAME_GET_USER_SUCCESS&&e()}))}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){const{payload:t}=e}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.awaitUpdateEmailResolver?.resolve(e.payload)}onAwaitUpdateEmailError(e){this.awaitUpdateEmailResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(void 0)}onSyncDappDataError(e){this.syncDappDataResolver?.reject(e.payload.message)}setNewLastEmailLoginTime(){vl.set(Vc.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){vl.set(Vc.EMAIL,e),vl.set(Vc.EMAIL_LOGIN_USED_KEY,"true"),vl.delete(Vc.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){vl.delete(Vc.EMAIL_LOGIN_USED_KEY),vl.delete(Vc.EMAIL),vl.delete(Vc.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){vl.set(Vc.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(vl.get(Vc.LAST_USED_CHAIN_KEY))}}class Al extends p{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},"undefined"!=typeof window&&(this.provider=new Sl(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){const{address:t,chainId:r}=await this.provider.connect({chainId:e.chainId});return{account:t,chain:{id:r,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{const t=this.chains.find((t=>t.id===e));if(!t)throw new L(new Error("chain not found on connector."));await this.provider.switchNetwork(e);const r=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:r}}),t}catch(e){if(e instanceof Error)throw new L(e);throw e}}async disconnect(){await this.provider.disconnect()}async getAccount(){const{address:e}=await this.provider.connect();return e}async getChainId(){const{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){const{address:e,chainId:t}=await this.provider.connect();return Promise.resolve(ze({account:e,chain:{id:t},transport:Ze(this.provider)}))}async isAuthorized(){const{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}const Il=vn.j1.getBlockchainApiUrl();function kl({projectId:e}){return function(t){if(!sc.WalletConnectRpcChainIds.includes(t.id))return null;const r=`${Il}/v1/?chainId=${oc.EIP155}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}function Pl({projectId:e,chains:t,metadata:r,enableInjected:n,enableCoinbase:i,enableEIP6963:o,enableEmail:s,enableWalletConnect:a}){const{publicClient:c}=function(e,t,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!e.length)throw new Error("must have at least one chain");let c=[];const l={},u={};for(const r of e){let e=!1;for(const n of t){const t=n(r);t&&(e=!0,c.some((({id:e})=>e===r.id))||(c=[...c,t.chain]),l[r.id]=[...l[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw new Error([`Could not find valid provider configuration for chain "${r.name}".\n`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join("\n"))}return{chains:c,publicClient:({chainId:t})=>{const u=c.find((e=>e.id===t))??e[0],h=l[u.id];if(!h||!h[0])throw new Error(`No providers configured for chain "${u.id}"`);const d=_r({batch:r,chain:u,transport:Er(h.map((e=>function(e,t={}){const{batch:r,fetchOptions:n,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=t;return({chain:a,retryCount:c,timeout:l})=>{const{batchSize:u=1e3,wait:h=0}="object"==typeof r?r:{},d=t.retryCount??c,p=l??t.timeout??1e4,f=e||a?.rpcUrls.default.http[0];if(!f)throw new xr;return Ge({key:i,name:o,async request({method:t,params:i}){const o={method:t,params:i},{schedule:s}=(0,Cr.S)({id:`${e}`,wait:h,shouldSplitBatch:e=>e.length>u,fn:e=>Or.http(f,{body:e,fetchOptions:n,timeout:p}),sort:(e,t)=>e.id-t.id}),[{error:a,result:c}]=await(async e=>r?s(e):[await Or.http(f,{body:e,fetchOptions:n,timeout:p})])(o);if(a)throw new m.bs({body:o,error:a,url:f});return c},retryCount:d,retryDelay:s,timeout:p,type:"http"},{fetchOptions:n,url:e})}}(e,{timeout:a}))),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:n});return Object.assign(d,{chains:c})},webSocketPublicClient:({chainId:t})=>{const l=c.find((e=>e.id===t))??e[0],h=u[l.id];if(!h||!h[0])return;const d=_r({batch:r,chain:l,transport:Er(h.map((e=>function(e,t={}){const{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:s,timeout:a})=>{const c=t.retryCount??s,l=a??t.timeout??1e4,u=e||o?.rpcUrls.default.webSocket?.[0];if(!u)throw new xr;return Ge({key:r,name:n,async request({method:e,params:t}){const r={method:e,params:t},n=await Pr(u),{error:i,result:o}=await Or.webSocketAsync(n,{body:r,timeout:l});if(i)throw new m.bs({body:r,error:i,url:u});return o},retryCount:c,retryDelay:i,timeout:l,type:"webSocket"},{getSocket:()=>Pr(u),async subscribe({params:e,onData:t,onError:r}){const n=await Pr(u),{result:i}=await new Promise(((i,o)=>Or.webSocket(n,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error)return o(e.error),void r?.(e.error);"number"!=typeof e.id?"eth_subscription"===e.method&&t(e.params):i(e)}})));return{subscriptionId:i,unsubscribe:async()=>new Promise((e=>Or.webSocket(n,{body:{method:"eth_unsubscribe",params:[i]},onResponse:e})))}}})}}(e,{timeout:a}))),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:n});return Object.assign(d,{chains:c})}}}(t,[kl({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]),l=[];return!1!==a&&l.push(new Hc({chains:t,options:{projectId:e,showQrModal:!1,metadata:r}})),!1!==n&&l.push(new Ye({chains:t,options:{shimDisconnect:!0}})),!1!==o&&l.push(new gc({chains:t})),!1!==i&&l.push(new bc({chains:t,options:{appName:r?.name??"Unknown"}})),!0===s&&l.push(new Al({chains:t,options:{projectId:e}})),function(e){const t=new rn(e);return en=t,t}({autoConnect:!0,connectors:l,publicClient:c})}let Ol;const Rl=o({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),Ml=o({id:421613,name:"Arbitrum Goerli",network:"arbitrum-goerli",nativeCurrency:{name:"Arbitrum Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-goerli.g.alchemy.com/v2"],webSocket:["wss://arb-goerli.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-goerli.infura.io/v3"],webSocket:["wss://arbitrum-goerli.infura.io/ws/v3"]},default:{http:["https://goerli-rollup.arbitrum.io/rpc"]},public:{http:["https://goerli-rollup.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://goerli.arbiscan.io"},default:{name:"Arbiscan",url:"https://goerli.arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:88114}},testnet:!0}),Nl={block:we({format(e){const t=e.transactions?.map((e=>{if("string"==typeof e)return e;const t=ge(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,H.y_)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}));return{transactions:t,stateRoot:e.stateRoot}}}),transaction:me({format(e){const t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,H.y_)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:rr({format:e=>({l1GasPrice:e.l1GasPrice?(0,H.y_)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,H.y_)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,H.y_)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})},Tl=o({id:10,name:"OP Mainnet",network:"optimism",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://opt-mainnet.g.alchemy.com/v2"],webSocket:["wss://opt-mainnet.g.alchemy.com/v2"]},infura:{http:["https://optimism-mainnet.infura.io/v3"],webSocket:["wss://optimism-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.optimism.io"]},public:{http:["https://mainnet.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://optimistic.etherscan.io"},default:{name:"Optimism Explorer",url:"https://explorer.optimism.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263}}},{formatters:Nl}),jl=o({id:420,name:"Optimism Goerli",network:"optimism-goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://opt-goerli.g.alchemy.com/v2"],webSocket:["wss://opt-goerli.g.alchemy.com/v2"]},infura:{http:["https://optimism-goerli.infura.io/v3"],webSocket:["wss://optimism-goerli.infura.io/ws/v3"]},default:{http:["https://goerli.optimism.io"]},public:{http:["https://goerli.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli-optimism.etherscan.io"},default:{name:"Etherscan",url:"https://goerli-optimism.etherscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:49461}},testnet:!0},{formatters:Nl}),Ll={block:we({format(e){const t=e.transactions?.map((e=>{if("string"==typeof e)return e;const t=Ll.transaction.format(e);return"0x71"===t.typeHex?t.type="eip712":"0xff"===t.typeHex&&(t.type="priority"),t}));return{l1BatchNumber:e.l1BatchNumber?(0,H.y_)(e.l1BatchNumber):null,l1BatchTimestamp:e.l1BatchTimestamp?(0,H.y_)(e.l1BatchTimestamp):null,transactions:t}}}),transaction:me({format(e){const t={};return"0x71"===e.type?t.type="eip712":"0xff"===e.type&&(t.type="priority"),{...t,l1BatchNumber:e.l1BatchNumber?(0,H.y_)(e.l1BatchNumber):null,l1BatchTxIndex:e.l1BatchTxIndex?(0,H.y_)(e.l1BatchTxIndex):null}}}),transactionReceipt:rr({format:e=>({l1BatchNumber:e.l1BatchNumber?(0,H.y_)(e.l1BatchNumber):null,l1BatchTxIndex:e.l1BatchTxIndex?(0,H.y_)(e.l1BatchTxIndex):null,logs:e.logs.map((e=>({...Kt(e),l1BatchNumber:e.l1BatchNumber?(0,H.y_)(e.l1BatchNumber):null,transactionLogIndex:(0,H.ly)(e.transactionLogIndex),logType:e.logType}))),l2ToL1Logs:e.l2ToL1Logs.map((e=>({blockNumber:(0,H.y_)(e.blockHash),blockHash:e.blockHash,l1BatchNumber:(0,H.y_)(e.l1BatchNumber),transactionIndex:(0,H.y_)(e.transactionIndex),shardId:(0,H.y_)(e.shardId),isService:e.isService,sender:e.sender,key:e.key,value:e.value,transactionHash:e.transactionHash,logIndex:(0,H.y_)(e.logIndex)})))})}),transactionRequest:(0,oe.iy)({exclude:["customSignature","factoryDeps","gasPerPubdata","paymaster","paymasterInput"],format:e=>e.gasPerPubdata||e.paymaster&&e.paymasterInput||e.factoryDeps||e.customSignature?{eip712Meta:{...e.gasPerPubdata?{gasPerPubdata:(0,q.NC)(e.gasPerPubdata)}:{},...e.paymaster&&e.paymasterInput?{paymasterParams:{paymaster:e.paymaster,paymasterInput:Array.from((0,ct.nr)(e.paymasterInput))}}:{},...e.factoryDeps?{factoryDeps:e.factoryDeps}:{},...e.customSignature?{customSignature:e.customSignature}:{}},type:"eip712"===e.type?"0x71":"0xff"}:{}})};class Dl extends g.G{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class $l extends g.G{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}const Bl={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,assertPosition(e){if(e<0||e>this.bytes.length-1)throw new $l({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new Dl({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},incrementPosition(e){if(e<0)throw new Dl({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){const e=this.inspectByte();return this.position++,e},readBytes(e){const t=this.inspectBytes(e);return this.position+=e,t},readUint8(){const e=this.inspectUint8();return this.position+=1,e},readUint16(){const e=this.inspectUint16();return this.position+=2,e},readUint24(){const e=this.inspectUint24();return this.position+=3,e},readUint32(){const e=this.inspectUint32();return this.position+=4,e},setPosition(e){this.assertPosition(e),this.position=e}};function Ul(e,t="hex"){const r=Fl(e),n=function(e){const t=Object.create(Bl);return t.bytes=e,t.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),t}(new Uint8Array(r.length));return r.encode(n),"hex"===t?(0,q.ci)(n.bytes):n.bytes}function Fl(e){return Array.isArray(e)?function(e){const t=e.reduce(((e,t)=>e+t.length),0),r=zl(t);return{length:t<=55?1+t:1+r+t,encode(n){t<=55?n.pushByte(192+t):(n.pushByte(247+r),1===r?n.pushUint8(t):2===r?n.pushUint16(t):3===r?n.pushUint24(t):n.pushUint32(t));for(const{encode:t}of e)t(n)}}}(e.map((e=>Fl(e)))):function(e){const t="string"==typeof e?(0,ct.nr)(e):e,r=zl(t.length);return{length:1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+r+t.length,encode(e){1===t.length&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+r),1===r?e.pushUint8(t.length):2===r?e.pushUint16(t.length):3===r?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}(e)}function zl(e){if(e<256)return 1;if(e<65536)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new g.G("Length is too large.")}function Wl(e){if(!e||0===e.length)return[];const t=[];for(let r=0;r<e.length;r++){const{address:n,storageKeys:i}=e[r];for(let e=0;e<i.length;e++)if(i[e].length-2!=64)throw new re.JC({storageKey:i[e]});if(!(0,Te.U)(n))throw new Ne.b({address:n});t.push([n,i])}return t}const Hl={transaction:(e,t)=>{return"customSignature"in(r=e)||"paymaster"in r||"paymasterInput"in r||"gasPerPubdata"in r||"factoryDeps"in r?function(e){const{chainId:t,gas:r,nonce:n,to:i,from:o,value:s,maxFeePerGas:a,maxPriorityFeePerGas:c,customSignature:l,factoryDeps:u,paymaster:h,paymasterInput:d,gasPerPubdata:p,data:f}=e;!function(e){const{chainId:t,to:r,from:n,paymaster:i,paymasterInput:o}=e;if(t<=0)throw new X.hJ({chainId:t});if(r&&!(0,Te.U)(r))throw new Ne.b({address:r});if(n&&!(0,Te.U)(n))throw new Ne.b({address:n});if(i&&!(0,Te.U)(i))throw new Ne.b({address:i});if(i&&!o)throw new g.G("`paymasterInput` must be provided when `paymaster` is defined");if(!i&&o)throw new g.G("`paymaster` must be provided when `paymasterInput` is defined")}(e);const m=[n?(0,q.NC)(n):"0x",c?(0,q.NC)(c):"0x",a?(0,q.NC)(a):"0x",r?(0,q.NC)(r):"0x",i??"0x",s?(0,q.NC)(s):"0x",f??"0x",(0,q.NC)(t),(0,q.NC)(""),(0,q.NC)(""),(0,q.NC)(t),o??"0x",p?(0,q.NC)(p):"0x",u??[],l??"0x",h&&d?[h,d]:[]];return(0,Z.SM)(["0x71",Ul(m)])}(e):function(e,t){const r=Ie(e);return"eip1559"===r?function(e,t){const{chainId:r,gas:n,nonce:i,to:o,value:s,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:l,data:u}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:o}=e;if(t<=0)throw new X.hJ({chainId:t});if(o&&!(0,Te.U)(o))throw new Ne.b({address:o});if(n)throw new g.G("`gasPrice` is not a valid EIP-1559 Transaction attribute.");if(i&&i>2n**256n-1n)throw new te.Hh({maxFeePerGas:i});if(r&&i&&r>i)throw new te.cs({maxFeePerGas:i,maxPriorityFeePerGas:r})}(e);const h=Wl(l),d=[(0,q.NC)(r),i?(0,q.NC)(i):"0x",c?(0,q.NC)(c):"0x",a?(0,q.NC)(a):"0x",n?(0,q.NC)(n):"0x",o??"0x",s?(0,q.NC)(s):"0x",u??"0x",h];if(t){const e=0n===t.v?"0x":1n===t.v?(0,q.NC)(1):27n===t.v?"0x":(0,q.NC)(1);d.push(e,(0,it.f)(t.r),(0,it.f)(t.s))}return(0,Z.SM)(["0x02",Ul(d)])}(e,t):"eip2930"===r?function(e,t){const{chainId:r,gas:n,data:i,nonce:o,to:s,value:a,accessList:c,gasPrice:l}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:o}=e;if(t<=0)throw new X.hJ({chainId:t});if(o&&!(0,Te.U)(o))throw new Ne.b({address:o});if(r||i)throw new g.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>2n**256n-1n)throw new te.Hh({maxFeePerGas:n})}(e);const u=Wl(c),h=[(0,q.NC)(r),o?(0,q.NC)(o):"0x",l?(0,q.NC)(l):"0x",n?(0,q.NC)(n):"0x",s??"0x",a?(0,q.NC)(a):"0x",i??"0x",u];if(t){const e=0n===t.v?"0x":1n===t.v?(0,q.NC)(1):27n===t.v?"0x":(0,q.NC)(1);h.push(e,(0,it.f)(t.r),(0,it.f)(t.s))}return(0,Z.SM)(["0x01",Ul(h)])}(e,t):function(e,t){const{chainId:r=0,gas:n,data:i,nonce:o,to:s,value:a,gasPrice:c}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:o,accessList:s}=e;if(o&&!(0,Te.U)(o))throw new Ne.b({address:o});if(void 0!==t&&t<=0)throw new X.hJ({chainId:t});if(r||i)throw new g.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>2n**256n-1n)throw new te.Hh({maxFeePerGas:n});if(s)throw new g.G("`accessList` is not a valid Legacy Transaction attribute.")}(e);let l=[o?(0,q.NC)(o):"0x",c?(0,q.NC)(c):"0x",n?(0,q.NC)(n):"0x",s??"0x",a?(0,q.NC)(a):"0x",i??"0x"];if(t){const e=(()=>{if(r>0)return BigInt(2*r)+BigInt(35n+t.v-27n);if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n);const e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new re.vl({v:t.v});return e})();l=[...l,(0,q.NC)(e),t.r,t.s]}else r>0&&(l=[...l,(0,q.NC)(r),"0x","0x"]);return Ul(l)}(e,t)}(e,t);var r}},Vl=[{safeNetworkIdentifier:"mainnet",chain:s},{safeNetworkIdentifier:"goerli",chain:a},{safeNetworkIdentifier:"arbitrum",chain:Rl},{chain:Ml},{safeNetworkIdentifier:"optimism",chain:Tl},{chain:jl},{chain:o({id:324,name:"zkSync Era",network:"zksync-era",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://mainnet.era.zksync.io"],webSocket:["wss://mainnet.era.zksync.io/ws"]},public:{http:["https://mainnet.era.zksync.io"],webSocket:["wss://mainnet.era.zksync.io/ws"]}},blockExplorers:{default:{name:"zkExplorer",url:"https://explorer.zksync.io"}},contracts:{multicall3:{address:"0xF9cda624FBC7e059355ce98a31693d299FACd963"}}},{serializers:Hl,formatters:Ll})},{chain:o({id:11155111,network:"sepolia",name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"SEP",decimals:18},rpcUrls:{alchemy:{http:["https://eth-sepolia.g.alchemy.com/v2"],webSocket:["wss://eth-sepolia.g.alchemy.com/v2"]},infura:{http:["https://sepolia.infura.io/v3"],webSocket:["wss://sepolia.infura.io/ws/v3"]},default:{http:["https://rpc.sepolia.org"]},public:{http:["https://rpc.sepolia.org"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://sepolia.etherscan.io"},default:{name:"Etherscan",url:"https://sepolia.etherscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x21B000Fd62a880b2125A61e36a284BB757b76025",blockCreated:3914906}},testnet:!0})},{chain:o({id:1101,name:"Polygon zkEVM",network:"polygon-zkevm",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://zkevm-rpc.com"]},public:{http:["https://zkevm-rpc.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://zkevm.polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:57746}}})}],ql={selectedAccount:null,signedByAccount:null,messageSignature:null,paymentDetails:null,signatureRequested:!1,transactionRequested:!1,transactionHashSubmitted:!1,lastOrderStatus:"",elements:{divPrepare:document.getElementById("prepare"),divError:document.getElementById("message-error"),divSuccess:document.getElementById("success"),divTransactionHash:document.getElementById("pretix-eth-transaction-hash"),aOrderDetailURL:document.getElementById("pretix-order-detail-url"),aNetworkData:document.getElementById("pretix-data-chain-info"),buttonConnect:document.getElementById("btn-connect"),submittedTransactionHash:document.getElementById("pretix-eth-submitted-transaction-hash"),paymentNetworkName:document.getElementById("payment-network-id")},selectors:{paymentSteps:document.querySelectorAll(".pretix-eth-payment-steps")},chains:[],web3Modal:null};function Gl(){return ql.elements.buttonConnect.getAttribute("data-transaction-details-url")}async function Zl(e=!1){if(!e&&null!==ql.paymentDetails)return ql.paymentDetails;const t=await(dn()?.address),r=Gl(),n=await fetch(r+"?"+new URLSearchParams({sender_address:t}));if(n.status>=400)throw"Failed to fetch order details. If this problem persists, please contact the organizer directly.";return await n.json()}function Kl(e){e+="=";const t=decodeURIComponent(document.cookie).split(";");for(let r=0;r<t.length;r++){const n=t[r].trim();if(0==n.indexOf(e))return n.substring(e.length,n.length)}}function Yl(e="",t=!0){ql.transactionHashSubmitted?(e="",t=!1):(ql.transactionRequested=!1,ql.signatureRequested=!1,"object"==typeof e&&(e=e.data&&e.data.message?e.data.message+". Please try again.":void 0!==e.message?e.message+". Please try again.":void 0!==e.error&&void 0!==e.error.message?e.error.message+". Please try again.":""),""===e&&(e="There was an error, please try again, or contact support if you have already confirmed a payment in your wallet provider.")),ql.elements.divError.innerHTML=e,!0===t&&Ql("prepare");try{ql.elements.buttonConnect.removeAttribute("disabled")}catch(e){return!1}return!1}function Ql(e){ql.selectors.paymentSteps.forEach((function(t){t.id===e?t.style.display="block":t.style.display="none"}))}async function Jl(){let e=ql.elements.aOrderDetailURL.getAttribute("data-order-detail-url");const t=Kl("pretix_csrftoken");let r=await fetch(e,{headers:{"X-CSRF-TOKEN":t,"HTTP-X-CSRFTOKEN":t}});if(r.ok){let e=await r.json();""===ql.lastOrderStatus?ql.lastOrderStatus=e.status:ql.lastOrderStatus!==e.status&&"p"===e.status&&location.reload()}}function Xl(e){return/^0x([A-Fa-f0-9]{64})$/.test(e)}const eu=e=>{try{const t=JSON.parse(e);if(t.error)throw t.error}catch(e){}};async function tu(){ql.elements.divError.innerHTML="";try{await async function(){if(ql.paymentDetails=await Zl(!0),!0!==ql.paymentDetails.is_signature_submitted)if(!0!==ql.paymentDetails.has_other_unpaid_orders)if((await pn()).chain.id!==ql.paymentDetails.chain_id)try{Ql("switching-chains"),await gn({chainId:ql.paymentDetails.chain_id})}catch(e){console.error(e),Yl("There was an error switching chains. You may have to manually switch to the appropriate chain in your connected wallet, and then try again.")}else await async function(){try{await async function(){if(ql.selectedAccount=await(dn()?.address),ql.paymentDetails=await Zl(),null!==ql.messageSignature&&ql.selectedAccount===ql.signedByAccount)await ru();else if(ql.signatureRequested)console.log("Requesting more than one message signature.");else{Ql("sign-a-message"),ql.signatureRequested=!0;const e=ql.paymentDetails.message,t=cn();if(await t.getBytecode({address:ql.selectedAccount})){const t=async()=>{const e=`https://safe-transaction-${ql.safeNetworkIdentifier}.safe.global/api/v1/safes/${ql.selectedAccount}`;return(await fetch(e)).ok};if(!await t())return Yl("This version of the crypto payment plugin only supports Safe wallet (on supported networks) and EOA wallets. Please connect another wallet."),void(ql.signatureRequested=!1);const r=await fn(e);eu(r);const n=new URL(window.location.origin+window.__validateSignatureUrl);n.searchParams.append("signature",r),n.searchParams.append("sender",ql.selectedAccount);const i=Kl("pretix_csrftoken"),o=await fetch(n.href,{headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":i,"HTTP-X-CSRFTOKEN":i},method:"GET"});if(ql.messageSignature=r,ql.signedByAccount=ql.selectedAccount,!o.ok)return Yl("EIP1271 validation error: unable to verify signature; your wallet may not be supported."),void(ql.signatureRequested=!1);await ru()}else{const t=await fn(e);eu(t),ql.messageSignature=t,ql.signedByAccount=ql.selectedAccount,await ru()}}}()}catch(e){Yl(e),ql.signatureRequested=!1}}();else Yl("Please wait for other payments from your wallet to be confirmed before submitting another transaction.");else Yl("It seems that you have paid for this order already.")}()}catch(e){Yl(e,!0)}}async function ru(){try{await async function(){if(!0!==ql.transactionRequested)if(ql.transactionRequested=!0,ql.paymentDetails=await Zl(),null!==ql.paymentDetails.erc20_contract_address){const e=ql.paymentDetails.erc20_contract_address,r=await un({abi:sn,address:e,functionName:"balanceOf",args:[ql.selectedAccount]});if(BigInt(r)<BigInt(ql.paymentDetails.amount))return void Yl("Not enough balance to pay using this wallet, please use another currency or payment method, or transfer funds to your wallet and try again.",!0);Ql("send-transaction");try{const r=await async function(e){const r=await ln({chainId:e.chainId});if(!r)throw new t;let n;if(e.chainId&&wn({chainId:e.chainId}),"prepared"===e.mode)n=e.request;else{const{chainId:r,mode:i,...o}=e,s=await async function({abi:e,address:r,args:n,chainId:i,dataSuffix:o,functionName:s,walletClient:a,...c}){const l=cn({chainId:i}),u=a??await ln({chainId:i});if(!u)throw new t;i&&wn({chainId:i});const{account:h,accessList:d,blockNumber:p,blockTag:f,gas:g,gasPrice:m,maxFeePerGas:y,maxPriorityFeePerGas:w,nonce:b,value:v}=function(e){return{accessList:e.accessList,account:e.account,blockNumber:e.blockNumber,blockTag:e.blockTag,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}(c),{result:_,request:E}=await l.simulateContract({abi:e,address:r,functionName:s,args:n,account:h||u.account,accessList:d,blockNumber:p,blockTag:f,dataSuffix:o,gas:g,gasPrice:m,maxFeePerGas:y,maxPriorityFeePerGas:w,nonce:b,value:v});return{mode:"prepared",request:{...E,abi:e.filter((e=>"name"in e&&e.name===s)),chainId:i},result:_}}(o);n=s.request}return{hash:await r.writeContract({...n,chain:e.chainId?{id:e.chainId}:null})}}({abi:sn,address:e,functionName:"transfer",args:[ql.paymentDetails.recipient_address,ql.paymentDetails.amount]});if(!Xl(r.hash))throw"Invalid transaction hash";eu(r),await nu(r.hash)}catch(e){Yl(e)}}else{Ql("send-transaction");try{const e=await async function({accessList:e,account:r,chainId:n,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,mode:u,nonce:h,to:d,value:p}){const g=await ln({chainId:n});if(!g)throw new t;let m;return n&&wn({chainId:n}),m="prepared"===u?{account:r,accessList:e,chain:null,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:h,to:d,value:p}:await async function({accessList:e,account:r,chainId:n,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:h,value:d,walletClient:p}){const g=cn({chainId:n}),m=p??await ln({chainId:n});if(!m)throw new t;n&&wn({chainId:n});const y=(h&&!(0,Te.U)(h)?await async function({chainId:e,name:t}){const{normalize:r}=await Promise.resolve().then(i.bind(i,4849)),n=cn({chainId:e}),o=await n.getEnsAddress({name:r(t)});try{return"0x0000000000000000000000000000000000000000"===o?null:o?(0,f.K)(o):null}catch(e){return null}}({name:h}):h)||void 0;if(y&&!(0,Te.U)(y))throw new Error("Invalid address");return{accessList:e,account:r,data:o,gas:void 0===s?await g.estimateGas({accessList:e,account:m.account,data:o,gas:s??void 0,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:y,value:d}):s||void 0,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,mode:"prepared",nonce:u,to:y,value:d,...n?{chainId:n}:{}}}({accessList:e,account:r,chainId:n,data:o,gas:s||null,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:h,to:d,value:p}),{hash:await g.sendTransaction({...m,chain:n?{id:n}:null})}}({to:ql.paymentDetails.recipient_address,value:ql.paymentDetails.amount});if(!Xl(e.hash))throw"Invalid transaction hash";await nu(e.hash)}catch(e){Yl(e)}}else console.log("Transaction was already submitted.")}()}catch(e){Yl(e,!0)}}async function nu(e){try{await async function(e){const t=await(async e=>{try{const t=`https://safe-transaction-${ql.safeNetworkIdentifier}.safe.global/api/v1/multisig-transactions/${e}`;if((await fetch(t)).ok)return t}catch(e){return}})(e),r=Kl("pretix_csrftoken"),n=Gl();let i=new URLSearchParams({signedMessage:ql.messageSignature,transactionHash:e,selectedAccount:ql.signedByAccount,csrfmiddlewaretoken:r});t&&i.append("safeAppTransactionUrl",t),fetch(n,{headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":r,"HTTP-X-CSRFTOKEN":r},method:"POST",body:i}).then((async r=>{r.ok?(function(e,t){ql.transactionHashSubmitted=!0;const r=ql.elements.aNetworkData.getAttribute("data-chain-id");ql.elements.divTransactionHash.innerHTML=t||function(e,t){const r=Vl.filter((t=>t.chain.id===parseInt(e)));let n;r&&(n=r[0].chain);const i=n?.blockExplorers?.etherscan?.url;return i?'<a href="'+i+"/tx/"+t+'" target="_blank">'+t+"</a>":t}(r,e),Ql(),ql.elements.divSuccess.style.display="block"}(e,t),await async function(){for(;;)await Jl(),await new Promise((e=>setTimeout(e,5e3)))}()):Yl("There was an error processing your payment, please contact support. Your payment was sent in transaction "+e+".",!1)}))}(e)}catch(e){Yl(e,!0)}}!async function(){const e=ql.elements.buttonConnect.getAttribute("data-chain-id"),t=document.getElementById("web3modal").getAttribute("data-walletconnect-id");document.title="Pretix Payment";const r=Vl.filter((t=>t.chain.id===parseInt(e)));if(r.length<1)return void Yl("Invalid chain ID");const n=(window.location.origin,[r[0].chain]),i=Pl({chains:n,projectId:t,appName:"Pretix Payment Plugin"});let o;var s,a;ql.web3Modal=(s={wagmiConfig:i,projectId:t,chains:n,themeMode:"light"},Ol||(Ol=new lc({...s,_sdkVersion:`react-wagmi-${oc.VERSION}`}),(a=Ol)&&(bn=a)),Ol),ql.safeNetworkIdentifier=r[0].safeNetworkIdentifier,mn((async e=>{if("connecting"===o&&"connected"===e.status)try{await tu()}catch(e){Yl(e)}o=e.status})),yn((()=>{Ql("prepare")})),ql.elements.divPrepare.style.display="block",document.getElementById("spinner").style.display="none",ql.elements.buttonConnect.addEventListener("click",(async()=>{try{await async function(){try{if((await dn()).isConnected)return!0;await ql.web3Modal.open()}catch(e){throw console.error(e,"Sign in failed"),e}return!1}()&&await tu()}catch(e){Yl(error)}}))}()})()})();