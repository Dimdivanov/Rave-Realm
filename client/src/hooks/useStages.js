import { useEffect, useState } from 'react';

import stageAPI from '../api/stages-api';

export function useGetAllStages() {
    const [stages, setStages] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await stageAPI.getAll();
                setStages(result);
            } catch (err) {
                console.error('Error to useGetAllStages', err);
                throw err;
            }
        })();
    }, []);
   
    return stages;
}

export function useGetOneStage(stageId) {
    const [stageDetails, setStageDetails] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await stageAPI.getOne(stageId);
                setStageDetails(result);
            } catch (err) {
                console.error('Error to useGetOneStage', err);
                throw err;
            }
        })();
    }, [stageId]);

    return [stageDetails];
}

export function useCreateStage() {
    try {
        const stageHandler = (stageData) => stageAPI.create(stageData);
        return stageHandler;
    } catch (err) {
        console.error('Error creating stage:', err);
        throw err;
    }
}
