import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowLeftSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FBFBFB"
      fillRule="evenodd"
      d="M22 12a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FBFBFB"
      fillRule="evenodd"
      d="M9.707 5.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L4.414 12l5.293-5.293a1 1 0 0 0 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ArrowLeftSvg
