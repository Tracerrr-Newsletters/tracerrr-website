'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const contactEmail = 'jake@tracerrr.com';
const publicationData = {
  bryan: {
    author: 'By the Bryan Bros', ink: '#0D1B2A', accent: '#5B70E0', plate: 'The Bryan Bros walking a links fairway, bags on their shoulders.',
    name: 'The Bryan Brief', masthead: 'THE BRYAN BRIEF', byline: 'THE BRYAN BROS / GOLF', theme: 'bryan-theme', image: 'assets/bryan.webp', alt: 'The Bryan Bros walking a links fairway',
    heading: 'A little closer to the game.',
    description: 'Golf, life and the stories behind the videos. A publication built around the Bryan Bros perspective, with room to go beyond the scorecard.',
    storyTitle: 'The shot you remember.',
    paragraphs: ['Ask a golfer about their round and you might get a number. Ask them again next week and you’ll probably get a story.', 'A brave line over the water. The putt that almost dropped. The walk between holes when the conversation was better than the golf.', 'That’s the space a great newsletter can explore: the moments that deserve a little more time, told in a voice you already know.', 'Every round has one. The drive that found the only flat lie on the fairway. The chip that checked up when it had no right to. The number on the card never quite captures it.', 'So each week we slow the tape down. One hole, one decision, one moment worth remembering, and the story of why it mattered.'],
    extra: 'Inside the ropes · Behind the videos · A note from the Bryan Bros'
  },
  switch: {
    author: 'By Kevin Pietersen', ink: '#041C10', accent: '#A9794E', plate: 'Kevin Pietersen on the outfield, between takes.',
    name: 'The Switch', masthead: 'THE SWITCH', byline: 'KEVIN PIETERSEN / CRICKET & BEYOND', theme: 'switch-theme', image: 'assets/switch.webp', alt: 'Kevin Pietersen on a cricket field',
    heading: 'A different perspective.',
    description: 'Cricket, conversation and the world beyond the boundary. A publication with the space for stories, opinions and a wider view.',
    storyTitle: 'When the ground goes quiet.',
    paragraphs: ['Every cricket ground has two personalities. There’s the one you see on television, alive with noise and the promise of a contest.', 'And then there’s the ground after the crowd has gone. The lights are still on. Someone is rolling the square. For a moment, you can appreciate the place itself.', 'A newsletter can make room for both: the big conversation everyone is having and the small detail you might otherwise miss.', 'It’s the hour when the groundstaff take over. The covers come off, the roller starts its slow lap, and the scoreboard still shows a total nobody will remember by Tuesday.', 'Stories live in both hours. This is where they get told.'],
    extra: 'From the boundary · A wider view · The next conversation'
  },
  slice: {
    author: 'By Rick Shiels', ink: '#1D1D1D', accent: '#E00000', plate: 'Rick Shiels in the locker room, before the round.',
    name: 'The Extra Slice', masthead: 'THE EXTRA SLICE', byline: 'RICK SHIELS / GOLF', theme: 'green-theme', image: 'assets/slice-cover.webp', alt: 'Rick Shiels sitting in a golf club locker room',
    heading: 'Behind the camera.',
    description: 'A weekly letter from Rick Shiels: the moments that don’t make the videos, the team behind them and a look at what’s coming up on the channel.',
    storyTitle: 'The bit that didn’t make the edit.',
    paragraphs: ['Every video starts long before the camera rolls. There’s a plan, a course, a forecast and usually a change of plan.', 'Most of it never makes the final cut. The conversations between shots, the take that went wrong, the moment the whole team stopped to watch one putt.', 'That’s the extra slice: the story around the story, told properly, so it’s worth opening even if you’ve already seen the video.', 'A ten-minute video can take a whole day. There’s the drive to the course, the weather that changed the plan, the hole everyone wanted to film twice.', 'Each week, one of those moments gets the room it deserves, along with a look at what’s coming up on the channel.'],
    extra: 'Behind the camera · Coming up on the channel · One thing to try'
  },
  greenread: {
    author: 'From Tracerrr', ink: '#0C0D0C', accent: '#00A64E', plate: 'The read: two cups left, uphill to the hole.',
    name: 'Green Read', masthead: 'GREEN READ', byline: 'A TRACERRR PUBLICATION / GOLF', theme: 'read-theme', image: 'assets/greenread-cover.svg', alt: 'A green-reading map with slope arrows and a putt breaking into the hole',
    heading: 'Golf, for people who miss the middle.',
    description: 'Our own golf newsletter. Three emails a week: what’s worth watching, what’s worth buying and what actually happened. Five minutes each, and free.',
    storyTitle: 'Every green has a story.',
    paragraphs: ['A good read starts before you reach the ball. You look at the slope, the grain, the way the light falls across the grass.', 'Golf stories work the same way. The result is the easy part. The interesting part is everything that bent the line along the way.', 'That’s what Green Read is for: a closer look, three times a week.', 'Most golf coverage gives you the leaderboard and moves on. The middle, the part of a round where everything actually turns, gets skipped.', 'So that’s where we look. Three times a week, five minutes at a time.'],
    extra: 'Monday · Wednesday · Friday · Five minutes each'
  },
  jobs: {
    author: 'A newsletter about working in golf', ink: '#103B3C', accent: '#D2693C', plate: 'The job sheet, marked up in pencil.',
    name: 'Cool Jobs in Golf', masthead: 'COOL JOBS IN GOLF', byline: 'GOLF CAREERS', theme: 'jobs-theme', art: 'jobs', alt: '',
    heading: 'Work in the game.',
    description: 'The most interesting jobs in golf, delivered to your inbox: the roles, the people doing them and how they got there.',
    storyTitle: 'There’s more than one way in.',
    paragraphs: ['Ask people who work in golf how they got there and you rarely hear the same answer twice.', 'Some started in the pro shop. Some came from somewhere else entirely and found a way to bring what they knew to the game.', 'Every edition opens a few more doors: real roles, real routes and the people who took them.', 'There are greenkeepers who studied chemistry, caddies who became agents and marketers who have never broken ninety. Every one of them found a way in.', 'Each edition brings a handful of roles worth applying for, and the story of someone already doing one.'],
    extra: 'The roles · The people · The route in'
  },
  zire: {
    author: 'By Zire Golf', ink: '#000000', accent: '#000000', plate: 'News, drama and chaos, weekly.',
    name: 'Zire Golf', masthead: 'ZIRE GOLF', byline: 'ZIRE GOLF / GOLF', theme: 'zire-theme', art: 'zire', alt: '',
    heading: 'News, drama and chaos.',
    description: 'Golf news, drama and chaos, straight from the clubhouse. Every week: the biggest moments across the golf world, covering pros, fans and everything in between.',
    storyTitle: 'The week in the game.',
    paragraphs: ['A week in golf moves quickly. A result, a debate, a round that didn’t go to plan.', 'A newsletter gives it a moment to settle: the one story worth telling properly, and a few things worth knowing.', 'Same voice. More room.', 'There’s the shot everyone clipped. There’s the post-round quote that got deleted. There’s the argument in the group chat that still hasn’t ended.', 'Every week it all gets rounded up, the way you’d tell it to your mates in the clubhouse.'],
    extra: 'The week · The story · What’s next'
  }
};

