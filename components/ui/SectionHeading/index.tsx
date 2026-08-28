import React from "react";
import { PiPlusBold } from "react-icons/pi";

interface ISectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<ISectionHeadingProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="container mx-auto flex flex-col items-center py-10 lg:py-16">
      <div className="section-heading">
        <span className="section-heading__line " />
        <div className="section-heading__frame-wrap">
          <span className="section-heading__corner section-heading__corner--tl" />
          <span className="section-heading__corner section-heading__corner--tr" />
          <span className="section-heading__corner section-heading__corner--bl" />
          <span className="section-heading__corner section-heading__corner--br" />


          <span className="section-heading__corner section-heading__corner--tl-1" />
          <span className="section-heading__corner section-heading__corner--tr-1" />
          <span className="section-heading__corner section-heading__corner--bl-1" />
          <span className="section-heading__corner section-heading__corner--br-1" />

          <div className="section-heading__frame">
            <div className="section-heading__frame-inner">
              <PiPlusBold className="section-heading__plus" />
              <h2 className="section-heading__title">{title}</h2>
              <PiPlusBold className="section-heading__plus" />
            </div>
          </div>
        </div>
        <span className="section-heading__line section-heading__line--right" />
      </div>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
};
