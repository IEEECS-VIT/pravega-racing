import '/src/styles/slider1.css';



export default function Footer() {
  return (
    <footer className="container bg-gray-800 " style={{ maxWidth: '100%', height: 200 }} >
      <div className="grid grid-cols-3 gap-1 mx-20">
        <div className="mt-4">
          <img src='images/general/logowhite.png' className="footImg"></img>
          <div className="buttonsAtEnd">
            <div className="bg-black hover:bg-white" style={{ margin: '0px', width: '20px', height: '20px' }}></div>
            <div className="bg-black hover:bg-white" style={{ margin: '0px', width: '20px', height: '20px' }}></div>
            <div className="bg-black hover:bg-white" style={{ margin: '0px', width: '20px', height: '20px' }}></div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-left text-xl" style={{ color: 'white' }}>Sign Up</p>
          <p className="text-left">Want to keep informed? Join our infrequent mailing list, and you will never miss out on our upcoming events.</p>
          <span style={{ width: '100%' }}>
            <input type="text" style={{ width: '80%', marginLeft: '0px', marginRight: '0px' }}></input>
            <button className="bg-black hover:bg-white" style={{ height: '40px', width: '20%', marginLeft: '0px', marginRight: '0px' }}>Submit</button></span>
        </div>
        <div className="mt-8" style={{ marginLeft: '100px' }}>
          <img src="images/general/ieeecslogo.png" className="footImg"></img>
        </div>

      </div>
    </footer>
  );
}

