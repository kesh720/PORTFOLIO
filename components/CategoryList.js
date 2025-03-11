function CategoryList() {
    try {
        const categories = [
            { label: "Branding", icon: "branding" },
            { label: "UI/UX Design", icon: "uiux" },
            { label: "Layout", icon: "layout" },
            { label: "Illustration", icon: "illustration" },
            { label: "Social Media", icon: "social" }
        ];

        return (
            <div className="flex flex-wrap gap-4 mt-8" data-name="category-list">
                {categories.map((category, index) => (
                    <CategoryButton 
                        key={index} 
                        label={category.label} 
                        icon={category.icon}
                    />
                ))}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
