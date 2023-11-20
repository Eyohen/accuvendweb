/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Terms = () => {
    return (
        <>
            <Navbar />
            <h1 className="bg-[#002E87] text-white  text-center text-[30px] py-5">Terms and Conditions</h1>
            {/* main content */}
            <div className="container px-4 md:px-12 flex flex-col my-20 gap-2">
                <p className="mt-2">Last Modified: November 2023</p>
                <p>By using Accuvend's services, you acknowledge that you  have read, understood and agreed to these terms and conditions.</p>
                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Service Description:</h2>
                    <ul className="list-disc ml-6">
                        <li>Accuvend provides electricity vending services that allow Customers to purchase electricity tokens for pre-paid meters.</li>
                        <li>The services are provided subject to the terms and conditions outlined herein.</li>
                    </ul>
                </div>

                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Customer Responsibilities:</h2>
                    <ul className="list-disc ml-6">
                        <li>The Customer agrees to provide accurate and up-to-date information during the registration process.</li>
                        <li>The Customer is responsible for the security of their account information, including passwords and personal identification numbers (PINs).</li>
                        <li>The Customer is responsible for ensuring that their pre-paid meter is compatible with the Company's services.</li>
                    </ul>
                </div>

                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Payments and Billing:</h2>
                    <ul className="list-disc ml-6">
                        <li>The Customer agrees to pay for electricity tokens promptly and in accordance with the pricing and payment terms specified by the Company.</li>
                        <li>The Company reserves the right to change pricing and payment terms with prior notice.</li>
                        <li>In the event of payment disputes, the Customer agrees to notify the Company within a reasonable timeframe</li>
                    </ul>
                </div>

                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Service Availability:</h2>
                    <ul className="list-disc ml-6">
                        <li>The Company will make reasonable efforts to ensure the continuous availability of its services.</li>
                        <li>The Company is not liable for any interruptions or outages beyond its control, including but not limited to natural disasters, technical issues, or regulatory actions.</li>
                    </ul>
                </div>

                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Privacy and Data Protection:</h2>
                    <ul className="list-disc ml-6">
                        <li>The Company will handle customer information in accordance with applicable data protection laws.</li>
                        <li>The Customer consents to the collection, processing, and storage of their personal information for the purpose of providing the services.</li>
                    </ul>
                </div>

                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Termination:</h2>
                    <ul className="list-disc ml-6">
                        <li>Either party may terminate this agreement with notice to the other party.</li>
                        <li>The Company reserves the right to suspend or terminate services immediately in the event of a breach of these terms by the Customer.</li>
                    </ul>
                </div>

                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Limitation of Liability:</h2>
                    <ul className="list-disc ml-6">
                        <li>The Company is not liable for any indirect, consequential, or incidental damages arising out of the use or inability to use the services.</li>
                        <li>The total liability of the Company, whether in contract, warranty, tort, or otherwise, shall not exceed the total amount paid by the Customer
                            for the services in the twelve months preceding the claim.</li>
                    </ul>
                </div>

                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Governing Law:</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of [Jurisdiction].</p>
                </div>

                <div className="md:mt-4 space-y-2">
                    <h2 className="text-[#002E87]  font-bold text-[18px]">Changes to Terms and Conditions:</h2>
                    <p>The Company reserves the right to modify these terms and conditions at any time, and such modifications will be effective upon posting on the
                         Company's website or other communication channels.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Terms
