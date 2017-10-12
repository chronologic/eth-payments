/**
 * ETH account.
 */
class Account {
    /**
     * New instance
     * @param accountName
     * @param address
     * @param privateKey
     */
    constructor(accountName, address, privateKey) {
        this.accountName = accountName;
        this.address = address;
        this.privateKey = privateKey;
    }
}