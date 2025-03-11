function PortfolioCard({ title, category, image, description }) {
    try {
        return (
            <div className="portfolio-card group" data-name="portfolio-card">
                <div className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                        <img 
                            src={images} 
                            alt={title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">{title}</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                            <span className="text-sm text-gray-600">{category}</span>
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

function Portfolio() {
    try {
        const projects = [
            {
                title: "Eco Brand Identity",
                category: "Branding",
                image: "images/king.jpg",
                description: "Complete brand identity design for an eco-friendly product line"
            },
            {
                title: "Mobile Banking App",
                category: "UI/UX Design",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format",
                description: "Modern and secure mobile banking application interface design"
            },
            {
                title: "Fashion Magazine",
                category: "Layout",
                image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format",
                description: "Editorial design and layout for high-end fashion magazine"
            },
            {
                title: "Character Design",
                category: "Illustration",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format",
                description: "Series of character illustrations for children's book"
            }
        ];

        return (
            <div className="mt-16" data-name="portfolio-section">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="section-title portfolio">PORTFOLIO</h2>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-yellow-200 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {projects.map((project, index) => (
                        <PortfolioCard key={index} {...project} />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
