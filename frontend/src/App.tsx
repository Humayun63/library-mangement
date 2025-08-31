import { type FC } from "react";
import { Outlet } from "react-router";
import Navbar  from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const App: FC = () =>{
	return(
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main>
				<Outlet />
			</main>
			
			<Footer />
		</div>
	)
}

export default App;