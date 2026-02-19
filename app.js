const promptSets = [
  {
    theme: "Tolerance and social cohesion",
    taskA: [
      "Tolerance is the glue that holds our community together.",
      "Tolerating people who are different to you is difficult but better than hatred.",
      "Tolerance is taught as a virtue but often hard to practice daily.",
      "Tolerance does not require abandoning your own beliefs."
    ],
    taskB: [
      "Real happiness often comes from unexpected sources.",
      "Happiness is the goal and right of every person.",
      "There is no single correct way to be happy.",
      "Authentic happiness is often found in surprising places."
    ]
  },
  {
    theme: "Drugs and determination",
    taskA: [
      "When one drug dealer is removed, another replaces them.",
      "Drug abuse is often a symptom of deeper social problems.",
      "Many people use illicit drugs to escape hardship.",
      "Communities are often the biggest victims of the illegal drug trade."
    ],
    taskB: [
      "Determination is essential for achieving goals.",
      "A determined person rises again after every setback.",
      "Hard work and persistence matter more than luck.",
      "Sheer willpower can compensate for many shortcomings."
    ]
  },
  {
    theme: "Digital life and confidence",
    taskA: [
      "The average person spends many hours online each day.",
      "Digital and real identities are now deeply intertwined.",
      "Smartphones erased much of the online-offline divide.",
      "What we do online has real offline consequences."
    ],
    taskB: [
      "Success is strongly linked to confidence and fortitude.",
      "Confidence and arrogance are separated by a fine line.",
      "Without self-belief, people are defeated before they begin.",
      "Many young people lack confidence to pursue their ambitions."
    ]
  },
  {
    theme: "Inequality and collaboration",
    taskA: [
      "The gap between rich and poor is widening.",
      "Extreme inequality undermines moral and economic stability.",
      "An age of opportunity for some can be exclusion for others.",
      "Severe inequality has often preceded unrest and revolution."
    ],
    taskB: [
      "Humanity's greatest achievements are collaborative.",
      "Working toward shared goals improves outcomes.",
      "Collaboration shapes work, society, and relationships.",
      "Working together may be slower, but it reaches farther."
    ]
  },
  {
    theme: "Travel and accomplishment",
    taskA: [
      "Travel broadens perspective.",
      "A job fills your pockets; travel can fill your soul.",
      "Not traveling can limit one's understanding of the world.",
      "Travel can make people richer in non-financial ways."
    ],
    taskB: [
      "Pride often comes from reflecting on accomplishments.",
      "Accomplishment can be measured in both major and minor wins.",
      "Achievement without arrogance reflects maturity.",
      "Remaining true to yourself may be a deep accomplishment."
    ]
  },
  {
    theme: "Shared values and storytelling",
    taskA: [
      "Communities rely on shared values for productive debate.",
      "Disagreement on details can still rest on common values.",
      "Collective progress requires commitment to core principles.",
      "Healthy debate is hard without shared assumptions."
    ],
    taskB: [
      "Humans make sense of life through stories.",
      "Stories teach us about the world and our place in it.",
      "Storytelling is a persistent human instinct.",
      "Stories are powerful vehicles for ideas."
    ]
  },
  {
    theme: "Consumerism and education",
    taskA: [
      "Consumerism often promotes purchases without real benefit.",
      "Modern economies can be driven by desire rather than need.",
      "For many, consumption has become a central life pattern.",
      "Critiquing consumerism is difficult while living within it."
    ],
    taskB: [
      "Education is a powerful route out of poverty.",
      "Education gives people tools to reshape their own lives.",
      "Many major social issues are tied to educational gaps.",
      "Improving education systems can produce broad social change."
    ]
  },
  {
    theme: "Multiculturalism and loneliness",
    taskA: [
      "Diversity can be a source of collective strength.",
      "Respecting other cultures does not require abandoning your own.",
      "In multicultural societies, tolerance becomes essential.",
      "People may live in multicultural contexts but remain socially narrow."
    ],
    taskB: [
      "People can feel lonely even when not physically alone.",
      "Mass communication has not eliminated disconnection.",
      "Loneliness can sometimes invite difficult self-reflection.",
      "Feeling alone in a crowd can reveal fragile support systems."
    ]
  },
  {
    theme: "War and pressure",
    taskA: [
      "Sending a nation to war is among the gravest decisions.",
      "Even justified war has moral costs.",
      "War can be seen as a failure of human reasoning.",
      "Warring groups usually believe they are morally correct."
    ],
    taskB: [
      "People feel pressure to be their best.",
      "Pressure can produce growth but also breakdown.",
      "Self-criticism intensifies when goals are missed.",
      "High achievers often treat failure as unacceptable."
    ]
  },
  {
    theme: "Addiction and celebrity culture",
    taskA: [
      "Addiction can be viewed as illness rather than choice.",
      "Connection can be central to recovery.",
      "Addiction is more widespread than many assume.",
      "Public education is essential to prevention and support."
    ],
    taskB: [
      "Celebrity culture can distract from difficult realities.",
      "Many people aspire to fame rather than contribution.",
      "Celebrities and heroes are not the same.",
      "People can be both fascinated and repelled by celebrity culture."
    ]
  },
  {
    theme: "History and mood",
    taskA: [
      "History shapes who we are.",
      "History rewards those who ask serious questions.",
      "Ignoring history risks losing both past and future.",
      "Forgetting the past can repeat old failures."
    ],
    taskB: [
      "How personable someone is may depend on mood.",
      "Mood can shift quickly from external events.",
      "Modern life distractions can blur emotional self-awareness.",
      "Contemporary mood can feel confused and pessimistic."
    ]
  },
  {
    theme: "Xenophobia and intelligence",
    taskA: [
      "Societies can fear outsiders irrationally.",
      "Collective fear can encourage hostility toward outsiders.",
      "Prejudice appears in many forms.",
      "Leaders can weaponize fear into aggression and hate."
    ],
    taskB: [
      "Intelligence exists in many forms.",
      "People fail when judged by narrow standards.",
      "The mind has evolved for varied kinds of content.",
      "Economies often value limited forms of intelligence."
    ]
  },
  {
    theme: "Justice and punishment",
    taskA: [
      "A justice system should prioritise rehabilitation over revenge.",
      "Punishment can protect society but still fail to produce justice.",
      "Equality before the law is an ideal, not always a reality.",
      "A society is judged by how it treats its most powerless people."
    ],
    taskB: [
      "Personal responsibility begins where excuses end.",
      "Forgiveness can be stronger than retaliation.",
      "People become who they repeatedly choose to be.",
      "Growth often starts with owning your mistakes."
    ]
  },
  {
    theme: "Freedom and security",
    taskA: [
      "Security measures can quietly erode civil liberties.",
      "A free society accepts some risk to preserve autonomy.",
      "Safety and freedom are often framed as a false binary.",
      "The test of democracy is how power is constrained in crises."
    ],
    taskB: [
      "Fear narrows imagination and moral courage.",
      "Courage is not the absence of fear but action despite it.",
      "Comfort can become a prison when it replaces conviction.",
      "True confidence is calm under uncertainty."
    ]
  },
  {
    theme: "Science, ethics, and progress",
    taskA: [
      "Scientific progress without ethics can become dangerous.",
      "Innovation should be measured by human benefit, not novelty.",
      "Not everything that can be done should be done.",
      "Public trust in science depends on transparency and humility."
    ],
    taskB: [
      "Curiosity is the beginning of wisdom.",
      "Doubt can strengthen knowledge rather than weaken it.",
      "Intellectual humility is a mark of real learning.",
      "Wonder is often more valuable than certainty."
    ]
  },
  {
    theme: "Climate and intergenerational duty",
    taskA: [
      "Climate inaction is a moral decision, not just a policy delay.",
      "Economic growth cannot be the only measure of success.",
      "Environmental costs are often shifted to future generations.",
      "Collective problems require collective sacrifice."
    ],
    taskB: [
      "Hope is a discipline, not a mood.",
      "Responsibility means acting before consequences become visible.",
      "Small personal choices can still reflect serious values.",
      "Legacy is built through what we preserve for others."
    ]
  },
  {
    theme: "Technology, work, and purpose",
    taskA: [
      "Automation can increase efficiency while reducing dignity at work.",
      "Technology should augment workers, not discard them.",
      "Productivity is not the same as progress.",
      "A society that values output alone risks losing meaning."
    ],
    taskB: [
      "Purpose is more sustaining than motivation.",
      "A career can provide income without providing identity.",
      "Meaningful work is not always prestigious work.",
      "Achievement without purpose often feels empty."
    ]
  },
  {
    theme: "Misinformation and public trust",
    taskA: [
      "Misinformation spreads fastest where trust is weakest.",
      "Free speech and truth-seeking are related but not identical.",
      "Algorithms reward outrage more than accuracy.",
      "Media literacy is now a civic necessity."
    ],
    taskB: [
      "Critical thinking is a habit, not a talent.",
      "People prefer certainty even when it is false.",
      "Changing your mind can be an act of integrity.",
      "Intellectual honesty is harder than intelligence."
    ]
  },
  {
    theme: "Health inequality and social duty",
    taskA: [
      "Access to healthcare should not depend on postcode or wealth.",
      "Prevention is less visible than treatment but often more effective.",
      "Public health succeeds when communities trust institutions.",
      "A society's ethics are visible in its health outcomes."
    ],
    taskB: [
      "Compassion is strongest when it costs us something.",
      "Resilience is built through support, not isolation.",
      "Vulnerability can deepen connection rather than diminish strength.",
      "Dignity in suffering is often upheld by others."
    ]
  },
  {
    theme: "Urban life, belonging, and community",
    taskA: [
      "Cities can increase opportunity while reducing social cohesion.",
      "Community is built by participation, not proximity.",
      "Public spaces shape the quality of civic life.",
      "Loneliness can thrive in densely populated societies."
    ],
    taskB: [
      "Belonging is a psychological need, not a luxury.",
      "Friendship is one of the most practical forms of care.",
      "Identity is shaped by who we spend time with.",
      "To be seen is often more healing than to be advised."
    ]
  },
  {
    theme: "Bioethics, genetics, and human limits",
    taskA: [
      "Gene editing raises questions beyond medicine.",
      "Medical power should be matched by ethical restraint.",
      "Extending life is not the same as improving life.",
      "The definition of normality can become oppressive in healthcare."
    ],
    taskB: [
      "Mortality gives urgency to meaning.",
      "Control is comforting but often an illusion.",
      "Wisdom is learning where to stop.",
      "Human dignity is not dependent on perfection."
    ]
  },
  {
    theme: "Artificial intelligence and humanity",
    taskA: [
      "AI can scale capability without guaranteeing wisdom.",
      "Efficiency gains should not replace human judgment in all settings.",
      "Technological literacy is becoming a democratic requirement.",
      "The challenge of AI is governance as much as invention."
    ],
    taskB: [
      "Creativity involves selection, not just generation.",
      "Human uniqueness may lie in moral imagination.",
      "Tools shape habits, and habits shape character.",
      "The future is determined by how we choose to use power."
    ]
  }
];

