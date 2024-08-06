import { forwardRef } from 'react';

const StageCreateForm = forwardRef(
    ({ values, changeHandler, submitHandler, error }, ref) => {
        return (
            <div className="form w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                    Create Stage
                </h2>
                <form onSubmit={submitHandler} className="create-form space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="stageName" className="text-white">
                            Stage Name
                        </label>
                        <input
                            type="text"
                            name="stageName"
                            id="stageName"
                            ref={ref}
                            value={values.stageName}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="stage-image" className="text-white">
                            Stage Image URL
                        </label>
                        <input
                            type="text"
                            name="stageImageUrl"
                            id="stage-image"
                            value={values.stageImageUrl}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="stage-description" className="text-white">
                            Description
                        </label>
                        <textarea
                            id="stage-description"
                            name="description"
                            rows={5}
                            value={values.description}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="stage-capacity" className="text-white">
                            Capacity (Number of People)
                        </label>
                        <input
                            type="number"
                            name="capacity"
                            id="stage-capacity"
                            value={values.capacity}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="stage-category" className="text-white">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            id="stage-category"
                            value={values.category}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Add Stage
                    </button>
                    
                    {error && (
                        <p className="mt-6 text-center text-lg text-red-600">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        );
    }
);

export default StageCreateForm;
