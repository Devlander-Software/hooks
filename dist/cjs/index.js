'use strict';var e=require('react-native');const t=e.Platform.select({web:()=>require('./useComponentSize.web').default,default:()=>require('./useComponentSize.native').default}),r=e.Platform.select({web:()=>require('./useOnClickByStyle.web').default,default:()=>require('./useOnClickByStyle.native').default}),i=e.Platform.select({web:()=>require('./useScreenDimensions.web').default,default:()=>require('./useScreenDimensions.native').default}),l=e.Platform.select({web:()=>require('./useScrollControl.web').default,default:()=>require('./useScrollControl.native').default}),u=e.Platform.select({web:()=>require('./useVisibilitySensor.web').default,native:()=>require('./useVisibilitySensor.native').default});exports.useComponentSize=t,exports.useOnClickByStyle=r,exports.useScreenDimensions=i,exports.useScrollControl=l,exports.useVisibilitySensor=u;
//# sourceMappingURL=index.js.map
