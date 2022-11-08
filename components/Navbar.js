import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
	const { data: session } = useSession();

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

				{!session && (
					<li>
						<Link href="/api/auth/signin">
							<a
								onClick={(e) => {
									e.preventDefault();
									signIn("github");
								}}
							>
								เข้าสู่ระบบ
							</a>
						</Link>
					</li>
				)}

				{session && (
					<li>
						<Link href="/api/auth/signout">
							<a
								onClick={(e) => {
									e.preventDefault();
									signOut();
								}}
							>
								Sign Out
							</a>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