const sampleEssays = [
  {
    title: "Identity, parenting, and social media",
    task: "A",
    theme: "Identity",
    page: "essays/identity-parenting-social-media.html",
    preview: "Explores how societal norms, especially social media, can outweigh family influence during identity formation.",
    body: [
      "Cognizant of the burgeoning notion of social identity, parents must understand the nuances and dangers of effective parenting. The power of social media and its influencers are constantly growing, and its impacts on the identity of children may be greater than those taught by their families.",
      "The essay argues that the parent-child relationship is increasingly undervalued as children spend more time in algorithmic environments than in reflective family dialogue.",
      "It concludes that parenting must adapt to modern social norms while still preserving culture, communication, and emotional safety."
    ]
  },
  {
    title: "Faith and self-understanding",
    task: "B",
    theme: "Self-discovery",
    page: "essays/faith-self-understanding.html",
    preview: "Discusses self-understanding as the engine of purpose, with religion framed as one pathway to meaning.",
    body: [
      "Did we arise from the Big Bang or through divine creation? The essay uses this question to examine how people seek meaning and identity.",
      "It argues that self-understanding helps individuals navigate comparison and distraction, while faith can offer structure and emotional consolation.",
      "The final position is balanced: religion may guide, but personal reflection remains the foundation of authentic purpose."
    ]
  },
  {
    title: "Risk and innovation",
    task: "A",
    theme: "Progress",
    page: "essays/risk-and-innovation.html",
    preview: "Frames risk as both a catalyst for innovation and a potential source of harm.",
    body: [
      "The essay suggests that society advances by stepping into uncertainty, citing inventions and scientific experimentation as examples.",
      "It then counters this optimism by showing how technologies such as gunpowder or nuclear power can be used destructively.",
      "Its core insight is that progress requires courageous exploration, but also ethical restraint."
    ]
  },
  {
    title: "Aging, dignity, and mental health",
    task: "B",
    theme: "Aging",
    page: "essays/aging-dignity-mental-health.html",
    preview: "Argues that elderly care must move beyond logistics to include dignity, belonging, and mental wellbeing.",
    body: [
      "The piece emphasizes that neglecting elderly needs damages both current and future generations.",
      "It criticizes transactional care structures that can isolate seniors, and it calls for more personal and humane support.",
      "The conclusion reframes elderly mental health as a whole-of-society responsibility."
    ]
  },
  {
    title: "Social media and youth identity",
    task: "B",
    theme: "Technology",
    page: "essays/social-media-youth-identity.html",
    preview: "Examines social media as both identity mirror and distortion engine for young people.",
    body: [
      "The argument starts by acknowledging online communities as spaces for belonging and self-expression.",
      "It then warns that algorithmic repetition and influencer culture can normalize harmful values and unrealistic expectations.",
      "The final stance supports digital participation with critical caution and guidance."
    ]
  },
  {
    title: "Political accountability and trust",
    task: "A",
    theme: "Politics",
    page: "essays/political-accountability-trust.html",
    preview: "Interrogates whether modern political accountability is genuine practice or campaign rhetoric.",
    body: [
      "The essay contrasts ideal democratic responsibility with contemporary examples of spectacle and weak consequences.",
      "It also highlights transparency failures during crises as key to eroding public trust.",
      "Its final claim is that accountability must be lived through action and openness, not slogans."
    ]
  }
];

