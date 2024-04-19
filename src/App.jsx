import React from "react"
import { useTranslation } from "react-i18next"

function App() {
const {t,i18n} = useTranslation();
const laungages = localStorage.getItem('i18nextLng')
const handleChange = (event) =>{
  const selectedLaungage = event.target.value;
  i18n.changeLanguage(selectedLaungage);
}

const Data = [
  {
    savol: t('savol1.savol'),
    javob:t('savol1.javob')
  },
  {
    savol:t('savol2.savol'),
    javob:t('savol2.javob')
  }
]

  return (
    <>
    <div className="container">
     <h1>Tilni o'zgartirish</h1>
     <select name="Lng" id="lng" onChange={handleChange} value={laungages}>
      <option value="uz">Uzbek</option>
      <option value="en">English</option>
      <option value="ru">Russian</option>
     </select>
     <p>{t('olma')}</p>
     <p>{t('anor')}</p>
     <h3>Savollar</h3>
     {
      Data.map((item,index)=>(
        <div key={index}>
          <h4>{item.savol}</h4>
          <h4>{item.javob}</h4>
        </div>
      ))
     }
    </div>
    </>
  )
}

export default App
