import Link from "next/link";

function Navbar() {

	return (
		<nav className="header">
			<h1 className="logo">
				<a href="#">PEA</a>
			</h1>
			<ul className={`main-nav `}>
				<li>
					<Link href="/dashboard">
						<a>นำเข้าข้อมูล</a>
					</Link>
				</li>

			
			</ul>
		</nav>
	);
}

export default Navbar;
