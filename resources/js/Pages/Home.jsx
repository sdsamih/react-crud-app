import NavLinkLayout from "../Layouts/NavLinkLayout";
import { Link } from "@inertiajs/react";

function Home({ posts }) {
  return (
    <div className="bg-blue-500 text-white p-6 text-3xl flex flex-col items-center w-full min-h-screen">
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <div className="m-5 bg-purple-600 rounded-xl p-10 w-200" >
                <p className="font-normal">
                  {post.text}
                </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


Home.layout = page => <NavLinkLayout>{page}</NavLinkLayout>

export default Home;