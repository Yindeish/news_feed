

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`w-[85%] h-full mx-auto ${className}`}>
        {children}
    </div>
);

export default Container;