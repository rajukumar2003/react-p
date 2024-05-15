import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";

function App() {
	return (
		<div>
			<RecoilRoot>
				<Count />
			</RecoilRoot>
		</div>
	)
}

function Count() {
	return <div>
		<CountRenderer /> 
		<Buttons />

	</div>
}

function CountRenderer() {
	const count = useRecoilValue(countAtom)
	return <div>
		{count}
		{count % 2 === 0 ? (
			<p>This is even</p>
		) :
			(
				<p>It is Odd</p>
		)}
	</div>
}

function Buttons() {
	const setCount = useSetRecoilState(countAtom);
	return <div>
		<button onClick={() => {
			setCount(count => count + 1)
		}}>Increase</button>

		<button onClick={() => {
			setCount(count => count - 1)
		}}>Decrease</button>
	</div>
}

function buttonClicked() {
	console.log("Button clicked");
}

export default App