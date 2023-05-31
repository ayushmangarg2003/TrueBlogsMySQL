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
        thumbnailWidth={30%}
        thumbnailHeight={200}
      />
   <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={30%}
        thumbnailHeight={200}
      />
    </div>
  );
};


export default Loader
