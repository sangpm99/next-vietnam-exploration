import HerroBanner from "@views/apps/home/HerroBanner"
import WhoWeAre from "@views/apps/home/WhoWeAre"
import MostPopularTours from "@views/apps/home/MostPopularTours"
import FeaturalDestination from "@views/apps/home/FeaturalDestination"
import FeedbackFromGuests from "@views/apps/home/FeedbackFromGuests"
import Video from "@views/apps/home/Video"

import DefaultLayout from "@/layouts/default"
import Clouds from "@views/apps/components/Clouds"

export default function Home() {
  return (
    <DefaultLayout>
      <HerroBanner />
      <WhoWeAre />
      <Clouds />
      <MostPopularTours />
      <Clouds />
      <FeaturalDestination />
      <Clouds />
      <FeedbackFromGuests />
      <Clouds />
      <Video />
    </DefaultLayout>
  )
}
