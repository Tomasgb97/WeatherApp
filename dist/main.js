(()=>{"use strict";const e=document.getElementById("body");let t;const n=document.getElementById("eye"),d=document.getElementById("searchBar");n.addEventListener("click",(function(){n.classList.add("eyes"),(async e=>{try{const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&APPID=2046cfc80254e13e58679b4f5dea31d1`,{mode:"cors"});if(404!==t.status&&400!==t.status)return t.json();alert("Please look for a valid place")}catch(e){console.log(e)}})(t).then((function(t){400!=t.cod&&((t=>{if(document.getElementById("maincontainer"))document.getElementById("weatherImg").style.backgroundImage=`url('../src/images/${t.weather[0].description}.png')`,document.getElementById("nameText").textContent=`${t.name}`,document.getElementById("weatherIs").textContent=`${t.weather[0].description}`.toUpperCase(),document.getElementById("maxTemp").textContent=`Max Temperature: ${parseInt(t.main.temp_max)} C`,document.getElementById("minTemp").textContent=`Min Temperature: ${parseInt(t.main.temp_min)} C`,document.getElementById("sensTemp").textContent=`Thermal sensation: ${parseInt(t.main.feels_like)} C`,document.getElementById("windSpeed").textContent=`Speed: ${t.wind.speed} KM/H`,document.getElementById("windDirec").textContent=` Direction: ${t.wind.deg} degrees`,document.getElementById("cloudiness").textContent=`Cloudiness: ${t.clouds.all} %`,document.getElementById("humidity").textContent=`Humidity: ${t.main.humidity} %`;else{const n=document.createElement("div");n.setAttribute("id","maincontainer"),e.appendChild(n);const d=document.createElement("div");d.setAttribute("id","containerUpper"),n.appendChild(d);const i=document.createElement("div");i.setAttribute("id","containerLower"),n.appendChild(i);const s=document.createElement("div");s.setAttribute("id","locationDivName");const a=document.createElement("h1");a.setAttribute("id","nameText"),a.textContent=`${t.name}`,s.appendChild(a),d.appendChild(s);const c=document.createElement("div");c.setAttribute("id","upperSub1"),d.appendChild(c);const o=document.createElement("div");o.style.backgroundImage=`url('../src/images/${t.weather[0].description}.png')`,o.setAttribute("id","weatherImg"),c.appendChild(o);const m=document.createElement("h2");m.setAttribute("id","weatherIs"),m.textContent=`${t.weather[0].description}`.toUpperCase(),c.appendChild(m);const r=document.createElement("div");r.setAttribute("id","lowerSub1"),r.classList.add("lowersub");const l=document.createElement("div");l.setAttribute("id","lowerSub2"),l.classList.add("lowersub");const u=document.createElement("div");u.setAttribute("id","lowerSub3"),u.classList.add("lowersub"),i.append(r,l,u);const p=document.createElement("div");p.setAttribute("id","thermometer"),p.classList.add("lowerHeaders");const C=document.createElement("img");C.setAttribute("src","../src/images/thermometer.png"),C.setAttribute("id","thermometerImg"),C.classList.add("lowerHeadersImg"),p.appendChild(C),r.append(p);const h=document.createElement("div");h.setAttribute("id","lowerSub1ListDiv"),h.classList.add("lowerdivs"),r.appendChild(h);const E=document.createElement("h3");E.textContent="Temperature",h.appendChild(E);const g=document.createElement("ul");g.classList.add("lists");const b=document.createElement("li"),w=document.createElement("li"),I=document.createElement("li");b.setAttribute("id","maxTemp"),w.setAttribute("id","minTemp"),I.setAttribute("id","sensTemp"),b.textContent=`Max Temperature: ${parseInt(t.main.temp_max)} C`,w.textContent=`Min Temperature: ${parseInt(t.main.temp_min)} C`,I.textContent=`Thermal sensation: ${parseInt(t.main.feels_like)} C`,g.append(b,w,I),h.appendChild(g);const A=document.createElement("div");A.setAttribute("id","windDiv"),A.classList.add("lowerHeaders");const v=document.createElement("img");v.setAttribute("src","../src/images/wind.png"),v.setAttribute("id","windImg"),v.classList.add("lowerHeadersImg"),A.appendChild(v),l.append(A);const x=document.createElement("div");x.setAttribute("id","lowerSub2ListDiv"),x.classList.add("lowerdivs"),l.appendChild(x);const y=document.createElement("h3");y.textContent="Winds",x.appendChild(y);const L=document.createElement("ul");L.classList.add("lists");const $=document.createElement("li"),B=document.createElement("li");$.setAttribute("id","windSpeed"),B.setAttribute("id","windDirec"),$.textContent=`Speed: ${t.wind.speed} KM/H`,B.textContent=` Direction: ${t.wind.deg} degrees`,L.append($,B),x.appendChild(L);const T=document.createElement("div");T.setAttribute("id","SunsetDiv"),T.classList.add("lowerHeaders");const f=document.createElement("img");f.setAttribute("src","../src/images/ambient.png"),f.setAttribute("id","ambientImg"),f.classList.add("lowerHeadersImg"),T.appendChild(f),u.append(T);const S=document.createElement("div");S.setAttribute("id","lowerSub3ListDiv"),S.classList.add("lowerdivs"),u.appendChild(S);const D=document.createElement("h3");D.textContent="Ambient",S.appendChild(D);const H=document.createElement("ul");H.classList.add("lists");const k=document.createElement("li"),M=document.createElement("li");k.setAttribute("id","cloudiness"),M.setAttribute("id","humidity"),k.textContent=`Cloudiness: ${t.clouds.all} %`,M.textContent=`Humidity: ${t.main.humidity} %`,H.append(k,M),S.appendChild(H)}})(t),console.log(t))})).catch((e=>console.log(e))),d.value=""})),n.addEventListener("animationend",(function(){n.classList.remove("eyes"),console.log("animation ended")})),d.addEventListener("input",(function(){t=d.value}))})();