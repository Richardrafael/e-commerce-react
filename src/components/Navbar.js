import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as Md from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SpaIcon from '@material-ui/icons/Spa';


const Navbar = ({
  cartItems,
  handleRemoveToCart,
  handleAddToCart,
  handleClearCart,
  price,
}) => {
  const [cartAbrir, setCartAbrir] = useState(false);
  const navigate = useNavigate();
  const handleCart = () => {
    setCartAbrir(!cartAbrir);
  };

  const getTotalItems = (items) =>
    items.reduce((a, item) => a + item.amount, 0);

  return (
    <header className="fixed w-full z-90 bg-white/90 shadow-md">
      <nav className="flex flex-row justify-between items-center mx-14 my-5  ">
        <div>
          <Link
            to="/"
            className="font-extrabold text-2xl text-green-700 cursor-pointer"
          >
            Frexco <SpaIcon/><span className="text-xl "></span>
          </Link>
          <NavLink
            to="/"
            className=" text-xl ml-10 text-gray-700 cursor-pointer hover:text-black "
          >
            Loja 
          </NavLink>
          <NavLink
            to="/cart"
            className=" text-xl ml-10 text-gray-700 cursor-pointer hover:text-black "
          >
              Carrinho
          </NavLink>
        </div>
        <button
          onClick={handleCart}
          className="text-green-700 w-10 h-10 hover:bg-gray-200/40 rounded-full items-center justify-center flex cursor-pointer transition duration-150 z-[50]"
        >
          <Md.MdAddShoppingCart size={25} />
        </button>
        <p
          onClick={handleCart}
          className={
            getTotalItems(cartItems) === 0
              ? 'fixed right-8 text-xs top-6  flex items-center justify-center bg-red-600 rounded-full text-white z-[60] cursor-pointer'
              : 'fixed right-12 text-xs top-6  flex items-center justify-center bg-red-600 rounded-full text-white z-[60] cursor-pointer sm:w-4 w-4'
          }
        >
          {getTotalItems(cartItems) === 0 ? '' : getTotalItems(cartItems)}
        </p>
      </nav>
      
      <aside>
        <div
          className={
            cartAbrir
              ? `h-screen w-full bg-black/40 z-50 fixed right-0 top-0`
              : `hidden`
          }
        >
          <div
            className={
              cartAbrir
                ? `h-screen xl:w-[25%] lg:w-[30%] md:w-[40%] w-[80%] bg-white z-[60] fixed right-0 top-0 duration-200 overflow-y-auto transition-shadow`
                : `hidden`
            }
          >
            <div className="flex justify-between items-center mb-4">
              <button
                className="text-green-700 cursor-pointer transition duration-150 mt-4 ml-4 hover:bg-slate-200/40 rounded-xl"
                onClick={handleCart}
              >
                <Md.MdClose size={25} />
              </button>
            </div>
            {cartItems ? (
              <div>
                <div>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-100 mx-4 rounded-xl py-1 my-2"
                    >
                      <h3 className="text-xl font-bold text-center">
                        {item.name}
                      </h3>
                      <div className="text-center">
                        <p>Preço: $ {price} kg</p>
                      </div>
                      <div className="flex justify-between mx-10 my-4">
                        <button
                          onClick={() => handleRemoveToCart(item.id)}
                          className="py-2 px-6 text-gray-500 bg-gray-200 rounded-xl border hover:bg-gray-300 active:bg-gray-400"
                        >
                          <Md.MdRemove size={20} />
                        </button>
                        <p className="py-2 px-4">{item.amount}</p>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="py-2 px-6 text-gray-500 bg-gray-200 rounded-xl border hover:bg-gray-300 active:bg-gray-400"
                        >
                          <Md.MdAdd size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mx-4 my-6">
                  <p className="font-semibold">
                    Total: {getTotalItems(cartItems)} produtos
                    <p
                      className="cursor-pointer px-4 py-2 rounded-xl bg-red-300 hover:bg-red-400 active:bg-red-500r"
                      onClick={handleClearCart}
                    >
                      Limpar o carrinho
                    </p>
                  </p>
                  <div>
                    <div
                      onClick={() => navigate('/cart')}
                      className="cursor-pointer px-10 py-2 rounded-xl bg-green-300 hover:bg-green-400 active:bg-green-300"
                    >
                      <p onClick={handleCart} className="cursor-pointer">
                        Confira
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              'carrinho vazio'
            )}
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
