"use client";
export default function DashBoardImageConvidado() {
  return (
    <div>
      <div className="bg-no-repeat bg-[url('/dashFundo.jpg')] bg-cover bg-center">
        <div className="text-center p-12 backdrop-blur-sm bg-white/30">
          <div className="mt-12">
            <div class="grid grid-cols-3 gap-4">
              <div className="flex justify-end">
                <h3 className="text-2xl font-bold">Nome da Noiva</h3>
              </div>
              <div>
                <h3 className="text-2xl font-bold">&</h3>
              </div>
              <div className="flex justify-start">
                <h3 className="text-2xl font-bold">Nome do Noivo</h3>
              </div>
            </div>
          </div>
          <div className="mb-12 mt-4">
            <p className="text-xl font-bold">12 de Novembro de 2024</p>
            <p className="font-bold">
              Av. Dom Alexandre, Bairro das Mahotas - Cidade de Maputo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
