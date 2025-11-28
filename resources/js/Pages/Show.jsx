import NavLinkLayout from "../Layouts/NavLinkLayout";

function Show({post}) {
  return (
    <div className="flex justify-center bg-linear-to-bl from-amber-200 to-orange-400 w-full min-h-screen">
      <div className="m-5 bg-purple-600 rounded-xl p-10 w-200 shadow-lg/30 h-auto inline-block">
          <h1 className="text-6xl font text-white">{post.text}</h1>
      </div>
      
    </div>
  )   
}
Show.layout = page => <NavLinkLayout>{page}</NavLinkLayout>

export default Show;