import Cards from '../components/Cardsinfo/index';

const Home = ({ items, handleAddToCart }) => {
  return (
    <>
      <Cards items={items} handleAddToCart={handleAddToCart} />
    </>
  );
};

export default Home;
