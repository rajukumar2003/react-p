
function App() {
	return <div>
		<CardWrapper >
			text is wrapped
		</CardWrapper>
		<CardWrapper >
			<TextComponent/>
		</CardWrapper>
		
	</div>
};


function CardWrapper({ children }) {
	return <div style={{ border: "2px solid black", padding:20 }}>
		{children}
	</div>
}

function TextComponent() {
	return <div>
		Component is wrapped
	</div>
}

export default App
