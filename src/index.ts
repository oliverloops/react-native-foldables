// Reexport the native module. On web, it will be resolved to ReactNativeFoldablesModule.web.ts
// and on native platforms to ReactNativeFoldablesModule.ts
export { default } from './ReactNativeFoldablesModule';
export { default as ReactNativeFoldablesView } from './ReactNativeFoldablesView';
export * from  './ReactNativeFoldables.types';
