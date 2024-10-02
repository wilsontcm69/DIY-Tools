import { Link } from 'react-router-dom';
import DomainManagement from '../images/toolsIcon.png';

export default function Home() {
	return (
		<>
			<div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
				<div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
					<h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">
						Welcome to the DIY Tools
					</h2>
				</div>
				<div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
					<Link
						to="/My50"
						className="text-center text-gray-500 dark:text-gray-400 transition duration-300 ease-in-out hover:scale-110"
					>
						<img
							className="mx-auto mb-4 w-52 h-52"
							src={DomainManagement}
							alt="My50Calculator"
						/>
						<h3 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white">
							My50 Calculator
						</h3>
					</Link>
					<Link
						to="/1"
						className="text-center text-gray-500 dark:text-gray-400 transition duration-300 ease-in-out hover:scale-110"
					>
						<img
							className="mx-auto mb-4 w-52 h-52"
							src={DomainManagement}
							alt="Working..."
						/>
						<h3 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white">
							Working...
						</h3>
					</Link>
					<Link
						to="/1"
						className="text-center text-gray-500 dark:text-gray-400 transition duration-300 ease-in-out hover:scale-110"
					>
						<img
							className="mx-auto mb-4 w-52 h-52"
							src={DomainManagement}
							alt="Working..."
						/>
						<h3 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white">
							Working...
						</h3>
					</Link>
				</div>
			</div>
		</>
	)
}
