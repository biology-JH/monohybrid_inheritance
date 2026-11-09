const corePoints = [
  {
    n: 1, title: 'Inheritance',
    text: 'Inheritance is the transmission of genetic information from one generation to the next. Genes carry information that can be passed from parents to offspring.',
    example: 'Genes on chromosomes carry information; gametes pass alleles to offspring.',
    questions: [
      ['What is passed between generations?', 'Genetic information.'],
      ['Which structures carry the information for inherited characteristics?', 'Genes.']
    ]
  },
  {
    n: 2, title: 'Genotype',
    text: 'A genotype is an organism’s alleles for a gene. An allele is a form of that gene; both alleles occupy the same locus (基因座) on homologous chromosomes (同源染色體).',
    example: 'BB, Bb and bb are genotypes; B and b are alleles at one locus.',
    images: [
      { src: '/ppt-assets/part1_genes-loci.png', alt: 'The same gene locus marked on a pair of homologous chromosomes', caption: 'Alleles of one gene share a locus · supplied Part 1 slide' }
    ],
    questions: [
      ['Which word means the allele combination of an organism?', 'Genotype (基因型).'],
      ['What is the genotype when the alleles are B and b?', 'Bb.']
    ]
  },
  {
    n: 3, title: 'Phenotype',
    text: 'A phenotype is an organism’s observable features. It describes what the characteristic looks like, not the allele letters.',
    example: 'If T is dominant for tall plants, TT and Tt plants have a tall phenotype; tt plants are dwarf.',
    image: { src: '/ppt-assets/part1_image-9-1.png', alt: 'Tall and dwarf pea plants used to illustrate contrasting phenotypes', caption: 'Contrasting plant phenotypes · supplied Part 1 slide' },
    questions: [
      ['Which word means observable features?', 'Phenotype (表現型).'],
      ['If T is dominant, what is the phenotype of Tt?', 'Tall.']
    ]
  },
  {
    n: 4, title: 'Homozygous',
    text: 'An organism is homozygous for a gene when it has two identical alleles of that gene.',
    example: 'BB and bb are homozygous genotypes.',
    questions: [
      ['Are the alleles in Bb identical?', 'No. Bb is heterozygous.'],
      ['Name one homozygous genotype.', 'BB or bb.']
    ]
  },
  {
    n: 5, title: 'Pure-breeding',
    text: 'Pure-breeding individuals are homozygous. When homozygous parents of the same genotype breed, their offspring inherit the same allele pair.',
    example: 'BB × BB produces BB offspring; bb × bb produces bb offspring.',
    image: { src: '/ppt-assets/part1_image-10-1.png', alt: 'A plant diagram showing the dominant tall phenotype', caption: 'A dominant phenotype illustration from the supplied Part 1 slides' },
    questions: [
      ['Do BB × BB parents produce offspring with a different genotype?', 'No. The offspring are BB.'],
      ['Is Bb pure-breeding?', 'No. It has two different alleles and can pass on either one.']
    ]
  },
  {
    n: 6, title: 'Heterozygous',
    text: 'An organism is heterozygous for a gene when it has two different alleles of that gene.',
    example: 'Tt is heterozygous; one allele is T and the other is t.',
    questions: [
      ['Which term describes two different alleles?', 'Heterozygous (雜合).'],
      ['Is Tt homozygous or heterozygous?', 'Heterozygous.']
    ]
  },
  {
    n: 7, title: 'Heterozygous is not pure-breeding',
    text: 'A heterozygous individual is not pure-breeding: gametes receive one allele per gene, so a Tt parent can pass on T or t.',
    example: 'Each gamete carries one allele; offspring may inherit different combinations.',
    questions: [
      ['Which two alleles can a Tt parent pass on?', 'T or t.'],
      ['Will every Tt × Tt offspring have the same genotype?', 'No. TT, Tt and tt are possible.']
    ]
  },
  {
    n: 8, title: 'Dominant allele',
    text: 'A dominant allele is expressed if it is present in the genotype. Use a capital letter to represent it in a simple genetic diagram.',
    example: 'If A is dominant, AA and Aa show the dominant phenotype. AA × Aa gives 1 AA : 1 Aa; all offspring show that phenotype.',
    questions: [
      ['When is a dominant allele expressed?', 'When it is present in the genotype.'],
      ['If T is dominant, does Tt show the dominant phenotype?', 'Yes.']
    ]
  },
  {
    n: 9, title: 'Recessive allele',
    text: 'A recessive allele is expressed only when no dominant allele of that gene is present in the genotype. “Recessive” does not mean rare.',
    example: 'Cystic fibrosis (CF) is recessive: CC is unaffected, Cc is an unaffected carrier, and cc is affected.',
    images: [
      { src: '/ppt-assets/part1_cystic-fibrosis.jpg', alt: 'Cystic-fibrosis illustration from the supplied Part 1 slides', caption: 'CF inheritance example · supplied Part 1 slide' }
    ],
    questions: [
      ['When is a recessive allele expressed?', 'When there is no dominant allele of that gene in the genotype.'],
      ['Which genotype shows the recessive phenotype: Tt or tt?', 'tt.']
    ]
  },
  {
    n: 10, title: 'Interpret a pedigree',
    text: 'A pedigree (系譜圖) traces a characteristic across generations I, II and III. Squares represent males; circles represent females; shading marks affected people. Child numbers identify individuals. Trace parents and children to infer genotypes.',
    example: 'Recessive phenotype = aa; two unaffected carriers (Aa) can have an affected child. Dominant phenotype = A_ (AA or Aa); affected people usually have an affected parent.',
    images: [
      { src: '/ppt-assets/part1_image-15-1.png', alt: 'Pedigree showing unaffected parents with an affected child', caption: 'Recessive pattern · supplied Part 1 slide' },
      { src: '/ppt-assets/part1_dominant-pedigree.png', alt: 'Pedigree diagram used to discuss dominant inheritance', caption: 'Dominant pattern · supplied Part 1 slide' }
    ],
    questions: [
      ['What does a shaded symbol usually represent in a pedigree?', 'An individual who shows the characteristic being tracked.'],
      ['For a recessive trait, what can unaffected parents of an affected child both be?', 'Heterozygous carriers, such as Aa.']
    ]
  },
  {
    n: 11, title: 'Genetic diagrams and phenotype ratios',
    text: 'Label parents’ phenotypes and genotypes; list one-allele gametes; combine them in a Punnett square; then state offspring phenotypes and the 1:1 or 3:1 expected ratio.',
    example: 'Tt × tt → 1 tall : 1 dwarf. Tt × Tt → 3 tall : 1 dwarf. Slide exercise: Bb × bb gives 50% brown guinea pigs.',
    images: [
      { src: '/ppt-assets/part1_genetic-diagram.png', alt: 'Slide diagram of a Tt by Tt cross from parents through gametes and offspring', caption: 'Worked genetic diagram · supplied Part 1 slide' },
      { src: '/ppt-assets/part1_guinea-pig-exercise.png', alt: 'Guinea-pig cross exercise from the supplied Part 1 slides', caption: 'Practice: Bb × bb · supplied Part 1 slide' }
    ],
    questions: [
      ['What phenotype ratio is expected from Tt × tt?', '1 tall : 1 dwarf.'],
      ['What phenotype ratio is expected from Tt × Tt?', '3 tall : 1 dwarf.']
    ]
  },
  {
    n: 12, title: 'Punnett squares and possible genotypes',
    text: 'In a Punnett square, place one parent’s gametes along the top and the other parent’s down the side. Combine the alleles in each cell to show all possible offspring genotypes.',
    example: 'Tt × Tt gives 1 TT : 2 Tt : 1 tt. That is a genotype ratio; if T is dominant, the phenotype ratio is 3 tall : 1 dwarf.',
    images: [
      { src: '/ppt-assets/part1_worked-cross.jpg', alt: 'Worked monohybrid Punnett-square example from the supplied Part 1 slides', caption: 'Tt × Tt · supplied Part 1 worked-cross slide' }
    ],
    questions: [
      ['How many different genotypes can Tt × Tt produce?', 'Three: TT, Tt and tt.'],
      ['What is the genotype ratio for Tt × Tt?', '1 TT : 2 Tt : 1 tt.']
    ]
  }
];

