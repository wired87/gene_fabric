"use client";
import React, {useEffect} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface CMOdelT {
  updateState: () => void;
  state: boolean;
}

const  CModal: React.FC<CMOdelT> = (
  {updateState, state}
) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  useEffect(() => {
    onOpen()
  }, []);

  const getHeading = () => {
    return state ? "Das hat geklappt!" : "Da ist etwas schief gelaufen";
  }

  const getBody = () => {
    return state? "Nachricht gesendet! \n Wir werden uns schnellstmöglich bei Ihnen melden!" : "Bitte überprüfen Sie Ihre Internetverbindung und \n versuchen es erneut."
  }
  const heading = getHeading();
  const body = getBody();
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{heading}</ModalHeader>
              <ModalBody>
                <p className={"text-center"}>
                  {body}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={() => {
                  onClose();
                  updateState();
                }}>
                  Schließen
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default CModal;