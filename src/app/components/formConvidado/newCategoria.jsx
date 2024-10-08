"use client";
import React from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
export default function NewCategoria({
  setIsForm,
  creatCategoriaConvidado,
  categoriaConvidado,
  setCategoriaConvidadoa,
}) {
  return (
    <div className="w-80 p-4">
      <div className="text-center text-2xl font-bold mb-4">
        <p>Nova Categoria de Convidados</p>
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
                  label="Nome da Categoria"
                  value={categoriaConvidado}
                  onValueChange={(value) => setCategoriaConvidadoa(value)}
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
                  <Button
                    color="warning"
                    variant="light"
                    onClick={creatCategoriaConvidado}
                  >
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
