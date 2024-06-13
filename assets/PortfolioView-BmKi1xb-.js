import{c as j,o as i,a as r,b as e,t as h,F as g,r as b,d as q,e as P,f as z,n as y,g as t,h as a,i as w}from"./index-DMg4dsoo.js";const C={class:"bg-zinc-700 p-4 flex flex-col justify-center gap-4 rounded-lg"},A=["src","alt"],L={class:"flex items-center justify-center"},k={class:"font-semibold text-zinc-400"},n={__name:"ImagesContainer",props:["image"],emits:["onClickImage"],setup(v,{emit:o}){const u=v,m=o,c=j(()=>"/mougammadaly-but-2-stage"+u.image.path);return(s,f)=>(i(),r("div",C,[e("img",{onClick:f[0]||(f[0]=d=>m("onClickImage",c.value,u.image.alt)),class:"rounded-lg hover:cursor-pointer",src:c.value,alt:u.image.alt},null,8,A),e("div",L,[e("p",k,h(u.image.caption),1)])]))}},I={class:"text-left"},_={__name:"PrettyTable",props:["headers","rows"],setup(v){const o=v;return(u,m)=>(i(),r("table",I,[e("tr",null,[(i(!0),r(g,null,b(o.headers,(c,s)=>(i(),r("td",{class:"bg-black text-wrap px-2 border-zinc-500 border-2",key:s},h(c.value),1))),128))]),(i(!0),r(g,null,b(o.rows,(c,s)=>(i(),r("tr",{key:s},[(i(!0),r(g,null,b(o.headers,(f,d)=>(i(),r("td",{class:"p-2 border-zinc-500 border-2",key:d},h(c[f.label]),1))),128))]))),128))]))}},O={class:"relative flex flex-col items-center justify-center gap-4 bg-zinc-900"},S=e("div",{class:"flex flex-col justify-center items-center w-[90%] rounded-lg gap-2"},[e("img",{class:"max-w-[90%] max-h-[90%] rounded-lg",id:"modal-image",src:"",alt:""}),e("span",{class:"text-white font-semibold"},"Cliquer n'importe où pour sortir de cette affichage")],-1),E=[S],F={class:"relative flex flex-col items-center justify-center my-auto h-screen gap-10"},G=e("h1",{class:"flex flex-col items-center justify-center m-0 text-zinc-300"},[e("span",{class:"text-8xl font-bold m-0 text-cyan-500"},"Portfolio"),e("span",{class:"text-3xl font-bold m-0"},"Stage BUT2 Informatique"),e("span",{class:"text-2xl font-semibold text-zinc-500 m-0"},"par Jessy MOUGAMMADALY")],-1),D={class:"flex flex-row items-center justify-center gap-2 flex-wrap"},U=["href"],M={class:"flex flex-row items-center justify-center gap-2 flex-wrap"},T=["href"],J={class:"flex flex-col gap-24 md:px-24 lg:px-72 px-16 text-justify text-zinc-300 text-lg"},B=e("div",{class:"flex flex-col gap-4"},[e("h2",{class:"text-4xl font-bold w-full bg-cyan-600 text-white min-h-16 rounded-lg flex items-center px-4",id:"presentation-stage"}," Présentation du stage "),e("p",null,[a(" Durant la deuxième année de Bachelor Universitaire de Technologie (BUT), nous avons l'opportunité de réaliser un stage d'une durée pouvant variée de 8 à 12 semaines. Le but de ce stage est de mettre en pratique les connaissances acquises durant les 2 premières années du BUT dans le monde du travail, mais aussi et surtout de pouvoir gagner en expérience dans des domaines qui nous sont peut-être inédits."),e("br"),e("br"),a(" J'ai pour ma part décider d'effectuer mon stage à l'ESTA et plus spécifiquement au Digital Lab de l'ESTA. Durant ce stage, la mission qui m'a été confiée était de continuer le développement d'une application permettant d'analyser des pages web suivant différents critères regroupés en trois familles pour l'instant : l'Éco-conception, la Culturalization et le Search Engine Optimization (SEO). L'objectif de l'application est simple, il consiste à parcourir une liste définie de site web et d'analyser les critères voulus, permettant à l'utilisateur de récupèrer les valeurs des différents critères et de pouvoir les exploiter."),e("br"),e("br"),a(" Durant les premières semaines du stage, j'ai pu faire un constat assez alarmant, beaucoup de fonctionnalités de l'application actuelle n'étaient pas fiables et pouvaient aboutir à un échec complet de l'analyse des sites web. Après discussion avec mon tuteur de stage, il a été décidé de reprendre l'application depuis le début pour la restructurer, la fiabiliser et l'améliorer que ce soit dans l'expérience utilisateur que dans ses performances globales. ")])],-1),V={class:"flex flex-col gap-4"},H=e("h2",{class:"text-4xl font-bold w-full bg-cyan-600 text-white min-h-16 rounded-lg flex items-center px-4",id:"presentation-competences"}," Présentation des compétences ",-1),N=e("p",null,[a(" Dans le cadre du BUT, diverses compétences doivent être acquises chaque année par les étudiants de cette formation. Dans la suite de ce portfolio, nous allons aborder deux de ces compétences et les développer à travers ce qui a été effectué en stage."),e("br"),a(` Les compétences abordées seront la compétence 1, "Réaliser un développement d'application" et la compétence 2, "Optimiser des applications". Je vais rapidement résumer les attendus et les apprentissages critiques pour chacune de ces compétences. `)],-1),R=e("h3",{class:"text-2xl font-bold w-full bg-cyan-500 text-white min-h-12 rounded-lg flex items-center px-4"}," Compétence 1 - Réaliser un développement d'application ",-1),$=e("p",null,[a(" Cette compétence encadre la création d'une solution information pour un client en respectant l'ensemble de ses exigences. Il est nécessaire de faire les choix appropriés que ce soit technologiquement ou que ce soit dans la conception même de l'application(application de principes algorithmiques), mais il est aussi important d'assurer le bon fonctionnement de la solution et sa maintenabilité en fournissant une base de code qui peut évoluer, mais qui est aussi suffisamment documentée pour pouvoir être reprise par quelqu'un d'autre."),e("br"),e("br"),a("Voici un tableau récapitulant les apprentissages critiques (AC) de cette compétence. ")],-1),W=e("h3",{class:"text-2xl font-bold w-full bg-cyan-500 text-white min-h-12 rounded-lg flex items-center px-4"}," Compétence 2 - Optimiser des applications ",-1),Y=e("p",null,[a(" Cette compétence encadre l'optimisation des applications en fonction de critères spécifiques tels que le temps d'exécution, la précision, et la consommation de ressources,etc. Il devient nécessaire de formaliser des situations complexes et d'utiliser des structures de données et algorithmes usuels, mais il est aussi important de justifier et de valider les différentes solutions utilisées."),e("br"),e("br"),a("Voici un tableau récapitulant les apprentissages critiques (AC) de cette compétence. ")],-1),X={class:"flex flex-col gap-4"},Q=e("h2",{class:"text-4xl font-bold w-full bg-cyan-600 text-white min-h-16 rounded-lg flex items-center px-4",id:"competence1"}," Compétence 1 ",-1),K=e("p",null," Dans cette section, je vais aborder le travail réalisé et les éléments relatifs au développement d'une application. Tout d'abord avant de parler de ce que j'ai réalisé, je vais rapidement vous présenter l'état de l'application quand j'ai débuté le stage. ",-1),Z=e("h3",{class:"text-2xl font-bold w-full bg-cyan-500 text-white min-h-12 rounded-lg flex items-center px-4"}," Projet FuzzyGreen ",-1),ee=e("p",null,[a(" Quand je suis arrivé sur ce projet, il m'a d'abord été demandé d'effectuer un état des lieux du code, pour voir ce qui a été réalisé mais aussi de corriger les problèmes actuels du code notamment ce qui concernait l'export en fichier XLSX. Le premier constat que j'ai pu faire concernait la structure du projet, le dossier était mal ordonné, des éléments ne situaient pas aux bons endroits, mais ce n'était pas forcément quelque chose de problématique et qui ne nécessitait pas forcément de consacrer beaucoup de temps à corriger ce problème. Le véritable problème ne situait pas dans la structure du projet mais dans la structure même du code."),e("br"),e("br"),a(" Le projet FuzzyGreen consistait au début à l’analyse des critères d’éco-conception de différents sites web. Il était possible d’injecter une liste définie de sites webs et d’avoir un tableau comportant les valeurs des différents critères calculées pour chacun des sites. A partir des valeurs acquises, l’application appliquait de la logique floue quand c’était possible pour pouvoir comparer les différents sites entre eux en définissant des seuils permettant de savoir si pour chaque critère où la logique floue s’applique, la valeur est “Excellente”, “Bonne”, “Moyenne”, “Mauvaise”. ")],-1),se={class:"flex flex-row gap-4"},te=e("br",null,null,-1),ae={class:"flex flex-row gap-4"},ne=w('<p> Par la suite, il a été décidé lors du stage suivant d’ajouter les fonctionnalités liées à l’analyse de la culturalization, mais aussi à l’analyse du Search Engine Optimization (SEO) qui provenaient d’un projet précédent appelé CAWIS qui a servi à la thèse de M. SAGOT (mon tuteur de stage). Un premier problème est apparu à ce moment-là,le projet CAWIS a été réalisé avec Java et Swing, mais FuzzyGreen quant à lui a été réalisé en JavaScript avec NodeJS et Express, ce qui a mené à des erreurs implémentations et des “code smell”. L’ensemble du projet n’étant pas vraiment maintenable, avec une structure à revoir complètement et souffrant d’une mise à jour de l’ensemble de ses dépendances, j’ai décidé de reprendre le projet du début et de tout réimplémenter au fur et à mesure pour garder une structure de projet simple et efficace, permettant une plus grand maintenabilité et une modularité accrue (dans l’ancienne version, l’ajout d’un critère pouvait mener à casser l’application dans son entièreté.<br><br> On peut se pose la question de “Pourquoi est-ce que le projet FuzzyGreen a été réalisé en JS et NodeJS ?”, mais la raison est assez simple en soit, il était question du plus grand accessibilité de l’application auprès des différents utilisateurs (chercheurs, entreprises, etc.), et de pouvoir avoir une application web hébergée sur un serveur sans avoir à installer le programme sur les machines des utilisateurs.<br><br></p><h3 class="text-2xl font-bold w-full bg-cyan-500 text-white min-h-12 rounded-lg flex items-center px-4"> Projet HolisticAnalytica </h3><p> Pour la reprise du projet, j’ai décidé de respecter le choix des technologies de base pour garder cette volonté de faire une application web tout en gardant aussi en tête le futur et notamment les stagiaires qui me succéderont. J’ai donc commencé un nouveau projet structuré comme suit: un backend avec <a class="text-cyan-500 underline" href="https://nodejs.org/en">NodeJS</a> + <a class="text-cyan-500 underline" href="https://expressjs.com/fr/">Express</a> suivant la composition vue en cours (routers, controllers, middlewares,services) et un frontend avec NodeJS + <a class="text-cyan-500 underline" href="https://vuejs.org/">Vue3 (Vite)</a> + <a class="text-cyan-500 underline" href="https://tailwindcss.com/">TailwindCSS</a>.<br><br> La première étape à laquelle je me suis attelé a été de faire un meilleur découpage des processus de l’application pour pouvoir faire individuellement les différentes familles de critères, puis l’étape d’après a été de réimplémenter l’ensemble des critères présent dans l’ancienne version si cela était possible ce qui n’était pas le cas de plusieurs critères qui ont été écartés soit par manque de pertinence soit par problème dans la définition du critère et son calcul (dans ce cas, les critères seront ajoutés quand une solution sera trouvée).<br><br> Dans cette section nous allons plus nous centrer sur le fonctionnement de l’application avec la partie frontend et backend et montrer les différences de conception avec la précédente version. Le projet a aussi connu un changement de nom passant de FuzzyGreen à HolisticAnalytica pour moins se centrer sur l’aspect éco-conception et plus sur l’aspect analyse dans son ensemble.<br><br> Pour la conception de l’interface utilisateur, j’ai réalisé différents wireframes qui ont été validés par mon tuteur de stage et l’entreprise avec laquelle nous collaborons sur ce projet. </p>',3),ie={class:"flex flex-row gap-4"},re=e("br",null,null,-1),le={class:"flex flex-row gap-4"},oe=e("p",null,[a(" À partir de ces wireframes j'ai réalisé l'ensemble des pages de l'application dans sa forme actuelle."),e("br"),a(" J'ai tout d'abord créé la page d'accueil, qui ne comporte que le logo et deux boutons pour l'instant, le premier sert à se diriger vers la page pour lance une analyse, le deuxième sert à voir l'historique de l'ensemble des analyses. ")],-1),ue=e("p",null,` Lorsque l'on désire lancer une analyse on est redirigé vers la page suivante, les deux captures présententes l'apparence de cette page lorsque l'on appuie ou pas sur l'une des familles de critères pour l'afficher ce qui permet d'accèder à un ensemble de cases à cocher pour tous les critères de chaque famille. La famille de critères "Search Engine Optimization" a la particularité de prendre en compte la possibilité d'ajouter des mots-clés en cochant la case prévue à cette effet, ce qui débloquera les critères grisés et affichera un champ de saisie pour les mots-clés. `,-1),ce={class:"flex flex-row gap-4"},de=e("p",null,[a(" Lorsque l'utilisateur a coché l'ensemble des critères souhaités et saisi l’ensemble des URL sur lesquelles l’analyse sera effectuée, il peut appuyer sur le bouton permettant de lancer l’analyse et ainsi arriver sur une nouvelle page. Cette nouvelle page affiche la progression d’une analyse, elle est décomposée en 3 parties, la première est celle qui se trouve tout en haut, elle contient les informations générales de l’analyse en cours: l’identifiant du rapport, une barre de progression de l’analyse, le nombre de requêtes traitées (avec ou sans erreurs), le durée actuelle de l’analyse, et un bouton de téléchargement au format CSV des données actuellement récupérées."),e("br"),a(" La deuxième partie, elle, contient un tableau de l’ensemble des données récupérées en fonction des critères sélectionnés, l’affichage est séparée en différents onglets pour regrouper les familles de critères."),e("br"),a(" La dernière partie comporte les logs des requêtes, on a l’ensemble des succès et des erreurs qui y sont affichés avec comme informations : le temps, si c’est un échec ou un succès, la famille de critère et l’URL du site. ")],-1),pe=e("p",null," La dernière partie du site, à voir, correspond à l'affichage de l'historique des analyses qui nous affichent différentes informations : l'identifiant du rapport, le nombre d'URL traités, la date de création (n'est pas affichée dans cette exemple). En déroulant d'autres informations sont accessibles : les succès et échecs pour chaques famille de critères, la liste des URL, et la liste des critères, il y a aussi trois boutons d'action permettant la visualisation des données d'une analyse, le téléchargement de l'analyse et enfin sa suppression. ",-1),me={class:"flex flex-row gap-4"},fe=e("p",null," La dernière page que nous n'avons pas encore traitée est la page d'affichage des données d'une analyse. Elle ressemble partiellement à celle de progression mais avec des informations en moins, on n'affiche que le bouton de téléchargement, le tableau de données et une partie propre à cette page, la liste des erreurs avec possibilité de relancer les éléments qui ont échoué. ",-1),ge=e("div",{class:"bg-zinc-800 p-4 rounded-lg"},[e("h3",{class:"text-2xl font-bold w-full text-white h-12 flex items-center px-4"}," Conclusion "),e("p",{class:"p-4"},[a(" Durant ce stage, j'ai pu mettre en pratique les connaissances acquises lors de ma formation pour concevoir cette application, tout en ayant en tête l’utilisateur final qui devra pouvoir continuer de l’utiliser sans le moindre problème et sans intervention aucune de ma part."),e("br"),e("br"),a(" L’intégralité des fonctionnalités développées respecte ce qui m’a été demandé par mon tuteur de stage, ma mission se centrer surtout sur le fait de retourner sur une base plus saine pour le code et ainsi pouvoir à posteriori ajouter des critères supplémentaires (accessibilité) mais aussi l’aide à la décision en se reposant sur la logique et la méthode AHP (Analyse Hiérarchique des Procédés)."),e("br"),e("br"),a(" Cette application a été développée pour être utilisable sur n’importe quel support, mais certaines pages ne sont pas encore à 100% responsive, mais l’ensemble reste normalement utilisable. Dans un futur proche, il serait intéressant de se pencher vers une version sans navigateur avec Electron, pour pouvoir faire des analyses depuis sa propre machine. ")])],-1),be=w('<div class="flex flex-col gap-4"><h2 class="text-4xl font-bold w-full bg-cyan-600 text-white min-h-16 rounded-lg flex items-center px-4" id="competence2"> Compétence 2 </h2><p> Dans cette section, je vais développer le travail effectué dans l’optique de fiabiliser les données, mais aussi d’améliorer les performances globales de l’application en ayant en tête la problématique des ressources matérielles. </p><h3 class="text-2xl font-bold w-full bg-cyan-500 text-white min-h-12 rounded-lg flex items-center px-4"> Projet FuzzyGreen </h3><p> Pour commencer, nous pouvons faire une liste de l&#39;ensemble des problèmes en dehors de la structure du projet qui m’ont poussé à la création d’un nouveau projet en repartant de 0.<br> Tout d’abord, nous avons la structure illisible du code, il est dur de s’y retrouver et d&#39;effectuer des modifications, le manque de commentaire dans le code alors que le code n’est pas explicite que ce soit dans le nom des variables ou dans les fonctions. L’aspect monolithique du code empêche de faire de grosses modifications sans casser l’application, et peut s’avérer décourageant pour le reprendre et même le comprendre.<br><br> Ensuite, un constat qui peut être fait lors de l’utilisation de cette version de l’application pour lancer une analyse et que cela prend du temps, beaucoup de temps, pour donner un exemple, pour un ensemble de de ~200 URL, cette version prend plusieurs heures (entre 4h-6h) si ce n’est plus (manque de l’affichage du temps écoulé). Le problème n’est pas uniquement lié à la lenteur, mais aussi à la fiabilité de l’application, il est possible que certains sites n’aient pas pu être analysés ou que certains éléments n’aient pas abouti, dans ce cas, l’export des données n’est plus possible et tous les calculs associés deviennent erronés.<br><br> La lenteur peut s’expliquer par l’attente du calcul de certains critères avant de passer aux suivants, mais aussi par une structure n’encourageant pas la parallélisation des calculs.<br><br> La structure de données trop complexe, sans gestion des éléments vides, est sans doute ce qui cause les problèmes lors des calculs et de l&#39;exportation des données.<br><br> Pour conclure, il était nécessaire de repartir sur une base plus saine, mais aussi de revoir l&#39;ensemble des technologies utilisées pour s’assurer qu’elle n’est pas obsolète ou qu’elle soit bien une solution optimale pour le développement de l’application.<br><br></p><h3 class="text-2xl font-bold w-full bg-cyan-500 text-white min-h-12 rounded-lg flex items-center px-4"> Projet HolisticAnalytica </h3><p> Ma première initiative a été de mettre en place la parallélisation des différents calculs de critères, ce qui a permis de diminuer le temps nécessaire pour les analyses, par exemple, pour les ~200 URL traitées précédemment, l’application met environ une heure à tout traiter, et seulement une trentaine de minutes uniquement pour les familles de critères Culturalization et Search Engine Optimization (SEO).<br><br> Pour naviguer sur les différentes pages et récupérer les différentes valeurs des critères, il est nécessaire d’utiliser un scraper et dans notre cas, un scraper dynamique plus spécifiquement. Dans l’ancienne version du projet, le scraper employé était <a class="text-cyan-500 underline" href="https://pptr.dev/">Puppeteer</a> développé par Google, dans la version actuelle, j’ai fait le choix de conserver Puppeteer. Ce choix a été fait après considération d’autres solutions comme <a class="text-cyan-500 underline" href="https://playwright.dev/">Playwright</a>, une alternative à Puppeteer développée par Microsoft et <a class="text-cyan-500 underline" href="https://www.selenium.dev/">Selenium</a>, qui est une alternative très utilisée et portée dans de nombreux langages.<br> La raison ayant motivé ce choix vient du peu de différences entre Puppeteer et Playwright et l’importance des ressources exploitées pour Selenium.<br><br> Pour pouvoir gérer le scraping de plusieurs sites en même et améliorer la gestion des ressources utilisées par Puppeteer, j’ai décidé de passer par un cluster qui permet de gérer de multiples workers de Puppeteer, ça revient à créer un onglet par site dans un contexte de navigation privé. Le problème qui peut survenir est le suivant, un nombre trop important de ressources peut être utilisé si on ne limite pas le nombre de workers de Puppeteer. Pour faire face à ce problème, j’ai décidé de mettre en place le cluster de Puppeteer en singleton, ce qui fait qu’une seule instance de ce cluster existe dans le code et permet de gérer l’intégralité des workers qu’on peut maintenant limiter pour l’ensemble des requêtes entrantes.<br><br> Le point le plus important de cette application reste les données, il était donc nécessaire de faire un travail de fiabilisation de l’ensemble des critères, j’ai pour cela créé des scripts python qui m’ont permis d’automatiser les requêtes sur le backend de l’application et d’ainsi de n’avoir que les données. En faisant ça, j’ai pu au fur et à mesure corriger l’intégralité des éléments qui posaient problèmes, cependant il reste des critères qui posent encore problème. Les critères en question proviennent de la famille Culturalization, l’ensemble de ses critères passe par le prisme de la perception visuelle du site ce qui nécessite du traitement d’image, pour certains de ces critères cela a pu être fait, comme le contraste qui est calculé en transformant l’image en niveau de gris et en calculant l’écart-type du niveau de gris de l’ensemble de ses pixels. Pour le reste, je suis toujours en train de me documenter et de rechercher des solutions adéquates qui ne pourront pas être remises en question, puisque les données calculées ont pour but d’être utilisées à des fins de recherche.<br><br> L’effort pour limiter au maximum l’utilisation des ressources vient dû fait que l’application doit en attendant pouvoir tourner sur un serveur n’ayant malheureusement pas beaucoup de RAM et un processeur vieillissant et relativement lent. </p><div class="bg-zinc-800 p-4 rounded-lg"><h3 class="text-2xl font-bold w-full text-white h-12 flex items-center px-4"> Conclusion </h3><p class="p-4"> Pour conclure sur cette compétence, j’ai pu mettre l’emphase sur la recherche de méthode pour optimiser du mieux que je pouvais le temps d’analyse de l’application tout en évitant au maximum les erreurs pouvant entraîner un dysfonctionnement total de l’application.<br><br> La fiabilisation des critères est l’un des points qui restent le plus important dans l’ensemble de ce stage, ce point a été négligé lors des précédents stages au profit d’une application plus rapidement mise en production. Cependant, il est nécessaire que les utilisateurs puissent avoir confiance en l’application, mais aussi d’avoir des méthodes de calculs et des algorithmes reposant sur une méthodologie et une réflexion mathématiques impeccables sans qu’on puisse y trouver un problème logique, cela reste bien sûr très complexe, mais cela reste important de se diriger dans ce sens.<br><br> Les technologies employées répondent aux besoins actuels de l’application, du client et des utilisateurs finaux, mais le fait de rester sur NodeJS peut nuire aux performances globales de l’application, en particulier du côté backend, c’est pour ça que j’avais choisi de m’orienter vers un backend fait avec Rust, mais l’idée n’a pas été retenue dû à la nécessité qu’un stagiaire ayant une formation similaire à la mienne puisse reprendre le développement du projet sans encombre.<br><br></p></div></div><div class="flex flex-col gap-4"><h2 class="text-4xl font-bold w-full bg-cyan-600 text-white min-h-16 rounded-lg flex items-center px-4" id="problemes-solutions"> Problèmes rencontrèes </h2><div class="flex flex-col gap-4"><p> Durant développement de cette application, j&#39;ai pu rencontrer certains problèmes plus ou moins conséquent qui ont eu pour effet de ralentir drastiquement mon avancée, j&#39;ai trouvé une solution pour la plupart, mais les suivants sont les plus problèmatiques et n&#39;ont pas encore de solution définitive : </p><ul class="list-disc px-8 py-4 flex flex-col gap-3 bg-zinc-800 rounded-lg"><li> On peut aborder comme premier problème, un problème qui relève plus de l&#39;humain et de la communication, certains calculs et algorithmes employés pour des critères ne semblent pas corrects, en regardant la documentation scientifique abordant ces critères, on peut tomber sur plusieurs publications remontant jusqu’au début des années 2000 dans le cas de la Culturalization (la famille de critères qui pose le plus problème), en lisant les différentes publications, nous sommes rapidement rendus compte avec mon tuteur de stage que la définition des critères est beaucoup trop vague et ne permet pas d’en dégager une méthode de quantification concrète, ce qui m’a mené à chercher une solution qui semble à la fois pertinente et correcte d’un point de vue méthodologique et scientifique, cependant, je n’ai pas encore trouver un moyen satisfaisant d’y arriver (les critères concernés sont la monotonie de la page (color_variation), la densité d’information (information_density) et le ratio d’images et de textes (ratio_images_text)). </li><li> Pour ce second problème, je vais aborder les fenêtres de cookies qui apparaissent lors du chargement d’une page sur un site, la plupart du temps, cette fenêtre intempestive peut causer des problèmes lors du calcul de certains critères, notamment les critères qui utilisent une capture d’écran du site pour calculer des éléments relatifs à la couleurs ou luminosité du site ou même pour détecter des éléments. On peut se dire que naïvement des solutions existent pour pouvoir fermer ces fenêtres automatiquement à leur apparition, le problème est que la plupart des solutions ne fonctionnent qu’au cas par cas et deviennent très rapidement obsolètes. Une solution est toujours en cours de recherche, surtout que le fait que les données de certains critères peuvent être faussées est vraiment contraignant. </li></ul></div></div><div class="flex flex-col gap-4"><h2 class="text-4xl font-bold w-full bg-cyan-600 text-white min-h-16 rounded-lg flex items-center px-4" id="evolution"> Perspectives d&#39;évolution </h2><p class="bg-zinc-800 rounded-lg p-4"> Pour finir de parler de ce projet, il serait intéressant d’aborder l’avenir et les évolutions possibles de l’application. Tout d’abord, ajouter la partie d’aide à la décision mais aussi la nouvelle famille de critères “Accessibilité”. Concernant l’aide à la décision comme dit précédemment, il est intéressant de se diriger vers des méthodes de calculs comme la logique floue et l’AHP, mais allant plus loin, on peut aussi considérer qu’entraîner une IA sur le jeu de données récupéré lors des analyses d’un nombre conséquent de sites pourra être intéressant à l’avenir pour proposer des solutions personnalisées plus poussées.<br><br> Il sera important de continuer à maintenir les critères à jour, le web et l’informatique dans son ensemble évoluant très vite, certains de ces critères seront sans doute désuets d’ici quelques années, voir même avant. </p></div>',3),he=e("div",null,[e("footer",{class:"flex justify-center items-center h-16 text-lg font-semibold text-zinc-300"}," Jessy MOUGAMMADALY © 2024 ")],-1),xe={__name:"PortfolioView",setup(v){const o=q(!1),u=q(!1),m=q([]);function c(){window.scrollY>=window.screen.height-document.getElementById("navbar").offsetHeight?o.value=!0:o.value=!1}function s(d,p){u.value=!0,console.log(d,p);const l=document.getElementById("modal-image");console.log(l),l.src=d,l.alt=p}function f(){u.value=!1}return P(()=>{window.addEventListener("scroll",c);const d=document.querySelectorAll("h2");for(const p of d){const l={id:p.id,text:p.innerText};m.value.push(l)}console.log(m.value)}),z(()=>{window.removeEventListener("scroll",c)}),(d,p)=>(i(),r("div",O,[e("div",{onClick:p[0]||(p[0]=l=>f()),class:y(u.value?"sticky bg-zinc-950 bg-opacity-70 top-0 z-10 flex justify-center items-center h-screen cursor-pointer w-full":"hidden")},E,2),e("div",F,[G,e("div",{id:"navbar",class:y(o.value?"invisible":"sticky flex flex-row items-center justify-center top-0 min-h-16 w-full bg-zinc-900 overflow-hidden flex-wrap")},[e("div",D,[(i(!0),r(g,null,b(m.value,(l,x)=>(i(),r("a",{key:x,href:"#"+l.id,class:"text-xl font-semibold hover:text-zinc-400 hover:bg-zinc-700 rounded-lg p-2 text-zinc-500"},h(l.text),9,U))),128))])],2)]),e("div",{class:y(o.value?"sticky flex flex-row items-center justify-center top-0 min-h-16 w-full gap-2 bg-zinc-900 overflow-hidden flex-wrap":"invisible")},[e("div",M,[(i(!0),r(g,null,b(m.value,(l,x)=>(i(),r("a",{key:x,href:"#"+l.id,class:"text-xl font-semibold hover:text-zinc-400 hover:bg-zinc-700 rounded-lg p-2 text-zinc-500"},h(l.text),9,T))),128))])],2),e("div",J,[B,e("div",V,[H,N,R,$,t(_,{headers:[{label:"ac",value:"AC"},{label:"group1",value:"Développer des applications informatiques simples"},{label:"group2",value:"Partir des exigences et aller jusqu’à une application complète"},{label:"group3",value:"Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)"}],rows:[{ac:"AC1",group1:"Implémenter des conceptions simples",group2:"Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",group3:"Choisir et implémenter les architectures adaptées"},{ac:"AC2",group1:"Élaborer des conceptions simples",group2:"Appliquer des principes d’accessibilité et d’ergonomie",group3:"Faire évoluer une application existante"},{ac:"AC3",group1:"Faire des essais et évaluer leurs résultats en regard des spécifications",group2:"Adopter de bonnes pratiques de conception et de programmation",group3:"Intégrer des solutions dans un environnement de production"},{ac:"AC4",group1:"Développer des interfaces utilisateurs",group2:"Vérifier et valider la qualité de l’application par les tests",group3:"-"}]}),W,Y,t(_,{headers:[{label:"ac",value:"AC"},{label:"group1",value:"Appréhender et construire des algorithmes"},{label:"group2",value:"Sélectionner les algorithmes adéquats pour répondre à un problème donné"},{label:"group3",value:"Analyser et optimiser des applications"}],rows:[{ac:"AC1",group1:"Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données…)",group2:"Choisir des structures de données complexes adaptées au problème",group3:"Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire…)"},{ac:"AC2",group1:"Comparer des algorithmes pour des problèmes classiques (tris simples, recherche…)",group2:"Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle…)",group3:"Profiler, analyser et justifier le comportement d’un code existant"},{ac:"AC3",group1:"Formaliser et mettre en œuvre des outils mathématiques pour l’informatique",group2:"Comprendre les enjeux et moyens de sécurisation des données et du code",group3:"Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d’application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel…)"},{ac:"AC4",group1:"-",group2:"Évaluer l’impact environnemental et sociétal des solutions proposées",group3:"-"}]})]),e("div",X,[Q,K,Z,ee,e("div",se,[t(n,{onOnClickImage:s,image:{path:"/fg_home1.png",alt:"Page d'accueil de FuzzyGreen",caption:"Page d'accueil de FuzzyGreen avec l'ensemble des familles de critères"}}),t(n,{onOnClickImage:s,image:{path:"/fg_home2.png",alt:"Page d'accueil de FuzzyGreen étendue",caption:"Page d'accueil de FuzzyGreen avec l'ensemble des familles de critères déroulées"}})]),te,e("div",ae,[t(n,{onOnClickImage:s,image:{path:"/fg_result1.png",alt:"Page d'analyse 1 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Haut de page"}}),t(n,{onOnClickImage:s,image:{path:"/fg_result2.png",alt:"Page d'analyse 2 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Milieu de page"}}),t(n,{onOnClickImage:s,image:{path:"/fg_result3.png",alt:"Page d'analyse 2 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Bas de page"}})]),ne,e("div",ie,[t(n,{onOnClickImage:s,image:{path:"/wf1.jpg",alt:"Page d'accueil de FuzzyGreen",caption:"Page d'accueil de l'application"}}),t(n,{onOnClickImage:s,image:{path:"/wf2.jpg",alt:"Page de création d'une analyse",caption:"Page de création d'une analyse"}})]),re,e("div",le,[t(n,{onOnClickImage:s,image:{path:"/wf3.jpg",alt:"Page de progression de l'analyse",caption:"Page de progression de l'analyse"}}),t(n,{onOnClickImage:s,image:{path:"/wf4.jpg",alt:"Page d'affichage de l'ensemble des analyses effectuées via l'application",caption:"Page d'affichage de l'ensemble des analyses effectuées via l'application"}}),t(n,{onOnClickImage:s,image:{path:"/wf5.jpg",alt:"Page d'affichage des données d'une analyse",caption:"Page d'affichage des données d'une analyse"}})]),oe,t(n,{onOnClickImage:s,image:{path:"/ha_home.png",alt:"Page d'accueil d'HolisticAnalytica",caption:"Page d'accueil d'HolisticAnalytica"}}),ue,e("div",ce,[t(n,{onOnClickImage:s,image:{path:"/ha_new.png",alt:"Page de création d'une analyse",caption:"Page de création d'une analyse"}}),t(n,{onOnClickImage:s,image:{path:"/ha_new2.png",alt:"Page de création d'une analyse avec menus de sélection déroulés",caption:"Page de création d'une analyse avec menus de sélection déroulés"}})]),de,t(n,{onOnClickImage:s,image:{path:"/ha_progress.png",alt:"Page de progression d'une analyse",caption:"Page de progression d'une analyse"}}),pe,e("div",me,[t(n,{onOnClickImage:s,image:{path:"/ha_history.png",alt:"Page de création d'une analyse",caption:"Page de création d'une analyse"}}),t(n,{onOnClickImage:s,image:{path:"/ha_history2.png",alt:"Page de création d'une analyse avec menus de sélection déroulés",caption:"Page de création d'une analyse avec menus de sélection déroulés"}})]),fe,t(n,{onOnClickImage:s,image:{path:"/ha_data.png",alt:"Page de création d'une analyse avec menus de sélection déroulés",caption:"Page de création d'une analyse avec menus de sélection déroulés"}}),ge]),be]),he]))}};export{xe as default};
