import Header from "@views/apps/home/Header"
import HerroBanner from "@views/apps/home/HerroBanner"
import WhoWeAre from "@views/apps/home/WhoWeAre"
import MostPopularTours from "@views/apps/home/MostPopularTours"
import FeaturalDestination from "@views/apps/home/FeaturalDestination"

import Clouds from "@views/apps/components/Clouds"

export default function Home() {
  return (
    <div id='main'>
      <Header />
      <HerroBanner />
      <WhoWeAre />
      <Clouds />
      <MostPopularTours />
      <Clouds />
      <FeaturalDestination />
    </div>
  )
}
