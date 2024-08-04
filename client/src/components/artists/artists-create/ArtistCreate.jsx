import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateArtist } from '../../../hooks/useArtists';
import { useForm } from '../../../hooks/useForm';
import useFocusForm from '../../../hooks/useFocusForm';
import ArtistCreateForm from './ArtistCreateForm';

const initialValues = {
    artistName: '',
    imageUrl: '',
    appearanceDate: '',
    stage: '',
    biography: '',
};

export default function ArtistCreate() {
    const navigate = useNavigate();
    const createArtist = useCreateArtist();
    const ref = useFocusForm();

    const createHandler = async (values) => {
        try {
            await createArtist(values);
            navigate('/artists');
        } catch (err) {
            console.log(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        createHandler
    );

    return (
        <section
            id="create-artist"
            className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
        >
            <ArtistCreateForm
                values={values}
                changeHandler={changeHandler}
                submitHandler={submitHandler}
                ref={ref}
            />
        </section>
    );
}
