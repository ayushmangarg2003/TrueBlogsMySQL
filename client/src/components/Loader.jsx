import React from 'react'
import { ShimmerContentBlock } from "react-shimmer-effects-18";
const Loader = () => {
  return (
   <div className="shimmer">
   <ShimmerContentBlock
        title
        text
        cta
        reverse
        thumbnailWidth={270}
        thumbnailHeight={270}
      />
   <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={270}
        thumbnailHeight={270}
      />
    </div>
  );
};


export default Loader
