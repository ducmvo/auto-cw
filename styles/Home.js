import styled from 'styled-components'
export const Container = styled.form`
	padding: 1rem;
	@media (min-width: 900px) {
		display: flex;
	}
`
export const Form = styled.div`
	flex: 1;
`
export const Result = styled.div`
	flex: 2;
	@media (min-width: 1200px) {
		display: flex;
		justify-content: space-between;
	}
`
export const ResultCard = styled.div`
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	margin: 0.5rem;
	margin-bottom: 1.5rem;
	box-sizing: border-box;
	flex-basis: 23%;
	:hover {
		background-color: #c8f7c8;
	}
`
export const Row = styled.div`
	padding: 1rem 1rem;
	display: flex;
	label {
		padding-right: 1rem;
		font-family: 'Roboto', sans-serif;
		font-size: 1.2rem;
		margin-left: 2rem;
		margin-top: 0.7rem;
		display: block;
		transition: all 0.3s;
		transform: translateY(0rem);
	}
	input {
		flex: 1;
		height: 2rem;
		border: 1px solid gray;
		border-radius: 8px;
		color: seagreen;
		font-size: 1.5rem;
		font-weight: bold;
		padding: 1.5rem 1rem;
		background-color: rgb(255, 255, 255);
		transition: all 0.3s;
	}
`
export const Button = styled.button`
	flex: 1;
	border: none;
	height: 3rem;
	margin: 10px;
	border-radius: 8px;
	background-color: #0091ea;
	color: white;
	font-size: 1.3rem;
	text-transform: uppercase;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	transition: all 0.3s;
	cursor: pointer;
	:hover {
		background-color: #01579b;
	}
    :disabled {
        background-color: #cccccc;
        color: #666666;
        cursor: not-allowed;
    }
`

export const RollRow = styled.div`
	padding: 0.5rem;
`

export const Loader = styled.div`
	color: black;
	font-size: 3rem;
	text-indent: -9999em;
	overflow: hidden;
	width: 1em;
	height: 1em;
	border-radius: 50%;
	margin: 72px auto;
	position: relative;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
	animation: load6 1.7s infinite ease, round 1.7s infinite ease;

	@-webkit-keyframes load6 {
		0% {
			box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
				0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
		}
		5%,
		95% {
			box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
				0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
		}
		10%,
		59% {
			box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
				-0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
				-0.297em -0.775em 0 -0.477em;
		}
		20% {
			box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
				-0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
				-0.749em -0.34em 0 -0.477em;
		}
		38% {
			box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
				-0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
				-0.82em -0.09em 0 -0.477em;
		}
		100% {
			box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
				0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
		}
	}
	@keyframes load6 {
		0% {
			box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
				0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
		}
		5%,
		95% {
			box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
				0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
		}
		10%,
		59% {
			box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
				-0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
				-0.297em -0.775em 0 -0.477em;
		}
		20% {
			box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
				-0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
				-0.749em -0.34em 0 -0.477em;
		}
		38% {
			box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
				-0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
				-0.82em -0.09em 0 -0.477em;
		}
		100% {
			box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
				0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
		}
	}
	@-webkit-keyframes round {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@keyframes round {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`
