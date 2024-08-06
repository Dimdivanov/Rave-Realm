import { forwardRef } from 'react';

const StageCreateForm = forwardRef(
    ({ values, changeHandler, submitHandler, error }, ref) => {
        return (
            <div className="form w-full max-w-xl mx-auto p-4 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                    Create Stage
                </h2>
                <form onSubmit={submitHandler} className="create-form space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="stageName" className="text-white text-sm">
                            Stage Name
                        </label>
                        <input
                            type="text"
                            name="stageName"
                            id="stageName"
                            ref={ref}
                            value={values.stageName}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="stage-image" className="text-white text-sm">
                            Stage Image URL
                        </label>
                        <input
                            type="text"
                            name="stageImageUrl"
                            id="stage-image"
                            value={values.stageImageUrl}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="stage-description" className="text-white text-sm">
                            Description
                        </label>
                        <textarea
                            id="stage-description"
                            name="description"
                            rows={4}
                            value={values.description}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="stage-capacity" className="text-white text-sm">
                            Capacity (Number of People)
                        </label>
                        <input
                            type="number"
                            name="capacity"
                            id="stage-capacity"
                            value={values.capacity}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="stage-category" className="text-white text-sm">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            id="stage-category"
                            value={values.category}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors text-sm"
                    >
                        Add Stage
                    </button>

                    {error && (
                        <p className="mt-4 text-center text-sm text-red-600">{error}</p>
                    )}
                </form>
            </div>
        );
    }
);

export default StageCreateForm;
