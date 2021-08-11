import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://pancakeswap.finance/swap#/swap?inputCurrency=0x742485d67ceb8d169fd6796cbaafc542bbc14ecd',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/0x742485d67ceb8d169fd6796cbaafc542bbc14ecd/0xe9e7cea3dedca5984780bafc599bd69add087d56',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Price Chart',
    icon: 'ChartIcon',
    href: '/chart',
  },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Techrate',
        href: 'https://unikittyswap.org/files/unikittyswap.pdf',
      },
    ],
  },
  {
    label: 'Our Partners',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Unikitty swap',
        href: 'https://www.unikittyswap.org/',
      },
      {
        label: 'Unikitty swap',
        href: 'https://www.unikittyswap.org/'
      }
    ],
  },
  // {
    // label: 'Listings',
    // icon: 'ListingIcon',
    // items: [
      // {
        // label: 'DappRadar',
        // href: 'https://dappradar.com/binance-smart-chain/defi/unikitty-swap',
      // },
      // {
        // label: 'Blockfolio',
        // href: 'https://blockfolio.com/coin/unikitty',
      // },
    // ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
        // label: 'Roadmap',
        // href: 'https://unikittyswap.medium.com/vegan-swap-roadmap-94d69f7653b',
      // },
      {
        label: 'Overview',
        href: 'https://pancakeswap.info/token/0x742485d67ceb8d169fd6796cbaafc542bbc14ecd',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/unikittyswap',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/unikittyswap/',
      // },
     {
     label: 'AstroTools',
     href: 'https://app.astrotools.io/pancake-pair-explorer/0x742485d67ceb8d169fd6796cbaafc542bbc14ecd',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/unikittyswap/',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://unikittyswap.gitbook.io/unikittyswap/',
      // },
      {
        label: 'Blog',
        href: 'https://unikittyswap.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href:
  //     'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.unikittyswap.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/unikittyswap',
  // },
]

export default config
