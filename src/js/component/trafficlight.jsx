import React, { useState } from "react";

const TrafficLight = () => {
	const [redLight, setRedLight ] = useState('#671b1b');
	const [yellowLight, setYellowLight ] = useState('#515118');
	const [greenLight, setGreenLight ] = useState('#1d4d1d');
	const [redShadowLight, setRedShadowLight ] = useState('none');
	const [yellowShadowLight, setYellowShadowLight ] = useState('none');
	const [greenShadowLight, setGreenShadowLight ] = useState('none');
	const [newColor, setNewColor ] = useState('none');
	const [newColorLabel, setNewColorLabel ] = useState('Add Color');
	const [purpleLight, setPurpleLight ] = useState('#491a49');
	const [purpleShadowLight, setPurpleShadowLight ] = useState('none');
	
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
			setPurpleLight("##491a49")
			setPurpleShadowLight("none")
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
			setPurpleLight("##491a49")
			setPurpleShadowLight("none")
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
			setPurpleLight("##491a49")
			setPurpleShadowLight("none")
		}
	}
	function addPurple() {
		setNewColor('block')
		setNewColorLabel('New Color')
		if (newColor === 'block') {
			setNewColor('none')
			setNewColorLabel('New Color')
		} else {
			setNewColor('block')
			setNewColorLabel('Hide New Color')
		}
	}
	function changePurpleLight() {
		setPurpleLight("purple")
		setPurpleShadowLight("lightyellow 0px 0px 50px 50px")
		if (purpleLight === 'purple') {
			setPurpleLight("##491a49")
			setPurpleShadowLight("none")
		} else {
			setPurpleLight("purple")
			setRedLight("#671b1b")
			setYellowLight("#515118")
			setPurpleShadowLight("lightyellow 0px 0px 50px 50px")
			setRedShadowLight("none")
			setYellowShadowLight("none")
			setGreenLight("#1d4d1d")
			setGreenShadowLight("none")
		}
	}
	return (
		<div className="container" >
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="row d-flex justify-content-center" >
						<div className="d-flex align-items-center bg-black justify-content-center" style={{width: '3rem', height:'6rem'}}></div>
					</div>
					<div className="row d-flex justify-content-center" >
						<div className="d-flex align-items-center py-3 mb-3 rounded-5 bg-black justify-content-center flex-column" style={{width: '18rem', height:'auto'}}>
							<div onClick={changeRedLight} className="btn rounded-circle" style={{width: '12rem', height:'12rem', boxShadow:redShadowLight, backgroundColor:redLight}}></div>
							<div onClick={changeYellowLight} className="btn rounded-circle" style={{width: '12rem', height:'12rem', boxShadow:yellowShadowLight, backgroundColor:yellowLight}}></div>
							<div onClick={changeGreenLight} className="btn rounded-circle" style={{width: '12rem', height:'12rem', boxShadow:greenShadowLight, backgroundColor:greenLight}}></div>
							<div onClick={changePurpleLight} className="btn rounded-circle" style={{width: '12rem', height:'12rem', boxShadow:purpleShadowLight, backgroundColor: purpleLight, display:newColor}}></div>
						</div>
					</div>
				</div>
				<div className="col-md-6 d-flex align-items-start justify-content-center mt-5 py-5">
					<div class="d-grid gap-2 col-6 mx-auto">
						<button type="button" onClick={addPurple} class="btn btn-success">{newColorLabel}</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;

