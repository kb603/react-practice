function Greeting(props) {
  const userName = "John Doe";
  return (
    <div>
      <div>
        <h1>Welcome to our app</h1>
        <p>Hello {userName}</p>
      </div>
    </div>
  );
}

export default Greeting;
