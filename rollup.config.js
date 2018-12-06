import nodeResolve from 'rollup-plugin-node-resolve';

const files = ['index', 'service-worker'];

export default {
  // input: ['lib/index.js', 'lib/service-worker.js'],
  input: files.map((file) => `lib/${file}.js`),
  output: {
    format: 'esm',
    dir: 'public',
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true,
      // modulesOnly: true,
    }),
  ],
  experimentalCodeSplitting: true,
};
