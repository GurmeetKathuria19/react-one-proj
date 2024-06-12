import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube , AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
        <div className='home' id="home">
            <main>
                <h1>TechStar</h1>
                <p>Solution to All Your Problems..</p>
            </main>
        </div>

        <div className='home2' >
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                We are your one and only solution to the tech problems you face every day. 
                We are leading tech company whose aim is to increase the problem solving ability in children.
                </p>
            </div>
        </div>


        <div className="home3" id="about">
            <div>
                <h1>Who we are??</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum ea architecto quia corporis vero in vel quos consequatur impedit temporibus totam inventore deleniti, distinctio voluptate? Dolore delectus incidunt doloremque blanditiis, ut voluptas ad id dignissimos sequi iure excepturi facilis repellat inventore architecto fuga dicta quibusdam aperiam enim quos quia ratione. Sint placeat, perspiciatis, quisquam laudantium quod, architecto quaerat maiores magni earum quia minus et? Qui debitis nostrum facilis impedit! Autem commodi suscipit eos dignissimos eligendi numquam eveniet error explicabo est nisi, perspiciatis ipsa, ipsum accusamus cum nostrum ullam nulla laborum minima? Assumenda dicta nihil architecto vitae quas, obcaecati dolore eligendi, ipsam id illo accusamus neque nemo nesciunt, itaque consequatur commodi. Nemo maiores ab aperiam dolorem officia rerum animi sed quibusdam explicabo ex distinctio nam labore quae repellendus hic enim nesciunt, vero sit est impedit eveniet perspiciatis quaerat nostrum optio. Sapiente aperiam sunt quidem, nemo maiores eos atque facilis doloribus incidunt reprehenderit. Similique laborum error nemo maiores iste debitis ex ipsum distinctio, reprehenderit cumque reiciendis. Sed fugit nulla reprehenderit labore repellat nesciunt dolorem assumenda temporibus laboriosam possimus quaerat cumque esse eos suscipit distinctio magnam quas, quae sequi perferendis sit deserunt deleniti nam? Repellat esse illo minus maiores qui nobis aspernatur.</p>
            </div>
        </div>

        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                            animationDelay: "0.3s" ,
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                    </div>

                    <div style={{
                            animationDelay : "0.5s" ,
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                    </div>

                    <div style={{
                            animationDelay : "0.7s" ,
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                    </div>

                    <div style={{
                            animationDelay : "1s" ,
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                    </div>
                    
                        
                        
                </article>
            </div>
        </div>
        

    </>
  )
}

export default Home