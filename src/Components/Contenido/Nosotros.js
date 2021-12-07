import logo1 from '../../assets/Logos/cooking.png';
import logo2 from '../../assets/Logos/footloose.png';
import logo3 from '../../assets/Logos/sanp.png';
import logo4 from '../../assets/Logos/jr.png';
import logo5 from '../../assets/Logos/rest1.png';


const Nosotros = () => {
  return (
    <section id="section-03" className='ancla my-10 px-5 w-full '>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-bold  text-center text-xl pb-4'><span className=''>NUESTRAS</span> COLABORACIONES</h2>
        <div className='max-w-sm mx-auto'>
          <p className='text-center text-blue_primary '>Empresas que han confiado en nuestras habilidades para llevar a cabo sus objetivos.</p>
        </div>
        <div className='pt-10 grid grid-cols-1 nosotros gap-10'>
          <div className=' w-full flex justify-center  itemnosotros   '>
            <img src={logo1} className='imgnosotros   object-scale-down' alt='cooking gourmet' />
          </div>

          <div className=' w-full flex justify-center itemnosotros'>
            <img src={logo2} alt='footloose' className='imgnosotros  object-scale-down' />
          </div>

          <div className=' w-full flex justify-center itemnosotros'>
            <img src={logo3} alt='instituto san pedro' className='imgnosotros  object-scale-down' />
          </div>

          <div className=' w-full flex justify-center itemnosotros'>
            <img src={logo4} alt='inversiones jr huancayo' className='imgnosotros  h-28  object-scale-down' />
          </div>

          <div className=' w-full flex justify-center itemnosotros'>
            <img src={logo5} className='imgnosotros  h-28  object-scale-down' alt='la casa del chef' />
          </div>

          <div className=' w-full flex justify-center itemnosotros object-scale-down'>
            {/* <img src={logo5} className='imgnosotros w-56 h-28  object-contain' /> */}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Nosotros;