document.body.style.backgroundColor = "black"; 
document.getElementById("cake").style.color = "lightblue";


// Canvas para fogos de artifício
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Partículas dos fogos
let particles = [];

// Classe para partículas
class Particle {
  constructor(x, y, color, shape) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.shape = shape;
    this.radius = Math.random() * 3 + 2;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.alpha = 3; // Transparência inicial
  }

  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    if (this.shape === "circle") {
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 3);
    } else if (this.shape === "star") {
      ctx.moveTo(this.x, this.y);
      for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5;
        const x = this.x + Math.cos(angle) * this.radius * 2;
        const y = this.y + Math.sin(angle) * this.radius * 2;
        ctx.lineTo(x, y);
      }
      ctx.closePath();
    } else if (this.shape === "heart") {
      ctx.moveTo(this.x, this.y);
      ctx.arc(this.x - this.radius / 2, this.y, this.radius / 2, 0, Math.PI, false);
      ctx.arc(this.x + this.radius / 2, this.y, this.radius / 2, 0, Math.PI, false);
      ctx.lineTo(this.x, this.y + this.radius * 1.5);
    }
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 0.02; // Gradualmente desaparece
  }
}

// Função para criar fogos
function createFireworks(x, y) {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
  const shapes = ["circle", "star", "heart"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(x, y, color, shape));
  }
}

// Animação dos fogos
function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    if (particle.alpha <= 0) {
      particles.splice(index, 1);
    } else {
      particle.update();
      particle.draw();
    }
  });
  requestAnimationFrame(animateFireworks);
}



// Dispara fogos automaticamente
setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 1; // Parte superior
  createFireworks(x, y);
}, 200);

animateFireworks();


// ----------------------
// Animação do bolo
// ----------------------
const cakeElement = document.getElementById("cake");
const messageElement = document.getElementById("message"); 
cakeElement.scrollTop = cakeElement.scrollHeight;

