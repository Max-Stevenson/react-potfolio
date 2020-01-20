import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header = () => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<h1>Portfolio</h1>
				<NavLink className="is_active" exact={true} to="/">Home</NavLink>
				<NavLink className="is_active" exact={true} to="/portfolio">Portfolio</NavLink>
				<NavLink className="is_active" to="/contact">Contact</NavLink>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);