// Navigation stays usable without a framework or an external service.
const menuButton = $('.menu-button');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  $('#mobile-nav').hidden = expanded;
  $('span', menuButton).textContent = expanded ? '+' : '−';
});
$$('#mobile-nav a').forEach(link => link.addEventListener('click', () => {
  $('#mobile-nav').hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  $('span', menuButton).textContent = '+';
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !$('#mobile-nav').hidden) {
    $('#mobile-nav').hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    $('span', menuButton).textContent = '+';
    menuButton.focus();
  }
});

let toastTimer;
function toast(message) {
  clearTimeout(toastTimer);
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('visible');
  toastTimer = setTimeout(() => element.classList.remove('visible'), 4200);
}

// Native dialogs provide focus containment and Escape behavior.
$$('dialog').forEach(dialog => {
  $$('[data-close]', dialog).forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
});

const romanPlates = ['I','II','III','IV','V','VI'];
function openPublication(key) {
  const data = publicationData[key];
  if (!data) return;
  const index = Object.keys(publicationData).indexOf(key);
  const plateArt = data.image ? `<img src="${data.image}" alt="${escapeHTML(data.alt)}">` : '<div class="plate-art"></div>';
  const [first, ...rest] = data.paragraphs;
  const firstWords = first.split(' ');
  const lead = firstWords.slice(0, 4).join(' ');
  const remainder = firstWords.slice(4).join(' ');
  $('#publication-detail').innerHTML = `
    <article class="book-spread ${data.theme}" style="--book-ink:${data.ink};--book-accent:${data.accent}">
      <section class="book-page book-verso" aria-label="Title page">
        <header class="running-head"><span>Tracerrr</span><span>Est. 2026</span></header>
        <div class="title-block">
          <p class="title-imprint">A Tracerrr publication</p>
          <h2 class="title-masthead">${escapeHTML(data.name)}</h2>
          <p class="title-author">${escapeHTML(data.author)}</p>
        </div>
        <figure class="book-plate">
          <div class="plate-frame">${plateArt}</div>
          <figcaption><span class="plate-number">Plate ${romanPlates[index] || 'I'}.</span> ${escapeHTML(data.plate)}</figcaption>
        </figure>
        <footer class="folio">ii</footer>
      </section>
      <section class="book-page book-recto" aria-label="Opening chapter">
        <header class="running-head"><span>${escapeHTML(data.name)}</span><span>Edition 001</span></header>
        <p class="chapter-number">Chapter One</p>
        <h3 class="chapter-title">${escapeHTML(data.storyTitle)}</h3>
        <p class="chapter-epigraph">${escapeHTML(data.description)}</p>
        <div class="fleuron" aria-hidden="true"><svg viewBox="0 0 120 14"><path d="M4 7 H 46"/><path d="M74 7 H 116"/><path d="M60 1.5 L 65.5 7 L 60 12.5 L 54.5 7 Z" class="f"/><circle cx="50" cy="7" r="1.6" class="f"/><circle cx="70" cy="7" r="1.6" class="f"/></svg></div>
        <div class="chapter-body">
          <p class="opening"><span class="drop-cap">${escapeHTML(lead.charAt(0))}</span><span class="lead-in">${escapeHTML(lead.slice(1))}</span> ${escapeHTML(remainder)}</p>
          ${rest.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join('')}
        </div>
        <p class="chapter-contents"><span>In every edition</span>${escapeHTML(data.extra)}</p>
        <footer class="folio">1</footer>
      </section>
    </article>
    <div class="book-footer">
      <p>An illustrative opening, written to show the editorial direction. It isn’t an archived issue or a quotation from the creator.</p>
      <button class="button" type="button" id="publication-enquire">Explore a partnership</button>
    </div>`;
  if (data.art) {
    const art = $(`.publication-art[data-publication="${key}"] .cover-art`);
    if (art) $('.plate-art').appendChild(art.cloneNode(true));
  }
  $('#publication-enquire').addEventListener('click', () => {
    $('#publication-dialog').close();
    openContact('brand', `I'd like to explore a partnership with ${data.name}.`);
  });
  const dialog = $('#publication-dialog');
  dialog.showModal();
  dialog.scrollTop = 0;
}
$$('[data-publication]').forEach(button => button.addEventListener('click', () => openPublication(button.dataset.publication)));
const shelfCopy = {
  golf:{title:'The golf shelf',count:'Five titles, each in its own voice.'},
  cricket:{title:'The cricket shelf',count:'One title so far, with room for more.'},
  food:{title:'The food shelf',copy:'Recipes, restaurants and the people behind them. If you cook, eat or write about it for a living, this shelf could start with you.'},
  travel:{title:'The travel shelf',copy:'Places worth the trip, told by people who have been. If your audience follows you around the world, this shelf could start with you.'},
  space:{title:'The space shelf',copy:'Launches, missions and the night sky. If your audience looks up, this shelf could start with you.'},
  science:{title:'The science shelf',copy:'Big ideas, explained by people who love them. If you make science make sense, this shelf could start with you.'}
};
let activeShelf = null;
function openShelf(key, focus = false, scroll = true) {
  const panel = $('#shelf-panel');
  if (activeShelf === key && !panel.hidden && !focus) { closeShelf(); return; }
  activeShelf = key;
  const data = shelfCopy[key];
  $$('.bay').forEach(bay => {
    const on = bay.dataset.shelf === key;
    bay.classList.toggle('active', on);
    bay.setAttribute('aria-selected', String(on));
    if (on && focus) bay.focus();
  });
  panel.setAttribute('aria-labelledby', `bay-${key}`);
  $('#shelf-title').textContent = data.title;
  const titles = $$('.publication').filter(pub => pub.dataset.category === key);
  $$('.publication').forEach(pub => pub.hidden = pub.dataset.category !== key);
  const empty = titles.length === 0;
  $('#shelf-empty').hidden = !empty;
  $('#publication-grid').hidden = empty;
  $('#shelf-count').textContent = empty ? 'Coming soon.' : data.count;
  if (empty) $('#shelf-empty-copy').textContent = data.copy;
  panel.hidden = false;
  $('#shelf-hint').hidden = true;
  $('#publication-grid').scrollLeft = 0;
  if (scroll) requestAnimationFrame(() => panel.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'start'}));
}
function closeShelf() {
  activeShelf = null;
  $('#shelf-panel').hidden = true;
  $('#shelf-hint').hidden = false;
  $$('.bay').forEach(bay => {bay.classList.remove('active');bay.setAttribute('aria-selected','false');});
}
$$('.bay').forEach(bay => bay.addEventListener('click', () => openShelf(bay.dataset.shelf)));
$('.bookcase').addEventListener('keydown', event => keyboardTabs(event, '.bay', next => openShelf($$('.bay')[next].dataset.shelf, true, false)));
$('#shelf-empty-cta').addEventListener('click', () => {
  const label = (activeShelf || 'new').charAt(0).toUpperCase() + (activeShelf || 'new').slice(1);
  openContact('creator', `I'd like to talk about starting a ${label.toLowerCase()} newsletter with Tracerrr.\n\nMy channel:\nAudience size:\nWhat I'd write about:`);
});

