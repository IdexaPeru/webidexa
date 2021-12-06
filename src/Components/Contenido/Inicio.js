import motor from '../../assets/motor.png';
import tuerca from '../../assets/tuerca.png';
import './contenido.css';
const Inicio = () => {
  return (
    <section className='flex'>
      <div className='w-1/2'>
        <h2>Servicio y asesoramiento informático, en idexa desarrollamos tus ideas</h2>
        <p>Nuestro equipo es especializado en tecnologías de la información</p>
        <div className='flex justify-between items-center'>
          <button className='bg-blue_primary font-medium p-4 rounded-full text-white'>Contactar</button>
          <button className='bg-blue_primary font-medium p-4 rounded-full text-white'>Servicios</button>
        </div>
      </div>
      <div className='w-1/2 relative  flex justify-center  items-end'>

        <span className='ml-6 w-20 block mx-auto absolute z-30 mt-5 top-0  '><img src={tuerca} /></span>
        <div className="ball pt-14">
          <img src={motor} />
        </div>
      </div>
    </section>
  );
}

export default Inicio;