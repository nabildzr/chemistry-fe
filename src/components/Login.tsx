'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
            siswa: { username: 'siswa123', password: '123456789', redirect: '/dashboard' },
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
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-md bg-[#f6f7fa] border border-[#f6f7fa] focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-md bg-[#f6f7fa] border border-[#f6f7fa] focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                                placeholder="Password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9d9fa0]"
                                aria-label="Show password"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-[#00e5c7] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="flex justify-center">
                                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            ) : (
                                "Log in"
                            )}
                        </button>
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
