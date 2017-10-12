/**
 * ETH account.
 */
let debug = require("debug")("payments:PaymentService");

let util = require("util");

class Account {
    /**
     * New instance
     * @param accountName
     * @param address
     * @param privateKey
     */
    constructor(accountName, address, privateKey) {
        this.accountName = accountName;
        this.address     = address;
        this.privateKey  = privateKey;
    }

    toString() {
        return util.format('{accountName = %s, address = %s}', this.accountName, this.address);
    }
}

module.exports = {Account: Account};