import { Link, useNavigate } from "react-router-dom";
import IMGDEVELOPER from "../../../assets/img/developer.svg";
import LOGO from '../../../assets/img/logo.png'
import { IconCar, IconEmail, IconKey } from "../../../components/Icons";
import { Field, Form, Formik } from "formik";
import Titulo from "../../../components/utilidades/Titulo";
import ButtonAction from "../../../components/utilidades/ButtonAction";
import Parrafo from "../../../components/utilidades/Parrafo";
import * as Yup from "yup";



const MensajeRestore = () => {

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
          navigate('/login')
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
            <Titulo texto="PETICION ENVIADA" />
            <Parrafo text='
            Recuerda que el administrador tiene que validar esta petición, asi que esté al tanto de su correo o movil.
              ' />

            <div className="w-72 sm:w-80 mt-5">
              <ButtonAction
                type="submit"
                text="TERMINAR"
              />
              {/* <Link to='/login'>
                <p className="text-right text-color_green_6 cursor-pointer mb-3">¡Cancelar!</p>
              </Link> */}
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

export default MensajeRestore;