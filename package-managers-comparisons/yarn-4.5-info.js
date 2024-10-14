// yarn 4.5 info output + formatted into a valid json:
const arr = [
  {
    value: "@apollo/client@npm:3.11.8",
    children: {
      Instances: 1,
      Version: "3.11.8",
      Dependencies: [
        {
          descriptor: "@graphql-typed-document-node/core@npm:^3.1.1",
          locator: "@graphql-typed-document-node/core@npm:3.2.0",
        },
        {
          descriptor: "@wry/caches@npm:^1.0.0",
          locator: "@wry/caches@npm:1.0.1",
        },
        {
          descriptor: "@wry/equality@npm:^0.5.6",
          locator: "@wry/equality@npm:0.5.7",
        },
        { descriptor: "@wry/trie@npm:^0.5.0", locator: "@wry/trie@npm:0.5.0" },
        {
          descriptor: "graphql-tag@npm:^2.12.6",
          locator: "graphql-tag@npm:2.12.6",
        },
        {
          descriptor: "hoist-non-react-statics@npm:^3.3.2",
          locator: "hoist-non-react-statics@npm:3.3.2",
        },
        { descriptor: "optimism@npm:^0.18.0", locator: "optimism@npm:0.18.0" },
        {
          descriptor: "prop-types@npm:^15.7.2",
          locator: "prop-types@npm:15.8.1",
        },
        { descriptor: "rehackt@npm:^0.1.0", locator: "rehackt@npm:0.1.0" },
        {
          descriptor: "response-iterator@npm:^0.2.6",
          locator: "response-iterator@npm:0.2.6",
        },
        {
          descriptor: "symbol-observable@npm:^4.0.0",
          locator: "symbol-observable@npm:4.0.0",
        },
        {
          descriptor: "ts-invariant@npm:^0.10.3",
          locator: "ts-invariant@npm:0.10.3",
        },
        { descriptor: "tslib@npm:^2.3.0", locator: "tslib@npm:2.7.0" },
        {
          descriptor: "zen-observable-ts@npm:^1.2.5",
          locator: "zen-observable-ts@npm:1.2.5",
        },
      ],
    },
  },
  {
    value: "@apollo/persisted-query-lists@npm:1.0.0",
    children: { Instances: 1, Version: "1.0.0" },
  },
  {
    value: "@auth0/auth0-react@npm:1.12.1",
    children: {
      Instances: 1,
      Version: "1.12.1",
      Dependencies: [
        {
          descriptor: "@auth0/auth0-spa-js@npm:^1.22.6",
          locator: "@auth0/auth0-spa-js@npm:1.22.6",
        },
      ],
    },
  },
  {
    value: "@auth0/nextjs-auth0@npm:1.9.3",
    children: {
      Instances: 1,
      Version: "1.9.3",
      Dependencies: [
        { descriptor: "base64url@npm:^3.0.1", locator: "base64url@npm:3.0.1" },
        { descriptor: "cookie@npm:^0.5.0", locator: "cookie@npm:0.5.0" },
        { descriptor: "debug@npm:^4.3.4", locator: "debug@npm:4.3.7" },
        {
          descriptor: "futoin-hkdf@npm:^1.5.0",
          locator: "futoin-hkdf@npm:1.5.3",
        },
        {
          descriptor: "http-errors@npm:^1.8.1",
          locator: "http-errors@npm:1.8.1",
        },
        { descriptor: "joi@npm:^17.6.0", locator: "joi@npm:17.13.3" },
        { descriptor: "jose@npm:^2.0.5", locator: "jose@npm:2.0.7" },
        {
          descriptor: "on-headers@npm:^1.0.2",
          locator: "on-headers@npm:1.0.2",
        },
        {
          descriptor: "openid-client@npm:^4.9.1",
          locator: "openid-client@npm:4.9.1",
        },
        { descriptor: "tslib@npm:^2.4.0", locator: "tslib@npm:2.7.0" },
        { descriptor: "url-join@npm:^4.0.1", locator: "url-join@npm:4.0.1" },
      ],
    },
  },
  {
    value:
      "@brainhubeu/license-auditor@https://github.com/brainhubeu/license-auditor.git#commit=6c0b9440ea374b2dd592ead7b003d2af828c225f",
    children: {
      Version: "1.2.0",
      Dependencies: [
        { descriptor: "bluebird@npm:^3.7.2", locator: "bluebird@npm:3.7.2" },
        { descriptor: "lodash@npm:^4.17.21", locator: "lodash@npm:4.17.21" },
      ],
    },
  },
  {
    value: "@hookform/resolvers@npm:2.9.11",
    children: { Instances: 1, Version: "2.9.11" },
  },
  {
    value: "@react-hook/merged-ref@npm:1.3.2",
    children: { Instances: 1, Version: "1.3.2" },
  },
  {
    value: "@stitches/react@npm:1.2.8",
    children: { Instances: 1, Version: "1.2.8" },
  },
  {
    value: "@stripe/react-stripe-js@npm:2.8.1",
    children: {
      Instances: 1,
      Version: "2.8.1",
      Dependencies: [
        {
          descriptor: "prop-types@npm:^15.7.2",
          locator: "prop-types@npm:15.8.1",
        },
      ],
    },
  },
  { value: "@stripe/stripe-js@npm:1.54.2", children: { Version: "1.54.2" } },
  {
    value: "@tanstack/react-query-devtools@npm:4.36.1",
    children: {
      Instances: 1,
      Version: "4.36.1",
      Dependencies: [
        {
          descriptor: "@tanstack/match-sorter-utils@npm:^8.7.0",
          locator: "@tanstack/match-sorter-utils@npm:8.19.4",
        },
        {
          descriptor: "superjson@npm:^1.10.0",
          locator: "superjson@npm:1.13.3",
        },
        {
          descriptor: "use-sync-external-store@npm:^1.2.0",
          locator: "use-sync-external-store@npm:1.2.2",
        },
      ],
    },
  },
  {
    value: "@tanstack/react-query@npm:4.36.1",
    children: {
      Instances: 1,
      Version: "4.36.1",
      Dependencies: [
        {
          descriptor: "@tanstack/query-core@npm:4.36.1",
          locator: "@tanstack/query-core@npm:4.36.1",
        },
        {
          descriptor: "use-sync-external-store@npm:^1.2.0",
          locator: "use-sync-external-store@npm:1.2.2",
        },
      ],
    },
  },
  {
    value: "@testing-library/jest-dom@npm:5.17.0",
    children: {
      Version: "5.17.0",
      Dependencies: [
        {
          descriptor: "@adobe/css-tools@npm:^4.0.1",
          locator: "@adobe/css-tools@npm:4.4.0",
        },
        {
          descriptor: "@babel/runtime@npm:^7.9.2",
          locator: "@babel/runtime@npm:7.25.7",
        },
        {
          descriptor: "@types/testing-library__jest-dom@npm:^5.9.1",
          locator: "@types/testing-library__jest-dom@npm:5.14.9",
        },
        {
          descriptor: "aria-query@npm:^5.0.0",
          locator: "aria-query@npm:5.3.2",
        },
        { descriptor: "chalk@npm:^3.0.0", locator: "chalk@npm:3.0.0" },
        {
          descriptor: "css.escape@npm:^1.5.1",
          locator: "css.escape@npm:1.5.1",
        },
        {
          descriptor: "dom-accessibility-api@npm:^0.5.6",
          locator: "dom-accessibility-api@npm:0.5.16",
        },
        { descriptor: "lodash@npm:^4.17.15", locator: "lodash@npm:4.17.21" },
        { descriptor: "redent@npm:^3.0.0", locator: "redent@npm:3.0.0" },
      ],
    },
  },
  {
    value: "@testing-library/react@npm:13.4.0",
    children: {
      Instances: 1,
      Version: "13.4.0",
      Dependencies: [
        {
          descriptor: "@babel/runtime@npm:^7.12.5",
          locator: "@babel/runtime@npm:7.25.7",
        },
        {
          descriptor: "@testing-library/dom@npm:^8.5.0",
          locator: "@testing-library/dom@npm:8.20.1",
        },
        {
          descriptor: "@types/react-dom@npm:^18.0.0",
          locator: "@types/react-dom@npm:18.3.1",
        },
      ],
    },
  },
  {
    value: "@testing-library/user-event@npm:13.5.0",
    children: {
      Instances: 1,
      Version: "13.5.0",
      Dependencies: [
        {
          descriptor: "@babel/runtime@npm:^7.12.5",
          locator: "@babel/runtime@npm:7.25.7",
        },
      ],
    },
  },
  {
    value: "@types/draft-js@npm:0.11.18",
    children: {
      Version: "0.11.18",
      Dependencies: [
        {
          descriptor: "@types/react@npm:*",
          locator: "@types/react@npm:18.3.11",
        },
        { descriptor: "immutable@npm:~3.7.4", locator: "immutable@npm:3.7.6" },
      ],
    },
  },
  {
    value: "@types/react-slider@npm:1.3.6",
    children: {
      Version: "1.3.6",
      Dependencies: [
        {
          descriptor: "@types/react@npm:*",
          locator: "@types/react@npm:18.3.11",
        },
      ],
    },
  },
  {
    value: "auth0-js@npm:9.27.0",
    children: {
      Version: "9.27.0",
      Dependencies: [
        { descriptor: "base64-js@npm:^1.5.1", locator: "base64-js@npm:1.5.1" },
        {
          descriptor: "idtoken-verifier@npm:^2.2.4",
          locator: "idtoken-verifier@npm:2.2.4",
        },
        { descriptor: "js-cookie@npm:^2.2.0", locator: "js-cookie@npm:2.2.1" },
        { descriptor: "minimist@npm:^1.2.5", locator: "minimist@npm:1.2.8" },
        { descriptor: "qs@npm:^6.10.1", locator: "qs@npm:6.13.0" },
        {
          descriptor: "superagent@npm:^7.1.5",
          locator: "superagent@npm:7.1.6",
        },
        { descriptor: "url-join@npm:^4.0.1", locator: "url-join@npm:4.0.1" },
        { descriptor: "winchan@npm:^0.2.2", locator: "winchan@npm:0.2.2" },
      ],
    },
  },
  {
    value: "axios@npm:1.7.7",
    children: {
      Version: "1.7.7",
      Dependencies: [
        { descriptor: "form-data@npm:^4.0.0", locator: "form-data@npm:4.0.1" },
        {
          descriptor: "proxy-from-env@npm:^1.1.0",
          locator: "proxy-from-env@npm:1.1.0",
        },
        {
          descriptor:
            "follow-redirects@virtual:cfbedc233d4c16068d815547ad303dec1092fdb3b8bb4ec9ab9c56bdd55b4e87650c7a525a88805756f4d2819c03abfd96a9983cfa927fedf995d1b8b879db38#npm:^1.15.6",
          locator:
            "follow-redirects@virtual:cfbedc233d4c16068d815547ad303dec1092fdb3b8bb4ec9ab9c56bdd55b4e87650c7a525a88805756f4d2819c03abfd96a9983cfa927fedf995d1b8b879db38#npm:1.15.9",
        },
      ],
    },
  },
  {
    value: "beautiful-react-hooks@npm:1.2.0",
    children: {
      Instances: 1,
      Version: "1.2.0",
      Dependencies: [
        {
          descriptor: "lodash.debounce@npm:^4.0.8",
          locator: "lodash.debounce@npm:4.0.8",
        },
        {
          descriptor: "lodash.throttle@npm:^4.1.1",
          locator: "lodash.throttle@npm:4.1.1",
        },
      ],
    },
  },
  { value: "bluebird@npm:3.7.2", children: { Version: "3.7.2" } },
  { value: "clsx@npm:1.2.1", children: { Version: "1.2.1" } },
  {
    value: "commitizen@npm:4.3.1",
    children: {
      Version: "4.3.1",
      "Exported Binaries": ["cz", "git-cz", "commitizen"],
      Dependencies: [
        { descriptor: "cachedir@npm:2.3.0", locator: "cachedir@npm:2.3.0" },
        {
          descriptor: "cz-conventional-changelog@npm:3.3.0",
          locator: "cz-conventional-changelog@npm:3.3.0",
        },
        { descriptor: "dedent@npm:0.7.0", locator: "dedent@npm:0.7.0" },
        {
          descriptor: "detect-indent@npm:6.1.0",
          locator: "detect-indent@npm:6.1.0",
        },
        {
          descriptor: "find-node-modules@npm:^2.1.2",
          locator: "find-node-modules@npm:2.1.3",
        },
        { descriptor: "find-root@npm:1.1.0", locator: "find-root@npm:1.1.0" },
        { descriptor: "fs-extra@npm:9.1.0", locator: "fs-extra@npm:9.1.0" },
        { descriptor: "glob@npm:7.2.3", locator: "glob@npm:7.2.3" },
        { descriptor: "inquirer@npm:8.2.5", locator: "inquirer@npm:8.2.5" },
        { descriptor: "is-utf8@npm:^0.2.1", locator: "is-utf8@npm:0.2.1" },
        { descriptor: "lodash@npm:4.17.21", locator: "lodash@npm:4.17.21" },
        { descriptor: "minimist@npm:1.2.7", locator: "minimist@npm:1.2.7" },
        { descriptor: "strip-bom@npm:4.0.0", locator: "strip-bom@npm:4.0.0" },
        {
          descriptor: "strip-json-comments@npm:3.1.1",
          locator: "strip-json-comments@npm:3.1.1",
        },
      ],
    },
  },
  { value: "crypto-hash@npm:2.0.1", children: { Version: "2.0.1" } },
  {
    value: "cz-conventional-changelog@npm:3.3.0",
    children: {
      Version: "3.3.0",
      Dependencies: [
        {
          descriptor: "@commitlint/load@npm:>6.1.1",
          locator: "@commitlint/load@npm:19.5.0",
        },
        { descriptor: "chalk@npm:^2.4.1", locator: "chalk@npm:2.4.2" },
        {
          descriptor: "commitizen@npm:^4.0.3",
          locator: "commitizen@npm:4.3.1",
        },
        {
          descriptor: "conventional-commit-types@npm:^3.0.0",
          locator: "conventional-commit-types@npm:3.0.0",
        },
        {
          descriptor: "lodash.map@npm:^4.5.1",
          locator: "lodash.map@npm:4.6.0",
        },
        { descriptor: "longest@npm:^2.0.1", locator: "longest@npm:2.0.1" },
        { descriptor: "word-wrap@npm:^1.0.3", locator: "word-wrap@npm:1.2.5" },
      ],
    },
  },
  { value: "dayjs@npm:1.11.13", children: { Version: "1.11.13" } },
  {
    value: "dependency-tree@npm:11.0.1",
    children: {
      Version: "11.0.1",
      "Exported Binaries": ["dependency-tree"],
      Dependencies: [
        {
          descriptor: "commander@npm:^12.0.0",
          locator: "commander@npm:12.1.0",
        },
        {
          descriptor: "filing-cabinet@npm:^5.0.1",
          locator: "filing-cabinet@npm:5.0.2",
        },
        { descriptor: "precinct@npm:^12.0.2", locator: "precinct@npm:12.1.2" },
        {
          descriptor:
            "typescript@patch:typescript@npm%3A^5.4.5#optional!builtin<compat/typescript>",
          locator:
            "typescript@patch:typescript@npm%3A5.6.3#optional!builtin<compat/typescript>::version=5.6.3&hash=8c6c40",
        },
      ],
    },
  },
  { value: "detect-browser@npm:5.3.0", children: { Version: "5.3.0" } },
  {
    value: "draft-js@npm:0.11.7",
    children: {
      Instances: 1,
      Version: "0.11.7",
      Dependencies: [
        { descriptor: "fbjs@npm:^2.0.0", locator: "fbjs@npm:2.0.0" },
        { descriptor: "immutable@npm:~3.7.4", locator: "immutable@npm:3.7.6" },
        {
          descriptor: "object-assign@npm:^4.1.1",
          locator: "object-assign@npm:4.1.1",
        },
      ],
    },
  },
  {
    value: "express@npm:4.21.1",
    children: {
      Version: "4.21.1",
      Dependencies: [
        { descriptor: "accepts@npm:~1.3.8", locator: "accepts@npm:1.3.8" },
        {
          descriptor: "array-flatten@npm:1.1.1",
          locator: "array-flatten@npm:1.1.1",
        },
        {
          descriptor: "body-parser@npm:1.20.3",
          locator: "body-parser@npm:1.20.3",
        },
        {
          descriptor: "content-disposition@npm:0.5.4",
          locator: "content-disposition@npm:0.5.4",
        },
        {
          descriptor: "content-type@npm:~1.0.4",
          locator: "content-type@npm:1.0.5",
        },
        {
          descriptor: "cookie-signature@npm:1.0.6",
          locator: "cookie-signature@npm:1.0.6",
        },
        { descriptor: "cookie@npm:0.7.1", locator: "cookie@npm:0.7.1" },
        { descriptor: "depd@npm:2.0.0", locator: "depd@npm:2.0.0" },
        { descriptor: "encodeurl@npm:~2.0.0", locator: "encodeurl@npm:2.0.0" },
        {
          descriptor: "escape-html@npm:~1.0.3",
          locator: "escape-html@npm:1.0.3",
        },
        { descriptor: "etag@npm:~1.8.1", locator: "etag@npm:1.8.1" },
        {
          descriptor: "finalhandler@npm:1.3.1",
          locator: "finalhandler@npm:1.3.1",
        },
        { descriptor: "fresh@npm:0.5.2", locator: "fresh@npm:0.5.2" },
        {
          descriptor: "http-errors@npm:2.0.0",
          locator: "http-errors@npm:2.0.0",
        },
        {
          descriptor: "merge-descriptors@npm:1.0.3",
          locator: "merge-descriptors@npm:1.0.3",
        },
        { descriptor: "methods@npm:~1.1.2", locator: "methods@npm:1.1.2" },
        {
          descriptor: "on-finished@npm:2.4.1",
          locator: "on-finished@npm:2.4.1",
        },
        { descriptor: "parseurl@npm:~1.3.3", locator: "parseurl@npm:1.3.3" },
        {
          descriptor: "path-to-regexp@npm:0.1.10",
          locator: "path-to-regexp@npm:0.1.10",
        },
        {
          descriptor: "proxy-addr@npm:~2.0.7",
          locator: "proxy-addr@npm:2.0.7",
        },
        { descriptor: "qs@npm:6.13.0", locator: "qs@npm:6.13.0" },
        {
          descriptor: "range-parser@npm:~1.2.1",
          locator: "range-parser@npm:1.2.1",
        },
        {
          descriptor: "safe-buffer@npm:5.2.1",
          locator: "safe-buffer@npm:5.2.1",
        },
        { descriptor: "send@npm:0.19.0", locator: "send@npm:0.19.0" },
        {
          descriptor: "serve-static@npm:1.16.2",
          locator: "serve-static@npm:1.16.2",
        },
        {
          descriptor: "setprototypeof@npm:1.2.0",
          locator: "setprototypeof@npm:1.2.0",
        },
        { descriptor: "statuses@npm:2.0.1", locator: "statuses@npm:2.0.1" },
        { descriptor: "type-is@npm:~1.6.18", locator: "type-is@npm:1.6.18" },
        {
          descriptor: "utils-merge@npm:1.0.1",
          locator: "utils-merge@npm:1.0.1",
        },
        { descriptor: "vary@npm:~1.1.2", locator: "vary@npm:1.1.2" },
        {
          descriptor:
            "debug@virtual:c7b184cd14c02e3ce555ab1875e60cf5033c617e17d82c4c02ea822101d3c817f48bf25a766b4d4335742dc5c9c14c2e88a57ed955a56c4ad0613899f82f5618#npm:2.6.9",
          locator:
            "debug@virtual:c7b184cd14c02e3ce555ab1875e60cf5033c617e17d82c4c02ea822101d3c817f48bf25a766b4d4335742dc5c9c14c2e88a57ed955a56c4ad0613899f82f5618#npm:2.6.9",
        },
      ],
    },
  },
  { value: "graphql@npm:16.9.0", children: { Version: "16.9.0" } },
  {
    value: "grunt@npm:1.6.1",
    children: {
      Version: "1.6.1",
      "Exported Binaries": ["grunt"],
      Dependencies: [
        {
          descriptor: "dateformat@npm:~4.6.2",
          locator: "dateformat@npm:4.6.3",
        },
        {
          descriptor: "eventemitter2@npm:~0.4.13",
          locator: "eventemitter2@npm:0.4.14",
        },
        { descriptor: "exit@npm:~0.1.2", locator: "exit@npm:0.1.2" },
        {
          descriptor: "findup-sync@npm:~5.0.0",
          locator: "findup-sync@npm:5.0.0",
        },
        { descriptor: "glob@npm:~7.1.6", locator: "glob@npm:7.1.7" },
        { descriptor: "grunt-cli@npm:~1.4.3", locator: "grunt-cli@npm:1.4.3" },
        {
          descriptor: "grunt-known-options@npm:~2.0.0",
          locator: "grunt-known-options@npm:2.0.0",
        },
        {
          descriptor: "grunt-legacy-log@npm:~3.0.0",
          locator: "grunt-legacy-log@npm:3.0.0",
        },
        {
          descriptor: "grunt-legacy-util@npm:~2.0.1",
          locator: "grunt-legacy-util@npm:2.0.1",
        },
        {
          descriptor: "iconv-lite@npm:~0.6.3",
          locator: "iconv-lite@npm:0.6.3",
        },
        { descriptor: "js-yaml@npm:~3.14.0", locator: "js-yaml@npm:3.14.1" },
        { descriptor: "minimatch@npm:~3.0.4", locator: "minimatch@npm:3.0.8" },
        { descriptor: "nopt@npm:~3.0.6", locator: "nopt@npm:3.0.6" },
      ],
    },
  },
  {
    value: "hamburger-react@npm:2.5.1",
    children: { Instances: 1, Version: "2.5.1" },
  },
  {
    value: "i18next@npm:21.10.0",
    children: {
      Version: "21.10.0",
      Dependencies: [
        {
          descriptor: "@babel/runtime@npm:^7.17.2",
          locator: "@babel/runtime@npm:7.25.7",
        },
      ],
    },
  },
  {
    value: "jest@npm:27.5.1",
    children: {
      Instances: 1,
      Version: "27.5.1",
      "Exported Binaries": ["jest"],
      Dependencies: [
        {
          descriptor: "@jest/core@npm:^27.5.1",
          locator: "@jest/core@npm:27.5.1",
        },
        {
          descriptor: "import-local@npm:^3.0.2",
          locator: "import-local@npm:3.2.0",
        },
        { descriptor: "jest-cli@npm:^27.5.1", locator: "jest-cli@npm:27.5.1" },
      ],
    },
  },
  { value: "lodash@npm:4.17.21", children: { Version: "4.17.21" } },
  {
    value: "md5@npm:2.3.0",
    children: {
      Version: "2.3.0",
      Dependencies: [
        { descriptor: "charenc@npm:0.0.2", locator: "charenc@npm:0.0.2" },
        { descriptor: "crypt@npm:0.0.2", locator: "crypt@npm:0.0.2" },
        { descriptor: "is-buffer@npm:~1.1.6", locator: "is-buffer@npm:1.1.6" },
      ],
    },
  },
  {
    value: "mocha@npm:10.7.3",
    children: {
      Version: "10.7.3",
      "Exported Binaries": ["mocha", "_mocha"],
      Dependencies: [
        {
          descriptor: "ansi-colors@npm:^4.1.3",
          locator: "ansi-colors@npm:4.1.3",
        },
        {
          descriptor: "browser-stdout@npm:^1.3.1",
          locator: "browser-stdout@npm:1.3.1",
        },
        { descriptor: "chokidar@npm:^3.5.3", locator: "chokidar@npm:3.6.0" },
        { descriptor: "diff@npm:^5.2.0", locator: "diff@npm:5.2.0" },
        {
          descriptor: "escape-string-regexp@npm:^4.0.0",
          locator: "escape-string-regexp@npm:4.0.0",
        },
        { descriptor: "find-up@npm:^5.0.0", locator: "find-up@npm:5.0.0" },
        { descriptor: "glob@npm:^8.1.0", locator: "glob@npm:8.1.0" },
        { descriptor: "he@npm:^1.2.0", locator: "he@npm:1.2.0" },
        { descriptor: "js-yaml@npm:^4.1.0", locator: "js-yaml@npm:4.1.0" },
        {
          descriptor: "log-symbols@npm:^4.1.0",
          locator: "log-symbols@npm:4.1.0",
        },
        { descriptor: "minimatch@npm:^5.1.6", locator: "minimatch@npm:5.1.6" },
        { descriptor: "ms@npm:^2.1.3", locator: "ms@npm:2.1.3" },
        {
          descriptor: "serialize-javascript@npm:^6.0.2",
          locator: "serialize-javascript@npm:6.0.2",
        },
        {
          descriptor: "strip-json-comments@npm:^3.1.1",
          locator: "strip-json-comments@npm:3.1.1",
        },
        {
          descriptor: "supports-color@npm:^8.1.1",
          locator: "supports-color@npm:8.1.1",
        },
        {
          descriptor: "workerpool@npm:^6.5.1",
          locator: "workerpool@npm:6.5.1",
        },
        {
          descriptor: "yargs-parser@npm:^20.2.9",
          locator: "yargs-parser@npm:20.2.9",
        },
        {
          descriptor: "yargs-unparser@npm:^2.0.0",
          locator: "yargs-unparser@npm:2.0.0",
        },
        { descriptor: "yargs@npm:^16.2.0", locator: "yargs@npm:16.2.0" },
        {
          descriptor:
            "debug@virtual:245750f15c7a67617f34421f66e3ed44fd56cf1525bfb8ff08c5fe937c01fb60677e769626c4a3d77742f81c7255c3af4da81de7d2bb3d349242cd92efc96986#npm:^4.3.5",
          locator:
            "debug@virtual:245750f15c7a67617f34421f66e3ed44fd56cf1525bfb8ff08c5fe937c01fb60677e769626c4a3d77742f81c7255c3af4da81de7d2bb3d349242cd92efc96986#npm:4.3.7",
        },
      ],
    },
  },
  {
    value: "mongoose@npm:8.7.1",
    children: {
      Version: "8.7.1",
      Dependencies: [
        { descriptor: "bson@npm:^6.7.0", locator: "bson@npm:6.8.0" },
        { descriptor: "kareem@npm:2.6.3", locator: "kareem@npm:2.6.3" },
        { descriptor: "mpath@npm:0.9.0", locator: "mpath@npm:0.9.0" },
        { descriptor: "mquery@npm:5.0.0", locator: "mquery@npm:5.0.0" },
        { descriptor: "ms@npm:2.1.3", locator: "ms@npm:2.1.3" },
        { descriptor: "sift@npm:17.1.3", locator: "sift@npm:17.1.3" },
        {
          descriptor:
            "mongodb@virtual:2da335de1fcf0e2e9ef9ca07503be10c90823442ba3ddd26f10e68c9c2a7ffc0ee32f341f8f838034f6a230d9d64e9c208819cca0755f2ea05f0ced8e1d9bb2f#npm:6.9.0",
          locator:
            "mongodb@virtual:2da335de1fcf0e2e9ef9ca07503be10c90823442ba3ddd26f10e68c9c2a7ffc0ee32f341f8f838034f6a230d9d64e9c208819cca0755f2ea05f0ced8e1d9bb2f#npm:6.9.0",
        },
      ],
    },
  },
  {
    value: "nanoid@npm:3.3.7",
    children: { Version: "3.3.7", "Exported Binaries": ["nanoid"] },
  },
  {
    value: "next@npm:12.3.4",
    children: {
      Instances: 1,
      Version: "12.3.4",
      "Exported Binaries": ["next"],
      Dependencies: [
        { descriptor: "@next/env@npm:12.3.4", locator: "@next/env@npm:12.3.4" },
        {
          descriptor: "@next/swc-android-arm-eabi@npm:12.3.4",
          locator: "@next/swc-android-arm-eabi@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-android-arm64@npm:12.3.4",
          locator: "@next/swc-android-arm64@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-darwin-arm64@npm:12.3.4",
          locator: "@next/swc-darwin-arm64@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-darwin-x64@npm:12.3.4",
          locator: "@next/swc-darwin-x64@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-freebsd-x64@npm:12.3.4",
          locator: "@next/swc-freebsd-x64@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-linux-arm-gnueabihf@npm:12.3.4",
          locator: "@next/swc-linux-arm-gnueabihf@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-linux-arm64-gnu@npm:12.3.4",
          locator: "@next/swc-linux-arm64-gnu@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-linux-arm64-musl@npm:12.3.4",
          locator: "@next/swc-linux-arm64-musl@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-linux-x64-gnu@npm:12.3.4",
          locator: "@next/swc-linux-x64-gnu@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-linux-x64-musl@npm:12.3.4",
          locator: "@next/swc-linux-x64-musl@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-win32-arm64-msvc@npm:12.3.4",
          locator: "@next/swc-win32-arm64-msvc@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-win32-ia32-msvc@npm:12.3.4",
          locator: "@next/swc-win32-ia32-msvc@npm:12.3.4",
        },
        {
          descriptor: "@next/swc-win32-x64-msvc@npm:12.3.4",
          locator: "@next/swc-win32-x64-msvc@npm:12.3.4",
        },
        {
          descriptor: "@swc/helpers@npm:0.4.11",
          locator: "@swc/helpers@npm:0.4.11",
        },
        {
          descriptor: "caniuse-lite@npm:^1.0.30001406",
          locator: "caniuse-lite@npm:1.0.30001668",
        },
        { descriptor: "postcss@npm:8.4.14", locator: "postcss@npm:8.4.14" },
        { descriptor: "styled-jsx@npm:5.0.7", locator: "styled-jsx@npm:5.0.7" },
        {
          descriptor: "use-sync-external-store@npm:1.2.0",
          locator: "use-sync-external-store@npm:1.2.0",
        },
      ],
    },
  },
  {
    value: "nookies@npm:2.5.2",
    children: {
      Version: "2.5.2",
      Dependencies: [
        { descriptor: "cookie@npm:^0.4.1", locator: "cookie@npm:0.4.2" },
        {
          descriptor: "set-cookie-parser@npm:^2.4.6",
          locator: "set-cookie-parser@npm:2.7.0",
        },
      ],
    },
  },
  {
    value: "postcss-import@npm:14.1.0",
    children: {
      Instances: 1,
      Version: "14.1.0",
      Dependencies: [
        {
          descriptor: "postcss-value-parser@npm:^4.0.0",
          locator: "postcss-value-parser@npm:4.2.0",
        },
        {
          descriptor: "read-cache@npm:^1.0.0",
          locator: "read-cache@npm:1.0.0",
        },
        {
          descriptor:
            "resolve@patch:resolve@npm%3A^1.1.7#optional!builtin<compat/resolve>",
          locator:
            "resolve@patch:resolve@npm%3A1.22.8#optional!builtin<compat/resolve>::version=1.22.8&hash=c3c19d",
        },
      ],
    },
  },
  {
    value: "react-dom@npm:18.3.1",
    children: {
      Instances: 1,
      Version: "18.3.1",
      Dependencies: [
        {
          descriptor: "loose-envify@npm:^1.1.0",
          locator: "loose-envify@npm:1.4.0",
        },
        {
          descriptor: "scheduler@npm:^0.23.2",
          locator: "scheduler@npm:0.23.2",
        },
      ],
    },
  },
  {
    value: "react-scripts@npm:5.0.1",
    children: {
      Instances: 1,
      Version: "5.0.1",
      "Exported Binaries": ["react-scripts"],
      Dependencies: [
        {
          descriptor: "@babel/core@npm:^7.16.0",
          locator: "@babel/core@npm:7.25.8",
        },
        {
          descriptor: "@pmmmwh/react-refresh-webpack-plugin@npm:^0.5.3",
          locator: "@pmmmwh/react-refresh-webpack-plugin@npm:0.5.15",
        },
        {
          descriptor: "@svgr/webpack@npm:^5.5.0",
          locator: "@svgr/webpack@npm:5.5.0",
        },
        {
          descriptor: "babel-jest@npm:^27.4.2",
          locator: "babel-jest@npm:27.5.1",
        },
        {
          descriptor: "babel-loader@npm:^8.2.3",
          locator: "babel-loader@npm:8.4.1",
        },
        {
          descriptor: "babel-plugin-named-asset-import@npm:^0.3.8",
          locator: "babel-plugin-named-asset-import@npm:0.3.8",
        },
        {
          descriptor: "babel-preset-react-app@npm:^10.0.1",
          locator: "babel-preset-react-app@npm:10.0.1",
        },
        { descriptor: "bfj@npm:^7.0.2", locator: "bfj@npm:7.1.0" },
        {
          descriptor: "browserslist@npm:^4.18.1",
          locator: "browserslist@npm:4.24.0",
        },
        { descriptor: "camelcase@npm:^6.2.1", locator: "camelcase@npm:6.3.0" },
        {
          descriptor: "case-sensitive-paths-webpack-plugin@npm:^2.4.0",
          locator: "case-sensitive-paths-webpack-plugin@npm:2.4.0",
        },
        {
          descriptor: "css-loader@npm:^6.5.1",
          locator: "css-loader@npm:6.11.0",
        },
        {
          descriptor: "css-minimizer-webpack-plugin@npm:^3.2.0",
          locator: "css-minimizer-webpack-plugin@npm:3.4.1",
        },
        {
          descriptor: "dotenv-expand@npm:^5.1.0",
          locator: "dotenv-expand@npm:5.1.0",
        },
        { descriptor: "dotenv@npm:^10.0.0", locator: "dotenv@npm:10.0.0" },
        {
          descriptor: "eslint-config-react-app@npm:^7.0.1",
          locator: "eslint-config-react-app@npm:7.0.1",
        },
        {
          descriptor: "eslint-webpack-plugin@npm:^3.1.1",
          locator: "eslint-webpack-plugin@npm:3.2.0",
        },
        { descriptor: "eslint@npm:^8.3.0", locator: "eslint@npm:8.57.1" },
        {
          descriptor: "file-loader@npm:^6.2.0",
          locator: "file-loader@npm:6.2.0",
        },
        { descriptor: "fs-extra@npm:^10.0.0", locator: "fs-extra@npm:10.1.0" },
        {
          descriptor:
            "fsevents@patch:fsevents@npm%3A^2.3.2#optional!builtin<compat/fsevents>",
          locator:
            "fsevents@patch:fsevents@npm%3A2.3.3#optional!builtin<compat/fsevents>::version=2.3.3&hash=df0bf1",
        },
        {
          descriptor: "html-webpack-plugin@npm:^5.5.0",
          locator: "html-webpack-plugin@npm:5.6.0",
        },
        {
          descriptor: "identity-obj-proxy@npm:^3.0.0",
          locator: "identity-obj-proxy@npm:3.0.0",
        },
        {
          descriptor: "jest-resolve@npm:^27.4.2",
          locator: "jest-resolve@npm:27.5.1",
        },
        {
          descriptor: "jest-watch-typeahead@npm:^1.0.0",
          locator: "jest-watch-typeahead@npm:1.1.0",
        },
        { descriptor: "jest@npm:^27.4.3", locator: "jest@npm:27.5.1" },
        {
          descriptor: "mini-css-extract-plugin@npm:^2.4.5",
          locator: "mini-css-extract-plugin@npm:2.9.1",
        },
        {
          descriptor: "postcss-flexbugs-fixes@npm:^5.0.2",
          locator: "postcss-flexbugs-fixes@npm:5.0.2",
        },
        {
          descriptor: "postcss-loader@npm:^6.2.1",
          locator: "postcss-loader@npm:6.2.1",
        },
        {
          descriptor: "postcss-normalize@npm:^10.0.1",
          locator: "postcss-normalize@npm:10.0.1",
        },
        {
          descriptor: "postcss-preset-env@npm:^7.0.1",
          locator: "postcss-preset-env@npm:7.8.3",
        },
        { descriptor: "postcss@npm:^8.4.4", locator: "postcss@npm:8.4.47" },
        { descriptor: "prompts@npm:^2.4.2", locator: "prompts@npm:2.4.2" },
        {
          descriptor: "react-app-polyfill@npm:^3.0.0",
          locator: "react-app-polyfill@npm:3.0.0",
        },
        {
          descriptor: "react-dev-utils@npm:^12.0.1",
          locator: "react-dev-utils@npm:12.0.1",
        },
        {
          descriptor: "react-refresh@npm:^0.11.0",
          locator: "react-refresh@npm:0.11.0",
        },
        {
          descriptor: "resolve-url-loader@npm:^4.0.0",
          locator: "resolve-url-loader@npm:4.0.0",
        },
        {
          descriptor:
            "resolve@patch:resolve@npm%3A^1.20.0#optional!builtin<compat/resolve>",
          locator:
            "resolve@patch:resolve@npm%3A1.22.8#optional!builtin<compat/resolve>::version=1.22.8&hash=c3c19d",
        },
        {
          descriptor: "sass-loader@npm:^12.3.0",
          locator: "sass-loader@npm:12.6.0",
        },
        { descriptor: "semver@npm:^7.3.5", locator: "semver@npm:7.6.3" },
        {
          descriptor: "source-map-loader@npm:^3.0.0",
          locator: "source-map-loader@npm:3.0.2",
        },
        {
          descriptor: "style-loader@npm:^3.3.1",
          locator: "style-loader@npm:3.3.4",
        },
        {
          descriptor: "tailwindcss@npm:^3.0.2",
          locator: "tailwindcss@npm:3.4.13",
        },
        {
          descriptor: "terser-webpack-plugin@npm:^5.2.5",
          locator: "terser-webpack-plugin@npm:5.3.10",
        },
        {
          descriptor: "webpack-dev-server@npm:^4.6.0",
          locator: "webpack-dev-server@npm:4.15.2",
        },
        {
          descriptor: "webpack-manifest-plugin@npm:^4.0.2",
          locator: "webpack-manifest-plugin@npm:4.1.1",
        },
        { descriptor: "webpack@npm:^5.64.4", locator: "webpack@npm:5.95.0" },
        {
          descriptor: "workbox-webpack-plugin@npm:^6.4.1",
          locator: "workbox-webpack-plugin@npm:6.6.0",
        },
      ],
    },
  },
  {
    value: "react@npm:18.3.1",
    children: {
      Version: "18.3.1",
      Dependencies: [
        {
          descriptor: "loose-envify@npm:^1.1.0",
          locator: "loose-envify@npm:1.4.0",
        },
      ],
    },
  },
  {
    value: "recoil@npm:0.7.7",
    children: {
      Instances: 1,
      Version: "0.7.7",
      Dependencies: [
        { descriptor: "hamt_plus@npm:1.0.2", locator: "hamt_plus@npm:1.0.2" },
      ],
    },
  },
  {
    value: "redraft@npm:0.10.2",
    children: {
      Version: "0.10.2",
      Dependencies: [
        { descriptor: "punycode@npm:^2.1.0", locator: "punycode@npm:2.3.1" },
      ],
    },
  },
  {
    value: "sharp@npm:0.30.7",
    children: {
      Version: "0.30.7",
      Dependencies: [
        { descriptor: "color@npm:^4.2.3", locator: "color@npm:4.2.3" },
        {
          descriptor: "detect-libc@npm:^2.0.1",
          locator: "detect-libc@npm:2.0.3",
        },
        {
          descriptor: "node-addon-api@npm:^5.0.0",
          locator: "node-addon-api@npm:5.1.0",
        },
        { descriptor: "node-gyp@npm:latest", locator: "node-gyp@npm:10.2.0" },
        {
          descriptor: "prebuild-install@npm:^7.1.1",
          locator: "prebuild-install@npm:7.1.2",
        },
        { descriptor: "semver@npm:^7.3.7", locator: "semver@npm:7.6.3" },
        {
          descriptor: "simple-get@npm:^4.0.1",
          locator: "simple-get@npm:4.0.1",
        },
        { descriptor: "tar-fs@npm:^2.1.1", locator: "tar-fs@npm:2.1.1" },
        {
          descriptor: "tunnel-agent@npm:^0.6.0",
          locator: "tunnel-agent@npm:0.6.0",
        },
      ],
    },
  },
  {
    value: "storybook@npm:6.5.16",
    children: {
      Version: "6.5.16",
      "Exported Binaries": ["sb", "storybook"],
      Dependencies: [
        {
          descriptor: "@storybook/cli@npm:6.5.16",
          locator: "@storybook/cli@npm:6.5.16",
        },
      ],
    },
  },
  {
    value: "tailwind-styled-components@npm:2.2.0",
    children: {
      Instances: 1,
      Version: "2.2.0",
      Dependencies: [
        {
          descriptor: "tailwind-merge@npm:^1.3.0",
          locator: "tailwind-merge@npm:1.14.0",
        },
      ],
    },
  },
  { value: "tailwindcss-radix@npm:1.6.0", children: { Version: "1.6.0" } },
  {
    value: "temp@workspace:.",
    children: {
      Version: "0.4.0",
      Dependencies: [
        {
          descriptor:
            "@brainhubeu/license-auditor@github:brainhubeu/license-auditor#fix-single-quotes",
          locator:
            "@brainhubeu/license-auditor@https://github.com/brainhubeu/license-auditor.git#commit=6c0b9440ea374b2dd592ead7b003d2af828c225f",
        },
        {
          descriptor: "@stripe/stripe-js@npm:^1.54.0",
          locator: "@stripe/stripe-js@npm:1.54.2",
        },
        {
          descriptor: "@testing-library/jest-dom@npm:^5.17.0",
          locator: "@testing-library/jest-dom@npm:5.17.0",
        },
        {
          descriptor: "@types/draft-js@npm:^0.11.9",
          locator: "@types/draft-js@npm:0.11.18",
        },
        {
          descriptor: "@types/react-slider@npm:^1.3.1",
          locator: "@types/react-slider@npm:1.3.6",
        },
        { descriptor: "auth0-js@npm:^9.19.0", locator: "auth0-js@npm:9.27.0" },
        { descriptor: "axios@npm:^1.7.7", locator: "axios@npm:1.7.7" },
        { descriptor: "bluebird@npm:^3.7.2", locator: "bluebird@npm:3.7.2" },
        { descriptor: "clsx@npm:^1.1.1", locator: "clsx@npm:1.2.1" },
        {
          descriptor: "commitizen@npm:^4.3.1",
          locator: "commitizen@npm:4.3.1",
        },
        {
          descriptor: "crypto-hash@npm:^2.0.1",
          locator: "crypto-hash@npm:2.0.1",
        },
        {
          descriptor: "cz-conventional-changelog@npm:^3.3.0",
          locator: "cz-conventional-changelog@npm:3.3.0",
        },
        { descriptor: "dayjs@npm:^1.10.7", locator: "dayjs@npm:1.11.13" },
        {
          descriptor: "dependency-tree@npm:^11.0.1",
          locator: "dependency-tree@npm:11.0.1",
        },
        {
          descriptor: "detect-browser@npm:^5.3.0",
          locator: "detect-browser@npm:5.3.0",
        },
        { descriptor: "express@npm:^4.21.1", locator: "express@npm:4.21.1" },
        { descriptor: "graphql@npm:^16.5.0", locator: "graphql@npm:16.9.0" },
        { descriptor: "grunt@npm:^1.6.1", locator: "grunt@npm:1.6.1" },
        { descriptor: "i18next@npm:^21.9.1", locator: "i18next@npm:21.10.0" },
        { descriptor: "lodash@npm:^4.17.21", locator: "lodash@npm:4.17.21" },
        { descriptor: "md5@npm:^2.3.0", locator: "md5@npm:2.3.0" },
        { descriptor: "mocha@npm:^10.7.3", locator: "mocha@npm:10.7.3" },
        { descriptor: "mongoose@npm:^8.7.0", locator: "mongoose@npm:8.7.1" },
        { descriptor: "nanoid@npm:^3.0.0", locator: "nanoid@npm:3.3.7" },
        { descriptor: "nookies@npm:^2.5.2", locator: "nookies@npm:2.5.2" },
        { descriptor: "react@npm:^18.3.1", locator: "react@npm:18.3.1" },
        { descriptor: "redraft@npm:^0.10.2", locator: "redraft@npm:0.10.2" },
        { descriptor: "sharp@npm:^0.30.7", locator: "sharp@npm:0.30.7" },
        {
          descriptor: "storybook@npm:^6.5.13",
          locator: "storybook@npm:6.5.16",
        },
        {
          descriptor: "tailwindcss-radix@npm:^1.3.0",
          locator: "tailwindcss-radix@npm:1.6.0",
        },
        {
          descriptor: "web-vitals@npm:^2.1.4",
          locator: "web-vitals@npm:2.1.4",
        },
        { descriptor: "yup@npm:^0.32.11", locator: "yup@npm:0.32.11" },
        {
          descriptor:
            "@apollo/client@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^3.6.4",
          locator:
            "@apollo/client@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:3.11.8",
        },
        {
          descriptor:
            "@apollo/persisted-query-lists@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^1.0.0",
          locator:
            "@apollo/persisted-query-lists@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:1.0.0",
        },
        {
          descriptor:
            "@auth0/auth0-react@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^1.10.1",
          locator:
            "@auth0/auth0-react@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:1.12.1",
        },
        {
          descriptor:
            "@auth0/nextjs-auth0@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^1.9.2",
          locator:
            "@auth0/nextjs-auth0@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:1.9.3",
        },
        {
          descriptor:
            "@hookform/resolvers@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^2.9.11",
          locator:
            "@hookform/resolvers@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:2.9.11",
        },
        {
          descriptor:
            "@react-hook/merged-ref@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^1.3.2",
          locator:
            "@react-hook/merged-ref@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:1.3.2",
        },
        {
          descriptor:
            "@stitches/react@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^1.2.6",
          locator:
            "@stitches/react@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:1.2.8",
        },
        {
          descriptor:
            "@stripe/react-stripe-js@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^2.1.0",
          locator:
            "@stripe/react-stripe-js@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:2.8.1",
        },
        {
          descriptor:
            "@tanstack/react-query-devtools@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^4.24.6",
          locator:
            "@tanstack/react-query-devtools@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:4.36.1",
        },
        {
          descriptor:
            "@tanstack/react-query@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^4.24.6",
          locator:
            "@tanstack/react-query@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:4.36.1",
        },
        {
          descriptor:
            "@testing-library/react@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^13.4.0",
          locator:
            "@testing-library/react@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:13.4.0",
        },
        {
          descriptor:
            "@testing-library/user-event@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^13.5.0",
          locator:
            "@testing-library/user-event@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:13.5.0",
        },
        {
          descriptor:
            "beautiful-react-hooks@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^1.0.2",
          locator:
            "beautiful-react-hooks@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:1.2.0",
        },
        {
          descriptor:
            "draft-js@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^0.11.7",
          locator:
            "draft-js@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:0.11.7",
        },
        {
          descriptor:
            "hamburger-react@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^2.5.0",
          locator:
            "hamburger-react@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:2.5.1",
        },
        {
          descriptor:
            "jest@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^27.5.1",
          locator:
            "jest@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:27.5.1",
        },
        {
          descriptor:
            "next@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^12.2.0",
          locator:
            "next@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:12.3.4",
        },
        {
          descriptor:
            "postcss-import@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^14.0.2",
          locator:
            "postcss-import@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:14.1.0",
        },
        {
          descriptor:
            "react-dom@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^18.3.1",
          locator:
            "react-dom@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:18.3.1",
        },
        {
          descriptor:
            "react-scripts@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:5.0.1",
          locator:
            "react-scripts@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:5.0.1",
        },
        {
          descriptor:
            "recoil@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^0.7.5",
          locator:
            "recoil@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:0.7.7",
        },
        {
          descriptor:
            "tailwind-styled-components@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^2.1.7",
          locator:
            "tailwind-styled-components@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:2.2.0",
        },
        {
          descriptor:
            "typewriter-effect@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^2.21.0",
          locator:
            "typewriter-effect@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:2.21.0",
        },
        {
          descriptor:
            "use-debounce@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^8.0.4",
          locator:
            "use-debounce@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:8.0.4",
        },
        {
          descriptor:
            "use-gauge@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^0.5.0",
          locator:
            "use-gauge@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:0.5.0",
        },
        {
          descriptor:
            "zustand@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:^4.3.6",
          locator:
            "zustand@virtual:a8f2428f6d9e3bcfa8c78248893050af9e230ec1bdc18e915a0fae1a88a0254b45fa35e8e76ca93dc821f880408b2ec2c9f4433413515574c2c3b5913ee74eea#npm:4.5.5",
        },
      ],
    },
  },
  {
    value: "typewriter-effect@npm:2.21.0",
    children: {
      Instances: 1,
      Version: "2.21.0",
      Dependencies: [
        {
          descriptor: "prop-types@npm:^15.8.1",
          locator: "prop-types@npm:15.8.1",
        },
        { descriptor: "raf@npm:^3.4.1", locator: "raf@npm:3.4.1" },
      ],
    },
  },
  {
    value: "use-debounce@npm:8.0.4",
    children: { Instances: 1, Version: "8.0.4" },
  },
  {
    value: "use-gauge@npm:0.5.0",
    children: { Instances: 1, Version: "0.5.0" },
  },
  { value: "web-vitals@npm:2.1.4", children: { Version: "2.1.4" } },
  {
    value: "yup@npm:0.32.11",
    children: {
      Version: "0.32.11",
      Dependencies: [
        {
          descriptor: "@babel/runtime@npm:^7.15.4",
          locator: "@babel/runtime@npm:7.25.7",
        },
        {
          descriptor: "@types/lodash@npm:^4.14.175",
          locator: "@types/lodash@npm:4.17.10",
        },
        {
          descriptor: "lodash-es@npm:^4.17.21",
          locator: "lodash-es@npm:4.17.21",
        },
        { descriptor: "lodash@npm:^4.17.21", locator: "lodash@npm:4.17.21" },
        { descriptor: "nanoclone@npm:^0.2.1", locator: "nanoclone@npm:0.2.1" },
        {
          descriptor: "property-expr@npm:^2.0.4",
          locator: "property-expr@npm:2.0.6",
        },
        { descriptor: "toposort@npm:^2.0.2", locator: "toposort@npm:2.0.2" },
      ],
    },
  },
  {
    value: "zustand@npm:4.5.5",
    children: {
      Instances: 1,
      Version: "4.5.5",
      Dependencies: [
        {
          descriptor: "use-sync-external-store@npm:1.2.2",
          locator: "use-sync-external-store@npm:1.2.2",
        },
      ],
    },
  },
];