const rawIdea = '“I was thinking about the shots we remember. It’s rarely the perfectly sensible one. It’s the one where you saw a gap, backed yourself and thought: let’s give it a go. There’s probably a story in that.”';
const studioStages = [
  () => `<span class="sample-eyebrow">A THOUGHT WORTH FOLLOWING</span><div class="idea-wave" aria-hidden="true">${[12,23,31,18,42,27,48,32,19,35,45,26,15,32,49,38,24,42,30,16,26,37,22,13,29,19,11,23,15,8].map((height,index) => `<span style="--bar:${height}px;--delay:${index*.04}s"></span>`).join('')}</div><p class="idea-quote">${rawIdea}</p><p class="idea-byline">An illustrative idea.<br>Something personal. Something to build on.</p>`,
  () => `<span class="sample-eyebrow">FINDING THE STORY INSIDE THE THOUGHT</span><h3 class="edit-heading">A story with a little courage.</h3><div class="edit-row"><span>THE ANGLE</span><p>The shots we remember reveal how we play.</p></div><div class="edit-row"><span>THE OPENING</span><p>Ask a golfer about their round and you might get a number. Ask them next week and you’ll probably get a story.</p></div><div class="edit-row"><span>THE READER'S PART</span><p>What’s the one shot you still talk about?</p></div><p class="idea-byline">Keep the perspective. Give it a shape.</p>`,
  () => `<div class="mini-edition"><span class="sample-eyebrow">THE FINISHED EDITORIAL DIRECTION</span><div class="mini-masthead">THE BRYAN BRIEF</div><img src="assets/bryan.webp" alt="The Bryan Bros on a links course" width="1100" height="1375"><h3>The shot you remember.</h3><p>Ask a golfer about their round and you might get a number. Ask them next week and you’ll probably get a story.</p><p style="margin-top:12px">A brave line. A little belief. A moment worth sharing.</p></div>`
];
const stageLabels = ['THE RAW MATERIAL','THE EDITORIAL CRAFT','THE NEXT EDITION'];
let stage = 0;
let storyPlaying = false;
let storyTimers = [];
function renderStudio(next) {
  stage = next;
  $('#studio-content').innerHTML = studioStages[next]();
  $('#stage-label').textContent = stageLabels[next];
  $('#stage-count').textContent = `0${next + 1} / 03`;
  $('#studio-panel').setAttribute('aria-labelledby', ['tab-idea','tab-edit','tab-edition'][next]);
  $$('.studio-tab').forEach((tab,index) => {
    tab.classList.toggle('active',index === next);
    tab.setAttribute('aria-selected',String(index === next));
    tab.tabIndex = index === next ? 0 : -1;
  });
  $('.idea-wave')?.classList.toggle('playing', storyPlaying && !reduceMotion);
}
function stopStory() {
  storyTimers.forEach(clearTimeout);
  storyTimers = [];
  storyPlaying = false;
  $('#play-story').innerHTML = 'Watch it come together <span aria-hidden="true">▶</span>';
  $('.idea-wave')?.classList.remove('playing');
}
$$('.studio-tab').forEach(tab => tab.addEventListener('click', () => {
  stopStory();renderStudio(Number(tab.dataset.stage));
}));
function keyboardTabs(event, selector, callback) {
  const keys = ['ArrowRight','ArrowLeft','Home','End'];
  if (!keys.includes(event.key)) return;
  const tabs = $$(selector);
  const current = tabs.indexOf(document.activeElement);
  if (current < 0) return;
  event.preventDefault();
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  tabs[next].focus();callback(next);
}
$('.studio-controls').addEventListener('keydown', event => keyboardTabs(event,'.studio-tab', next => {stopStory();renderStudio(next);}));
$('#play-story').addEventListener('click', () => {
  if (storyPlaying) {stopStory();return;}
  storyPlaying = true;
  $('#play-story').innerHTML = 'Pause the story <span aria-hidden="true">Ⅱ</span>';
  renderStudio(0);
  storyTimers = [setTimeout(() => renderStudio(1),4200),setTimeout(() => renderStudio(2),8500),setTimeout(stopStory,12000)];
});
renderStudio(0);

