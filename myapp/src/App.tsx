import CustomizedTimeline from './components/CustomizedTimeline';
import DrawerAppBar from './components/DrawerAppBar';
import TwoSections from './components/TwoSections';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <DrawerAppBar />
      <TwoSections />

      <div style={{ padding: '20px', textAlign:'center' }}>
        <h1>Our History</h1>
        <CustomizedTimeline />
      </div>
       <Footer/>

    </>
  );
}

export default App;