const extendedPoints = [
  {
    n: 13, title: 'Test cross',
    text: 'To identify an unknown genotype with the dominant phenotype, cross it with a homozygous recessive individual (測交). A recessive offspring shows that the unknown parent carried the recessive allele.',
    example: 'Dogs (both BB): EE × ee gives all dark; Ee × ee gives 1 dark : 1 yellow. A fly cross with 48 long-winged and 51 vestigial offspring is close to 1:1, so the parent is vg⁺vg.',
    image: { src: '/ppt-assets/part2_image-7-1.jpg', alt: 'Dogs illustrating the unknown-parent and tester idea in the supplied lesson', caption: 'Test-cross example image from the supplied Part 2 slides' },
    questions: [
      ['Which genotype is used as the tester?', 'Homozygous recessive, such as ee.'],
      ['What does a recessive offspring reveal about a dominant-looking unknown parent?', 'The unknown parent carries a recessive allele, so it is heterozygous.'],
      ['A long-winged fly crossed with vg vg produces 48 long-winged and 51 vestigial-winged (殘翅型) offspring. What is the long-winged parent’s genotype?', 'Heterozygous vg⁺ vg; the offspring are close to a 1:1 ratio.']
    ]
  },
  {
    n: 14, title: 'Codominance',
    text: 'In codominance (共顯性), both alleles contribute to the heterozygote’s phenotype; neither masks the other.',
    example: 'Roan cattle (CᴿCᵂ) show red and white hairs. Sickle-cell trait (鐮狀細胞性狀; HbᴬHbˢ) produces both haemoglobin variants.',
    images: [
      { src: '/ppt-assets/part2_image-13-1.jpg', alt: 'Roan cattle showing both red and white hairs', caption: 'Roan cattle · supplied Part 2 slide' },
      { src: '/ppt-assets/part2_sickle-cell.png', alt: 'Diagram comparing red blood cells and haemoglobin variants in the supplied slide', caption: 'Sickle-cell trait example · supplied Part 2 slide' }
    ],
    questions: [
      ['What happens to both alleles in a codominant heterozygote?', 'Both contribute to the phenotype.'],
      ['Is roan a blend that hides red and white hairs?', 'No. Both red and white hairs are visible.']
    ]
  },
  {
    n: 15, title: 'ABO blood groups',
    text: 'ABO blood groups (ABO血型) have phenotypes A, B, AB and O. Iᴬ makes antigen A; Iᴮ makes antigen B; Iᵒ makes neither. Iᴬ and Iᴮ are codominant and both dominate Iᵒ.',
    example: 'A: IᴬIᴬ or IᴬIᵒ · B: IᴮIᴮ or IᴮIᵒ · AB: IᴬIᴮ · O: IᵒIᵒ. IᴬIᴮ × IᵒIᵒ → 1 group A : 1 group B.',
    images: [
      { src: '/ppt-assets/part2_blood-antigens.png', alt: 'Red blood cells displaying A, B, both or no ABO antigens', caption: 'ABO antigens · supplied Part 2 slide' },
      { src: '/ppt-assets/part2_image-16-1.png', alt: 'Punnett square for IᴬIᴮ by IᵒIᵒ', caption: 'ABO cross · supplied Part 2 slide' }
    ],
    questions: [
      ['What is the genotype of a person with group AB?', 'IᴬIᴮ.'],
      ['What two genotypes can produce group A?', 'IᴬIᴬ or IᴬIᵒ.'],
      ['A group A mother has a group O child. What must her genotype be?', 'IᴬIᵒ; she must pass on Iᵒ.']
    ]
  },
  {
    n: 16, title: 'Sex-linked characteristics',
    text: 'Humans have 22 pairs of autosomes (常染色體) and one pair of sex chromosomes: usually XX females and XY males. A sex-linked gene is on a sex chromosome, usually X; XY males have one X-linked allele (hemizygous, 半合子).',
    example: 'Ova carry X; sperm carry X or Y, determining sex with an expected 1:1 ratio. Fathers pass X to daughters and Y to sons, so there is no father-to-son transmission of an X-linked allele.',
    image: { src: '/ppt-assets/part2_image-19-1.png', alt: 'X and Y sex chromosomes shown in the supplied Part 2 slides', caption: 'Sex chromosomes · supplied Part 2 slide' },
    questions: [
      ['Where is the gene for a sex-linked characteristic located?', 'On a sex chromosome.'],
      ['Why can a recessive allele on the X chromosome be expressed in an XY male?', 'There may be no corresponding allele on the Y chromosome to mask it.']
    ]
  },
  {
    n: 17, title: 'Red–green colour blindness',
    text: 'Red–green colour blindness is an example of X-linked recessive inheritance (紅綠色盲). Use Xᴿ for the typical dominant allele and Xʳ for the recessive allele. A female XᴿXʳ is an unaffected carrier; an XʳY male is affected.',
    example: 'Females usually need XʳXʳ to be affected; XᴿXʳ females are carriers. XʳY males are affected because Y has no matching allele at this locus—one reason more males are affected.',
    images: [
      { src: '/ppt-assets/part2_image-20-1.png', alt: 'Chromosome diagram showing an X-linked gene and no matching allele on Y', caption: 'X-linked locus · supplied Part 2 slide' },
      { src: '/ppt-assets/part2_colour-blindness.png', alt: 'Colour-vision dot plate from the supplied Part 2 slides', caption: 'Red–green colour-vision example · supplied Part 2 slide' }
    ],
    questions: [
      ['What genotype represents a carrier female?', 'XᴿXʳ.'],
      ['What genotype represents an affected male?', 'XʳY.'],
      ['Why are daughters of a carrier mother and typical-vision father usually unaffected?', 'Each daughter receives the father’s typical-vision Xᴿ allele.']
    ]
  },
  {
    n: 18, title: 'Crosses involving codominance or sex linkage',
    text: 'Draw crosses for codominance or sex linkage and calculate phenotype ratios. Attach the allele to X; write Y without an allele. Carrier mothers can pass Xʳ to sons; fathers pass their X to daughters, not sons.',
    example: 'XᴿXʳ × XᴿY: 50% of sons and 25% of all children are expected to be colour-blind. Daughters receive their father’s Xᴿ, so they are unaffected.',
    images: [
      { src: '/ppt-assets/part2_sex-linked-pedigree.png', alt: 'Pedigree used to explain X-linked inheritance across generations', caption: 'X-linked pedigree · supplied Part 2 slide' }
    ],
    questions: [
      ['For XᴿXʳ × XᴿY, what fraction of sons are expected to be XʳY?', 'One half (50%) of sons.'],
      ['For the same cross, what fraction of all children are expected to be XʳY?', 'One quarter (25%) of all children.'],
      ['Can an affected father pass his X-linked allele to his son?', 'No. A father passes his Y chromosome to sons and his X to daughters.']
    ]
  }
];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function renderQuestion(question, index, pointNumber) {
  const number = index + 1;
  return `<details><summary>Q${number} · ${escapeHTML(question[0])}</summary><p>${escapeHTML(question[1])}</p></details>`;
}

