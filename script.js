const bgm=document.getElementById("bgm"), boot=document.getElementById("boot"), startBtn=document.getElementById("startBtn"), terminal=document.getElementById("terminal"), choices=document.getElementById("choices"), code=document.getElementById("code"), toast=document.getElementById("toast");
const files={
mission:`from datetime import date

class MovieMission:
    def __init__(self):
        self.movie = "Spider-Man"
        self.date = date(2026, 7, 31)
        self.partner = None

    def search_partner(self):
        print("Searching...")
        print("Searching...")
        print("Found: You ❤️")

    def invite(self):
        return '''
Invitation for you to come
and join me watch a movie 🍿

What's movie?!
........ 🎥

You guess what movie it isssss?!

A new Spider-Man movie is coming soon,
and I would love to watch it with you.
'''

mission = MovieMission()
mission.search_partner()
print(mission.invite())`,
readme:`# Secret Spider-Man Repository

Deploy Status:
████████████████████ 100%

Movie detected:
Spider-Man

Date:
31 July 2026

Companion:
You

Status:
Awaiting response...`,
error:`[WARNING] Tiny nervousness detected.
[INFO] Trying to say this properly...

[INFO] If you are busy with your work
       or anything else, it's okay.
       No pressure at all.

[CRITICAL] Movie plan needs one final response.

Suggested fix:
movie_partner = "You"

Apply fix?

[Y] Yes
[N] No`,
secret:`You weren't supposed to open this.

...

Since you're already here...

I have one tiny question.

Would you like to watch Spider-Man with me?`,
feelings:`I've been trying to find
the best way to ask you.

Turns out...

writing code
was easier than asking directly.

:)`,
config:`{
  "project": "secret-spiderman-repository",
  "movie": "Spider-Man",
  "date": "31 July 2026",
  "partner": "You",
  "music": "Beauty And A Beat",
  "status": "awaiting_response"
}`
};
function showFile(name,e){document.querySelectorAll(".file").forEach(b=>b.classList.remove("active")); if(e)e.target.classList.add("active"); code.textContent=files[name]}
document.querySelectorAll(".file").forEach(b=>b.onclick=e=>showFile(b.dataset.file,e)); showFile("mission");
const run=`$ git clone https://github.com/secret/secret-spiderman-repository.git
Cloning into 'secret-spiderman-repository'...
remote: Counting objects... done.
remote: Compressing feelings... done.
Receiving objects: 100%

$ cd secret-spiderman-repository
$ npm run deploy-love

[INFO] Initializing secret repo...
[INFO] Playing background music...
[INFO] Opening README.md...
[INFO] Running mission.py...

Search Input:
📅 31 July 2026
🎬 Spider-Man

Processing...
[████████████████████] 100%

Movie Found:
Spider-Man

Date:
31 July 2026

Searching movie partner...
...
...
...

Partner Found:
You ❤️

Invitation for you to come and join me watch a movie 🍿

What's movie?!
........ 🎥

You guess what movie it isssss?!

A new Spider-Man movie is coming soon,
and I would love to watch it with you.

$ tail -f error.log

[WARNING] Tiny nervousness detected.
[INFO] If you are busy with your work or anything else,
       it's okay. No pressure at all.

[CRITICAL] Movie plan needs one final response.

QUESTION:
So, are you gonna accept my invitation?

[Y] Yes
[N] No

> `;
let i=0;function type(){if(i<run.length){terminal.textContent+=run[i++];setTimeout(type,11)}else choices.style.display="grid"}
startBtn.onclick=()=>{boot.classList.add("hide");setTimeout(()=>boot.style.display="none",700); bgm.volume=.32; bgm.play().catch(()=>{}); toast.style.display="block";setTimeout(()=>toast.style.display="none",1600); setTimeout(type,450)}
document.getElementById("musicBtn").onclick=()=>{if(bgm.paused){bgm.play();toast.textContent="Music playing 🎵"}else{bgm.pause();toast.textContent="Music paused"}toast.style.display="block";setTimeout(()=>toast.style.display="none",1400)}
function confetti(){for(let n=0;n<110;n++){let p=document.createElement("div");p.className="confetti";p.style.left=Math.random()*100+"vw";p.style.background=["#ff5ea8","#58a6ff","#f2cc60","#3fb950","#fff"][Math.floor(Math.random()*5)];p.style.animationDelay=Math.random()*0.45+"s";document.body.appendChild(p);setTimeout(()=>p.remove(),3300)}}
document.getElementById("yesBtn").onclick=()=>{choices.style.display="none";confetti();terminal.textContent=`$ ./response --answer YES

[SUCCESS] Invitation accepted.
[INFO] Updating config.json...

{
  "date": "31 July 2026",
  "movie": "Spider-Man",
  "companion": "You",
  "status": "ACCEPTED"
}

$ git add movie_partner
$ git commit -m "Found the perfect movie partner"
$ git push origin forever

Achievement unlocked:
Best Movie Partner 🍿

Mission status:
See you for Spider-Man. :)`}
document.getElementById("noBtn").onclick=()=>{choices.style.display="none";terminal.textContent=`$ ./response --answer NO

[WARNING] Response received.
[ERROR] Heart.exe stopped working for 0.3 seconds.

Recovery message:
It's okay if you're busy with work or anything else.
No pressure at all.

Invitation status:
Still valid whenever you're free. :)`}
