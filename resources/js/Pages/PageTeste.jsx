import NavLinkLayout from "../Layouts/NavLinkLayout";

function Teste(props){
    return(
    <div className="bg-blue-500 text-white p-6 text-3xl">
      {props.title} 👍
    </div>
    )
}


Teste.layout = page => <NavLinkLayout>{page}</NavLinkLayout>

export default Teste;