"use client";
import { toast, Bounce } from "react-toastify";
import { Image, Link, Textarea } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
// import { getConvidados, getEventos } from "../../evento";
import { AiOutlineCheck, AiOutlineClose, AiFillMail } from "react-icons/ai";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
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
export default function DashBoardConvidado() {
  const aceitar = useDisclosure();
  const mensagemD = useDisclosure();
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [mesa, setMesa] = useState("");
  const [categoriaConvidado, setCategoriaConvidadoa] = useState("");
  const [creator, setCreator] = useState("");
  const [creatorID, setCreatorID] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [horaCerimoniaReligiosa, setHoraCerimoniaReligiosa] = useState("");
  const [horaCerimoniaCivil, setHoraCerimoniaCivil] = useState("");
  const [enderecoIgreja, setEnderecoIgreja] = useState("");
  const [enderecoSalao, setEnderecoSalao] = useState("");
  const [nomeNoiva, setNomeNoiva] = useState("");
  const [nomeNoivo, setNomeNoivo] = useState("");
  const [numeroAcompanhantes, setNumeroAcompanhantes] = useState("");
  const [copoAgua, setCopoAgua] = useState("");
  const [confirmacaoConvite, setConfirmacaoConvite] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [iD, setID] = useState("");
  // const [isEdit, setIsEdit] = useState(false);
  const ColoredLine = () => (
    <hr
      style={{
        color: "black",
        backgroundColor: "black",
        height: 2,
      }}
    />
  );
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const fetchPosts = async () => {
      const data1 = await fetch("/api/obterConvidados", {
        cache: "no-cache",
        method: "GET",
      });
      const convidados = await data1.json();
      convidados.map((item) => {
        if (item._id === id[0]) {
          console.log(item);
          setID(item._id);
          setNomeConvidado(item.nomeConvidado);
          setMesa(item.mesa);
          setCategoriaConvidadoa(item.categoriaConvidado);
          setMensagem(item.mensagem);
          setCreatorID(item.creator);
          setCreator(item.creator);
          setConfirmacaoConvite(item.status);
          setNumeroAcompanhantes(item.numeroAcompanhantes);
        }
      });
    };
    fetchPosts();
  }, [id]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch("/api/obterEvento", {
        cache: "no-cache",
        method: "GET",
      });
      const evento = await data.json();
      evento.map((item) => {
        if (item.creator === creatorID) {
          setDataEvento(item.dataEvento);
          setHoraCerimoniaReligiosa(item.horaCerimoniaReligiosa);
          setHoraCerimoniaCivil(item.horaCerimoniaCivil);
          setEnderecoIgreja(item.enderecoIgreja);
          setEnderecoSalao(item.enderecoSalao);
          setNomeNoiva(item.nomeNoiva);
          setNomeNoivo(item.nomeNoivo);
          setCopoAgua(item.copoAgua);
        }
      });
    };
    fetchPosts();
  }, [creatorID]);
  async function enviarMensagem() {
    toast.info("🦄 Processando!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    const data = {
      nomeConvidado,
      mesa,
      categoriaConvidado,
      numeroAcompanhantes,
      mensagem,
      status: "Aceite",
      creator,
    };

    try {
      const response = await fetch(`/api/editConvidado/${iD}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        toast.info("🦄 Felicitação enviada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {}
  }
  async function editConvidadoAceitar() {
    // testebbb
    toast.info("🦄 Processando!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    const data = {
      nomeConvidado,
      mesa,
      categoriaConvidado,
      numeroAcompanhantes,
      status: "Aceite",
      creator,
    };

    try {
      const response = await fetch(`/api/editConvidado/${iD}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        toast.info("🦄 Convite aceite com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {}
  }
  async function editConvidadoRecusar() {
    toast.info("🦄 Processando!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    const data = {
      nomeConvidado,
      mesa,
      categoriaConvidado,
      numeroAcompanhantes,
      status: "Recusado",
      creator,
    };

    try {
      const response = await fetch(`/api/editConvidado/${iD}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.info("🦄 Convite recusado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        setIsForm(false);
      }
    } catch (error) {}
  }
  return (
    <div className="h-screen bg-no-repeat bg-[url('/digitalC.png')] bg-cover bg-center">
      <div className="flex justify-center pt-16">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={50}
          src="/alianca.png"
          width={100}
        />
      </div>
      <div className="flex flex-col justify-center pt-4">
        <div className="text-center">
          <small className="text-center font-semibold">
            &quot;É pela certeza do nosso amor e pela confiança nos
          </small>
        </div>
        <div className="text-center">
          <small className="text-center font-semibold">
            planos de Deus que juntamos as nossas mãos e as nossas
          </small>
        </div>
        <div className="text-center">
          <small className="text-center font-semibold">
            vidas para iniciarmos a mais sublime das caminhadas,
          </small>
        </div>
        <div className="text-center">
          {" "}
          <small className="text-center font-semibold">
            onde estaremos selando diante de Deus aquilo que já é
          </small>
        </div>
        <div className="text-center">
          {" "}
          <small className="text-center font-semibold">
            consumado em nossos corações.&quot;
          </small>
        </div>
      </div>
      <div className="flex justify-center font-bold text-xl mt-4">
        <p className="text-center font-bold font-convite text-4xl text-orange-300">
          {nomeNoiva} & {nomeNoivo}
        </p>
      </div>
      <div className="text-center pt-2">
        {" "}
        <small className="font-semibold">
          TÊM A HONRA DE CONVIDAR EXMO (A) SR. (A)
        </small>
      </div>
      <div className="flex justify-center font-bold text-xl">
        <p className="text-center font-bold font-convite text-2xl">
          {nomeConvidado}
        </p>
      </div>
      <div className="px-8">
        <ColoredLine />
      </div>
      <div className="text-center">
        {" "}
        <small className="font-semibold">
          ASSISTIR O SEU CASAMENTO A REALIZAR-SE NO DIA
        </small>
      </div>
      <div className="flex justify-center pt-2 gap-2">
        {" "}
        <div>
          {" "}
          <p className="text-center font-bold text-4xl text-orange-300">
            {dataEvento.substring(8, 10)}
          </p>
        </div>
        <div className="flex flex-col pt-2">
          {" "}
          <div>
            <ColoredLine />
          </div>
          <div>
            <p className="text-center font-semibold">
              {meses[dataEvento.substring(5, 7)]} de{" "}
              {dataEvento.substring(0, 4)}
            </p>
          </div>
          <div>
            <ColoredLine />
          </div>
        </div>
      </div>
      <div className="text-center pt-2">
        {" "}
        <small className="text-center font-semibold">
          Cerimónia Religiosa - {horaCerimoniaReligiosa}
        </small>
      </div>
      <div className="text-center">
        {" "}
        <p className="text-center font-bold">{enderecoIgreja}</p>
      </div>
      <div className="text-center">
        {" "}
        <small className="text-center font-semibold">
          Cerimónia Civil - {horaCerimoniaCivil} | Copo de água - {copoAgua}
        </small>
      </div>
      <div className="flex justify-center gap-2">
        {" "}
        <div>
          {" "}
          <p className="text-center font-bold">{enderecoSalao}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 pt-4">
        {confirmacaoConvite === "Pendente" && (
          <>
            <div className="flex justify-end" onClick={aceitar.onOpen}>
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={80}
                src="/confirmarPresenca.png"
                width={80}
              />
            </div>
          </>
        )}
        {confirmacaoConvite === "Aceite" && (
          <div className="flex justify-end">
            <div className="flex flex-col text-center">
              <div className="flex justify-center">
                {" "}
                <AiOutlineCheck className="text-4xl text-blue-500" />
              </div>
              <small className="text-blue-500 font-bold">Convite Aceite</small>
              <Button
                color="warning"
                variant="light"
                onPress={mensagemD.onOpen}
              >
                <AiFillMail />
                Felicitações
              </Button>
              <Button
                color="danger"
                variant="light"
                onPress={() => editConvidadoRecusar()}
              >
                <AiOutlineClose /> Recusar
              </Button>
            </div>
          </div>
        )}
        {confirmacaoConvite === "Recusado" && (
          <div className="flex justify-end">
            <div className="flex flex-col text-center">
              <div className="flex justify-center">
                {" "}
                <AiOutlineClose className="text-4xl text-red-500" />
              </div>
              <small className="text-red-500 font-bold">Convite Recusado</small>
              <Button
                color="warning"
                variant="light"
                onPress={() => editConvidadoAceitar()}
              >
                <AiOutlineCheck /> Aceitar
              </Button>
            </div>
          </div>
        )}
        <div className="flex justify-center pt-4">
          <Link href="/mapIgreja">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={80}
              src="/localizacaoIgreja.png"
              width={80}
            />
          </Link>
        </div>
        <div>
          <Link href="/mapSalao">
            {" "}
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={80}
              src="/localizacaoSalao.png"
              width={80}
            />{" "}
          </Link>
        </div>
      </div>
      <div className="text-center">
        {" "}
        <small>Válido para {numeroAcompanhantes} pessoa(s)</small>
      </div>
      <div className="text-center">
        {" "}
        <small>NÃO EXTENSIVO A CRIANÇAS</small>
      </div>
      <Modal isOpen={aceitar.isOpen} onOpenChange={aceitar.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirmação do convite
              </ModalHeader>
              <ModalBody>
                <p>Selecione uma das opções abaixo</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    editConvidadoRecusar();
                    onClose();
                  }}
                >
                  Recusar
                </Button>
                <Button
                  color="warning"
                  variant="light"
                  onPress={() => {
                    editConvidadoAceitar();
                    onClose();
                  }}
                >
                  Aceitar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={mensagemD.isOpen} onOpenChange={mensagemD.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Mensagem de Felicitação
              </ModalHeader>
              <ModalBody>
                <Textarea
                  label="Felicitações"
                  placeholder="Escreva a sua mensagen de felicitação"
                  className="max-w-xs"
                  value={mensagem}
                  onValueChange={(value) => setMensagem(value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  color="warning"
                  variant="light"
                  onPress={() => {
                    enviarMensagem();
                    onClose();
                  }}
                >
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
