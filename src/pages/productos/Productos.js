import { useState } from "react";
import { Link } from "react-router-dom";
import { IconCardBuy, IconClean, IconPrecios, IconProduct, IconSearch } from "../../components/Icons";

import IconBrocoli from '../../assets/img/icons/brocoli.png';
import IconManzana from '../../assets/img/icons/leche.png';
import IconLeche from '../../assets/img/icons/manzana.png';

const Productos = () => {
  const [textsearch, setTextSearch] = useState('');
  return (
    <div className=" w-11/12 p-5 mt-5">
      <p className="text-center text-color_green_7 font-poppins text-lg">Productos</p>


      <div className="relative flex items-center  ">
        <input
          autoComplete={"off"}
          name="password"
          id='text'
          onChange={(e) => {
            setTextSearch(e.target.value)
          }}
          value={textsearch}
          type="text"
          placeholder="Buscar productos"
          className='rounded-md p-4 outline-none my-7 text-base sm:text-lg  placeholder-green-400 text-color_green_7 w-full bg-color_green_3 pl-11'
        />
        <label
          htmlFor='email'
          className="absolute text-green-400 left-3">
          <IconSearch />
        </label>
        {
          textsearch.length > 0 &&
          <button
            onClick={() => setTextSearch('')}
            className="absolute text-green-400 right-3">
            <IconClean />
          </button>
        }

      </div>

      <div className="flex flex-col gap-y-10  ">
        <Link to='/productos/vegetales' className="flex items-center gap-x-5">
          <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
            <img src={IconBrocoli} className="w-8 h-8" />
          </div>
          <div className="flex flex-col">

            <span className="text-lg text-color_green_7">Vegetales</span>
            <span className="text-color_green_5">Total 12 vegetales en tienda</span>
          </div>
        </Link>

        <Link to='/productos/frutas' className="flex items-center gap-x-5">
          <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
            <img src={IconLeche} className="w-8 h-8" />
          </div>
          <div className="flex flex-col">

            <span className="text-lg text-color_green_7">Frutas</span>
            <span className="text-color_green_5">Total 7 frutas en tienda</span>
          </div>
        </Link>

        <Link to='/productos/abarrotes' className="flex items-center gap-x-5">
          <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
            <img src={IconManzana} className="w-8 h-8" />
          </div>
          <div className="flex flex-col">

            <span className="text-lg text-color_green_7">Abarrotes</span>
            <span className="text-color_green_5">Total 7 abarrotes en tienda</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Productos;