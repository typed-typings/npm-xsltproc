import process = require('child_process');

declare namespace xsltproc {
  export interface Option {
    xinclude?: any;
    novalid?: any;
    profile?: any;
    output?: string;
    encoding?: string;
  }

  export function transform(stylesheet: string, file: string, options?: Option): process.ChildProcess;
}

export = xsltproc;
