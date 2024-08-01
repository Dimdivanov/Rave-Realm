export default function AccountSettings() {
    return (
        <>
            <div className="bg-gradient-to-b from-purple-800 to-black text-white min-h-screen flex justify-center items-center">
                <div className="w-full max-w-screen-lg p-4 md:flex md:space-x-4 mt-32">
                    <div className="flex flex-col md:flex-row justify-center items-start">
                        <div className="sidebar w-full md:w-1/3 p-4">
                            <div className="bg-gray-800 rounded-lg p-4">
                                <div className="flex items-center mb-4">
                                    <div className="bg-gradient-to-r from-yellow-400 to-pink-600 p-3 rounded-full" />
                                    <span className="ml-3 text-xl">Dimitar</span>
                                </div>
                                <ul>
                                    <li className="mb-2">
                                        <a
                                            href="#account-settings"
                                            className="text-yellow-400"
                                        >
                                            Account Settings
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#tickets" className="text-white">
                                            Tickets
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#stages" className="text-white">
                                            Stages
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#artists" className="text-white">
                                            Artists
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#created-events" className="text-white">
                                            Created Events
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content w-full md:w-2/3 p-4">
                            <div
                                id="account-settings"
                                className="bg-gray-800 rounded-lg p-4 mb-4"
                            >
                                <h2 className="text-2xl mb-4">Account Settings</h2>
                                <div>
                                    <label className="block mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 mb-4 bg-gray-700 rounded"
                                        defaultValue="Dimitar"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 mb-4 bg-gray-700 rounded"
                                        defaultValue="Ivanov"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-2 mb-4 bg-gray-700 rounded"
                                        defaultValue="riseabove92@yahoo.com"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2">Country Code</label>
                                    <select className="w-full p-2 mb-4 bg-gray-700 rounded">
                                        <option value={+359}>Bulgaria (+359)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2">Phone Number</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 mb-4 bg-gray-700 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2">Birthday Date</label>
                                    <input
                                        type="date"
                                        className="w-full p-2 mb-4 bg-gray-700 rounded"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button className="bg-pink-600 px-4 py-2 rounded">
                                        Change Password
                                    </button>
                                    <button className="bg-pink-600 px-4 py-2 rounded">
                                        Terms &amp; Conditions
                                    </button>
                                    <button className="bg-pink-600 px-4 py-2 rounded">
                                        Privacy &amp; Policy
                                    </button>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-gray-600 px-4 py-2 rounded mr-2">
                                        Cancel
                                    </button>
                                    <button className="bg-pink-600 px-4 py-2 rounded">
                                        Save
                                    </button>
                                </div>
                            </div>
                            <div id="tickets" className="hidden">
                                {' '}
                                {/* Make other sections hidden initially */}
                                <h2 className="text-2xl mb-4">Tickets</h2>
                                {/* Tickets content here */}
                            </div>
                            <div id="stages" className="hidden">
                                <h2 className="text-2xl mb-4">Stages</h2>
                                {/* Stages content here */}
                            </div>
                            <div id="artists" className="hidden">
                                <h2 className="text-2xl mb-4">Artists</h2>
                                {/* Artists content here */}
                            </div>
                            <div id="created-events" className="hidden">
                                <h2 className="text-2xl mb-4">Created Events</h2>
                                {/* Created Events content here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
