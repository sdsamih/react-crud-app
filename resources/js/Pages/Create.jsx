import NavLinkLayout from "../Layouts/NavLinkLayout";
import { useForm } from "@inertiajs/react"

function Create() {
  const { data, setData, post, processing, errors } = useForm({
    text: "texto default"
  });

  function submit(e) {
    e.preventDefault();
    post("/posts");
  }

  return (
    <div className="bg-blue-500 text-white p-6 text-3xl min-h-screen flex justify-center">
      <div className="m-5 bg-purple-600 rounded-xl p-10 w-200 center h-64" >
        <div className="flex  justify-center items-center">
          <form className="flex flex-col gap-4" onSubmit={submit}>
            <textarea
            name=""
            id=""
            className="bg-amber-50 center w-1xl h-32 col text-black"
            value={data.text}
            onChange={e => setData("text", e.target.value)}
            >


            </textarea>

            <button className="" >
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