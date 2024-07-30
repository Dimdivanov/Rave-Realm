import Hero from './hero/Hero';
import Artists from '../artists/Artists';
import GetTickets from '../getTickets/GetTickets';
import News from '../news/News';
import Stages from '../stages/Stages';
import MobileApp from '../mobileApp/MobileApp';

export default function Home() {
    return (
        <>
            <Hero />
            <Artists />
            <GetTickets />
            <News />
            <Stages />
            <MobileApp />
        </>
    );
}
