import { Route } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <h1>Header</h1>
        <Routes>
          <Route path="/auth" element={<AuthLayout/>}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
