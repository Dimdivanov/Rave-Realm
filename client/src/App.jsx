import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import FollowUs from './components/followUs/FollowUs';
import Footer from './components/footer/Footer';

import Login from './components/nav/userServices/Login';
import Register from './components/nav/userServices/Register';

import ArtistsCatalog from './components/artists/artists-catalog/ArtistsCatalog';
import ArtistDetails from './components/artists/artists-details/ArtistDetails';
import TicketsList from './components/getTickets/tickets-list/TicketsList';
import StageList from './components/stages/stage-list/StageList';
import NotFound from './components/notFound/NotFound';
import AccountSettings from './components/nav/userServices/AccountSettings';

const App = () => (
    <main className="relative">
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/home" />} />
            <Route path="/get-tickets" element={<TicketsList />} />
            <Route path="/artists" element={<ArtistsCatalog />} />
            <Route path="/artist/:artistId" element={<ArtistDetails />} />
            <Route path="/stages-list" element={<StageList />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<Register />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
        </Routes>

        {/* create custom Hook for forms and fetching data */}
        {/* create requester & api*/}

        {/* break down components to smaller parts pass them props n keys*/}
        {/* create context new folder*/}

        {/* in account settings create subroute link to route + with Outlet */}
        {/* create abort controller for every fetch */}

        {/* Needs attention <AccountSettings /> */}
        {/* <StageDetails /> */}

        {/* <Create Artist, Stage, Ticket /> */}
        {/* <Edit Artist, Stage, Ticket /> */}
        {/* <Details Artist, Stage, Ticket /> */}

        <FollowUs />
        <Footer />
    </main>
);

export default App;
