import { Link } from 'react-router-dom';

export default function StageCard(stage) {
    return (
        <>
            <Link to={`/stage/details/${stage._id}`}>
                <img
                    className="flex-none w-full h-64 flex justify-center items-center bg-cover bg-center"
                    src={stage.stageImageUrl}
                ></img>
            </Link>
        </>
    );
}