function renderPoint(point, extended = false) {
  const label = extended ? 'Extended (Supplement)' : 'Core';
  const questionCount = point.questions.length === 3 ? 'Three' : 'Two';
  const pictures = point.images || (point.image ? [point.image] : []);
  const imageMarkup = pictures.length
    ? `<div class="card-visual${pictures.length > 1 ? ' card-gallery' : ''}">${pictures.map((picture) => `<figure class="image-frame"><img src="${escapeHTML(picture.src)}" alt="${escapeHTML(picture.alt)}" loading="lazy" /><figcaption>${escapeHTML(picture.caption)}</figcaption></figure>`).join('')}<p class="visual-note">${escapeHTML(point.example || '')}</p></div>`
    : `<p class="example-line"><strong>Apply it:</strong> ${escapeHTML(point.example || '')}</p>`;
  return `<article class="objective-card${extended ? ' extended-card' : ''}" aria-labelledby="point-${point.n}-title">
    <div class="objective-head"><span class="objective-number">${String(point.n).padStart(2, '0')}</span><span class="scope-tag">${label}</span><h3 id="point-${point.n}-title">${escapeHTML(point.title)}</h3></div>
    <p class="explanation">${escapeHTML(point.text)}</p>
    ${imageMarkup}
    <div class="quick-checks"><h4 class="visually-hidden">${questionCount} questions for syllabus point ${point.n}</h4>${point.questions.map((q, i) => renderQuestion(q, i, point.n)).join('')}</div>
  </article>`;
}

