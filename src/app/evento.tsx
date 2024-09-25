"use server";

export const getUser = async () => {
  const data = await fetch("https://www.gestaoconvites.com/api/obterUser");
  return data.json();
};
export const getEventos = async () => {
  const data = await fetch("https://www.gestaoconvites.com/api/obterEvento");
  return data.json();
};
export const getConvidados = async () => {
  const data = await fetch(
    "https://www.gestaoconvites.com/api/obterConvidados"
  );
  return data.json();
};
export const getCategorias = async () => {
  const data = await fetch(
    "https://www.gestaoconvites.com/api/obterCategorias"
  );
  return data.json();
};
export const getMesas = async () => {
  const data = await fetch("https://www.gestaoconvites.com/api/obterMesas");
  return data.json();
};
