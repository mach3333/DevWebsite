import Fish from "../Fish/Fish";
import "./School.css"
import { useState } from "react";

const fishList = ["juvenile", "fingerling"];

const createFish = (id) => ({
    id,
    type: fishList[Math.floor(Math.random() * fishList.length)],
    top: Math.random() * 70 + 10,
    speed: Math.random() * 10 + 15,
    scale: Math.random() * 1 + 1,
    delay: Math.random() * -10 // negative = already mid-animation
});

const School = () => {
    const fishCount = 10; // NUMBER OF FISH ACTIVE

    const [fishArray] = useState(() =>
        Array.from({ length: fishCount }, (_, i) => createFish(i))
    ); // loop instantiation
    console.log("fishArray length:", fishArray.length);
    return (
        <div className="fish-background">
            {fishArray.map((fish) => (
                <div
                    key={fish.id}
                    className="fish-wrapper"
                    style={{
                        top: `${fish.top}%`,
                        animationDuration: `${fish.speed}s`,
                        animationDelay: `${fish.delay}s`
                    }}
                >
                    <Fish type={fish.type} style={{transform: `scale(${fish.scale})`}}
                    />
                </div>
            ))}
        </div>
    );
};

export default School;