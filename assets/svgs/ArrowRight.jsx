import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowRightSvg = (props) => (
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
            d="M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
        />
        <Path
            fill="#FBFBFB"
            fillRule="evenodd"
            d="M14.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L19.586 12l-5.293-5.293a1 1 0 0 1 0-1.414Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowRightSvg
