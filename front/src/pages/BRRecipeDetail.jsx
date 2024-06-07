import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/event/brrecipe.css'
import { Navbar } from '../components/MainComponents'


export default function BRRecipeDetail(){
    const eventnavlist = [
        {name:"이벤트", path:"/play/event"},
        {name:"BR 레시피", path:"/play/brreipe/all"}
    ]
    return(
        <div id='recipe_detail'>
            <div className='content'>
                <ul className='navbarlist'>
                    {eventnavlist.map((item)=>(
                        <li className='navbarrecipe'>
                                <Navbar
                                    title={item.name}
                                    path={item.path}/>
                        </li>
                    ))}
                </ul>
                <h1 className='recipedetail_bigtitle'>BR Recipe</h1>
                <h2 className='recipedetail_biginfo'>다양한 전문가들이 제안하는 배라 행복 레시피</h2>
                <hr/>
                <p className='recipedetail_category'>바리스타 & 바텐더</p>
                <h3 className='recipedetail_eng'>Chocolate Mousse Martini</h3>
                <h3 className='recipedetail_ko'>초콜릿 무스 마티니</h3>
                <p className='recipedetail_by'>Recipe by 김봉하 바텐더</p>
                <p className='recipedetail_reason'>가족 모두가 '베라 러버'라서 평소에 배스킨라빈스 아이스크림을 종종 즐기는 편이에요. 다양한 맛 중에서도 제가 가장 좋아하는 초콜릿 무스를 마티니 레시피에 접목시켜 봤어요. 깊은 달콤함이 감도는 초콜릿과 향긋한 커피가 조화를 이루는 마티니를 음미해보세요</p>
                <img className="recipedetail_mainimg" src="images/brrecipe/mainimg/chocolate_martini_main.png" alt="" />
                <div className='recipedetail_iceinfo'>
                    <img className='recipedetail_smallimg' src="images/brrecipe/iceimg/chocolate_martini_ice1.png" alt="" />
                    <div className='iceinfos'>
                        <p className='iceinfo_title'>초콜릿 무스</p>
                        <p>초콜릿 칩을 곁들여 더욱 진한 초콜릿 무스.</p>
                    </div>
                </div>
                <div className='recipedetail_ingredient'>
                    <p className='recipedetail_ingre_title'>재료준비(1인분)</p>
                            <ul className='ingredientsList'>
                                <li className='ingredient'>럼</li>
                                <li className='ingredient'>에스프레소 2샷</li>
                                <li className='ingredient'>설탕시럽</li>
                                <li className='ingredient'>초콜릿 무스</li>
                            </ul>
                </div>
                <div className='recipedetail_make'>
                    <p className='recipe_title'>how to make</p>
                        <ul className='recipeLists'>
                            <li className='recipe_content'>1. 차갑게 보관한 어쩌구</li>
                            <li className='recipe_content'>2. 차갑게 보관한 어쩌구</li>
                            <li className='recipe_content'>3. 차갑게 보관한 어쩌구</li>
                            <li className='recipe_content'>4. 차갑게 보관한 어쩌구</li>
                            </ul>
                </div>
            </div>
        </div>
    )
};