const taskATheme = document.getElementById("task-a-theme");
const taskBTheme = document.getElementById("task-b-theme");
const taskAComments = document.getElementById("task-a-comments");
const taskBComments = document.getElementById("task-b-comments");
const generateBtn = document.getElementById("generate-prompts");
const copyBtn = document.getElementById("copy-prompts");
const timerText = document.getElementById("timer");
const timerLength = document.getElementById("timer-length");
const timerToggle = document.getElementById("toggle-timer");
const totalPrompts = document.getElementById("total-prompts");
const sampleCount = document.getElementById("sample-count");
const planNote = document.getElementById("plan-note");
const essayPlanNote = document.getElementById("essay-plan-note");
const activePlanText = document.getElementById("active-plan-text");
const planSelectButtons = document.querySelectorAll(".plan-select");
const buyFullAccess = document.getElementById("buy-full-access");
const integrationNote = document.getElementById("integration-note");
const bankTransferNote = document.getElementById("bank-transfer-note");
const studentName = document.getElementById("student-name");
const studentEmail = document.getElementById("student-email");
const sessionType = document.getElementById("session-type");
const sessionTime = document.getElementById("session-time");
const generateBookingMessage = document.getElementById("generate-booking-message");
const sendBookingEmail = document.getElementById("send-booking-email");
const bookingMessage = document.getElementById("booking-message");
const essayList = document.getElementById("essay-list");
const essaySearch = document.getElementById("essay-search");
const essayTaskFilter = document.getElementById("essay-task-filter");
const selfScore = document.getElementById("self-score");
const selfScoreValue = document.getElementById("self-score-value");
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");
const contactStatus = document.getElementById("contact-status");
const journeyLevel = document.getElementById("journey-level");
const journeyXP = document.getElementById("journey-xp");
const journeyProgress = document.getElementById("journey-progress");
const questChecks = document.querySelectorAll(".quest-check");
const resetJourney = document.getElementById("reset-journey");

