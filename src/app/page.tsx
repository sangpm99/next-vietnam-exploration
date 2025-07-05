import Header from "@views/apps/home/Header"
import HerroBanner from "@views/apps/home/HerroBanner"
import WhoWeAre from "@views/apps/home/WhoWeAre"

export default function Home() {
  return (
    <div id='main'>
      <Header />
      <HerroBanner />
      <WhoWeAre />
    </div>
  )
}
