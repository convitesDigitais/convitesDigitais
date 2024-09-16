"use client";
import React from "react";
import {
  Card,
  CardBody,
  Select,
  SelectItem,
  Input,
  Button,
} from "@nextui-org/react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
export default function NewConvidado({
  setIsForm,
  creatConvidado,
  nomeConvidado,
  setNomeConvidado,
  categoriaFiltro,
  setCategoriaFiltro,
  mesaFiltro,
  setMesaFiltro,
  listaMesas,
  listaCategoria,
  isEdit,
  editConvidado,
  setNumeroAcompanhantes,
  numeroAcompanhantes
}) {
  return (
    <div className="p-4">
      <div className="text-center text-2xl font-bold mb-4">
        {isEdit ? (
          <>
            <p>Editar Convidado</p>
          </>
        ) : (
          <>
            <p>Novo Convidado</p>
          </>
        )}
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div></div>
        <div>
          <Card>
            <CardBody>
              <div>
                <Input
                  type="text"
                  variant="underlined"
                  label="Nome do Convidado"
                  value={nomeConvidado}
                  onValueChange={(value) => setNomeConvidado(value)}
                />
                <Select
                  variant="underlined"
                  label="Categorias"
                  className="w-full"
                  value={categoriaFiltro}
                  onChange={(e) => setCategoriaFiltro(e.target.value)}
                >
                  {listaCategoria.map((item) => (
                    <SelectItem key={item.categoriaConvidado}>
                      {item.categoriaConvidado}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  variant="underlined"
                  label="Mesas"
                  className="w-full"
                  value={mesaFiltro}
                  onChange={(e) => setMesaFiltro(e.target.value)}
                >
                  {listaMesas.map((item) => (
                    <SelectItem key={item.mesa}>{item.mesa}</SelectItem>
                  ))}
                </Select>
                <Input
                  type="number"
                  min={1}
                  max={4}
                  variant="underlined"
                  label="Número de Acompanhantes"
                  value={numeroAcompanhantes}
                  onValueChange={(value) => setNumeroAcompanhantes(value)}
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
                  {isEdit ? (
                    <>
                      <Button
                        color="warning"
                        variant="light"
                        onClick={editConvidado}
                      >
                        <AiOutlineCheck /> Editar
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        color="warning"
                        variant="light"
                        onClick={creatConvidado}
                      >
                        <AiOutlineCheck /> Confirmar
                      </Button>
                    </>
                  )}
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
