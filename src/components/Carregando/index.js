import React from 'react';
import CachedSharpIcon from '@material-ui/icons/CachedSharp';
import './style.css';

const LoadState = ({ loading = true }) => {
  return (
    <>
    <div className='carregar'>
    <h1>Carregando ...</h1> 
    <div>
    <CachedSharpIcon/>
    </div>
    </div>
    </>

    // <>
    //   {loading && (
    //     <div className="absolute top-0 right-0 flex justify-center items-center bg-cover bg-white/10 w-screen h-screen">
    //       <img src={loadImg} alt="loading" width={200} height={200} />
    //     </div>
    //   )}
    // </>
  );
};

export default LoadState;
