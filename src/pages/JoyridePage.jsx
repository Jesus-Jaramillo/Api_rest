import { useState } from "react";
import Navigates from "../routes/Navigates";
import Joyride from "react-joyride";
import { Button } from "@mui/material";

function JoyridePage() {
    const [start, setStart] = useState(false)
    const [steps] = useState(
        [
            {
                content: <h1> Aqui empezara el tutorial guiado </h1>,
                placement: "center",
                target: "body"
            },
            {
                target: ".step-7",
                placement: "left",
                content: 'Prueba con step 1'
            },
            {
                target: ".step-8",
                content: 'Prueba con step 2'
            },
            {
                target: ".step-9",
                content: 'Prueba con step 3'
            }
        ]
    )
    return (
        <div>
            <div>
                <Navigates />
            </div>
            <br />
            <div>
                <h1> Joyride! </h1>
            </div>
            <br />
            <div>
                <Button onClick={() => setStart(!start)}> Start </Button>
            </div>

            <Joyride
                steps={steps}
                run={start}
                continuous
                showProgress
                showSkipButton
                scrollToFirstStep
                styles={{
                    options: {
                        arrowColor: '#e3ffeb',
                        backgroundColor: '#e3ffeb',
                        overlayColor: 'rgba(199, 199, 199, 0.623)',
                        primaryColor: '#000',
                        textColor: '#000',
                        width: 900,
                        zIndex: 1000,
                    },
                }}
            />

            <div className="step-7">
                <h1> Aqui ira el step 1 </h1>
                <h2> Lorem ipsum dolor, sit amet consectetut </h2>
            </div>
            <br />
            <div className="step-8">
                <h1> Aqui ira el step 1 </h1>
                <h2> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>
            <br />
            <div className="step-9">
                <h1> Aqui ira el step 1 </h1>
                <h2> Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
            </div>
        </div>
    )
}

export default JoyridePage; 