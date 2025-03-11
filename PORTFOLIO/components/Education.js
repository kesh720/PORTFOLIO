function Education() {
    try {
        return (
            <div className="mt-12" data-name="education-section">
                <h2 className="section-title education">EDUCATION</h2>
                <div className="space-y-8">
                    <div data-name="education-item">
                        <div className="text-red-500">2020-2023</div>
                        <div className="font-bold">Overal subject study</div>
                        <div className="text-gray-600">Obera Boys High School </div>
                    </div>
                    <div data-name="education-item">
                        <div className="text-red-500">2024-2026</div>
                        <div className="font-bold">Diploma in Software Engineering</div>
                        <div className="text-gray-600">Kenya Institute Of Software Engineering</div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
