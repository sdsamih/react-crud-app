import NavLinkLayout from "../Layouts/NavLinkLayout";

function Home(){
    return(
    <div className="bg-red-500 text-white p-6 text-3xl">
      Home 👍
    </div>
    )
}


Home.layout = page => <NavLinkLayout>{page}</NavLinkLayout>

export default Home;