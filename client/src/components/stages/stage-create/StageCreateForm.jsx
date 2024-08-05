import { forwardRef } from 'react';

const StageCreateForm = forwardRef(
    ({ values, changeHandler, submitHandler, error }, ref) => {
        return (
            <div className="form w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                    Create Stage
                </h2>
                <form onSubmit={submitHandler} className="create-form space-y-4">
                    <input
                        type="text"
                        name="stageName"
                        id="stageName"
                        placeholder="Stage Name"
                        value={values.stageName}
                        onChange={changeHandler}
                        ref={ref}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="text"
                        name="stageImageUrl"
                        id="stage-image"
                        placeholder="Stage Image URL"
                        value={values.stageImageUrl}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <textarea
                        id="stage-description"
                        name="description"
                        placeholder="Description"
                        rows={5}
                        value={values.description}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="number"
                        name="capacity"
                        id="stage-capacity"
                        placeholder="Capacity (Number of People)"
                        value={values.capacity}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="text"
                        name="category"
                        id="stage-category"
                        placeholder="Category"
                        value={values.category}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Add Stage
                    </button>
                    {error && (
                        <p className="mt-10 text-center text-lg text-red-600">
                            <span>{error}</span>
                        </p>
                    )}
                </form>
            </div>
        );
    }
);

export default StageCreateForm;
