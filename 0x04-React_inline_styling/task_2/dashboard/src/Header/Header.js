import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
	return (
		<div className={css(styles["App-header"])}>
			<img src={logo} className={css(styles.img)} alt='Holberton' />
			<h1>School dashboard</h1>
		</div>
	);
};

const styles = StyleSheet.create({
	"App-header": {
	  fontSize: "1.4rem",
	  color: "#e0354b",
	  display: "flex",
	  alignItems: "center",
	  borderBottom: "3px solid #e0354b",
	},
  
	img: {
	  width: "200px",
	  height: "200px",
	},
  });


export default Header;
