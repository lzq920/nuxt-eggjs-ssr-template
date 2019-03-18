// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/middleware/auth');
import ExportNuxt = require('../../../app/middleware/nuxt');

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    nuxt: typeof ExportNuxt;
  }
}
