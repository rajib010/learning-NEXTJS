import AsideComponent from "@/component/AsideComponent";
import HeaderComponent from "@/component/HeaderComponent";

export default function AdminLayout({children,}: Readonly<{
    chidren: React.ReactNode;
}>) {
  return (
    <div>
        <HeaderComponent />
        <AsideComponent />
        {children}
    </div>
  )
}
