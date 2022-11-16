import Navbar from '../components/Navbar';
import imgWedding from '../image/wedding.jpg';

function Home() {
    return(
        <>
            <Navbar/>
            <div className=''>
                <img src={imgWedding} class="imgWedding" alt="imgWedding"/>
                <div className='m-5'>
                    <div className='row d-flex justify-content-center align-items-center '>
                        <div className="col-7 p-5">
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac eros dictum, placerat risus ac, luctus urna. Proin vestibulum vulputate tellus eu hendrerit. Nam nec pellentesque justo, sed malesuada tortor.</p>
                        </div>
                        <div className='col-5 p-5'>
                            <div class="ratio video">
                                <iframe src="https://www.youtube.com/embed/Jxj6DZJXGmQ" title="ตกหลุมรักซ้ำๆ (repeat) - MEAN [Lyric Visualizer]" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-5 d-flex justify-content-evenly'>
                    <div class="cardTheme card0 shadow">
                        <div class="borderCard d-flex align-items-start flex-column m-3">
                            <div className='nameTheme mb-auto m-2 rounded-4 px-4'>
                                <h5 className='text-light'>ทะเล</h5>
                            </div>
                            <div class="text-light m-3">
                                Location
                            </div>
                        </div>
                    </div>
                    <div class="cardTheme card1 shadow">
                        <div class="borderCard d-flex align-items-start flex-column m-3">
                            <div className='nameTheme mb-auto m-2 rounded-4 px-4'>
                                <h5 className='text-light'>โรงแรม</h5>
                            </div>
                            <div class="text-light m-3">
                                Location
                            </div>
                        </div>
                    </div>
                    <div class="cardTheme card2 shadow">
                        <div class="borderCard d-flex align-items-start flex-column m-3">
                            <div className='nameTheme mb-auto m-2 rounded-4 px-4'>
                                <h5 className='text-light'>ภูเขา</h5>
                            </div>
                            <div class="text-light m-3">
                                Location
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    );
    
};
export default Home;
