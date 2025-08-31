import { type FC } from "react";
import { Outlet } from "react-router";
import Navbar  from "@/components/layout/Navbar/Navbar";

const App: FC = () =>{
	return(
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default App;