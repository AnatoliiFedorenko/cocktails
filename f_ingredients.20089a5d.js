!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequiredd77;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequiredd77=i),i("iE7OH").register(JSON.parse('{"jte2R":"f_ingredients.20089a5d.js","JQ8i3":"sprite.3f5ac9d6.svg","kBqre":"f_ingredients.de08dfce.js"}'));var a,o=i("e3qpK"),s=i("fi488");a=i("aNJCr").getBundleURL("jte2R")+i("iE7OH").resolve("JQ8i3");var l=i("g4tMw"),d=i("fmC3e"),f=i("35hiA"),c=i("1dj5Q"),g=i("lnx82"),u=i("5M7hj");const p=JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[];function h(t=[]){const n=t.map((({strIngredient:t,strType:n})=>`<li class="ingredients-card">\n          <h3 class="ingredients__name">${t}</h3>\n          <h5 class="ingredients__type">${n||"no info"}</h5>\n          <div class="ingredients-card__options">\n            <button class="button-learn_more" data-name="${t}">Learn more</button>\n            <button class="button-remove" data-fav="${t}">\n              Remove\n              <svg class="heart-icon" width="18" height="18">\n                <use href="${e(a)}#icon-heart_full" ></use>\n              </svg>\n            </button>\n          </div>\n        </li>`)).join("");g.refIngrList.innerHTML=n}function _(){g.refIngrList.innerHTML=u.errorListFavCocktail}function m(){if(!(JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[]).length)return _()}g.refFormSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;const n=p.filter((e=>e.strIngredient.toLowerCase().includes(t.toLowerCase())));if(g.refFormSearch.reset(),!n.length)return g.refIngrList.innerHTML=l.notFound;h(n)})),g.refIngrList.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;e.target.dataset.name&&(0,f.searchIngrByName)(e.target.dataset.name);e.target.dataset.fav&&(function(e){const t=JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[];for(let n=0;n<t.length;n++)if(t[n].strIngredient===e)return t.splice(n,1),localStorage.setItem(s.FAV_INGREDIENTS,JSON.stringify(t)),void m()}(e.target.dataset.fav),e.target.parentNode.parentNode.remove(),function(){const e=JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[];(0,c.initPagination)(e,h)}())})),(0,o.headerInit)(),(0,d.themeSwitcher)(),p.length?(0,c.initPagination)(p,h):_()}();
//# sourceMappingURL=f_ingredients.20089a5d.js.map