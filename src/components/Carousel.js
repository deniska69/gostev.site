import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';
import CarouselModal from './CarouselModal';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export const CarouselItem = ({ children, width, height, maxHeight }) => {
  return (
    <div className="carousel-item" style={{ width: width, height: height, maxHeight: maxHeight }}>
      {children}
    </div>
  );
};

const Carousel = ({ children, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <Box {...handlers} className="carousel" position={'relative'}>
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <Box display={{ base: 'none', sm: 'flex' }} className="indicators">
        <HiChevronLeft
          className="_btnLeafLeftCarousel"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />

        <HiChevronRight
          className="_btnLeafRightCarousel"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </Box>

      <Box display={{ base: 'none', sm: 'flex' }}>
        <CarouselModal title={title} children={children} />
      </Box>
    </Box>
  );
};

export default Carousel;
