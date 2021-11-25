"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function DetectPdf() {
  function hasAcrobatInstalled() {
    function getActiveXObject(name) {
      try {
        return new ActiveXObject(name);
      } catch (e) {}
    }

    return getActiveXObject('AcroPDF.PDF') || getActiveXObject('PDF.PdfCtrl');
  }

  function isIos() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  return navigator.pdfViewerEnabled || hasAcrobatInstalled() || isIos();
}

;
var _default = DetectPdf;
exports.default = _default;