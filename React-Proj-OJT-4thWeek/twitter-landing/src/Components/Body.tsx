export default function Body() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row w-full">
                <section className="flex h-screen w-full items-center justify-center p-6">
                    <img src="/assets/x-logo.png" className="w-[23.75rem]"></img>
                </section>

                <section className="flex flex-col h-screen w-full justify-center p-12">
                    <h1 className="text-6xl font-extrabold py-20">Happening now</h1>
                    <h2 className="text-3xl font-bold pb-6">Join today.</h2>
                    <form className="flex flex-col w-[21rem]">
                        <div className="flex flex-col text-center font-semibold cursor-pointer">
                        <a className="w-full border border-gray-300 py-1.5 rounded-full mb-2 font-semibold hover:bg-sky-50 hover:border-sky-200"> Sign up with Google </a>
                        <a className="w-full border border-gray-300 py-1.5 rounded-full mb-2 font-semibold hover:bg-gray-100 hover:border-gray-400"> Sign up with Apple</a>
                        </div>
                        <span className="text-center w-full pb-4">or</span>
                        <a className="mb-10">
                            <button className="w-full rounded-full px-4 text-white bg-blue-500 font-semibold py-2.5 hover:bg-blue-600">Create account</button>
                            <span className="text-xs">By signing up, you agreed to the Terms of Service and Privacy Policy, including Cookie Use.</span>
                        </a>
                        <span className="text-lg font-bold py-4">Already have an account?</span>
                        <a>
                            <button className="w-full rounded-full border border-gray-300 py-2 text-blue-600 font-semibold hover:bg-sky-50">Sign In</button>
                        </a>
                    </form>
                </section>
            </div>
        </div>
    )
}