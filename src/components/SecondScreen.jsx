/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const SecondScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        problemDescription: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="bg-[#F3F7F8]">
            <div className='flex flex-col items-center justify-center py-10'>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:w-[80%] mx-auto px-6">

                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl mb-8 font-big">Get in touch with us, we'd love to hear from you</h1>
                        {/* Contact info section */}
                        <div className="gap-2">
                            {/* Phone */}
                            <div className="flex items-center mb-4">
                                <svg width={40} height={40} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width={100} height={100} rx={50} fill="#04BD4B" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: 1 }} />
                                    <path d="M47.625 58.875L43 63.5C42.025 64.475 40.475 64.475 39.475 63.525C39.2 63.25 38.925 63 38.65 62.725C36.075 60.125 33.75 57.4 31.675 54.55C29.625 51.7 27.975 48.85 26.775 46.025C25.6 43.175 25 40.45 25 37.85C25 36.15 25.3 34.525 25.9 33.025C26.5 31.5 27.45 30.1 28.775 28.85C30.375 27.275 32.125 26.5 33.975 26.5C34.675 26.5 35.375 26.65 36 26.95C36.65 27.25 37.225 27.7 37.675 28.35L43.475 36.525C43.925 37.15 44.25 37.725 44.475 38.275C44.7 38.8 44.825 39.325 44.825 39.8C44.825 40.4 44.65 41 44.3 41.575C43.975 42.15 43.5 42.75 42.9 43.35L41 45.325C40.725 45.6 40.6 45.925 40.6 46.325C40.6 46.525 40.625 46.7 40.675 46.9C40.75 47.1 40.825 47.25 40.875 47.4C41.325 48.225 42.1 49.3 43.2 50.6C44.325 51.9 45.525 53.225 46.825 54.55C47.075 54.8 47.35 55.05 47.6 55.3C48.6 56.275 48.625 57.875 47.625 58.875Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
                                    <path d="M74.925 67.3251C74.925 68.0251 74.8 68.7501 74.55 69.4501C74.475 69.6501 74.4 69.8501 74.3 70.0501C73.875 70.9501 73.325 71.8001 72.6 72.6001C71.375 73.9501 70.025 74.9251 68.5 75.5501C68.475 75.5501 68.45 75.5751 68.425 75.5751C66.95 76.1751 65.35 76.5001 63.625 76.5001C61.075 76.5001 58.35 75.9001 55.475 74.6751C52.6 73.4501 49.725 71.8001 46.875 69.7251C45.9 69.0001 44.925 68.2751 44 67.5001L52.175 59.3251C52.875 59.8501 53.5 60.2501 54.025 60.5251C54.15 60.5751 54.3 60.6501 54.475 60.7251C54.675 60.8001 54.875 60.8251 55.1 60.8251C55.525 60.8251 55.85 60.6751 56.125 60.4001L58.025 58.5251C58.65 57.9001 59.25 57.4251 59.825 57.1251C60.4 56.7751 60.975 56.6001 61.6 56.6001C62.075 56.6001 62.575 56.7001 63.125 56.9251C63.675 57.1501 64.25 57.4751 64.875 57.9001L73.15 63.7751C73.8 64.2251 74.25 64.7501 74.525 65.3751C74.775 66.0001 74.925 66.6251 74.925 67.3251Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
                                </svg>
                                <div className="ml-4 space-y-1">
                                    <p className="font-bold">Phone</p>
                                    <p className="text-[#002E87]">0816 000 0000</p>
                                </div>
                            </div>
                            {/* WhatsApp */}
                            <div className="flex items-center mb-4">
                                <svg width={40} height={40} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width={100} height={100} rx={50} fill="#04BD4B" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: 1 }} />
                                    <path d="M74.9497 49.0251C74.0997 34.5251 60.9247 23.3501 45.7497 25.8501C35.2997 27.5751 26.9248 36.0501 25.2998 46.5001C24.3498 52.5501 25.5998 58.2751 28.3248 63.0001L26.0998 71.2751C25.5998 73.1501 27.3247 74.8501 29.1747 74.3251L37.3247 72.0751C41.0247 74.2501 45.3497 75.5001 49.9747 75.5001C64.0747 75.5001 75.7747 63.0751 74.9497 49.0251ZM62.1998 59.8001C61.9748 60.2501 61.6997 60.6751 61.3497 61.0751C60.7247 61.7501 60.0497 62.2501 59.2997 62.5501C58.5497 62.8751 57.7247 63.0251 56.8497 63.0251C55.5747 63.0251 54.1997 62.7252 52.7747 62.1002C51.3247 61.4752 49.8998 60.6501 48.4748 59.6251C47.0248 58.5751 45.6748 57.4001 44.3748 56.1251C43.0748 54.8251 41.9247 53.4501 40.8747 52.0251C39.8497 50.6001 39.0248 49.1751 38.4248 47.7501C37.8248 46.3251 37.5248 44.9501 37.5248 43.6501C37.5248 42.8001 37.6748 41.9751 37.9748 41.2251C38.2748 40.4501 38.7498 39.7501 39.4248 39.1251C40.2248 38.3251 41.0998 37.9501 42.0248 37.9501C42.3748 37.9501 42.7247 38.0251 43.0497 38.1751C43.3747 38.3251 43.6748 38.5501 43.8998 38.8751L46.7997 42.9751C47.0247 43.3001 47.1997 43.5751 47.2997 43.8501C47.4247 44.1251 47.4747 44.3751 47.4747 44.6251C47.4747 44.9251 47.3748 45.2251 47.1998 45.5251C47.0248 45.8251 46.7997 46.1251 46.4997 46.4251L45.5497 47.4251C45.3997 47.5751 45.3498 47.7251 45.3498 47.9251C45.3498 48.0251 45.3747 48.1251 45.3997 48.2251C45.4497 48.3251 45.4748 48.4001 45.4998 48.4751C45.7248 48.9001 46.1247 49.4251 46.6747 50.0751C47.2497 50.7251 47.8498 51.4001 48.4998 52.0501C49.1748 52.7251 49.8248 53.3251 50.4998 53.9001C51.1498 54.4501 51.6997 54.8251 52.1247 55.0501C52.1997 55.0751 52.2748 55.1251 52.3498 55.1501C52.4498 55.2001 52.5498 55.2001 52.6748 55.2001C52.8998 55.2001 53.0498 55.1251 53.1998 54.9751L54.1497 54.0251C54.4747 53.7001 54.7748 53.4751 55.0498 53.3251C55.3498 53.1501 55.6248 53.0501 55.9498 53.0501C56.1998 53.0501 56.4498 53.1001 56.7248 53.2251C56.9998 53.3501 57.2997 53.5001 57.5997 53.7251L61.7498 56.6751C62.0748 56.9001 62.2997 57.1751 62.4497 57.4751C62.5747 57.8001 62.6498 58.1001 62.6498 58.4501C62.4998 58.8751 62.3998 59.3501 62.1998 59.8001Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
                                </svg>

                                <div className="ml-4 space-y-1">
                                    <p className="font-bold">WhatsApp</p>
                                    <p className="text-[#002E87]">0816 000 0000</p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-center mb-4">
                                <svg width={40} height={40} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width={100} height={100} rx={50} fill="#04BD4B" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: 1 }} />
                                    <path d="M62.5 30.25H37.5C30 30.25 25 34 25 42.75V60.25C25 69 30 72.75 37.5 72.75H62.5C70 72.75 75 69 75 60.25V42.75C75 34 70 30.25 62.5 30.25ZM63.675 45.475L55.85 51.725C54.2 53.05 52.1 53.7 50 53.7C47.9 53.7 45.775 53.05 44.15 51.725L36.325 45.475C35.525 44.825 35.4 43.625 36.025 42.825C36.675 42.025 37.85 41.875 38.65 42.525L46.475 48.775C48.375 50.3 51.6 50.3 53.5 48.775L61.325 42.525C62.125 41.875 63.325 42 63.95 42.825C64.6 43.625 64.475 44.825 63.675 45.475Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
                                </svg>


                                <div className="ml-4 space-y-1">
                                    <p className="font-bold">Email</p>
                                    <p className="text-[#002E87]">info@accuvend.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        {/* Form section */}
                        <form
                            onSubmit={handleSubmit}
                            className="md:max-w-xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-xl"
                        >
                            {/* Form inputs */}
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />

                            <label htmlFor="email" className="mt-4 block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />

                            <label htmlFor="phone" className="mt-4 block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />

                            <label htmlFor="problemDescription" className="mt-4 block text-sm font-medium text-gray-700">
                                Tell us a little about the problem
                            </label>
                            <textarea
                                id="problemDescription"
                                name="problemDescription"
                                value={formData.problemDescription}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />

                            <button
                                type="submit"
                                className="mt-6 w-full bg-[#002E87] text-white rounded-full py-3 px-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SecondScreen;
