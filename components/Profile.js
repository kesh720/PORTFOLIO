function Profile() {
    try {
        const greetings = [
            "Hello World!",
            "Bonjour le Monde!",
            "Ciao Mondo!",
            "Hallo Welt!",
    
        ];

        return (
            <div className="flex gap-8 mt-12 items-start" data-name="profile-section">
                <div className="profile-image-container" data-name="profile-image">
                    <img 
                        src="images/kings.jpg"
                        alt="Austine "
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                        <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z"/>
                        </svg>
                    </div>
                </div>
                <div className="flex-1" data-name="profile-info">
                    <TypeWriter messages={greetings} />
                    <p className="text-xl leading-relaxed mb-8 text-gray-800" data-name="introduction">
                        I am <span className="text-violet-600 font-semibold">Austine Ochieng</span>, a passionate 
                        creative Software Engineer with over 2 years of experience in both web and app development.
                        
                    </p>
                    <div className="space-y-4" data-name="contact-info">
                        <div className="flex items-center gap-3 group cursor-pointer" data-name="behance-link">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-violet-100 text-violet-600 font-semibold text-sm transition-colors group-hover:bg-violet-200">Be</span>
                            <a href="https://behance.net/AustineOchieng" className="text-gray-600 hover:text-violet-600 transition-colors">behance.net/AustineOchieng</a>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer" data-name="phone-number">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-600 transition-colors group-hover:bg-green-200">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </span>
                            <span className="text-gray-600"> (
                                (+254) 79721-6543</span>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer" data-name="email">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-pink-100 text-pink-600 transition-colors group-hover:bg-pink-200">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </span>
                            <a href="mailto:exforekeshfore@gmail.com" className="text-gray-600 hover:text-pink-600 transition-colors">exforekeshfore@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
