// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNews = require('../../../app/controller/news');

declare module 'egg' {
  interface IController {
    news: ExportNews;
  }
}
