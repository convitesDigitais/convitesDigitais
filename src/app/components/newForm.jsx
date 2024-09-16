"use client";
import { passwordStrength } from "check-password-strength";
import { useState, useEffect } from "react";
import React from "react";
import { Card, CardBody, Input, Button, Link } from "@nextui-org/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ShowPassStrength from "./showPassStrenght";
import { toast, Bounce } from "react-toastify";

export default function NewForm({
  nomeUser,
  setNomeUser,
  email,
  setEmail,
  contacto,
  setContacto,
  senha,
  setSenha,
  senhaVerificar,
  setSenhaVerificar,
  router,
}) {
  const [isFormLogin, setIsFormLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [strength, setStrength] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setStrength(passwordStrength(senha).id);
  }, [senha]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/obterUser`);
      const data = await response.json();
      setUsers(data);
    };
    fetchPosts();
  }, []);
  const createUser = async () => {
    if (
      nomeUser === "" ||
      email === "" ||
      contacto === "" ||
      senha === "" ||
      senhaVerificar === ""
    ) {
      toast.error("🦄 Todos os campos devem ser preenchidos!", {
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
    } else {
      const data = {
        nomeUser,
        email,
        contacto,
        senha,
      };
      if (senha != senhaVerificar) {
        toast.error("🦄 Verificação de senha incompativel!", {
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
      } else {
        if (contacto.length != 9) {
          toast.error("🦄 O contacto deve conter 9 digitos!", {
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
        } else {
          if (strength === 3) {
            toast.info("🦄 Registando o usuário!", {
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
            localStorage.setItem("nomeUser", nomeUser);
            try {
              const response = await fetch("/api/newUser", {
                method: "POST",
                body: JSON.stringify(data),
              });
              if (response.ok) {
                toast.info("🦄 Usuário criado com sucesso!", {
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
                router.push("/dashboard");
              }
            } catch (error) {
              toast.error("🦄 Erro ao criar usuário!", {
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
          } else {
            toast.info("🦄 Senha muito fraca!", {
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
        }
      }
    }
  };
  const logIn = () => {
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
    if (senha === "" || nomeUser === "") {
      toast.error("🦄 Todos os campos devem ser preenchidos!", {
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
    } else {
      users.map((item, index) => {
        if (senha === item.senha && nomeUser === item.nomeUser) {
          localStorage.setItem("nomeUser", nomeUser);
          router.push("/dashboard");
        } else {
          if (index + 1 === users.length) {
            toast.error("🦄 Credenciais Invalidas!", {
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
        }
      });
    }
  };
  return (
    <>
      {isFormLogin ? (
        <>
          {" "}
          <Card className="w-96">
            <h1 className="text-2xl font-bold text-center my-4">LogIn</h1>
            <CardBody>
              <div className="w-full flex flex-col gap-4">
                <div
                  key="underlined"
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type="text"
                    variant="underlined"
                    label="Nome Completo"
                    value={nomeUser}
                    onValueChange={(value) => setNomeUser(value)}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div
                  key="underlined"
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                    label="Senha"
                    value={senha}
                    onValueChange={(value) => setSenha(value)}
                    endContent={
                      <button onClick={() => setIsVisible((prev) => !prev)}>
                        {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </button>
                    }
                  />
                </div>
              </div>
              <div
                className="py-2 text-orange-500 cursor-pointer text-center"
                onClick={() => setIsFormLogin(false)}
              >
                <small>Criar uma conta!</small>
              </div>
              <div className="flex flex-row justify-end gap-2 my-4">
                <Button color="danger" variant="light" href="/" as={Link}>
                  Cancelar
                </Button>{" "}
                <Button color="warning" variant="light" onClick={logIn}>
                  Confirmar
                </Button>{" "}
              </div>
            </CardBody>
          </Card>
        </>
      ) : (
        <>
          <Card className="w-96">
            <h1 className="text-2xl font-bold text-center my-4">Criar Conta</h1>
            <CardBody>
              <div className="w-full flex flex-col gap-4">
                <div
                  key="underlined"
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type="text"
                    variant="underlined"
                    label="Nome Completo"
                    value={nomeUser}
                    onValueChange={(value) => setNomeUser(value)}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div
                  key="underlined"
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type="email"
                    variant="underlined"
                    label="Email"
                    value={email}
                    onValueChange={(value) => setEmail(value)}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div
                  key="underlined"
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type="number"
                    variant="underlined"
                    label="Contacto(s)"
                    value={contacto}
                    onValueChange={(value) => setContacto(value)}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div
                  key="underlined"
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                    label="Senha"
                    value={senha}
                    onValueChange={(value) => setSenha(value)}
                    endContent={
                      <button onClick={() => setIsVisible((prev) => !prev)}>
                        {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </button>
                    }
                  />
                </div>
              </div>
              <ShowPassStrength strength={strength} />
              <div className="w-full flex flex-col gap-4">
                <div
                  key="underlined"
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type={isVisible2 ? "text" : "password"}
                    variant="underlined"
                    label="Verificar Senha"
                    value={senhaVerificar}
                    onValueChange={(value) => setSenhaVerificar(value)}
                    endContent={
                      <button onClick={() => setIsVisible2((prev) => !prev)}>
                        {isVisible2 ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </button>
                    }
                  />
                </div>
              </div>
              <div
                className="py-2 text-orange-500 cursor-pointer text-center"
                onClick={() => setIsFormLogin(true)}
              >
                <small>Já tenho uma conta!</small>
              </div>
              <div className="flex flex-row justify-end gap-2 my-4">
                <Button color="danger" variant="light " href="/" as={Link}>
                  Cancelar
                </Button>{" "}
                <Button color="warning" variant="light" onClick={createUser}>
                  Confirmar
                </Button>{" "}
              </div>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
}