let activePromptSet = promptSets[0];
let currentPlan = "free";
let timerId = null;
let remainingSeconds = Number(timerLength.value) * 60;

const planRules = {
  free: {
    promptSetCount: 3,
    sampleEssayCount: 2,
    label: "Free"
  },
  full: {
    promptSetCount: promptSets.length,
    sampleEssayCount: sampleEssays.length,
    label: "Full Access"
  }
};

const integrations = window.GAMSAT_INTEGRATIONS || {
  payments: {
    method: "bank_transfer",
    fullAccessCheckoutUrl: "",
    payid: "",
    bsb: "",
    accountNumber: "",
    accountName: "",
    receiptInstructions: ""
  },
  email: {
    contactTo: "",
    senderDisplay: "Tutor",
    formEndpoint: ""
  }
};

const questXPValues = {
  prompt_set: 15,
  timed_essay: 25,
  model_read: 15,
  self_mark: 15,
  rewrite: 15,
  weekly_review: 15
};

const journeyStorageKey = "gamsatJourneyProgress";

function pickRandomSet() {
  const limit = planRules[currentPlan].promptSetCount;
  const index = Math.floor(Math.random() * limit);
  activePromptSet = promptSets[index];
  renderPromptSet(activePromptSet);
}

function renderPromptSet(set) {
  taskATheme.textContent = `Theme: ${set.theme}`;
  taskBTheme.textContent = `Theme: ${set.theme}`;
  taskAComments.innerHTML = set.taskA.map((comment) => `<li>${comment}</li>`).join("");
  taskBComments.innerHTML = set.taskB.map((comment) => `<li>${comment}</li>`).join("");
}

