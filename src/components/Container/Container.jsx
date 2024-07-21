export default function Container({ children, className }) {
  return <div className={`px-8 lg:px-20 ${className}`}>{children}</div>;
}
