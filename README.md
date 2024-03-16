# jest with esm

Test using a pure-ESM module dependency (`quick-lru`) in jest

We are using `"type":"module"` in this module's package.json, which marks this
module as pure-ESM, and then allows us to consume other pure-ESM modules. This
is the most canonical setup



## The command line flag that makes it work

```bash
$ NODE_OPTIONS="$NODE_OPTIONS --experimental-vm-modules" yarn test

yarn run v1.22.22
warning package.json: No license field
$ jest
(node:409041) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  src/lru.test.js
  ✓ testing (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.136 s
Ran all test suites.
Done in 0.50s.
```



## Fails without that command line flag

```bash
 yarn test
yarn run v1.22.22
warning package.json: No license field
$ jest
 FAIL  src/lru.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /home/cdiesh/t1/src/lru.test.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import makeLRU from "./lru";
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.139 s, estimated 1 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


```

## Reference

https://jestjs.io/docs/ecmascript-modules
