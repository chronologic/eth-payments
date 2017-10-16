/**
 * Distribute or collect payments
 */
const Bb = require('bluebird');

const debug = require("debug")("payments:PaymentService");
const config = require("../config");

class PaymentService {

  /**
   * Create a new instance of payment service
   * @param gasLimit
   * @param gasPrice
   */
  constructor(gasLimit, gasPrice) {
    this.gasLimit = gasLimit || 21000;
    this.gasPrice = gasPrice || 20000000000;
  }

  /**
   * Transfer {@etherAmount} of ETH from array of {@sourceAccounts} to each of {@targetAccounts}.
   * @param etherAmount in string e.g., 1.0
   * @param sourceAccounts an array of ETH address strings
   * @param targetAccounts an array of ETH address strings
   */
  flow(etherAmount, sourceAccounts, targetAccounts) {
    let value = config.web3.toWei(etherAmount, 'ether');
    let batch = config.web3.createBatch();

    for (let i = 0; i < sourceAccounts.length; i++) {
      for (let j = 0; j < targetAccounts.length; j++) {
        batch.add(config.web3.eth.sendTransaction.request({
          from: sourceAccounts[i],
          to: targetAccounts[j],
          value: value,
          gasLimit: this.gasLimit,
          gasPrice: this.gasPrice
        }));
      }
    }

    return Bb.fromCallback((callback) => { batch.execute(callback); });
  }

  /**
   * Drain {@etherAmount} of ETH from each {@sourceAccounts} into {@targetAccount}
   * @param etherAmount in string e.g., 1.0
   * @param sourceAccounts instance of Account
   * @param targetAccount an array of Account
   */
  collect(etherAmount, sourceAccounts, targetAccount) {
  }
}

module.exports = {PaymentService: PaymentService};