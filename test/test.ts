import tape = require('blue-tape');
import xsltproc = require('xsltproc');
import fs = require('fs');

tape('test option.output', (test) => {
  test.plan(1);
  const xsl = '../source-test/fixtures/txt.xsl';
  const xml = '../source-test/fixtures/data.xml';
  const out = '../out/testout.xml';

  const xslt = xsltproc.transform(xsl, xml, {
    output: out
  });

  xslt.on('exit', () => {
    let stat = fs.statSync(out);
    test.assert(stat.isFile(), 'output file exists');
  });
});
