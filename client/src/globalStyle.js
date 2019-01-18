import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
	}
	a,a:hover,a:visited{text-decoration: none !important;}
	li{list-style: none;}
	ul{margin: 0;}
	body{
			overflow-x: hidden; 
			overflow-y: auto; 
			position: relative;
			font-family: Menlo, monospace !important;
			background: #eaeaea !important;
			height: 100%;
	}
	header,nav,aside,section,article,main,footer{
			display: block;
	}
	button {
			outline: none !important;
	}
	[type=button], [type=reset], [type=submit], button {
		-webkit-appearance: initial !important;
	}
`