'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        return () => {
            // Re-enable scrolling on unmount
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const credentials = {
            admin: { username: 'admin12345', password: '123456789', redirect: '/admin' },
            siswa: { username: 'siswa123', password: '123456789', redirect: '/homepage' },
        };

        if (
            username === credentials.admin.username &&
            password === credentials.admin.password
        ) {
            router.push(credentials.admin.redirect);
        } else if (
            username === credentials.siswa.username &&
            password === credentials.siswa.password
        ) {
            router.push(credentials.siswa.redirect);
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left-side image */}
            <div
                className="hidden lg:block lg:w-9/12 relative"
                style={{ height: '100vh' }}
            >
                <Image
                    src="/assets/rajampat.png"
                    alt="Background"
                    className="absolute inset-0 object-cover"
                    layout="fill"
                    priority
                    style={{ objectFit: 'cover', transform: 'scale(1.3) translateX(11%)' }}
                />
            </div>

            {/* Right-side login */}
            <div
                className="flex w-full lg:w-4/12 items-center justify-center p-8 bg-white lg:min-h-screen lg:shadow-lg lg:rounded-none"
                style={{
                    position: 'relative',
                    boxShadow: 'none',
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px',
                }}
            >
                <div className="w-full h-full max-w-md p-8 bg-white rounded-lg">
                    <div className="text-center mb-8">
                        <Image
                            src="/assets/chemistry-logo.png"
                            alt="Chesmistry Logo"
                            width={100}
                            height={100}
                            className="mx-auto mb-4"
                        />
                        <Image
                            src="/assets/chemistry-wordmark.png"
                            alt="Chemistry Title Text"
                            width={200}
                            height={50}
                            className="mx-auto"
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red"
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-[#01D4CF] to-[#03E8B9]  text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-right">
                        <a
                            href="/forgot-password"
                            className="text-sm text-gray hover:underline cursor-pointer"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </div>
                {/* Powered by Telkom section */}
                {/* <div className="absolute bottom-8 w-full text-center flex justify-center items-center space-x-4">
                    <Image src="/assets/PoweredBy.png" alt="Powered by Logo" width={80} height={10} />
                    <Image src="/assets/Telkom.schools.png" alt="Telkom Logo" width={80} height={10} />
                </div> */}
            </div>
        </div>
    );
}

export default Login;
