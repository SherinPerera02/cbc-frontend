export default function TestPage() {
    return (
        <div className="w-full h-screen flex">
            <div className="h-full w-[300px] flex flex-col">
                <h1>Test Page</h1>
            </div>
            <div className="h-full w-[calc(100%-300px)]">
                <h1>Test Page Content</h1>
            </div>
        </div>
    );
}