import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import Login_Singup from '../Login_registions/LoginReg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Mainbar = () => {
    const { onSend, recentPrompt, input, setInput, loading, showResult, resultData } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/login') {
        return <Login_Singup />;
    }



    return (
        <div className='main'>
            <div className="nev">
                <p>Gemini</p>
                {localStorage.getItem('auth-token') ? <button className='loginbtn' onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> : <Link to="/login"><button className='loginbtn' >Login</button></Link>}
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="great">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>suggest beautful place to see on an upcomping read trip</p>
                                <img src={assets.compass_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept:urban planning</p>
                                <img src={assets.bulb_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bouding activity for our work retreat</p>
                                <img src={assets.message_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Imporve the readablity of the following code</p>
                                <img src={assets.code_icon} alt='' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt='' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt='' />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a Prompt' />
                        <div>
                            <img src={assets.gallery_icon} alt='' />
                            <img src={assets.mic_icon} alt='' />
                            {input ? <img onClick={() => onSend()} src={assets.send_icon} alt='' /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages</p>
                </div>
            </div>
        </div>
    );
}

export default Mainbar;
