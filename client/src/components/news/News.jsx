export default function News() {
    return (
        <>
            <section className="padding-x py-10 bg-black">
                <div className="container mx-auto px-4 py-8 text-white">
                    <div className="text-3xl font-bold mb-6">
                        <h2 className="text-3xl font-bold mb-6">News</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                        <div className="border-4 border-gray-700 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/23060359/EDCLV2019_0518_230104-9031_TJH-callout-lrg.jpg"
                                alt="News Image"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    Unlock the Ultimate Festival Experience: Get VIP
                                    Access and Enjoy Exclusive Benefits in Our Luxe
                                    Lounge!
                                </h2>
                                <p className="text-sm text-gray-400">Today</p>
                            </div>
                        </div>
                        <div className="border-4 border-gray-700 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://t3.ftcdn.net/jpg/08/18/53/60/360_F_818536084_Ri6bO9jFcaBhQzUWvOH5RFfVR6B7KvuI.jpg"
                                alt="News Image"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    Color Your Festival Experience: Introducing the Latest
                                    Vibrant Body Paint for Festival Enthusiasts!
                                </h2>
                                <p className="text-sm text-gray-400">18 days ago</p>
                            </div>
                        </div>
                        <div className="border-4 border-gray-700 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://globalnews.ca/wp-content/uploads/2018/09/171503561.jpg?quality=85&strip=all&w=720&h=379&crop=1"
                                alt="News Image"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    Illuminate the Night: New LED Light Masks Set to
                                    release!
                                </h2>
                                <p className="text-sm text-gray-400">57 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
