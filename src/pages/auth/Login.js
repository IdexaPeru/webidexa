import IMGDEVELOPER from "../../assets/img/developer.svg";
import LOGO from '../../assets/img/logo.png'
import { IconCar, IconEmail, IconKey } from "../../components/Icons";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import Titulo from "../../components/utilidades/Titulo";
import ButtonAction from "../../components/utilidades/ButtonAction";

const Login = () => {

  const navigate = useNavigate();

  const validar = Yup.object().shape({
    email: Yup.string()
      .email('formato invalido')
      .required('es requerido'),
    password: Yup.string().required('es requerido'),
  });

  return (
    <div className="bg-color_green_1 h-full flex justify-center items-center">

      <div className="max-w-5xl  flex justify-center items-center ">
        <Formik
          initialValues={{
            email: 'yelsino@321.com',
            password: '321321',
          }}
          validationSchema={validar}
          onSubmit={(values) => {
            navigate('/')
          }}
        >
          {({ errors, touched }) => (
            <Form
              className="w-full md:w-1/2 p-10 flex flex-col items-center gap-5">
              <div className=" w-24 sm:w-40  select-none md:hidden object-contain">
                <img src={LOGO} />
              </div>
              <div className="hidden sm:flex absolute top-5  right-5  sm:top-10 sm:right-10 font-extrabold font-poppins text-color_green_4 text-lg  items-center justify-center gap-x-2">
                <span><IconCar /></span>
                <h1 >Administrador</h1>
              </div>
              <Titulo texto="INICIAR SESIÓN" />
              <div className=" w-72 sm:w-80 relative">
                <div
                  className="flex gap-x-1"><label htmlFor='password' className="text-color_green_6">Email</label>
                  {errors.email && touched.email ? <div className="text-color_green_7">{errors.email}</div> : null}
                </div>
                <Field
                  autoComplete={"off"}
                  className='border-2 rounded-md p-4 outline-none bg-color_green_2 border-color_green_6 text-base sm:text-lg text-color_green_7 font-medium w-full '
                  name="email"
                  id='email'
                />
                <label
                  htmlFor='email'
                  className="absolute right-2 top-7 text-color_green_4 bg-color_green_2 p-3 sm:p-4">
                  <IconEmail />
                </label>
              </div>
              <div className="w-72 sm:w-80 relative">
                <div className="flex gap-x-1"><label
                  htmlFor='password' className="text-color_green_6">Contraseña</label>
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

              <div className="w-72 sm:w-80">
                <ButtonAction
                  type="submit"
                  text="CONTINUAR"
                />

                <Link to="/restore" className="text-center text-color_green_4 cursor-pointer">
                  <p className="text-center text-color_green_6 cursor-pointer mb-3">Olvidé mis credenciales</p>
                </Link>
                <Link to="/registro" className="text-center text-color_green_4 cursor-pointer"><p>Registrarme</p></Link>
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
    </div>
  );
}

export default Login;