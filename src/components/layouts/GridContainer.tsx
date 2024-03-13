import React from "react";

const GridContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-40 justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default GridContainer;
