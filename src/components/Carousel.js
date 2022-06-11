import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

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
    <Box {...handlers} className="carousel" rounded="md" position={'relative'}>
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <Box display={{ base: 'none', sm: 'flex' }} className="indicators">
        <ChevronLeftIcon
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

        <ChevronRightIcon
          position={'absolute'}
          top={'40%'}
          right={'1'}
          cursor={'pointer'}
          w={8}
          h={8}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}></ChevronRightIcon>
      </Box>
    </Box>
  );
};

export default Carousel;
