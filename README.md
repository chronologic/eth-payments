## eth-payments

Use this to:
- Distribute ETH from a source account to multiple target accounts  
- Collect ETH from multiple accounts and transfer to a single account

## Usage
Have Parity or any other Web3 provider available.

```
$ DEBUG=payments:* ./bin/payments -h

  Usage: payments [options] [command]


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    collect      collect ETH from multiple accounts
    distribute   distribute ETH to multiple accounts
  Example:

    $ payments collect
    $ payments distribute

```

  