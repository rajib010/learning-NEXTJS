
function NewsLayout({ children }) {
    return (
        <div className="bg-green-400">
            <h1>News header</h1>
            {children}
            <h1>news footer</h1>
        </div>
    );
}

export default NewsLayout;