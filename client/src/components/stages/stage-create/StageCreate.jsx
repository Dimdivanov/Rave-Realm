import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreateStage } from '../../../hooks/useStages';
import { useForm } from '../../../hooks/useForm';
import useFocusForm from '../../../hooks/useFocusForm';
import StageCreateForm from './StageCreateForm';
import { validateStageCreateForm } from '../../../util/stageValidator';

const initialValues = {
    stageName: '',
    stageImageUrl: '',
    category: '',
    capacity: '',
    description: '',
};
export default function StageCreate() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const createStage = useCreateStage();
    const ref = useFocusForm();

    const createHandler = async (values) => {
        const { stageName, stageImageUrl, category, capacity, description } = values;
        const error = validateStageCreateForm(values);
        if (error) {
            return setError(error);
        }
        try {
            await createStage(values);
            navigate('/stages-list');
        } catch (err) {
            setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        createHandler
    );

    return (
        <>
            <section
                id="create"
                className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
            >
                <StageCreateForm
                    values={values}
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                    ref={ref}
                    error={error}
                />
            </section>
        </>
    );
}
