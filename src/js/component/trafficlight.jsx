import React, { useState } from "react";

const TrafficLight = () => {
	const [redLight, setRedLight ] = useState('#671b1b');
	const [yellowLight, setYellowLight ] = useState('#515118');
	const [greenLight, setGreenLight ] = useState('#1d4d1d');
	const [redShadowLight, setRedShadowLight ] = useState('none');
	const [yellowShadowLight, setYellowShadowLight ] = useState('none');
	const [greenShadowLight, setGreenShadowLight ] = useState('none');
	
	function changeRedLight() {
		setRedLight("red")
		setRedShadowLight("lightyellow 0px 0px 50px 50px")
		if (redLight === 'red') {
			setRedLight("#671b1b")
			setRedShadowLight("none")
		} else {
			setRedLight("red")
			setYellowLight("#515118")
			setGreenLight("#1d4d1d")
			setRedShadowLight("lightyellow 0px 0px 50px 50px")
			setYellowShadowLight("none")
			setGreenShadowLight("none")
		}
	}
	function changeYellowLight() {
		setYellowLight("yellow")
		setYellowShadowLight("lightyellow 0px 0px 50px 50px")
		if (yellowLight === 'yellow') {
			setYellowLight("#515118")
			setYellowShadowLight("none")
		} else {
			setYellowLight("yellow")
			setRedLight("#671b1b")
			setGreenLight("#1d4d1d")
			setYellowShadowLight("lightyellow 0px 0px 50px 50px")
			setRedShadowLight("none")
			setGreenShadowLight("none")
		}
	}
	function changeGreenLight() {
		setGreenLight("green")
		setGreenShadowLight("lightyellow 0px 0px 50px 50px")
		if (greenLight === 'green') {
			setGreenLight("#1d4d1d")
			setGreenShadowLight("none")
		} else {
			setGreenLight("green")
			setRedLight("#671b1b")
			setYellowLight("#515118")
			setGreenShadowLight("lightyellow 0px 0px 50px 50px")
			setRedShadowLight("none")
			setYellowShadowLight("none")
		}
	}
	return (
		<div className="container" >
			<div className="row d-flex justify-content-center" >
				<div className="d-flex align-items-center bg-black justify-content-center" style={{width: '3rem', height:'12rem'}}>
				</div>
			<div className="row d-flex justify-content-center" ></div>
				<div className="d-flex align-items-center rounded-5 bg-black justify-content-center flex-column" style={{width: '18rem', height:'38rem'}}>
					<div onClick={changeRedLight} className="btn rounded-circle" style={{width: '12rem', height:'12rem', boxShadow:redShadowLight, backgroundColor:redLight}}></div>
					<div onClick={changeYellowLight} className="btn rounded-circle" style={{width: '12rem', height:'12rem', boxShadow:yellowShadowLight, backgroundColor:yellowLight}}></div>
					<div onClick={changeGreenLight} className="btn rounded-circle" style={{width: '12rem', height:'12rem', boxShadow:greenShadowLight, backgroundColor:greenLight}}></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;

