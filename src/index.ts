// Reexport the native module. On web, it will be resolved to OnetransferModule.web.ts
// and on native platforms to OnetransferModule.ts
export { default } from './OnetransferModule';
export { default as OnetransferView } from './OnetransferView';
export * from  './Onetransfer.types';
