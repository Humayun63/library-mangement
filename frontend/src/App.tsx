import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router";

const App: FC = () =>{
	return(
		<>
			<p className="text-2xl font-bold">Hello World</p>
			<Button>Click me</Button>
			<Outlet />
		</>
	)
}

export default App;