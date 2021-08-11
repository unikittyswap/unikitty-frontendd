import usersBlacklist from './blacklist'
import farmsConfig from './farms'

const communityFarms = farmsConfig.filter((farm) => farm.isCommunity).map((farm) => farm.tokenSymbol)

export { farmsConfig, communityFarms, usersBlacklist }
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
