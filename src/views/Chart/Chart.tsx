import React from 'react'
import IFrame from 'views/Trade'
import FullPage from './components/FullPage'

const Chart: React.FC = () => {
  return (
    <FullPage>
      <IFrame
        title="chart"
        url="https://goswappcharts.web.app/?isbsc=true&tokenId=0x742485d67ceb8d169fd6796cbaafc542bbc14ecd"
      />
    </FullPage>
  )
}

export default Chart