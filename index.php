<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="ca"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="ca"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="ca"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="ca"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/b/378 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Fisioteràpia Mallorca Nord | Mercè Perelló</title>
  <meta name="description" content="Centre de fisioteràpia a Mallorca. Estic a Ca'n Picafort i Muro. També vaig a domicili.">
  <meta name="author" content="Human Bits">

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

  <!-- CSS: implied media=all -->
  <!-- CSS concatenated and minified via ant build script-->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/custom.css">
  <link rel="stylesheet" href="css/jquery.qtip.min.css">
  <link rel="stylesheet" href="font-face/museo-slab.css">
  <!-- end CSS-->

  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->
  <meta property="og:title" content="Mercè Perelló Fisioteràpia">
  <meta property="og:description" content="El centre de fisioteràpia del Nord de Mallorca. Estic a Ca'n Picafort i Muro. També vaig a domicili.">
  <meta property="og:image" content="http://merceperello.es/img/face.jpg">
  <link rel="canonical" href="http://merceperello.es">
  <link rel="author" href="/humans.txt">
  
  <!-- For iPhone 4 with high-resolution Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png">
  <!-- For first-generation iPad: -->
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png">
  <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">

  <!-- All JavaScript at the bottom, except for Modernizr / Respond.
       Modernizr enables HTML5 elements & feature detects; Respond is a polyfill for min/max-width CSS3 Media Queries
       For optimal performance, use a custom Modernizr build: www.modernizr.com/download/ -->
  <script src="js/libs/modernizr-2.0.6.min.js"></script>
</head>

