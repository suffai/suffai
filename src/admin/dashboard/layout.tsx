import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import Footer from "../ui/dashboard/footer/footer"

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props): JSX.Element {
    
    return (
      <div className="flex bg-[#151c2c] text-white text-[1.6rem] font-['Quicksand']">
        <div className="flex-1 bg-[#182237] p-8 min-h-[100vh]">
          <Sidebar />
        </div>
        <div className="flex-[4] p-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    );
}

export default Layout