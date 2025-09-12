import React from 'react';

const ExploreCard = (props) => {
  const splitTitle1 = props.title1.split(' ');
  const splitTitle2 = props.title2.split(' ');

  return (
    <>
      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full ">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className="opacity-100 lg:opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
          <h2 className="uppercase text-6xl font-[font1] border-1 px-80 text-white border-white rounded-full text-center">
            <span className="block">{splitTitle1[0]}</span>
            {splitTitle1.length > 1 && (
              <span className="block">{splitTitle1.slice(1).join(' ')}</span>
            )}
          </h2>
        </div>
      </div>

      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full ">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className="opacity-100 lg:opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
          <h2 className="uppercase text-6xl font-[font1] border-1 px-80 text-white border-white rounded-full text-center">
            <span className="block">{splitTitle2[0]}</span>
            {splitTitle2.length > 1 && (
              <span className="block">{splitTitle2.slice(1).join(' ')}</span>
            )}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
