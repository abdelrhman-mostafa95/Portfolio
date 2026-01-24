export default function Logo({ className, style }) {
    return (
        <div
            className={className}
        // style={style}
        >
            <img
                src="/logo-white.png"
                alt="Logo"
                className="w-40 block"
            />
        </div>
    );
}
