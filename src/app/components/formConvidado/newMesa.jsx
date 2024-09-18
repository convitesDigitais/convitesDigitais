"use client";
import React from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
export default function NewMesa({ setIsForm, mesa, setMesa, creatMesa }) {
  return (
    <div className="w-80 p-4">
      <div className="text-center text-2xl font-bold mb-4">
        <p>Nova Mesa</p>
      </div>
      <div>
        <div></div>
        <div>
          <Card>
            <CardBody>
              <div>
                <Input
                  type="text"
                  variant="underlined"
                  label="Nome da Mesa"
                  value={mesa}
                  onValueChange={(value) => setMesa(value)}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-end">
                  <Button
                    color="danger"
                    variant="light"
                    onClick={() => setIsForm(false)}
                  >
                    <AiOutlineClose /> Cancelar
                  </Button>
                  <Button color="warning" variant="light" onClick={creatMesa}>
                    <AiOutlineCheck /> Confirmar
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div></div>
      </div>
    </div>
  );
}
