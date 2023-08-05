export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="layout">{children}</main>;
}
