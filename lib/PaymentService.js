/**
 * Distribute or collect payments
 */
let config = require("../config");

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
     * Transfer {@etherAmount} of ETH from {@sourceAccount} to {@targetAccount}.
     * TODO: return a promise
     * @param etherAmount in string e.g., 1.0
     * @param sourceAccount
     * @param targetAccount
     */
    transfer(etherAmount, sourceAccount, targetAccount) {
        let value = config.web3.toWei(etherAmount, 'ether');

        config.web3.eth.sendTransaction({
            from: sourceAccount.address,
            to: targetAccount.address,
            value: value,
            gasLimit: this.gasLimit,
            gasPrice: this.gasPrice
        })
        .once('transactionHash', (hash) => {

        })
        .once('receipt', (receipt) => {

        })
        .on('confirmation', (confNumber, receipt) => {

        })
        .on('error', (error) => {

        });
    }

    /**
     * Transfer {@etherAmount} of ETH from {@sourceAccount} to each {@targetAccounts}.
     * @param etherAmount in string e.g., 1.0
     * @param sourceAccount instance of Account
     * @param targetAccounts an array of Account
     */
    transferMultiple(etherAmount, sourceAccount, targetAccounts) {
        let batch = config.web3.createBatch();
        batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
        batch.execute();
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

export {PaymentService as default};