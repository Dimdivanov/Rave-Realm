export default function StageDetails() {
    return (
        <>
            <section
                id="stage-info"
                class="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
            >
                <div class="container max-w-5xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                    <div class="image-container relative overflow-hidden rounded-lg shadow-lg mb-6">
                        <img
                            src="https://www.4lighttechnicalprojects.com/wp-content/uploads/2020/07/4LIGHT_UNTOLD_CLUJ_8-1030x687.jpeg"
                            alt="Stage Image"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="description text-white text-center">
                        <h2 class="text-4xl font-semibold mb-4">Stage Name</h2>
                        <p class="text-lg mb-4">
                            This stage features an incredible lineup of DJs, stunning
                            visuals, and an immersive atmosphere that brings the music to
                            life. Join us for unforgettable performances and moments of
                            pure magic.
                        </p>
                        <button class="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
