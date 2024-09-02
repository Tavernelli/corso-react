export default function CardItem({ imgURL, name, isVisited, children }) {
  return (
    <div className="rounded-md bg-zinc-950 hover:scale-105 transtition-all ease-linear cursor-pointer">
      <img src={imgURL} className="rounded-t-md" alt=""></img>
      <div className="flex flex-col p-4">
        <h2 className="text-2xl text-white font-bold">{name}</h2>
        <p className="text-gray-500">{children}</p>
        {isVisited && <span className="text-green-600">☑️ visistata</span>}
        {!isVisited && <span className="text-red-600">✖️ non visistata</span>}
      </div>
    </div>
  );
}
