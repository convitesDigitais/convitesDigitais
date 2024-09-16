"use client";
import React from "react";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
const linkPerm = "https://www.gestaoconvites.com/convidado";
import { AiFillDelete, AiFillEdit, AiOutlineShareAlt } from "react-icons/ai";

export default function TableConvidados({
  listaConvidados,
  openEdit,
  removeConvidado,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [iDLimk, setIDLimk] = useState("");
  return (
    <>
      <div className="mt-4">
        <Table isStriped aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Nome do Convidado</TableColumn>
            <TableColumn>Categoria</TableColumn>
            <TableColumn>Nome da Mesa</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>
              <div className="flex justify-end">
                <p>Accões</p>
              </div>
            </TableColumn>
          </TableHeader>
          <TableBody>
            {listaConvidados.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.nomeConvidado}</TableCell>
                <TableCell>{item.categoriaConvidado}</TableCell>
                <TableCell>{item.mesa}</TableCell>
                <TableCell>
                  {item.status === "Pendente" && (
                    <>
                      <div className="text-green-500 cursor-pointer">
                        Pendente
                      </div>
                    </>
                  )}
                  {item.status === "Aceite" && (
                    <>
                      <div className="text-blue-500 cursor-pointer">Aceite</div>
                    </>
                  )}
                  {item.status === "Recusado" && (
                    <>
                      <div className="text-red-500 cursor-pointer">
                        Recusado
                      </div>
                    </>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex flex-row justify-end gap-4">
                    <div className="text-green-500 cursor-pointer">
                      <AiOutlineShareAlt
                        onClick={() => {
                          onOpen();
                          setIDLimk(item._id);
                        }}
                      />
                    </div>
                    <div className="text-blue-500 cursor-pointer">
                      <AiFillEdit onClick={() => openEdit(item._id)} />
                    </div>
                    <div className="text-red-500 cursor-pointer">
                      <AiFillDelete onClick={() => removeConvidado(item._id)} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Link do Convidado
              </ModalHeader>
              <ModalBody>
                <p>
                  {linkPerm}/{iDLimk}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="light" onPress={onClose}>
                  OK
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
