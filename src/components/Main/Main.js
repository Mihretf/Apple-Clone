import React from 'react'
import Alert from "./Alert/Alert"
import IpadPro from "./IpadPro/IpadPro"
import MacBookAir from "./MacBookAir/MacBookAir"
import Iphone11Pro from "./Iphone11Pro/Iphone11Pro"
import Iphone11andCovid from "./Iphone11andCovid/Iphone11andCovid"
import TvandWatch from "./TvandWatch/TvandWatch";
import Arcade from "./Arcade/Arcade"
import YoutubeVideos from "./YoutubeVideos/YoutubeVideo"
function Main() {
  return (
    <div>
      <Alert />
      <IpadPro />
      <MacBookAir />
      <Iphone11Pro />
      <Iphone11andCovid />
      <TvandWatch />
      <Arcade />
      <YoutubeVideos/>
    </div>
  );
}

export default Main;