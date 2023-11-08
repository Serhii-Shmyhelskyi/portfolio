import React, { FC } from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: FC = () => (
  <div className="wrapper">
    <ContentLoader
      speed={0}
      width={370}
      height={340}
      viewBox="0 0 370 340"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="120" y="213" rx="10" ry="10" width="130" height="25" />
      <rect x="20" y="43" rx="20" ry="20" width="330" height="154" />
      <rect x="120" y="9" rx="15" ry="15" width="130" height="25" />
      <rect x="20" y="251" rx="20" ry="20" width="330" height="79" />
    </ContentLoader>
  </div>
);
