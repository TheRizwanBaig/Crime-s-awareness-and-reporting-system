import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Link as RouterLink } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ListIcon from '@material-ui/icons/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Crimes.css';

const Crimes=() => {

  const handleChange = (e) => {
    
  };

  const handleSubmit = () => {
   
  };

 

  return (
    <div className="Crimes">
     
      
      <Button 
        style={{
          color: "black", 
          fontWeight: "bolder"}}
        size="large" 
        component={RouterLink} to="Crimeslist">
         <ListIcon />Crimes list
      </Button>
      
      <Button
        style={{
          color: "black", 
          fontWeight: "bolder"}} 
        size="large" 
        component={RouterLink} to="Missingperlist">
         <ListIcon />Missing persons list
      </Button>
      
      <Button
        style={{
          color: "black", 
          fontWeight: "bolder"}} 
        size="large" 
        component={RouterLink} to="Stolenmobileslist">
         <ListIcon />Snatched mobiles list
      </Button>
      <br/>
      <br/>
      
      <div>
        <div className="container">

          <div className="row">
            <div className="col-12 pb-5">

              <section className="row">

                <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                  <div id="featured" className="carousel slide carousel" data-ride="carousel">

                    <ol className="carousel-indicators top-indicator">
                      <li data-target="#featured" data-slide-to="0" className="active"></li>
                      <li data-target="#featured" data-slide-to="1"></li>
                      <li data-target="#featured" data-slide-to="2"></li>
                      <li data-target="#featured" data-slide-to="3"></li>
                    </ol>


                    <div className="carousel-inner">

                      <div className="carousel-item active">
                        <div className="card border-0 rounded-0 text-light overflow zoom">
                          <div className="position-relative">

                            <div className="ratio_left-cover-1 image-wrapper">
                              <a href="https://www.urdunews.com/node/634771" target="new tab">
                                <img className="img-fluid w-100"
                                  src="https://www.urdunews.com/sites/default/files/styles/660_scale/public/2022/01/11/1341866-1536766386.jpg?itok=5Pbl0Jls"
                                  alt="news" />
                              </a>
                            </div>
                            <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                              <a href="https://www.urdunews.com/node/634771" target="new tab">
                                <h2 className="h3 post-title text-white my-1">آرٹیفیشل انٹیلی جنس، لاہور میں قوانین کی خلاف ورزی پر کارروائی کیسے ہوتی ہے؟</h2>
                              </a>

                              <div className="news-meta">
                                <span className="news-author">by <a className="text-white font-weight-bold" href="https://www.urdunews.com/node/634771">urdu news</a></span>
                                <span className="news-date"> jan 12, 2022</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="card border-0 rounded-0 text-light overflow zoom">
                          <div className="position-relative">

                            <div className="ratio_left-cover-1 image-wrapper">
                              <a href="https://www.urdunews.com/node/634951" target="new tab">
                                <img className="img-fluid w-100"
                                  src="https://www.urdunews.com/sites/default/files/styles/660_scale/public/2022/01/12/1342421-1237835606.png?itok=7wuf9GP_.png"
                                  alt="news" />
                              </a>
                            </div>
                            <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                              <a href="https://www.urdunews.com/node/634951" target="new tab">
                                <h2 className="h3 post-title text-white my-1">وقت آ گیا ہے کہ حکومت کے خلاف تمام آئینی، قانونی ہتھیار استعمال کیے جائیں: شہباز شریف</h2>
                              </a>

                              <div className="news-meta">
                                <span className="news-author">by <a className="text-white font-weight-bold" href="https://www.urdunews.com/node/634951" target="new tab">urdu news</a></span>
                                <span className="news-date"> jan 12, 2022</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="carousel-item">
                        <div className="card border-0 rounded-0 text-light overflow zoom">
                          <div className="position-relative">

                            <div className="ratio_left-cover-1 image-wrapper">
                              <a href="https://www.urdunews.com/node/634926" target="new tab">
                                <img className="img-fluid w-100"
                                  src="https://www.thenews.com.pk/assets/uploads/updates/2022-01-12/924652_6719215_Shafqat-APP_updates.jpg"
                                  alt="news" />
                              </a>
                            </div>
                            <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                              <a href="https://www.thenews.com.pk/latest/924652-will-schools-be-closed-shafqat-mehmood-to-chair-education-ministers-meeting-to-decide" target="new tab">
                                <h2 className="h3 post-title text-white my-1">Will schools be closed? Shafqat Mehmood to chair education ministers' meeting to decide‘</h2>
                              </a>

                              <div className="news-meta">
                                <span className="news-author">by <a className="text-white font-weight-bold" href="https://www.thenews.com.pk/latest/924652-will-schools-be-closed-shafqat-mehmood-to-chair-education-ministers-meeting-to-decide" target="new tab">urdu news</a></span>
                                <span className="news-date"> jan 12, 2022</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="carousel-item">
                        <div className="card border-0 rounded-0 text-light overflow zoom">
                          <div className="position-relative">

                            <div className="ratio_left-cover-1 image-wrapper">
                              <a href="#">
                                <img className="img-fluid w-100"
                                  src="https://www.urdunews.com/sites/default/files/styles/660_scale/public/2021/12/09/1312681-17792432.jpg?itok=G5segliK"
                                  alt="news" />
                              </a>
                            </div>
                            <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                              <a href="https://www.urdunews.com/node/625691" target="new tab">
                                <h2 className="h3 post-title text-white my-1">شاہد آفریدی کوئٹہ گلیڈی ایٹرز میں شامل، آخری پی ایس ایل کھیلیں گے</h2>
                              </a>

                              <div className="news-meta">
                                <span className="news-author">by <a className="text-white font-weight-bold" href="https://www.urdunews.com/node/625691">urdu news</a></span>
                                <span className="news-date"> jan 12, 2022</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>


                  <a className="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#featured" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                  <div className="row">

                    <div className="col-6 pb-1 pt-0 pr-1">
                      <div className="card border-0 rounded-0 text-white overflow zoom">
                        <div className="position-relative">

                          <div className="ratio_right-cover-2 image-wrapper">
                            <a href="#">
                              <img className="img-fluid"
                                src="https://www.urdunews.com/sites/default/files/styles/660_scale/public/2022/01/08/1339256-605520547.jpg?itok=E-jV-WDH"
                                alt="news" />
                            </a>
                          </div>
                          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                            <a className="p-1 badge badge-primary rounded-0" href="https://www.urdunews.com/node/633921" target="news tab">Lifestyle</a>


                            <a href="https://www.urdunews.com/node/633921" target="news tab">
                              <h2 className="h5 text-white my-1">عالمی وبا میں گھر سے کام کے ساتھ آن لائن ورزش میں بھی تیزی</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-6 pb-1 pl-1 pt-0">
                      <div className="card border-0 rounded-0 text-white overflow zoom">
                        <div className="position-relative">

                          <div className="ratio_right-cover-2 image-wrapper">
                            <a href="http://blog.carfirst.com/upcoming-peugeot-3008-along-with-2008-spotted-karachi/" target="new tab">
                              <img className="img-fluid"
                                src="http://blog.carfirst.com/wp-content/uploads/2022/01/Peugeot-3008-Karachi-1.jpg"
                                alt="news" />
                            </a>
                          </div>
                          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                            <a className="p-1 badge badge-primary rounded-0" href="http://blog.carfirst.com/upcoming-peugeot-3008-along-with-2008-spotted-karachi/" target="new tab"> Cars</a>

                            <a href="http://blog.carfirst.com/upcoming-peugeot-3008-along-with-2008-spotted-karachi/">
                              <h2 className="h5 text-white my-1">Upcoming Peugeot 3008 along with 2008 spotted in Karachi</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-6 pb-1 pr-1 pt-1">
                      <div className="card border-0 rounded-0 text-white overflow zoom">
                        <div className="position-relative">

                          <div className="ratio_right-cover-2 image-wrapper">
                            <a href="https://www.urdunews.com/node/634886" target="new tab">
                              <img className="img-fluid"
                                src="https://c.cricketpakistan.com.pk/images/posts/cover_1641876119Untitled-1.jpg"
                                alt="news" />
                            </a>
                          </div>
                          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                            <a className="p-1 badge badge-primary rounded-0" href="https://cricketpakistan.com.pk/en/news/detail/ramiz-propose-annual-quad-series-bid-revive-indo-pak-rivalry">Sports</a>

                            <a href="https://cricketpakistan.com.pk/en/news/detail/ramiz-propose-annual-quad-series-bid-revive-indo-pak-rivalry" target="new tab">
                              <h2 className="h5 text-white my-1"> Ramiz Raja to propose annual quad-series in bid to revive Indo-Pak rivalry</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-6 pb-1 pl-1 pt-1">
                      <div className="card border-0 rounded-0 text-white overflow zoom">
                        <div className="position-relative">

                          <div className="ratio_right-cover-2 image-wrapper">
                            <a href="#">
                              <img className="img-fluid"
                                src="https://photo-cdn.urdupoint.com/show_img_new/technology/tech_main_article_images/2021/670x420/pic_64b00_1624664669.jpg._3"
                                alt="news" />
                            </a>
                          </div>
                          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                            <a className="p-1 badge badge-primary rounded-0" href="https://www.urdupoint.com/technology/detail/news/windows-11-announced-with-android-apps-support-7343.html" target="new tab">Technology</a>

                            <a href="https://www.urdupoint.com/technology/detail/news/windows-11-announced-with-android-apps-support-7343.html" target="new tab">
                              <h2 className="h5 text-white my-1">مائیکروسافٹ نے اینڈروئیڈ ایپس سپورٹ کے ساتھ ونڈوز 11 پیش کر دی</h2>
                            </a>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                </div>

              </section>
             
            </div>
            
          </div>
        </div>
      </div>
    </div>
               
  )
}
  

export default Crimes;