const readerStages = [
  {kicker:'IT STARTS WITH A MOMENT', heading:'A video catches their attention.', description:'They find a creator they like. A point of view, a sense of humor, a story that makes them want to hear more.', example:'A Bryan Bros video', result:'A new connection'},
  {kicker:'THE READER MAKES A CHOICE', heading:'They want the next chapter.', description:'A clear invitation gives them a reason to subscribe. More stories, delivered directly. They choose which publication to receive.', example:'The Bryan Brief', result:'An intentional subscription'},
  {kicker:'A RELATIONSHIP TAKES SHAPE', heading:'An edition becomes a habit.', description:'Consistent, thoughtful editions reward that choice. Over time, a familiar voice becomes something they look forward to.', example:'An edition worth opening', result:'A reason to return'},
  {kicker:'SOMETHING ELSE WORTH READING', heading:'A good recommendation travels.', description:'A relevant introduction to Green Read opens another door. Readers opt in separately, following their interests through the network.', example:'Discover Green Read', result:'A new subscription, by choice'}
];
function renderReader(index) {
  const data = readerStages[index];
  const panel = $('#reader-panel');
  panel.classList.add('swap'); void panel.offsetWidth; panel.classList.remove('swap');
  $('#reader-kicker').textContent = data.kicker;
  $('#reader-heading').textContent = data.heading;
  $('#reader-description').textContent = data.description;
  $('#reader-example').innerHTML = `<span>${escapeHTML(data.example)}</span><strong>${escapeHTML(data.result)}</strong>`;
  $('#reader-panel').setAttribute('aria-labelledby',`reader-tab-${index}`);
  $$('.reader-step').forEach((button,i) => {
    button.classList.toggle('active',i === index);
    button.setAttribute('aria-selected',String(i === index));
    button.tabIndex = i === index ? 0 : -1;
  });
}
$$('[data-reader]').forEach(button => button.addEventListener('click', () => renderReader(Number(button.dataset.reader))));
$('.reader-track').addEventListener('keydown', event => keyboardTabs(event,'.reader-step',renderReader));
renderReader(0);

