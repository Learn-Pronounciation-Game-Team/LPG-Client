import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/auth'

//Assets
import gameLogo from '../assets/gameLogo.png'

export default function PreparationPage() {
    const history = useHistory()
    const [ name, setName ] = useState("")
    const [ diff, setDiff ] = useState("")
    const [ lang, setLang ] = useState("")
    const { setAuthTokens } = useAuth()

    function jumpToGame() {
      let appear = diff === 'Easy' ? 3 : diff === 'Medium' ? 5 : 7
      let timer = diff === 'Easy' ? 20 : diff === 'Medium' ? 17 : 15
      setAuthTokens(true)
      history.push('/gameplay', { diff, name, appear, timer, lang })
    }

    return (
      <div className="background py-10">
        <img className=" xl:w-3/12 lg:w-6/12 w-6/12 h-auto py-6" src={gameLogo} alt="LPG Icon" />
        <h1 className="sm:text-3xl text-center text-1xl">Who are you?</h1>
        <div className="flex flex-col items-center justify-center text-center w-10/12 sm:w-6/12">
          <input
            type="text"
            className="text-center my-5 bg-transparent border-0 border-b-2 sm:text-base text-xs border-yellow-200 w-full"
            placeholder="Type your name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="mb-2">--Difficulty--</p>
          <div className="flex flex-wrap w-full justify-around mb-2">
            <div>
              <label className="flex items-center" htmlFor="easy">
                <input type="radio" name="difficulty" id="easy" value="Easy" className="bg-transparent mr-2 border-yellow-200" checked={diff === 'Easy'} onChange={(e) => setDiff(e.target.value)}/>
                Easy
              </label>
            </div>
            <div>
              <label className="flex items-center" htmlFor="medium">
                <input type="radio" name="difficulty" id="medium" value="Medium" className="bg-transparent mr-2 border-yellow-200" checked={diff === 'Medium'} onChange={(e) => setDiff(e.target.value)}/>
                Medium
              </label>
            </div>
            <div>
              <label className="flex items-center" htmlFor="hard">
                <input type="radio" name="difficulty" id="hard" value="Hard" className="bg-transparent mr-2 border-yellow-200" checked={diff === 'Hard'} onChange={(e) => setDiff(e.target.value)}/>
                Hard
              </label>
            </div>
          </div>
          <p className="mb-2">--Language--</p>
          <div className="flex sm:flex-wrap flex-nowrap flex-col sm:flex-row w-full sm:justify-around items-center mb-2">
            <div>
              <label className="flex items-center" htmlFor="english">
                <input type="radio" name="language" id="english" value="English" className="bg-transparent mr-2 border-yellow-200" checked={lang === 'English'} onChange={(e) => setLang(e.target.value)}/>
                English
              </label>
            </div>
            <div>
              <label className="flex items-center" htmlFor="french">
                <input type="radio" name="language" id="french" value="French" className="bg-transparent mr-2 border-yellow-200" checked={lang === 'French'} onChange={(e) => setLang(e.target.value)}/>
                French
              </label>
            </div>
            <div>
              <label className="flex items-center" htmlFor="spanish">
                <input type="radio" name="language" id="spanish" value="Spanish" className="bg-transparent mr-2 border-yellow-200" checked={lang === 'Spanish'} onChange={(e) => setLang(e.target.value)}/>
                Spanish
              </label>
            </div>
            <div>
              <label className="flex items-center" htmlFor="italian">
                <input type="radio" name="language" id="italian" value="Italian" className="bg-transparent mr-2 border-yellow-200" checked={lang === 'Italian'} onChange={(e) => setLang(e.target.value)}/>
                Italian
              </label>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row py-3">
            <button
              className="button order-1"
              onClick={() => history.push('/')}
            >Back</button>
            <button
              className="button disabled:opacity-50 sm:order-2"
              disabled={name === '' || name.trim() === '' || lang === '' || name.length > 10 || diff === '' ? true : false}
              onClick={jumpToGame}
            >Next</button>
          </div>
        </div>
      </div>
    )
}