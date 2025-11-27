import NavLinkLayout from "../Layouts/NavLinkLayout";
import { Link } from "@inertiajs/react";

function Home({ posts }) {
  return (
    <div className="bg-linear-to-bl from-amber-200 to-orange-400 text-white p-6 text-3xl flex flex-col items-center w-full min-h-screen">
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <div className="m-5 bg-purple-600 rounded-xl p-10 w-200 shadow-lg/30 flex flex-col" >
                <p className="font-normal">
                  {post.text}
                </p>
                <div className="flex justify-end">
                <button className="cursor-pointer bg-red-500 p-2 rounded-xl shadow-lg/30 w-32">Apagar</button>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


Home.layout = page => <NavLinkLayout>{page}</NavLinkLayout>

export default Home;