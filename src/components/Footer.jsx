import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-[#002E87] pt-16'>
            <div className='flex flex-col lg:flex-row justify-between gap-6 xl:gap-0 lg:items-start px-4 md:px-0 md:w-4/6 mx-auto'>
                <div className=''>
                    <img src={Logo} alt="Logo" className='w-32' />
                </div>

                <div className='-mt-2'>
                    <p className='font-medium text-2xl text-white'>COMPANY</p>
                    <div className="space-y-2">
                        <p className='font-medium text-xl text-white '>
                            <Link to="/about">About</Link>
                        </p>
                        <p className='font-medium text-xl text-white '>
                            <Link to="/terms">Terms & Conditions</Link>
                        </p>
                        <p className='font-medium text-xl text-white '>
                            <Link to="/policy">Privacy Policy</Link>
                        </p>
                    </div>
                </div>

                <div className='-mt-2'>
                    <div className="space-y-2">
                        <p className='font-medium text-2xl text-white'>CONTACT US</p>
                        <p className='font-medium text-xl text-white '>
                            Phone: 081 000 9985
                        </p>
                        <p className='font-medium text-xl text-white '>
                            Email: support@accuvend.ng
                        </p>
                        <p className='font-medium text-xl text-white flex items-center gap-2'>
                            Social: <div className="flex items-center gap-2">
                                <svg width={20} height={20} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width={39} height={39} rx="19.5" stroke="#F0F0F0" style={{ stroke: 'color(display-p3 0.9427 0.9427 0.9427)', strokeOpacity: 1 }} />
                                    <path d="M27.7409 15.4377C27.1869 15.678 26.601 15.8369 26.0015 15.9094C26.634 15.5315 27.108 14.9371 27.3355 14.2363C26.7411 14.5901 26.0905 14.8394 25.4118 14.9733C24.9582 14.4814 24.3542 14.154 23.6944 14.0423C23.0346 13.9307 22.3565 14.0412 21.7663 14.3566C21.1761 14.6719 20.7072 15.1742 20.4333 15.7847C20.1593 16.3952 20.0958 17.0794 20.2525 17.7299C19.0507 17.6691 17.8751 17.3562 16.8022 16.8114C15.7292 16.2667 14.7828 15.5023 14.0245 14.568C13.7585 15.0324 13.6188 15.5584 13.6191 16.0937C13.6182 16.5907 13.7402 17.0803 13.9742 17.5188C14.2082 17.9573 14.5471 18.3311 14.9605 18.607C14.48 18.5939 14.0097 18.4649 13.5896 18.2311V18.2679C13.5932 18.9644 13.8373 19.6382 14.2805 20.1754C14.7237 20.7126 15.3388 21.0802 16.0219 21.2161C15.7589 21.2961 15.486 21.3383 15.2111 21.3414C15.0209 21.3392 14.8311 21.3219 14.6436 21.2898C14.8381 21.8889 15.2145 22.4124 15.7205 22.7876C16.2264 23.1628 16.8367 23.3709 17.4665 23.383C16.4031 24.2198 15.0902 24.6764 13.737 24.6802C13.4907 24.681 13.2445 24.6663 13 24.636C14.3815 25.528 15.9915 26.0015 17.636 25.9995C18.7708 26.0113 19.8966 25.7969 20.9476 25.3687C21.9987 24.9405 22.9538 24.3072 23.7573 23.5057C24.5608 22.7043 25.1966 21.7508 25.6275 20.7009C26.0583 19.6509 26.2757 18.5257 26.2668 17.3909C26.2668 17.2656 26.2668 17.1329 26.2668 17.0002C26.8452 16.5689 27.344 16.0402 27.7409 15.4377Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
                                </svg>

                                <svg width={20} height={20} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width={39} height={39} rx="19.5" stroke="#F0F0F0" style={{ stroke: 'color(display-p3 0.9427 0.9427 0.9427)', strokeOpacity: 1 }} />
                                    <path d="M23.8154 12H21.1571C19.5796 12 17.825 12.6635 17.825 14.9502C17.8327 15.7469 17.825 16.51 17.825 17.3688H16V20.2729H17.8815V28.6332H21.3387V20.2177H23.6206L23.8271 17.3606H21.2791C21.2791 17.3606 21.2848 16.0897 21.2791 15.7206C21.2791 14.817 22.2194 14.8687 22.276 14.8687C22.7234 14.8687 23.5934 14.87 23.8167 14.8687V12H23.8154Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
                                </svg>

                                <svg width={20} height={20} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width={39} height={39} rx="19.5" stroke="#F0F0F0" style={{ stroke: 'color(display-p3 0.9427 0.9427 0.9427)', strokeOpacity: 1 }} />
                                    <path d="M24.272 14.768C24.0821 14.768 23.8965 14.8243 23.7387 14.9298C23.5808 15.0353 23.4577 15.1852 23.3851 15.3606C23.3124 15.536 23.2934 15.7291 23.3304 15.9153C23.3675 16.1015 23.4589 16.2726 23.5932 16.4068C23.7274 16.5411 23.8985 16.6325 24.0847 16.6696C24.2709 16.7066 24.464 16.6876 24.6394 16.6149C24.8148 16.5423 24.9647 16.4192 25.0702 16.2613C25.1757 16.1035 25.232 15.9179 25.232 15.728C25.232 15.4734 25.1309 15.2292 24.9508 15.0492C24.7708 14.8691 24.5266 14.768 24.272 14.768ZM27.952 16.704C27.9364 16.0402 27.8121 15.3835 27.584 14.76C27.3806 14.2265 27.064 13.7434 26.656 13.344C26.2599 12.9339 25.7756 12.6193 25.24 12.424C24.6181 12.1889 23.9607 12.0618 23.296 12.048C22.448 12 22.176 12 20 12C17.824 12 17.552 12 16.704 12.048C16.0393 12.0618 15.3819 12.1889 14.76 12.424C14.2253 12.6213 13.7415 12.9356 13.344 13.344C12.9339 13.7401 12.6193 14.2244 12.424 14.76C12.1889 15.3819 12.0618 16.0393 12.048 16.704C12 17.552 12 17.824 12 20C12 22.176 12 22.448 12.048 23.296C12.0618 23.9607 12.1889 24.6181 12.424 25.24C12.6193 25.7756 12.9339 26.2599 13.344 26.656C13.7415 27.0644 14.2253 27.3787 14.76 27.576C15.3819 27.8111 16.0393 27.9382 16.704 27.952C17.552 28 17.824 28 20 28C22.176 28 22.448 28 23.296 27.952C23.9607 27.9382 24.6181 27.8111 25.24 27.576C25.7756 27.3807 26.2599 27.0661 26.656 26.656C27.0658 26.2581 27.3827 25.7746 27.584 25.24C27.8121 24.6165 27.9364 23.9598 27.952 23.296C27.952 22.448 28 22.176 28 20C28 17.824 28 17.552 27.952 16.704ZM26.512 23.2C26.5062 23.7078 26.4142 24.211 26.24 24.688C26.1123 25.0362 25.9071 25.3507 25.64 25.608C25.3805 25.8724 25.0666 26.0771 24.72 26.208C24.243 26.3822 23.7398 26.4742 23.232 26.48C22.432 26.52 22.136 26.528 20.032 26.528C17.928 26.528 17.632 26.528 16.832 26.48C16.3047 26.4899 15.7797 26.4087 15.28 26.24C14.9486 26.1025 14.6491 25.8982 14.4 25.64C14.1345 25.383 13.9319 25.0682 13.808 24.72C13.6127 24.2361 13.5044 23.7216 13.488 23.2C13.488 22.4 13.44 22.104 13.44 20C13.44 17.896 13.44 17.6 13.488 16.8C13.4916 16.2808 13.5864 15.7664 13.768 15.28C13.9088 14.9423 14.125 14.6413 14.4 14.4C14.6431 14.1249 14.9434 13.9065 15.28 13.76C15.7676 13.584 16.2816 13.4921 16.8 13.488C17.6 13.488 17.896 13.44 20 13.44C22.104 13.44 22.4 13.44 23.2 13.488C23.7078 13.4938 24.211 13.5858 24.688 13.76C25.0515 13.8949 25.3778 14.1143 25.64 14.4C25.9022 14.6457 26.107 14.9462 26.24 15.28C26.4178 15.7671 26.5098 16.2814 26.512 16.8C26.552 17.6 26.56 17.896 26.56 20C26.56 22.104 26.552 22.4 26.512 23.2ZM20 15.896C19.1886 15.8976 18.396 16.1396 17.7221 16.5915C17.0483 17.0434 16.5235 17.685 16.2141 18.435C15.9047 19.185 15.8246 20.01 15.9838 20.8055C16.1431 21.6011 16.5346 22.3316 17.1089 22.9048C17.6831 23.4779 18.4144 23.868 19.2103 24.0257C20.0062 24.1834 20.8309 24.1017 21.5804 23.7908C22.3298 23.48 22.9703 22.954 23.4209 22.2792C23.8715 21.6045 24.112 20.8114 24.112 20C24.1131 19.4601 24.0074 18.9253 23.801 18.4264C23.5946 17.9274 23.2916 17.4742 22.9095 17.0928C22.5273 16.7114 22.0736 16.4093 21.5742 16.2039C21.0749 15.9985 20.5399 15.8939 20 15.896ZM20 22.664C19.4731 22.664 18.9581 22.5078 18.52 22.215C18.0819 21.9223 17.7404 21.5063 17.5388 21.0195C17.3372 20.5327 17.2844 19.997 17.3872 19.4803C17.49 18.9635 17.7437 18.4888 18.1163 18.1163C18.4888 17.7437 18.9635 17.49 19.4803 17.3872C19.997 17.2844 20.5327 17.3372 21.0195 17.5388C21.5063 17.7404 21.9223 18.0819 22.215 18.52C22.5078 18.9581 22.664 19.4731 22.664 20C22.664 20.3498 22.5951 20.6963 22.4612 21.0195C22.3273 21.3427 22.1311 21.6364 21.8837 21.8837C21.6364 22.1311 21.3427 22.3273 21.0195 22.4612C20.6963 22.5951 20.3498 22.664 20 22.664Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
                                </svg>

                                <svg width={20} height={20} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width={39} height={39} rx="19.5" stroke="#F0F0F0" style={{ stroke: 'color(display-p3 0.9427 0.9427 0.9427)', strokeOpacity: 1 }} />
                                    <path d="M13 14.6263C13 14.1549 13.165 13.766 13.4949 13.4596C13.8249 13.1532 14.2539 13 14.7818 13C15.3003 13 15.7199 13.1508 16.0404 13.4525C16.3704 13.7636 16.5354 14.169 16.5354 14.6687C16.5354 15.1212 16.3751 15.4983 16.0545 15.8C15.7246 16.1111 15.2909 16.2667 14.7535 16.2667H14.7394C14.2209 16.2667 13.8014 16.1111 13.4808 15.8C13.1603 15.4889 13 15.0976 13 14.6263ZM13.1838 27V17.5535H16.3232V27H13.1838ZM18.0626 27H21.202V21.7253C21.202 21.3953 21.2397 21.1407 21.3152 20.9616C21.4471 20.6411 21.6475 20.37 21.9162 20.1485C22.1848 19.9269 22.5219 19.8162 22.9273 19.8162C23.9832 19.8162 24.5111 20.5279 24.5111 21.9515V27H27.6505V21.5838C27.6505 20.1885 27.3205 19.1303 26.6606 18.4091C26.0007 17.6879 25.1286 17.3273 24.0444 17.3273C22.8283 17.3273 21.8808 17.8505 21.202 18.897V18.9253H21.1879L21.202 18.897V17.5535H18.0626C18.0815 17.8552 18.0909 18.7933 18.0909 20.3677C18.0909 21.9421 18.0815 24.1529 18.0626 27Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
                                </svg>




                            </div>
                        </p>
                    </div>
                </div>
            </div>

            <hr className='border-white mt-10 w-3/4 mx-auto' />
            <p className='text-white text-xl text-center px-3 md:px-0 py-5'>Copyright © 2023 All rights reserved by Accuvend.</p>
        </div>
    );
};

export default Footer;
