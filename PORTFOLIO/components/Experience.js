function Experience() {
    try {
        const experiences = [
            {
                period: "2023 - 2024",
                title: "cyber management",
                company: "Star-light Cybernetics"
            },
           
            {
                period: "2024 - 2025",
                title: "Graphic Designer",
                company: "Collins, Nairobi"
            }
        ];

        const organizations = [
           
            {
                period: "2024 - 2025",
                title: "Committee Member",
                organization: "Type Directors Club"
            }
        ];

        return (
            <div className="mt-12" data-name="experience-section">
                <h2 className="section-title experience">EXPERIENCE</h2>
                <div className="relative">
                    <div className="timeline-line"></div>
                    <div className="space-y-8 pl-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative" data-name="experience-item">
                                <div className="timeline-dot absolute -left-8 top-2"></div>
                                <div className="text-red-500">{exp.period}</div>
                                <div className="font-bold">{exp.title}</div>
                                <div className="text-gray-600">{exp.company}</div>
                            </div>
                        ))}
                        {organizations.map((org, index) => (
                            <div key={index} className="relative" data-name="organization-item">
                                <div className="timeline-dot absolute -left-8 top-2"></div>
                                <div className="text-red-500">{org.period}</div>
                                <div className="font-bold">{org.title}</div>
                                <div className="text-gray-600">{org.organization}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
