export function BoxText(props) {
  return (
    <h1 className="text-4xl text-center m-9 p-6 w-auto bg-amber-300 text-gray-800 hover:text-white">
      {props.titulo}
    </h1>
  );
}

export function Text(props) {
  return (
    <h1 className="font-semibold text-justify text-2xl m-20 p-5 h-auto w-auto bg-amber-100 text-gray-800 border-4 border-rose-600 rounded-3xl content-center bg-gradient-to-t from-amber-200 via-amber-200 flex-1">
      {props.texto}
    </h1>
  );
}