// Modelo do bolo em ASCII
const cakeLines = [ 
  "                                 ",
 "              ♡♡♡♡        ♡♡♡♡ ",
 "             ♡♡♡♡♡♡     ♡♡♡♡♡♡",
 "            ♡♡♡♡♡♡♡♡   ♡♡♡♡♡♡♡♡ ",
 "           ♡♡♡♡♡♡♡♡♡  ♡♡♡♡♡♡♡♡♡ ",
  "          ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡  ",    
  "          ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡ ",                    
  "           ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡ ",
  "            ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡                                                                                                                                  ♡♡♡♡    ♡♡♡♡ ",
  "              ♡♡♡♡♡♡♡♡♡♡♡♡♡♡                                                                                                                                   ♡♡♡♡♡   ♡♡♡♡♡  ",
  "                ♡♡♡♡♡♡♡♡♡♡♡                                                                                                                                   ♡♡♡♡♡♡♡  ♡♡♡♡♡♡",
  "                 ♡♡♡♡♡♡♡♡♡                                                                                                                                   ♡♡♡♡♡♡♡♡ ♡♡♡♡♡♡♡♡ ",
  "                   ♡♡♡♡♡♡                                                     )                )                                                             ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡",   
  "                     ♡♡♡                                               )      (¨)              (¨)      )                                                    ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡",
  "                       )                                               (¨)      |                |      (¨)                                                   ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡",                 
  "                       (                                                |      |~|              |~|      |                                                     ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡ ",
  "                        )                                              |~|     | |              | |     |~|                                                     ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡ ",
  "                       (                                               | |     | |              | |     | |                                                       ♡♡♡♡♡♡♡♡♡♡♡♡♡ ",
  "                        )                                             .| |a@@@@| |@@@@@@@@@@@@@@| |@@@@a| |.                                                        ♡♡♡♡♡♡♡♡♡♡",
  "                        (                                       .,a@@@@| |@@@@@| |@@@@@@@@@@@@@@| |@@@@@| |@@@@a,.                                                   ♡♡♡♡♡♡♡ ",
  "                                                               ,a@@@@@@| |@@@@@@@@@@@@@@@@.@@@@@@@@@@@@@| |@@@@@@@a,                                                  ♡♡♡♡♡",
  "                                                              a@@@@@@@@@@@@@@@@@@@@@@@@@' . '@@@@@@@@@@@@@@@@@@@@@@@@a                                                  ♡♡♡",
  "                                                              ;'@@@@@@@@@@@@@@@@@@@@@@'   .   '@@@@@@@@@@@@@@@@@@@@@@';                                                   ) ",
  "                                                              ;@@@'@@@@@@@@@@@@@@@@@'     .     '@@@@@@@@@@@@@@@@@'@@@;                                                   (  ",
  "                                                              ;@@@;,.aaaaaaaaaaaaa        .        aaaaa,,aaa,;@@@;;;;;                                                    )",
  "                                                              ;;@;;;;@@@@@@@@@@@;@       @.@       ;@;@@@@@@@;;;;@;;;;;                                                    ( ",
  "                                                              ;;;;;;@@@@@@@@;@@;;@     @@ . @@     ;;@;;;;@@;@@@;;;;;;;                                                     ) ",
  "                                                              ;;;;;;;;;@@;;;;;;;;;   @@   .   @@   ;;;;;;;;;;;@@;;;;;@;                                                     (",
  "                                                              ;;;;;;;;;;;;;;;;;;;; @@     .     @@ ;;;;;;;;;;;;;;;@@@;; ",
  "                                                          ,%%%;;;;;;;;;@;;;;;;;;;;        .        ;;;;;;;;;;;;;;;;@@;;%%%, ",
  "                                                       ,%%%%%%;;;;;;;;@@;;;;;;;;;;      .%%%.      ;;;;;;;;;;;;;;;;;;;;%%%%%%, ",
  "                                                      ,%%%%%%%;;;;;;;;;;@@;;;;;;;;     .%%%%%.     ;;;;;;;;;;;;;;;;;;;;%%%%%%%, ",
  "                                                      %%%%%%%%%';;;;;;;;;;;;;;;;;;    .%%%%%%%.    ;;;;;;;;;;;;;;;;;;;'%%%%%%%% ",
  "                                                      %%%%%%%%%%%;;;;;;;;;;;;;;;;;   .%%%%%%%%%.   ;;;;;;;;;;;;;;;;%%%%%%%%%%%% ",
  "                                                      %%%%%%%%%%%%;;;;;;;;;;;;;;;;  .%%%%%%%%%%%.  ;;;;;;;;;;;;;;;%%%%%%%%%%%%% ",
  "                                                       %%%%%%%%%%%;;;;;;;;;;;;;;;; .%%%%%%%%%%%%%. ;;;;;;;;;;;;;;;%%%%%%%%%%%%% ",
  "                                                        %%%%%%%%%%%%%%;;;;;;;;;;;;.%%%%%%%%%%%%%%%.;;;;;;;;;;;%%%%%%%%%%%%%%%%  ",
  "                                                         '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%' ",
  "                                                           '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'  ",
  "                                                             ,,,,,,,,,,,,,,,,,,,,,,,,,,%%%%%%%,,,,,,,,,,,,,,,,,,,,,,,,,,,,      ",
  "                                                                                        %%%%%                                   ",
  "                                                                                         %%%                                     ",
  "                                                                                                                     ",
  "                                                                                                                     ",
  " LLLL    LLLL            OOOO            VVVVVVVVVV         EEEEEEEEEE        YOUU        YOUU ",
  " LLLL    LLLL           OOOOOO           VVVVVVVVVVVV       EEEEEEEEEEE        YOUU      YOUU ",
  " LLLL    LLLL          OOOOOOOO          VVVVVVVVVVVV       EEEEEEEEEEE          YOU    YOU  ",
  " LLLL LL LLLL         OOOOOOOOOO         VVVVVVVVVVV        EEEEEEEEEE            YOUUUUUU   ",
  " LLLLLLLLLLLL        OOOOOOOOOOOO        VVVVV              EEEEE                  YOUUUU   ",
  " LLLL LL LLLL       OOOOO    OOOOO       VVVVV              EEEEE                   YOUU     ",
  " LLLL    LLLL      OOOOO      OOOOO      VVVVV              EEEEE                   YOUU     ",
  " LLLL    LLLL     OOOOO        OOOOO     VVVVV              EEEEE                   YOUU      ",
  "                                                                                         ",
  "                                                                                         ",
  "                                                                                         ",
  " FOREVERFOREVER        FOREVERF      FOREVERFOREVER       FOREVERFOREVER      FORE    VERF      FOREVERFOREVER               FORE         FOR*        EVER ",
  " FOREVERFOREVERF         OREV        FOREVERFOREVERF      FOREVERFOREVER      FORE    VERF      FOREVERFOREVERFO            FOREVE         FOR*      EVER ",
  " FOREVERFOREVERFO        ERFO        FOREVERFOREVERFO          FORE           FORE    RFOR      FOREVERFOREVERFOR          FOREVERF         FOR*    EVER  ",
  " FOREVERFOREVER          REVE        FOREVERFOREVER            VERF           FORE VE RFOR      FOREVERFOREVERFOREV       FOREVERFOR         FOREVERFOR   ",
  " FOREVERFOREV            RFOR        FOREVERFORE               OREV           FOREVERFOREV      FOREVERFOREVERFOREVE     FOREVERFOREV         FOREVERF  ",
  " FOREVERFOREVER          EVER        FOREVERFOREV              EVER           FORE VE VERF      FOREVERFOREVERFOREV     FOREVEVERFOREV         FOREVE  ",
  " FOREVERFOREVERFO        FORE        FOREV    ERFOR            FORE           FORE    VERF      FOREVERFOREVERFORE     FOREV      ERFOR         FOR*      ",
  " FOREVERFOREVERF         VERF        FOREV      ERFOR          VERF           FORE    VERF      FOREVERFOREVERFO      FOREV        ERFOR        EVER       ",
  " FOREVERFOREVE         FOREVERF      FOREV       ERFOR         OREV           FORE    VERF      FOREVERFOREVE        FOREV          ERFOR       FOR*        ",
  "                                                                                                                                                                     ",
  "                                                                                                                                                                                      ",
  "         AAAA            AAAAAA           AAAAAA      AAAAAAA        AAAAA     AAAAAAAAAAAA           @@@@@                                               ",
  "        AAAAAA            AAAA             AAAA       AAAAAAAA       AAAAA     AAAAAAAAAAAA           @@@@@                   ",
  "       AAAAAAAA           AAAA             AAAA       AAAAAAAAAA     AAAAA     AAAA                   @@@@@                       ",
  "      AAAAAAAAAA          AAAA             AAAA       AAAAA AAAAA    AAAAA     AAAA                   @@@@@                             ",
  "     AAAA - AAAA          AAAA             AAAA       AAAAA  AAAAA   AAAAA     AAAAAAAAAAAA           @@@@@                              ",
  "    AAAAAA-AAAAAA         AAAA             AAAA       AAAAA   AAAAA  AAAAA     AAAAAAAAAAAA           @@@@@                                  ",
  "   AAAAAAAAAAAAAAA        AAAA             AAAA       AAAAA    AAAAA AAAAA     AAAA                                                   ",
  "  AAAAA       AAAAA       AAAA             AAAA       AAAAA     AAAAAAAAAA     AAAA                   ,@@@,                         ",
  " AAAAA         AAAAA      AAAAAAAAAAAA     AAAA       AAAAA      AAAAAAAAA     AAAAAAAAAAAA           @@@@@                                  ",
  "AAAAA           AAAAA     AAAAAAAAAAAA    AAAAAA      AAAAA      AAAAAAAAA     AAAAAAAAAAAA           ,@@@,                           ",
]

// Função para imprimir o bolo linha por linha com rolagem automática
function printCake(lines, element, delay = 500) {
  let currentLine = 0; // Índice da linha atual

  function addLine() {
    if (currentLine < lines.length) {
      element.textContent += lines[currentLine] + "\n"; // Adiciona a linha ao elemento
      currentLine++;
      element.scrollTop = element.scrollHeight; // Faz a rolagem automática para o final
      setTimeout(addLine, delay); // Chama a próxima linha após o delay
    }
  }

  addLine(); // Começa a imprimir as linhas
}

// Chama a função para começar a imprimir o bolo
printCake(cakeLines, cakeElement, 200); // 150ms de intervalo entre linhas

