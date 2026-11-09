const corePoints = [
  {
    n: 1, title: 'Inheritance',
    text: 'Inheritance is the transmission of genetic information from one generation to the next. Genes carry information that can be passed from parents to offspring.',
    example: 'A child receives genetic information from both biological parents.',
    questions: [
      ['What is passed between generations?', 'Genetic information.'],
      ['Which structures carry the information for inherited characteristics?', 'Genes.']
    ]
  },
  {
    n: 2, title: 'Genotype',
    text: 'A genotype is an organism’s genetic make-up, described using the alleles it has for a gene. In this example, B and b are two alleles.',
    example: 'BB, Bb and bb are three possible genotypes.',
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
    text: 'Two identical homozygous individuals that breed together will be pure-breeding for that characteristic. Their offspring inherit the same allele combination.',
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
    text: 'A heterozygous individual will not be pure-breeding. Its gametes can carry either allele, so offspring may inherit different combinations.',
    example: 'A Tt parent can pass on T or t.',
    questions: [
      ['Which two alleles can a Tt parent pass on?', 'T or t.'],
      ['Will every Tt × Tt offspring have the same genotype?', 'No. TT, Tt and tt are possible.']
    ]
  },
  {
    n: 8, title: 'Dominant allele',
    text: 'A dominant allele is expressed if it is present in the genotype. Use a capital letter to represent it in a simple genetic diagram.',
    example: 'If T is dominant, both TT and Tt show the dominant phenotype.',
    questions: [
      ['When is a dominant allele expressed?', 'When it is present in the genotype.'],
      ['If T is dominant, does Tt show the dominant phenotype?', 'Yes.']
    ]
  },
  {
    n: 9, title: 'Recessive allele',
    text: 'A recessive allele is expressed only when no dominant allele of that gene is present in the genotype. “Recessive” does not mean rare.',
    example: 'If t is recessive, the phenotype appears in tt. Cystic fibrosis is recessive: CC is unaffected and not a carrier, Cc is an unaffected carrier, and cc is affected.',
    questions: [
      ['When is a recessive allele expressed?', 'When there is no dominant allele of that gene in the genotype.'],
      ['Which genotype shows the recessive phenotype: Tt or tt?', 'tt.']
    ]
  },
  {
    n: 10, title: 'Interpret a pedigree',
    text: 'A pedigree (系譜圖) traces a characteristic through generations. Squares represent males, circles represent females, and shading marks individuals with the characteristic. Use parent and child patterns to infer possible genotypes.',
    example: 'For an autosomal recessive trait, two unaffected carrier parents can have an affected child.',
    image: { src: '/ppt-assets/part1_image-15-1.png', alt: 'A pedigree diagram showing parents and their children', caption: 'Pedigree symbols and inheritance pattern · supplied Part 1 slide' },
    questions: [
      ['What does a shaded symbol usually represent in a pedigree?', 'An individual who shows the characteristic being tracked.'],
      ['For a recessive trait, what can unaffected parents of an affected child both be?', 'Heterozygous carriers, such as Aa.']
    ]
  },
  {
    n: 11, title: 'Genetic diagrams and phenotype ratios',
    text: 'Use a genetic diagram to predict a monohybrid cross and calculate its phenotypic ratio. Core ratios are limited to 1:1 and 3:1. List the parents, their gametes, the offspring and the visible phenotypes.',
    example: 'Tt × tt gives one tall : one dwarf (1:1). Tt × Tt gives three tall : one dwarf (3:1), when T is dominant.',
    questions: [
      ['What phenotype ratio is expected from Tt × tt?', '1 tall : 1 dwarf.'],
      ['What phenotype ratio is expected from Tt × Tt?', '3 tall : 1 dwarf.']
    ]
  },
  {
    n: 12, title: 'Punnett squares and possible genotypes',
    text: 'In a Punnett square, place one parent’s gametes along the top and the other parent’s down the side. Combine the alleles in each cell to show all possible offspring genotypes.',
    example: 'Tt × Tt gives 1 TT : 2 Tt : 1 tt. That is a genotype ratio; if T is dominant, the phenotype ratio is 3 tall : 1 dwarf.',
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
    example: 'For E/e, an unknown E_ × ee that produces about 1 E_ : 1 ee offspring is heterozygous Ee. Many offspring give a more reliable pattern than a very small sample.',
    image: { src: '/ppt-assets/part2_image-7-1.jpg', alt: 'Dogs illustrating the unknown-parent and tester idea in the supplied lesson', caption: 'Test-cross example image from the supplied Part 2 slides' },
    questions: [
      ['Which genotype is used as the tester?', 'Homozygous recessive, such as ee.'],
      ['What does a recessive offspring reveal about a dominant-looking unknown parent?', 'The unknown parent carries a recessive allele, so it is heterozygous.']
    ]
  },
  {
    n: 14, title: 'Codominance',
    text: 'In codominance (共顯性), both alleles in a heterozygous organism contribute to its phenotype. Neither allele masks the other.',
    example: 'Roan cattle have both red and white hairs. The two colours remain visible rather than blending into a third colour.',
    image: { src: '/ppt-assets/part2_image-13-1.jpg', alt: 'Roan cattle in a field, showing the codominance example from Part 2', caption: 'Roan cattle · supplied Part 2 slide' },
    questions: [
      ['What happens to both alleles in a codominant heterozygote?', 'Both contribute to the phenotype.'],
      ['Is roan a blend that hides red and white hairs?', 'No. Both red and white hairs are visible.']
    ]
  },
  {
    n: 15, title: 'ABO blood groups',
    text: 'ABO blood groups (ABO血型) have four phenotypes: A, B, AB and O. Each person has two alleles chosen from Iᴬ, Iᴮ and Iᵒ. Iᴬ and Iᴮ are codominant; both are dominant to Iᵒ. Red blood cell antigens (抗原) determine the group.',
    example: 'A: IᴬIᴬ or IᴬIᵒ · B: IᴮIᴮ or IᴮIᵒ · AB: IᴬIᴮ · O: IᵒIᵒ.',
    image: { src: '/ppt-assets/part2_image-16-1.png', alt: 'An ABO Punnett square from the supplied Part 2 slides', caption: 'ABO cross diagram · supplied Part 2 slide' },
    questions: [
      ['What is the genotype of a person with group AB?', 'IᴬIᴮ.'],
      ['What two genotypes can produce group A?', 'IᴬIᴬ or Iᴬi.']
    ]
  },
  {
    n: 16, title: 'Sex-linked characteristics',
    text: 'A sex-linked characteristic is controlled by a gene on a sex chromosome. This location can make the characteristic more common in one sex than another. Many examples involve genes on the X chromosome.',
    example: 'In humans, females are usually XX and males XY; ova carry X, while sperm carry X or Y, giving an expected 1:1 ratio. Fathers pass X to daughters and Y to sons, so an X-linked allele is not passed father to son. An XY male has one X allele for many X-linked genes.',
    image: { src: '/ppt-assets/part2_image-19-1.png', alt: 'X and Y sex chromosomes shown in the supplied Part 2 slides', caption: 'Sex chromosomes · supplied Part 2 slide' },
    questions: [
      ['Where is the gene for a sex-linked characteristic located?', 'On a sex chromosome.'],
      ['Why can a recessive allele on the X chromosome be expressed in an XY male?', 'There may be no corresponding allele on the Y chromosome to mask it.']
    ]
  },
  {
    n: 17, title: 'Red–green colour blindness',
    text: 'Red–green colour blindness is an example of X-linked recessive inheritance (紅綠色盲). Use Xᴿ for the typical dominant allele and Xʳ for the recessive allele. A female XᴿXʳ is an unaffected carrier; an XʳY male is affected.',
    example: 'A female usually needs XʳXʳ to be affected. A male with XʳY is affected because the Y chromosome does not carry a matching allele for this gene.',
    image: { src: '/ppt-assets/part2_image-20-1.png', alt: 'A chromosome diagram illustrating a sex-linked gene location', caption: 'X-linked gene diagram · supplied Part 2 slide' },
    questions: [
      ['What genotype represents a carrier female?', 'XᴿXʳ.'],
      ['What genotype represents an affected male?', 'XʳY.']
    ]
  },
  {
    n: 18, title: 'Crosses involving codominance or sex linkage',
    text: 'Use genetic diagrams to predict monohybrid crosses involving codominance or sex linkage, then calculate phenotype ratios. Write sex chromosomes with the allele attached to X; do not add an X-linked allele to Y.',
    example: 'XᴿXʳ × XᴿY gives four equally likely genotypes: XᴿXᴿ, XᴿXʳ, XᴿY and XʳY. Half of sons are expected to be affected; one quarter of all children are expected to be affected.',
    questions: [
      ['For XᴿXʳ × XᴿY, what fraction of sons are expected to be XʳY?', 'One half (50%) of sons.'],
      ['For the same cross, what fraction of all children are expected to be XʳY?', 'One quarter (25%) of all children.']
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
  const imageMarkup = point.image
    ? `<div class="card-visual"><figure class="image-frame"><img src="${escapeHTML(point.image.src)}" alt="${escapeHTML(point.image.alt)}" loading="lazy" /><figcaption>${escapeHTML(point.image.caption)}</figcaption></figure><p class="visual-note">${escapeHTML(point.example || '')}</p></div>`
    : `<p class="example-line"><strong>Apply it:</strong> ${escapeHTML(point.example || '')}</p>`;
  return `<article class="objective-card${extended ? ' extended-card' : ''}" aria-labelledby="point-${point.n}-title">
    <div class="objective-head"><span class="objective-number">${String(point.n).padStart(2, '0')}</span><span class="scope-tag">${label}</span><h3 id="point-${point.n}-title">${escapeHTML(point.title)}</h3></div>
    <p class="explanation">${escapeHTML(point.text)}</p>
    ${imageMarkup}
    <div class="quick-checks"><h4 class="visually-hidden">Two questions for syllabus point ${point.n}</h4>${point.questions.map((q, i) => renderQuestion(q, i, point.n)).join('')}</div>
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
