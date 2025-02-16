"use client"; // Required for Framer Motion animations in Next.js App Router
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPolitician() {
    return (
        <section id="about" className="bg-gray-50 py-16 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch h-full">
                {/* Left Side: Politician's Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center h-full"
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                        About Nalukoola Elias
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Nalukoola Elias has dedicated their life to fighting for justice,
                        equality, and the betterment of the community. With years of
                        experience in [specific fields or positions], they have earned the
                        trust of the people and are now running for office to continue their
                        mission of change.
                    </p>

                    {/* Politician's Vision */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold text-gray-800">The Vision</h3>
                        <p className="mt-4 text-lg text-gray-600">
                            Nalukoola Elias is passionate about bringing progress and reform
                            to the community. Their vision is to empower citizens, ensure a
                            better future for the next generation, and restore integrity in
                            leadership.
                        </p>
                    </div>

                    {/* Cause for Contribution */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className="mt-12 bg-[#0c0076] text-white py-8 px-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold">
                            Why Your Contribution Matters
                        </h3>
                        <p className="mt-4 text-lg text-gray-200">
                            Contributions are vital to making this vision a reality. Your
                            support will help fund campaign events, outreach efforts, and the
                            resources needed to connect with voters and make a lasting impact
                            in the community.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <Link href="/contribute">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 text-lg font-semibold rounded-lg bg-white text-[#0c0076] hover:bg-gray-200 transition duration-300"
                                >
                                    Contribute Now
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Politician's Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-stretch h-full"
                >
                    <div className="flex-1 h-full">
                        <Image
                            src="/nalukoola.jpg" // Replace with the correct path
                            alt="[Politician's Name]"
                            width={500}
                            height={600}
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
