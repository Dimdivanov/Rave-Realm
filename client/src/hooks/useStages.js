import { useEffect, useState } from 'react';

import stageAPI from '../api/stages-api';

export function useGetAllArtists() {
    const [stages, setStages] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await stageAPI.getAll();
            setStages(result);
        })();
    }, []);

    return stages;
}

export function useGetOneStage(stageId) {
    const [stageDetails, setStageDetails] = useState({});

    useEffect(() => {
        (async () => {
            const result = await artistAPI.getOne(stageId);
            setStageDetails(result);
        })();
    }, [stageDetails]);
    return [stageDetails];
}

export function useCreateStage() {
    const stageHandler = (stageData) => stageAPI.create(stageData);

    return stageHandler;
}
