export default function LoginPage() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[400px] h-[500px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <input type="text" placeholder="Username" className="border border-gray-300 rounded-lg p-2 mb-4 w-full" />
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-lg p-2 mb-4 w-full" />
                <button className="bg-blue-500 text-white rounded-lg p-2 w-full">Login</button>
            </div>
        </div>
    )
}