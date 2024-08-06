import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../../../hooks/useForm';
import stageAPI from '../../../../api/stages-api';
import { useGetOneStage } from '../../../../hooks/useStages';
import { useEffect } from 'react';

const initialValues = {
    stageName: '',
    stageImageUrl: '',
    description: '',
    capacity: '',
    category: '',
};

export default function StageEdit() {
    const navigate = useNavigate();
    const { stageId } = useParams();

    const { values, changeHandler, submitHandler, setValues } = useForm(
        initialValues,
        async (updatedValues) => {
            try {
                await stageAPI.update(stageId, updatedValues);
                navigate(`/stage/details/${stageId}`);
            } catch (err) {
                console.error('Failed to update stage:', err.message);
            }
        }
    );

    const [stageDetails] = useGetOneStage(stageId);

    useEffect(() => {
        if (stageDetails) {
            setValues(stageDetails);
        }
    }, [stageDetails, setValues]);

    return (
        <section
            id="edit-stage"
            className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
        >
            <div className="w-full max-w-3xl mx-auto p-6 mt-28 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                    Edit Stage
                </h2>
                <form onSubmit={submitHandler} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="stage-name" className="text-white font-medium">
                            Stage Name
                        </label>
                        <input
                            type="text"
                            name="stageName"
                            id="stage-name"
                            placeholder="Stage Name"
                            value={values.stageName || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="stage-image-url"
                            className="text-white font-medium"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="stageImageUrl"
                            id="stage-image-url"
                            placeholder="Image URL"
                            value={values.stageImageUrl || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="description" className="text-white font-medium">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Description"
                            rows={5}
                            value={values.description || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="capacity" className="text-white font-medium">
                            Capacity
                        </label>
                        <input
                            type="number"
                            name="capacity"
                            id="capacity"
                            placeholder="Capacity"
                            value={values.capacity || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="category" className="text-white font-medium">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Category"
                            value={values.category || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={() => navigate(`/stage/details/${values._id}`)}
                            className="w-40 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="w-40 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
