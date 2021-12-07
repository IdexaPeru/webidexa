import logo1 from '../../assets/Logos/cooking.png';
import logo2 from '../../assets/Logos/footloose.png';
import logo3 from '../../assets/Logos/sanpedro.png';


const Nosotros = () => {
  return (
    <section id="section-03" className='my-10 px-5 w-full h-screen'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-bold text-purple_primary text-center text-xl'><span className='text-blue_primary'>NUESTRAS</span> COLABORACIONES</h2>
        <div className='max-w-sm mx-auto'>
          <p className='text-center text-blue_primary '>Empresas que han confiado en nuestras habilidades para llevar a cabo sus objetivos.</p>
        </div>
        <div className='pt-10 grid grid-cols-1 nosotros gap-10'>
          <div className=' w-full flex justify-center  itemnosotros '>
            <img src={logo1} className='imgnosotros' />
          </div>
          {/* <div className=' w-full flex justify-center itemnosotros'>
            <img src={logo2} className='imgnosotros' />
          </div> */}
          <div className=' w-full flex justify-center itemnosotros'>
            <img src={logo3} className='imgnosotros' />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Nosotros;