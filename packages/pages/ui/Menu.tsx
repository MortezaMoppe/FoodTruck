import { useMenu } from "../data/menuData";

export const Menu = () => {
  const { mainDish, dips, error, handleAddToCart } = useMenu();

  if (error) {
    return <p className="text-red-500">Fel vid hämtning av menyn.</p>;
  }

  if (!Array.isArray(mainDish)) {
    return <p className="text-gray-500">Laddar meny...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-300 p-6 flex justify-center">
      <div className="bg-gray-700 text-gray-100 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">MENY</h2>

        {/* WONTON-SEKTION */}
        <div className="space-y-2">
          {mainDish.map((item) => (
            <button
              key={item.id}
              className="w-full p-4 rounded-lg transition duration-300 hover:bg-gray-500 focus:outline-none text-left flex flex-col"
              onClick={() => handleAddToCart(item)}
            >
              <div className="flex items-center w-full">
                <span className="text-lg font-bold whitespace-nowrap">{item.name}</span>
                <span className="flex-grow mx-2 relative before:content-['............................................................................'] before:absolute before:top-1/2 before:left-0 before:right-0 before:-translate-y-1/2 before:text-gray-400 before:overflow-hidden before:whitespace-nowrap before:pointer-events-none"></span>
                <span className="text-lg font-bold whitespace-nowrap">{item.price} SEK</span>
              </div>
              <p className="text-sm text-gray-300 leading-tight mt-1">{item.description}</p>
            </button>
          ))}
        </div>

        {/* DIPSÅS SEKTION */}
        <div className="mt-6">
          <div className="w-full flex items-center">
            <span className="text-lg font-bold whitespace-nowrap">DIPSÅS</span>
            <span className="flex-grow mx-2 relative before:content-['............................................................................'] before:absolute before:top-1/2 before:left-0 before:right-0 before:-translate-y-1/2 before:text-gray-400 before:overflow-hidden before:whitespace-nowrap before:pointer-events-none"></span>
            <span className="text-lg font-bold whitespace-nowrap">19 SEK</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3 w-full">
            {dips.map((item) => (
              <button
                key={item.id}
                className="bg-gray-500 text-gray-100 px-3 py-2 rounded hover:bg-gray-800 focus:outline-none text-center w-full text-sm sm:text-base"
                onClick={() => handleAddToCart(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