const campaignFormats = {
  presenting:{disclosure:'PRESENTED BY',heading:{bryan:'A better day on the course.',switch:'A different perspective.',slice:'Behind the camera, this week.',greenread:'Read the game.',jobs:'Your next move in golf.',zire:'The week in the game.'},copy:'A useful idea, a relevant recommendation and your brand, naturally part of the edition.'},
  native:{disclosure:'SPONSORED EDITORIAL / WITH',heading:{bryan:'A recommendation worth making.',switch:'Something worth your time.',slice:'A closer look at something good.',greenread:'A closer look at the line.',jobs:'Where the work is.',zire:'Worth a place in your bag.'},copy:'An editorial placement gives your brand the space to explain a relevant idea in the context of the publication.'},
  spotlight:{disclosure:'BRAND SPOTLIGHT / PARTNER CONTENT',heading:{bryan:'Meet your next favorite.',switch:'A new name in the conversation.',slice:'Worth a place in your weekend.',greenread:'A name worth knowing.',jobs:'A place worth working.',zire:'Meet your next favorite.'},copy:'A dedicated spotlight introduces your brand with a clear story, useful detail and room for the reader to explore.'}
};
const campaignPalettes = {bryan:['#0D1B2A','#f4f6fb','#5B70E0'],switch:['#041C10','#efe4d6','#D4A47C'],slice:['#1D1D1D','#ffffff','#FF0000'],greenread:['#0C0D0C','#f2f4f1','#00A64E'],jobs:['#103B3C','#EADBB8','#D2693C'],zire:['#000000','#ffffff','#ffffff']};
function renderCampaign() {
  const key = $('#brand-publication').value;
  const formatKey = $('#brand-format').value;
  const brand = $('#brand-name').value.trim() || 'Your Brand';
  const data = publicationData[key];
  const format = campaignFormats[formatKey];
  $('#campaign-publication').textContent = data.masthead;
  $('#campaign-disclosure').textContent = formatKey === 'spotlight' ? `${format.disclosure} / ${brand.toUpperCase()}` : `${format.disclosure} ${brand.toUpperCase()}`;
  $('#campaign-heading').textContent = format.heading[key];
  $('#campaign-copy').textContent = format.copy;
  $('#campaign-brand').textContent = brand;
  const palette = campaignPalettes[key];
  $('#campaign-placement').style.background = palette[0];
  $('#campaign-placement').style.color = palette[1];
  $('#campaign-placement').style.setProperty('--accent', palette[2]);
}
['brand-name','brand-publication','brand-format'].forEach(id => $(`#${id}`).addEventListener(id === 'brand-name' ? 'input' : 'change',renderCampaign));
$('#campaign-enquire').addEventListener('click', () => {
  const brand = $('#brand-name').value.trim() || 'Our brand';
  const publication = publicationData[$('#brand-publication').value].name;
  const format = $('#brand-format').selectedOptions[0].textContent;
  openContact('brand',`I'd like to explore a newsletter partnership.\n\nBrand: ${brand}\nPublication: ${publication}\nPlacement of interest: ${format}\n\nCampaign objective:\n\nTiming:\n\nBudget range:`);
});
renderCampaign();

