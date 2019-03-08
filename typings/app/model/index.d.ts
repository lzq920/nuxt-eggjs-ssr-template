// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNews = require('../../../app/model/news');

declare module 'egg' {
  interface IModel {
    News: ReturnType<typeof ExportNews>;
  }
}
