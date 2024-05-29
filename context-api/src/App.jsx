import { countAtom, evenSelector } from "./store/atoms/count";
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
		<b> {count} </b>
		<EventCountRenderer/>
	</div>
}
                                     
function EventCountRenderer() {
	const isEven = useRecoilValue(evenSelector);
	return <div>
			{isEven ?
				(<p> It is even </p>)
				:
				(<p> It is odd </p>)}
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


export default App