let contactType = 'general';
function openContact(type = 'general', message = '') {
  contactType = type;
  $('#contact-title').innerHTML = type === 'creator' ? 'Your next<br>chapter.' : type === 'brand' ? 'Good company<br>for your brand.' : "Let's make<br>something happen.";
  $('#contact-description').textContent = type === 'creator' ? 'Bring your perspective. Let’s explore the publication we could build together.' : type === 'brand' ? 'Tell us what you want to achieve. We’ll help find the right publication and partnership.' : 'Tell us a little about what you have in mind.';
  $('#contact-message').value = message;
  $('#contact-status').textContent = '';
  $('#contact-form').hidden = false;
  $('#contact-sent').hidden = true;
  $('#contact-dialog').showModal();
  $('#contact-dialog').scrollTop = 0;
}
$$('.how-tab').forEach(tab => tab.addEventListener('click', () => {
  const view = tab.dataset.how;
  $$('.how-tab').forEach(t => {const on = t === tab; t.classList.toggle('active', on); t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;});
  $('.how').dataset.view = view;
  const cta = $('[data-how-cta]');
  cta.dataset.contact = view;
  cta.textContent = view === 'brand' ? 'Plan a campaign' : 'Start your newsletter';
}));
$('.how-toggle').addEventListener('keydown', event => keyboardTabs(event, '.how-tab', next => $$('.how-tab')[next].click()));
$$('[data-contact]').forEach(button => button.addEventListener('click', event => {event.preventDefault(); openContact(button.dataset.contact);}));
$('#contact-form').addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const button = $('#contact-submit');
  const status = $('#contact-status');
  $('#contact-type').value = contactType;
  button.disabled = true;
  button.textContent = 'Sending…';
  status.textContent = '';
  status.classList.remove('error');
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(new FormData(form)).toString()
    });
    if (!response.ok) throw new Error(`Status ${response.status}`);
    $('#contact-sent-email').textContent = $('#contact-email').value.trim();
    form.hidden = true;
    $('#contact-sent').hidden = false;
    form.reset();
  } catch (error) {
    status.classList.add('error');
    status.innerHTML = 'That didn’t send. Please try again, or email <a href="mailto:jake@tracerrr.com">jake@tracerrr.com</a>.';
  } finally {
    button.disabled = false;
    button.textContent = 'Send inquiry';
  }
});
$('#privacy-open').addEventListener('click', () => $('#privacy-dialog').showModal());
$('#year').textContent = new Date().getFullYear();

