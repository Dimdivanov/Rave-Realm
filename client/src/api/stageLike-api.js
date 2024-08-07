import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/likedBy';

const create = (stageId) => request.post(BASE_URL, { stageId });

const getAll = (stageId) => {
    const params = new URLSearchParams({
        where: `stageId="${stageId}"`,
        load: `author=_ownerId:users`,
    });

    return request.get(`${BASE_URL}?${params.toString()}`);
};

const remove = (likeId = request.del(`${BASE_URL}/${likeId}`));

const likedApi = {
    create,
    getAll,
    remove,
};

export default likedApi;
