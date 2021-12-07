import motor from '../../assets/motor.png';

const Inicio = () => {
  return (
    <section className='max-w-7xl px-10 mx-auto flex altoinicio items-center'>
      <div className=' w-full'>
        <div className=' w-80 mx-auto md:mx-0  sm:w-96 md:w-1/2'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold '><span className='text-blue_primary'>Servicio</span> <br /> y asesoramiento <br /> <span className='text-blue_primary'>informático</span> , en idexa <br /> desarrollamos tus ideas</h2>
          <p className='text-lg text-gray-500 pr-16 '>Disponemos de un equipo especializado en tecnologías de la información </p>
        </div>
        <div className='flex flex-col gap-5  items-center text-xl mt-10 sm:flex-row sm:justify-center md:w-1/2 md:justify-start '>
          <button className='px-10 py-3 shadow-lg hover:shadow-2xl transition ease-in duration-300 hover:text-blue_light bg-blue_primary font-medium  rounded-full text-white '>Contactar</button>
          <button className='px-10 py-3 shadow-lg hover:shadow-2xl transition ease-in duration-300 hover:text-blue_light bg-gray-900 font-medium  rounded-full text-white'>Servicios</button>
        </div>
      </div>
      <div className='  relative hidden   justify-center  items-end md:flex md:absolute md:w-1/2 right-5'>
        {/* <span className='ml-6 w-20 block mx-auto absolute z-30 mt-5 top-0  '><img src={tuerca} /></span> */}
        <div className="ball pt-10">
          <img src={motor} />
        </div>
      </div>
    </section>
  );
}

export default Inicio;