import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

import ChevronLeftIcon from '../assets/chevron_left_icon.svg';
import ChevronRightIcon from '../assets/chevron_right_icon.svg';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
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
        <Image
          src={ChevronLeftIcon}
          position={'absolute'}
          top={'40%'}
          left={'1'}
          cursor={'pointer'}
          w={8}
          h={8}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />

        <Image
          src={ChevronRightIcon}
          position={'absolute'}
          top={'40%'}
          right={'1'}
          cursor={'pointer'}
          w={8}
          h={8}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </Box>
    </Box>
  );
};

export default Carousel;
