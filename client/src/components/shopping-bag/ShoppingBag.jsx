import { useGetAllTickets } from "../../hooks/useTickets";
import ShoppingBagContent from "./ShoppingBagContent";

export default function ShoppingBag() {
    const tickets = useGetAllTickets();
    console.log(tickets);
    
    return (
        <>
            <section className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen pt-20">
                <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    {/* Header Section */}
                    <header className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                            Your Shopping Cart
                        </h2>
                        <p className="text-lg text-gray-300 mx-auto max-w-2xl">
                            Review your selected tickets and proceed to checkout.
                        </p>
                    </header>

                    {/* Cart Items Section */}
                    {tickets.map(ticket=> <ShoppingBagContent key={ticket._id} {...ticket}/>)}

                    {/* Checkout Button */}
                    <div className="text-center mt-12">
                        <a
                            href="/checkout"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                        >
                            Proceed to Checkout
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
