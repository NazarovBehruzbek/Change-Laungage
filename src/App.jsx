import React from "react"
import { useTranslation } from "react-i18next"
function App() {
const {t,i18n} = useTranslation();
const selectedLng = localStorage.getItem('i18nextLng');
const handleChange = (event) =>{
  const selectLaungage = event.target.value;
  i18n.changeLanguage(selectLaungage);
}

const Data = [
  {
    savol: t('savol1.savol'),
    javob: t('savol1.javob')
  },
  {
    savol: t('savol2.savol'),
    javob: t('savol2.javob')
  }
]

  return (
    <>
    <div className="container">
     <h1>Til o'zgartirish</h1>
     <select name="Laungage" id="laungage" onChange={handleChange} value={selectedLng}>
      <option value="uz">Uzbek</option>
      <option value="en">English</option>
      <option value="ru">Russian</option>
     </select>
     <p>{t('olma')}</p>
     <p>{t('anor')}</p>

     {
      Data.map((item,index)=>(
       <div key={index}>
        <h2>{item.savol}</h2>
        <h3>{item.javob}</h3>
       </div>
      ))
     }
    </div>
    </>
  )
}

export default App
