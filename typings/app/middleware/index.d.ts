// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNuxt = require('../../../app/middleware/nuxt');

declare module 'egg' {
  interface IMiddleware {
    nuxt: typeof ExportNuxt;
  }
}
