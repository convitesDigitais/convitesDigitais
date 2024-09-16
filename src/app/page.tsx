"use client";
import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { FiSun, FiMoon } from "react-icons/fi";
import NewForm from "./components/newForm";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hied, setHied] = useState(false);
  const [isNext, setIsNext] = useState(0);
  const [isForm, setIsForm] = useState(false);
  const [nomeUser, setNomeUser] = useState("");
  const [email, setEmail] = useState("");
  const [contacto, setContacto] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVerificar, setSenhaVerificar] = useState("");
  const router = useRouter();
  const carousel = [
    "Bem-vindo a nossa plataforma – A Solução Completa para Gestão de Convites Digitais!",
    "Tornamos o processo de enviar, gerenciar e acompanhar convites para eventos mais fácil, rápido e organizado.",
    "Está planejando uma festa, casamento, conferência ou qualquer outro evento especial?",
    "Nossa plataforma de convites digitais é a ferramenta ideal para garantir que todos os seus convidados recebam e confirmem sua presença de maneira eficiente.",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid place-items-center h-screen">
      {isForm ? (
        <>
          <NewForm
            nomeUser={nomeUser}
            setNomeUser={setNomeUser}
            email={email}
            setEmail={setEmail}
            contacto={contacto}
            setContacto={setContacto}
            senha={senha}
            setSenha={setSenha}
            senhaVerificar={senhaVerificar}
            setSenhaVerificar={setSenhaVerificar}
            router={router}
          />
        </>
      ) : (
        <>
          {" "}
          <div>
            <h1 className="text-7xl font-bold text-center gap-2">
              {/* {currentTheme === "dark" ? "Convites" : "Convites"}{" "} */}
              <span>Convites&nbsp;</span>
              <span className="text-amber-600">Digitais</span>
            </h1>
            {/* <div className="flex justify-center mt-4">
              {currentTheme === "dark" ? (
                <FiSun onClick={() => setTheme("light")} />
              ) : (
                <FiMoon onClick={() => setTheme("dark")} />
              )}
            </div> */}
            <div>
              <p className="dark:text-amber-600 my-4 text-center">
                {carousel[isNext]}
              </p>
            </div>
            {isNext === 0 ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="flex justify-end cursor-pointer"
                    title="Anterior"
                  >
                    {" "}
                    {/* <Button
                    as={Link}
                    color="warning"
                    href="/dashboard"
                    variant="flat"
                  >
                    Pular Intro
                  </Button>{" "} */}
                    <Button
                      color="warning"
                      onClick={() => setIsForm(true)}
                      variant="flat"
                    >
                      Pular Intro
                    </Button>{" "}
                  </div>
                  <div className="cursor-pointer" title="Proximo">
                    <AiOutlineArrowRight
                      className="dark:text-amber-600 mt-3"
                      onClick={() => {
                        if (isNext === carousel.length - 1) {
                          setHied(true);
                        } else {
                          setHied(false);
                          setIsNext((prev) => (prev += 1));
                        }
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="flex justify-end cursor-pointer"
                    title="Anterior"
                  >
                    <AiOutlineArrowLeft
                      className="dark:text-amber-600 mt-3"
                      onClick={() => {
                        if (isNext === 0) {
                        } else {
                          setHied(false);
                          setIsNext((prev) => (prev -= 1));
                        }
                      }}
                    />
                  </div>
                  <div className="cursor-pointer" title="Proximo">
                    {hied ? (
                      <>
                        {/* <Button
                        as={Link}
                        color="warning"
                        href="/dashboard"
                        variant="flat"
                      >
                        Criar Conta
                      </Button>{" "} */}
                        <Button
                          color="warning"
                          onClick={() => setIsForm(true)}
                          variant="flat"
                        >
                          Criar Conta
                        </Button>{" "}
                      </>
                    ) : (
                      <>
                        <AiOutlineArrowRight
                          className="dark:text-amber-600 mt-3"
                          onClick={() => {
                            if (isNext === carousel.length - 1) {
                              setHied(true);
                            } else {
                              setHied(false);
                              setIsNext((prev) => (prev += 1));
                            }
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
