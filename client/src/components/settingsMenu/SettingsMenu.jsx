import SiteMapMenu from './site-map-menu/SiteMapMenu';
import SiteMapContent from './site-map-content/SiteMapContent';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function SettingsMenu() {
    const userData = useContext(AuthContext);

    return (
        <>
            <div className="bg-gradient-to-b from-purple-800 to-black text-white min-h-screen flex justify-center items-center">
                {/* Main Container */}
                <div className="w-full max-w-screen-lg p-4 md:flex md:space-x-4">
                    <SiteMapMenu userData={userData}/>

                    <SiteMapContent />
                </div>
            </div>
        </>
    );
}
