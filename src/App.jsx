import MyComponent from "./components/MyComponent";

function App() {
  const employeesList = [
    { id: 1, name: 'John Doe', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', department: 'Marketing' },
    { id: 3, name: 'Alice Johnson', department: 'Human Resources' },
    { id: 4, name: 'Bob Brown', department: 'Sales' },
    { id: 5, name: 'Charlie White', department: 'Product Management' }
  ];
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-b from-gray-300 via-gray-100 to-white'>
      <MyComponent data={employeesList} />
    </div>
  );
}

export default App;
