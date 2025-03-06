import { Menu } from "lucide-react"
export default function Dashboard () {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
            <header className="flex items-center justify-between bg-black">
                <div className="flex items-center justify-center">
                    <Menu color="white" size={18}/>
                    <h1 className="text-white text-md">Dashboard</h1>
                </div>

                <div className="text-center">
                    <span className="text-amber-600 text-xs">Admin</span>
                </div>
            </header>
        </div>
    )
}