import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';
import { useGetOneStage } from '../../../hooks/useStages';
import ModalRemove from '../../modal/ModalRemove';
import stageAPI from '../../../api/stages-api';
import StageDetailsContent from './StageDetailsContent';

export default function StageDetails() {
    const { stageId } = useParams();
    const [stageDetails] = useGetOneStage(stageId);
    const [showModalRemove, setShowModalRemove] = useState(false);
    const navigate = useNavigate();

    const { userId } = useContext(AuthContext);
    const isOwner = userId === stageDetails._ownerId;

    const stageDelClickHandler = () => {
        setShowModalRemove(true);
    };
    const onDeleteClickHandler = async () => {
        setShowModalRemove(false);
        try {
            await stageAPI.remove(stageId);
            navigate('/stages-list');
        } catch (err) {
            console.log(err.message);
        }
    };
    const modalRemoveClosehandler = () => {
        setShowModalRemove(false);
    };

    return (
        <>
            {showModalRemove && (
                <ModalRemove
                    onClose={modalRemoveClosehandler}
                    onDeleteClick={onDeleteClickHandler}
                />
            )}
            <section
                id="stage-info"
                className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-20" // Adjusted py-10 to py-20 for more top padding
            >
                <StageDetailsContent
                    stageDetails={stageDetails}
                    stageId={stageId}
                    stageDelClickHandler={stageDelClickHandler}
                    isOwner={isOwner}
                />
            </section>
        </>
    );
}
