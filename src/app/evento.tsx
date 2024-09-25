export const getUser = async () => {
  const data = await fetch("https://www.gestaoconvites.com/api/obterUser", {
    cache: "no-store",
  });
  return data.json();
};
export const getEventos = async () => {
  const data = await fetch("https://www.gestaoconvites.com/api/obterEvento", {
    cache: "no-store",
  });
  return data.json();
};
export const getConvidados = async () => {
  const data = await fetch(
    "https://www.gestaoconvites.com/api/obterConvidados",
    {
      cache: "no-store",
    }
  );
  return data.json();
};
export const getCategorias = async () => {
  const data = await fetch(
    "https://www.gestaoconvites.com/api/obterCategorias",
    {
      cache: "no-store",
    }
  );
  return data.json();
};
export const getMesas = async () => {
  const data = await fetch("https://www.gestaoconvites.com/api/obterMesas", {
    cache: "no-store",
  });
  return data.json();
};
