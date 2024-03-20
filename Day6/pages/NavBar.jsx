import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/css/Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<div className="navbar">
		<header>
			<div className="h3n">BEACHX</div>
			<nav ref={navRef}>
				<a href="/home">ABOUT</a>
				<a href="/f">ACTIVITIES</a>
				<a href="/photos">PHOTO GALLERY</a>
				<a href="/contact">CONTACT</a>
				<a href="/footer">US</a>
				
					
					<a href="/" className="logout-link">LOGOUT</a>
			
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header></div>
	);
}

export default Navbar;
