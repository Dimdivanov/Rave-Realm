import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

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
import StageDetails from './components/stages/stage-details/StageDetails';

import AccountSettings from './components/nav/userServices/AccountSettings';
import StageCreate from './components/stages/stage-create/StageCreate';
import ArtistCreate from './components/artists/artists-create/ArtistCreate';
import SettingsMenu from './components/settingsMenu/SettingsMenu';

const App = () => {
    const [authState, setAuthState] = useState({});
    //explain me this part of the code here below
    const changeAuthState = (state) => {
        setAuthState(state);
    };
    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={contextData}>
            <main className="relative">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/get-tickets" element={<TicketsList />} />
                    <Route path="/generalInfo" element={<SettingsMenu />} />
                    <Route path="/artists" element={<ArtistsCatalog />} />
                    <Route path="/artist/details/:artistId" element={<ArtistDetails />} />
                    <Route path="/create-artist" element={<ArtistCreate />} />
                    <Route path="/stages-list" element={<StageList />} />
                    <Route path="/stage-details" element={<StageDetails />} />
                    <Route path="/create-stage" element={<StageCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <FollowUs />
                <Footer />
            </main>
        </AuthContext.Provider>
    );
};
export default App;

{
    /* create custom Hook for forms and fetching data */
}
{
    /* create requester & api*/
}
{
    /* add backdrop and pop ups */
}
{
    /* break down components to smaller parts pass them props n keys*/
}
{
    /* create context new folder*/
}

{
    /* in account settings create subroute link to route + with Outlet */
}
{
    /* create abort controller for every fetch */
}

{
    /* Needs attention <AccountSettings /> */
}
{
    /* <StageDetails /> */
}

{
    /* <Create Artist, Stage, Ticket /> */
}
{
    /* <Edit Artist, Stage, Ticket /> */
}
{
    /* <Details Artist, Stage, Ticket /> */
}
