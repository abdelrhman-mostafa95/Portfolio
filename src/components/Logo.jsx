export default function Logo({ className, src = "/logo-white.png" }) {
    return (
        <div className={className}>
            <img
                src={src}
                alt="Logo"
                className="w-40 block"
            />
        </div>
    );
}
