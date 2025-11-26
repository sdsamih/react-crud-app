import NavLinkLayout from "../Layouts/NavLinkLayout";
import { Link } from "@inertiajs/react";

function Home(){
    return(
    <>
      <div className="bg-red-500 text-white p-6 text-3xl">
        Home 👍
      </div> 
      <Link preserveScroll className="block mt-[500px] mb-[100px] text-xl " href="/"> Atualizar a pagina</Link>
    </>
    )
}


Home.layout = page => <NavLinkLayout>{page}</NavLinkLayout>

export default Home;