import { Link, useNavigate } from "react-router-dom";
import IMGDEVELOPER from "../../../assets/img/developer.svg";
import LOGO from '../../../assets/img/logo.png'
import { IconCar, IconEmail, IconKey } from "../../../components/Icons";
import { Field, Form, Formik } from "formik";
import Titulo from "../../../components/utilidades/Titulo";
import ButtonAction from "../../../components/utilidades/ButtonAction";
import Parrafo from "../../../components/utilidades/Parrafo";
import PuntosNext from "../../../components/utilidades/PuntosNext";
import * as Yup from "yup";

const rutas = [
  { id: 1, link: '/registro/datos-basicos' },
  { id: 2, link: '/registro/datos-personales' },
  { id: 3, link: '/registro/datos-contacto' },
  { id: 4, link: '/registro/finalizado' },
]

const RestoreInit = () => {

  const navigate = useNavigate();

  const validar = Yup.object().shape({
    email: Yup.string()
      .email('formato invalido')
      .required('es requerido'),
    password: Yup.string().required('es requerido'),
  });
  return (
    <div className="max-w-5xl  flex justify-center items-center ">
      <Formik
        initialValues={{
          email: 'yelsino@321.com',
          password: '321321',
        }}
        validationSchema={validar}
        onSubmit={(values) => {
          console.log(values);
          navigate('/restore/finalizado')
        }}
      >
        {({ errors, touched }) => (
          <Form
            className="w-full md:w-1/2 p-10 flex flex-col items-center gap-5">
            <div className=" w-24 md:w-32 sm:w-32  select-none md:hidden object-contain">
              <img src={LOGO} />
            </div>
            <div className="hidden sm:flex absolute top-5  right-5  sm:top-10 sm:right-10 font-extrabold font-poppins text-color_green_4 text-lg  items-center justify-center gap-x-2">
              <span><IconCar /></span>
              <h1 >Administrador</h1>
            </div>
            <Titulo texto="¿SIN CREDENCIALES?" />
            <Parrafo text='
              Si no recuerda ningún tipo de credencial, contacta con su supervisor, directamente. 
              ' />

            <div className="w-72 sm:w-80 relative">
              <div className="flex gap-x-1">
                <label
                  htmlFor='password' className="text-color_green_6">n° documento</label>
                {errors.password && touched.password ?
                  <div className="text-color_green_7">
                    {errors.password}
                  </div> : null}
              </div>
              <div className="relative flex items-center">
                <Field
                  autoComplete={"off"}
                  name="password"
                  id='password'
                  type="password"
                  className='border-2 rounded-md p-4  outline-none bg-color_green_2 border-color_green_5 text-base sm:text-lg text-color_green_7 font-medium w-full'
                />
                <label
                  htmlFor='email'
                  className="absolute text-color_green_4 right-5">
                  <IconKey />
                </label>
              </div>

            </div>

            <div className="w-72 sm:w-80 mt-5">
              <ButtonAction
                type="submit"
                text="CONTINUAR"
              />
              <Link to='/login'>
                <p className="text-right text-color_green_6 cursor-pointer mb-3">Ya me acordé!</p>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      <div className="hidden md:w-1/2 md:flex p-10">
        <div className="w-10/12">
          <img src={IMGDEVELOPER} />
        </div>
      </div>
    </div>
  );
}

export default RestoreInit;