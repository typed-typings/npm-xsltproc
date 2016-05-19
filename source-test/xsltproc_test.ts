'use strict';

var chai  = require("chai"),
    xsltproc = require('xsltproc');

/*jshint undef: false */
it("should return the correct TXT", function (done) {

  var xsl = 'fixtures/txt.xsl',
      xml = 'fixtures/data.xml',
      xslt = xsltproc.transform(xsl, xml);

  xslt.on('exit', function (code) {
    chai.assert.equal(code, 0, 'xsltproc process exited with code ' + code);
    done();
  });

});


it("should return the correct HTML", function (done) {

  var xsl = 'fixtures/html.xsl',
      xml = 'fixtures/data.xml',
      xslt = xsltproc.transform(xsl, xml);

  xslt.on('exit', function (code) {
    chai.assert.equal(code, 0, 'xsltproc process exited with code ' + code);
    done();
  });

});
