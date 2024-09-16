"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

export default function TableConvidadosCC() {
  return (
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
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>Padrinho</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Aceite</TableCell>
            <TableCell>
              <div className="flex flex-row justify-end gap-4">
                <div className="text-blue-500 cursor-pointer">
                  <AiOutlineCheck />
                </div>
                <div className="text-red-500 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
