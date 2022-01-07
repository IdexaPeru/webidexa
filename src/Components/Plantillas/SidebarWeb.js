import Actividades from "../Organismos/Sidebar/Actividades";
import Colegas from "../Organismos/Sidebar/Colegas";
import Menu from "../Organismos/Sidebar/Menu";
import './plantillas.css'

const SidebarWeb = () => {


  return (
    <div className=" w-60 md:w-64 hidden sm:block sidebar-web minw">
      <Menu />
      <Colegas />
      <Actividades />
    </div>
  );
}

export default SidebarWeb;