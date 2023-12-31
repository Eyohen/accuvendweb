/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import aboutpic from '../assets/about.jpeg';

function About() {
    return (
        <>
            <Navbar />
            {/* hero section */}
            <div className="relative h-96 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${aboutpic})` }}>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Text content */}
                <div className="text-center text-white relative z-10">
                    <p className='text-3xl'>Powering a Sustainable Future</p>
                </div>
            </div>

            {/* who we are */}
            <div className="flex flex-col space-y-8 md:w-4/6 mx-auto px-5 py-20 md:px-0">
                <div className='flex gap-10'>
                    <svg width={110} height={76} className="-mt-6" viewBox="0 0 100 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90 56.75C88.1333 56.75 86.6667 55.375 86.6667 53.625C86.6667 51.875 88.1333 50.5 90 50.5C91.8667 50.5 93.3333 49.125 93.3333 47.375C93.3333 43.231 91.5774 39.2567 88.4518 36.3265C85.3262 33.3962 81.0869 31.75 76.6667 31.75H70C68.1333 31.75 66.6667 30.375 66.6667 28.625C66.6667 26.875 68.1333 25.5 70 25.5C75.5333 25.5 80 21.3125 80 16.125C80 10.9375 75.5333 6.75 70 6.75C68.1333 6.75 66.6667 5.375 66.6667 3.625C66.6667 1.875 68.1333 0.5 70 0.5C74.4203 0.5 78.6595 2.1462 81.7851 5.07646C84.9107 8.00671 86.6667 11.981 86.6667 16.125C86.6667 20 85.2 23.5 82.6667 26.25C92.6 28.75 100 37.25 100 47.375C100 52.5625 95.5333 56.75 90 56.75ZM10 56.75C4.46667 56.75 0 52.5625 0 47.375C0 37.25 7.33333 28.75 17.3333 26.25C14.8667 23.5 13.3333 20 13.3333 16.125C13.3333 11.981 15.0893 8.00671 18.2149 5.07646C21.3405 2.1462 25.5797 0.5 30 0.5C31.8667 0.5 33.3333 1.875 33.3333 3.625C33.3333 5.375 31.8667 6.75 30 6.75C24.4667 6.75 20 10.9375 20 16.125C20 21.3125 24.4667 25.5 30 25.5C31.8667 25.5 33.3333 26.875 33.3333 28.625C33.3333 30.375 31.8667 31.75 30 31.75H23.3333C18.9131 31.75 14.6738 33.3962 11.5482 36.3265C8.42261 39.2567 6.66667 43.231 6.66667 47.375C6.66667 49.125 8.13333 50.5 10 50.5C11.8667 50.5 13.3333 51.875 13.3333 53.625C13.3333 55.375 11.8667 56.75 10 56.75ZM70 75.5H30C24.4667 75.5 20 71.3125 20 66.125V59.875C20 47.8125 30.4667 38 43.3333 38H56.6667C69.5333 38 80 47.8125 80 59.875V66.125C80 71.3125 75.5333 75.5 70 75.5ZM43.3333 44.25C38.9131 44.25 34.6738 45.8962 31.5482 48.8265C28.4226 51.7567 26.6667 55.731 26.6667 59.875V66.125C26.6667 67.875 28.1333 69.25 30 69.25H70C71.8667 69.25 73.3333 67.875 73.3333 66.125V59.875C73.3333 55.731 71.5774 51.7567 68.4518 48.8265C65.3262 45.8962 61.0869 44.25 56.6667 44.25H43.3333Z" fill="#04BD4B" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: 1 }} />
                    </svg>
                    <div className="flex flex-col space-y-3">
                        <p className=''>We are a leading service provider in Nigeria dedicated to simplifying and enhancing the  process of paying electricity bills for individuals and businesses. With a deep understanding of  the challenges associated with bill payment and a commitment to financial empowerment, we aim to become a trusted partner for thousands of clients across the nation.</p>
                        <p className=' '>Our team is composed of experienced professionals who are passionate about delivering   user-friendly solutions and exceptional customer service. We take pride in our role as a   facilitator of secure and convenient electricity bill payments, empowering our clients to take   control of their energy expenses.</p>
                    </div>
                </div>

                <div className='flex gap-10'>
                    <svg width={75} height={76} className="-mt-6" viewBox="0 0 98 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.0233 65.9414C44.8969 66.4488 44.6045 66.8994 44.1925 67.2215C43.7806 67.5435 43.2727 67.7186 42.7498 67.7188C42.5576 67.7183 42.3661 67.6947 42.1795 67.6485L29.6795 64.5235C29.4196 64.4569 29.1727 64.3474 28.949 64.1992L19.574 57.9492C19.3176 57.7784 19.0972 57.5588 18.9256 57.3028C18.754 57.0468 18.6345 56.7596 18.574 56.4574C18.4516 55.8472 18.5767 55.2133 18.9217 54.6953C19.2667 54.1773 19.8033 53.8176 20.4135 53.6953C20.7157 53.6347 21.0268 53.6342 21.3292 53.6939C21.6315 53.7535 21.9191 53.8722 22.1756 54.043L31.2108 60.0664L43.3201 63.0938C43.6191 63.1686 43.9004 63.3017 44.1479 63.4854C44.3953 63.6691 44.6042 63.8998 44.7624 64.1643C44.9206 64.4289 45.025 64.722 45.0698 65.0269C45.1146 65.3318 45.0988 65.6426 45.0233 65.9414ZM96.8709 28.2071C96.6467 28.8884 96.2895 29.5185 95.8202 30.061C95.3508 30.6034 94.7786 31.0474 94.1365 31.3672L84.7615 36.0547L63.1561 57.6602C62.7163 58.0984 62.1207 58.3443 61.4998 58.3438C61.3076 58.3435 61.1161 58.3199 60.9295 58.2735L35.9295 52.0235C35.6486 51.9505 35.3837 51.826 35.1483 51.6563L13.4139 36.1407L3.87091 31.3672C2.57401 30.7185 1.58784 29.5813 1.12928 28.2056C0.670713 26.8299 0.777302 25.3284 1.4256 24.0313L11.1326 4.62113C11.7813 3.32422 12.9186 2.33805 14.2943 1.87949C15.67 1.42093 17.1715 1.52751 18.4686 2.17581L27.3592 6.62113L48.3553 0.621127C48.7765 0.50064 49.2231 0.50064 49.6444 0.621127L70.6404 6.62113L79.5311 2.17581C80.8282 1.52751 82.3297 1.42093 83.7054 1.87949C85.0811 2.33805 86.2183 3.32422 86.867 4.62113L96.574 24.0313C96.8968 24.6732 97.0892 25.3728 97.1401 26.0895C97.1911 26.8062 97.0996 27.5259 96.8709 28.2071ZM5.96857 27.1758L13.5779 31L23.9998 10.1719L16.3709 6.36722C16.1855 6.27512 15.971 6.26041 15.7747 6.32633C15.5784 6.39225 15.4163 6.53341 15.324 6.71878L5.61701 26.1289C5.52618 26.314 5.51214 26.5274 5.57795 26.7227C5.60848 26.821 5.65892 26.9119 5.72612 26.9899C5.79332 27.0678 5.87585 27.1311 5.96857 27.1758ZM73.6092 40.5664L61.6053 30.9532C54.1834 37.3516 44.5819 38.2969 36.6834 33.25C35.9924 32.8106 35.4089 32.2216 34.9759 31.5264C34.543 30.8313 34.2717 30.0478 34.1821 29.2338C34.0925 28.4198 34.1868 27.596 34.4582 26.8233C34.7295 26.0507 35.1709 25.3488 35.7498 24.7696L53.6092 7.44144C53.869 7.1909 54.1831 7.00374 54.5272 6.89456L48.9998 5.31253L28.7615 11.0782L17.617 33.3828L37.4998 47.5821L60.7811 53.4024L73.6092 40.5664ZM80.5154 33.6602L69.4256 11.4688H56.199L39.0467 28.1094C38.9706 28.1892 38.9132 28.2849 38.8788 28.3897C38.8443 28.4944 38.8336 28.6055 38.8475 28.7149C38.8596 28.8342 38.899 28.9491 38.9627 29.0507C39.0264 29.1523 39.1126 29.2379 39.2147 29.3008C44.4061 32.6172 52.5506 33.5469 59.8358 26.2071C60.2434 25.7978 60.7879 25.5535 61.3646 25.5211C61.9414 25.4886 62.5098 25.6703 62.9608 26.0313L76.9529 37.25L80.5154 33.6602ZM92.3748 26.1289L82.6756 6.71878C82.5833 6.53341 82.4212 6.39225 82.2249 6.32633C82.0286 6.26041 81.8142 6.27512 81.6287 6.36722L74.0194 10.1719L84.4217 31L92.0311 27.1953C92.1238 27.1507 92.2063 27.0874 92.2735 27.0094C92.3407 26.9315 92.3912 26.8405 92.4217 26.7422C92.457 26.6427 92.4717 26.537 92.465 26.4316C92.4583 26.3262 92.4303 26.2232 92.3826 26.1289H92.3748Z" fill="#04BD4B" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: 1 }} />
                    </svg>
                    <div className="flex flex-col space-y-3">
                        <p className=''>We provide comprehensive solutions to  help clients manage and pay their  electricity bills in Nigeria. Our services are designed to simplify the bill payment process, promote financial well-being, and  enhance the overall experience for our  clients.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex gap-10'>
                        <svg width={75} height={76} className="-mt-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63.3333 83.3333V86.6667C64.2174 86.6667 65.0652 86.3155 65.6904 85.6904C66.3155 85.0652 66.6667 84.2174 66.6667 83.3333H63.3333ZM36.6667 83.3333H33.3333C33.3333 84.2174 33.6845 85.0652 34.3096 85.6904C34.9348 86.3155 35.7826 86.6667 36.6667 86.6667V83.3333ZM40 100H60V93.3333H40V100ZM23.8667 42.6667L23.8 43.1333L30.4 44.0667L30.4733 43.6L23.8667 42.6667ZM50 20C43.6449 19.9989 37.5029 22.2909 32.702 26.4549C27.9012 30.6189 24.764 36.3753 23.8667 42.6667L30.4733 43.6C31.1458 38.899 33.4848 34.5984 37.073 31.4878C40.6613 28.3772 45.2512 26.6654 50 26.6667V20ZM76.1333 42.6667C75.236 36.3753 72.0988 30.6189 67.298 26.4549C62.4971 22.2909 56.3551 19.9989 50 20V26.6667C54.7484 26.6667 59.3376 28.379 62.9256 31.4894C66.5135 34.5998 68.8596 38.8996 69.5333 43.6L76.1333 42.6667ZM76.2 43.1333L76.1333 42.6667L69.5333 43.6L69.5933 44.0667L76.2 43.1333ZM70.9333 63.06C75.1333 57.6333 77.2533 50.5667 76.2 43.1333L69.6 44.0733C69.9818 46.6949 69.8302 49.3665 69.1543 51.928C68.4784 54.4895 67.2922 56.8881 65.6667 58.98L70.9333 63.06ZM60 72.6667V83.3333H66.6667V72.6733H60V72.6667ZM63.3333 80H36.6667V86.6667H63.3333V80ZM40 83.3333V72.6733H33.3333V83.3333H40ZM23.8 43.1333C23.2932 46.6383 23.4984 50.2094 24.4034 53.6332C25.3083 57.057 26.8943 60.2632 29.0667 63.06L34.34 58.98C32.7145 56.8881 31.5216 54.4895 30.8457 51.928C30.1698 49.3665 30.0182 46.6882 30.4 44.0667L23.8 43.1333ZM40 72.6667C40 67.18 37.08 62.5133 34.3333 58.9733L29.0667 63.06C31.62 66.36 33.3333 69.5067 33.3333 72.6667H40ZM65.6667 58.9733C62.9133 62.52 60 67.18 60 72.6667H66.6667C66.6667 69.5067 68.38 66.36 70.9333 63.06L65.6667 58.9733ZM46.6667 0V13.3333H53.3333V0H46.6667ZM0 53.3333H13.3333V46.6667H0V53.3333ZM86.6667 53.3333H100V46.6667H86.6667V53.3333ZM22.36 24.3067L12.36 14.3067L7.64 19.0267L17.64 29.0267L22.36 24.3067ZM82.36 29.0267L92.36 19.0267L87.64 14.3067L77.64 24.3067L82.36 29.0267Z" fill="#04BD4B" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: 1 }} />
                        </svg>
                        <div className="flex flex-col space-y-3">
                            <p className=''>Our commitment to security, convenience, and client empowerment is at the core of how we operate. By offering a user-friendly platform, multiple payment options, and personalized support, we simplify the process of paying electricity {' '}bills.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mission */}
            <div className='bg-[#002E87] px-5 md:px-0 py-20'>
                <div className="md:w-4/6 mx-auto ">
                    <h1 className='text-[30px] font-big text-white text-center'>Our Mission And Vision</h1>
                    <div className='flex flex-col mt-8 space-y-10'>
                        <div className=''>
                            <p className='text-3xl text-[#04BD4B] '>Our Mission</p>
                            <p className=' text-white pt-3 '>To empower individuals and businesses by  simplifying and facilitating the process of paying  electricity bills. We are committed to providing a seamless, convenient, and secure platform for our clients to manage their energy expenses. Our mission is to make the management of electricity bills hassle-free, ensuring our clients can focus on  what matters most, while contributing to their financial well-being.</p>
                        </div>
                        <div className=''>
                            <p className='text-3xl text-[#04BD4B] '>Our Vision</p>
                            <p className=' text-white pt-3 '>To be the leading provider of electricity bill payment  solutions, recognized for our innovation, reliability, and commitment to customer satisfaction. We envision a future where our clients experience effortless control over their energy expenditures, where they trust our services to be the most efficient and secure means of managing their electricity bills. Our vision is to drive financial empowerment and  peace of mind for all those we serve.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* drives */}
            <div className='bg-gray-200 px-5 py-20 md:px-0'>
                <div className="md:w-4/6 mx-auto ">
                    <h1 className='text-[30px] font-big text-[#002E87] text-center px-4 md:px-0 mb-10'>What Drives us as a company</h1>
                    <div className='flex flex-col space-y-8'>
                        <div className=''>
                            <p className='text-3xl text-[#04BD4B] '>Customer-centricity</p>
                            <p className=''>We prioritize our client's needs and continuously seek to enhance their experience by providing user-friendly, customer-centric solutions.</p>
                        </div>
                        <div className=''>
                            <p className='text-3xl text-[#04BD4B] '>Innovation</p>
                            <p className=''>We embrace innovation to develop cutting-edge technologies and services that make bill payments easier, more efficient and more accessible.</p>

                        </div>
                        <div className=''>
                            <p className='text-3xl text-[#04BD4B] '>Reliability</p>
                            <p className=''>We are dedicated to providing a reliable platform that our clients can trust fortimely and accurateelectricity bill payments</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;