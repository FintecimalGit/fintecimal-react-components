function DetectPdf () {
  function hasAcrobatInstalled() {
    function getActiveXObject(name) {
      try { return new ActiveXObject(name); } catch(e) {}
    }

    return getActiveXObject('AcroPDF.PDF') || getActiveXObject('PDF.PdfCtrl')
  }

  function isIos() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  }
 
  return navigator.pdfViewerEnabled || hasAcrobatInstalled() || isIos()
};

export default DetectPdf;
