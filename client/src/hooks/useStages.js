import { useEffect, useState } from 'react';

import stageAPI from '../api/stages-api';

export function useGetAllStages() {
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
            const result = await stageAPI.getOne(stageId);
            setStageDetails(result);
        })();
    }, [stageId]);
    return [stageDetails];
}

export function useCreateStage() {
    const stageHandler = (stageData) => stageAPI.create(stageData);

    return stageHandler;
}