document.querySelector('#core-points').innerHTML = corePoints.map((point) => renderPoint(point)).join('');
document.querySelector('#extended-points').innerHTML = extendedPoints.map((point) => renderPoint(point, true)).join('');

const crosses = {
  'tall-cross': {
    parents: 'Tt × Tt', gametesA: ['T', 't'], gametesB: ['T', 't'], order: { T: 1, t: 2 },
    phenotype: (a, b) => (a === 'T' || b === 'T' ? 'Tall' : 'Dwarf'),
    note: 'T is dominant to t. The square gives expected probabilities, not a guaranteed family size.'
  },
  'test-cross': {
    parents: 'Tt × tt', gametesA: ['T', 't'], gametesB: ['t', 't'], order: { T: 1, t: 2 },
    phenotype: (a, b) => (a === 'T' || b === 'T' ? 'Tall' : 'Dwarf'),
    note: 'T is dominant to t. Repeated t gametes from the tt parent make a 1:1 expected phenotype ratio.'
  },
  'guinea-pig-cross': {
    parents: 'Bb × bb', gametesA: ['B', 'b'], gametesB: ['b', 'b'], order: { B: 1, b: 2 },
    phenotype: (a, b) => a === 'B' || b === 'B' ? 'Black guinea pig' : 'Brown guinea pig',
    note: 'B (black) is dominant. Half the expected offspring are brown.'
  },
  'albinism-cross': {
    parents: 'Aa × Aa', gametesA: ['A', 'a'], gametesB: ['A', 'a'], order: { A: 1, a: 2 },
    phenotype: (a, b) => a === 'a' && b === 'a' ? 'Albino' : 'Pigmented',
    note: 'Expected chance of an albino child (aa) is 25% in each pregnancy.'
  },
  'cf-cross': {
    parents: 'Cc × Cc', gametesA: ['C', 'c'], gametesB: ['C', 'c'], order: { C: 1, c: 2 },
    phenotype: (a, b) => a === 'c' && b === 'c' ? 'Affected with CF' : a === 'c' || b === 'c' ? 'Unaffected carrier' : 'Unaffected; not a carrier',
    note: 'CF is recessive: only cc offspring are affected; Cc carriers are unaffected.'
  },
  'roan-cross': {
    parents: 'CᴿCᵂ × CᴿCᵂ', gametesA: ['Cᴿ', 'Cᵂ'], gametesB: ['Cᴿ', 'Cᵂ'], order: { 'Cᴿ': 1, 'Cᵂ': 2 },
    phenotype: (a, b) => a === b ? (a === 'Cᴿ' ? 'Red' : 'White') : 'Roan',
    note: 'Cᴿ and Cᵂ are codominant. The expected phenotypic ratio is 1 red : 2 roan : 1 white.'
  },
  'abo-cross': {
    parents: 'IᴬIᴮ × IᵒIᵒ', gametesA: ['Iᴬ', 'Iᴮ'], gametesB: ['Iᵒ', 'Iᵒ'], order: { 'Iᴬ': 1, 'Iᴮ': 2, 'Iᵒ': 3 },
    phenotype: (a, b) => a === 'Iᴬ' || b === 'Iᴬ' ? 'Group A' : 'Group B',
    note: 'Iᴬ and Iᴮ are codominant. Each parent contributes one allele; this cross predicts group A or group B.'
  },
  'colour-cross': {
    parents: 'XᴿXʳ × XᴿY', gametesA: ['Xᴿ', 'Xʳ'], gametesB: ['Xᴿ', 'Y'], order: { 'Xᴿ': 1, 'Xʳ': 2, Y: 3 },
    phenotype: (a, b) => {
      const pair = [a, b].sort((x, y) => ({ 'Xᴿ': 1, 'Xʳ': 2, Y: 3 }[x] - ({ 'Xᴿ': 1, 'Xʳ': 2, Y: 3 }[y]))).join('|');
      return ({ 'Xᴿ|Xᴿ': 'Typical-vision daughter', 'Xᴿ|Xʳ': 'Carrier daughter', 'Xᴿ|Y': 'Typical-vision son', 'Xʳ|Y': 'Colour-blind son' })[pair];
    },
    note: 'Expected outcomes: 50% of sons are colour-blind, which is 25% of all children in this cross.'
  },
  'dog-ee': {
    parents: 'EE × ee', gametesA: ['E', 'E'], gametesB: ['e', 'e'], order: { E: 1, e: 2 },
    phenotype: () => 'Dark coat',
    note: 'At the E locus, E allows pigment. An EE black-looking dog crossed with the ee tester produces all Ee dark-coated offspring.'
  },
  'dog-ee-small': {
    parents: 'Ee × ee', gametesA: ['E', 'e'], gametesB: ['e', 'e'], order: { E: 1, e: 2 },
    phenotype: (a, b) => a === 'E' || b === 'E' ? 'Dark coat' : 'Yellow coat',
    note: 'An approximately 1 dark : 1 yellow outcome indicates the unknown dark-looking parent is Ee.'
  },
  'fly-test-cross': {
    parents: 'vg⁺vg × vgvg', gametesA: ['vg⁺', 'vg'], gametesB: ['vg', 'vg'], order: { 'vg⁺': 1, vg: 2 },
    phenotype: (a, b) => a === 'vg⁺' || b === 'vg⁺' ? 'Long-winged' : 'Vestigial-winged',
    note: 'A result near 1:1 (48 long-winged : 51 vestigial) indicates the long-winged parent is heterozygous.'
  },
  'affected-father': {
    parents: 'XʳY × XᴿXᴿ', gametesA: ['Xʳ', 'Y'], gametesB: ['Xᴿ', 'Xᴿ'], order: { 'Xᴿ': 1, 'Xʳ': 2, Y: 3 },
    phenotype: (a, b) => {
      const pair = [a, b].sort((x, y) => ({ 'Xᴿ': 1, 'Xʳ': 2, Y: 3 }[x] - ({ 'Xᴿ': 1, 'Xʳ': 2, Y: 3 }[y]))).join('|');
      return ({ 'Xᴿ|Xʳ': 'Carrier daughter', 'Xᴿ|Y': 'Typical-vision son' })[pair];
    },
    note: 'No sons are colour-blind; all daughters are XᴿXʳ carriers because they inherit Xʳ from their father.'
  }
};

