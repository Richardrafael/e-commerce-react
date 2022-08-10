import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';


const informacao = ({ handleAddToCart, items, price = 20 }) => {
  return (
    <section className="grid md:grid-cols-4 gap-4 lg:grid-cols-4 grid-cols-3  pt-24 mx-4">
      {items
        ? items.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div className="w-[280px] h-[230px] border border-green-280 bg-white/80 rounded-xl flex flex-col justify-between text-black hover:bg-white/90 hover:text-black hover:font-medium transition duration-250">
                <div>
                  <h2 className="font-bold text-xl text-center mb-2">
                    {item.name}
                  </h2>
                  <div className="text-center mb-2">
                    <p>Carboidratos: {item.nutritions.carbohydrates}g</p>
                    <p>Proteína: {item.nutritions.protein}g</p>
                    <p>Gordura: {item.nutritions.fat}g</p>
                    <p>Calorias: {item.nutritions.calories}kcal</p>
                    <p>Açucar: {item.nutritions.sugar}g</p>
                    <p>Preço: $ {price} kg</p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full text-center hover:bg-gray-300/60 active:bg-gray-400/60 rounded-xl p-1 cursor-pointer"
                >
                  <AddCircleOutlineTwoToneIcon />
                </button>
              </div>
            </div>
          ))
        : 'ERROR'}
    </section>
  );
};

export default informacao;
