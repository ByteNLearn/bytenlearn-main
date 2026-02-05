
export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white text-2xl font-bold mb-4">ByteNLearn</h3>
                        <p className="text-sm max-w-md">
                            Empowering businesses with top-tier digital solutions and nurturing the next generation of tech talent through immersive internships.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">App Development</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Business Automation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Internships</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs">&copy; {new Date().getFullYear()} ByteNLearn. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {/* Social placeholders */}
                        <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
