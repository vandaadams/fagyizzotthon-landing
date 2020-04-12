function makeMarquee() {
  const title = 'HAMAROSAN NYITUNK! — KÉZMŰVES FAGYLALT HÁZHOZSZÁLLÍTÁS'
  const marqueeText = new Array(320).fill(title)
  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText.join(' — ')
}

makeMarquee()
