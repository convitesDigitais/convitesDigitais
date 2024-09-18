"use client";
import { useState, useEffect } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
export default function DashBoardImage({
  setIsForm,
  setIsAddInfoForm,
  evento,
  convitesGeradosS,
  convitesAceitesS,
  convitesRecusadosS,
  convitesPendentesS,
}) {
  const [convitesPrevistos, setConvitesPrevistos] = useState("0");
  const [orcamento, setOrcamento] = useState("0");
  function dadosEvento() {
    setIsForm(true);
    setIsAddInfoForm(true);
  }
  useEffect(() => {
    evento.length &&
      evento.map((item) => {
        var orcamentVol = parseFloat(item.totalConvidados) * 50;
        setConvitesPrevistos(item.totalConvidados);
        setOrcamento(orcamentVol.toString());
      });
  }, [evento]);
  return (
    <div>
      <div className="bg-no-repeat bg-[url('/dashFundo.jpg')] bg-cover bg-center">
        <div className="text-center p-12 backdrop-blur-sm bg-white/30">
          <p className="text-4xl font-bold text-center">Dados do Evento</p>
          {evento.length > 0 ? (
            <>
              {evento.map((item) => (
                <>
                  <div key={item.dataEvento}>
                    <div className="grid grid-cols-1 md:flex justify-center gap-1 mt-4">
                      <div className="flex justify-center md:justify-end">
                        <p className="text-4xl font-bold">{item.nomeNoiva}</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold">&</p>
                      </div>
                      <div className="flex justify-center md:justify-start">
                        <p className="text-4xl font-bold">{item.nomeNoivo}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xl font-bold">
                      {item.dataEvento.substring(8, 10)} de{" "}
                      {meses[item.dataEvento.substring(5, 7)]} de{" "}
                      {item.dataEvento.substring(0, 4)}
                    </p>
                    <p className="font-bold">{item.enderecoIgreja}</p>
                  </div>
                </>
              ))}
            </>
          ) : (
            <>
              <div key={"1"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-4">
                  <div className="flex justify-center md:justify-end">
                    <p className="text-4xl font-bold">Nome da Noiva</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">&</p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <p className="text-4xl font-bold">Nome do Noivo</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xl font-bold">Data do Evento</p>
                <p className="font-bold">Endereço do Evento</p>
              </div>
            </>
          )}

          <div className="mt-4">
            {evento.length > 0 ? (
              <></>
            ) : (
              <>
                <Button color="danger" variant="light" onClick={dadosEvento}>
                  Edicionar Dados do Evento
                </Button>{" "}
              </>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
            <div>
              <Card className="p-4 bg-orange-500/10 text-orange-500 font-bold">
                <CardBody>
                  <div className="text-center">
                    <p className="font-bold text-orange-500">
                      Convites Gerados
                    </p>
                    <p>
                      {convitesGeradosS}/{convitesPrevistos}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="p-4 bg-orange-500/10 text-orange-500 font-bold">
                <CardBody>
                  <div className="text-center">
                    <p className="font-bold text-orange-500">Orçamento</p>
                    <p>
                      {parseFloat(orcamento).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                      Mt
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="p-4 bg-orange-500/10 text-orange-500 font-bold">
                <CardBody>
                  <div className="text-center">
                    <p className="font-bold text-orange-500">
                      Convites Aceites
                    </p>
                    <p>{convitesAceitesS}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="p-4 bg-orange-500/10 text-orange-500 font-bold">
                <CardBody>
                  <div className="text-center">
                    <p className="font-bold text-orange-500">
                      Convites Recusados
                    </p>
                    <p>{convitesRecusadosS}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="p-4 bg-orange-500/10 text-orange-500 font-bold">
                <CardBody>
                  <div className="text-center">
                    <p className="font-bold text-orange-500">
                      Convites Pendentes
                    </p>
                    <p>{convitesPendentesS}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
