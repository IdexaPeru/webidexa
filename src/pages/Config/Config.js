import { useNavigate } from "react-router-dom";

const Config = () => {
  const navigate = useNavigate()
  return (
    <div className="w-10/12 pt-10">

      {/* create button logout */}
      <button
        className="bg-color_green_2 text-color_green_7 px-3 py-2 rounded-md text-base  w-full"
        onClick={() => {
          navigate('/auth/login')
        }}
      >
        Cerrar sesión
      </button>

    </div>
  );
}

export default Config;