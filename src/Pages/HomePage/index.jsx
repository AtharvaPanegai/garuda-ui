import { BetaBanner } from "../../Components/UtilityComponents/BetaBannerComponent"
import HomePageComponent from "../../Components/HomePageComponent"
import { useState } from "react"

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(true)
  return (
    <div>
       {showBanner && <BetaBanner onClose={() => setShowBanner(false)} />}
        <HomePageComponent />
    </div>
  )
}

export default HomePage