function renderEssays() {
  const planLimitedEssays = sampleEssays.slice(0, planRules[currentPlan].sampleEssayCount);
  const searchTerm = essaySearch.value.trim().toLowerCase();
  const taskFilter = essayTaskFilter.value;

  const filtered = planLimitedEssays.filter((essay) => {
    const matchesTask = taskFilter === "all" || essay.task === taskFilter;
    const searchable = `${essay.title} ${essay.theme} ${essay.preview} ${essay.body.join(" ")}`.toLowerCase();
    const matchesSearch = !searchTerm || searchable.includes(searchTerm);
    return matchesTask && matchesSearch;
  });

  essayList.innerHTML = filtered
    .map(
      (essay) => `
      <article class="essay-card ${currentPlan === "free" ? "locked" : ""}">
        <div class="essay-meta">
          <span class="tag">Task ${essay.task}</span>
          <span class="tag">${essay.theme}</span>
          <span class="tag">From attached docx</span>
        </div>
        <h3>${essay.title}</h3>
        <p class="essay-preview">${essay.preview}</p>
        <p><a class="btn ghost" href="${essay.page}">Open Full Essay Page</a></p>
        <details>
          <summary>Read condensed model response</summary>
          ${essay.body.map((p) => `<p>${p}</p>`).join("")}
        </details>
      </article>
    `
    )
    .join("");

  if (currentPlan === "free") {
    essayPlanNote.textContent = "Free plan unlocked: 2 sample essays. Upgrade for the full essay library.";
  } else {
    essayPlanNote.textContent = "Full Access unlocked: all sample essays and all prompt sets.";
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function resetTimerDisplay() {
  remainingSeconds = Number(timerLength.value) * 60;
  timerText.textContent = formatTime(remainingSeconds);
}

function toggleTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    timerToggle.textContent = "Start Timer";
    return;
  }

  timerToggle.textContent = "Pause Timer";
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    timerText.textContent = formatTime(Math.max(remainingSeconds, 0));

    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      timerToggle.textContent = "Start Timer";
      alert("Time complete. Save your draft and begin self-marking.");
    }
  }, 1000);
}

function copyActivePromptSet() {
  const copyText = [
    `Theme: ${activePromptSet.theme}`,
    "",
    "Task A",
    ...activePromptSet.taskA.map((line, i) => `${i + 1}. ${line}`),
    "",
    "Task B",
    ...activePromptSet.taskB.map((line, i) => `${i + 1}. ${line}`)
  ].join("\n");

  navigator.clipboard.writeText(copyText)
    .then(() => {
      copyBtn.textContent = "Copied";
      window.setTimeout(() => {
        copyBtn.textContent = "Copy Set";
      }, 1200);
    })
    .catch(() => {
      copyBtn.textContent = "Copy Failed";
    });
}