<body>
  <div id="container">
    <header>
      <nav>
        <ul>
          <li><a class="home" href="#home">Inici</a></li>
          <li><a class="about" href="#about">Qui soc</a></li>
          <li><a class="location" href="#location">On estic</a></li>
          <li><a class="available" href="#available">Disponibilitat</a></li>
          <li><a class="contact" href="#contact">Contacte</a></li>
        </ul>
      </nav>
      
      <?php if (isset($_REQUEST['message'])) {
        print('<div id="messages">' . $_REQUEST['message'] . '</div>');
      } ?>
    </header>
    <div id="main" role="main">
      <section id="home">
        <h1>Fisioteràpia</h1>
        <h2>Mercè Perelló</h2>
        <ul id="txtlzr-data-1" class="txtlzr-data">
          <li>Per a la teva tranquilitat evita aquells que et venen salud sense la preparació adient</li>
          <li>Tractament de lesions esportives per a poder estar be ràpidament.</li>
          <li>Alleuja el teu dolor</li>
          <li>És el complement ideal a la rehabilitació de la teva assegurança</li>
          <li>Un ambient comfortable a Muro, Ca'n Picafort o a casa teva</li>
        </ul>
        <header id="txtlzr-container-1" class="txtlzr-container"></header>
        <p><a href="#description" class="button">Què faig?</a></p>
      </section>
      <section id="description">
        <h2>El que faig</h2>
        <header>Estic especialitzada en el tractament del dolor i la rehabilitació utilitzant, entre d'altres, els següents tractaments:</header>
        <ul class="circles">
          <li title="Massoteràpia, Kinesioteràpia, o Teràpia pel Moviment, Fisioteràpia Manipulativa Articular, Reeducació postural, Fisioteràpia Respiratòria, Embenat funcional i Kinesio-Taping.">Manual</li>
          <li title="Eliminació del líquid limfàtic excessiu produit per diverses causes.">Drenatge</li>
          <li title="Maniobra terapèutica consistent en la mobilització del teixit conectiu, efectuada en profunditat, en punts precisos, codificats, on és possible trobar una alteració de l'elasticitat i consistència de la fàscia.">Fàscies</li>
          <li title="Tècniques que s'apliquen per el tractament de les seqüel·les en lesions del sistema nerviós central o perifèric.">Neurologia</li>
          <li title="Aquí només he descrit les pràctiques més habituals">Molt més…</li>
        </ul>        
        <div id="social-buttons">
          <a id="show-twitter" href="#">Twitter</a>
          <a id="show-facebook" href="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FMerc%C3%A8-Perell%C3%B3-Fisioter%C3%A0pia%2F205104012886133&amp;width=600&amp;height=600&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=true&amp;header=false&amp;appId=216318715105952">Facebook</a>
          <script src="http://widgets.twimg.com/j/2/widget.js"></script>
          <script>
          new TWTR.Widget({
            version: 2,
            type: 'profile',
            rpp: 5,
            interval: 30000,
            width: 600,
            height: 600,
            theme: {
              shell: {
                background: '#f0f0eb',
                color: '#474747'
              },
              tweets: {
                background: '#ffffff',
                color: '#444444',
                links: '#4faadb'
              }
            },
            features: {
              scrollbar: false,
              loop: false,
              live: false,
              behavior: 'all'
            }
          }).render().setUser('rceperello').start();
          </script>
        </div>
        <div style="text-align: center">Si cliques el botó de <em>Twitter</em> o de <em>Facebook</em> s'obrirà una finestreta amb el que faig a aquestes xarxes socials.</div>
      </section>
      <section id="about">
        <h2>Sobre mi</h2>
        <img id="me" src="/img/face.jpg" alt="Jo" title="Aquesta foto està presa a Cala Matzoc!" />
        <p>Jo soc na Mercè. Soc una al·lota de 25 anys originària de Muro que viu a Ca'n Picafort durant tot l'any.</p>
        <p>M'encanta sortir a córrer i cansar-me abans de sortir a sopar a fora amb els amics, encara que també disfruto molt estant a casa disfrutant dels petits plaers.</p>
        <p>Potser la meva afició més gran és la d'estudiar. Després d'haver acabat la carrera de fisioteràpia i estudiat dos postgraus, ara mateix estic estudiant anglès a la <abbr title="Escola Oficial d'Idiomes">EOI</abbr> i la carrera de psicologia a distància per la <abbr title="Universitat Oberta de Catalunya">UOC</abbr>.</p>
      </section>
      <section id="location">
        <h2>On estic</h2>
        <ul id="locations">
          <li data-geo-lat="39.761723" data-geo-long="3.162496">
            <h3>Ca'n Picafort</h3>
            <p>Carrer Violeta 3</p>
            <div class="longdesc"><p>Aquí és on visc. Per a mi és el lloc més còmode per a atendre't ja que és casa meva.</p> <p>Tenc totes les comoditats preparades per a que estiguis a gust el 100%, com aire acondicionat a l'estiu i calefacció a l'hivern.</p> <p>Es troba entre l'ajuntament i el gimnàs, és el carrer que queda enmig. És un xalet de dos pisos, jo estic al primer pis. Per a entrar has d'entrar per la porteta de més amunt.</p></div>
          </li>
          <li data-geo-lat="39.735145" data-geo-long="3.0604">
            <h3>Muro</h3>
            <p>Sant Joan 79</p>
            <div class="longdesc"><p>És l'última casa del carrer de Sant Joan. És la casa aquí on em vaig criar i on encara hi viuen els meus pares, que em guarden l'habitació de la llitera.</p> <p>Si no és dia de partit i juga el Barça o el Madrid no tendràs cap problema per a venir en cotxe i aparcar. És bo de trobar si vens a peu, si vens en cotxe has d'entrar al carrer de Sant Joan pel cap de cantó abans de <em>Ca na Francisca</em>.</p></div>
          </li>
          <li data-geo-lat="39.574336" data-geo-long="3.20142">
            <h3>A domicili</h3>
            <p>On em necessitis</p>
            <div class="longdesc"><p>Aquesta és l'opció que acaba optant més gent. Ja que si necessites una fisio tampoc deus tenir moltes ganes de venir fins a Muro o Ca'n Picafort, no?</p> <p>Les tarifes són una mica més cares, per a cobrir la benzina i el temps de desplaçament.</p> <p>A Manacor, per exemple no et cobraré extra si és el dimarts o dijous ja que hi he d'anar igualment.</p></div>
          </li>
        </ul>
        <div id="map_canvas"></div>
        <div id="more-info">
          <div>
            <h2>More Info</h2>
            <p>Passa per sobre de les localitzacions de l'esquerra. (JavaScript ha d'estar activat)</p>
          </div>
        </div>
      </section>
      <section id="available">
        <h2>Disponibilitat</h2>
        <header>A grans trets aquesta és la meva disponibilitat. Això no significa que no pugui estar ocupada o disponible contradint l'horari de sota.</header>
        <div id="block-1" class="block-33">
          <h3>Dilluns, dimecres i divendres</h3>
          <p>Podem quedar en qualsevol moment del dia. Des de les 10h de dematí fins a les 21h de la nit.</p>
          <div class="tooltip">de 10h a 22h</div>
        </div>
        <div id="block-2" class="block-33">
          <h3>Dimarts i dijous</h3>
          <p>Els dimarts i dijous són els dies que ho tenc més difícil. Així i tot, telefona'm per a saber si tenc un forat lliure a l'hora que et convé.</p>
          <div class="tooltip">Telefona (660-082-398)</div>
        </div>
        <div id="block-3" class="block-33">
          <h3>Dissabte i diumenge</h3>
          <p>Podem quedar entre les 12h del matí fins a les 21h. Els caps de setmana m'agrada dormir una mica més pel matí.</p>
          <div class="tooltip">de 12h a 22h</div>
        </div>
        
      </section>
      <section id="contact">
        <h2>Contacta</h2>
        <header>Si emplenes aquest formulari rebré un correu electrònic amb les teves dades i em posaré en contacte en tu. Si vols també em pots telefonar al 660-082-398.</header>
        <form action="contact.php" method="post">
          <label class="required">El teu nom:</label>
          <input type="text" id="name" name="name" placeholder="Perico de los Palotes" required><br />
        
          <label class="required">Adreça d'email:</label>
          <input type="email" id="email" name="email" placeholder="example@example.org" required><br />
              
          <label class="required">Teléfon:</label>
          <input type="text" pattern="[0-9]*" id="phone" name="phone" required><br />
      
          <label>Quin dia vols venir?</label>
          <input type="date" id="date" name="date" title="Entra una data del tipus 2012-10-25"><br />
          
          <label>A quina hora?</label>
          <input type="time" id="time" name="time" title="Entra una hora del tipus 16:32"><br />
            
          <label class="required">Comentaris:</label>
          <textarea rows="4" cols="50" name="message" id="message" required></textarea><br />
        
          <input type="reset" value="Esborra" /><input type="submit" value="Contacta" />
        </form>
      </section>
    </div>
    <footer>

    </footer>
  </div> <!--! end of #container -->


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.6.2.min.js"><\/script>')</script>
  <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
  


  <!-- scripts concatenated and minified via ant build script-->
  <script defer src="js/plugins.js"></script>
  <script defer src="js/script.js"></script>
  <!-- end scripts-->

	
  <!-- Change UA-XXXXX-X to be your site's ID -->
  <script>
    window._gaq = [['_setAccount','UA-27957871-1'],['_trackPageview'],['_trackPageLoadTime']];
    Modernizr.load({
      load: ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'
    });
  </script>


  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>
