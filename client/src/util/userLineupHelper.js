import { useGetAllArtists } from '../hooks/useArtists';
import { useGetAllToLine } from '../hooks/useLineup';

export function getFilteredArtistDetails(email) {
  const [artistsLineUp = []] = useGetAllToLine(email);
  const artists = useGetAllArtists();

  if (!artists || artists.length === 0) {
      console.error('Artists data is not available.');
      return [];
  }

    const filteredArtists = artistsLineUp.filter(
        (current, index, self) =>
            index === self.findIndex((t) => t.artistId === current.artistId)
    );

    const artistIds = filteredArtists.map((artist) => artist.artistId);
    return artists.filter((artist) => artistIds.includes(artist._id));
}