function setPlan(planKey) {
  currentPlan = planKey;
  const rule = planRules[planKey];
  activePlanText.textContent = `Active plan: ${rule.label}`;
  totalPrompts.textContent = `${rule.promptSetCount * 8}`;
  sampleCount.textContent = `${rule.sampleEssayCount}`;

  if (planKey === "free") {
    planNote.textContent = "Free includes limited prompt sets for trial practice.";
  } else {
    planNote.textContent = "Full Access includes the complete prompt bank and full model essay library.";
  }

  pickRandomSet();
  renderEssays();
}

function buildBookingMessage() {
  const name = studentName.value.trim() || "[Your name]";
  const email = studentEmail.value.trim() || "[Your email]";
  const type = sessionType.value;
  const time = sessionTime.value.trim() || "[Preferred days/times]";

  bookingMessage.value = [
    "Hi, I would like to organise a GAMSAT S2 tutoring session.",
    `Name: ${name}`,
    `Email: ${email}`,
    `Session type: ${type}`,
    `Preferred time windows: ${time}`,
    "",
    "Please let me know next available options. Thank you."
  ].join("\n");
}

function openPayment(url, planLabel) {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  if (integrations.payments.method !== "bank_transfer") {
    alert(`Add ${planLabel} checkout URL in integrations.js to enable live payments.`);
    return;
  }

  const planPrice = planLabel === "Full Access" ? "$150/month" : "";
  const details = [];
  if (integrations.payments.payid) {
    details.push(`PayID: ${integrations.payments.payid}`);
  }
  if (integrations.payments.bsb && integrations.payments.accountNumber) {
    details.push(`BSB: ${integrations.payments.bsb}`);
    details.push(`Account Number: ${integrations.payments.accountNumber}`);
  }
  if (integrations.payments.accountName) {
    details.push(`Account Name: ${integrations.payments.accountName}`);
  }

  if (!details.length) {
    alert("Bank transfer is enabled, but PayID/BSB details are not yet filled in integrations.js.");
    return;
  }

  alert([
    `${planLabel} payment ${planPrice ? `(${planPrice})` : ""}`,
    "",
    ...details,
    "",
    integrations.payments.receiptInstructions || `Email payment receipt to ${integrations.email.contactTo}.`
  ].join("\n"));
}

function sendViaFormEndpoint(payload) {
  return fetch(integrations.email.formEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });
}

function buildMailtoLink(subject, body) {
  const recipient = integrations.email.contactTo || "";
  const taggedSubject = `${integrations.email.senderDisplay || "Tutor"} | ${subject}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(taggedSubject)}&body=${encodeURIComponent(body)}`;
}

async function sendBookingEmailHandler() {
  if (!bookingMessage.value.trim()) {
    buildBookingMessage();
  }

  const payload = {
    name: studentName.value.trim() || "Unknown",
    email: studentEmail.value.trim() || "Unknown",
    subject: "GAMSAT S2 tutoring session request",
    message: bookingMessage.value
  };

  if (integrations.email.formEndpoint) {
    try {
      const response = await sendViaFormEndpoint(payload);
      if (!response.ok) {
        throw new Error("Email endpoint rejected request");
      }
      alert("Booking request sent.");
      return;
    } catch (error) {
      alert("Email endpoint failed. Opening your mail app instead.");
    }
  }

  window.location.href = buildMailtoLink(payload.subject, payload.message);
}

async function handleContactSubmit(event) {
  event.preventDefault();
  const payload = {
    name: contactName.value.trim(),
    email: contactEmail.value.trim(),
    subject: contactSubject.value.trim(),
    message: contactMessage.value.trim()
  };

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    contactStatus.textContent = "Please complete all fields.";
    return;
  }

  if (integrations.email.formEndpoint) {
    try {
      contactStatus.textContent = "Sending...";
      const response = await sendViaFormEndpoint(payload);
      if (!response.ok) {
        throw new Error("Failed to send");
      }
      contactStatus.textContent = "Enquiry sent successfully.";
      contactForm.reset();
      return;
    } catch (error) {
      contactStatus.textContent = "Could not send via endpoint. Opening mail app.";
    }
  }

  window.location.href = buildMailtoLink(payload.subject, payload.message);
  contactStatus.textContent = "Opened your email app.";
}

