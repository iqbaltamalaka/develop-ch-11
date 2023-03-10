import styled from "styled-components";
// const show = keyframes`
//   0%, 49.99% {
// 		opacity: 0;
// 		z-index: 1;
// 	}

// 	50%, 100% {
// 		opacity: 1;
// 		z-index: 5;
// 	}
// `;

// const hide = keyframes`
//   0%, 49.99% {
//     opacity: 1;
//     z-index: 5;
//   }

//   50%, 100% {
//     opacity: 0;
//     z-index: 1;
//   }
// `

export const Container = styled.div`
	background-color: red;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	position: relative;
	overflow: hidden;
	width: 678px;
	min-width: 1280px;
	height: 100vh;
	width: 100%;
	background-size: cover;
	@media (max-width: 320px) {
		height: 1920px;
	}
	@media (min-width: 321px) {
		height: 1620px;
	}
	@media (min-width: 424px) {
		height: 1440px;
	}
	@media (min-width: 767px) {
		height: 1440px;
	}
	@media (min-width: 1023px) {
		height: 790px;
	}
`;

export const SignUpContainer = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;

	${(props) =>
		props.signingIn !== true
			? `
  transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	`
			: null}
`;

export const SignInContainer = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
	left: 0;
	width: 50%;
	z-index: 2;
	${(props) =>
		props.signingIn !== true ? `transform: translateX(100%);` : null}
`;

export const Form = styled.div`
	background-color: #434242;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
`;

export const Title = styled.h1`
	font-weight: bold;
	margin: 0;
	color: white;
`;

export const Input = styled.input`
  background-color: #eee;
  color: black;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 50%;
  border-radius: 15px;
  transition:box-shadow 0.5s ease-in-out;
  &:active {
    transform: scale(0.95);
    box-shadow: #E5DCC3 5px 5px, #C7BEA2 10px 10px;
  }
  &:focus {
    outline: none;
    box-shadow: #E5DCC3 5px 5px, #C7BEA2 10px 10px;
  }
  &;hover {
    box-shadow: #E5DCC3 5px 5px, #C7BEA2 10px 10px;
  }
  @media (max-width: 320px) {
		width: 70%;
    height:70px;
    font-size:24px;
	}
	@media (min-width: 321px) {
    width: 70%;
    height:70px;
    font-size:24px;
	}
	@media (min-width: 424px) {
    width: 70%;
    height:70px;
    font-size:24px;
	}
	@media (min-width: 767px) {
    width: 70%;
    height:70px;
    font-size:24px;
	}
	@media (min-width: 1023px) {
    width: 70%;
    height:70px;
    font-size:24px;
	}
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #black;
  background-color: #E5DCC3;
  color: black;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in, box-shadow 0.5s ease-in-out;
  &:active {
    transform: scale(0.95);
    box-shadow: #E5DCC3 5px 5px, #C7BEA2 10px 10px;
  }
  &:focus {
    outline: none;
    box-shadow: #E5DCC3 5px 5px, #C7BEA2 10px 10px;
  }
  &;hover {
    box-shadow: #E5DCC3 5px 5px, #C7BEA2 10px 10px;
  }
  @media (max-width: 320px) {
		width: 70%;
    height:70px;
    font-size:24px;
	}
	@media (min-width: 321px) {
    width: 70%;
    height:70px;
    font-size:24px;
	}
	@media (min-width: 424px) {
    width: 70%;
    height:70px;
    font-size:24px;
	}
	@media (min-width: 767px) {
    width: 70%;
    height:70px;
    font-size:24px;
	}
	@media (min-width: 1023px) {
    width: 70%;
    height:70px;
    font-size:24px;
	}
  `;

export const GhostButton = styled(Button)`
	background-color: transparent;
	border-color: #e5dcc3;
	color: white;
`;

export const Anchor = styled.a`
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
`;

export const OverlayContainer = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
	${(props) =>
		props.signingIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
	background: black;
	background: -webkit-linear-gradient(
		to right,
		194.68deg,
		#ffb548 11.27%,
		#f3af34 90.4%
	);
	background: linear-gradient(
		to right,
		194.68deg,
		#ffb548 11.27%,
		#f3af34 90.4%
	);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #ffffff;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
	${(props) =>
		props.signingIn !== true ? `transform: translateX(50%);` : null}
`;

export const OverlayPanel = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
	transform: translateX(-20%);
	${(props) => (props.signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
	right: 0;
	transform: translateX(0);
	${(props) =>
		props.signingIn !== true ? `transform: translateX(20%);` : null}
`;
export const Paragraph = styled.p`
	font-size: 14px;
	font-weight: normal;
	line-height: 20px;
	letter-spacing: 0.5px;
	width: 80%;
`;
