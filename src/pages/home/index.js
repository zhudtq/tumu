import './index.css'

export function Home() {
  return (
    <div className="container">
      <div className="header">首页</div>
      <div className="body">
        <button onClick={clickMe}>点击我哦</button>
      </div>
    </div>
  );
}

function clickMe() {
    console.log('nicky home')
}

// export default Home