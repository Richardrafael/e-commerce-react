// React
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// Redux
import { getAllItems } from './slice/itemSlice';
// Components
import LoadState from './components/Carregando/index';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useLocalStorage } from './hooks/useLocalStorage';
import Swal from 'sweetalert2';
import Cart from './pages/Cart';

function App() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useLocalStorage('shopping-cart', []);
  const { items, loading } = useSelector((state) => state.item);
  const price = 20;

  // Add To Cart
  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  //Remove To Cart
  const handleRemoveToCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((a, item) => {
        if (item.id === id) {
          if (item.amount === 1) return a;
          return [...a, { ...item, amount: item.amount - 1 }];
        } else {
          return [...a, item];
        }
      }, [])
    );
  };
  // Clear Cart
  const clearCartHandler = () => {
    Swal.fire({
      title: 'Clear Cart?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear cart!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Cleared!', 'Cart cleared.', 'success');
        localStorage.removeItem('shopping-cart');
        setCartItems([]);
      }
    });
  };

  // const logout = () => {
  //
  // };

  // Call Redux
  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  if (loading) {
    return <LoadState loading={loading} />;
  }
  return (
    <>
      <Navbar
        handleAddToCart={handleAddToCart}
        handleRemoveToCart={handleRemoveToCart}
        handleClearCart={clearCartHandler}
        cartItems={cartItems}
        price={price}
      />
      <Routes>
        <Route
          path="/"
          element={<Home handleAddToCart={handleAddToCart} items={items} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;
