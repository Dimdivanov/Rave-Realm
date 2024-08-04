import ArtistCatalogCard from './artist-catalog-card/ArtistCatalogCard';
import ArtistCatalogMenu from './artist-catalog-menu/ArtistCatalogMenu';

import { useGetAllArtists } from '../../../hooks/useArtists';

export default function ArtistsCatalog() {
    const artists = useGetAllArtists();

    return (
        <>
            <section
                id="hero"
                className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400"
            >
                <div className="container mx-auto px-4 py-8">
                    <ArtistCatalogMenu />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {/* Artist Card */}
                        {artists.map((artist) => (
                            <ArtistCatalogCard key={artist._id} {...artist} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