function genotypeLabel(a, b, cross) {
  const sorted = [a, b].sort((x, y) => (cross.order[x] ?? 99) - (cross.order[y] ?? 99));
  return sorted.join('');
}

function ratioLines(items, total) {
  const counts = new Map();
  items.forEach((item) => counts.set(item, (counts.get(item) || 0) + 1));
  return [...counts.entries()].map(([label, count]) => {
    const percent = Math.round((count / total) * 100);
    return `<div class="ratio-line"><strong>${escapeHTML(label)}</strong> · ${count}/${total} (${percent}%)</div>`;
  }).join('');
}

function calculateCross(selectId, resultId) {
  const key = document.getElementById(selectId).value;
  const cross = crosses[key];
  const cells = [];
  for (const alleleA of cross.gametesA) {
    for (const alleleB of cross.gametesB) {
      cells.push({ a: alleleA, b: alleleB, genotype: genotypeLabel(alleleA, alleleB, cross), phenotype: cross.phenotype(alleleA, alleleB) });
    }
  }
  const grid = `<div class="punnett-grid" aria-label="Four Punnett square outcomes">
    <div class="grid-label">Gametes</div><div class="grid-label">${escapeHTML(cross.gametesB[0])}</div><div class="grid-label">${escapeHTML(cross.gametesB[1])}</div>
    <div class="grid-label">${escapeHTML(cross.gametesA[0])}</div><div>${escapeHTML(cells[0].genotype)}</div><div>${escapeHTML(cells[1].genotype)}</div>
    <div class="grid-label">${escapeHTML(cross.gametesA[1])}</div><div>${escapeHTML(cells[2].genotype)}</div><div>${escapeHTML(cells[3].genotype)}</div>
  </div>`;
  const result = document.getElementById(resultId);
  result.innerHTML = `<div class="result-layout"><div><h4>${escapeHTML(cross.parents)} · Punnett square</h4>${grid}</div><div><h4>Expected outcomes</h4><div class="ratio-list"><strong>Genotypes</strong>${ratioLines(cells.map((cell) => cell.genotype), cells.length)}<strong>Phenotypes</strong>${ratioLines(cells.map((cell) => cell.phenotype), cells.length)}</div><p class="ratio-note">${escapeHTML(cross.note)}</p></div></div>`;
}

document.querySelector('#core-calculate').addEventListener('click', () => calculateCross('core-cross', 'core-result'));
document.querySelector('#extended-calculate').addEventListener('click', () => calculateCross('extended-cross', 'extended-result'));
