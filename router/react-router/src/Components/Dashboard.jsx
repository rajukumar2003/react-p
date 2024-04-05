
export default function Dashboard() {
    return <div>
        This is Dashboard <br />
        <Boldify>
            Welcome User
        </Boldify>

        <Boldify>
            <div>
                What are you up to today!!
            </div>
        </Boldify>
    </div>
}

// Component
function Boldify({ children }) {
    return <b>
        {children}
    </b>
}
