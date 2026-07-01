//import './App.css';
//import Count from './Component/Count';
import Userprofile from './Component/Userprofile';
//import Typetext from './Component/Typetext';
//import Counter from './Component/Counter';
//import Rct from './Component/Rct';
// import Funcomp from './Component/Funcomp';
// import Greet from './Component/Greet';
//import Welcome from './Component/Welcome';


function App() {
  // const data = [
  //{
  //   name: 'CodingLab',
  //  Desc: 'YouTuber & Blogger',
  //   msg:{
  //like: 60.4k,
  //comment:20k,
  //share: 12.4k,
  // }
  //]
  return (
    <>
      <div className="App">
        <div className='container d-flex flex-wrap justify-content--xxl-evenly'>
          <Userprofile
            title="CodingLab" desc="Youtuber & Blogger" />
          <Userprofile
            title="CodingLab" desc="Youtuber & Blogger" />
          <Userprofile
            title="CodingLab" desc="Youtuber & Blogger" />
          <Userprofile
            title="CodingLab" desc="Youtuber & Blogger" />
          <Userprofile
            title="CodingLab" desc="Youtuber & Blogger" />
          <Userprofile
            title="CodingLab" desc="Youtuber & Blogger" />






        </div>


        {/* <Count /> */}
        {/* <Rct title="This is a react component" />
        <Counter /> */}
        {/* <Typetext /> */}
        {/* <Funcomp name="Sintu" />
        <Funcomp name="Rohit" />
        <Funcomp name="Shubam" />
        <Funcomp name="Rahul" /> */}
        {/* <Funcomp name="Rahul" sub="BCA" age={20} goal='dev' /> */}
        {/* Use without data object */}
        {/* <Funcomp /> */}
        {/* Use  data object with props */}
        {/* <Funcomp data={data} /> */}
        {/* <Greet /> */}
        {/* <Welcome /> */}
      </div>

    </>
  );
}

export default App;
