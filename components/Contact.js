function Contact() {
    try {
        const [message, setMessage] = React.useState("");
        const [name, setName] = React.useState("");
        const [email, setEmail] = React.useState("");
        const [messages, setMessages] = React.useState([
            {
                id: 1,
                name: "John Doe",
                message: "Amazing portfolio! Would love to collaborate on a project.",
                date: "2024-01-15"
            },
            {
                id: 2,
                name: "Sarah Smith",
                message: "Your design work is truly inspiring. The attention to detail is remarkable.",
                date: "2024-01-14"
            }
        ]);

        const handleSubmit = (e) => {
            try {
                e.preventDefault();
                if (!message || !name || !email) return;

                const newMessage = {
                    id: messages.length + 1,
                    name,
                    message,
                    date: new Date().toISOString().split('T')[0]
                };

                setMessages([newMessage, ...messages]);
                setMessage("");
                setName("");
                setEmail("");
            } catch (error) {
                reportError(error);
            }
        };

        return (
            <div className="mt-16 mb-16" data-name="contact-section">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="section-title contact">CONTACT</h2>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-200 to-transparent"></div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative" data-name="contact-form-container">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 rounded-2xl blur opacity-25"></div>
                        <form onSubmit={handleSubmit} className="relative bg-white/70 backdrop-blur-md rounded-xl p-6 space-y-6" data-name="contact-form">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all h-32 resize-none"
                                    placeholder="Write your message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-violet-500 to-violet-600 text-white py-3 rounded-lg hover:from-violet-600 hover:to-violet-700 transition-all shadow-lg shadow-violet-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-6" data-name="message-board">
                        <h3 className="text-xl font-semibold flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"/>
                                </svg>
                            </span>
                            Message Board
                        </h3>
                        <div className="space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className="relative group" data-name="message-item">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
                                    <div className="relative bg-white/70 backdrop-blur-md p-4 rounded-lg border border-gray-100">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                                                <span className="font-medium text-gray-800">{msg.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{msg.date}</span>
                                        </div>
                                        <p className="text-gray-600">{msg.message}</p>
                                    </div>
                                </div>
                            ))}
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
