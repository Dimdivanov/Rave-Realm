export default function SiteMapContent() {
    return (
        <>
            {/* Main Content render all content here*/}
            <div className="w-full md:w-2/3 lg:w-1/2 p-4">
                <div className="relative">
                    <img
                        src="/src/assets/images/decorations/festivalBanner.jpg"
                        alt="Festival Banner"
                        className="w-full h-96 object-contain rounded-lg"
                    />
                </div>
                <div className="mt-8">
                    <p className="text-lg">
                        In the heart of Transylvania, a realm of music and magic comes
                        alive, where beats transform into symphonies and nights are
                        painted with vibrant hues of melody...
                    </p>
                    <p className="mt-4 text-lg">
                        Here, the stages are transformed into portals of sonic wonder,
                        each one a gateway to a unique auditory journey...
                    </p>
                </div>
            </div>
        </>
    );
}
