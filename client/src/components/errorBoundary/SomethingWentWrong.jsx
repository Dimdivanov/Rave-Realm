export default function SomethingWentWrong(){
     return(
       <>
        <section
            id="notfound"
            className="w-full flex items-center justify-center min-h-screen bg-black relative bg-gradient-to-b from-purple-800 to-black"
        >
            <div className="text-center">
                <img src= alt="Not-Found" className="relative z-20" />

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Teleport Home
                    </Link>
                </div>
            </div>
        </section>
       </>
       );
}