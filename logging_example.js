/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
const licenseAuditor = require('@brainhubeu/license-auditor');
require('dotenv').config();

const whitelist = require('./license/whitelist');
const blacklist = require('./license/blacklist');
const modules = require('./license/modules');

const warn = msg => {
  // eslint-disable-next-line no-console
  console.log('\x1b[40m\x1b[33m%s\x1b[0m', `LICENSE WARNING AT ${msg}`);
};

const fail = msg => {
  // eslint-disable-next-line no-console
  console.log('\x1b[40m\x1b[31m%s\x1b[0m', `BLACKLISTED LICENSE AT ${msg}`);
};

licenseAuditor({
  whitelistedLicenses: whitelist,
  blacklistedLicenses: blacklist,
  whitelistedModules: modules,
  projectPath: process.env.PROJECT_PATH,
  ciManager: {
    warn,
    fail,
  },
});