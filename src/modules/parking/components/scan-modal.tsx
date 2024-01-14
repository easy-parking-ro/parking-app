import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCamera, FaKeyboard } from "react-icons/fa";

import { QrReaderCamera, QrReaderInput } from "./";

interface ScanModalProps {
  isOpen: boolean;
  onClose(): void;
}

type View = "Camera" | "Keyboard";

export const ScanModal: React.FC<ScanModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<View>("Camera");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
      <ModalOverlay />

      <ModalContent>
        <ModalHeader
          textAlign="center"
          borderBottom="2px solid"
          borderBottomColor="gray.200"
        >
          <Text fontSize={24}>Scanare ticket parcare</Text>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody as={VStack} alignItems="stretch" p={0}>
          <VStack
            flex={1}
            spacing={0}
            alignItems="stretch"
            justifyContent="center"
          >
            {view === "Camera" ? <QrReaderCamera /> : <QrReaderInput />}
          </VStack>

          <HStack mt="auto" p={6} spacing={4}>
            <Button
              flex={1}
              size="lg"
              leftIcon={<FaCamera />}
              onClick={() => setView("Camera")}
            >
              Camera
            </Button>
            <Button
              flex={1}
              size="lg"
              leftIcon={<FaKeyboard />}
              onClick={() => setView("Keyboard")}
            >
              Tastati codul
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
