import React, { forwardRef } from 'react';

const ArtistCreateForm = forwardRef(
    ({ values, changeHandler, submitHandler, error }, ref) => {
        
        return (
            <div className="form w-full max-w-xl mx-auto p-4 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                    Add Artist
                </h2>
                <form onSubmit={submitHandler} className="create-artist-form space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="artist-name" className="text-white text-sm">
                            Artist Name
                        </label>
                        <input
                            type="text"
                            name="artistName"
                            id="artist-name"
                            value={values.artistName}
                            onChange={changeHandler}
                            ref={ref}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="imageUrl" className="text-white text-sm">
                            Artist Image URL
                        </label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            value={values.imageUrl}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="biography" className="text-white text-sm">
                            Biography
                        </label>
                        <textarea
                            id="biography"
                            name="biography"
                            rows={4}
                            value={values.biography}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="appearance-date" className="text-white text-sm">
                            Performance Date (dd-mm-yy)
                        </label>
                        <input
                            type="text"
                            name="appearanceDate"
                            id="appearance-date"
                            value={values.appearanceDate}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="stage" className="text-white text-sm">
                            Stage
                        </label>
                        <input
                            type="text"
                            name="stage"
                            id="stage"
                            value={values.stage}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors text-sm"
                    >
                        Add Artist
                    </button>
                </form>

                {error && (
                    <div className="mt-6 p-4 bg-red-100 border border-red-500 rounded-md text-red-700">
                        <p className="text-lg font-semibold">{error}</p>
                    </div>
                )}
            </div>
        );
    }
);

export default ArtistCreateForm;
