let _        = require("lodash"),
    nconf    = require("nconf"),
    path     = require("path"),
    Web3     = require("web3"),
    defaults = require("./defaults.json");

let configPath = path.join(__dirname, '../config');
nconf.env().argv();
nconf.file({file: path.join(configPath, (nconf.get('NODE_ENV') || "dev") + ".json")});
nconf.defaults(defaults);

let provider = new Web3.providers.HttpProvider(nconf.get("ethereum:provider"));
let web3     = new Web3(provider);

module.exports      = nconf;
module.exports.web3 = web3;
