const svg = {
	home: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
	board: 'M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4M20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20M14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3M10 7V5H8V17H20V5H18V7M15 15H10V13H15M18 11H10V9H18V11Z',
	waste: 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z',
	plus: 'M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M11,6H13V9H16V11H13V14H11V11H8V9H11V6Z',
	send: 'M12,7L17,12H14V16H10V12H7L12,7M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20Z',
};
function Icon({ variant, size = '33px', color = 'currentColor' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			style={{ width: size, height: size }}
		>
			<path fill={color} d={svg[variant]} />
		</svg>
	);
}

export default Icon;

/* function Icon({ variant, size = '33px', color = 'currentColor' }) {
	return (
		<svg style={{ width: size, height: size }} viewBox="0 0 24 24">
			<path fill={color} d={svg[variant]} />
		</svg>
	);
} */
