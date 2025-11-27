import NavLinkLayout from "../Layouts/NavLinkLayout";
import { useForm } from "@inertiajs/react"

function Create() {
  const { data, setData, post, processing, errors } = useForm({
    text: ""
  });

  function submit(e) {
    e.preventDefault();
    post("/posts");
  }

  return (
    <div className="bg-linear-to-bl from-amber-200 to-orange-400 text-white p-6 text-3xl min-h-screen flex justify-center">
      <div className="m-5 bg-purple-600 rounded-xl p-10 w-200 center h-64 shadow-xl/30" >
        <div className="flex  justify-center items-center">
          <form className="flex flex-col gap-4" onSubmit={submit}>
            <textarea
            hint="Escreva sua publicação aqui..."
            name=""
            id=""
            className="bg-amber-50 center w-1xl h-32 col text-black shadow-lg/30 rounded-3xl resize-none p-5"
            value={data.text}
            onChange={e => setData("text", e.target.value)}
            >


            </textarea>

            <button className="cursor-pointer bg-blue-500 p-2 rounded-xl shadow-lg/30" >
              Criar publicação
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

Create.layout = page => <NavLinkLayout>{page}</NavLinkLayout>

export default Create;