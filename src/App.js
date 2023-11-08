import fruitArr from "./fruitArr"
import Fruit from "./components/Fruit"

export default function App() {

    const result = fruitArr.map(objItem => {
        return (
            <Fruit details={objItem} />
        )
    })

    return (
        <div style={{display: "flex"}}>{result}</div>
    )
}