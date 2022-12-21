import styled from "styled-components";

export const ContainerPage = styled.section`
	display: flex;
	background-color: black;
	height: 100vh;
	width: auto;
	background-size: cover;
	min-width: 1280px;
	@media (max-width: 768px) {
		background-size: cover;
		height: 1920px;
	}
`;
export const ContentContainerPage = styled.div`
	gap: 100px;
	display: flex;
	align-items: baseline;
	justify-content: center;
	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;
export const ContentContainer = styled.div`
	gap: 100px;
	display: flex;
	align-items: baseline;
	justify-content: center;
	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;
//Card Profile
export const CardProfile = styled.div`
	width: 500px;
	height: 600px;
	background-color: #2c2c2c;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23161616'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-left: 15%;
	@media (max-width: 768px) {
		display: flex;
		align-items: baseline;
		justify-content: center;
		width: 1100px;
		height: 900px;
	}
`;
export const CardTittle = styled.h1`
	color: white;
	@media (max-width: 768px) {
		font-size: 5em;
		margin-top: -5rem;
		margin-left: -5rem;
	}
`;
export const ContentForm = styled.form`
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const ContentLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	@media (max-width: 768px) {
		font-size: 2em;
		font-weight: 700;
	}
`;
export const ContentInput = styled.input`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	color: black;
	width: 200px;
	height: 50px;
	text-align: center;
	border-radius: 15px;
	font-family: "Chivo Mono", monospace;
	box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
	variant: disable;
	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		width: 300px;
		height: 100px;
		font-size: 1.7em;
	}
`;
export const ContentInputUpload = styled.input`
	display: flex;
	align-items: center;
	justify-content: center;
	appearance: none;
	background-color: #2c2c2c;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23161616'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	border: 2px solid #1a1a1a;
	border-radius: 15px;
	box-sizing: border-box;
	color: #ffffff;
	cursor: pointer;
	font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
		Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	font-size: 16px;
	font-weight: 600;
	line-height: normal;
	margin: 0;
	min-height: 60px;
	min-width: 0;
	outline: none;
	padding: 16px 24px;
	text-align: center;
	text-decoration: none;
	transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	width: 100%;
	will-change: transform;
	&:disabled {
		pointer-events: none;
	}
	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
		transform: translateY(-2px);
	}
	&:active {
		box-shadow: none;
		transform: translateY(0);
	}
	variant: disable;
	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		width: 300px;
		height: 100px;
		margin-left: 36%;
		font-size: 1.7em;
	}
`;
export const ButtonDownload = styled.button`
	font-weight: 700;
	margin-top: 36em;
	margin-left: 15em;
	height: 50px;
	width: 150px;
	border-radius: 15px;
	border: none;
	position: absolute;
	transition: box-shadow 0.7s ease;
	font-family: "Chivo Mono", monospace;
	&:hover {
		cursor: pointer;
		color: white;
		box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
			rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
			rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
			rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
	}
	@media (max-width: 768px) {
		height: 100px;
		width: 300px;
		font-size: 2em;
		margin-top: 25rem;
		margin-left: 6rem;
	}
`;
