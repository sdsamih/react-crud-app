import { Link } from "@inertiajs/react";

export default function NavLinkLayout(props) {
    return (
        <>
            <header>
                <nav className="flex gap-4">
                    <Link className="bg-green-300 px-4 py-2 rounded" href="/"     >Home</Link>
                    <Link className="bg-green-300 px-4 py-2 rounded" href="/posts/create">Criar</Link>
                </nav>
            </header>
        
            <main>
                {props.children}
            </main>
        </>
    )
}