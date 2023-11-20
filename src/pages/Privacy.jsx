/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Privacy = () => {
    return (
        <>
            <Navbar />
            {/* hero section */}
            <h1 className="bg-[#002E87] text-white  text-center text-[30px] py-5">Privacy Policy</h1>

            {/* main content */}
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row my-20 gap-2">
                {/* table of contents */}
                <div className="w-full md:w-[30%]">
                    <p>Last Modified: November 2023</p>
                    <h1 className="text-[30px]  mb-4">Table of Contents</h1>
                    <ol className="text-[#002E87] text-lg  space-y-2">
                        <li className="capitalize ">
                            <Link to="#infomation">1. Information we collect</Link>
                        </li>
                        <li className="capitalize">
                            <Link to="#infomation">2. How We Use Your Information</Link>
                        </li>
                        <li className="capitalize">
                            <Link to="#infomation">3. Information Sharing</Link>
                        </li>
                        <li className="capitalize">
                            <Link to="#infomation">4. Security Measures</Link>
                        </li>
                        <li className="capitalize">
                            <Link to="#infomation">5. Cookies and Tracking Technologies</Link>
                        </li>
                        <li className="capitalize">
                            <Link to="#infomation">6. Third-Party Links</Link>
                        </li>
                        <li className="capitalize">
                            <Link to="#infomation">7. Children's Privacy</Link>
                        </li>
                        <li className="capitalize">
                            <Link to="#infomation">8. Changes to the Privacy Policy</Link>
                        </li>
                        <li className="capitalize">
                            <Link to="#infomation">9. Contact Information</Link>
                        </li>
                    </ol>
                </div>

                {/* right side */}
                <div className="w-full md:w-[70%] mt-10 md:mt-0 space-y-10">
                    <div className="md:mt-4">
                        <h2 className="text-[#002E87]  font-bold text-[18px]">Information we collect:</h2>
                        <div>
                            <p>
                                We may collect the following types of personal information from customers to improve purposes to provide and improve our Services.
                            </p>
                        </div>
                        <ol className="ml-4">
                            <li>1. Contact Information: Name, address, phone number, email address.</li>
                            <li>2. Account Information: Username, password, security questions.</li>
                            <li>3. Payment Information: Billing details, payment card information.</li>
                            <li>4. Meter Information: Details related to the customer's pre-paid meter.</li>
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-[#002E87]  font-bold text-[18px]">How We Use Your Information:</h2>
                        <div>
                            <p>
                                The Company uses the collected information for the following purposes:
                            </p>
                        </div>
                        <ol className="ml-4">
                            <li>1. Providing electricity vending services.</li>
                            <li>2. Processing payments.</li>
                            <li>3. Managing customer accounts.</li>
                            <li>4. Improving and customizing our services.</li>
                            <li>5. Communicating with customers about their accounts and services.</li>
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-[#002E87]  font-bold text-[18px]">How We Use Your Information:</h2>
                        <div>
                            <p>
                                Information Sharing: The Company does not sell, trade, or otherwise transfer customers'
                                personal information to third parties without consent, except as required by law or to provide our services.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#002E87]  font-bold text-[18px]">Security Measures: </h2>
                        <div>
                            <p>
                                The Company employs industry-standard security measures to protect customers'
                                personal information from unauthorized access, disclosure, alteration, and destruction.
                                We use secure socket layer (SSL) technology to encrypt sensitive information during transmission.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#002E87]  font-bold text-[18px]">Cookies and Tracking Technologies: </h2>
                        <div>
                            <p>
                                The Company may use cookies and similar tracking technologies
                                to enhance the customer experience, personalize content, and analyze website usage.
                                Customers can manage cookie preferences through their browser settings.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#002E87]  font-bold text-[18px]">Third-Party Links: </h2>
                        <div>
                            <p>
                                The Company's website may contain links to third-party websites.
                                We are not responsible for the privacy practices or content of these third-party sites.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#002E87]  font-bold text-[18px]">Changes to the Privacy Policy: </h2>
                        <div>
                            <p>
                                The Company reserves the right to update this privacy policy at any time. Customers will be notified of significant changes.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#002E87]  font-bold text-[18px]">Contact Information: </h2>
                        <div>
                            <p>
                                For questions or concerns regarding this privacy policy, customers can contact us at <a href="mailto:info@accuvend.com" className="text-[#002E87] font-bold">info@accuvend.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Privacy