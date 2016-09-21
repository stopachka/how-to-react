
/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
/*
 * This hash helps exerslide to determine whether the file needs to be updated
 * or not. Please don't remove it.
 * @exerslide-file-hash 2f760723ed2bdf31f236761e01c5ab1e
 */

'use strict';

const isTextPath = require('is-text-path');
const path = require('path');

module.exports = {

  /** Standard configuration options **/

  /**
   * Paths to stylesheets. Can refer to modules.
   */
  stylesheets: [
    'foundation-sites/dist/foundation.css',
    'font-awesome/css/font-awesome.css',
    'highlight.js/styles/solarized-light.css',
    './css/exerslide.css',
    './css/custom.css',
  ],

  /**
   * This map allows you to automatically assign layouts based on file
   * extension.
   */
  defaultLayouts: {
   '.js.md': 'JavaScriptExercise',
  },

  /**
   * List of plugins to load. Plugins provide layouts, content type converters,
   * or other extensions to the exerslide or webpack config.
   *
   * A list of module names (exerslide-plugin-* can be omitted) or paths.
   */
  plugins: [
    'center-layout',
    'column-layout',
   'javascriptexercise-layout',
    'markdown-converter',
  ],

  /** Advanced configuration options **/

  /**
   * Absolute path to save the built presentation.
   */
 out: path.join(__dirname, './docs'),

  /**
   * File path patterns used to watch slides for changes while creating the
   * presentation.
   */
  slidePaths: [
    './slides/*',
    './slides/*/*',
  ],

  /**
   * A function with which you can filter and reorder the file paths matched by
   * the patterns in "slidePaths".
   */
  processSlides(paths) {
    return paths.filter(isTextPath).sort();
  },
};
