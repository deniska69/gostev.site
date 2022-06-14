import React, { useState } from 'react';
import { Box, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight, HiOutlineArrowsExpand } from 'react-icons/hi';

import './CarouselModal.css';

function CarouselModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = React.Children.count(props.children) - 1;
    } else if (newIndex >= React.Children.count(props.children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <Box>
      <HiOutlineArrowsExpand
        className="_btnFullSizeCarousel"
        onClick={() => {
          onOpen();
        }}
      />
      <Modal size={props.size} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="_modalBody">
            <br />
            <Box className="carousel-modal" position={'relative'}>
              <div className="inner-modal" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(props.children, (child, index) => {
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
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} size="sm">
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CarouselModal;
