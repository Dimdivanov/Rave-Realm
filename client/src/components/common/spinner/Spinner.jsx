import pedro from '../../../assets/icons/pedro.png'
export default function Spinner() {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="flex justify-center items-center h-screen">
                    <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white">
                            <img src={pedro} alt="pedro" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
