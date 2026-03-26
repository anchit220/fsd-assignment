import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const clear = () => {
        setInput("");
    };

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <div style={styles.container}>
            <h2>Calculator</h2>

            <input style={styles.display} value={input} readOnly />

            <div style={styles.buttons}>
                {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
                    <button
                        key={btn}
                        style={styles.button}
                        onClick={() => btn === "=" ? calculate() : handleClick(btn)}
                    >
                        {btn}
                    </button>
                ))}

                <button style={styles.clear} onClick={clear}>C</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "250px",
        margin: "50px auto",
        textAlign: "center",
        border: "2px solid black",
        padding: "20px",
        borderRadius: "10px"
    },
    display: {
        width: "100%",
        height: "40px",
        fontSize: "18px",
        marginBottom: "10px",
        textAlign: "right"
    },
    buttons: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "5px"
    },
    button: {
        padding: "10px",
        fontSize: "16px"
    },
    clear: {
        gridColumn: "span 4",
        padding: "10px",
        backgroundColor: "red",
        color: "white"
    }
};

export default Calculator;  