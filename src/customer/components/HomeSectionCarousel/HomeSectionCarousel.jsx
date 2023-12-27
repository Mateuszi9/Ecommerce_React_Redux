import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarousel = ({data, sectionName}) => {
  const responsive = {
    0: { items: 1.2 },
    500: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          autoWidth
          responsive={responsive}
          disableDotsControls
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
