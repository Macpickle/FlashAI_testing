function AppFooter() {
    return (
        <footer className="py-8 text-center bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 px-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <p>&copy; 2025 Flash.AI.</p>
                <div className="space-x-4">
                    <button className="text-gray-900 dark:text-gray-100 transition-colors hover:text-primary dark:hover:text-primary">About</button>
                    <button className="text-gray-900 dark:text-gray-100 transition-colors hover:text-primary dark:hover:text-primary">Contact</button>
                    <button className="text-gray-900 dark:text-gray-100 transition-colors hover:text-primary dark:hover:text-primary">Sign Up</button>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;