// Reveal once on scroll, with a fully visible fallback and reduced-motion support.
if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {entry.target.classList.remove('pending');observer.unobserve(entry.target);}
    });
  },{threshold:.06});
  $$('.section-heading,.studio-layout,.network-layout,.creator-layout,.brand-layout,.about-layout,.creator-services').forEach(element => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('reveal','pending');observer.observe(element);
    }
  });
}
document.addEventListener('visibilitychange', () => {if (document.hidden) stopStory();});

// The same visible preview actions are available to supporting browser agents.
if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const register = tool => {
    try {Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(() => {});} catch { /* The visual interface remains available. */ }
  };
  register({
    name:'configure_campaign_preview', title:'Preview a newsletter sponsorship',
    description:'Configure an illustrative brand placement in the visible campaign preview. Does not reserve inventory, send an inquiry or buy a placement.',
    inputSchema:{type:'object',properties:{brand:{type:'string',minLength:1,maxLength:60},publication:{type:'string',enum:Object.keys(publicationData)},format:{type:'string',enum:Object.keys(campaignFormats)}},required:['brand','publication','format'],additionalProperties:false},
    annotations:{readOnlyHint:false,untrustedContentHint:true},
    execute(input) {
      if (!input || typeof input !== 'object' || typeof input.brand !== 'string' || !input.brand.trim() || input.brand.length > 60 || !Object.hasOwn(publicationData,input.publication) || !Object.hasOwn(campaignFormats,input.format)) throw new Error('Provide a valid brand, publication and placement format.');
      $('#brand-name').value=input.brand;$('#brand-publication').value=input.publication;$('#brand-format').value=input.format;renderCampaign();
      return {status:'preview_ready',brand:input.brand,publication:publicationData[input.publication].name,format:input.format};
    }
  });
  window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}

