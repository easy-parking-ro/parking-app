import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCamera, FaKeyboard } from "react-icons/fa";
import { QrReaderCamera, QrReaderInput } from "..";
interface Props {
  title?: string;
  textButton?: string;
}

export const ScanModal: React.FC<Props> = ({ textButton }) => {
  const [view, setView] = useState<string>("Camera");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{textButton}</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalContent bg="black">
          <VStack spacing={4} alignItems="stretch">
            <ModalHeader mt={6}>
              <HStack>
                <Button
                  onClick={() => setView("Camera")}
                  flex={1}
                  leftIcon={<FaCamera />}
                >
                  Camera
                </Button>
                <Button
                  onClick={() => setView("Keyboard")}
                  flex={1}
                  leftIcon={<FaKeyboard />}
                >
                  Tastatura
                </Button>
              </HStack>
            </ModalHeader>
          </VStack>
          <ModalCloseButton />
          <ModalBody p={0}>
            {view === "Camera" ? <QrReaderCamera /> : <QrReaderInput />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
