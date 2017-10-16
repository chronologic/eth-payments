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
    -s, --source   source ETH address to take ether
    -S, --sources  comma-separated list of source ETH addresses to take ether
    -t, --target   target ETH address to send ether
    -T, --targets  comma-separated list of target ETH addresses to send ether
    -e, --eth      amount of ether sending with specified command


  Commands:

    collect      collect ETH from multiple accounts
    distribute   distribute ETH to multiple accounts
  Example:

    $ payments collect --eth 1.0 --source 0x0 --targets 0x0,0x0
    $ payments distribute --eth 1.0 --sources 0x0,0x0 --target 0x0

```

  