function getQuestState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(journeyStorageKey) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveQuestState(state) {
  localStorage.setItem(journeyStorageKey, JSON.stringify(state));
}

function renderJourney() {
  const state = getQuestState();
  let xp = 0;

  questChecks.forEach((checkbox) => {
    const isChecked = !!state[checkbox.dataset.quest];
    checkbox.checked = isChecked;
    if (isChecked) {
      xp += questXPValues[checkbox.dataset.quest] || 0;
    }
  });

  const progress = Math.min(xp, 100);
  let levelLabel = "Level 1 Writer";
  if (progress >= 80) {
    levelLabel = "Level 5 Exam Strategist";
  } else if (progress >= 60) {
    levelLabel = "Level 4 Argument Architect";
  } else if (progress >= 40) {
    levelLabel = "Level 3 Structure Specialist";
  } else if (progress >= 20) {
    levelLabel = "Level 2 Draft Builder";
  }

  journeyXP.textContent = String(progress);
  journeyLevel.textContent = levelLabel;
  journeyProgress.style.width = `${progress}%`;
}

function handleQuestChange(event) {
  const checkbox = event.target;
  const state = getQuestState();
  state[checkbox.dataset.quest] = checkbox.checked;
  saveQuestState(state);
  renderJourney();
}

function resetJourneyProgress() {
  localStorage.removeItem(journeyStorageKey);
  renderJourney();
}

generateBtn.addEventListener("click", pickRandomSet);
copyBtn.addEventListener("click", copyActivePromptSet);
timerToggle.addEventListener("click", toggleTimer);
timerLength.addEventListener("change", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    timerToggle.textContent = "Start Timer";
  }
  resetTimerDisplay();
});

essaySearch.addEventListener("input", renderEssays);
essayTaskFilter.addEventListener("change", renderEssays);
planSelectButtons.forEach((button) => {
  button.addEventListener("click", () => setPlan(button.dataset.plan));
});
generateBookingMessage.addEventListener("click", buildBookingMessage);
sendBookingEmail.addEventListener("click", sendBookingEmailHandler);
buyFullAccess.addEventListener("click", () => openPayment(integrations.payments.fullAccessCheckoutUrl, "Full Access"));
contactForm.addEventListener("submit", handleContactSubmit);
questChecks.forEach((check) => check.addEventListener("change", handleQuestChange));
resetJourney.addEventListener("click", resetJourneyProgress);

selfScore.addEventListener("input", () => {
  selfScoreValue.textContent = selfScore.value;
});

(function init() {
  if (integrations.payments.method === "bank_transfer") {
    const hasPayId = Boolean(integrations.payments.payid);
    const hasBankPair = Boolean(integrations.payments.bsb && integrations.payments.accountNumber);
    if (hasPayId || hasBankPair) {
      bankTransferNote.textContent = "Payment method: Bank transfer (PayID / BSB). Click checkout buttons to view transfer instructions.";
    } else {
      bankTransferNote.textContent = "Payment method: Bank transfer enabled, but PayID/BSB details still need to be filled.";
    }
  } else {
    bankTransferNote.textContent = "";
  }

  if (!integrations.email.contactTo && !integrations.email.formEndpoint) {
    integrationNote.textContent = "Integration status: add your email details in integrations.js.";
  } else if (
    integrations.payments.method !== "bank_transfer" &&
    !integrations.payments.fullAccessCheckoutUrl
  ) {
    integrationNote.textContent = "Integration status: email configured, add payment checkout URLs in integrations.js.";
  } else if (integrations.payments.method === "bank_transfer") {
    integrationNote.textContent = "Integration status: email configured with Feifan Wu sender tag. Bank transfer mode is active.";
  } else {
    integrationNote.textContent = "Integration status: payments and email are configured.";
  }
  setPlan("free");
  renderPromptSet(activePromptSet);
  renderEssays();
  resetTimerDisplay();
  renderJourney();
})();
