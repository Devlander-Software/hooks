import{Platform as e}from'react-native';const t=e.select({web:()=>require('./useComponentSize.web').default,default:()=>require('./useComponentSize.native').default}),i=e.select({web:()=>require('./useScreenDimensions.web').default,default:()=>require('./useScreenDimensions.native').default});export{t as useComponentSize,i as useScreenDimensions};
//# sourceMappingURL=index.js.map
