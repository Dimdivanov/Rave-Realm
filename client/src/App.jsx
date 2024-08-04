import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { SpinnerContextProvider } from './contexts/SpinnerContext';

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import FollowUs from './components/followUs/FollowUs';
import Footer from './components/footer/Footer';

import Login from './components/nav/userServices/Login';
import Register from './components/nav/userServices/Register';
import Logout from './components/nav/userServices/Logout';

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
import TicketCreate from './components/getTickets/ticket-create/TicketCreate';
import TicketDetails from './components/getTickets/ticket-details/TicketDetails';
import ArtistEdit from './components/artists/artists-details/artist-edit/ArtistEdit';
import ScrollTop from './util/scrollTopUtil';

import AuthenticatorGuard from './components/common/AuthenticatorGuard';
import StageEdit from './components/stages/stage-details/stage-edit/StageEdit';
import TicketEdit from './components/getTickets/ticket-details/ticket-edit/TicketEdit';

//nested route

const App = () => {
    return (
        <AuthContextProvider>
            <SpinnerContextProvider>
                <ScrollTop />
                <main className="relative">
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Navigate to="/" />} />

                        <Route path="/get-tickets" element={<TicketsList />} />
                        <Route path="/create-ticket" element={<TicketCreate />} />
                        <Route
                            path="/ticket/details/:ticketId"
                            element={<TicketDetails />}
                        />
                        <Route path="/ticket/edit/:ticketId" element={<TicketEdit />} />

                        <Route path="/settings-menu" element={<SettingsMenu />} />

                        <Route
                            path="/account-settings-test"
                            element={<AccountSettings />}
                        />

                        <Route path="/artists" element={<ArtistsCatalog />} />
                        <Route
                            path="/artist/details/:artistId"
                            element={<ArtistDetails />}
                        />
                        <Route path="/artist/edit/:artistId" element={<ArtistEdit />} />
                        <Route path="/create-artist" element={<ArtistCreate />} />

                        <Route path="/stages-list" element={<StageList />} />
                        <Route
                            path="/stage/details/:stageId"
                            element={<StageDetails />}
                        />
                        <Route path="/stage/edit/:stageId" element={<StageEdit />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<Register />} />
                        <Route path="/*" element={<NotFound />} />

                        <Route element={<AuthenticatorGuard />}>
                            <Route path="/create-stage" element={<StageCreate />} />
                            <Route path="/home" element={<Logout />} />
                        </Route>
                    </Routes>
                    <FollowUs />
                    <Footer />
                </main>
            </SpinnerContextProvider>
        </AuthContextProvider>
    );
};
export default App;

{
    /* add backdrop and modular pop up */
}

{
    /* in account settings create subroute link to route + with Outlet */
}
{
    /* create abort controller for every fetch + lazy load */
}

{
    /* <Edit Artist, Stage, Ticket /> */
}
