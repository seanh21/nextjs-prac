'use client'

export default async function PhotoPage() {

    const styles = {
        width: '200px',
    };

    return (
        <div className="m-16">
            <div className="w-48 h-96 rounded overflow-hidden shadow-lg bg-slate-200 ">
                <img src="https://i.imgur.com/xxqXaar.png" alt="Product Image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Product Title</div>
                    <p className="text-gray-700 text-base">Product Description</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <p className="text-gray-700 text-base font-bold">$99.99</p>
                </div>
            </div>
        </div>
    )
}