import { useEffect, useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  useEffect(() => {
    console.log("likes mudou");
    if (likes > 10) {
      setLista((listaAnterior: string[]) =>
        listaAnterior.concat("Famosinho!")
      );
    }
  }, [likes]);

  function somaLikes() {
    setLikes((ultimoValor) => ultimoValor + 1);
  }

  function adicionarLista() {
    setLista((listaAnterior: string[]) => listaAnterior.concat(comments));
  }

  return (
    <div className="p-10">
      <div className="flex flex-col justify-evenly p-4 w-96 h-96 bg-slate-400 rounded-3xl">
        <div className="flex justify-between p-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-xl">Vinicius de Oliveira</h1>
          </div>

          <h2 className="text-lg">X</h2>
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIskXiis51E9dy9AuCWVRoGU_4sUYlwfjJUbFWRyESxA&s"
            alt=""
            className="w-full h-56 object-cover rounded-2xl"
          />
        </div>

        <div className="flex justify-between text-xl">
          <button className="cursor-pointer" onClick={somaLikes}>
            {likes < 10 ? (
              <span>❤️ {likes} curtidas</span>
            ) : (
              <span>❤️ Famosinho!</span>
            )}
          </button>
          <span>🚀 Compartilhar</span>
        </div>
      </div>
      <input
        type="text"
        onChange={(event) => setComments(event.target.value)}
      />
      <button onClick={adicionarLista}>adicionar a lista</button>
      <span>{lista}</span>
    </div>
  );
}

export default App;
