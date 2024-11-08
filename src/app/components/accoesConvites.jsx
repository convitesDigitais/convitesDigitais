"use client";
import { Button } from "@nextui-org/react";
import { AiOutlinePlus, AiOutlineCaretLeft } from "react-icons/ai";
import { toast, Bounce } from "react-toastify";
export default function AccoesConvites({
  setIsForm,
  setIsAddForm,
  setIsAddCategoriaForm,
  setIsAddMesaForm,
  isForm,
  setIsAddInfoForm,
  addConvidado,
}) {
  function convidados() {
    if (addConvidado) {
      toast.info(
        "🦄 Atingiu o limite dos convites disponiveis no seu orçamento!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }
      );
    } else {
      setIsForm(true);
      setIsAddForm(true);
      setIsAddCategoriaForm(false);
      setIsAddMesaForm(false);
      setIsAddInfoForm(false);
    }
  }
  function categoria() {
    setIsForm(true);
    setIsAddForm(false);
    setIsAddCategoriaForm(true);
    setIsAddMesaForm(false);
    setIsAddInfoForm(false);
  }
  function mesa() {
    setIsForm(true);
    setIsAddForm(false);
    setIsAddCategoriaForm(false);
    setIsAddInfoForm(false);
    setIsAddMesaForm(true);
  }
  return (
    <div className="p-4 flex justify-between">
      {isForm && <AiOutlineCaretLeft onClick={() => setIsForm(false)} />}
      <div>
        <Button color="warning" variant="light" onClick={convidados}>
          <AiOutlinePlus /> Convidado
        </Button>
        <Button color="warning" variant="light" onClick={categoria}>
          <AiOutlinePlus /> Categoria
        </Button>
        <Button color="warning" variant="light" onClick={mesa}>
          <AiOutlinePlus /> Mesa
        </Button>
      </div>
    </div>
  );
}
