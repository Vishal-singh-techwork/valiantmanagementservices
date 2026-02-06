import { Link, useLocation } from 'react-router-dom';

export function MobileBottomNav() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const triggerChat = () => {
        // Dispatch a custom event to open the chatbot
        window.dispatchEvent(new CustomEvent('toggle-chatbot'));
    };

    const navItems = [
        {
            name: 'Home', path: '/', icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            name: 'Services', path: '/services', icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'Contact', path: '/contact', icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-[200] pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-around h-16 px-2">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-all active:scale-95 ${isActive(item.path) ? 'text-secondary' : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        {item.icon}
                        <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
                        {isActive(item.path) && (
                            <span className="absolute bottom-1 w-1 h-1 bg-secondary rounded-full" />
                        )}
                    </Link>
                ))}

                {/* Support/Bot Trigger */}
                <button
                    onClick={triggerChat}
                    className="flex flex-col items-center justify-center gap-1 w-full h-full text-gray-400 hover:text-secondary transition-all active:scale-95"
                >
                    <div className="relative">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Support</span>
                </button>
            </div>
        </nav>
    );
}
