import { PERFIL, PERFIL12 } from "../../../components/Images";

const Mensajes = () => {
  return (
    <div className="trabajador_chat_mensaje overflow-scroll tracking-tighter  text-color_green_7">
      <div className=" h-full flex flex-col justify-end ">

        <div className="flex gap-x-3 justify-end my-1 items-end ">
          <p className="bg-color_green_2 py-1 rounded-full  px-3 inline-block">Buenos dias, como esta hoy?</p>
        </div>

        <div className="flex gap-x-3 justify-start my-1 items-end ">
          <span className="pb-2">
            <img className="img_perfil_trabajador_inchat w-8 h-8 object-cover  " src={PERFIL12} />
          </span>
          <div className="flex flex-col gap-y-1">
            <p className="bg-color_green_3 py-1 rounded-full  px-3 inline-block">Buenos dias, como esta hoy?</p>
            <p className="bg-color_green_3 py-1 rounded-full  px-3 inline-block">Buenos dias, como esta hoy?</p>
            <p className="bg-color_green_3 py-1 rounded-full  px-3 inline-block">Buenos dias, como esta hoy?</p>
          </div>
        </div>

        <div className="flex gap-x-3 justify-end my-1 items-end ">
          <p className="bg-color_green_2 py-1 rounded-full  px-3 inline-block">Buenos dias, como esta hoy?</p>
          {/* <img className="img_perfil_trabajador_inchat w-8 h-8 object-cover  " src={PERFIL} /> */}
        </div>

        <div className="flex gap-x-3 justify-start my-1 items-end ">
          <img className="img_perfil_trabajador_inchat w-8 h-8 object-cover  " src={PERFIL12} />
          <div className="flex flex-col gap-y-1">
            <p className="bg-color_green_3 py-1 rounded-full  px-3 inline-block">Buenos dias, como esta hoy?</p>
          </div>
        </div>
        <div className="flex gap-x-3 justify-end my-1 items-end ">
          <p className="bg-color_green_2 py-1 rounded-full  px-3 inline-block">Buenos dias, como esta hoy?</p>
          {/* <img className="img_perfil_trabajador_inchat w-8 h-8 object-cover  " src={PERFIL} /> */}
        </div>






      </div>

    </div>
  );
}

export default Mensajes;