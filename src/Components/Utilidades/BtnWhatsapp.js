import { BsWhatsapp } from 'react-icons/bs'

const BtnWhatsapp = () => {
  return (
    <div className='fixed right-16 bottom-20 text-6xl cursor-pointer bg-green-500 rounded-full shadow-2xl '>
      <BsWhatsapp className='text-white p-4' />
    </div>
  );
}

export default BtnWhatsapp;