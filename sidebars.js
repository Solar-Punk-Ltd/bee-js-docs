module.exports = {
  Balls: [
    'introduction',
    {
      type: 'category',
      label: 'User Documentation',
      items: [
        'user-documentation/getting-started',
        'user-documentation/upload-download',
        'user-documentation/track-upload',
        'user-documentation/pss',
        'user-documentation/soc-and-feeds',
        'user-documentation/act'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'link',
          label: 'Ethereum wallet used for signing Feeds',
          href: 'https://github.com/ethersphere/examples-js/tree/master/eth-wallet-signing'
        },
        {
          type: 'link',
          label: 'React Upload application',
          href: 'https://github.com/ethersphere/examples-js/tree/master/upload-react'
        },
        {
          type: 'link',
          label: 'Upload progress',
          href: 'https://github.com/ethersphere/examples-js/tree/master/upload-progress'
        }
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api' // 'api' is the 'out' directory
        }
      ],
      collapsed: true
    }
  ]
}
