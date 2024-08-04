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
                <form onSubmit={submitHandler} className="space-y-4">
                    <input
                        type="text"
                        name="stageName"
                        id="stage-name"
                        placeholder="stage Name"
                        value={values.stageName || ''}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="text"
                        name="stageImageUrl"
                        id="stage-image-url"
                        placeholder="Image URL"
                        value={values.stageImageUrl || ''}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="description"
                        rows={5}
                        value={values.description || ''}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="number"
                        name="capacity"
                        id="capacity"
                        placeholder="capacity"
                        value={values.capacity || ''}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Category"
                        value={values.category || ''}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <button
                        onClick={() => navigate(`/stage/details/${values._id}`)}
                        className="ml-11 w-40 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="ml-80 w-40 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Edit
                    </button>
                </form>
            </div>
        </section>
    );
}
