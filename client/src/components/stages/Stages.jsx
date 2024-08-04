import { useGetAllStages } from '../../hooks/useStages';
import Carousel from '../common/Carousel/Carousel';

export default function Stages() {
    const stages = useGetAllStages([]);

    return (
        <>
            <Carousel slides={stages} />
        </>
    );
}