// Sticky header: expose its height for anchors and the mobile menu, and mark the scrolled state.
const header = $('.header');
const setHeaderHeight = () => document.documentElement.style.setProperty('--hh', `${header.offsetHeight}px`);
setHeaderHeight();
window.addEventListener('resize', setHeaderHeight, {passive:true});
let scrolledState = false;
window.addEventListener('scroll', () => {
  const next = window.scrollY > 8;
  if (next !== scrolledState) {scrolledState = next;header.classList.toggle('scrolled', next);requestAnimationFrame(setHeaderHeight);}
}, {passive:true});

// Reader journey: steadily rotate through the four steps while the section is on screen.
(() => {
  const STEP_MS = 4500;
  const section = $('#network');
  const journey = $('.reader-journey');
  let current = 0, timer = null, inView = false, paused = false;
  const activeIndex = () => Math.max(0, $$('.reader-step').findIndex(step => step.classList.contains('active')));
  const restartBar = () => {
    $$('.reader-step').forEach(step => step.classList.remove('filling'));
    const step = $$('.reader-step')[current];
    void step.offsetWidth;
    if (!reduceMotion && inView && !paused) step.classList.add('filling');
  };
  const schedule = () => {
    clearTimeout(timer);
    if (reduceMotion || !inView || paused || document.hidden) {restartBar(); return;}
    restartBar();
    timer = setTimeout(() => {current = (activeIndex() + 1) % 4; renderReader(current); schedule();}, STEP_MS);
  };
  $$('[data-reader]').forEach(button => button.addEventListener('click', () => {current = Number(button.dataset.reader); schedule();}));
  journey.addEventListener('mouseenter', () => {paused = true; schedule();});
  journey.addEventListener('mouseleave', () => {paused = false; current = activeIndex(); schedule();});
  journey.addEventListener('focusin', () => {paused = true; schedule();});
  journey.addEventListener('focusout', () => {paused = false; schedule();});
  document.addEventListener('visibilitychange', schedule);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {inView = entries[0].isIntersecting; current = activeIndex(); schedule();}, {threshold: .35}).observe(section);
  }
})();

// Live network total: one combined figure, fetched from /api/subscribers (proxied to the Tracerrr database).
// Per-newsletter counts are never requested or shown.
(() => {
  const box = $('#live-total'), out = $('#live-number');
  if (!box) return;
  const fmt = new Intl.NumberFormat('en-US');
  let shown = 0;
  const animateTo = target => {
    const from = shown, start = performance.now(), dur = reduceMotion || from === target ? 0 : 1600;
    const step = now => {
      const t = dur ? Math.min(1, (now - start) / dur) : 1;
      shown = Math.round(from + (target - from) * (1 - Math.pow(1 - t, 3)));
      out.textContent = fmt.format(shown);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const load = async () => {
    try {
      const res = await fetch('/api/subscribers', {headers: {Accept: 'application/json'}});
      if (!res.ok) throw new Error(res.status);
      const {total} = await res.json();
      if (!Number.isFinite(total) || total <= 0) throw new Error('bad total');
      box.hidden = false;
      animateTo(total);
    } catch { if (!shown) box.hidden = true; }
  };
  load();
  setInterval(() => { if (!document.hidden) load(); }, 5 * 60 * 1000);
})();
