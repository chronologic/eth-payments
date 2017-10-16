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
    this.gasPrice = gasPrice || 60000000000;
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

    return Bb.fromCallback((callback) => {
      let successfulTransactions = 0;
      for (let i = 0; i < sourceAccounts.length; i++) {
        for (let j = 0; j < targetAccounts.length; j++) {
          batch.add(config.web3.eth.sendTransaction.request({
            from: sourceAccounts[i],
            to: targetAccounts[j],
            value: value,
            gas: this.gasLimit,
            gasPrice: this.gasPrice
          }, (err) => {
            if (err) {
              return callback(err);
            }
            successfulTransactions++;
            // all transactions are done
            if (successfulTransactions === sourceAccounts.length * targetAccounts.length) {
              callback();
            }
          }));
        }
      }

      batch.execute();
    });
  }
}

module.exports = PaymentService;