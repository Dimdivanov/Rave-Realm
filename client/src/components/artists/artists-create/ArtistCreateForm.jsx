import React, { forwardRef } from 'react';

const ArtistCreateForm = forwardRef(
    ({ values, changeHandler, submitHandler, error }, ref) => {
        return (
            <div className="form w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                    Add Artist
                </h2>
                <form onSubmit={submitHandler} className="create-artist-form space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="artist-name" className="text-white">
                            Artist Name
                        </label>
                        <input
                            type="text"
                            name="artistName"
                            id="artist-name"
                            value={values.artistName}
                            onChange={changeHandler}
                            ref={ref}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="imageUrl" className="text-white">
                            Artist Image URL
                        </label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            value={values.imageUrl}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="biography" className="text-white">
                            Biography
                        </label>
                        <textarea
                            id="biography"
                            name="biography"
                            rows={5}
                            value={values.biography}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="appearance-date" className="text-white">
                            Performance Date (dd/mm/yy)
                        </label>
                        <input
                            type="text"
                            name="appearanceDate"
                            id="appearance-date"
                            value={values.appearanceDate}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="stage" className="text-white">
                            Stage
                        </label>
                        <input
                            type="text"
                            name="stage"
                            id="stage"
                            value={values.stage}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Add Artist
                    </button>
                </form>

                {error && (
                    <p className="mt-6 text-center text-lg text-red-600">{error}</p>
                )}
            </div>
        );
    }
);

export default ArtistCreateForm;
