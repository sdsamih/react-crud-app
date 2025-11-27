import NavLinkLayout from "../Layouts/NavLinkLayout";

function Show({post}) {
  return (
    <div className="flex justify-center">
        <h1 className="text-6xl">{post.text}</h1>
    </div>
  )   
}
Show.layout = page => <NavLinkLayout>{page}</NavLinkLayout>

export default Show;