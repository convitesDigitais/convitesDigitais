"use client";
import React from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
export default function NewDadoEvento({
  addEventoConvite,
  setNomeNoiva,
  nomeNoiva,
  setNomeNoivo,
  nomeNoivo,
  setDataEvento,
  dataEvento,
  setEnderecoIgreja,
  enderecoIgreja,
  setEnderecoSalao,
  enderecoSalao,
  setTotalConvidados,
  totalConvidados,
  setHoraCerimoniaReligiosa,
  horaCerimoniaReligiosa,
  horaCerimoniaCivil,
  setHoraCerimoniaCivil,
  setLatitudeCivil,
  latitudeCivil,
  longitudeCivil,
  setLongitudeCivil,
  setLatitudeReligiosa,
  latitudeReligiosa,
  setLongitudeReligiosa,
  longitudeReligiosa,
  copoAgua,
  setCopoAgua,
}) {
  return (
    <div className="p-4 mb-12">
      <div className="text-center text-2xl font-bold mb-4">
        <p>Dados do Evento</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div></div>
        <div>
          <Card>
            <CardBody>
              <div>
                <Input
                  type="text"
                  variant="underlined"
                  label="Nome da Noiva"
                  onChange={(e) => setNomeNoiva(e.target.value)}
                  value={nomeNoiva}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Nome do Noivo"
                  onChange={(e) => setNomeNoivo(e.target.value)}
                  value={nomeNoivo}
                />
                <Input
                  type="date"
                  variant="underlined"
                  label="Data do Evento"
                  onChange={(e) => setDataEvento(e.target.value)}
                  value={dataEvento}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Nome da Igreja"
                  onChange={(e) => setEnderecoIgreja(e.target.value)}
                  value={enderecoIgreja}
                />
                <p className="mt-2">Coordenadas da Cerimónia Religiosa</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Input
                      type="text"
                      variant="underlined"
                      label="Latitude"
                      onChange={(e) => setLatitudeReligiosa(e.target.value)}
                      value={latitudeReligiosa}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      variant="underlined"
                      label="Longitude"
                      onChange={(e) => setLongitudeReligiosa(e.target.value)}
                      value={longitudeReligiosa}
                    />
                  </div>
                </div>
                <Input
                  type="text"
                  variant="underlined"
                  label="Hora da Cerimónia Religiosa"
                  onChange={(e) => setHoraCerimoniaReligiosa(e.target.value)}
                  value={horaCerimoniaReligiosa}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Nome do Salão"
                  onChange={(e) => setEnderecoSalao(e.target.value)}
                  value={enderecoSalao}
                />
                <p className="mt-2">Coordenadas da Cerimónia Civil</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Input
                      type="text"
                      variant="underlined"
                      label="Latitude"
                      onChange={(e) => setLatitudeCivil(e.target.value)}
                      value={latitudeCivil}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      variant="underlined"
                      label="Longitude"
                      onChange={(e) => setLongitudeCivil(e.target.value)}
                      value={longitudeCivil}
                    />
                  </div>
                </div>
                <Input
                  type="text"
                  variant="underlined"
                  label="Hora da Cerimónia Civil"
                  onChange={(e) => setHoraCerimoniaCivil(e.target.value)}
                  value={horaCerimoniaCivil}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Hora do Copo de Água"
                  onChange={(e) => setCopoAgua(e.target.value)}
                  value={copoAgua}
                />
                <Input
                  min={0}
                  type="number"
                  variant="underlined"
                  label="Número de Convidados Previsto"
                  onChange={(e) => setTotalConvidados(e.target.value)}
                  value={totalConvidados}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-end">
                  <Button color="danger" variant="light">
                    <AiOutlineClose /> Cancelar
                  </Button>
                  <Button
                    color="warning"
                    variant="light"
                    onClick={() => addEventoConvite(false)}
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
