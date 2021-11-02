import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target'
export const config: Config = {
  namespace: 'core',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'core',
      proxiesFile: '../react/src/index.ts',
      includeDefineCustomElements: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
