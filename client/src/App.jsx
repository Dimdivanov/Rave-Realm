import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { SpinnerContextProvider } from './contexts/SpinnerContext';

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import FollowUs from './components/followUs/FollowUs';
import Footer from './components/footer/Footer';

import Login from './components/nav/login/Login';
import Register from './components/nav/register/Register';
import Logout from './components/nav/logout/Logout';

import ArtistsCatalog from './components/artists/artists-catalog/ArtistsCatalog';
import ArtistDetails from './components/artists/artists-details/ArtistDetails';
import TicketsList from './components/getTickets/tickets-list/TicketsList';
import StageList from './components/stages/stage-list/StageList';
import NotFound from './components/notFound/NotFound';
import StageDetails from './components/stages/stage-details/StageDetails';

import StageCreate from './components/stages/stage-create/StageCreate';
import ArtistCreate from './components/artists/artists-create/ArtistCreate';

import TicketCreate from './components/getTickets/ticket-create/TicketCreate';
import TicketDetails from './components/getTickets/ticket-details/TicketDetails';
import ArtistEdit from './components/artists/artists-details/artist-edit/ArtistEdit';
import ScrollTop from './util/scrollTopUtil';

import {
    AuthenticatorGuard,
    AuthRedirectGuard,
} from './components/common/AuthenticatorGuard';
import StageEdit from './components/stages/stage-details/stage-edit/StageEdit';
import TicketEdit from './components/getTickets/ticket-details/ticket-edit/TicketEdit';
import MyLineUp from './components/my-lineup/MyLineUp';

//nested route

const App = () => {
    return (
        <AuthContextProvider>
            <SpinnerContextProvider>
                <ScrollTop />
                <main className="relative">
                    <Nav />
                    <Routes>
                        {/* Start Protected routes */}
                        <Route element={<AuthenticatorGuard />}>
                            <Route path="/create-stage" element={<StageCreate />} />
                            <Route path="/create-ticket" element={<TicketCreate />} />
                            <Route
                                path="/ticket/edit/:ticketId"
                                element={<TicketEdit />}
                            />

                            <Route
                                path="/artist/edit/:artistId"
                                element={<ArtistEdit />}
                            />
                            <Route path="/create-artist" element={<ArtistCreate />} />
                            <Route path="/stage/edit/:stageId" element={<StageEdit />} />

                            <Route path="/logout" element={<Logout />} />
                        </Route>
                        {/* End Protected routes */}

                        {/* Start Public routes */}
                        <Route element={<AuthRedirectGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/sign-up" element={<Register />} />
                        </Route>
                        {/* End Public routes */}

                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Navigate to="/" />} />
                        <Route path="/*" element={<NotFound />} />

                        <Route path="/artists" element={<ArtistsCatalog />}/>
                        <Route path="/stages-list" element={<StageList />} />
                        <Route path="/get-tickets" element={<TicketsList />} />

                        <Route
                            path="/ticket/details/:ticketId"
                            element={<TicketDetails />}
                        />
                        <Route
                            path="/artist/details/:artistId"
                            element={<ArtistDetails />}
                        />
                        <Route
                            path="/stage/details/:stageId"
                            element={<StageDetails />}
                        />
                    </Routes>
                    <FollowUs />
                    <Footer />
                </main>
            </SpinnerContextProvider>
        </AuthContextProvider>
    );
};
export default App;
