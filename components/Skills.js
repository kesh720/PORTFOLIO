function Skills() {
    try {
        const skills = [
            "Digital Illustration",
            "web development",
            "Branding",
            "UI/UX Design",
            "Motion Graphics",
            "Video Editing"
        ];

        const software = [
            { id: "Ps", name: "Photoshop" },
            { id: "Ai", name: "Illustrator" },
            { id: "Fb", name: "Figma" },
            { id: "Pr", name: "Premiere" },
            { id: "Ae", name: "After Effects" },
            { id: "Id", name: "InDesign" }
        ];

        return (
            <div className="mt-12" data-name="skills-section">
                <h2 className="section-title skills">SKILLS</h2>
                <div className="flex flex-wrap gap-3 mb-8">
                    {skills.map((skill, index) => (
                        <span key={index} className="px-4 py-2 rounded-full border border-gray-300">
                            {skill}
                        </span>
                    ))}
                </div>
                
                <h2 className="section-title skills mb-4">SOFTWARE</h2>
                <div className="flex flex-wrap gap-4">
                    {software.map((sw, index) => (
                        <div key={index} className="software-icon">
                            {sw.id}
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
